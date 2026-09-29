import type { Metadata, Viewport } from "next";
import { getDictionary, site, type Locale } from "./i18n";

export const viewport: Viewport = { themeColor: "#fbf8f2", width: "device-width", initialScale: 1 };

export function buildMetadata(locale: Locale): Metadata {
  const t = getDictionary(locale);
  const path = locale === "de" ? "/" : "/en";
  return {
    metadataBase: new URL(site.url),
    title: t.meta.title,
    description: t.meta.description,
    alternates: { canonical: path, languages: { de: "/", en: "/en", "x-default": "/" } },
    openGraph: {
      type: "website",
      siteName: "GuestTap",
      title: t.meta.title,
      description: t.meta.description,
      url: path,
      locale: locale === "de" ? "de_DE" : "en_GB",
    },
    twitter: { card: "summary_large_image", title: t.meta.title, description: t.meta.description },
    robots: { index: true, follow: true },
  };
}
