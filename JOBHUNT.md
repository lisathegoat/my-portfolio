# Bewerbungs-Plan

Ziel: Senior Product Designer. Erste Bewerbungen **Montag, 28.09.2026**.
Kapazität: 2 Sessions pro Woche à 90 Minuten, neben dem 40h-Job.

**Regel:** Am 28.09. wird bewerben, egal in welchem Zustand alles ist.
Antwortzeiten liegen bei 2 bis 6 Wochen. Jede Woche ohne Bewerbung ist eine
Woche ohne Signal. Interview-Feedback verbessert das Portfolio schneller als
eine weitere Politur-Runde allein.

**80%-Regel:** Wenn eine Aufgabe bei 80% ist und du noch justierst, ist sie fertig.

---

## Phase 1 — Blocker (Woche 1, 31.08. bis 06.09.)

Erledigt in dieser Session:

- [x] Kontaktdaten zentralisiert (`CONTACT_EMAIL`, `LINKEDIN_URL` in `content.ts`)
- [x] Alle `[PLACEHOLDER]`-Marker von `/resume` entfernt, Profiltext gefüllt,
      Skills aus derselben Quelle wie die About-Seite
- [x] "Nächstes Projekt / Coming soon"-Karte gelöscht
- [x] V2 ist die Live-Seite unter `/`. V1, `/template`, `/design-system`, `/lab`
      nur noch in Dev. `/v2` und `/projekte/*/v2` leiten auf die sauberen URLs um
- [x] "Layout V1"-Link aus dem öffentlichen Footer entfernt
- [x] Kaputte Bildpfade behoben (lagen alle in `/template`, jetzt Dev-only);
      toter `cover.png`-Verweis bei FYTA entfernt
- [x] Probe Diagnostic wieder auf der Startseite (war auskommentiert, weil kein
      Cover-Video da ist, läuft jetzt auf `cover.png`)
- [x] Seitentitel, Description und Link-Preview-Tags in `index.html`
- [x] `vercel.json` mit SPA-Rewrite, damit Deeplinks wie `/resume` nicht 404en

Offen, brauche deine Daten:

- [ ] **Private E-Mail eintragen** → `CONTACT_EMAIL` in `src/content.ts`.
      Aktuell steht dort noch `lisa@fyta.de`. Eine Zeile, ersetzt sie überall.
- [ ] **LinkedIn-URL** → `LINKEDIN_URL` in `src/content.ts`
- [ ] **Sprachen** → `personal.languages` in `src/pages/Resume.tsx`
- [ ] **Telefon** (optional) → `personal.phone` in `src/pages/Resume.tsx`
- [ ] **Eigene Domain** kaufen, in Vercel unter Settings → Domains eintragen,
      dann `personal.portfolioUrl` und die `og:`-Tags in `index.html` nachziehen
- [ ] **HBK Saar** (10/2016 bis 02/2017, 5 Monate): kennzeichnen oder streichen

## Phase 2 — Englisch (Woche 2 bis 3, 07.09. bis 20.09.)

Englisch ist die größte einzelne Hebelwirkung. Der Berliner Senior-Markt läuft
auf Englisch, deutsch-only halbiert die Anzahl erreichbarer Stellen.

- [ ] FYTA Sensoranbindung übersetzen (max. 2h)
- [ ] Probe Diagnostic übersetzen (max. 2h)
- [ ] Datenvisualisierung übersetzen (max. 2h)
- [ ] Lern-App übersetzen (max. 2h)
- [ ] About + Startseite + Nav übersetzen (max. 2h)

Vorgehen: maschinell vorübersetzen, dann ein Durchgang von dir. Nicht neu
schreiben. Die Gedankenführung ist gut, nur die Sprache wechselt.
Beim Übersetzen die ~48 Gedankenstriche gleich mit auflösen (eigene Copy-Regel).

Sprachumschalter nur, wenn er nebenbei abfällt. Sonst Englisch only.

## Phase 3 — Bewerbungs-Kit (Woche 3, 14.09. bis 20.09.)

- [ ] **Zahlen sammeln.** 3 bis 5 echte Werte, die du belegen kannst:
      Support-Tickets vor/nach Launch, Setup-Abbruchquote, Store-Rating,
      Anzahl unterstützter Sensor-SKUs, Teamgröße. Gehen in Case Studies,
      Lebenslauf und LinkedIn. Aktuell ist jede Wirkung nur ein Adjektiv.
- [ ] **Ergebnis-Bullets** pro Rolle in `Resume.tsx` (1 bis 3 je Station)
- [ ] **PDF-Lebenslauf, eine Seite.** `/resume` → Button "Download PDF".
      Vorher prüfen, ob der Umbruch auf einer Seite landet.
- [ ] **LinkedIn:** Headline, About-Text (gleiche Positionierung wie die
      About-Seite), FYTA-Rolle mit denselben Bullets, Portfolio-Link,
      "Open to work" auf Recruiter-only
- [ ] **Anschreiben-Template**, ein Absatz, anpassbar

**Positionierung, überall gleich:** Du bist Head of Product Design und bewirbst
dich als Senior. Zwei Lesarten musst du aktiv schließen: "steigt ab, ist bald
gelangweilt" und "Managerin, die das Handwerk verlernt hat". Also explizit:
Teamgröße nennen und deutlich machen, dass die Rolle hands-on IC-Arbeit war.

## Phase 4 — Bewerben (ab 28.09., laufend)

- [ ] 5 bis 8 Bewerbungen pro Woche

## Phase 5 — Parallel, erst nach dem Start der Bewerbungen

- [ ] Präsentations-Deck, eine Case Study, ~20 Slides, für die Portfolio-
      Präsentation im Interview. Hier fällt die Entscheidung bei Senior-Rollen.
      Wird erst vor dem ersten Interview gebraucht, nicht vorher.
- [ ] Überarbeitete Designs einsetzen. **Nur Bilder tauschen, Copy nicht anfassen.**
- [ ] Probe Diagnostic auf V2 umbauen (bricht aktuell optisch aus)
- [ ] Wide-Cover-Video für Probe Diagnostic

---

## Warum keine Figma-Prototyp-Bewerbung

Website und PDF decken unterschiedliche Aufgaben ab, ein dritter Kanal bringt
nichts:

| Asset | Aufgabe |
|---|---|
| Website | Link in Lebenslauf und LinkedIn. Auffindbarkeit, Glaubwürdigkeit |
| PDF-Lebenslauf | Bewerbungsformulare, Weiterleitung intern |
| Präsentations-Deck | Portfolio-Talk im Interview |

Figma-Prototyp-Links laden langsam, brechen auf Mobil und lassen sich nicht an
Bewerbungsformulare anhängen. Die Website leistet dasselbe besser.
