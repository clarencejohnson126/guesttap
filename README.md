# GuestTap Landingpage

Next.js 16 + Tailwind 4. Deutsch auf `/`, Englisch auf `/en`. Keine Zusatz-Abhängigkeiten.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Wo was liegt
- **Texte:** `content/de.ts` und `content/en.ts` (gleiche Struktur, TypeScript prüft Vollständigkeit)
- **Abschnitte:** `components/Landing.tsx`
- **Produkt-Mockups (SVG/CSS):** `components/mockups.tsx`
- **Farben & Schriften:** `app/globals.css` (`@theme`) und `components/Shell.tsx`
- **E-Mail / Domain:** `lib/i18n.ts` (`site`), Domain per `NEXT_PUBLIC_SITE_URL`

## Fotos einbauen
Dateien nach `public/images/` legen und in `lib/images.ts` eintragen, z. B. `team: "/images/team.jpg"`.

## Vor dem Livegang
- `app/(de)/impressum` und `app/(de)/datenschutz` mit echten Angaben füllen (Platzhalter in eckigen Klammern)
- MwSt.-Hinweis bei den Preisen klären (Kleinunternehmer oder nicht)
- `NEXT_PUBLIC_SITE_URL` auf die echte Domain setzen
