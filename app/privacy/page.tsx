import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacybeleid — Re:view",
  description: "Privacybeleid van Re:view, een product van Aimly VOF.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground py-16 sm:py-20 px-5">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-0.5 mb-10">
          <span className="text-foreground font-bold text-xl tracking-tight">Re</span>
          <span className="text-green-500 font-bold text-xl">:</span>
          <span className="text-foreground font-bold text-xl tracking-tight">view</span>
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2 tracking-tight">Privacybeleid</h1>
        <p className="text-sm text-text-subtle mb-10">Re:view is een product van Aimly VOF</p>

        <div className="text-[14px] text-text-muted space-y-4 leading-relaxed">
          <p>
            Re:view, een dienst van <strong className="text-foreground">Aimly VOF</strong>, verwerkt persoonsgegevens in overeenstemming met de
            Algemene Verordening Gegevensbescherming (AVG/GDPR).
          </p>

          <h2 className="text-lg font-semibold text-foreground mt-8">1. Wie zijn wij?</h2>
          <p>
            Re:view wordt geleverd door Aimly VOF, gevestigd in Nederland. Voor vragen kun je contact opnemen via{" "}
            <a href="mailto:contact@aimly.nl" className="text-green-600 dark:text-green-400 hover:underline">contact@aimly.nl</a>.
          </p>

          <h2 className="text-lg font-semibold text-foreground mt-8">2. Welke gegevens verzamelen we?</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Accountgegevens: naam, e-mailadres, bedrijfsnaam</li>
            <li>Google Business Profile data (reviews, locaties) via officiële Google APIs</li>
            <li>Betalingsgegevens via Stripe (wij slaan zelf geen kaartgegevens op)</li>
            <li>Feedback ingediend via QR-pagina&apos;s</li>
          </ul>

          <h2 className="text-lg font-semibold text-foreground mt-8">3. Waarvoor gebruiken we deze gegevens?</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Het leveren van de Re:view dienst (review management)</li>
            <li>AI-gegenereerde reacties op reviews</li>
            <li>Versturen van notificaties</li>
            <li>Verwerken van betalingen via Stripe</li>
          </ul>

          <h2 className="text-lg font-semibold text-foreground mt-8">4. Derden</h2>
          <p>We delen data alleen met essentiële verwerkers:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Google (Business Profile API)</li>
            <li>Anthropic (AI-gegenereerde reacties)</li>
            <li>Supabase (database hosting in EU)</li>
            <li>Vercel (app hosting)</li>
            <li>Stripe (betalingen)</li>
            <li>Resend (transactionele e-mails)</li>
          </ul>

          <h2 className="text-lg font-semibold text-foreground mt-8">5. Jouw rechten</h2>
          <p>
            Je hebt recht op inzage, correctie, dataportabiliteit en verwijdering van je gegevens. Stuur een verzoek
            naar <a href="mailto:contact@aimly.nl" className="text-green-600 dark:text-green-400 hover:underline">contact@aimly.nl</a>.
          </p>

          <h2 className="text-lg font-semibold text-foreground mt-8">6. Bewaartermijn</h2>
          <p>
            Accountgegevens bewaren we zolang je account actief is. Na verwijdering wissen we alles binnen 30 dagen,
            behalve waar wettelijke bewaarplicht geldt (bv. boekhouding 7 jaar).
          </p>

          <h2 className="text-lg font-semibold text-foreground mt-8">7. Wijzigingen</h2>
          <p>
            Wij kunnen dit privacybeleid wijzigen. Bij belangrijke wijzigingen sturen we je een e-mail.
          </p>

          <div className="mt-12 pt-6 border-t border-border-soft flex items-center justify-between text-xs text-text-subtle">
            <span>Laatst bijgewerkt: mei 2026</span>
            <Link href="/terms" className="hover:text-foreground transition-colors">Algemene voorwaarden →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
