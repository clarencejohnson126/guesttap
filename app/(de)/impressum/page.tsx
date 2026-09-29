import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/i18n";

export const metadata: Metadata = { title: "Impressum | GuestTap", robots: { index: false } };

// TODO: Vor dem Livegang mit echten Angaben füllen (Pflicht nach § 5 DDG).
export default function Page() {
  return (
    <LegalPage title="Impressum">
      <p><strong>Angaben gemäß § 5 DDG</strong></p>
      <p>[Vorname Nachname]<br />[Vorname Nachname]<br />GuestTap<br />[Straße Hausnummer]<br />[PLZ] Mannheim</p>
      <h2>Kontakt</h2>
      <p>E-Mail: <a className="underline" href={`mailto:${site.email}`}>{site.email}</a></p>
      <h2>Umsatzsteuer</h2>
      <p>[USt-IdNr. oder Hinweis auf Kleinunternehmerregelung nach § 19 UStG]</p>
      <h2>Hinweis</h2>
      <p>GuestTap ist ein unabhängiges Unternehmen und steht in keiner Verbindung zu Google LLC. Google ist eine Marke der Google LLC.</p>
    </LegalPage>
  );
}
