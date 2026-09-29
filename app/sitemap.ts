import type { MetadataRoute } from "next";
import { site } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: "monthly", priority: 1, alternates: { languages: { de: site.url, en: `${site.url}/en` } } },
    { url: `${site.url}/en`, changeFrequency: "monthly", priority: 0.8, alternates: { languages: { de: site.url, en: `${site.url}/en` } } },
  ];
}
