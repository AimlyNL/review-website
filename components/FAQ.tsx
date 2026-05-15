"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n";

export default function FAQ() {
  const { t } = useLanguage();
  const f = t.faq;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 sm:py-28 bg-background">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <h2 className="text-foreground font-bold text-3xl sm:text-4xl md:text-5xl text-center leading-tight tracking-tight mb-12">
          {f.title}
        </h2>

        <div className="space-y-3">
          {f.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`border rounded-2xl transition-all duration-200 ${
                  isOpen ? "border-text-subtle/40 bg-surface-2/50" : "border-border-soft bg-surface hover:border-text-subtle/40"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left px-5 sm:px-6 py-4 sm:py-5"
                  aria-expanded={isOpen}
                >
                  <span className="text-foreground font-semibold text-base sm:text-lg">{item.q}</span>
                  <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 ${
                    isOpen ? "bg-foreground text-background rotate-45" : "bg-surface-2 text-foreground"
                  }`}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-200 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 sm:px-6 pb-5 text-text-muted text-sm sm:text-base leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
