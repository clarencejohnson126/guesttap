import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { company, site } from "@/lib/i18n";

export const metadata: Metadata = { title: "Impressum | GuestTap", robots: { index: false } };

export default function Page() {
  return (
    <LegalPage title="Impressum">
      <h2>Angaben gemäß § 5 DDG</h2>
      <p>
        {company.name}
        <br />
        Inhaber: {company.owner}
        <br />
        {company.street}
        <br />
        {company.zip} {company.city}
        <br />
        {company.country}
      </p>
      <p>
        {company.brand} ist eine Marke und ein Angebot von {company.name}, Einzelunternehmen, Inhaber {company.owner}.
      </p>

      <h2>Kontakt</h2>
      <p>
        Telefon: <a className="underline" href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
        <br />
        E-Mail: <a className="underline" href={`mailto:${site.email}`}>{site.email}</a>
        <br />
        Anfragen beantworten wir in der Regel innerhalb von 24 Stunden.
      </p>

      <h2>Umsatzsteuer-ID</h2>
      <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz: {company.vatId}</p>

      <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
      <p>
        {company.owner}
        <br />
        {company.street}, {company.zip} {company.city}
      </p>

      <h2>Zielgruppe</h2>
      <p>
        Unser Angebot richtet sich an Unternehmer im Sinne von § 14 BGB, insbesondere an Hotels, Pensionen, Boardinghouses und andere Beherbergungsbetriebe. Ein Verkauf an
        Verbraucher findet nicht statt.
      </p>

      <h2>EU-Streitschlichtung und Verbraucherstreitbeilegung</h2>
      <p>
        Die Plattform der EU-Kommission zur Online-Streitbeilegung wurde zum 20. Juli 2025 eingestellt. Wir sind nicht bereit und nicht verpflichtet, an
        Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>

      <h2>Haftung für Inhalte</h2>
      <p>
        Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Wir erstellen die Inhalte mit größtmöglicher Sorgfalt,
        übernehmen jedoch keine Gewähr für Richtigkeit, Vollständigkeit und Aktualität. Wir sind nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
        überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen
        nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine Haftung ist erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Sobald uns
        entsprechende Rechtsverletzungen bekannt werden, entfernen wir diese Inhalte umgehend.
      </p>

      <h2>Haftung für Links</h2>
      <p>
        Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für diese fremden Inhalte übernehmen wir keine Gewähr. Für die
        Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche
        Rechtsverstöße geprüft; rechtswidrige Inhalte waren zu diesem Zeitpunkt nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist ohne konkrete
        Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen entfernen wir derartige Links umgehend.
      </p>

      <h2>Urheberrecht</h2>
      <p>
        Die auf diesen Seiten erstellten Inhalte und Werke, insbesondere Texte, Grafiken, Produktvisualisierungen und Fotos, unterliegen dem deutschen Urheberrecht. Die
        Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen unserer schriftlichen Zustimmung. Soweit Inhalte
        auf dieser Seite nicht von uns erstellt wurden, werden die Urheberrechte Dritter beachtet. Solltet ihr trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
        bitten wir um einen Hinweis per E-Mail. Bei Bekanntwerden von Rechtsverletzungen entfernen wir derartige Inhalte umgehend.
      </p>

      <h2>Bildnachweis</h2>
      <p>Grafiken, Produktdarstellungen und Szenenbilder: {company.name}. Die Szenenbilder dienen der Veranschaulichung des Einsatzes unserer Produkte.</p>

      <h2>Markenhinweis</h2>
      <p>
        {company.brand} ist ein unabhängiges Unternehmen und steht in keiner Verbindung zu Google LLC. {company.brand} wird von Google weder gesponsert noch unterstützt oder
        genehmigt. Google, Google Maps und das Google-Logo sind Marken der Google LLC. Alle weiteren genannten Marken sind Eigentum ihrer jeweiligen Inhaber. Die Nennung dient
        ausschließlich der Beschreibung der Funktionsweise unserer Produkte.
      </p>

      <h2>Abmahnungen</h2>
      <p>
        Sollten Inhalte oder die Gestaltung dieser Seite fremde Rechte oder gesetzliche Bestimmungen verletzen, bitten wir um eine entsprechende Nachricht ohne Kostennote. Wir
        werden berechtigte Beanstandungen unverzüglich beheben, ohne dass die Einschaltung eines Rechtsbeistandes erforderlich ist.
      </p>
    </LegalPage>
  );
}
