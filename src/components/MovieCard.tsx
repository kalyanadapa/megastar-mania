import Image from "next/image";
import Link from "next/link";
import { Movie } from "@/lib/types";

export default function MovieCard({ movie }: { movie: Movie }) {
  const id = typeof movie._id === "string" ? movie._id : movie._id?.toString();

  return (
    <Link href={`/movie/${id}`} className="group block">
      <div className="relative bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-amber-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10 hover:-translate-y-1">
        {/* Poster */}
        <div className="relative aspect-[2/3] overflow-hidden bg-gray-800">
          <Image
            src={movie.poster || "/placeholder.svg"}
            alt={movie.title}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            unoptimized
          />
          {/* Rating badge */}
          {movie.rating > 0 && (
            <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm text-amber-400 text-xs font-bold px-2 py-1 rounded-lg">
              ⭐ {movie.rating.toFixed(1)}
            </div>
          )}
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Info */}
        <div className="p-3">
          <h3 className="text-white font-semibold text-sm truncate group-hover:text-amber-400 transition-colors">
            {movie.title}
          </h3>
          <p className="text-gray-400 text-xs mt-1">
            {movie.year}{movie.runtime ? ` • ${movie.runtime} min` : ""}
          </p>
          {movie.role && <p className="text-amber-500/80 text-xs mt-1 truncate italic">&quot;{movie.role}&quot;</p>}
          <div className="flex flex-wrap gap-1 mt-2">
            {(movie.genres || []).slice(0, 2).map((genre) => (
              <span
                key={genre}
                className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20"
              >
                {genre}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
