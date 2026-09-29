"use client";

import { useState } from "react";
import type { Dict } from "@/content/de";
import { hy } from "@/lib/hy";
import { Stars } from "./art";
import { DesignToggle } from "./DesignToggle";
import { GLogo, PlateMockup, StandMockup, type DesignLang } from "./mockups";

function Check() {
  return <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" aria-hidden="true" />;
}

/** Produktkarten mit gemeinsamem DE/EN-Schalter für die Designs. */
export function ProductShowcase({ t, toggleLabel }: { t: Dict["products"]; toggleLabel: string }) {
  const [lang, setLang] = useState<DesignLang>("de");
  const [plate, stand] = t.items;
  const s = t.service;

  return (
    <>
      <div data-reveal className="mt-10 flex items-center gap-3">
        <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted">{toggleLabel}</span>
        <DesignToggle value={lang} onChange={setLang} label={toggleLabel} />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        {[plate, stand].map((p, i) => (
          <article key={p.name} data-reveal style={{ ["--d" as string]: `${i * 120}ms` }} className="group flex flex-col overflow-hidden rounded-[2rem] bg-paper ring-1 ring-mist transition duration-500 hover:-translate-y-1 hover:shadow-[0_40px_70px_-45px_rgba(23,35,61,0.55)]">
            <div className="relative grid h-[22rem] place-items-center overflow-hidden bg-sand">
              {i === 0 ? (
                <div className="w-60 -rotate-3 transition duration-700 group-hover:rotate-0">
                  <PlateMockup lang={lang} />
                </div>
              ) : (
                <div className="w-40 transition duration-700 group-hover:-translate-y-1">
                  <StandMockup lang={lang} />
                </div>
              )}
            </div>
            <div className="flex flex-1 flex-col p-7">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">{p.tag}</p>
              <h3 className="display mt-2 text-3xl font-semibold">{p.name}</h3>
              <ul className="mt-5 space-y-2.5 text-[0.97rem]">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5"><Check />{f}</li>
                ))}
              </ul>
              <div className="mt-auto flex items-end justify-between gap-4 pt-8">
                <p className="flex items-baseline gap-2">
                  <span className="display text-5xl font-bold">{p.price}</span>
                  <span className="text-sm text-muted">{t.perPiece}</span>
                </p>
                <a href="#kontakt" className="rounded-full px-4 py-2 text-sm font-semibold ring-1 ring-ink/20 transition hover:bg-ink hover:text-linen">{t.cta}</a>
              </div>
            </div>
          </article>
        ))}

        {/* Google-Optimierung als Zusatzleistung */}
        <article data-reveal style={{ ["--d" as string]: "240ms" }} className="flex flex-col overflow-hidden rounded-[2rem] bg-navy text-linen">
          <div className="relative grid h-[22rem] place-items-center overflow-hidden px-8">
            <span className="absolute left-5 top-5 z-10 rounded-full bg-star px-3 py-1 text-xs font-bold text-navy">{s.badge}</span>
            <div className="w-full max-w-[17rem] rotate-2 rounded-2xl bg-paper p-5 text-ink shadow-2xl">
              <div className="flex items-center gap-3">
                <GLogo className="h-6 w-6" />
                <div className="h-2.5 flex-1 rounded-full bg-sand" />
              </div>
              <p className="display mt-5 text-xl font-semibold">{s.mockName}</p>
              <div className="mt-1 flex items-center gap-2 text-sm text-muted">
                <span className="font-semibold text-ink">4,8</span>
                <Stars className="h-3" />
              </div>
              <p className="mt-1 text-xs text-muted">{s.mockType}</p>
              <div className="mt-4 flex gap-4 border-b border-mist text-xs">
                {s.mockTabs.map((tab, k) => (
                  <span key={tab} className={`pb-2 ${k === 0 ? "border-b-2 border-[#4285F4] font-semibold text-[#4285F4]" : "text-muted"}`}>{tab}</span>
                ))}
              </div>
              <div className="mt-4 grid grid-cols-3 gap-1.5">
                {["bg-[#c9b99c]", "bg-[#8fa3b8]", "bg-[#d8cdb8]"].map((c) => <div key={c} className={`aspect-square rounded-md ${c}`} />)}
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col p-7">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-linen/60">{s.tag}</p>
            <h3 className="display mt-2 text-3xl font-semibold">{hy(s.name)}</h3>
            <p className="mt-4 leading-relaxed text-linen/75">{s.text}</p>
            <ul className="mt-5 space-y-2.5 text-[0.97rem]">
              {s.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-star" aria-hidden="true" />{f}</li>
              ))}
            </ul>
            <div className="mt-auto flex items-end justify-between gap-4 pt-8">
              <p className="display text-3xl font-bold">{s.price}</p>
              <a href="#kontakt" className="rounded-full bg-star px-4 py-2 text-sm font-semibold text-navy transition hover:-translate-y-0.5">{s.cta}</a>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
