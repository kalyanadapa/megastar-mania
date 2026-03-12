import { connectToDatabase } from "@/lib/mongodb";
import { Movie } from "@/lib/types";
import FilmographyGrid from "@/components/FilmographyGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Filmography — Megastar Mania",
  description:
    "Complete filmography of Megastar Chiranjeevi. Browse, search, and filter through decades of iconic movies.",
};

async function getAllMovies(): Promise<Movie[]> {
  const { db } = await connectToDatabase();
  const movies = await db
    .collection("movies")
    .find({})
    .sort({ year: -1 })
    .toArray();
  return JSON.parse(JSON.stringify(movies));
}

async function getAllGenres(): Promise<string[]> {
  const { db } = await connectToDatabase();
  const genres = await db
    .collection("movies")
    .distinct("genres");
  return genres.sort();
}

export default async function FilmographyPage() {
  const [movies, genres] = await Promise.all([getAllMovies(), getAllGenres()]);

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-black text-white mb-2">
            Filmography
          </h1>
          <p className="text-gray-400 max-w-2xl">
            Explore the legendary career of Megastar Chiranjeevi. Every movie, every 
            iconic role — all fetched server-side from MongoDB and rendered with 
            Next.js Server Components.
          </p>
          <div className="mt-3 inline-flex items-center gap-2 text-xs text-gray-600 bg-gray-900 px-3 py-1.5 rounded-lg border border-gray-800">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            SSR — Data fetched at request time from MongoDB
          </div>
        </div>

        <FilmographyGrid movies={movies} allGenres={genres} />
      </div>
    </main>
  );
}
