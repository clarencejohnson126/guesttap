import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { company, site } from "@/lib/i18n";

export const metadata: Metadata = { title: "Datenschutz | GuestTap", robots: { index: false } };

export default function Page() {
  return (
    <LegalPage title="Datenschutzerklärung">
      <p>
        Der Schutz Ihrer Daten ist uns wichtig. Kurz vorweg: Diese Website setzt keine Cookies, kein Tracking, keine Analyse-Tools und keine Social-Media-Plugins ein. Im
        Folgenden erklären wir, welche Daten dennoch verarbeitet werden, zu welchem Zweck und welche Rechte Sie haben.
      </p>

      <h2>1. Verantwortlicher</h2>
      <p>
        Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
        <br />
        {company.name}, Inhaber {company.owner}
        <br />
        {company.street}, {company.zip} {company.city}, {company.country}
        <br />
        E-Mail: <a className="underline" href={`mailto:${site.email}`}>{site.email}</a>
      </p>
      <p>Ein Datenschutzbeauftragter ist nicht bestellt, da die gesetzlichen Voraussetzungen hierfür (§ 38 BDSG) nicht vorliegen.</p>

      <h2>2. Begriffe und Rechtsgrundlagen</h2>
      <p>
        Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen (Art. 4 Nr. 1 DSGVO). Wir verarbeiten
        solche Daten nur, wenn eine Rechtsgrundlage besteht, insbesondere:
      </p>
      <ul className="list-disc space-y-1 pl-6">
        <li>Art. 6 Abs. 1 lit. a DSGVO: Ihre Einwilligung,</li>
        <li>Art. 6 Abs. 1 lit. b DSGVO: Erfüllung eines Vertrags oder vorvertragliche Maßnahmen, etwa ein Angebot auf Ihre Anfrage,</li>
        <li>Art. 6 Abs. 1 lit. c DSGVO: Erfüllung rechtlicher Pflichten, etwa steuer- und handelsrechtlicher Aufbewahrungspflichten,</li>
        <li>Art. 6 Abs. 1 lit. f DSGVO: berechtigte Interessen, etwa der sichere Betrieb dieser Website.</li>
      </ul>

      <h2>3. Hosting und Server-Logfiles</h2>
      <p>
        Diese Website wird bei der Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA, gehostet. Beim Aufruf der Seite übermittelt Ihr Browser automatisch
        Informationen, die in Server-Logfiles verarbeitet werden:
      </p>
      <ul className="list-disc space-y-1 pl-6">
        <li>IP-Adresse des anfragenden Geräts,</li>
        <li>Datum und Uhrzeit des Zugriffs,</li>
        <li>aufgerufene Seite bzw. Datei und übertragene Datenmenge,</li>
        <li>Referrer-URL (die zuvor besuchte Seite),</li>
        <li>verwendeter Browser und Betriebssystem.</li>
      </ul>
      <p>
        Die Verarbeitung ist erforderlich, um die Website auszuliefern, ihre Stabilität und Sicherheit zu gewährleisten und Missbrauch abzuwehren. Rechtsgrundlage ist Art. 6
        Abs. 1 lit. f DSGVO. Eine Zusammenführung mit anderen Datenquellen findet nicht statt. Die Logdaten werden von Vercel nach kurzer Zeit automatisch gelöscht.
      </p>
      <p>
        Vercel verarbeitet die Daten in unserem Auftrag. Der Auftragsverarbeitungsvertrag (Data Processing Addendum) von Vercel ist Bestandteil der Nutzungsbedingungen. Da
        Daten dabei in die USA übermittelt werden können, stützen wir die Übermittlung auf die Zertifizierung von Vercel unter dem EU-US Data Privacy Framework (Art. 45 DSGVO)
        sowie ergänzend auf Standardvertragsklauseln der EU-Kommission (Art. 46 Abs. 2 lit. c DSGVO).
      </p>

      <h2>4. SSL- bzw. TLS-Verschlüsselung</h2>
      <p>
        Diese Seite nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie an „https://“ in der Adresszeile und am
        Schloss-Symbol Ihres Browsers. Bei aktiver Verschlüsselung können die übertragenen Daten nicht von Dritten mitgelesen werden.
      </p>

      <h2>5. Cookies und lokale Speicherung</h2>
      <p>
        Diese Website verwendet keine Cookies und speichert keine Informationen in Ihrem Browser (etwa im Local Storage). Ein Cookie-Banner ist daher nicht erforderlich. Es
        findet keine Reichweitenmessung und kein Tracking statt.
      </p>

      <h2>6. Schriftarten</h2>
      <p>
        Die auf dieser Seite verwendeten Schriftarten sind lokal eingebunden und werden von unserem eigenen Server bzw. dem unseres Hosters ausgeliefert. Beim Aufruf der Seite
        wird keine Verbindung zu Google Fonts oder anderen externen Schriftanbietern aufgebaut.
      </p>

      <h2>7. Kontakt per E-Mail und Anfrageformular</h2>
      <p>
        Das Anfrageformular auf dieser Seite speichert und versendet keine Daten. Es öffnet lediglich Ihr eigenes E-Mail-Programm mit einer vorbereiteten Nachricht, die Sie
        selbst absenden. Wenn Sie uns per E-Mail kontaktieren, verarbeiten wir die von Ihnen mitgeteilten Daten (zum Beispiel Name, E-Mail-Adresse, Name des Hotels, Inhalt der
        Nachricht), um Ihre Anfrage zu bearbeiten, ein Angebot zu erstellen und Rückfragen zu beantworten.
      </p>
      <p>
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit Ihre Anfrage mit der Anbahnung oder Durchführung eines Vertrags zusammenhängt, und im Übrigen Art. 6 Abs. 1 lit.
        f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen).
      </p>
      <p>
        Für den Empfang von E-Mails nutzen wir den Dienst Outlook.com der Microsoft Ireland Operations Ltd., One Microsoft Place, South County Business Park, Leopardstown,
        Dublin 18, Irland. Dabei kann eine Übermittlung an die Microsoft Corporation in den USA nicht ausgeschlossen werden. Microsoft ist unter dem EU-US Data Privacy
        Framework zertifiziert.
      </p>

      <h2>8. Kunden- und Vertragsdaten</h2>
      <p>
        Wenn Sie bei uns bestellen, verarbeiten wir die für die Vertragsabwicklung erforderlichen Daten, insbesondere Name und Anschrift des Betriebs, Ansprechpartner,
        Kontaktdaten, Rechnungs- und Lieferdaten sowie den Link zu Ihrem Google-Unternehmensprofil, mit dem wir die Schilder und Ständer einrichten. Rechtsgrundlage ist Art. 6
        Abs. 1 lit. b DSGVO. Zur Zustellung geben wir Name und Lieferanschrift an das beauftragte Versandunternehmen weiter, soweit wir nicht persönlich liefern.
      </p>
      <p>
        Buchhaltungs- und Rechnungsdaten bewahren wir entsprechend den gesetzlichen Aufbewahrungsfristen auf (bis zu zehn Jahre nach § 147 AO und § 257 HGB). Rechtsgrundlage ist
        Art. 6 Abs. 1 lit. c DSGVO.
      </p>

      <h2>9. Google-Optimierung (optionale Leistung)</h2>
      <p>
        Beauftragen Sie uns mit der Optimierung Ihres Google-Unternehmensprofils, erhalten wir auf Ihren Wunsch hin Zugriff auf dieses Profil, etwa als Manager. Wir verarbeiten
        die dort hinterlegten Daten ausschließlich, um den Auftrag auszuführen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO. Nach Abschluss des Auftrags können Sie den Zugriff
        jederzeit wieder entziehen. Für die Verarbeitung durch Google selbst gilt die Datenschutzerklärung der Google Ireland Limited.
      </p>

      <h2>10. Hinweise zu unseren NFC- und QR-Produkten</h2>
      <p>
        Unsere Bewertungsschilder und Tischständer enthalten ausschließlich einen Link zur Google-Bewertungsseite des jeweiligen Betriebs. Der Link führt direkt zu Google, ohne
        Umweg über unsere Server. Wir erheben dabei keine Daten über Gäste, die das Schild antippen oder den QR-Code scannen. Für die anschließende Verarbeitung bei Google ist
        allein Google verantwortlich.
      </p>

      <h2>11. Externe Links</h2>
      <p>
        Diese Website enthält Links zu externen Seiten. Diese werden erst aufgerufen, wenn Sie darauf klicken. Ab diesem Zeitpunkt gilt die Datenschutzerklärung des jeweiligen
        Anbieters. Auf die dortige Datenverarbeitung haben wir keinen Einfluss.
      </p>

      <h2>12. Speicherdauer</h2>
      <p>
        Wir speichern personenbezogene Daten nur so lange, wie es für den jeweiligen Zweck erforderlich ist. Anfragen, aus denen kein Auftrag entsteht, löschen wir spätestens
        zwölf Monate nach dem letzten Kontakt. Gesetzliche Aufbewahrungspflichten bleiben unberührt; in diesem Fall wird die Verarbeitung bis zum Ablauf der Frist
        eingeschränkt.
      </p>

      <h2>13. Keine automatisierte Entscheidungsfindung</h2>
      <p>Eine automatisierte Entscheidungsfindung einschließlich Profiling im Sinne von Art. 22 DSGVO findet nicht statt.</p>

      <h2>14. Pflicht zur Bereitstellung</h2>
      <p>
        Die Bereitstellung Ihrer Daten ist weder gesetzlich noch vertraglich vorgeschrieben. Ohne Kontaktdaten können wir Ihre Anfrage allerdings nicht beantworten, und ohne
        Vertragsdaten ist eine Bestellung nicht möglich.
      </p>

      <h2>15. Ihre Rechte</h2>
      <p>Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:</p>
      <ul className="list-disc space-y-1 pl-6">
        <li>Recht auf Auskunft (Art. 15 DSGVO),</li>
        <li>Recht auf Berichtigung (Art. 16 DSGVO),</li>
        <li>Recht auf Löschung (Art. 17 DSGVO),</li>
        <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO),</li>
        <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO),</li>
        <li>Recht auf Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO).</li>
      </ul>
      <p>Für die Ausübung Ihrer Rechte genügt eine formlose E-Mail an {site.email}.</p>

      <h2>16. Widerspruchsrecht (Art. 21 DSGVO)</h2>
      <p className="font-semibold text-ink">
        Soweit wir Daten auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO verarbeiten, haben Sie das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit
        Widerspruch gegen diese Verarbeitung einzulegen. Wir verarbeiten die Daten dann nicht mehr, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung
        nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.
      </p>

      <h2>17. Beschwerderecht bei einer Aufsichtsbehörde</h2>
      <p>
        Unbeschadet anderer Rechtsbehelfe haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren, wenn Sie der Ansicht sind, dass die Verarbeitung
        Ihrer Daten gegen die DSGVO verstößt (Art. 77 DSGVO). Für uns zuständig ist:
        <br />
        Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg, Lautenschlagerstraße 20, 70173 Stuttgart,{" "}
        <a className="underline" href="https://www.baden-wuerttemberg.datenschutz.de" rel="noopener noreferrer" target="_blank">www.baden-wuerttemberg.datenschutz.de</a>
      </p>

      <h2>18. Änderungen dieser Datenschutzerklärung</h2>
      <p>
        Wir passen diese Datenschutzerklärung an, sobald sich die Website, unsere Leistungen oder die Rechtslage ändern. Es gilt die jeweils hier veröffentlichte Fassung.
        <br />
        Stand: September 2026
      </p>
    </LegalPage>
  );
}
