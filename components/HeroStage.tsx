"use client";

import { useEffect, useState } from "react";
import type { Dict } from "@/content/de";
import { DesignToggle } from "./DesignToggle";
import { PlateMockup, StandMockup, type DesignLang } from "./mockups";

/** Produktbühne im Hero. Wechselt DE/EN von selbst, bis jemand selbst umschaltet. */
export function HeroStage({ t }: { t: Dict["mock"] }) {
  const [lang, setLang] = useState<DesignLang>("de");
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setLang((l) => (l === "de" ? "en" : "de")), 3600);
    return () => window.clearInterval(id);
  }, [auto]);

  return (
    <div className="relative mx-auto w-full max-w-[34rem]">
      <div role="img" aria-label={t.alt} className="relative aspect-[1/1.02] w-full">
        <div className="absolute inset-x-[4%] bottom-[6%] top-[14%] rounded-[2.5rem] bg-sand" />
        <div className="absolute inset-x-[4%] bottom-[6%] h-[30%] rounded-b-[2.5rem] bg-mist/70" />

        <div className="absolute left-[60%] top-[42%] h-40 w-40 -translate-x-1/2 -translate-y-1/2 text-brass/60">
          <span className="ripple" />
          <span className="ripple" />
          <span className="ripple" />
        </div>

        <div className="float absolute left-[40%] top-[0%] w-[42%]">
          <StandMockup lang={lang} />
        </div>
        <div className="float-slow absolute bottom-[8%] left-[2%] w-[42%] -rotate-[6deg]">
          <PlateMockup lang={lang} />
        </div>
      </div>
      <div className="absolute right-[2%] top-[16%] flex flex-col items-end gap-1">
        <DesignToggle value={lang} onChange={(l) => { setAuto(false); setLang(l); }} label={t.toggle} className="rotate-[3deg]" />
      </div>
    </div>
  );
}
