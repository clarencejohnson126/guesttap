"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Dict } from "@/content/de";
import { homePath, type Locale } from "@/lib/i18n";
import { Wordmark } from "./art";

function LangToggle({ label, locale, hash }: { label: string; locale: Locale; hash: string }) {
  return (
    <div role="group" aria-label={label} className="flex rounded-full bg-sand p-1 font-mono text-xs font-semibold">
      {(["de", "en"] as Locale[]).map((l) => (
        <Link
          key={l}
          href={homePath(l) + hash}
          hrefLang={l}
          lang={l}
          aria-current={l === locale ? "true" : undefined}
          className={`rounded-full px-2.5 py-1 uppercase transition ${l === locale ? "bg-navy text-linen" : "text-muted hover:text-ink"}`}
        >
          {l}
        </Link>
      ))}
    </div>
  );
}

export function Nav({ t, locale }: { t: Dict["nav"]; locale: Locale }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hash, setHash] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    const onHash = () => setHash(window.location.hash);
    onScroll();
    onHash();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("hashchange", onHash);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hashchange", onHash);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-linen/85 shadow-[0_1px_0_var(--color-mist)] backdrop-blur-md" : ""
      }`}
    >
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <Link href={homePath(locale)} className="rounded-lg" aria-label="GuestTap">
          <Wordmark />
        </Link>

        <ul className="hidden items-center gap-7 text-[0.94rem] font-medium text-ink/80 lg:flex">
          {t.links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="relative py-2 transition hover:text-ink after:absolute after:inset-x-0 after:bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-brass after:transition-transform hover:after:scale-x-100">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <LangToggle label={t.langLabel} locale={locale} hash={hash} />
          <a href="#produkt" className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-linen transition hover:-translate-y-0.5 hover:bg-navy">
            {t.cta}
          </a>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <LangToggle label={t.langLabel} locale={locale} hash={hash} />
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="grid h-10 w-10 place-items-center rounded-full bg-ink text-linen"
          >
            <span className="sr-only">{t.menu}</span>
            <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true"><path d="M3 7h14M3 13h9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" role="dialog" aria-modal="true" aria-label={t.menu} className="fixed inset-0 z-50 flex flex-col bg-navy px-6 pb-10 pt-5 text-linen lg:hidden">
          <div className="flex items-center justify-between">
            <span className="display text-xl font-bold">Guest<span className="text-star">Tap</span></span>
            <button type="button" onClick={() => setOpen(false)} className="grid h-10 w-10 place-items-center rounded-full bg-linen text-navy" autoFocus>
              <span className="sr-only">{t.close}</span>
              <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true"><path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
            </button>
          </div>
          <ul className="mt-12 space-y-1">
            {t.links.map((l, i) => (
              <li key={l.href} className="fade-up" style={{ animationDelay: `${i * 50}ms` }}>
                <a href={l.href} onClick={() => setOpen(false)} className="display block py-2 text-4xl font-semibold hover:text-star">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#produkt" onClick={() => setOpen(false)} className="mt-auto rounded-full bg-star py-4 text-center font-semibold text-navy">
            {t.cta}
          </a>
        </div>
      )}
    </header>
  );
}
