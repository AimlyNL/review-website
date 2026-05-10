"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/lib/i18n";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const navLinks = [
    { href: "#features", label: t.nav.features },
    { href: "#how-it-works", label: t.nav.howItWorks },
    { href: "#pricing", label: t.nav.pricing },
    { href: "#reviews", label: t.nav.reviews },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? "bg-white/95 backdrop-blur-md border-b border-stone-200/80 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-0.5" onClick={() => setMenuOpen(false)}>
            <span className="text-stone-900 font-bold text-xl tracking-tight">Re</span>
            <span className="text-green-500 font-bold text-xl">:</span>
            <span className="text-stone-900 font-bold text-xl tracking-tight">view</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map(l => (
              <a key={l.href} href={l.href} className="text-sm text-stone-600 hover:text-stone-900 transition-colors font-medium">
                {l.label}
              </a>
            ))}
          </div>

          {/* Desktop right */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setLang(lang === "en" ? "nl" : "en")}
              className="flex items-center gap-1.5 text-xs font-semibold text-stone-500 hover:text-stone-800 border border-stone-200 hover:border-stone-300 px-2.5 py-1.5 rounded-full transition-all duration-200"
            >
              <span className={lang === "en" ? "text-stone-900" : "text-stone-400"}>EN</span>
              <span className="text-stone-300">/</span>
              <span className={lang === "nl" ? "text-stone-900" : "text-stone-400"}>NL</span>
            </button>
            <a href="https://review-app-lyart-ten.vercel.app" className="text-sm text-stone-600 hover:text-stone-900 transition-colors font-medium">
              {t.nav.login}
            </a>
            <a
              href="https://review-app-lyart-ten.vercel.app/signup"
              className="inline-flex items-center gap-1.5 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200 hover:shadow-md active:scale-95"
            >
              {t.nav.cta}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Mobile right: lang toggle + hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setLang(lang === "en" ? "nl" : "en")}
              className="flex items-center gap-1 text-xs font-semibold text-stone-500 border border-stone-200 px-2 py-1.5 rounded-full"
            >
              <span className={lang === "en" ? "text-stone-900" : "text-stone-400"}>EN</span>
              <span className="text-stone-300">/</span>
              <span className={lang === "nl" ? "text-stone-900" : "text-stone-400"}>NL</span>
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-lg text-stone-700 hover:bg-stone-100 transition-colors"
              aria-label="Menu"
            >
              {menuOpen ? (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {menuOpen && (
          <div className="md:hidden border-t border-stone-100 bg-white px-5 py-4 flex flex-col gap-1">
            {navLinks.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-stone-700 font-medium text-base py-3 border-b border-stone-50 last:border-0"
              >
                {l.label}
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-2">
              <a
                href="https://review-app-lyart-ten.vercel.app"
                className="text-center text-stone-600 font-medium text-sm py-2.5 border border-stone-200 rounded-full"
              >
                {t.nav.login}
              </a>
              <a
                href="https://review-app-lyart-ten.vercel.app/signup"
                className="text-center bg-green-500 text-white font-semibold text-sm py-3 rounded-full"
              >
                {t.nav.cta}
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
