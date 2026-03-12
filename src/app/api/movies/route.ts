import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";

export async function GET(request: NextRequest) {
  try {
    const { db } = await connectToDatabase();
    const { searchParams } = new URL(request.url);

    const genre = searchParams.get("genre");
    const sort = searchParams.get("sort") || "year-desc";
    const search = searchParams.get("search");
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "20", 10);

    const filter: Record<string, unknown> = {};

    if (genre && genre !== "all") {
      filter.genres = genre;
    }

    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: "i" } },
        { overview: { $regex: search, $options: "i" } },
        { role: { $regex: search, $options: "i" } },
      ];
    }

    const sortMap: Record<string, Record<string, 1 | -1>> = {
      "year-desc": { year: -1 },
      "year-asc": { year: 1 },
      "rating-desc": { rating: -1 },
      "rating-asc": { rating: 1 },
      "title-asc": { title: 1 },
    };

    const sortOption = sortMap[sort] || { year: -1 };

    const skip = (page - 1) * limit;
    const [movies, total] = await Promise.all([
      db
        .collection("movies")
        .find(filter)
        .sort(sortOption)
        .skip(skip)
        .limit(limit)
        .toArray(),
      db.collection("movies").countDocuments(filter),
    ]);

    return NextResponse.json({
      movies,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    console.error("Failed to fetch movies:", error);
    return NextResponse.json(
      { error: "Failed to fetch movies" },
      { status: 500 }
    );
  }
}
