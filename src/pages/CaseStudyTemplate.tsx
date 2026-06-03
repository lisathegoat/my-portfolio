import CaseStudyLayout, { CaseSection } from '../components/CaseStudyLayout'
import { ImagePlaceholder } from '../components/Placeholder'
import {
  CSHeroImage,
  CSTextIntro,
  CSTextStatement,
  CSTextCallout,
  CSTilesProcess,
  CSTilesNumberStat,
  CSMediaFull,
  CSMediaSplit,
  CSMediaPhoneGrid,
  CSMediaBeforeAfter,
  CSMediaStickyScroll,
  CSMediaCarousel,
  CSCardsHighlight,
  CSCardsImpact,
  CSCardsDecision,
  CSCardsToggle,
  CSListBullet,
  CSReviewCard,
  CSTouchpointStack,
} from '../components/case-study'

export default function CaseStudyTemplate() {
  return (
    <CaseStudyLayout
      title="Component Template — Case Study Baukasten"
      meta={{
        role: 'Head of Product Design',
        tags: ['UI/UX', 'Design System', 'Konzeption'],
        status: 'Template',
      }}
    >
      {/* ─── CS.Hero.Image ─── */}
      <div className="mb-xxl">
        <p className="section-label mb-4">CS.Hero.Image</p>
        <CSHeroImage src="/images/fyta-onboarding/hero.jpg" alt="Hero" />
      </div>

      {/* ─── CS.Text.Intro ─── */}
      <CaseSection label="CS.Text.Intro">
        <CSTextIntro text="Erster Absatz — eine kurze Einleitung, die den Kontext setzt. Worum geht es, was war die Rolle, warum ist dieses Projekt relevant.\n\nZweiter Absatz — vertieft den Kontext. Was war der Ausgangspunkt, welche Rahmenbedingungen existierten. Kein Fließtext, sondern zwei bis drei präzise Sätze." />
      </CaseSection>

      {/* ─── CS.Tiles.Process ─── */}
      <CaseSection label="CS.Tiles.Process">
        <CSTilesProcess
          tiles={[
            { label: 'Research', description: 'Support-Tickets, Tech-Interviews, System-Analyse der bestehenden Flows und Backend-Constraints.' },
            { label: 'Definition', description: 'Herausforderung definieren, Systemlogik kartieren, Edge Cases identifizieren.' },
            { label: 'Design', description: 'Onboarding-System konzipieren, iterativ validieren, UI finalisieren.' },
          ]}
        />
      </CaseSection>

      {/* ─── CS.Text.Statement ─── */}
      <CaseSection>
        <div className="flex flex-col gap-4">
          <p className="section-label">CS.Text.Statement</p>
          <CSTextStatement text="Wie lässt sich ein Onboarding gestalten, das mit einem wachsenden Sensor-Ökosystem skaliert — ohne dass Nutzer:innen die Komplexität dahinter spüren?" />
        </div>
      </CaseSection>

      {/* ─── CS.Text.Callout ─── */}
      <CaseSection label="CS.Text.Callout">
        <CSTextCallout text="Firmware-Updates sind ein Pflichtschritt — aber Nutzer:innen dürfen sie nie als separaten Schritt erleben. Der Update läuft unsichtbar als Lademoment innerhalb eines Blocks." />
      </CaseSection>

      {/* ─── CS.List.Bullet ─── */}
      <CaseSection label="CS.List.Bullet">
        <CSListBullet
          items={[
            'Ein Terra-Sensor versorgt drei Pflanzen gleichzeitig — das bisherige Onboarding kannte nur eine.',
            'Jeder Sensortyp erfordert am Ende eine grundlegend andere physische Handlung.',
            'Nicht jede Pflanzenkombination ist valide — Messkonflikte entstehen bei widersprüchlichem Substrat.',
          ]}
        />
      </CaseSection>

      {/* ─── CS.Media.Full ─── */}
      <CaseSection label="CS.Media.Full">
        <CSMediaFull
          src="/images/fyta-onboarding/02_Add sensor 1 Flow chart.png"
          alt="Flowchart"
          caption="Flowchart: Alle Abhängigkeiten und Sonderfälle als Systemlogik, bevor der erste Screen entworfen wurde."
        />
      </CaseSection>

      {/* ─── CS.Media.Split ─── */}
      <CaseSection label="CS.Media.Split">
        <div className="flex flex-col gap-xxl">
          <CSMediaSplit
            src="/images/fyta-onboarding/03_System_support.png"
            alt="System Support"
            heading="Systemunterstützung bei der Pflanzenauswahl"
            body="Ein Info-Screen vor der Auswahl erklärt die Substrat-Regel — bevor Nutzer:innen eine Entscheidung treffen, die das System nicht kommentarlos durchlassen kann."
          />
          <CSMediaSplit
            src="/images/fyta-onboarding/01_Mental_Model.png"
            alt="Mental Model"
            heading="Gleicher Inhalt, Bild rechts"
            body="Mit flip={true} wechselt die Seite. Gut für visuelle Abwechslung bei mehreren Split-Blöcken hintereinander."
            flip
          />
        </div>
      </CaseSection>

      {/* ─── CS.Media.PhoneGrid ─── */}
      <CaseSection label="CS.Media.PhoneGrid">
        <CSMediaPhoneGrid
          columns={3}
          screens={[
            {
              src: '/images/fyta-onboarding/04.png',
              alt: 'Pflanzenzuordnung',
              label: 'Pflanzenzuordnung',
              description: 'Info-Screen vor der Auswahl erklärt die Substrat-Regel.',
            },
            {
              src: '/images/fyta-onboarding/05.png',
              alt: 'Konflikt erkannt',
              label: 'Konflikt erkannt',
              description: 'Parametertabelle zeigt konkret, welche Messwerte betroffen wären.',
            },
            {
              src: '/images/fyta-onboarding/06.png',
              alt: 'Handlungsoptionen',
              label: 'Handlungsoptionen',
              description: 'Drei Wege: fortfahren, anpassen, oder neuen Topf anlegen.',
            },
          ]}
        />
      </CaseSection>

      {/* ─── CS.Cards.Highlight ─── */}
      <CaseSection label="CS.Cards.Highlight">
        <CSCardsHighlight>
          <div className="flex flex-col gap-8">
            <h3 className="font-body text-body-lg font-medium text-light">Hardware in der App verankern</h3>
            <p className="font-body text-body-md text-light/80">
              Akzent-Hintergrund-Sektion. Bricht visuell aus dem normalen Flow aus. Kann beliebige Child-Komponenten enthalten.
            </p>
            <CSListBullet
              items={[
                'Produkt-Renderings statt Illustrationen — Wiedererkennung ab dem ersten Moment.',
                'Besetzte Wartezeit statt leere Ladezustände — Firmware-Updates nutzen die Zeit produktiv.',
                'Illustrative Ebene für Nutzungskontexte — wo Renderings allein nicht reichen.',
              ]}
            />
          </div>
        </CSCardsHighlight>
      </CaseSection>

      {/* ─── CS.Cards.Decision ─── */}
      <CaseSection label="CS.Cards.Decision">
        <CSCardsDecision
          cards={[
            {
              src: '/images/fyta-onboarding/04.png',
              alt: 'Renderings',
              title: 'Produkt-Renderings statt Illustrationen',
              body: 'Nutzer:innen erkennen ihren Sensor sofort wieder. Renderings skalieren mit dem wachsenden Portfolio.',
            },
            {
              src: '/images/fyta-onboarding/05.png',
              alt: 'Wartezeit',
              title: 'Besetzte Wartezeit',
              body: 'Firmware-Updates dauern. Der Flow nutzt die Zeit: Nutzer:innen erfahren, was ihr Sensor kann.',
            },
            {
              src: '/images/fyta-onboarding/06.png',
              alt: 'Illustrationen',
              title: 'Illustrative Ebene',
              body: 'Manche Kontexte — Gartenbeet, Rasen, Hochbeet — brauchen mehr als ein Rendering.',
            },
          ]}
        />
      </CaseSection>

      {/* ─── CS.Cards.Impact ─── */}
      <CaseSection label="CS.Cards.Impact">
        <div className="flex flex-col gap-8">
          <p className="font-body text-body-sm text-grey">2-column variant</p>
          <CSCardsImpact
            columns={2}
            cards={[
              { title: 'Weniger fehlerhafte Setups', body: 'Validierungsfehler werden abgefangen, bevor sie sich ins System schreiben.' },
              { title: 'Reduziertes Support-Aufkommen', body: 'Setup-bedingte Anfragen sind seit Launch nicht mehr eingegangen.' },
              { title: 'Verlässlichere Pflegeempfehlungen', body: 'Nur korrekte Zuordnungen liefern Daten, auf denen Empfehlungen basieren.' },
              { title: 'Stabilität in Multi-Sensor Setups', body: 'Validierte Konfigurationen verhindern Folgefehler.' },
            ]}
          />
          <p className="font-body text-body-sm text-grey mt-8">4-column variant</p>
          <CSCardsImpact
            columns={4}
            cards={[
              { title: 'Weniger fehlerhafte Setups', body: 'Validierungsfehler abgefangen.' },
              { title: 'Bessere Empfehlungen', body: 'Korrekte Zuordnungen.' },
              { title: 'Weniger Support', body: 'Setup-Tickets eliminiert.' },
              { title: 'Multi-Sensor stabil', body: 'Folgefehler verhindert.' },
            ]}
          />
        </div>
      </CaseSection>

      {/* ─── CS.Cards.Toggle ─── */}
      <CaseSection label="CS.Cards.Toggle">
        <div className="flex flex-col gap-4">
          <CSCardsToggle
            title="Manage Devices — Einstieg"
            summary="Hub-Setup gleiches Gewicht wie primärer Flow, keine Statusanzeige."
            defaultOpen
          >
            <ul className="flex flex-col gap-2">
              <li className="flex gap-3 items-start">
                <span className="text-grey/40 shrink-0 mt-1">&mdash;</span>
                <span className="font-body text-body-sm text-light/70">"Add Beam" und "Add Hub" haben gleiches visuelles Gewicht — Hub-Setup ist ein seltener Sonderfall.</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-grey/40 shrink-0 mt-1">&mdash;</span>
                <span className="font-body text-body-sm text-light/70">Alle Geräte sehen identisch aus: keine Statusanzeige, keine visuelle Differenzierung.</span>
              </li>
            </ul>
          </CSCardsToggle>

          <CSCardsToggle
            title="Activate Beam"
            summary="Illustration und Copy zeigen nicht dasselbe, Hilfe-Link kaum sichtbar."
          >
            <ul className="flex flex-col gap-2">
              <li className="flex gap-3 items-start">
                <span className="text-grey/40 shrink-0 mt-1">&mdash;</span>
                <span className="font-body text-body-sm text-light/70">Illustration und Copy zeigen nicht dasselbe: Text beschreibt den Battery-Slip, die Illustration zeigt den Sensor von vorn.</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-grey/40 shrink-0 mt-1">&mdash;</span>
                <span className="font-body text-body-sm text-light/70">"I tried but it's not working" ist ein unauffälliger Textlink. Genau dann, wenn er am wichtigsten wäre.</span>
              </li>
            </ul>
          </CSCardsToggle>

          <CSCardsToggle
            title="Searching for Beam / Updating Firmware"
            summary="Reine Ladezustände ohne Kontextinformation, kein Timeout-Handling."
          >
            <ul className="flex flex-col gap-2">
              <li className="flex gap-3 items-start">
                <span className="text-grey/40 shrink-0 mt-1">&mdash;</span>
                <span className="font-body text-body-sm text-light/70">Reine Ladezustände ohne Kontextinformation. Was passiert im Hintergrund? Wie lange dauert es?</span>
              </li>
            </ul>
          </CSCardsToggle>
        </div>
      </CaseSection>

      {/* ─── CS.Review.Card ─── */}
      <CaseSection label="CS.Review.Card">
        <div className="flex flex-col gap-4">
          <CSReviewCard
            label="Select Plant"
            notes={[
              'Erlaubt nur die Auswahl einer einzigen Pflanze — die zentrale strukturelle Einschränkung.',
              'Keine Möglichkeit, eine neue Pflanze direkt aus dem Flow heraus anzulegen.',
            ]}
          />
          <CSReviewCard
            label="Select Beam Legs"
            notes={[
              '7 Größenoptionen als scrollbare Liste — zu viele Entscheidungen auf einmal.',
              'Keine visuelle Referenz, welche Topfgröße welcher Sensorgröße entspricht.',
            ]}
          />
        </div>
      </CaseSection>

      {/* ─── CS.Touchpoint.Stack ─── */}
      <CaseSection label="CS.Touchpoint.Stack">
        <CSTouchpointStack
          items={[
            {
              title: 'Sensorübersicht',
              body: '„My Devices" entkoppelt Sensoren erstmals von einzelnen Pflanzen.',
              src: '/images/fyta-onboarding/07.png',
              alt: 'Sensorübersicht',
            },
            {
              title: 'Erklärende Empty States',
              body: 'Ein leeres Profil ohne Sensor muss zeigen, was fehlt — und warum es relevant ist.',
              src: '/images/fyta-onboarding/09.png',
              alt: 'Empty States',
            },
            {
              title: 'Statuskommunikation',
              body: 'Ist ein Sensor out of sync, werden alle Parameter ausgegraut.',
              placeholderLabel: 'Statuskommunikation — 08.png fehlt',
            },
          ]}
        />
      </CaseSection>

      {/* ─── CS.Media.StickyScroll ─── */}
      <CaseSection label="CS.Media.StickyScroll">
        <CSMediaStickyScroll
          src="/images/fyta-onboarding/03_System_support.png"
          alt="Flow Steps"
          steps={[
            { heading: 'Pair with account', body: 'Bluetooth-Pairing — der erste Kontakt zwischen Sensor und App.' },
            { heading: 'Get Terra online', body: 'WiFi-Verbindung + Firmware-Update läuft unsichtbar als Lademoment.' },
            { heading: 'Select your plants', body: 'Kategorie-Auswahl + Pflanzenfilter, angepasst an den Sensortyp.' },
            { heading: 'Place & insert', body: 'Physische Platzierung — sensorspezifisch, mit Tiefenvorgabe und Werkzeughinweis.' },
          ]}
        />
      </CaseSection>

      {/* ─── CS.Media.BeforeAfter ─── */}
      <CaseSection label="CS.Media.BeforeAfter">
        <CSMediaBeforeAfter
          beforeSrc="/images/fyta-onboarding/01_Mental_Model.png"
          afterSrc="/images/fyta-onboarding/03_System_support.png"
          alt="Old vs New"
          beforeLabel="Alt"
          afterLabel="Neu"
        />
      </CaseSection>

      {/* ─── CS.Media.Carousel ─── */}
      <CaseSection label="CS.Media.Carousel">
        <CSMediaCarousel
          slides={[
            { src: '/images/fyta-onboarding/04.png', alt: 'Screen 1', caption: 'Pflanzenzuordnung — Info-Screen vor der Auswahl.' },
            { src: '/images/fyta-onboarding/05.png', alt: 'Screen 2', caption: 'Konflikt erkannt — Parametertabelle zeigt betroffene Messwerte.' },
            { src: '/images/fyta-onboarding/06.png', alt: 'Screen 3', caption: 'Handlungsoptionen — Drei Wege, kein Verbot.' },
          ]}
        />
      </CaseSection>

      {/* ─── CS.Tiles.NumberStat ─── */}
      <CaseSection label="CS.Tiles.NumberStat">
        <CSTilesNumberStat
          tiles={[
            { value: '0', label: 'Setup-Fehler seit Launch', description: 'Validierung fängt Fehler vor dem Schreiben ab.' },
            { value: '4', label: 'Sensortypen unterstützt', description: 'Ein Onboarding-System, das skaliert.' },
            { value: '60s', label: 'Pairing-Timeout', description: 'Harte Backend-Grenze, im UI kommuniziert.' },
            { value: '3', label: 'Pflanzen pro Terra', description: 'Multi-Zuordnung als neues Konzept.' },
          ]}
        />
      </CaseSection>

      {/* ─── Placeholder reference ─── */}
      <CaseSection label="CS.Placeholder.Image">
        <div className="flex flex-col gap-4">
          <ImagePlaceholder aspectRatio="hero" label="Hero-Format (16:9)" />
          <div className="grid grid-cols-3 gap-l">
            <ImagePlaceholder aspectRatio="phone" label="Phone" />
            <ImagePlaceholder aspectRatio="phone" label="Phone" />
            <ImagePlaceholder aspectRatio="phone" label="Phone" />
          </div>
        </div>
      </CaseSection>
    </CaseStudyLayout>
  )
}
