import { ObjectId } from "mongodb";

export interface Movie {
  _id?: ObjectId | string;
  title: string;
  year: number;
  director: string;
  role: string;
  source?: string;
  tmdbId?: number;
  poster: string;
  genres: string[];
  releaseDate: string;
  runtime: number;
  rating: number;
  overview: string;
  cast: string[];
}

export interface MovieCardProps {
  movie: Movie;
}

export type SortOption = "year-desc" | "year-asc" | "rating-desc" | "rating-asc" | "title-asc";
