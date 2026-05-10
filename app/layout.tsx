import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Re:view — Review management voor de horeca",
  description: "Meer reviews, minder werk. Re:view koppelt aan Google Business Profile en beheert jouw online reputatie automatisch met AI.",
  openGraph: {
    title: "Re:view — Review management voor de horeca",
    description: "Meer reviews, minder werk. Koppel je Google profiel en laat AI jouw reviews beheren.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${jakarta.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
