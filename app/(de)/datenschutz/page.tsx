import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { company, site } from "@/lib/i18n";

export const metadata: Metadata = { title: "Datenschutz | GuestTap", robots: { index: false } };

export default function Page() {
  return (
    <LegalPage title="Datenschutz">
      <p>
        Kurz vorweg: Diese Website setzt keine Cookies, kein Tracking und kein Analyse-Tool ein. Wir erheben nur die Daten, die technisch nötig sind oder die Sie uns selbst
        schicken.
      </p>

      <h2>1. Verantwortlicher</h2>
      <p>
        {company.name}, Inhaber {company.owner}
        <br />
        {company.street}, {company.zip} {company.city}
        <br />
        E-Mail: <a className="underline" href={`mailto:${site.email}`}>{site.email}</a>
      </p>

      <h2>2. Hosting und Server-Logfiles</h2>
      <p>
        Die Website wird bei Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA gehostet. Beim Aufruf der Seite verarbeitet Vercel automatisch technische Daten, die Ihr
        Browser übermittelt: IP-Adresse, Datum und Uhrzeit, aufgerufene Seite, Referrer, Browser und Betriebssystem. Das ist nötig, um die Seite sicher und stabil
        auszuliefern. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren Betrieb).
      </p>
      <p>
        Vercel ist unter dem EU-US Data Privacy Framework zertifiziert. Zusätzlich haben wir mit Vercel einen Vertrag zur Auftragsverarbeitung inklusive
        Standardvertragsklauseln geschlossen. Die Logdaten werden nach kurzer Zeit automatisch gelöscht.
      </p>

      <h2>3. Kontakt per E-Mail</h2>
      <p>
        Das Anfrageformular speichert und versendet nichts selbst. Es öffnet nur Ihr eigenes E-Mail-Programm mit einer vorbereiteten Nachricht. Wenn Sie uns schreiben,
        verarbeiten wir Ihre Angaben (zum Beispiel Name, E-Mail, Hotel, Nachricht), um Ihre Anfrage zu beantworten und gegebenenfalls ein Angebot zu erstellen. Rechtsgrundlage
        ist Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) bzw. lit. f DSGVO (Beantwortung allgemeiner Anfragen). Wir löschen die Daten, sobald sie nicht mehr gebraucht werden
        und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
      </p>

      <h2>4. Schriftarten</h2>
      <p>Alle Schriften werden von unserem eigenen Server ausgeliefert. Beim Aufruf der Seite wird keine Verbindung zu Google Fonts oder anderen Schriftanbietern aufgebaut.</p>

      <h2>5. Externe Links</h2>
      <p>Links zu anderen Seiten (etwa Google) werden erst geöffnet, wenn Sie darauf klicken. Ab dann gilt die Datenschutzerklärung des jeweiligen Anbieters.</p>

      <h2>6. Ihre Rechte</h2>
      <p>
        Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20)
        und Widerspruch gegen Verarbeitungen auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (Art. 21). Eine kurze E-Mail an uns genügt.
      </p>
      <p>
        Außerdem können Sie sich bei einer Datenschutz-Aufsichtsbehörde beschweren, zum Beispiel beim Landesbeauftragten für den Datenschutz und die Informationsfreiheit
        Baden-Württemberg, Lautenschlagerstraße 20, 70173 Stuttgart.
      </p>

      <h2>7. Aktualität</h2>
      <p>Stand: September 2026. Wenn sich etwas an der Website ändert, passen wir diese Erklärung an.</p>
    </LegalPage>
  );
}
