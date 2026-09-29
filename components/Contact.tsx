"use client";

import { useRef, useState } from "react";
import type { Dict } from "@/content/de";
import { site } from "@/lib/i18n";

/** Kleine Rezeptionsklingel. Der Ton wird per WebAudio erzeugt, keine Audiodatei nötig. */
function Bell({ label }: { label: string }) {
  const [ringing, setRinging] = useState(0);
  const ctx = useRef<AudioContext | null>(null);

  const ring = () => {
    setRinging((n) => n + 1);
    try {
      ctx.current ??= new AudioContext();
      const ac = ctx.current;
      const now = ac.currentTime;
      [2093, 2637, 4186].forEach((f, i) => {
        const o = ac.createOscillator();
        const g = ac.createGain();
        o.type = "sine";
        o.frequency.value = f;
        g.gain.setValueAtTime(0.0001, now);
        g.gain.exponentialRampToValueAtTime(0.18 / (i + 1), now + 0.01);
        g.gain.exponentialRampToValueAtTime(0.0001, now + 1.6);
        o.connect(g).connect(ac.destination);
        o.start(now);
        o.stop(now + 1.7);
      });
    } catch {
      /* Ohne Audio klingelt es eben nur optisch. */
    }
  };

  return (
    <button type="button" onClick={ring} className="group relative mt-10 block w-40" aria-label={label}>
      <svg key={ringing} viewBox="0 0 160 120" className={`w-full origin-bottom ${ringing ? "ding" : ""}`} aria-hidden="true">
        <rect x="70" y="4" width="20" height="14" rx="4" fill="var(--color-navy)" className="origin-bottom transition-transform duration-150 group-active:translate-y-1.5" />
        <path d="M24 92a56 56 0 0 1 112 0z" fill="var(--color-star)" />
        <path d="M44 62a40 40 0 0 1 28-26" fill="none" stroke="#fff" strokeOpacity=".55" strokeWidth="5" strokeLinecap="round" />
        <rect x="76" y="16" width="8" height="22" fill="var(--color-brass)" />
        <rect x="10" y="92" width="140" height="16" rx="6" fill="var(--color-navy)" />
      </svg>
      <span className="mt-3 block text-center font-mono text-xs uppercase tracking-[0.2em] text-muted group-hover:text-ink">{label}</span>
    </button>
  );
}

export function Contact({ t }: { t: Dict["contact"] }) {
  const tel = site.phone.replace(/[^+\d]/g, "");
  return (
    <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
      <div data-reveal>
        <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-brass"><span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />{t.eyebrow}</p>
        <h2 className="display mt-4 text-[clamp(2.8rem,6.5vw,5.4rem)] font-bold">{t.title}</h2>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">{t.sub}</p>
        <Bell label={t.bell} />
      </div>

      <div data-reveal className="rounded-[2rem] bg-navy p-8 text-linen shadow-[0_30px_60px_-40px_rgba(23,35,61,0.7)] sm:p-12">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-linen/60">{t.mailLabel}</p>
        <a href={`mailto:${site.email}?subject=${encodeURIComponent(t.subject)}`} className="display mt-3 block break-all text-[clamp(1.5rem,3vw,2.3rem)] font-semibold leading-tight underline decoration-star decoration-2 underline-offset-8 hover:text-star">
          {site.email}
        </a>
        {site.phone && (
          <>
            <p className="mt-10 font-mono text-xs uppercase tracking-[0.2em] text-linen/60">{t.phoneLabel}</p>
            <a href={`tel:${tel}`} className="display mt-3 block text-[clamp(1.5rem,3vw,2.3rem)] font-semibold hover:text-star">
              {site.phone}
            </a>
          </>
        )}
        <div className="mt-10 flex flex-wrap gap-3">
          <a href={`mailto:${site.email}?subject=${encodeURIComponent(t.subject)}`} className="rounded-full bg-star px-6 py-3 font-semibold text-navy transition hover:-translate-y-0.5">
            {t.cta}
          </a>
          {site.phone && (
            <a href={`tel:${tel}`} className="rounded-full px-6 py-3 font-semibold ring-1 ring-linen/30 transition hover:bg-linen hover:text-navy">
              {t.callCta}
            </a>
          )}
        </div>
        <p className="mt-10 border-t border-linen/15 pt-6 text-sm text-linen/60">{t.region}. {t.reply}</p>
      </div>
    </div>
  );
}
