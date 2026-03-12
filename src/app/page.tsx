import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import MovieCard from "@/components/MovieCard";
import StatsDisplay from "@/components/StatsDisplay";
import { connectToDatabase } from "@/lib/mongodb";
import { Movie } from "@/lib/types";

async function getFeaturedMovies(): Promise<Movie[]> {
  const { db } = await connectToDatabase();
  const movies = await db
    .collection("movies")
    .find({})
    .sort({ rating: -1 })
    .limit(5)
    .toArray();
  return JSON.parse(JSON.stringify(movies));
}

async function getLatestMovies(): Promise<Movie[]> {
  const { db } = await connectToDatabase();
  const movies = await db
    .collection("movies")
    .find({})
    .sort({ year: -1 })
    .limit(5)
    .toArray();
  return JSON.parse(JSON.stringify(movies));
}

async function getStats() {
  const { db } = await connectToDatabase();

  const overview = await db
    .collection("movies")
    .aggregate([
      {
        $group: {
          _id: null,
          totalMovies: { $sum: 1 },
          avgRating: { $avg: "$rating" },
          totalRuntime: { $sum: "$runtime" },
          highestRated: { $max: "$rating" },
        },
      },
    ])
    .toArray();

  const genreDistribution = await db
    .collection("movies")
    .aggregate([
      { $unwind: "$genres" },
      { $group: { _id: "$genres", count: { $sum: 1 } } },
      { $sort: { count: -1 } },
    ])
    .toArray();

  const decadeDistribution = await db
    .collection("movies")
    .aggregate([
      {
        $group: {
          _id: { $subtract: ["$year", { $mod: ["$year", 10] }] },
          count: { $sum: 1 },
          avgRating: { $avg: "$rating" },
        },
      },
      { $sort: { _id: 1 } },
    ])
    .toArray();

  return JSON.parse(
    JSON.stringify({
      overview: overview[0] || {},
      genreDistribution,
      decadeDistribution,
    })
  );
}

export default async function Home() {
  const [featured, latest, stats] = await Promise.all([
    getFeaturedMovies(),
    getLatestMovies(),
    getStats(),
  ]);

  return (
    <main>
      <HeroSection />

      {/* Bio Section — cinematic introduction */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left — Text */}
            <div>
              <span className="text-amber-400/80 text-xs tracking-[0.4em] uppercase font-medium">The Legend</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-6 leading-tight">
                Born to Rule the<br />
                <span className="bg-gradient-to-r from-amber-300 to-red-500 bg-clip-text text-transparent">Silver Screen</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Born as <span className="text-gray-200">Konidela Sivasankara Varaprasad</span> on 22 August 1955 in Mogalthur, Andhra Pradesh. Alumnus of Sri Y.N. College and Madras Film Institute. From his debut in 1978 to becoming the undisputed Megastar of Telugu cinema — his journey is the stuff of legend.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span className="text-gray-300 text-sm">Padma Vibhushan (2024) &bull; Padma Bhushan (2006)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span className="text-gray-300 text-sm">Union Minister of State for Tourism (2012–2014)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span className="text-gray-300 text-sm">Member of Parliament, Rajya Sabha (2012–2018)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span className="text-gray-300 text-sm">Married to Surekha (1980) &bull; Father of Ram Charan</span>
                </div>
              </div>
            </div>

            {/* Right — Image card */}
            <div className="relative">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl shadow-amber-900/20 border border-white/5">
                <Image
                  src="https://res.cloudinary.com/dh0xxfq9y/image/upload/v1773320791/HD-wallpaper-chiranjeevi-actor-chiru-mega-star-chiranjeev-megastar-telugu_ura6xj.jpg"
                  alt="Chiranjeevi — Megastar"
                  fill
                  className="object-cover object-top"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-br from-amber-500 to-red-600 px-6 py-3 shadow-xl">
                <span className="text-black font-black text-lg tracking-wide">MEGA STAR</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Movies */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="flex items-center justify-between mb-10">
          <div>
            <span className="text-amber-400/80 text-xs tracking-[0.4em] uppercase font-medium">Collection</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mt-2">
              Top Rated Films
            </h2>
          </div>
          <a
            href="/filmography"
            className="text-sm font-medium tracking-wider uppercase text-gray-400 hover:text-amber-400 transition-colors"
          >
            View All &rarr;
          </a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {featured.map((movie) => (
            <MovieCard key={movie._id?.toString()} movie={movie} />
          ))}
        </div>
      </section>

      {/* Latest Movies */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-10">
        <div className="flex items-center justify-between mb-10">
          <div>
            <span className="text-amber-400/80 text-xs tracking-[0.4em] uppercase font-medium">Recent</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mt-2">
              Latest Releases
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {latest.map((movie) => (
            <MovieCard key={movie._id?.toString()} movie={movie} />
          ))}
        </div>
      </section>

      {/* Stats section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <StatsDisplay stats={stats} />
      </section>

      {/* Fan quote — cinematic */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950/50 to-black" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="w-12 h-[2px] bg-gradient-to-r from-amber-400 to-red-500 mx-auto mb-8" />
          <blockquote className="text-2xl md:text-4xl font-bold text-gray-200 leading-relaxed">
            &ldquo;Every frame he is in, he owns. Every dialogue he delivers,
            becomes immortal. He is not just an actor — he is an emotion.&rdquo;
          </blockquote>
          <p className="text-amber-400/80 mt-6 text-sm tracking-widest uppercase font-medium">
            — A Devoted Megastar Fan
          </p>
        </div>
      </section>
    </main>
  );
}
