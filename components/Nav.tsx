"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/lib/i18n";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, t } = useLanguage();

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
        <a href="/" className="flex items-center gap-0.5 group">
          <span className="text-stone-900 font-bold text-xl tracking-tight">Re</span>
          <span className="text-green-500 font-bold text-xl">:</span>
          <span className="text-stone-900 font-bold text-xl tracking-tight">view</span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-7">
          <a href="#features" className="text-sm text-stone-600 hover:text-stone-900 transition-colors font-medium">
            {t.nav.features}
          </a>
          <a href="#how-it-works" className="text-sm text-stone-600 hover:text-stone-900 transition-colors font-medium">
            {t.nav.howItWorks}
          </a>
          <a href="#pricing" className="text-sm text-stone-600 hover:text-stone-900 transition-colors font-medium">
            {t.nav.pricing}
          </a>
          <a href="#reviews" className="text-sm text-stone-600 hover:text-stone-900 transition-colors font-medium">
            {t.nav.reviews}
          </a>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Language toggle */}
          <button
            onClick={() => setLang(lang === "en" ? "nl" : "en")}
            className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-stone-500 hover:text-stone-800 border border-stone-200 hover:border-stone-300 px-2.5 py-1.5 rounded-full transition-all duration-200"
          >
            <span className={lang === "en" ? "text-stone-900" : "text-stone-400"}>EN</span>
            <span className="text-stone-300">/</span>
            <span className={lang === "nl" ? "text-stone-900" : "text-stone-400"}>NL</span>
          </button>

          <a href="https://review-app-lyart-ten.vercel.app" className="hidden sm:block text-sm text-stone-600 hover:text-stone-900 transition-colors font-medium">
            {t.nav.login}
          </a>
          <a
            href="https://review-app-lyart-ten.vercel.app/signup"
            className="inline-flex items-center gap-1.5 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200 hover:shadow-md active:scale-95"
          >
            {t.nav.cta}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
              <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
}
