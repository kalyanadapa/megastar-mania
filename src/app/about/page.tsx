import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tribute — Megastar Mania",
  description:
    "A heartfelt tribute to Megastar Chiranjeevi — the legend of Telugu cinema.",
};

const milestones = [
  {
    year: "1978",
    title: "The Beginning",
    desc: "Debuted with 'Pranam Khareedu' — a star was born. The son of a constable from Mogalturu stepped into the world of Telugu cinema, and nothing was ever the same.",
  },
  {
    year: "1980s",
    title: "Rise of the Megastar",
    desc: "Movies like 'Khaidi', 'Pasivadi Pranam', 'Donga', and 'Kondaveeti Donga' established him as the undisputed mass hero. His dance moves became a national obsession.",
  },
  {
    year: "1990s",
    title: "Untouchable Reign",
    desc: "'Master', 'Mutamestri', 'Big Boss', 'Gharana Mogudu', 'State Rowdy' — every film was a festival. He owned the box office like no one before.",
  },
  {
    year: "2002",
    title: "Indra — The Phenomenon",
    desc: "Indrasena Reddy / Shankar Narayana became the most iconic dual role in Telugu cinema history. The 'introduction scene' is still shared across generations.",
  },
  {
    year: "2003-06",
    title: "Tagore & Stalin Era",
    desc: "From vigilante professor to social reformer, Chiranjeevi proved he could carry powerful messages while keeping the mass appeal intact.",
  },
  {
    year: "2009",
    title: "PRP — Into Politics",
    desc: "Founded Praja Rajyam Party, proving his commitment to public service. Though brief, his political journey showcased his genuine love for the people.",
  },
  {
    year: "2017",
    title: "The Comeback — Khaidi No. 150",
    desc: "After a decade away from cinema, the Megastar returned. Fans queued for miles. Theatres turned into temples. The reentry shattered records.",
  },
  {
    year: "2019",
    title: "Sye Raa — Epic Scale",
    desc: "Portraying freedom fighter Uyyalawada Narasimha Reddy, Chiranjeevi delivered an epic performance that served as a reminder: legends don't fade.",
  },
  {
    year: "2023+",
    title: "Unstoppable",
    desc: "Waltair Veerayya, Bholaa Shankar, and upcoming projects — at 68, the Megastar continues to captivate millions. There is no retirement for a legend.",
  },
];

const techStack = [
  {
    name: "Next.js App Router",
    desc: "Server Components, SSR, dynamic routes, API routes, metadata API",
    icon: "⚡",
  },
  {
    name: "TypeScript",
    desc: "Full type safety across components, API routes, and database models",
    icon: "🔷",
  },
  {
    name: "MongoDB",
    desc: "Native driver with aggregation pipelines, indexing, connection pooling",
    icon: "🍃",
  },
  {
    name: "Tailwind CSS v4",
    desc: "Utility-first styling with custom theme, responsive design, dark mode",
    icon: "🎨",
  },
  {
    name: "Server-Side Rendering",
    desc: "All pages fetch data server-side for SEO and performance",
    icon: "🖥️",
  },
  {
    name: "REST API Design",
    desc: "RESTful endpoints with filtering, pagination, sorting, and search",
    icon: "🔌",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <section className="text-center mb-20">
          <span className="text-amber-400/80 text-sm tracking-[0.3em] uppercase font-medium">
            A Fan&apos;s Love Letter
          </span>
          <h1 className="text-4xl md:text-6xl font-black mt-4 mb-6">
            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-red-500 bg-clip-text text-transparent">
              Why Chiranjeevi
            </span>
            <br />
            <span className="text-white text-3xl md:text-4xl">
              Means Everything To Me
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Growing up in Telugu households, Chiranjeevi wasn&apos;t just an actor on
            screen — he was the rhythm of our festivals, the unifying emotion for
            our family gatherings, and the definition of what a hero looks like.
            This website is my tribute, and also my canvas to showcase what I can
            build as a developer.
          </p>
        </section>

        {/* Timeline */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-center mb-2 text-white">
            The Megastar Timeline
          </h2>
          <p className="text-gray-500 text-center mb-10">
            Four decades of cinematic brilliance
          </p>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500 via-red-500 to-amber-500 opacity-30" />

            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`relative flex items-start gap-6 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-3 h-3 bg-amber-500 rounded-full border-2 border-black z-10 mt-2" />

                  {/* Content */}
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${
                      i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                    }`}
                  >
                    <span className="text-amber-400 font-mono font-bold text-sm">
                      {m.year}
                    </span>
                    <h3 className="text-white font-bold text-lg mt-1">
                      {m.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mt-1">
                      {m.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Showcase */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-center mb-2 text-white">
            Built With
          </h2>
          <p className="text-gray-500 text-center mb-10">
            Full-stack Next.js skills demonstrated in this project
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 hover:border-amber-500/30 transition-all group"
              >
                <div className="text-2xl mb-2">{tech.icon}</div>
                <h3 className="text-white font-semibold group-hover:text-amber-400 transition-colors">
                  {tech.name}
                </h3>
                <p className="text-gray-500 text-sm mt-1">{tech.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Architecture highlight */}
        <section className="mb-20 bg-gradient-to-r from-amber-500/5 to-red-500/5 border border-amber-500/10 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-amber-400 mb-4">
            🏗️ Architecture Highlights
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h3 className="text-white font-semibold mb-2">Server Components</h3>
              <p className="text-gray-400">
                Pages fetch data directly from MongoDB using server components —
                no client-side loading states, no waterfalls. The homepage, filmography,
                and movie detail pages all render with data on the server.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Client Interactivity</h3>
              <p className="text-gray-400">
                Filtering and sorting on the filmography page use client components
                with React hooks (`useState`, `useMemo`) for instant UI feedback 
                without additional network requests.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">API Routes</h3>
              <p className="text-gray-400">
                Full REST API at `/api/movies` with query params for filtering by
                genre, search, pagination, and sorting. Plus `/api/stats` for
                aggregation pipeline results.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">MongoDB Integration</h3>
              <p className="text-gray-400">
                Connection pooling via cached client, aggregation pipelines for stats,
                text indexes for search, and proper ObjectId handling for document queries.
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="text-center py-10">
          <p className="text-3xl md:text-4xl font-black bg-gradient-to-r from-amber-400 to-red-500 bg-clip-text text-transparent mb-4">
            Jai Megastar! 🌟
          </p>
          <p className="text-gray-500 text-sm">
            Built with passion, powered by Next.js + MongoDB
          </p>
        </section>
      </div>
    </main>
  );
}
