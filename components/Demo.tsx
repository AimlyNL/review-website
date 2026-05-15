"use client";

import { useLanguage } from "@/lib/i18n";

function GoogleLogo({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

const examples = [
  {
    initial: "S", color: "bg-[#4285F4]", name: "Sophie van den Berg", lang: "NL", timeAgo: "2u",
    rating: 5,
    review: "Heerlijk gegeten! De pasta was perfect en de bediening super vriendelijk. Zeker terugkomen!",
    reply: "Wat fijn om te horen Sophie! Dank je wel voor de mooie woorden over onze pasta en bediening. We zien je graag weer terug.",
  },
  {
    initial: "M", color: "bg-[#EA4335]", name: "Mark Johnson", lang: "EN", timeAgo: "1d",
    rating: 4,
    review: "Great food, nice atmosphere. Service was a bit slow but overall a very enjoyable evening.",
    reply: "Thanks for the honest feedback Mark! Happy you enjoyed the atmosphere. We're working on improving our service speed — hope to welcome you back soon.",
  },
  {
    initial: "L", color: "bg-[#34A853]", name: "Lukas Müller", lang: "DE", timeAgo: "3T",
    rating: 5,
    review: "Sehr leckeres Essen und tolle Atmosphäre. Werden bestimmt wiederkommen!",
    reply: "Vielen Dank Lukas! Es freut uns sehr, dass dir das Essen und die Atmosphäre gefallen haben. Bis bald!",
  },
  {
    initial: "C", color: "bg-[#FBBC05]", name: "Camille Laurent", lang: "FR", timeAgo: "5j",
    rating: 5,
    review: "Une expérience formidable. Le menu dégustation était exceptionnel. Bravo à toute l'équipe!",
    reply: "Merci beaucoup Camille! Votre retour nous touche énormément. Nous transmettons vos compliments à toute l'équipe — au plaisir de vous revoir bientôt.",
  },
  {
    initial: "I", color: "bg-[#4285F4]", name: "Isabella Romano", lang: "IT", timeAgo: "1set",
    rating: 4,
    review: "Cibo davvero buono, ambiente accogliente. L'attesa è stata un po' lunga ma ne è valsa la pena.",
    reply: "Grazie Isabella! Siamo felici che il cibo e l'ambiente ti siano piaciuti. Lavoriamo per ridurre i tempi di attesa — speriamo di rivederti presto!",
  },
  {
    initial: "J", color: "bg-[#EA4335]", name: "Javier García", lang: "ES", timeAgo: "2sem",
    rating: 5,
    review: "Comida excelente y un servicio impecable. ¡Volveremos seguro la próxima vez que estemos en la ciudad!",
    reply: "¡Muchas gracias Javier! Nos alegra que disfrutaras de la comida y del servicio. Te esperamos con los brazos abiertos en tu próxima visita.",
  },
];

export default function Demo() {
  const { t } = useLanguage();
  const d = t.demo;

  return (
    <section className="py-20 sm:py-28 bg-surface-2/50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest text-text-subtle font-semibold mb-4">
            <span className="w-6 h-px bg-text-subtle/40"/>
            30+ languages
            <span className="w-6 h-px bg-text-subtle/40"/>
          </div>
          <h2 className="text-foreground font-bold text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight mb-3">
            {d.title}
          </h2>
          <p className="text-text-muted text-base sm:text-lg leading-relaxed">{d.sub}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {examples.map((ex, i) => (
            <div key={i} className="bg-surface rounded-2xl border border-border-soft overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-between px-4 py-2 bg-surface-2/60 border-b border-border-soft">
                <div className="flex items-center gap-1.5">
                  <GoogleLogo />
                  <span className="text-[10px] font-medium text-text-muted">via Google</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[9px] font-bold tracking-wider text-text-subtle bg-surface px-1.5 py-0.5 rounded border border-border-soft">{ex.lang}</span>
                  <span className="text-[10px] text-text-subtle">{ex.timeAgo}</span>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-start gap-3 mb-2">
                  <div className={`w-9 h-9 rounded-full ${ex.color} flex items-center justify-center text-white text-sm font-semibold shrink-0`}>
                    {ex.initial}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-foreground mb-1">{ex.name}</div>
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <svg key={idx} width="11" height="11" viewBox="0 0 12 12" fill={idx < ex.rating ? "#fbbf24" : "currentColor"} className={idx < ex.rating ? "" : "text-border-soft"}>
                          <path d="M6 1l1.5 3 3.5.5-2.5 2.5.5 3.5L6 8.5 3 10.5l.5-3.5L1 4.5 4.5 4z"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-text-muted leading-relaxed">&ldquo;{ex.review}&rdquo;</p>
              </div>

              <div className="px-4 pb-4">
                <div className="bg-green-500/8 dark:bg-green-500/10 rounded-xl p-3 border border-green-500/20">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                      <path d="M5.5 1L7 4l3 .5L7.75 6.75 8.5 10 5.5 8.25 2.5 10l.75-3.25L1 4.5 4 4z" fill="#22c55e"/>
                    </svg>
                    <span className="text-[10px] font-semibold text-green-600 dark:text-green-400 uppercase tracking-wider">AI reply · {ex.lang}</span>
                  </div>
                  <p className="text-[13px] text-foreground/80 leading-relaxed">{ex.reply}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
