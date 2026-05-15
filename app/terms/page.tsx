import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Algemene voorwaarden — Re:view",
  description: "Algemene voorwaarden van Re:view, een product van Aimly VOF.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground py-16 sm:py-20 px-5">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-0.5 mb-10">
          <span className="text-foreground font-bold text-xl tracking-tight">Re</span>
          <span className="text-green-500 font-bold text-xl">:</span>
          <span className="text-foreground font-bold text-xl tracking-tight">view</span>
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2 tracking-tight">Algemene voorwaarden</h1>
        <p className="text-sm text-text-subtle mb-10">Re:view — een product van Aimly VOF</p>

        <div className="text-[14px] text-text-muted space-y-4 leading-relaxed">
          <h2 className="text-lg font-semibold text-foreground mt-2">1. Aanbieder</h2>
          <p>
            Re:view wordt aangeboden door <strong className="text-foreground">Aimly VOF</strong>, gevestigd in Nederland.
            Contact: <a href="mailto:contact@aimly.nl" className="text-green-600 dark:text-green-400 hover:underline">contact@aimly.nl</a>.
          </p>

          <h2 className="text-lg font-semibold text-foreground mt-8">2. Dienst</h2>
          <p>
            Re:view is een SaaS-applicatie voor het beheer van Google Business Profile reviews,
            inclusief AI-gegenereerde reacties en analytics.
          </p>

          <h2 className="text-lg font-semibold text-foreground mt-8">3. Proefperiode</h2>
          <p>
            Nieuwe gebruikers krijgen 14 dagen gratis toegang tot alle features. Een geldige betaalmethode is vereist
            bij aanmelding; je wordt pas belast na afloop van de proefperiode. Je kunt op elk moment tijdens de proefperiode
            opzeggen zonder kosten.
          </p>

          <h2 className="text-lg font-semibold text-foreground mt-8">4. Abonnementen</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Maandelijks: €39/maand (excl. BTW)</li>
            <li>Jaarlijks: €350/jaar (excl. BTW)</li>
          </ul>
          <p>
            Abonnementen worden automatisch verlengd tenzij eerder opgezegd. Opzeggen kan op elk
            moment via de instellingen — het abonnement loopt door tot het einde van de betaalde periode.
          </p>

          <h2 className="text-lg font-semibold text-foreground mt-8">5. Gebruik</h2>
          <p>
            Je gebruikt Re:view alleen voor je eigen bedrijfsdoeleinden. Je bent verantwoordelijk
            voor de juistheid van de gegevens die je invoert. Misbruik, spam, of schending van
            Google&apos;s beleid kan tot directe opzegging leiden.
          </p>

          <h2 className="text-lg font-semibold text-foreground mt-8">6. AI-reacties</h2>
          <p>
            Re:view gebruikt AI om reacties op reviews voor te stellen. Je bent zelf verantwoordelijk
            voor de inhoud die uiteindelijk wordt geplaatst. Wij raden aan om automatisch gegenereerde
            reacties zorgvuldig te beoordelen, vooral bij negatieve reviews.
          </p>

          <h2 className="text-lg font-semibold text-foreground mt-8">7. Aansprakelijkheid</h2>
          <p>
            Onze aansprakelijkheid is beperkt tot het bedrag dat je in de afgelopen 12 maanden hebt
            betaald. Wij zijn niet aansprakelijk voor indirecte schade.
          </p>

          <h2 className="text-lg font-semibold text-foreground mt-8">8. Toepasselijk recht</h2>
          <p>
            Op deze overeenkomst is Nederlands recht van toepassing. Geschillen worden voorgelegd
            aan de bevoegde rechter in Nederland.
          </p>

          <h2 className="text-lg font-semibold text-foreground mt-8">9. Wijzigingen</h2>
          <p>
            Wij kunnen deze voorwaarden wijzigen. Bij belangrijke wijzigingen sturen we je een e-mail
            minimaal 30 dagen voor inwerkingtreding.
          </p>

          <div className="mt-12 pt-6 border-t border-border-soft flex items-center justify-between text-xs text-text-subtle">
            <span>Laatst bijgewerkt: mei 2026</span>
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
