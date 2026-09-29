import { QrCode } from "./art";

// Nachbau der echten GuestTap-Produkte (Referenz: Fotos von Clarence, 2026-09-29).
// Der aufgedruckte Text gehört zum Produkt, nicht zur Website. Darum liegt er hier.
export type DesignLang = "de" | "en";

const PRINT = {
  stand: {
    de: { title: "Bewerte deinen Aufenthalt", tap: "Tippen", or: "ODER", scan: "Scannen" },
    en: { title: "Rate Your Experience", tap: "Tap", or: "OR", scan: "Scan" },
  },
  // Design „Freuen“: großer Titel, G auf der Welle, nur NFC
  classic: {
    de: { t1: ["WIR WÜRDEN UNS ", "FREUEN"], t2: ["ÜBER IHRE ", "GOOGLE-BEWERTUNG!"], arc: "", bottom: "Tippen Sie, um Ihre Erfahrung zu bewerten" },
    en: { t1: ["WE WOULD ", "APPRECIATE"], t2: ["YOUR ", "GOOGLE REVIEW!"], arc: "TAP YOUR PHONE", bottom: "" },
  },
};

/** Google-„G“, wie es auf den echten Schildern gedruckt ist. */
export function GLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
  );
}

function PrintStars({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 130 24" className={className} aria-hidden="true">
      {Array.from({ length: 5 }, (_, i) => (
        <path key={i} transform={`translate(${i * 26.5} 0)`} d="M12 .8l3.3 7 7.6.9-5.6 5.2 1.5 7.5L12 17.6l-6.8 3.8 1.5-7.5L1.1 8.7l7.6-.9z" fill="#F6C026" />
      ))}
    </svg>
  );
}

/** Vierfarbiger Streifen unten am Ständer. */
function Stripe({ className = "" }: { className?: string }) {
  return (
    <div className={`flex h-[2.6cqw] ${className}`} aria-hidden="true">
      <span className="flex-1 bg-[#EA4335]" />
      <span className="flex-1 bg-[#34A853]" />
      <span className="flex-1 bg-[#4285F4]" />
      <span className="flex-1 bg-[#FBBC05]" />
    </div>
  );
}

/** QR-Code mit Eckklammern wie auf den Schildern. */
function BracketQr({ seed, className = "", dark }: { seed?: number; className?: string; dark?: boolean }) {
  const c = dark ? "border-white" : "border-ink";
  return (
    <div className={`relative p-[7%] ${className}`}>
      {["left-0 top-0 border-l-[0.8cqw] border-t-[0.8cqw] rounded-tl-[3cqw]", "right-0 top-0 border-r-[0.8cqw] border-t-[0.8cqw] rounded-tr-[3cqw]", "left-0 bottom-0 border-l-[0.8cqw] border-b-[0.8cqw] rounded-bl-[3cqw]", "right-0 bottom-0 border-r-[0.8cqw] border-b-[0.8cqw] rounded-br-[3cqw]"].map((p) => (
        <span key={p} className={`absolute h-[20%] w-[20%] ${c} ${p}`} aria-hidden="true" />
      ))}
      <div className="bg-white p-[4%] text-ink">
        <QrCode className="block h-full w-full" seed={seed} />
      </div>
    </div>
  );
}

