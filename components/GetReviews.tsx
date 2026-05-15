"use client";

import { useLanguage } from "@/lib/i18n";

function GoogleLogo({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

// Deterministic pseudo-QR grid (decorative only)
function QrCode() {
  const N = 21;
  const cells: boolean[][] = [];
  let seed = 7;
  const rand = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
  for (let r = 0; r < N; r++) {
    const row: boolean[] = [];
    for (let c = 0; c < N; c++) row.push(rand() > 0.5);
    cells.push(row);
  }
  // Add the three corner finder squares
  const setFinder = (or: number, oc: number) => {
    for (let r = 0; r < 7; r++) {
      for (let c = 0; c < 7; c++) {
        const isEdge = r === 0 || r === 6 || c === 0 || c === 6;
        const isCenter = r >= 2 && r <= 4 && c >= 2 && c <= 4;
        cells[or + r][oc + c] = isEdge || isCenter;
      }
    }
  };
  setFinder(0, 0); setFinder(0, N - 7); setFinder(N - 7, 0);

  return (
    <svg viewBox={`0 0 ${N} ${N}`} className="w-full h-full" shapeRendering="crispEdges">
      <rect width={N} height={N} fill="white"/>
      {cells.map((row, r) =>
        row.map((on, c) => (on ? <rect key={`${r}-${c}`} x={c} y={r} width={1} height={1} fill="#1c1917"/> : null))
      )}
    </svg>
  );
}

export default function GetReviews() {
  const { t } = useLanguage();
  const g = t.getReviews;

  return (
    <section id="get-reviews" className="py-20 sm:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-green-600 dark:text-green-400 font-semibold mb-4">
            <span className="w-1 h-1 rounded-full bg-green-500"/>
            {g.eyebrow}
          </div>
          <h2 className="text-foreground font-bold text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight mb-4">
            {g.title}
          </h2>
          <p className="text-text-muted text-base sm:text-lg leading-relaxed">{g.sub}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-14 items-center">
          {/* Visual: phone mockup with feedback card + table QR */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 via-transparent to-blue-400/10 blur-3xl" />
            <div className="relative grid grid-cols-[1fr_1.1fr] gap-4 items-start">
              {/* Table tent QR */}
              <div className="bg-surface border border-border-soft rounded-2xl card-shadow p-4 sm:p-5 rotate-[-3deg] hover:rotate-0 transition-transform duration-300">
                <div className="text-center mb-3">
                  <div className="text-[10px] font-bold tracking-widest text-text-subtle uppercase mb-0.5">Aimly Utrecht</div>
                  <div className="text-xs text-foreground font-semibold">Scan & share your visit</div>
                </div>
                <div className="aspect-square bg-white rounded-lg p-2 border border-border-soft">
                  <QrCode />
                </div>
                <div className="flex items-center justify-center gap-1.5 mt-3">
                  <GoogleLogo size={10} />
                  <span className="text-[9px] text-text-subtle font-medium">Google review</span>
                </div>
              </div>

              {/* Phone mockup */}
              <div className="bg-foreground rounded-[2rem] p-2 card-shadow rotate-[3deg] hover:rotate-0 transition-transform duration-300">
                <div className="bg-background rounded-[1.6rem] overflow-hidden">
                  <div className="h-5 flex items-center justify-center">
                    <div className="w-16 h-1 rounded-full bg-foreground/30"/>
                  </div>
                  <div className="p-4 pb-5">
                    <div className="text-center mb-4">
                      <div className="text-[10px] font-semibold text-text-subtle uppercase tracking-widest mb-1">Aimly Utrecht</div>
                      <div className="text-foreground text-base font-bold leading-tight">{g.cardTitle}</div>
                      <div className="text-[11px] text-text-subtle mt-0.5">{g.cardSub}</div>
                    </div>
                    <div className="flex justify-center gap-1.5 mb-4">
                      {[1, 2, 3, 4, 5].map(i => (
                        <button key={i} className={`w-8 h-8 rounded-full flex items-center justify-center ${i === 5 ? "bg-green-500" : "bg-surface-2"} transition-colors`}>
                          <svg width="14" height="14" viewBox="0 0 12 12" fill={i === 5 ? "white" : "#a8a29e"}>
                            <path d="M6 1l1.5 3 3.5.5-2.5 2.5.5 3.5L6 8.5 3 10.5l.5-3.5L1 4.5 4.5 4z"/>
                          </svg>
                        </button>
                      ))}
                    </div>
                    <div className="bg-surface-2 border border-border-soft rounded-lg p-2.5 flex items-center gap-2">
                      <GoogleLogo size={14}/>
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] text-text-subtle">Posting to</div>
                        <div className="text-[11px] font-semibold text-foreground">Google Business</div>
                      </div>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-foreground"/></svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-1">
            {[
              { icon: <PrinterIcon/>, title: g.step1Title, desc: g.step1Desc },
              { icon: <ScanIcon/>, title: g.step2Title, desc: g.step2Desc },
              { icon: <StarIcon/>, title: g.step3Title, desc: g.step3Desc },
            ].map((s, i) => (
              <div key={i} className="flex gap-4 py-4 border-b border-border-soft last:border-0">
                <div className="w-10 h-10 rounded-xl bg-green-500/10 text-green-600 dark:text-green-400 flex items-center justify-center shrink-0">
                  {s.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-foreground font-semibold text-base mb-1">{s.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PrinterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M5 2h8v4M5 14h8v2H5zM3 6h12a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1V7a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="13" cy="9" r="0.8" fill="currentColor"/>
    </svg>
  );
}
function ScanIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M2 6V3a1 1 0 011-1h3M16 6V3a1 1 0 00-1-1h-3M2 12v3a1 1 0 001 1h3M16 12v3a1 1 0 01-1 1h-3M2 9h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}
function StarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M9 1.5l2.3 4.7 5.2.7-3.8 3.7.9 5.1L9 13.3l-4.6 2.4.9-5.1L1.5 7l5.2-.7z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  );
}
