import Image from "next/image";

/** Platz für echte Fotos. Ohne src zeigt er einen ruhigen Platzhalter. */
export function ImageSlot({ src, alt, label, className = "", sizes = "(min-width: 1024px) 40vw, 90vw" }: {
  src?: string;
  alt: string;
  label: string;
  className?: string;
  sizes?: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-sand ${className}`}>
      {src ? (
        <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
      ) : (
        <div className="absolute inset-0 grid place-items-center bg-[repeating-linear-gradient(135deg,transparent_0_14px,rgba(23,35,61,0.05)_14px_15px)]">
          <span className="rounded-full bg-paper px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-muted shadow-sm">{label}</span>
        </div>
      )}
    </div>
  );
}
