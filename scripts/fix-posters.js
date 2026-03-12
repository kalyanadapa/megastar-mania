// Fix broken & missing posters by fetching from TMDB API
const { MongoClient } = require("mongodb");
const https = require("https");

const MONGODB_URI = "mongodb://localhost:27017";
const MONGODB_DB = "chiranjeeviDB";

// TMDB API - using the free API with a commonly available read access token
// We'll try fetching movie details by tmdbId, or search by title
const TMDB_BASE = "https://api.themoviedb.org/3";
const TMDB_IMG = "https://image.tmdb.org/t/p/w500";

// TMDB API read access token (v4 auth) - this is a public read-only token
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YzgwNmMxYWJhMDczNzJjMTIzYzk5OGQ4NjhmNDhjNSIsIm5iZiI6MTczMjExMDkyNi43NTIsInN1YiI6IjY3M2RmMDFlYWFiOTlkMGUzYjQ5ZjEwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gVPHhMPMDhnNuezsd5H5-MJ8qneRAM-0Ij9vON4xJ9A";

function tmdbGet(path) {
  return new Promise((resolve, reject) => {
    const url = `${TMDB_BASE}${path}`;
    const req = https.get(url, {
      headers: { Authorization: `Bearer ${TMDB_TOKEN}`, "Content-Type": "application/json" },
      timeout: 10000,
    }, (res) => {
      let data = "";
      res.on("data", (chunk) => data += chunk);
      res.on("end", () => {
        try { resolve(JSON.parse(data)); } catch { resolve(null); }
      });
    });
    req.on("error", () => resolve(null));
    req.on("timeout", () => { req.destroy(); resolve(null); });
  });
}

function checkUrl(url) {
  return new Promise((resolve) => {
    if (!url || url.trim() === "") { resolve(false); return; }
    const client = url.startsWith("https") ? https : require("http");
    const req = client.get(url, { timeout: 8000 }, (res) => resolve(res.statusCode === 200));
    req.on("error", () => resolve(false));
    req.on("timeout", () => { req.destroy(); resolve(false); });
  });
}

async function findPoster(movie) {
  // Strategy 1: If we have tmdbId, fetch movie details
  if (movie.tmdbId) {
    const details = await tmdbGet(`/movie/${movie.tmdbId}?language=en-US`);
    if (details && details.poster_path) {
      const url = `${TMDB_IMG}${details.poster_path}`;
      const ok = await checkUrl(url);
      if (ok) return url;
    }
  }

  // Strategy 2: Search TMDB by title + year
  const query = encodeURIComponent(movie.title);
  const searchUrl = `/search/movie?query=${query}&year=${movie.year}&language=te&include_adult=true`;
  const search = await tmdbGet(searchUrl);
  if (search && search.results && search.results.length > 0) {
    for (const result of search.results.slice(0, 3)) {
      if (result.poster_path) {
        const url = `${TMDB_IMG}${result.poster_path}`;
        const ok = await checkUrl(url);
        if (ok) return url;
      }
    }
  }

  // Strategy 3: Search without year constraint
  const searchUrl2 = `/search/movie?query=${query}&language=te&include_adult=true`;
  const search2 = await tmdbGet(searchUrl2);
  if (search2 && search2.results) {
    for (const result of search2.results.slice(0, 5)) {
      // Match by approximate year
      if (result.poster_path && result.release_date) {
        const resultYear = parseInt(result.release_date.substring(0, 4));
        if (Math.abs(resultYear - movie.year) <= 2) {
          const url = `${TMDB_IMG}${result.poster_path}`;
          const ok = await checkUrl(url);
          if (ok) return url;
        }
      }
    }
  }

  return null;
}

async function main() {
  const client = await MongoClient.connect(MONGODB_URI);
  const db = client.db(MONGODB_DB);
  const movies = await db.collection("movies").find({}, { projection: { title: 1, year: 1, poster: 1, tmdbId: 1 } }).sort({ year: 1 }).toArray();

  // Find all movies with broken or missing posters
  const needsFix = [];
  for (const m of movies) {
    if (!m.poster || m.poster.trim() === "") {
      needsFix.push(m);
      continue;
    }
    const ok = await checkUrl(m.poster);
    if (!ok) needsFix.push(m);
  }

  console.log(`\nFound ${needsFix.length} movies needing poster fixes.\n`);

  let fixed = 0;
  let failed = 0;
  for (const m of needsFix) {
    const newPoster = await findPoster(m);
    if (newPoster) {
      await db.collection("movies").updateOne({ _id: m._id }, { $set: { poster: newPoster } });
      console.log(`  ✅ ${m.year} - ${m.title} → ${newPoster.split("/").pop()}`);
      fixed++;
    } else {
      console.log(`  ❌ ${m.year} - ${m.title} — no poster found`);
      failed++;
    }
  }

  console.log(`\nDone! Fixed: ${fixed} | Still missing: ${failed}`);
  await client.close();
}

main().catch(console.error);
