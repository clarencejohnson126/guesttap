import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/i18n";

export const metadata: Metadata = { title: "Datenschutz | GuestTap", robots: { index: false } };

// TODO: Vor dem Livegang juristisch prüfen bzw. mit einem Generator erstellen.
export default function Page() {
  return (
    <LegalPage title="Datenschutz">
      <p>Kurz und ehrlich: Diese Website setzt keine Tracking-Cookies und kein Analyse-Tool ein. Schriften werden beim Build eingebunden und von unserem eigenen Server ausgeliefert.</p>
      <h2>Kontaktformular</h2>
      <p>Das Formular speichert nichts. Es öffnet Ihr eigenes E-Mail-Programm mit einer vorbereiteten Nachricht. Was Sie uns dann schicken, nutzen wir nur, um Ihre Anfrage zu beantworten.</p>
      <h2>Verantwortlich</h2>
      <p>[Vorname Nachname], [Anschrift], <a className="underline" href={`mailto:${site.email}`}>{site.email}</a></p>
      <h2>Hosting</h2>
      <p>[Hosting-Anbieter und Hinweis auf Server-Logfiles eintragen]</p>
    </LegalPage>
  );
}
