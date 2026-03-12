export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 mt-auto">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.svg" alt="Megastar Mania" className="w-9 h-9" />
              <span className="text-lg font-bold tracking-wide text-white">MEGASTAR <span className="font-light text-gray-400">MANIA</span></span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-md">
              A fan-built tribute to the one and only Megastar Chiranjeevi. Celebrating 47+ years of cinematic excellence that defined Telugu cinema.
            </p>
          </div>

          {/* Tech */}
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-gray-400 font-semibold mb-4">Built With</h4>
            <ul className="text-gray-500 text-sm space-y-2">
              <li className="hover:text-gray-300 transition-colors">Next.js 14 &bull; App Router</li>
              <li className="hover:text-gray-300 transition-colors">TypeScript &bull; React 18</li>
              <li className="hover:text-gray-300 transition-colors">MongoDB &bull; Aggregation</li>
              <li className="hover:text-gray-300 transition-colors">Tailwind CSS</li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-gray-400 font-semibold mb-4">Features</h4>
            <ul className="text-gray-500 text-sm space-y-2">
              <li className="hover:text-gray-300 transition-colors">Server-Side Rendering</li>
              <li className="hover:text-gray-300 transition-colors">REST API Routes</li>
              <li className="hover:text-gray-300 transition-colors">Dynamic Routing &bull; SEO</li>
              <li className="hover:text-gray-300 transition-colors">Responsive Design</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/5 text-center text-gray-600 text-xs tracking-wider">
          <p>Made with love by a Megastar fan &bull; Data sourced from TMDB &bull; Not affiliated with any production house</p>
        </div>
      </div>
    </footer>
  );
}
