import type { Dict } from "@/content/de";
import Image from "next/image";
import { hy } from "@/lib/hy";
import { images } from "@/lib/images";
import { site, type Locale } from "@/lib/i18n";
import { NfcIcon, QrCode, Stars, Wordmark } from "./art";
import { Contact } from "./Contact";
import { HeroStage } from "./HeroStage";
import { HowItWorks } from "./HowItWorks";
import { ImageSlot } from "./ImageSlot";
import { ProductShowcase } from "./ProductShowcase";
import { UseCases } from "./UseCases";
import { Nav } from "./Nav";
import { RevealObserver } from "./RevealObserver";

function Eyebrow({ children, dark, className = "" }: { children: React.ReactNode; dark?: boolean; className?: string }) {
  return (
    <p className={`${className} flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] ${dark ? "text-star" : "text-brass"}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
      {children}
    </p>
  );
}

export function Landing({ t, locale }: { t: Dict; locale: Locale }) {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "GuestTap",
      description: t.meta.description,
      url: site.url + (locale === "en" ? "/en" : ""),
      email: site.email,
      areaServed: ["Mannheim", "Heidelberg", "Ludwigshafen", "Rhein-Neckar"],
      address: { "@type": "PostalAddress", addressLocality: "Mannheim", addressCountry: "DE" },
      priceRange: "€40-€50",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: t.faq.items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ];

  return (
    <>
      <a href="#main" className="sr-only z-[60] rounded-full bg-ink px-4 py-2 text-linen focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
        {t.skip}
      </a>
      <Nav t={t.nav} locale={locale} />
      <RevealObserver />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main id="main">
        {/* ================= HERO ================= */}
        <section className="grain guides relative overflow-hidden pb-20 pt-28 sm:pt-32 lg:pb-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="fade-up flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-paper px-3.5 py-1.5 text-sm font-medium shadow-sm ring-1 ring-mist">
                <NfcIcon className="h-4 w-4 text-brass" />
                {t.hero.eyebrow}
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Mannheim / Rhein-Neckar</span>
            </div>

            <h1 className="display mt-8 text-[clamp(2.3rem,6.4vw,6.2rem)] font-bold text-ink">
              <span className="fade-up block" style={{ animationDelay: "80ms" }}>
                {t.hero.line1.slice(0, t.hero.line1.indexOf("Google"))}
                <br className="hidden sm:block" />
                {hy(t.hero.line1.slice(t.hero.line1.indexOf("Google")))}
              </span>
              <span className="sr-only"> {t.hero.line2a} {t.hero.line2b}.</span>
            </h1>

            <div className="mt-2 grid items-start gap-10 lg:grid-cols-12 lg:gap-6">
              <div className="lg:col-span-7">
                <p aria-hidden="true" className="display fade-up text-[clamp(2.3rem,6.4vw,6.2rem)] font-bold" style={{ animationDelay: "160ms" }}>
                  {t.hero.line2a}{" "}
                  <span className="serif-i relative inline-block pr-[0.35em] font-normal text-navy">
                    {t.hero.line2b}
                    <span className="absolute bottom-[0.2em] right-[0.02em] grid h-[0.22em] w-[0.22em] place-items-center text-brass">
                      <span className="absolute inset-0 rounded-full bg-star" />
                      <span className="ripple" />
                      <span className="ripple" />
                    </span>
                  </span>
                </p>
                <p className="fade-up mt-8 max-w-xl text-lg leading-relaxed text-muted sm:text-xl" style={{ animationDelay: "240ms" }}>{t.hero.sub}</p>
                <div className="fade-up mt-9 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "320ms" }}>
                  <a href="#produkt" className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-4 font-semibold text-linen transition hover:-translate-y-0.5 hover:bg-navy">
                    {t.hero.cta1}
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-star text-navy transition group-hover:rotate-45">
                      <svg viewBox="0 0 12 12" className="h-3 w-3" aria-hidden="true"><path d="M3 9l6-6M4 3h5v5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
                    </span>
                  </a>
                  <a href="#kontakt" className="inline-flex items-center justify-center rounded-full px-7 py-4 font-semibold text-ink ring-1 ring-ink/20 transition hover:bg-paper hover:ring-ink">
                    {t.hero.cta2}
                  </a>
                </div>
                <ul className="fade-up mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-ink/80" style={{ animationDelay: "400ms" }}>
                  {t.hero.chips.map((c) => (
                    <li key={c} className="flex items-center gap-2">
                      <svg viewBox="0 0 16 16" className="h-4 w-4 text-brass" aria-hidden="true"><path d="M3 8.5l3 3 7-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative lg:col-span-5 lg:-mt-10">
                <HeroStage t={t.mock} />
                <p className="serif-i mx-auto mt-2 max-w-xs rotate-[-2deg] text-center text-xl text-muted">{t.hero.note}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= PROBLEM ================= */}
        <section className="relative py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div data-reveal className="max-w-3xl">
              <Eyebrow>{t.problem.eyebrow}</Eyebrow>
              <h2 className="display mt-5 text-[clamp(2.2rem,5.4vw,4.6rem)] font-bold">{t.problem.title}</h2>
            </div>

            <ol className="relative mt-16 grid gap-5 md:grid-cols-3 md:gap-6">
              <div aria-hidden="true" className="absolute left-0 right-0 top-[1.1rem] hidden border-t border-dashed border-ink/20 md:block" />
              {t.problem.cards.map((c, i) => (
                <li key={c.title} data-reveal style={{ ["--d" as string]: `${i * 140}ms` }} className={i === 1 ? "md:mt-12" : i === 2 ? "md:mt-24" : ""}>
                  <span className="relative inline-flex items-center gap-2 rounded-full bg-linen pr-3 font-mono text-sm font-semibold text-navy">
                    <span className={`h-3 w-3 rounded-full ${i === 2 ? "bg-ink/20" : "bg-navy"}`} />
                    {c.time}
                  </span>
                  <div className={`mt-4 rounded-[1.75rem] p-7 ring-1 ${i === 2 ? "bg-transparent ring-dashed ring-ink/15" : "bg-paper shadow-[0_20px_50px_-35px_rgba(23,35,61,0.4)] ring-mist"}`}>
                    <h3 className={`display text-2xl font-semibold ${i === 2 ? "text-ink/45" : ""}`}>{c.title}</h3>
                    <p className="mt-3 leading-relaxed text-muted">{c.text}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div data-reveal className="mt-24 text-center sm:mt-32">
              <p className="display mx-auto max-w-5xl text-[clamp(2.2rem,6vw,5.4rem)] font-bold">
                {t.problem.turnA} <span className="serif-i strike font-normal text-navy">{t.problem.turnB}</span>.
              </p>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">{t.problem.turnSub}</p>
            </div>
          </div>
        </section>

        {/* ================= SO FUNKTIONIERT'S (dunkel) ================= */}
        <section id="so-gehts" className="guides-dark relative overflow-hidden bg-navy py-24 text-linen sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div data-reveal className="[&_#step-panel_p]:text-linen/70 [&_.bg-navy]:bg-navy-2">
              <HowItWorks
                t={t.how}
                lang={locale}
                heading={
                  <div className="mb-10">
                    <Eyebrow dark>{t.how.eyebrow}</Eyebrow>
                    <h2 className="display mt-5 text-[clamp(2.2rem,4.6vw,4rem)] font-bold">{t.how.title}</h2>
                  </div>
                }
              />
            </div>
            {locale === "de" && (
              <div data-reveal className="relative mx-auto mt-20 aspect-[4/3] max-w-4xl overflow-hidden rounded-[2rem] ring-1 ring-linen/10">
                <Image src="/images/so-funktionierts.jpg" alt={t.howPhoto.alt} fill sizes="(min-width: 1024px) 56rem, 92vw" className="object-cover" />
              </div>
            )}
          </div>
        </section>

        {/* ================= PRODUKTE ================= */}
        <section id="produkt" className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div data-reveal className="max-w-2xl">
                <Eyebrow>{t.products.eyebrow}</Eyebrow>
                <h2 className="display mt-5 text-[clamp(2.2rem,5.4vw,4.6rem)] font-bold">{t.products.title}</h2>
              </div>
              <p data-reveal className="max-w-sm text-lg leading-relaxed text-muted">{t.products.sub}</p>
            </div>

            <ProductShowcase t={t.products} toggleLabel={t.mock.toggle} />

            <div data-reveal className="mt-6 flex flex-col items-start justify-between gap-5 rounded-[2rem] bg-sand p-7 sm:flex-row sm:items-center sm:p-9">
              <div className="flex items-center gap-5">
                <span className="display grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-navy text-2xl font-bold text-star" aria-hidden="true">%</span>
                <div>
                  <p className="display text-2xl font-semibold">{t.products.volume}</p>
                  <p className="mt-1 max-w-2xl text-muted">{t.products.volumeSub}</p>
                </div>
              </div>
              <a href="#kontakt" className="shrink-0 rounded-full bg-ink px-6 py-3 font-semibold text-linen transition hover:-translate-y-0.5 hover:bg-navy">
                {t.products.volumeCta}
              </a>
            </div>

            <figure data-reveal className="mt-6 grid overflow-hidden rounded-[2rem] bg-navy text-linen lg:grid-cols-[1.4fr_1fr]">
              <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[26rem]">
                <Image src="/images/uebergabe.jpg" alt={t.delivery.alt} fill sizes="(min-width: 1024px) 58vw, 92vw" className="object-cover" />
              </div>
              <figcaption className="flex flex-col justify-center p-8 sm:p-12">
                <p className="display text-[clamp(1.9rem,3.4vw,2.9rem)] font-semibold leading-tight">{t.delivery.title}</p>
                <p className="mt-4 max-w-md text-lg leading-relaxed text-linen/75">{t.delivery.text}</p>
                <a href="#kontakt" className="mt-8 self-start rounded-full bg-star px-6 py-3 font-semibold text-navy transition hover:-translate-y-0.5">{t.hero.cta2}</a>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* ================= FÜR HOTELS ================= */}
        <section id="fuer-hotels" className="bg-sand/60 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div data-reveal className="mb-14 max-w-3xl">
              <Eyebrow>{t.uses.eyebrow}</Eyebrow>
              <h2 className="display mt-5 text-[clamp(2.2rem,5.4vw,4.6rem)] font-bold">{t.uses.title}</h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{t.uses.sub}</p>
            </div>
            <UseCases t={t.uses} />
          </div>
        </section>

        {/* ================= HAUSORDNUNG ================= */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <div data-reveal className="relative rounded-[2.2rem] bg-navy p-8 text-linen shadow-[0_50px_80px_-50px_rgba(23,35,61,0.8)] sm:p-14">
              {["left-5 top-5", "right-5 top-5", "bottom-5 left-5", "bottom-5 right-5"].map((pos) => (
                <span key={pos} aria-hidden="true" className={`absolute ${pos} grid h-4 w-4 place-items-center rounded-full bg-brass shadow-inner`}>
                  <span className="h-px w-2.5 rotate-45 bg-navy/60" />
                </span>
              ))}
              <div className="text-center">
                <Eyebrow dark className="justify-center">{t.rules.eyebrow}</Eyebrow>
                <h2 className="serif-i mt-4 text-[clamp(3rem,8vw,6rem)] leading-none">{t.rules.title}</h2>
                <p className="mt-3 text-linen/70">{t.rules.sub}</p>
              </div>
              <ol className="mt-12 grid gap-x-12 gap-y-9 border-t border-linen/15 pt-10 md:grid-cols-2">
                {t.rules.items.map((r, i) => (
                  <li key={r.title} className="flex gap-5">
                    <span className="display shrink-0 text-2xl font-bold text-star">§{i + 1}</span>
                    <div>
                      <h3 className="display text-xl font-semibold">{r.title}</h3>
                      <p className="mt-2 leading-relaxed text-linen/75">{r.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ================= PREISE ================= */}
        <section id="preise" className="overflow-hidden py-24 sm:py-32">
          <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2">
            <div data-reveal>
              <Eyebrow>{t.pricing.eyebrow}</Eyebrow>
              <h2 className="display mt-5 text-[clamp(2.6rem,6.5vw,5.8rem)] font-bold">{t.pricing.title}</h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">{t.pricing.sub}</p>
              <a href="#kontakt" className="mt-9 inline-flex rounded-full bg-ink px-7 py-4 font-semibold text-linen transition hover:-translate-y-0.5 hover:bg-navy">
                {t.pricing.cta}
              </a>
            </div>

            <div data-reveal className="relative mx-auto w-full max-w-md">
              <div className="zigzag rotate-[1.5deg] bg-paper px-7 pb-12 pt-8 font-mono text-sm shadow-[0_40px_60px_-40px_rgba(23,35,61,0.5)] sm:px-10">
                <div className="flex items-start justify-between border-b border-dashed border-ink/25 pb-5">
                  <div>
                    <Wordmark className="scale-90 origin-left" />
                    <p className="mt-2 text-xs text-muted">Mannheim / Rhein-Neckar</p>
                  </div>
                  <div className="text-right text-xs uppercase tracking-widest text-muted">
                    <p className="font-bold text-ink">{t.pricing.folio}</p>
                    <p>{t.pricing.folioNo}</p>
                  </div>
                </div>
                <p className="mt-4 text-xs uppercase tracking-widest text-muted">{t.pricing.guest}</p>
                <ul className="mt-4 space-y-3">
                  {t.pricing.lines.map((l) => (
                    <li key={l.label} className={`flex items-baseline gap-2 ${"divider" in l && l.divider ? "border-t border-dashed border-ink/25 pt-4" : ""}`}>
                      <span>{l.label}</span>
                      <span className="flex-1 border-b border-dotted border-ink/30" aria-hidden="true" />
                      <span className={`font-bold ${"free" in l && l.free ? "text-brass" : ""}`}>{l.value}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex items-center justify-between border-t-2 border-ink pt-4">
                  <Stars className="h-4" />
                  <span className="serif-i text-lg text-muted">{t.pricing.footnote}</span>
                </div>
                <div className="mt-6 flex justify-center opacity-80"><QrCode className="h-12 w-12 text-ink" seed={99} /></div>
              </div>
              <p className="mt-6 text-center text-sm text-muted">{t.pricing.small}</p>
            </div>
          </div>
        </section>

        {/* ================= TEAM ================= */}
        <section className="bg-sand/60 py-24 sm:py-32">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div data-reveal className="relative mx-auto w-full max-w-sm">
              <div className="rotate-[-3deg] bg-paper p-3 pb-14 shadow-[0_30px_50px_-30px_rgba(23,35,61,0.5)]">
                <ImageSlot src={images.team} alt={t.team.photoAlt} label={t.team.photo} className="aspect-[4/5]" />
                <p className="serif-i absolute bottom-4 left-0 right-0 text-center text-xl text-muted">Mannheim, 2026</p>
              </div>
              <span aria-hidden="true" className="absolute -top-3 left-1/2 h-8 w-28 -translate-x-1/2 rotate-[4deg] bg-star/70" />
            </div>
            <div data-reveal>
              <Eyebrow>{t.team.eyebrow}</Eyebrow>
              <h2 className="display mt-5 text-[clamp(2.2rem,5.4vw,4.6rem)] font-bold">{t.team.title}</h2>
              {t.team.body.map((b) => (
                <p key={b} className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{b}</p>
              ))}
              <dl className="mt-10 flex flex-wrap gap-10">
                {t.team.facts.map((f) => (
                  <div key={f.v}>
                    <dt className="sr-only">{f.v}</dt>
                    <dd className="display text-5xl font-bold text-navy">{f.k}</dd>
                    <dd className="mt-1 font-mono text-xs uppercase tracking-[0.18em] text-muted">{f.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* ================= FAQ ================= */}
        <section id="faq" className="py-24 sm:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
            <div data-reveal className="lg:sticky lg:top-28 lg:self-start">
              <Eyebrow>{t.faq.eyebrow}</Eyebrow>
              <h2 className="display mt-5 text-[clamp(2.2rem,5vw,4.2rem)] font-bold">{t.faq.title}</h2>
            </div>
            <div data-reveal className="divide-y divide-mist border-y border-mist">
              {t.faq.items.map((f) => (
                <details key={f.q} className="group py-2">
                  <summary className="flex items-center justify-between gap-6 rounded-xl py-4 text-left">
                    <span className="display text-xl font-semibold sm:text-2xl">{hy(f.q)}</span>
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-sand transition group-open:bg-navy group-open:text-linen">
                      <svg viewBox="0 0 16 16" className="faq-plus h-3.5 w-3.5 transition-transform duration-300" aria-hidden="true"><path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
                    </span>
                  </summary>
                  <p className="max-w-2xl pb-5 pr-12 text-lg leading-relaxed text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ================= KONTAKT ================= */}
        <section id="kontakt" className="grain guides border-t border-mist py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Contact t={t.contact} />
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="overflow-hidden bg-navy text-linen">
        <div className="mx-auto max-w-7xl px-5 pt-16 sm:px-8">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <p className="serif-i max-w-md text-3xl leading-tight text-linen/90">{t.footer.claim}</p>
            <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-linen/70">
              {t.nav.links.map((l) => (
                <a key={l.href} href={l.href} className="hover:text-star">{l.label}</a>
              ))}
              <a href="/impressum" className="hover:text-star">{t.footer.imprint}</a>
              <a href="/datenschutz" className="hover:text-star">{t.footer.privacy}</a>
            </nav>
          </div>
          <p className="mt-10 max-w-2xl text-xs leading-relaxed text-linen/50">{t.footer.legal}</p>
          <div className="mt-6 flex justify-between border-t border-linen/10 pt-6 font-mono text-xs uppercase tracking-[0.18em] text-linen/50">
            <span>© {new Date().getFullYear()} GuestTap</span>
            <span>{t.footer.made}</span>
          </div>
        </div>
        <p aria-hidden="true" className="display -mb-[0.2em] mt-6 select-none text-center text-[22vw] font-extrabold leading-none text-linen/[0.06]">
          GuestTap
        </p>
      </footer>
    </>
  );
}
