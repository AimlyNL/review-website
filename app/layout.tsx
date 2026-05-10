import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { LanguageProvider } from "@/lib/i18n";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Re:view — Review management for hospitality",
  description: "More stars, more revenue. Re:view connects to Google Business Profile and manages your reviews automatically with AI.",
  openGraph: {
    title: "Re:view — Review management for hospitality",
    description: "More stars, more revenue. Connect your Google profile and let AI manage your reviews.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
