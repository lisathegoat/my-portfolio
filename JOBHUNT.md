# Bewerbungs-Plan

Ziel: Senior Product Designer. Erste Bewerbungen **Montag, 28.09.2026**.
Kapazität: 2 Sessions pro Woche à 90 Minuten, neben dem 40h-Job.

> **Stand 20.09.2026:** Zwischen dem 30.08. und heute ist nichts passiert.
> Drei Wochen weg, acht Tage bis zum Termin. Der Termin bleibt. Phase 2
> (Englisch) rutscht hinter den Start, siehe Plan B unten.

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

- [x] Private E-Mail eingetragen (`lisacollmer@googlemail.com`)
- [x] LinkedIn-URL eingetragen (`LINKEDIN_URL` in `src/content.ts`)
- [x] Sprachen eingetragen: Deutsch (Muttersprache), Englisch (fließend)
- [x] Telefon eingetragen
- [ ] **Eigene Domain.** `koelmar.de` ist nicht erreichbar: keine Nameserver,
      kein A-Record, kein MX. Die Adresse `lisa@koelmar.de` empfängt damit auch
      keine Mail mehr. `lisacollmer.de` und `lisa-collmer.de` sehen frei aus,
      `collmer.de` und `kollmar.de` sind vergeben.
      Bei einem Registrar gegenprüfen (INWX, Netcup, Namecheap), kaufen, in
      Vercel unter Settings → Domains eintragen, dann `personal.portfolioUrl`
      in `Resume.tsx` und die `og:`-Tags in `index.html` nachziehen.
- [ ] **HBK Saar** (10/2016 bis 02/2017, 5 Monate): kennzeichnen oder streichen

## Plan B — angepasst am 20.09.

Englisch schafft es nicht mehr vor den 28.09. Reihenfolge deshalb gedreht:

1. **Diese Woche (21.09. bis 27.09.), ca. 4h.** Nur drei Dinge: LinkedIn-Profil,
   Domain, PDF-Lebenslauf gegenlesen. Mehr nicht.
2. **28.09.: bewerben.** Zielgruppe zuerst deutschsprachige Stellen in Berlin.
   Das Portfolio ist deutsch, das passt zusammen. Kein Grund zu warten.
3. **Ab Oktober, parallel zu den Bewerbungen:** eine Case Study pro Woche
   übersetzen. Mitte Oktober ist das Portfolio englisch und der Markt offen.

Bewerben und übersetzen laufen gleichzeitig. Nacheinander kostet nur Zeit,
in der niemand von dir hört.

## Phase 2 — Englisch (verschoben, läuft ab Oktober parallel)

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

- [x] **Zahlen geklärt.** Es gibt kaum belastbare. Kein Event Tracking, und die
      Support-Zahlen sind durch Hardware-Defekte der neuen Sensoren verfälscht.
      Entscheidung: keine Wirkungskennzahlen behaupten. Stattdessen Umfang und
      Verantwortung belegen, das ist überprüfbar: ein auf fünf Sensor-Modelle,
      drei Produkt-Launches, vier Jahre alleinige Designerin, App plus Web plus
      Verpackung.
      Fehlendes Tracking ist im Gespräch kein Makel, sondern ein Thema: benennen,
      was du nicht messen konntest, und was du als Erstes aufsetzen würdest.
- [x] **Ergebnis-Bullets** pro Rolle in `Resume.tsx` geschrieben
- [ ] **PDF-Lebenslauf, eine Seite.** `/resume` → Button "Download PDF".
      Vorher prüfen, ob der Umbruch auf einer Seite landet.
- [ ] **LinkedIn** — eigener Abschnitt unten
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

---

## LinkedIn

Ja, gehört zwingend vor die erste Bewerbung. Zwei Gründe: Recruiter prüfen das
Profil, bevor sie antworten, und LinkedIn ist zusätzlich ein Eingangskanal.
Ein halbes Profil kostet Rückläufe, die du nie zu sehen bekommst.

Reihenfolge: erst Profil, dann Easy Apply. Nicht umgekehrt.

### Profil

