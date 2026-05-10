"use client";

import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-stone-200/80 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-1 group">
          <span className="text-stone-900 font-bold text-xl tracking-tight">
            Re
          </span>
          <span className="text-green-500 font-bold text-xl">:</span>
          <span className="text-stone-900 font-bold text-xl tracking-tight">
            view
          </span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-7">
          <a
            href="#features"
            className="text-sm text-stone-600 hover:text-stone-900 transition-colors font-medium"
          >
            Functies
          </a>
          <a
            href="#how-it-works"
            className="text-sm text-stone-600 hover:text-stone-900 transition-colors font-medium"
          >
            Hoe het werkt
          </a>
          <a
            href="#reviews"
            className="text-sm text-stone-600 hover:text-stone-900 transition-colors font-medium"
          >
            Reviews
          </a>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a
            href="https://review-app-lyart-ten.vercel.app"
            className="hidden sm:block text-sm text-stone-600 hover:text-stone-900 transition-colors font-medium"
          >
            Inloggen
          </a>
          <a
            href="https://review-app-lyart-ten.vercel.app/signup"
            className="inline-flex items-center gap-1.5 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200 hover:shadow-md active:scale-95"
          >
            Gratis proberen
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
              <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
}
