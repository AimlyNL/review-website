"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n";

export default function Pricing() {
  const { t } = useLanguage();
  const p = t.pricing;
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-surface-2/50">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-foreground font-bold text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight mb-3">
            {p.title}
          </h2>
          <p className="text-text-muted text-base sm:text-lg leading-relaxed">{p.sub}</p>
        </div>

        <div className="relative">
          <div className="absolute -inset-2 bg-gradient-to-br from-green-400/15 to-emerald-400/10 rounded-[28px] blur-2xl" />

          <div className="relative bg-surface border border-border-soft rounded-3xl p-7 sm:p-10 card-shadow">
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-1 bg-surface-2 rounded-full p-1">
                <button
                  onClick={() => setYearly(false)}
                  className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all ${
                    !yearly ? "bg-surface text-foreground shadow-sm" : "text-text-muted hover:text-foreground"
                  }`}
                >
                  {p.monthly}
                </button>
                <button
                  onClick={() => setYearly(true)}
                  className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all inline-flex items-center gap-2 ${
                    yearly ? "bg-surface text-foreground shadow-sm" : "text-text-muted hover:text-foreground"
                  }`}
                >
                  {p.yearly}
                  <span className="text-[10px] font-bold bg-green-500 text-white px-1.5 py-0.5 rounded-full">−25%</span>
                </button>
              </div>
            </div>

            <div className="text-center mb-8">
              <div className="flex items-baseline justify-center gap-1.5">
                <span className="text-foreground font-extrabold text-6xl sm:text-7xl tracking-tight">
                  {yearly ? p.yearlyPrice : p.monthlyPrice}
                </span>
                <span className="text-text-muted text-lg font-medium">
                  {yearly ? p.yearlySuffix : p.monthlySuffix}
                </span>
              </div>
              <p className="text-xs text-text-subtle mt-2">{p.vat}</p>
              {yearly && (
                <p className="text-xs text-green-600 dark:text-green-400 font-semibold mt-1">{p.savings}</p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-8">
              {p.features.map((feat, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2 2 4-4" stroke="#22c55e" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="text-sm text-foreground">{feat}</span>
                </div>
              ))}
            </div>

            <a
              href="https://review-app-lyart-ten.vercel.app/signup"
              className="group flex items-center justify-center gap-2 bg-foreground hover:opacity-90 text-background text-base font-semibold py-4 rounded-full transition-all duration-200 hover:shadow-lg active:scale-[0.98]"
            >
              {p.cta}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-0.5">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <p className="text-center text-xs text-text-subtle mt-3">{p.ctaSub}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
