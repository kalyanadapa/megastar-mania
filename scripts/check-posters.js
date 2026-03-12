const { MongoClient } = require("mongodb");
const https = require("https");
const http = require("http");

const MONGODB_URI = "mongodb://localhost:27017";
const MONGODB_DB = "chiranjeeviDB";

function checkUrl(url) {
  return new Promise((resolve) => {
    if (!url || url.trim() === "") {
      resolve({ status: "MISSING", code: 0 });
      return;
    }
    const client = url.startsWith("https") ? https : http;
    const req = client.get(url, { timeout: 10000 }, (res) => {
      resolve({ status: res.statusCode === 200 ? "OK" : "BROKEN", code: res.statusCode });
    });
    req.on("error", () => resolve({ status: "ERROR", code: 0 }));
    req.on("timeout", () => { req.destroy(); resolve({ status: "TIMEOUT", code: 0 }); });
  });
}

async function main() {
  const client = await MongoClient.connect(MONGODB_URI);
  const db = client.db(MONGODB_DB);
  const movies = await db.collection("movies").find({}, { projection: { title: 1, year: 1, poster: 1 } }).sort({ year: 1 }).toArray();

  const broken = [];
  const missing = [];

  for (const m of movies) {
    const poster = m.poster;
    if (!poster || poster.trim() === "") {
      missing.push({ _id: m._id, title: m.title, year: m.year, poster: poster || "" });
      process.stdout.write("X");
      continue;
    }
    const result = await checkUrl(poster);
    if (result.status !== "OK") {
      broken.push({ _id: m._id, title: m.title, year: m.year, poster, status: result.status, code: result.code });
      process.stdout.write("!");
    } else {
      process.stdout.write(".");
    }
  }

  console.log("\n\n=== MISSING POSTER (no URL) ===");
  missing.forEach(m => console.log(`  ${m.year} - ${m.title}`));
  console.log(`\n=== BROKEN POSTER (URL fails) ===`);
  broken.forEach(m => console.log(`  ${m.year} - ${m.title} [${m.status} ${m.code}] ${m.poster}`));
  console.log(`\nTotal: ${movies.length} | OK: ${movies.length - broken.length - missing.length} | Broken: ${broken.length} | Missing: ${missing.length}`);

  await client.close();
}

main().catch(console.error);
