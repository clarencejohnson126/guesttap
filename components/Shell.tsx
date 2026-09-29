import { Hanken_Grotesk, JetBrains_Mono, Playfair_Display, Poppins } from "next/font/google";
import type { Locale } from "@/lib/i18n";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", style: ["normal", "italic"], display: "swap" });
const hanken = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-hanken", display: "swap" });
// Schrift der gedruckten Schilder, nur in den Produkt-Mockups.
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-poppins", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });

/** Gemeinsames HTML-Gerüst für beide Sprach-Root-Layouts. */
export function Shell({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  return (
    <html lang={locale} className={`${playfair.variable} ${hanken.variable} ${poppins.variable} ${jetbrains.variable}`}>
      {/* eslint-disable-next-line @next/next/no-head-element */}
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
