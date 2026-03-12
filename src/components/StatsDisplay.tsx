interface StatsDisplayProps {
  stats: {
    overview: {
      totalMovies?: number;
      avgRating?: number;
      totalRuntime?: number;
      highestRated?: number;
    };
    genreDistribution: { _id: string; count: number }[];
    decadeDistribution: { _id: number; count: number; avgRating: number }[];
  };
}

export default function StatsDisplay({ stats }: StatsDisplayProps) {
  const { overview, genreDistribution, decadeDistribution } = stats;

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-2">
        <span className="bg-gradient-to-r from-amber-400 to-red-400 bg-clip-text text-transparent">
          By The Numbers
        </span>
      </h2>
      <p className="text-gray-500 text-center mb-10">
        Aggregated stats from our MongoDB collection
      </p>

      {/* Overview cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 text-center">
          <div className="text-3xl font-black text-amber-400">
            {overview.totalMovies || 0}
          </div>
          <div className="text-gray-500 text-sm mt-1">Movies in DB</div>
        </div>
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 text-center">
          <div className="text-3xl font-black text-amber-400">
            {overview.avgRating?.toFixed(1) || "N/A"}
          </div>
          <div className="text-gray-500 text-sm mt-1">Avg Rating</div>
        </div>
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 text-center">
          <div className="text-3xl font-black text-amber-400">
            {overview.totalRuntime
              ? `${Math.round(overview.totalRuntime / 60)}h`
              : "N/A"}
          </div>
          <div className="text-gray-500 text-sm mt-1">Total Runtime</div>
        </div>
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 text-center">
          <div className="text-3xl font-black text-amber-400">
            ⭐ {overview.highestRated || "N/A"}
          </div>
          <div className="text-gray-500 text-sm mt-1">Highest Rated</div>
        </div>
      </div>

      {/* Genre distribution */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-200 mb-4">
            Genre Distribution
          </h3>
          <div className="space-y-3">
            {genreDistribution.map((g) => (
              <div key={g._id} className="flex items-center gap-3">
                <span className="text-gray-400 text-sm w-20">{g._id}</span>
                <div className="flex-1 bg-gray-800 rounded-full h-3 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-amber-500 to-red-500 rounded-full transition-all"
                    style={{
                      width: `${(g.count / (overview.totalMovies || 1)) * 100}%`,
                    }}
                  />
                </div>
                <span className="text-amber-400 text-sm font-mono w-6 text-right">
                  {g.count}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-200 mb-4">
            Movies by Decade
          </h3>
          <div className="space-y-3">
            {decadeDistribution.map((d) => (
              <div key={d._id} className="flex items-center gap-3">
                <span className="text-gray-400 text-sm w-20">{d._id}s</span>
                <div className="flex-1 bg-gray-800 rounded-full h-3 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-amber-500 to-red-500 rounded-full transition-all"
                    style={{
                      width: `${(d.count / (overview.totalMovies || 1)) * 100}%`,
                    }}
                  />
                </div>
                <span className="text-amber-400 text-sm font-mono w-6 text-right">
                  {d.count}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