/** Piktogramm wie auf den Schildern: Oval mit NFC-Wellen, rechts Hand mit Handy „NFC“. Optional Text im Bogen darüber. */
export function TapGlyph({ className = "", arc }: { className?: string; arc?: string }) {
  return (
    <svg viewBox="0 -16 104 80" className={className} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {arc && (
        <text x="3" y="6" transform="rotate(-13 3 6)" fontSize="8" fontWeight="600" textLength="66" lengthAdjust="spacingAndGlyphs" fill="currentColor" stroke="none" style={{ fontFamily: "var(--font-print)" }}>
          {arc}
        </text>
      )}
      <ellipse cx="40" cy="34" rx="36" ry="24" strokeWidth="2.6" />
      <path d="M24 26a11 11 0 0 1 0 16M31 21a17 17 0 0 1 0 26M38 16a23 23 0 0 1 0 36" strokeWidth="4" />
      {/* Handy */}
      <rect x="62" y="6" width="21" height="36" rx="4" fill="#fff" strokeWidth="2.6" />
      <text x="72.5" y="22" textAnchor="middle" fontSize="7" fontWeight="700" fill="currentColor" stroke="none" style={{ fontFamily: "var(--font-print)" }}>NFC</text>
      {/* Finger links am Handy */}
      <path d="M62 20h-4a3 3 0 0 0 0 6h4M62 27h-5a3 3 0 0 0 0 6h5M62 34h-4a3 3 0 0 0 0 6h4" fill="#fff" strokeWidth="2.2" />
      {/* Handballen und Daumen */}
      <path d="M83 26c5 2 7 6 7 11l-1 12c-1 5-5 8-10 8H70c-4 0-7-2-8-6v-9" fill="#fff" strokeWidth="2.6" />
      <path d="M83 30c-3 1-5 4-4 8" strokeWidth="2.2" />
    </svg>
  );
}

/** Piktogramm: Hand hält Handy, das einen QR-Code scannt. */
export function ScanGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 34 50" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="8" y="3" width="19" height="34" rx="3.5" />
      <path d="M12 13v-3h3M23 13v-3h-3M12 24v3h3M23 24v3h-3" strokeWidth="1.8" />
      <rect x="14.5" y="15.5" width="6" height="6" strokeWidth="1.6" />
      <path d="M8 28c-4 1-5 5-3 8l4 6c2 3 5 5 9 5h5" />
    </svg>
  );
}

/** L-förmiger Acryl-Tischständer in Schwarz, wie der echte GuestTap-Ständer. */
export function StandMockup({ lang, tilt = true, className = "" }: { lang: DesignLang; tilt?: boolean; className?: string }) {
  const dark = true;
  const p = PRINT.stand[lang];
  return (
    <div className={`relative [container-type:inline-size] [perspective:1400px] ${className}`}>
      <div className={`relative [transform-style:preserve-3d] ${tilt ? "[transform:rotateY(-14deg)_rotateX(3deg)]" : ""}`}>
        <div
          className={`relative aspect-[5/8.6] w-full overflow-hidden rounded-t-[9cqw] rounded-b-[1.5cqw] px-[8%] pb-[8%] pt-[9%] shadow-[0_40px_60px_-25px_rgba(21,22,27,0.5),inset_0_1px_0_rgba(255,255,255,0.3)] ${
            dark ? "bg-[#0c0c0e] text-white" : "bg-white text-[#1b1b1f] ring-1 ring-black/5"
          } [font-family:var(--font-print)]`}
        >
          <div className={`pointer-events-none absolute -left-1/3 top-0 h-full w-2/3 -skew-x-12 ${dark ? "bg-white/[0.05]" : "bg-black/[0.015]"}`} />
          <div className="relative flex h-full flex-col items-center text-center">
            <p key={lang} className="fade-up text-[7.6cqw] font-semibold leading-[1.1] tracking-tight">{p.title}</p>
            <GLogo className="mt-[6%] w-[34cqw]" />
            <PrintStars className="mt-[6%] w-[60cqw]" />
            <BracketQr seed={7} dark={dark} className="mt-[6%] w-[62cqw]" />
            <div className="mt-auto flex w-full items-end justify-between text-[6cqw]">
              <span className="flex items-end gap-[1.5cqw]">{p.tap}<TapGlyph className="w-[20cqw]" /></span>
              <span className="pb-[1cqw] text-[4.4cqw]">{p.or}</span>
              <span className="flex items-end gap-[1.5cqw]"><ScanGlyph className="w-[9cqw]" />{p.scan}</span>
            </div>
            <Stripe className="mt-[6%] w-[92%]" />
          </div>
        </div>
        {/* Fuß */}
        <div className={`mx-auto -mt-[2px] h-[16cqw] w-[104%] -translate-x-[2%] rounded-b-[4cqw] [transform:rotateX(64deg)] [transform-origin:top] ${dark ? "bg-[#1c1c20]" : "bg-[#ecebe8]"}`} />
      </div>
      <div className="mx-auto -mt-[6%] h-5 w-4/5 rounded-[50%] bg-ink/25 blur-md" />
    </div>
  );
}

