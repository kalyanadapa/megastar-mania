import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";

export async function GET() {
  try {
    const { db } = await connectToDatabase();

    const stats = await db
      .collection("movies")
      .aggregate([
        {
          $group: {
            _id: null,
            totalMovies: { $sum: 1 },
            avgRating: { $avg: "$rating" },
            totalRuntime: { $sum: "$runtime" },
            genres: { $addToSet: "$genres" },
            years: { $addToSet: "$year" },
            highestRated: { $max: "$rating" },
            lowestRated: { $min: "$rating" },
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

    return NextResponse.json({
      overview: stats[0] || {},
      genreDistribution,
      decadeDistribution,
    });
  } catch (error) {
    console.error("Failed to fetch stats:", error);
    return NextResponse.json(
      { error: "Failed to fetch stats" },
      { status: 500 }
    );
  }
}