- [ ] **Öffentliche URL aufräumen.** Aktuell:
      `linkedin.com/in/lisa-collmer-79312315b`. Die Ziffernfolge ist automatisch
      vergeben und steht später auf Lebenslauf, Portfolio-Footer und in jeder
      Bewerbung. Profil öffnen → rechts oben **Öffentliches Profil und URL
      bearbeiten** → Stift neben der URL → auf `lisacollmer` ändern (oder
      `lisa-collmer`, falls vergeben) → speichern.
      Danach `LINKEDIN_URL` in `src/content.ts` nachziehen.
      LinkedIn leitet die alte URL weiter, es geht nichts kaputt.
- [ ] **Profilsprache Englisch.** LinkedIn kann mehrere Profilsprachen führen.
      Wenn die Suche englischsprachig läuft, muss das englische Profil das
      Hauptprofil sein. Deutsch optional zusätzlich.
- [ ] **Headline.** Der wichtigste Suchtreffer-Faktor im Profil. Wenn dort nur
      "Head of Product Design" steht, tauchst du bei Recruiter-Suchen nach
      "Product Designer" oder "Senior Product Designer" schlechter auf. Der
      gesuchte Begriff muss wörtlich vorkommen. Grobes Muster:
      `Senior Product Designer · Design Systems & complex product logic · Berlin`
- [ ] **Standort** auf Berlin, plus die Regionen, in denen du suchst.
- [ ] **About-Text.** Nur die ersten zwei Zeilen sind sichtbar, bevor
      "mehr anzeigen" kommt. Das Wichtigste nach vorn. Inhaltlich dieselbe
      Positionierung wie die About-Seite, nicht neu erfinden.
- [ ] **Berufserfahrung.** Dieselben Ergebnis-Bullets wie im Lebenslauf.
      Konsistenz zwischen CV, Portfolio und LinkedIn wird geprüft.
- [ ] **Skills.** LinkedIn Recruiter filtert hart über dieses Feld, deshalb ist
      es kein Deko-Abschnitt. Mindestens: Product Design, UX Design, UI Design,
      Design Systems, Interaction Design, Prototyping, User Research, Figma.
      Die drei angepinnten Skills zuerst.
- [ ] **Featured / Im Fokus.** Portfolio-Link und ein bis zwei Case Studies
      anpinnen. Das ist der einzige Ort auf LinkedIn, der wie ein Portfolio wirkt.
- [ ] **Banner.** Freie Fläche. Ein Arbeitsvisual plus Portfolio-URL.
- [ ] **Open to Work auf "nur Recruiter".** Der grüne Rahmen auf dem Foto ist
      für alle sichtbar, also aus. Die Recruiter-Einstellung setzt dich in den
      Open-to-Work-Filter von LinkedIn Recruiter, ein großer Eingangskanal.
      Hinweis: nicht garantiert dicht gegenüber dem eigenen Arbeitgeber,
      aber die deutlich bessere von zwei Optionen.
- [ ] **Positionierung Head → Senior.** Dieselben zwei Lesarten wie beim
      Lebenslauf aktiv schließen: Teamgröße nennen, Hands-on-Anteil deutlich machen.

### Easy Apply

Was es ist: Stellen mit blauem Button "Easy Apply" (Einfach bewerben) werden
direkt auf LinkedIn eingereicht. Stellen mit "Apply" (Bewerben) leiten in das
Bewerbungssystem der Firma weiter, mit eigenem Formular und meist Account.

Was Easy Apply verschickt: dein Profil, einen hochgeladenen Lebenslauf als PDF
und die Antworten auf die Screening-Fragen der Firma. Anschreiben meist nicht,
gelegentlich als optionales Feld.

Einmalig vorbereiten:

- [ ] Profil fertig (Abschnitt oben)
- [ ] PDF-Lebenslauf bereit. `/resume` → Button "Download PDF"
- [ ] Unter Jobs → Einstellungen für Bewerbungen den Lebenslauf hochladen.
      LinkedIn speichert bis zu vier Versionen, du wählst pro Bewerbung eine aus.
