import { Fragment, type ReactNode } from "react";

/** Playfair zeichnet Bindestriche sehr lang. Hier bekommen sie die kurze Form der Textschrift. */
export function hy(text: string): ReactNode {
  const parts = text.split("-");
  return parts.map((p, i) => (
    <Fragment key={i}>
      {i > 0 && <span className="font-sans font-semibold">-</span>}
      {p}
    </Fragment>
  ));
}
