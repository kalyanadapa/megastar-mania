import Image from "next/image";
import Link from "next/link";
import { connectToDatabase } from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { Movie } from "@/lib/types";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface PageProps {
  params: { id: string };
}

async function getMovie(id: string): Promise<Movie | null> {
  const { db } = await connectToDatabase();
  if (!ObjectId.isValid(id)) return null;
  const movie = await db
    .collection("movies")
    .findOne({ _id: new ObjectId(id) });
  if (!movie) return null;
  return JSON.parse(JSON.stringify(movie));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = params;
  const movie = await getMovie(id);
  if (!movie) return { title: "Movie Not Found" };
  return {
    title: `${movie.title} (${movie.year}) — Megastar Mania`,
    description: movie.overview || "",
    openGraph: {
      title: `${movie.title} — Chiranjeevi`,
      description: movie.overview || "",
      images: movie.poster ? [movie.poster] : [],
    },
  };
}

export default async function MoviePage({ params }: PageProps) {
  const { id } = params;
  const movie = await getMovie(id);

  if (!movie) notFound();

  return (
    <main className="min-h-screen pt-20">
      {/* Backdrop gradient */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/10 to-transparent h-96" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
          {/* Back button */}
          <Link
            href="/filmography"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-amber-400 transition-colors mb-8 text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Filmography
          </Link>

          <div className="grid md:grid-cols-[300px_1fr] gap-8 lg:gap-12">
            {/* Poster */}
            <div className="relative aspect-[2/3] rounded-xl overflow-hidden shadow-2xl shadow-black/50 border border-gray-800">
              <Image
                src={movie.poster || "/placeholder.svg"}
                alt={movie.title}
                fill
                sizes="300px"
                className="object-cover"
                priority
                unoptimized
              />
            </div>

            {/* Details */}
            <div>
              <div className="flex items-start gap-4 mb-2">
                <h1 className="text-3xl md:text-5xl font-black text-white leading-tight">
                  {movie.title}
                </h1>
                {movie.rating > 0 && (
                  <span className="mt-2 bg-amber-500/20 text-amber-400 px-3 py-1 rounded-lg text-sm font-bold whitespace-nowrap">
                    ⭐ {movie.rating.toFixed(1)}
                  </span>
                )}
              </div>

              <p className="text-gray-400 text-lg mb-6">
                {movie.year}
                {movie.runtime ? ` • ${movie.runtime} min` : ""}
                {movie.director ? ` • Directed by ` : ""}
                {movie.director && <span className="text-gray-300">{movie.director}</span>}
              </p>

              {/* Chiranjeevi's role */}
              <div className="bg-gradient-to-r from-amber-500/10 to-red-500/10 border border-amber-500/20 rounded-xl p-5 mb-6">
                <p className="text-amber-400/80 text-xs uppercase tracking-wider mb-1 font-medium">
                  Chiranjeevi&apos;s Role
                </p>
                <p className="text-white text-xl font-bold">{movie.role || "Unknown"}</p>
              </div>

              {/* Genres */}
              <div className="flex flex-wrap gap-2 mb-6">
                {(movie.genres || []).map((genre) => (
                  <span
                    key={genre}
                    className="px-4 py-1.5 rounded-full text-sm bg-gray-800 text-gray-300 border border-gray-700"
                  >
                    {genre}
                  </span>
                ))}
              </div>

              {/* Overview */}
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-200 mb-2">
                  Overview
                </h2>
                <p className="text-gray-400 leading-relaxed">{movie.overview || "No overview available."}</p>
              </div>

              {/* Cast */}
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-200 mb-3">
                  Cast
                </h2>
                <div className="flex flex-wrap gap-2">
                  {(movie.cast || []).map((actor) => (
                    <span
                      key={actor}
                      className={`px-3 py-1.5 rounded-lg text-sm border ${
                        actor === "Chiranjeevi"
                          ? "bg-amber-500/20 text-amber-400 border-amber-500/30 font-semibold"
                          : "bg-gray-900 text-gray-400 border-gray-800"
                      }`}
                    >
                      {actor === "Chiranjeevi" ? "🌟 " : ""}
                      {actor}
                    </span>
                  ))}
                </div>
              </div>

              {/* Movie metadata */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-3 text-center">
                  <p className="text-gray-500 text-xs">Release</p>
                  <p className="text-gray-200 font-medium text-sm">
                    {movie.releaseDate ? new Date(movie.releaseDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    }) : "N/A"}
                  </p>
                </div>
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-3 text-center">
                  <p className="text-gray-500 text-xs">Runtime</p>
                  <p className="text-gray-200 font-medium text-sm">
                    {movie.runtime ? `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}m` : "N/A"}
                  </p>
                </div>
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-3 text-center">
                  <p className="text-gray-500 text-xs">TMDB ID</p>
                  <p className="text-gray-200 font-medium text-sm">
                    {movie.tmdbId || "N/A"}
                  </p>
                </div>
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-3 text-center">
                  <p className="text-gray-500 text-xs">Source</p>
                  <p className="text-gray-200 font-medium text-sm capitalize">
                    {movie.source || "N/A"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
