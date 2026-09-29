import Link from "next/link";
import { Wordmark } from "./art";

export function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <main className="mx-auto max-w-2xl px-5 py-16 sm:px-8">
      <Link href="/" className="inline-block rounded-lg"><Wordmark /></Link>
      <h1 className="display mt-14 text-5xl font-bold">{title}</h1>
      <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted [&_h2]:display [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-ink">
        {children}
      </div>
      <Link href="/" className="mt-14 inline-block font-semibold underline decoration-star decoration-2 underline-offset-4">← Zurück zur Startseite</Link>
    </main>
  );
}