- [ ] Telefonnummer hinterlegen, die wird bei fast jedem Easy Apply abgefragt
- [x] Standardantworten festgelegt:
      - Kündigungsfrist: 3 Monate
      - Gehaltsvorstellung: 78.000 bis 88.000 EUR brutto pro Jahr
      - Arbeitserlaubnis: DE-Staatsbürgerin, keine Sponsoring-Frage
      - Standort: Berlin, remote in Europa möglich

Ablauf pro Stelle: Jobs → Suche → Filter "Einfach bewerben" → Stelle öffnen →
Button klicken → Lebenslauf auswählen → Fragen beantworten → absenden.
Zwei bis drei Minuten. Unter Jobs → Meine Jobs → Beworben siehst du alles wieder.

**Einschätzung:** Easy Apply ist für dich billig und deshalb für alle anderen
auch. Auf Senior-Stellen kommen entsprechend viele Bewerbungen an, die Quote ist
niedrig. Sinnvolle Aufteilung der 5 bis 8 Bewerbungen pro Woche:

- Easy Apply als Mengenkanal, schnell und breit
- Für die 5 bis 10 Firmen, die du wirklich willst: direkt über die Firmenseite
  bewerben und zusätzlich eine kurze Nachricht an die Design-Lead oder eine
  Designerin im Team. Das schlägt Easy Apply deutlich.

### Offene Fragen an mich selbst

Ohne diese Angaben lassen sich Headline, About-Text, Ergebnis-Bullets und die
Head-zu-Senior-Positionierung nicht schreiben. Sie sind Tatsachenbehauptungen
über dich, die im Gespräch geprüft werden, deshalb kommen sie von dir und nicht
aus einer plausiblen Schätzung. Einmal beantworten, dann fließen sie in
Lebenslauf, LinkedIn und Case Studies gleichzeitig.

**Rolle bei FYTA**
- [ ] Wie viele Menschen hast du geführt, und in welcher Disziplin?
      Falls null: war "Head of" Titel für alleinige Design-Verantwortung?
- [ ] Wie hoch war der Anteil eigener Design-Arbeit gegenüber Steuerung?
- [ ] Was lag außer Design in deiner Verantwortung (Research, Strategie,
      Zusammenarbeit mit Hardware oder Firmware, Roadmap)?

**Zahlen** (drei bis fünf reichen, alles was du belegen kannst)
- [ ] Support-Tickets zu Setup-Problemen vor und nach dem Launch
- [ ] Anzahl unterstützter Sensor-Modelle vor und nach dem Umbau
- [ ] App-Nutzerzahl, Downloads oder Store-Bewertung
- [ ] Irgendeine Quote, die sich verändert hat (Setup-Abbrüche, Retouren,
      Wiederkehr-Rate)

**Frühere Stationen**
- [ ] Loveto (2018 bis 2021): welche Art Projekte, welche Kunden, was ist dein
      vorzeigbarer Anteil?
- [ ] Eichmeister (2017 bis 2018): Schwerpunkt?
- [ ] HBK Saar (5 Monate): abgebrochen, gewechselt oder abgeschlossen?

**Suche**
- [ ] Zielrollen: eher Produkt mit Hardware-Bezug, oder auch reines SaaS/B2B?
- [ ] Orte: nur Berlin, deutschlandweit remote, europaweit remote?
- [ ] Sprachniveau Englisch, wie du es auf dem Lebenslauf angeben würdest
- [ ] Kündigungsfrist
- [ ] Gehaltsvorstellung (wird bei Easy Apply direkt abgefragt)

---

## Entscheidungen vom 20.09.

**Titel.** "Head of Product Design" bleibt so auf dem Lebenslauf. Es ist dein
echter Titel, Zeugnisse und Referenzen bestätigen ihn, und kleinreden schadet
doppelt. "Design Lead" wäre weder Auf- noch Abstieg, nur ungenauer: Lead
impliziert Führung von Designer:innen, du führst eine Werkstudentin.

Das Problem ist nicht der Titel, sondern die fehlende Umfangszeile darunter.
Die steht jetzt im ersten Bullet: alleinige Designverantwortung, Hands-on. Damit
sind beide Fehllesarten geschlossen, ohne dass du dich kleiner machst.

Auf LinkedIn sind das zwei verschiedene Felder:
- **Positionsbezeichnung:** "Head of Product Design", faktisch
- **Headline:** dort gehört "Senior Product Designer" hin, weil Recruiter danach
  suchen und die Headline das Suchfeld ist

