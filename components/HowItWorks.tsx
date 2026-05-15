"use client";

import { useLanguage } from "@/lib/i18n";

function GoogleLogo({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

const stepVisuals = [
  // Step 1: Account
  <svg key="account" width="32" height="32" viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="10" r="4" stroke="currentColor" strokeWidth="1.8"/>
    <path d="M5 24c0-4.97 4.03-9 9-9s9 4.03 9 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>,
  // Step 2: Google
  <GoogleLogo key="google" size={32} />,
  // Step 3: Sparkles
  <svg key="sparkle" width="32" height="32" viewBox="0 0 28 28" fill="none">
    <path d="M14 4v6M14 18v6M4 14h6M18 14h6M7 7l4 4M17 17l4 4M21 7l-4 4M11 17l-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>,
];

export default function HowItWorks() {
  const { t } = useLanguage();
  const h = t.howItWorks;

  return (
    <section id="how-it-works" className="relative py-20 sm:py-28 bg-background overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -left-32 top-1/3 w-72 h-72 bg-green-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -right-32 bottom-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-green-600 dark:text-green-400 font-semibold mb-4">
            <span className="w-1 h-1 rounded-full bg-green-500 animate-pulse-dot"/>
            5 min · zero code
          </div>
          <h2 className="text-foreground font-bold text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight mb-3">
            {h.title}
          </h2>
          <p className="text-text-muted text-base sm:text-lg leading-relaxed">{h.sub}</p>
        </div>

        <div className="relative">
          {/* Animated dashed connector with traveling dot — desktop only */}
          <svg
            aria-hidden
            className="hidden md:block absolute top-[44px] left-[16.67%] right-[16.67%] h-px w-[66.66%] mx-auto pointer-events-none"
            viewBox="0 0 800 4"
            preserveAspectRatio="none"
            style={{ height: 4 }}
          >
            <defs>
              <linearGradient id="howline" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#22c55e" stopOpacity="0"/>
                <stop offset="20%" stopColor="#22c55e" stopOpacity="0.5"/>
                <stop offset="80%" stopColor="#22c55e" stopOpacity="0.5"/>
                <stop offset="100%" stopColor="#22c55e" stopOpacity="0"/>
              </linearGradient>
            </defs>
            <line x1="0" y1="2" x2="800" y2="2" stroke="url(#howline)" strokeWidth="2" strokeDasharray="6 8"/>
            <circle r="3" fill="#22c55e">
              <animateMotion dur="3.6s" repeatCount="indefinite" path="M0,2 L800,2"/>
            </circle>
          </svg>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6">
            {h.steps.map((step, i) => (
              <div
                key={i}
                className="group relative flex flex-col items-center text-center animate-fade-up"
                style={{ animationDelay: `${0.1 + i * 0.12}s`, opacity: 0 }}
              >
                {/* Icon tile */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-green-500/20 blur-xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative w-[88px] h-[88px] rounded-2xl bg-surface border border-border-soft card-shadow flex items-center justify-center text-foreground group-hover:-translate-y-1 group-hover:border-green-500/50 transition-all duration-300">
                    {stepVisuals[i]}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-green-500 text-white text-xs font-extrabold flex items-center justify-center shadow-lg ring-4 ring-background">
                    {step.num}
                  </div>
                </div>

                <h3 className="text-foreground font-bold text-xl tracking-tight mb-2">
                  {step.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed max-w-[280px]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 sm:mt-20 flex flex-col items-center gap-3">
          <a
            href="https://review-app-lyart-ten.vercel.app/signup"
            className="group inline-flex items-center gap-2 bg-foreground hover:opacity-90 text-background text-base font-semibold px-6 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg active:scale-95"
          >
            {t.hero.cta}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-0.5">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <p className="text-xs text-text-subtle">{t.pricing.ctaSub}</p>
        </div>
      </div>
    </section>
  );
}
