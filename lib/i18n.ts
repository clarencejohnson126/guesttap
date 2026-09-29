import { de, type Dict } from "@/content/de";
import { en } from "@/content/en";

export type Locale = "de" | "en";
export const locales: Locale[] = ["de", "en"];
export const defaultLocale: Locale = "de";

const dictionaries: Record<Locale, Dict> = { de, en };
export const getDictionary = (locale: Locale): Dict => dictionaries[locale];

/** Startseite je Sprache. Deutsch lebt auf "/", Englisch auf "/en". */
export const homePath = (locale: Locale) => (locale === "de" ? "/" : "/en");

export const site = {
  name: "GuestTap",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://guesttap.de",
  email: "clarencejohnson@hotmail.de",
  region: "Mannheim",
};
