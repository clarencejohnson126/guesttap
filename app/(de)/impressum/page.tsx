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
      <p>{company.brand} ist ein Angebot von {company.name}.</p>

      <h2>Kontakt</h2>
      <p>
        E-Mail: <a className="underline" href={`mailto:${site.email}`}>{site.email}</a>
      </p>

      <h2>Umsatzsteuer-ID</h2>
      <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: {company.vatId}</p>

      <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
      <p>
        {company.owner}
        <br />
        {company.street}, {company.zip} {company.city}
      </p>

      <h2>Verbraucherstreitbeilegung</h2>
      <p>Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>

      <h2>Haftung für Inhalte</h2>
      <p>
        Wir erstellen die Inhalte dieser Seite mit Sorgfalt. Für Richtigkeit, Vollständigkeit und Aktualität können wir trotzdem keine Gewähr übernehmen. Als Diensteanbieter
        sind wir für eigene Inhalte nach den allgemeinen Gesetzen verantwortlich. Sobald uns eine Rechtsverletzung bekannt wird, entfernen wir den betreffenden Inhalt umgehend.
      </p>

      <h2>Haftung für Links</h2>
      <p>
        Diese Seite enthält Links zu externen Websites, auf deren Inhalte wir keinen Einfluss haben. Für diese Inhalte ist der jeweilige Anbieter verantwortlich. Bei
        Bekanntwerden von Rechtsverletzungen entfernen wir solche Links umgehend.
      </p>

      <h2>Urheberrecht</h2>
      <p>
        Texte, Grafiken und Fotos auf dieser Seite unterliegen dem deutschen Urheberrecht. Eine Vervielfältigung oder Verwendung außerhalb dieser Seite ist nur mit unserer
        Zustimmung erlaubt.
      </p>

      <h2>Markenhinweis</h2>
      <p>
        {company.brand} ist ein unabhängiges Unternehmen und steht in keiner Verbindung zu Google LLC. Google und das Google-Logo sind Marken der Google LLC.
      </p>
    </LegalPage>
  );
}
