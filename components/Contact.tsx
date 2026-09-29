"use client";

import { useRef, useState, type FormEvent } from "react";
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
  const f = t.form;
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const body = [
      `${f.hotel}: ${d.get("hotel")}`,
      `${f.name}: ${d.get("name")}`,
      `${f.email}: ${d.get("email")}`,
      `${f.interest}: ${d.get("interest")}`,
      "",
      String(d.get("message") ?? ""),
    ].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`${f.subject}: ${d.get("hotel")}`)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const field =
    "mt-2 w-full rounded-xl border border-mist bg-linen px-4 py-3 text-base text-ink placeholder:text-muted/70 transition focus:border-navy focus:bg-paper focus:outline-none focus:ring-2 focus:ring-star/60";

  return (
    <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
      <div data-reveal>
        <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-brass"><span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />{t.eyebrow}</p>
        <h2 className="display mt-4 text-[clamp(2.8rem,6.5vw,5.4rem)] font-bold">{t.title}</h2>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">{t.sub}</p>
        <Bell label={t.bell} />
        <div className="mt-12 border-t border-mist pt-6">
          <p className="text-sm text-muted">{t.mailLabel}</p>
          <a href={`mailto:${site.email}`} className="display mt-1 inline-block break-all text-xl font-semibold underline decoration-star decoration-2 underline-offset-4 hover:text-navy sm:text-2xl">
            {site.email}
          </a>
          <p className="mt-2 text-sm text-muted">{t.region}</p>
        </div>
      </div>

      <form data-reveal onSubmit={onSubmit} className="rounded-[2rem] bg-paper p-6 shadow-[0_30px_60px_-40px_rgba(23,35,61,0.5)] ring-1 ring-mist sm:p-9">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block text-sm font-semibold sm:col-span-2">
            {f.hotel} <span className="text-brass" aria-hidden="true">*</span>
            <input name="hotel" required autoComplete="organization" className={field} />
          </label>
          <label className="block text-sm font-semibold">
            {f.name} <span className="text-brass" aria-hidden="true">*</span>
            <input name="name" required autoComplete="name" className={field} />
          </label>
          <label className="block text-sm font-semibold">
            {f.email} <span className="text-brass" aria-hidden="true">*</span>
            <input name="email" type="email" required autoComplete="email" className={field} />
          </label>
          <fieldset className="sm:col-span-2">
            <legend className="text-sm font-semibold">{f.interest}</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {f.interests.map((opt, i) => (
                <label key={opt} className="cursor-pointer">
                  <input type="radio" name="interest" value={opt} defaultChecked={i === 0} className="peer sr-only" />
                  <span className="block rounded-full border border-mist px-4 py-2 text-sm transition peer-checked:border-navy peer-checked:bg-navy peer-checked:text-linen peer-focus-visible:ring-2 peer-focus-visible:ring-brass hover:border-navy">
                    {opt}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>
          <label className="block text-sm font-semibold sm:col-span-2">
            {f.message}
            <textarea name="message" rows={4} placeholder={f.messagePh} className={`${field} resize-y`} />
          </label>
        </div>
        <button type="submit" className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 font-semibold text-linen transition hover:-translate-y-0.5 hover:bg-navy">
          {f.submit}
          <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true"><path d="M4 10h11M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
        <p className="mt-4 text-center text-xs text-muted" aria-live="polite">
          {sent ? "✓ " : ""}
          {f.note}
        </p>
      </form>
    </div>
  );
}
