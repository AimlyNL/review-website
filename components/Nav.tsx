"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const navLinks = [
    { href: "#how-it-works", label: t.nav.howItWorks },
    { href: "#get-reviews", label: t.nav.getReviews },
    { href: "#pricing", label: t.nav.pricing },
    { href: "#partner", label: t.nav.partner },
    { href: "#faq", label: t.nav.faq },
  ];

  const showSolid = scrolled || menuOpen;

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        showSolid
          ? "bg-background/90 backdrop-blur-md border-b border-border-soft shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-0.5" onClick={() => setMenuOpen(false)}>
          <span className="text-foreground font-bold text-xl tracking-tight">Re</span>
          <span className="text-green-500 font-bold text-xl">:</span>
          <span className="text-foreground font-bold text-xl tracking-tight">view</span>
        </a>

        <div className="hidden md:flex items-center gap-7">
          {navLinks.map(l => (
            <a key={l.href} href={l.href} className="text-sm text-text-muted hover:text-foreground transition-colors font-medium">
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle theme={theme} toggle={toggle} />
          <LangToggle lang={lang} setLang={setLang} />
          <a href="https://review-app-lyart-ten.vercel.app" className="text-sm text-text-muted hover:text-foreground transition-colors font-medium ml-1">
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

        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle theme={theme} toggle={toggle} />
          <LangToggle lang={lang} setLang={setLang} compact />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-lg text-foreground hover:bg-surface-2 transition-colors"
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

      {menuOpen && (
        <div className="md:hidden border-t border-border-soft bg-background px-5 py-4 flex flex-col gap-1">
          {navLinks.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-foreground font-medium text-base py-3 border-b border-border-soft/50 last:border-0"
            >
              {l.label}
            </a>
          ))}
          <div className="pt-3 flex flex-col gap-2">
            <a
              href="https://review-app-lyart-ten.vercel.app"
              className="text-center text-text-muted font-medium text-sm py-2.5 border border-border-soft rounded-full"
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
  );
}

function ThemeToggle({ theme, toggle }: { theme: "light" | "dark"; toggle: () => void }) {
  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="w-8 h-8 rounded-full border border-border-soft hover:border-text-muted text-text-muted hover:text-foreground flex items-center justify-center transition-colors"
    >
      {theme === "dark" ? (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <circle cx="7" cy="7" r="3" fill="currentColor"/>
          <path d="M7 1v1.5M7 11.5V13M1 7h1.5M11.5 7H13M2.6 2.6l1.1 1.1M10.3 10.3l1.1 1.1M2.6 11.4l1.1-1.1M10.3 3.7l1.1-1.1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
      ) : (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M12 8.5A5 5 0 015.5 2a5 5 0 106.5 6.5z" fill="currentColor"/>
        </svg>
      )}
    </button>
  );
}

function LangToggle({ lang, setLang, compact = false }: { lang: "en" | "nl"; setLang: (l: "en" | "nl") => void; compact?: boolean }) {
  return (
    <button
      onClick={() => setLang(lang === "en" ? "nl" : "en")}
      className={`flex items-center gap-1 text-xs font-semibold text-text-muted hover:text-foreground border border-border-soft hover:border-text-muted rounded-full transition-colors ${compact ? "px-2 py-1.5" : "px-2.5 py-1.5"}`}
    >
      <span className={lang === "en" ? "text-foreground" : "text-text-subtle"}>EN</span>
      <span className="text-text-subtle">/</span>
      <span className={lang === "nl" ? "text-foreground" : "text-text-subtle"}>NL</span>
    </button>
  );
}