**Loveto und Eichmeister.** Deine Einschätzung stimmt: nicht ins Portfolio. Auf
den Lebenslauf gehören sie trotzdem, sonst entstehen Lücken. Jetzt drei bzw.
eine Zeile, mit Kundennamen, weil KfW, HOWOGE und Stadtreinigung Hamburg für
sich sprechen. Keine Case Studies daraus bauen.

**HBK Saar.** Bleibt drin, schließt die Lücke zwischen B.A. und Eichmeister.
Steht jetzt als "Wechsel zu Interface Design, FH Potsdam". Das ist die Wahrheit
und klingt nach Entscheidung, nicht nach Abbruch.

**Frühere Praktika.** Von einem eigenen Abschnitt auf eine Zeile eingedampft,
Abitur gestrichen. Auf einem Senior-Lebenslauf tragen beide nichts.

---

## Case-Study-Review 20.09.

Durchgesehen: alle zwölf Projektordner im Vault. Maßstab war deine Frage, ob ein
Projekt Türen öffnet, die sonst zu bleiben. Nicht, ob es gute Arbeit ist.

### Ergebnis: vier Case Studies reichen zum Bewerben. Vor dem 28.09. kommt nichts dazu.

Die vorhandenen vier belegen dasselbe sauber und mehrfach: Systemlogik,
Edge Cases, Consumer Mobile, Hardware-Nähe. Ein fünftes Projekt aus derselben
Familie erhöht die Trefferquote nicht.

### Eine Lücke ist echt: B2B und dichte Daten-UI

Alles im Portfolio ist Consumer Mobile. Für B2B- und SaaS-Rollen, die du
ausdrücklich willst, fehlt jeder Beleg für Tabellen, Filter, Rollen,
mandantenfähige Informationsarchitektur. Das ist kein Stilthema: Recruiter für
B2B filtern danach, und du wirst ohne Beleg nach hinten sortiert.

**Bauen: FYTA B2B Dashboard.** Einziges Projekt, das diese Lücke schließt.
Desktop-first, Site → Zone → Sensor → Plant, 50 bis 500+ Pflanzen über mehrere
Standorte, Widget-System, Care Actions mit aktivitätsbasierter Inferenz,
Visit Planner, Handoff an Frontend. Laufendes Projekt, Material ist frisch.

**Zeitpunkt: Oktober, parallel zu den Bewerbungen.** Nicht vorher. Eine Case
Study kostet 6 bis 10 Stunden, die du vor dem 28.09. nicht hast.

**Reihenfolge ab 28.09.:**
1. Consumer-, IoT- und Hardware-Rollen sofort bewerben, Portfolio ist dafür fertig.
2. B2B Dashboard im Oktober bauen.
3. Danach gezielt B2B- und SaaS-Rollen angehen.

### Nicht bauen

- **Terra Onboarding.** `case_study.md` ist fertig und stärker geschrieben als
  alles, was live ist. Erzählt aber dieselbe Geschichte wie FYTA
  Sensoranbindung: Consumer, Mobile, Onboarding, Sensor. Vier von fünf Case
  Studies wären dann FYTA-Consumer.
  **Aber:** beim Englisch-Durchgang die Struktur übernehmen, vor allem
  "Skills Demonstrated" und die Stellen, an denen du deine eigene Argumentation
  widerlegst. Das ist Senior-Signal und kostet nichts.
- **Plant Onboarding, Self Calibration, VPD Monitoring, Terra Sleepmode.**
  Gleiche Belegklasse wie vorhanden.
- **Back Office.** Gute B2B-Arbeit, aber belegt nach dem Dashboard dasselbe
  ein zweites Mal. Zurückhalten.
- **Design System Audit.** Kein eigenständiges Projekt. Ein Audit ohne die
  Konsolidierung danach ist halbe Arbeit. Die Fundstücke (7 Beinahe-Schwarz,
  57 Font-Deklarationen für 9 Rollen) gehören als ein Abschnitt in eine
  bestehende Case Study, wenn du die Bereinigung zeigen kannst.
