import Image from "next/image";
import type { Dict } from "@/content/de";
import { hy } from "@/lib/hy";

/** Echte Fotos der GuestTap-Produkte an ihrem Einsatzort. */
export function UseCases({ t }: { t: Dict["uses"] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {t.spots.map((s, i) => (
        <article key={s.key} data-reveal style={{ ["--d" as string]: `${i * 90}ms` }} className="group overflow-hidden rounded-[1.75rem] bg-paper ring-1 ring-mist">
          <div className="relative aspect-[4/3] overflow-hidden bg-sand">
            <Image
              src={s.img}
              alt={s.alt}
              fill
              sizes="(min-width: 1024px) 23vw, (min-width: 640px) 45vw, 92vw"
              className="object-cover transition duration-700 group-hover:scale-[1.04]"
            />
          </div>
          <div className="p-6">
            <span className="inline-block rounded-full bg-sand px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-navy">{s.product}</span>
            <h3 className="display mt-3 text-2xl font-semibold">{hy(s.title)}</h3>
            <p className="mt-2 leading-relaxed text-muted">{s.text}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
