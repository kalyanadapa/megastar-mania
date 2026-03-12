"use client";

import { Movie, SortOption } from "@/lib/types";
import MovieCard from "./MovieCard";
import { useState, useMemo } from "react";

interface FilmographyGridProps {
  movies: Movie[];
  allGenres: string[];
}

export default function FilmographyGrid({ movies, allGenres }: FilmographyGridProps) {
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [sortBy, setSortBy] = useState<SortOption>("year-desc");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = useMemo(() => {
    let result = [...movies];

    if (selectedGenre !== "all") {
      result = result.filter((m) => (m.genres || []).includes(selectedGenre));
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (m) =>
          m.title.toLowerCase().includes(q) ||
          (m.role || "").toLowerCase().includes(q) ||
          (m.overview || "").toLowerCase().includes(q)
      );
    }

    result.sort((a, b) => {
      switch (sortBy) {
        case "year-desc": return b.year - a.year;
        case "year-asc": return a.year - b.year;
        case "rating-desc": return b.rating - a.rating;
        case "rating-asc": return a.rating - b.rating;
        case "title-asc": return a.title.localeCompare(b.title);
        default: return 0;
      }
    });

    return result;
  }, [movies, selectedGenre, sortBy, searchQuery]);

  return (
    <div>
      {/* Filters bar */}
      <div className="mb-8 space-y-4">
        {/* Search */}
        <div className="relative max-w-md">
          <input
            type="text"
            placeholder="Search movies, roles, storylines..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2.5 pl-10 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/30 transition-all"
          />
          <svg
            className="absolute left-3 top-3 w-4 h-4 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <div className="flex flex-wrap gap-3 items-center">
          {/* Genre pills */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedGenre("all")}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                selectedGenre === "all"
                  ? "bg-amber-500 text-black"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700"
              }`}
            >
              All
            </button>
            {allGenres.map((genre) => (
              <button
                key={genre}
                onClick={() => setSelectedGenre(genre)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  selectedGenre === genre
                    ? "bg-amber-500 text-black"
                    : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                }`}
              >
                {genre}
              </button>
            ))}
          </div>

          {/* Sort dropdown */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="bg-gray-900 border border-gray-700 rounded-lg px-3 py-1.5 text-sm text-gray-300 focus:outline-none focus:border-amber-500/50"
          >
            <option value="year-desc">Newest First</option>
            <option value="year-asc">Oldest First</option>
            <option value="rating-desc">Highest Rated</option>
            <option value="rating-asc">Lowest Rated</option>
            <option value="title-asc">Title A-Z</option>
          </select>
        </div>
      </div>

      {/* Results count */}
      <p className="text-gray-500 text-sm mb-4">
        Showing {filtered.length} of {movies.length} movies
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filtered.map((movie) => (
            <MovieCard key={movie._id?.toString()} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg">No movies found matching your criteria.</p>
          <button
            onClick={() => {
              setSelectedGenre("all");
              setSearchQuery("");
            }}
            className="mt-4 text-amber-400 hover:text-amber-300 text-sm underline"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
