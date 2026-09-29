// Kleine, wiederverwendbare Grafiken. Reines SVG, keine Bilder, keine Abhängigkeiten.

export function Stars({ className = "h-4", filled = 5 }: { className?: string; filled?: number }) {
  return (
    <svg viewBox="0 0 120 22" className={className} aria-hidden="true">
      {Array.from({ length: 5 }, (_, i) => (
        <path
          key={i}
          transform={`translate(${i * 24.5} 0)`}
          d="M11 1.2l2.9 6.2 6.8.8-5 4.6 1.4 6.7L11 16.1l-6.1 3.4 1.4-6.7-5-4.6 6.8-.8z"
          fill={i < filled ? "var(--color-star)" : "none"}
          stroke="var(--color-star)"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
      ))}
    </svg>
  );
}

export function NfcIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
      <path d="M6.5 8.5a5 5 0 0 1 0 7" />
      <path d="M10 6a9 9 0 0 1 0 12" />
      <path d="M13.5 3.5a13 13 0 0 1 0 17" />
      <circle cx="3.5" cy="12" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Dekorativer QR-Code. Deterministisch generiert, zeigt bewusst auf nichts. */
export function QrCode({ className = "h-16 w-16", fg = "currentColor", seed = 7 }: { className?: string; fg?: string; seed?: number }) {
  const n = 25;
  let s = seed;
  const rnd = () => ((s = (s * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff);
  const inFinder = (x: number, y: number) =>
    (x < 8 && y < 8) || (x > n - 9 && y < 8) || (x < 8 && y > n - 9);
  let d = "";
  for (let y = 0; y < n; y++)
    for (let x = 0; x < n; x++) if (!inFinder(x, y) && rnd() > 0.52) d += `M${x} ${y}h1v1h-1z`;
  const finder = (x: number, y: number) =>
    `M${x} ${y}h7v7h-7zM${x + 1} ${y + 1}v5h5v-5zM${x + 2} ${y + 2}h3v3h-3z`;
  return (
    <svg viewBox={`-1 -1 ${n + 2} ${n + 2}`} className={className} aria-hidden="true" shapeRendering="crispEdges">
      <path d={d} fill={fg} />
      <path d={finder(0, 0) + finder(n - 7, 0) + finder(0, n - 7)} fill={fg} fillRule="evenodd" />
    </svg>
  );
}

export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <rect width="32" height="32" rx="9" fill="var(--color-navy)" />
      <circle cx="10" cy="16" r="2.6" fill="var(--color-star)" />
      <path d="M15 10.5a7.5 7.5 0 0 1 0 11M19.5 7a12 12 0 0 1 0 18" fill="none" stroke="var(--color-linen)" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark />
      <span className="display text-[1.35rem] font-bold tracking-tight">
        Guest<span className="text-brass">Tap</span>
      </span>
    </span>
  );
}

/** Klassischer Hotelschlüssel-Anhänger. */
export function KeyTag({ label, active }: { label: string; active?: boolean }) {
  return (
    <svg viewBox="0 0 64 130" className="h-full w-full drop-shadow-[0_8px_10px_rgba(23,35,61,0.18)]" aria-hidden="true">
      <path
        d="M32 4c9 0 16 5 20 14l8 58c2 20-10 48-28 50C14 124 2 96 4 76l8-58C16 9 23 4 32 4z"
        fill={active ? "var(--color-star)" : "var(--color-paper)"}
        stroke={active ? "var(--color-brass)" : "var(--color-mist)"}
        strokeWidth="1.5"
      />
      <circle cx="32" cy="20" r="5" fill="var(--color-navy)" />
      <text x="32" y="88" textAnchor="middle" fontSize="34" fontWeight="700" fill="var(--color-navy)" style={{ fontFamily: "var(--font-display)" }}>
        {label}
      </text>
    </svg>
  );
}
