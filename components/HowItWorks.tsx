"use client";

import { useEffect, useRef, useState } from "react";
import type { Dict } from "@/content/de";
import { KeyTag, NfcIcon, Stars } from "./art";
import { PlateMockup } from "./mockups";

const STEP_MS = 4200;

/** Vier Schritte als Schlüsselbrett an der Rezeption, rechts das passende Handy. */
export function HowItWorks({ t, heading, lang = "de" }: { t: Dict["how"]; heading?: React.ReactNode; lang?: "de" | "en" }) {
  const [step, setStep] = useState(0);
  const [auto, setAuto] = useState(true);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.3 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!auto || !visible || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setTimeout(() => setStep((s) => (s + 1) % t.steps.length), STEP_MS);
    return () => window.clearTimeout(id);
  }, [auto, visible, step, t.steps.length]);

  const pick = (i: number) => {
    setAuto(false);
    setStep(i);
  };

  return (
    <div ref={ref} className="grid items-center gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
      <div>
        {heading}
        {/* Schlüsselbrett */}
        <div className="relative rounded-[2rem] bg-navy px-5 pb-8 pt-6 sm:px-8">
          <div className="flex items-center justify-between font-mono text-[0.65rem] uppercase tracking-[0.2em] text-linen/60">
            <span>Reception</span>
            <span aria-hidden="true">{t.hint}</span>
          </div>
          <div role="tablist" aria-label={t.title} className="mt-5 grid grid-cols-4 gap-3 sm:gap-6">
            {t.steps.map((s, i) => (
              <button
                key={s.title}
                role="tab"
                id={`step-tab-${i}`}
                aria-selected={step === i}
                aria-controls="step-panel"
                onClick={() => pick(i)}
                className="group flex flex-col items-center rounded-xl"
              >
                <span className="h-3 w-3 rounded-full bg-brass shadow-[inset_0_-1px_0_rgba(0,0,0,0.3)]" />
                <span className="-mt-0.5 h-3 w-px bg-linen/40" />
                <span
                  key={step === i ? `a${step}` : `i${i}`}
                  className={`block h-24 w-12 origin-top transition-transform duration-500 sm:h-28 sm:w-14 ${
                    step === i ? "swing-once translate-y-1" : "group-hover:rotate-3"
                  }`}
                >
                  <KeyTag label={String(i + 1)} active={step === i} />
                </span>
                <span className="sr-only">{s.title}</span>
              </button>
            ))}
          </div>
          {/* Fortschritt */}
          <div className="mt-6 h-0.5 overflow-hidden rounded bg-linen/15">
            <div
              key={`${step}-${auto && visible}`}
              className="h-full bg-star"
              style={
                auto && visible
                  ? { width: "100%", animation: `grow ${STEP_MS}ms linear` }
                  : { width: `${((step + 1) / t.steps.length) * 100}%`, transition: "width .4s" }
              }
            />
          </div>
        </div>

        <div id="step-panel" role="tabpanel" aria-labelledby={`step-tab-${step}`} aria-live="polite" className="mt-8 min-h-40">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-brass">
            {String(step + 1).padStart(2, "0")} / {String(t.steps.length).padStart(2, "0")}
          </p>
          <h3 key={step} className="fade-up display mt-3 text-3xl font-semibold sm:text-4xl">{t.steps[step].title}</h3>
          <p key={`p${step}`} className="fade-up mt-3 max-w-lg text-lg leading-relaxed text-muted">{t.steps[step].text}</p>
        </div>
      </div>

      <Phone step={step} t={t.phone} lang={lang} />
    </div>
  );
}

function Phone({ step, t, lang }: { step: number; t: Dict["how"]["phone"]; lang: "de" | "en" }) {
  return (
    <div className="relative mx-auto w-full max-w-[16.5rem]">
      {/* Schild, an das das Handy gehalten wird */}
      <div
        className={`absolute -left-12 bottom-8 z-0 w-36 rotate-[-8deg] transition-all duration-700 sm:-left-20 ${
          step >= 1 ? "opacity-100" : "translate-y-6 opacity-0"
        }`}
        aria-hidden="true"
      >
        <PlateMockup lang={lang} />
        {step === 2 && (
          <div className="absolute left-[30%] top-[70%] h-16 w-16 -translate-x-1/2 -translate-y-1/2 text-star">
            <span className="ripple" /><span className="ripple" />
          </div>
        )}
      </div>

      <div
        className={`relative z-10 aspect-[9/19] w-full rounded-[2.8rem] bg-ink p-2.5 shadow-[0_50px_80px_-30px_rgba(23,35,61,0.6)] transition-transform duration-700 ease-[var(--ease-soft)] ${
          step === 2 ? "-translate-x-6 translate-y-3 -rotate-6" : ""
        }`}
      >
        <div className="relative h-full overflow-hidden rounded-[2.3rem] bg-linen">
          <div className="absolute left-1/2 top-2.5 z-20 h-6 w-24 -translate-x-1/2 rounded-full bg-ink" />
          <div key={step} className="fade-up absolute inset-0 flex flex-col px-5 pb-6 pt-14">
            {step === 0 && (
              <>
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted">GuestTap Setup</p>
                <div className="mt-4 rounded-2xl bg-paper p-4 shadow-sm ring-1 ring-mist">
                  <p className="text-xs text-muted">{t.linkedSub}</p>
                  <p className="mt-1 truncate font-mono text-[0.7rem] text-navy">g.page/r/ihr-hotel/review</p>
                </div>
                <div className="mt-3 flex items-center gap-2 rounded-2xl bg-navy p-4 text-linen">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-star text-navy">
                    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" aria-hidden="true"><path d="M3 8.5l3 3 7-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                  </span>
                  <span className="text-sm font-semibold">{t.linked}</span>
                </div>
                <p className="mt-auto text-center text-xs text-muted">{t.tested}</p>
              </>
            )}
            {step === 1 && (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <p className="display text-6xl font-light text-navy">11:02</p>
                <p className="mt-2 text-sm text-muted">{t.placed}</p>
                <div className="mt-10 rounded-full bg-sand px-4 py-2 text-xs font-medium text-navy">{t.placedSub}</div>
              </div>
            )}
            {step === 2 && (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <div className="relative grid h-24 w-24 place-items-center text-brass">
                  <span className="ripple" />
                  <span className="ripple" />
                  <span className="ripple" />
                  <NfcIcon className="h-10 w-10 text-navy" />
                </div>
                <p className="mt-8 font-semibold text-navy">{t.reading}</p>
                <p className="mt-1 text-sm text-muted">{t.readingSub}</p>
              </div>
            )}
            {step === 3 && (
              <>
                <p className="text-center text-sm font-semibold text-navy">{t.reviewPlace}</p>
                <p className="mt-0.5 text-center text-xs text-muted">{t.reviewTitle}</p>
                <div className="mt-6 flex justify-center"><Stars className="h-7" /></div>
                <div className="mt-6 flex-1 rounded-2xl bg-paper p-3 text-xs text-muted ring-1 ring-mist">{t.reviewPh}</div>
                <div className="mt-4 flex h-1 overflow-hidden rounded-full" aria-hidden="true">
                  <span className="flex-1 bg-[#4285F4]" /><span className="flex-1 bg-[#EA4335]" /><span className="flex-1 bg-[#FBBC05]" /><span className="flex-1 bg-[#34A853]" />
                </div>
                <div className="mt-4 rounded-full bg-navy py-2.5 text-center text-sm font-semibold text-linen">{t.post}</div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
