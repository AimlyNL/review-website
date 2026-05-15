"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";

type Lang = "en" | "nl";

const translations = {
  en: {
    nav: {
      howItWorks: "How it works",
      getReviews: "Get reviews",
      pricing: "Pricing",
      partner: "Partners",
      faq: "FAQ",
      login: "Log in",
      cta: "Start free",
    },
    hero: {
      badge: "Works with Google Business Profile",
      headline1: "Reply to every review.",
      headline2: "Collect more. In any language.",
      sub: "Re:view connects to Google Business Profile, replies to reviews in your voice, and turns happy guests into new 5-star ratings — automatically.",
      cta: "Start 14-day free trial",
      trust1: "14-day free trial",
      trust2: "5 min setup",
      trust3: "GDPR compliant",
    },
    hbr: {
      eyebrow: "What the research says",
      quote: "A one-star increase in Yelp rating leads to a 5–9% increase in revenue.",
      source: "Harvard Business Review",
      stat1Value: "+5–9%",
      stat1Label: "Revenue per extra star",
      stat2Value: "97%",
      stat2Label: "Of guests read reviews before booking",
      stat3Value: "33%",
      stat3Label: "Higher response rate boosts ranking",
    },
    demo: {
      title: "Real replies. Real languages.",
      sub: "Re:view detects the language of every review and answers in the same tone — across 30+ languages.",
    },
    getReviews: {
      eyebrow: "Get more reviews",
      title: "Turn happy guests into 5-star reviews",
      sub: "A QR code on the table. One tap. Guests post directly to your Google Business Profile.",
      step1Title: "Print your QR",
      step1Desc: "Generated for every location. Stickers, table tents, receipts — wherever you want.",
      step2Title: "Guest scans",
      step2Desc: "Negative experience? Routed to private feedback. Positive? Straight to Google.",
      step3Title: "Reviews come in",
      step3Desc: "Re:view replies automatically in the guest's own language.",
      cardTitle: "How was your visit?",
      cardSub: "Tap a rating to continue",
    },
    howItWorks: {
      title: "Three steps to launch",
      sub: "Setup takes five minutes. Then Re:view does the work.",
      steps: [
        { num: "01", title: "Create an account", desc: "Email and password. Ready in 30 seconds." },
        { num: "02", title: "Connect Google Business", desc: "One click via Google. We only request access to your reviews." },
        { num: "03", title: "AI takes over", desc: "Reviews get on-brand replies. You approve, or switch on auto-reply." },
      ],
    },
    pricing: {
      title: "Everything included",
      sub: "One package. No hidden fees. Cancel anytime.",
      monthly: "Monthly",
      yearly: "Yearly",
      monthlyPrice: "€39",
      yearlyPrice: "€350",
      monthlySuffix: "/month",
      yearlySuffix: "/year",
      savings: "save €118",
      vat: "Excl. VAT",
      cta: "Start 14-day free trial",
      ctaSub: "Cancel anytime",
      features: [
        "Unlimited AI replies",
        "Google Business integration",
        "QR feedback codes",
        "Analytics dashboard",
        "30+ languages",
        "Email notifications",
      ],
    },
    partner: {
      eyebrow: "Partner program",
      title: "Earn with Re:view",
      desc: "Help hospitality businesses with reviews and earn commission. €78–€100 per paying customer. Transparent program, monthly payouts.",
      cta: "Become a partner",
      formTitle: "Become a partner",
      formSub: "Fill in your details. We'll get back to you within 2 working days.",
      nameLabel: "Name",
      emailLabel: "Email",
      phoneLabel: "Phone (optional)",
      messageLabel: "Tell us briefly about yourself",
      submit: "Send",
      sent: "Thank you!",
      sentSub: "We'll be in touch within 2 working days.",
      close: "Close",
      cancel: "Cancel",
    },
    faq: {
      title: "Frequently asked questions",
      items: [
        { q: "How long does setup take?", a: "Five minutes. Create account → connect Google → done. Instantly available for your whole team." },
        { q: "Which languages are supported?", a: "30+ languages. The AI auto-detects the review language and replies in the same one — English, Dutch, German, French, Spanish, Italian and many more." },
        { q: "What if I want to cancel?", a: "Anytime via your settings. No contract, no lock-in. Access continues until the end of your paid period." },
        { q: "How safe is my data?", a: "Fully GDPR-compliant. Data is encrypted and stored in the EU. We don't share with third parties except essential processors (Google, AI provider)." },
        { q: "Does the AI post automatically?", a: "Only if you want it to. Auto-reply is off by default and you approve each reply. Negative reviews (≤2★) always require manual approval." },
      ],
    },
    footer: {
      tagline: "Review management for hospitality.",
      product: "Product",
      legal: "Legal",
      contact: "Contact",
      copyright: "© {year} Re:view · a product of Aimly VOF",
    },
  },
  nl: {
    nav: {
      howItWorks: "Zo werkt het",
      getReviews: "Reviews ophalen",
      pricing: "Prijzen",
      partner: "Partners",
      faq: "FAQ",
      login: "Inloggen",
      cta: "Gratis starten",
    },
    hero: {
      badge: "Werkt met Google Business Profile",
      headline1: "Antwoord op elke review.",
      headline2: "Haal er meer op. In elke taal.",
      sub: "Re:view koppelt aan Google Business Profile, reageert op reviews in jouw stem, en verandert tevreden gasten in nieuwe 5-sterren beoordelingen — automatisch.",
      cta: "Start 14-daagse proefperiode",
      trust1: "14 dagen gratis",
      trust2: "5 min setup",
      trust3: "AVG compliant",
    },
    hbr: {
      eyebrow: "Wat het onderzoek zegt",
      quote: "Eén ster meer in je rating leidt tot 5–9% meer omzet.",
      source: "Harvard Business Review",
      stat1Value: "+5–9%",
      stat1Label: "Omzet per extra ster",
      stat2Value: "97%",
      stat2Label: "Van gasten leest reviews vooraf",
      stat3Value: "33%",
      stat3Label: "Hogere responsrate verbetert ranking",
    },
    demo: {
      title: "Echte reacties. Echte talen.",
      sub: "Re:view herkent de taal van iedere review en antwoordt in dezelfde toon — in 30+ talen.",
    },
    getReviews: {
      eyebrow: "Reviews ophalen",
      title: "Maak van tevreden gasten 5-sterren reviews",
      sub: "Een QR-code op tafel. Eén tik. Gasten plaatsen direct op je Google Business Profile.",
      step1Title: "Print je QR",
      step1Desc: "Gegenereerd per locatie. Stickers, tafelstandaards, bonnen — waar je maar wilt.",
      step2Title: "Gast scant",
      step2Desc: "Negatieve ervaring? Naar private feedback. Positief? Direct naar Google.",
      step3Title: "Reviews stromen binnen",
      step3Desc: "Re:view reageert automatisch in de taal van de gast.",
      cardTitle: "Hoe was je bezoek?",
      cardSub: "Tik een waardering om door te gaan",
    },
    howItWorks: {
      title: "In 3 stappen klaar",
      sub: "Setup duurt 5 minuten. Daarna doet Re:view het werk.",
      steps: [
        { num: "01", title: "Maak een account", desc: "E-mail en wachtwoord. In 30 seconden klaar." },
        { num: "02", title: "Koppel Google Business", desc: "Eén klik via Google. We vragen alleen toegang tot je reviews." },
        { num: "03", title: "AI doet de rest", desc: "Reviews krijgen passende reacties. Jij keurt goed, of zet auto-reply aan." },
      ],
    },
    pricing: {
      title: "Alles inclusief",
      sub: "Eén pakket. Geen verborgen kosten. Op elk moment opzeggen.",
      monthly: "Maandelijks",
      yearly: "Jaarlijks",
      monthlyPrice: "€39",
      yearlyPrice: "€350",
      monthlySuffix: "/maand",
      yearlySuffix: "/jaar",
      savings: "bespaar €118",
      vat: "Excl. BTW",
      cta: "Start 14-daagse proefperiode",
      ctaSub: "Op elk moment opzeggen",
      features: [
        "Onbeperkt AI-reacties",
        "Google Business koppeling",
        "QR feedback codes",
        "Analytics dashboard",
        "30+ talen",
        "E-mail notificaties",
      ],
    },
    partner: {
      eyebrow: "Partner programma",
      title: "Verdien mee met Re:view",
      desc: "Help horeca-ondernemers met reviews en verdien commissie. €78–€100 per betalende klant. Transparant programma, maandelijkse uitbetaling.",
      cta: "Word partner",
      formTitle: "Partner worden",
      formSub: "Vul je gegevens in. We nemen contact op binnen 2 werkdagen.",
      nameLabel: "Naam",
      emailLabel: "E-mail",
      phoneLabel: "Telefoonnummer (optioneel)",
      messageLabel: "Vertel kort over jezelf",
      submit: "Versturen",
      sent: "Bedankt!",
      sentSub: "We nemen contact op binnen 2 werkdagen.",
      close: "Sluiten",
      cancel: "Annuleren",
    },
    faq: {
      title: "Veelgestelde vragen",
      items: [
        { q: "Hoe lang duurt de setup?", a: "Vijf minuten. Account aanmaken → Google koppelen → klaar. Direct beschikbaar voor je hele team." },
        { q: "Welke talen ondersteunen jullie?", a: "Meer dan 30 talen. De AI herkent automatisch de taal van de review en antwoordt in dezelfde — Nederlands, Engels, Duits, Frans, Spaans, Italiaans en veel meer." },
        { q: "Wat als ik wil opzeggen?", a: "Op elk moment via je instellingen. Geen contract, geen lock-in. Je toegang loopt door tot het einde van de betaalde periode." },
        { q: "Hoe veilig is mijn data?", a: "Volledig AVG-compliant. Data wordt versleuteld opgeslagen in de EU. We delen niets met derden behalve essentiële verwerkers (Google, AI provider)." },
        { q: "Post de AI automatisch?", a: "Alleen als jij dat wilt. Standaard staat auto-reply uit en keur jij iedere reactie goed. Negatieve reviews (≤2★) gaan altijd via handmatige goedkeuring." },
      ],
    },
    footer: {
      tagline: "Review management voor de horeca.",
      product: "Product",
      legal: "Juridisch",
      contact: "Contact",
      copyright: "© {year} Re:view · een product van Aimly VOF",
    },
  },
};

type Translations = typeof translations.en;

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  t: translations.en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("review-lang") as Lang | null;
      if (saved === "en" || saved === "nl") setLangState(saved);
    } catch {}
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem("review-lang", l); } catch {}
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
