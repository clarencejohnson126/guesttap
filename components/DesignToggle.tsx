"use client";

import type { DesignLang } from "./mockups";

/** Schalter zwischen deutschem und englischem Produktdesign. */
export function DesignToggle({ value, onChange, label, className = "" }: { value: DesignLang; onChange: (l: DesignLang) => void; label: string; className?: string }) {
  return (
    <div role="radiogroup" aria-label={label} className={`inline-flex items-center gap-1 rounded-full bg-paper p-1 font-mono text-xs font-semibold shadow-sm ring-1 ring-mist ${className}`}>
      {(["de", "en"] as DesignLang[]).map((l) => (
        <button
          key={l}
          type="button"
          role="radio"
          aria-checked={value === l}
          onClick={() => onChange(l)}
          className={`rounded-full px-3 py-1.5 uppercase transition ${value === l ? "bg-navy text-linen" : "text-muted hover:text-ink"}`}
        >
          {l === "de" ? "DE" : "EN"}
        </button>
      ))}
    </div>
  );
}
