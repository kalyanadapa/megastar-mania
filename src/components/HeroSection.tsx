"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const heroImages = [
  "https://res.cloudinary.com/dh0xxfq9y/image/upload/v1773320787/HD-wallpaper-chiranjeevi-acharya-actor-chiru-megastar-telugu-tollywood_tgo4lx.jpg",
  "https://res.cloudinary.com/dh0xxfq9y/image/upload/v1773320791/HD-wallpaper-chiranjeevi-actor-chiru-mega-star-chiranjeev-megastar-telugu_ura6xj.jpg",
];

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background images with crossfade */}
      {heroImages.map((src, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
            i === currentImage ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt="Megastar Chiranjeevi"
            fill
            className="object-cover object-top"
            priority={i === 0}
            unoptimized
          />
        </div>
      ))}

      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/30" />

      {/* Vignette */}
      <div className="absolute inset-0 shadow-[inset_0_0_200px_rgba(0,0,0,0.8)]" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-16 sm:pb-24 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto">
        {/* Thin accent line */}
        <div className="w-16 h-[2px] bg-gradient-to-r from-amber-400 to-red-500 mb-6" />

        {/* Name */}
        <h1 className="mb-3">
          <span className="block text-amber-400/90 text-sm sm:text-base tracking-[0.4em] uppercase font-medium mb-2">
            Konidela Sivasankara Varaprasad
          </span>
          <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white leading-[0.9] tracking-tight">
            CHIRAN
          </span>
          <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tight bg-gradient-to-r from-amber-300 via-amber-400 to-red-500 bg-clip-text text-transparent">
            JEEVI
          </span>
        </h1>

        {/* Bio strip */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-4 mb-8">
          <span className="text-gray-300 text-sm sm:text-base font-light">Actor</span>
          <span className="text-gray-600">|</span>
          <span className="text-gray-300 text-sm sm:text-base font-light">Politician</span>
          <span className="text-gray-600">|</span>
          <span className="text-gray-300 text-sm sm:text-base font-light">Padma Vibhushan</span>
          <span className="text-gray-600">|</span>
          <span className="text-gray-300 text-sm sm:text-base font-light">Since 1978</span>
        </div>

        {/* Stats + CTA row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8">
          {/* Stats */}
          <div className="flex gap-10">
            <div>
              <div className="text-4xl md:text-5xl font-black text-white">150<span className="text-amber-400">+</span></div>
              <div className="text-gray-500 text-xs tracking-widest uppercase mt-1">Films</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-white">47<span className="text-amber-400">+</span></div>
              <div className="text-gray-500 text-xs tracking-widest uppercase mt-1">Years</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-white">20<span className="text-amber-400">+</span></div>
              <div className="text-gray-500 text-xs tracking-widest uppercase mt-1">Awards</div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex gap-4">
            <a
              href="/filmography"
              className="group px-8 py-3.5 bg-white text-black text-sm font-semibold tracking-wider uppercase rounded-none hover:bg-amber-400 transition-all duration-300"
            >
              Explore Films
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
            </a>
            <a
              href="/about"
              className="px-8 py-3.5 border border-white/30 text-white text-sm font-medium tracking-wider uppercase rounded-none hover:border-amber-400 hover:text-amber-400 transition-all duration-300"
            >
              His Story
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-gray-500 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7" />
        </svg>
      </div>
    </section>
  );
}