/** Acryl-Schild wie das echte GuestTap-Schild: „Wir würden uns freuen …“, nur NFC. */
export function PlateMockup({ lang, className = "" }: { lang: DesignLang; className?: string }) {
  return (
    <div className={`[container-type:inline-size] ${className}`}>
      <div
        className="relative aspect-square w-full overflow-hidden rounded-[4cqw] bg-[#fbfbfa] text-[#16171a] [font-family:var(--font-print)]"
        style={{ boxShadow: "0.8cqw 1cqw 0 #d6d9de, 1.2cqw 1.6cqw 0 #c3c7ce, 0 30px 40px -18px rgba(23,35,61,0.45)" }}
      >
        <ClassicPlate lang={lang} />
        {/* Acryl-Glanz */}
        <div className="pointer-events-none absolute inset-0 rounded-[4cqw] ring-1 ring-inset ring-white/60" />
        <div className="pointer-events-none absolute -left-[20%] top-0 h-full w-[45%] -skew-x-12 bg-white/[0.07]" />
      </div>
    </div>
  );
}

function Wave({ height, band = true }: { height: string; band?: boolean }) {
  return (
    <svg viewBox="0 0 100 60" preserveAspectRatio="none" className="absolute inset-x-0 top-0 w-full" style={{ height }} aria-hidden="true">
      <defs>
        <linearGradient id="plateBlue" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2a52c9" />
          <stop offset="1" stopColor="#3461d9" />
        </linearGradient>
      </defs>
      {band && <path d="M0 50C25 58 45 58 62 52S88 42 100 44V52C88 50 78 58 62 60S25 64 0 56Z" fill="#8fb2f2" />}
      <path d="M0 0H100V44C88 42 78 48 62 52S25 58 0 50Z" fill="url(#plateBlue)" />
    </svg>
  );
}

function ClassicPlate({ lang }: { lang: DesignLang }) {
  const p = PRINT.classic[lang];
  return (
    <>
      <Wave height="50%" />
      <div key={lang} className="fade-up relative flex flex-col items-center px-[6%] pt-[6%] text-center text-white">
        <PrintStars className="w-[36cqw]" />
        <p className="mt-[3cqw] text-[5.3cqw] leading-[1.2] tracking-[-0.01em]">
          <span className="block whitespace-nowrap"><span className="font-medium">{p.t1[0]}</span><span className="font-bold">{p.t1[1]}</span></span>
          <span className="block whitespace-nowrap"><span className="font-medium">{p.t2[0]}</span><span className="font-bold">{p.t2[1]}</span></span>
        </p>
      </div>
      <div className="absolute left-1/2 top-[33%] grid h-[21cqw] w-[21cqw] -translate-x-1/2 place-items-center rounded-full bg-white shadow-[0_1px_6px_rgba(0,0,0,0.15)]">
        <GLogo className="w-[13cqw]" />
      </div>
      <div className={`absolute inset-x-0 flex flex-col items-center ${p.bottom ? "bottom-[4%]" : "bottom-[7%]"}`}>
        <TapGlyph arc={p.arc || undefined} className="w-[50cqw]" />
        {p.bottom && <p className="mt-[1.5cqw] whitespace-nowrap px-[4%] text-center text-[3.7cqw] font-semibold">{p.bottom}</p>}
      </div>
    </>
  );
}
