export const nav = {
  projekte: 'Projekte',
  about: 'About',
}

export const home = {
  hero: {
    intro: 'Hi, ich bin Lisa.',
    introSub: 'Produkt-Designerin aus Berlin.',
    wordmark: 'Portfolio',
    skillsetLabel: 'Skillset',
    superkraftLabel: 'Superkraft?',
  },
  work: {
    heading: 'Projekte',
    filters: ['Ui/Ux', 'App', 'Webdesign', 'Branding', 'Konzeption'],
  },
  footer: {
    projectsLabel: 'My Projects',
    email: 'lisa@fyta.de',
  },
}

export const footer = {
  name: 'Lisa',
  tagline: 'Product Designer · Berlin',
  email: 'lisa@fyta.de',
  linkedin: 'LinkedIn',
  copyright: '© 2025 Lisa',
}

export const caseStudies = {
  fyta: {
    slug: '/projekte/fyta-sensor-onboarding',
    title: 'FYTA – Neugestaltung der Sensoranbindung',
    shortTitle: 'FYTA Sensoranbindung',
    description: 'Von einem Einzelprodukt zu einem skalierbaren Sensor-Ökosystem — Systemlogik, Edge Cases und ein Onboarding, das mit dem Produkt mitwächst.',
    tags: ['UI/UX', 'Design System', 'Konzeption'],
    meta: {
      role: 'Head of Product Design',
      status: 'Shipped',
      imageFolder: '/images/fyta-onboarding/',
      cover: 'cover.png',
    },
    intro: 'FYTA verbindet Pflanzenpflege mit sensorbasierten Daten — die App übersetzt Messwerte aus Boden, Licht und Umgebung in konkrete Pflegehinweise. Bis zur Einführung der neuen Sensoren kannte die App genau ein Modell: ein Sensor, eine Pflanze, ein Topf.\n\nAls Head of Product Design habe ich die Erweiterung des Sensor-Portfolios von Grund auf verantwortet — von der Systemlogik im Backend bis zum finalen UI. Das Projekt war kein Feature-Update. Es war der Umbau eines Einzelprodukts zu einem skalierbaren Ökosystem.',
    research: 'Für die neuen Sensoren gab es keine Nutzer:innen, die man hätte befragen können — das Produkt existierte noch nicht. Die Recherche stützte sich auf zwei Quellen: Support-Tickets aus der Beam-Zeit, die zeigten, wo das bestehende Onboarding grundsätzlich scheitert, und enge Zusammenarbeit mit dem Tech-Team, das Backend-seitige Edge Cases kannte, die im UI nie adressiert worden waren.\n\nDas Ergebnis dieser Analyse war kein Konzept — es war ein Flowchart. Alle Abhängigkeiten, Inkompatibilitäten und Sonderfälle wurden zuerst als Systemlogik sichtbar gemacht, bevor der erste Screen entworfen wurde.',
    oldFlowReview: {
      intro: 'Ausgangspunkt war der bestehende Beam-Onboarding-Flow. Eine strukturierte Analyse zeigte, wo das UI grundlegende UX-Prinzipien verletzt — und warum dieser Flow nicht auf neue Sensortypen skaliert.',
      screens: [
        {
          label: 'Manage Devices — Einstieg',
          notes: [
            '"Add Beam" und "Add Hub" haben gleiches visuelles Gewicht — Hub-Setup ist ein seltener Sonderfall, kein primärer Flow.',
            'Alle Geräte sehen identisch aus: keine Statusanzeige, keine visuelle Differenzierung. Nutzer:innen mit mehreren Sensoren können nicht auf einen Blick erkennen, welcher Sensor welchen Zustand hat.',
          ],
        },
        {
          label: 'Activate Beam',
          notes: [
            'Illustration und Copy zeigen nicht dasselbe: Text beschreibt den Battery-Slip, die Illustration zeigt den Sensor von vorn ohne erkennbare Handlungsaufforderung.',
            '"I tried but it\'s not working" ist als unauffälliger Textlink umgesetzt. Nutzer:innen, die bereits frustriert sind, übersehen ihn — der Zeitpunkt, an dem dieser Link am wichtigsten wäre.',
            'Kein Fortschrittsindikator: Nutzer:innen wissen nicht, wie viele Schritte noch folgen.',
          ],
        },
        {
          label: 'Searching for Beam / Updating Firmware',
          notes: [
            'Reine Ladezustände ohne Kontextinformation. Nutzer:innen wissen nicht, was im Hintergrund passiert, wie lange es dauert, oder was zu tun ist, wenn der Vorgang hängt.',
            'Kein Timeout-Handling sichtbar: Was passiert, wenn der Sensor nicht gefunden wird? Der Flow hat keine kommunizierte Fallback-Option.',
          ],
        },
        {
          label: 'Preparation — Schraubenzieher',
          notes: [
            'Nutzer:innen werden mitten im Flow aufgefordert, ein Werkzeug zu holen. Diese Information gehört an den Anfang des Onboardings, nicht nach dem Pairing.',
            'Copy sagt "metal object" — Illustration zeigt einen Schraubenzieher. Inkonsistenz zwischen Text und Bild erzeugt Unsicherheit.',
          ],
        },
        {
          label: 'Beam Calibration',
          notes: [
            'Sehr langer Instruktionstext für eine physische Handlung, die präzise ausgeführt werden muss. Lange Sätze sind hier ein UX-Fehler — Schritt-für-Schritt wäre angemessener.',
            '"You will seamlessly transition to the next step" — unklar, ob die App automatisch weiter springt oder ob Nutzer:innen aktiv etwas tun müssen. Passivkonstruktion verdeckt die eigentliche Handlungsaufforderung.',
          ],
        },
        {
          label: 'Select Plant',
          notes: [
            'Erlaubt nur die Auswahl einer einzigen Pflanze — die zentrale strukturelle Einschränkung, die mit dem neuen Ökosystem gebrochen werden musste.',
            'Keine Möglichkeit, eine neue Pflanze direkt aus dem Flow heraus anzulegen. Nutzer:innen, deren Pflanze noch nicht existiert, sitzen in einer Sackgasse.',
          ],
        },
        {
          label: 'Select Beam Legs',
          notes: [
            '7 Größenoptionen als scrollbare Liste — zu viele Entscheidungen auf einmal. Der "Recommended"-Tag ist kaum erkennbar (grün auf grün).',
            'Keine visuelle Referenz, welche Topfgröße welcher Sensorgröße entspricht. Nutzer:innen müssen die cm-Angaben mental mit ihrem Topf abgleichen.',
          ],
        },
        {
          label: 'You\'re ready to go!',
          notes: [
            '"Get first data (live mode)" und "Finish" haben ähnliches visuelles Gewicht, implizieren aber sehr unterschiedliche Commitments. Der primäre CTA ist nicht klar priorisiert.',
            '"Live mode" ist internes Vokabular. Nutzer:innen verstehen nicht, was dieser Modus bedeutet oder warum er relevant ist.',
            'Keine Zusammenfassung: Welche Pflanze wurde zugeordnet? Welcher Sensor? Eine kurze Bestätigung würde Vertrauen schaffen.',
          ],
        },
      ],
    },
    definition: 'Das Problem war kein fehlendes Feature — es war ein mentales Modell, das nicht mehr passte. Der Beam hatte Nutzer:innen eine einzige Logik gelehrt. Alle neuen Sensoren brachen sie.',
    design: 'Ziel war ein Onboarding-System, das mit dem Ökosystem mitwächst — ohne bei jedem neuen Sensor neu gedacht werden zu müssen. Komplexität früh abfangen. Nur zeigen, was in diesem Moment relevant ist.',
    challenge: {
      heading: 'Von einem Sensor zu einem Ökosystem',
      body: 'Mit jedem neuen Sensor wuchs die Komplexität dahinter. Drei Herausforderungen ergaben sich daraus:',
      points: [
        'Ein Terra-Sensor im Hochbeet versorgt drei Pflanzen gleichzeitig — das bisherige Onboarding fragte nach genau einer. Nutzer:innen hatten kein mentales Modell für diesen Zustand, weil die App ihn nie zugelassen hatte.',
        'Beam steckt in den Topf. Terra wird im Boden vergraben — mit Tiefenvorgabe, Werkzeug, Außeneinsatz. Jeder Sensortyp erfordert am Ende des Flows eine grundlegend andere physische Handlung. Das musste sensorspezifisch kommuniziert werden, ohne den Hauptflow zu verkomplizieren.',
        'Nicht jede Pflanzenkombination ist valide. Pflanzen in unterschiedlichem Substrat, aber auch zwei Pflanzen im selben Topf mit widersprüchlichen Pflegebedürfnissen — eine braucht Feuchtigkeit, die andere verträgt sie kaum — erzeugen Messkonflikte. Dieses Terrain war komplett neu: es gab keinen bestehenden Flow, der solche Fälle kannte oder abfing.',
      ],
      complexityModel: [
        { label: 'Eins zu eins', sub: 'Einzelne Topfpflanze', note: 'Ausgangspunkt' },
        { label: 'Eins zu vielen', sub: 'Für Garten und Rasen', note: 'Erweiterung' },
        { label: 'Viele zu viele', sub: 'Topfpflanzen Gruppen', note: '' },
      ],
    },
    hmw: 'Wie lässt sich ein Onboarding gestalten, das mit einem wachsenden Sensor-Ökosystem skaliert — ohne dass Nutzer:innen die Komplexität dahinter spüren?',
    deepDive: 'Bodensensoren liefern nur zuverlässige Daten, wenn alle zugeordneten Pflanzen im selben Substrat wachsen — für Nutzer:innen nicht intuitiv. Ich habe die Zuordnungslogik zunächst als Flowchart modelliert, um Abhängigkeiten und Edge Cases sichtbar zu machen, bevor der erste Screen entworfen wurde.',
    iteration: 'Früh erwogen: Pflanzen frei auswählen lassen und erst danach auf Inkompatibilitäten hinweisen. Das Problem — Korrekturen am Ende eines Flows erzeugen Frust und das Gefühl, etwas falsch gemacht zu haben, obwohl die App es hätte verhindern können.\n\nDie Entscheidung für einen vorgelagerten Info-Screen war kein Kompromiss. Sie war die einzige Variante, die Fehler verhindert, bevor sie entstehen.',
    uxDecision: {
      intro: 'Die folgenden Screens zeigen, wie das System Nutzer:innen durch einen vorgelagerten Info-Screen vorbereitet, bei inkompatiblen Pflanzen eingreift — und welche Handlungsoptionen es dann anbietet.',
      annotations: [
        { screen: 'Screen 1', label: 'Info-Screen — Kompatibilitätsregeln vor der Auswahl.' },
        { screen: 'Screen 2', label: 'Inkompatibilität erkannt — das System erklärt warum.' },
        { screen: 'Screen 3', label: 'Handlungsoptionen — Auswahl anpassen oder Einstellungen korrigieren.' },
      ],
    },
    furtherTouchpoints: {
      intro: 'Das Onboarding war nur der Einstiegspunkt. Ich habe zentrale Touchpoints in der bestehenden App neu konzipiert, damit Nutzer:innen das neue Sensor-Modell auch im täglichen Gebrauch verstehen.',
      items: [
        {
          title: 'Sensorübersicht',
          body: '„My Devices" entkoppelt Sensoren erstmals von einzelnen Pflanzen und gibt Nutzer:innen einen eigenständigen Überblick über alle Geräte, deren aktuellen Status und den Zeitpunkt der letzten Synchronisation.',
        },
        {
          title: 'Erklärende Empty States',
          body: 'Ein leeres Profil ohne Sensor erklärt nichts. Es muss zeigen, was fehlt — und warum es relevant ist.',
        },
        {
          title: 'Überarbeitete Statuskommunikation',
          body: 'Die App hatte eine interne Grenze für veraltete Daten — 24 Stunden ohne Sync. Nutzer:innen sahen sie nie. Ist ein Sensor out of sync, werden alle abhängigen Parameter ausgegraut, um Fehlinterpretationen zu vermeiden.',
        },
      ],
    },
    uiDecisions: [
      {
        title: 'Produkt-Renderings statt Illustrationen',
        body: 'Nutzer:innen erkennen ihren Sensor sofort wieder — auch wenn sie ihn zum ersten Mal in der Hand halten. Renderings skalieren mit dem wachsenden Portfolio.',
      },
      {
        title: 'Loading & Feedback States',
        body: 'Pairing und Sync brauchen Zeit — eigene Animationen machen Systemzustände lesbar und verhindern, dass Nutzer:innen in Unsicherheit abbrechen.',
      },
      {
        title: 'Illustrative Ebene für Nutzungskontexte',
        body: 'Manche Kontexte — ein Gartenbeet, ein Rasen, ein Hochbeet — lassen sich mit einem Rendering allein nicht vermitteln. Illustrationen ergänzen dort, ohne die visuelle Sprache zu brechen.',
      },
    ],
    impact: {
      cards: [
        { title: 'Weniger fehlerhafte Setups', body: 'Validierungsfehler werden abgefangen, bevor sie sich ins System schreiben.' },
        { title: 'Verlässlichere Pflegeempfehlungen', body: 'Nur korrekte Sensor-Pflanzen-Zuordnungen liefern Daten, auf denen Empfehlungen basieren können.' },
        { title: 'Reduziertes Support-Aufkommen', body: 'Setup-bedingte Anfragen, die vor dem Launch regelmäßig auftraten, sind seitdem nicht mehr eingegangen.' },
        { title: 'Stabilität in Multi-Sensor Setups', body: 'Validierte Konfigurationen verhindern Folgefehler in komplexeren Umgebungen.' },
      ],
    },
    reflection: 'Das größte Learning war keine UI-Entscheidung. Onboarding bei hardware-nahen Produkten beginnt nicht am Interface — sondern am System dahinter. Die schwierigsten Fragen waren konzeptioneller Natur: Welche Komplexität darf ich zeigen — und welche muss das Design schlucken?',
  },

  probe: {
    slug: '/projekte/soil-probe-diagnostic',
    title: 'FYTA – Soil Probe Diagnostic',
    shortTitle: 'Probe Diagnostic',
    description: 'Wenn ein Soil Probe defekt ist, liefert die App Daten — aber keine richtigen. Ein Self-Service-Diagnose-Flow, der Nutzer:innen ermöglicht, den Zustand ihrer Probes selbst zu prüfen.',
    tags: ['UI/UX', 'System Design', 'Self-Service UX', 'Hardware'],
    meta: {
      role: 'Head of Product Design',
      status: 'Shipped',
      imageFolder: '/images/probe-diagnostic/',
      cover: 'cover.png',
    },
    intro: 'Wenn ein Soil Probe defekt ist, liefert die App Daten — aber keine richtigen. Das Problem: Von außen sieht alles normal aus.\n\nAls Head of Product Design habe ich einen Diagnose-Flow entwickelt, der Nutzer:innen ermöglicht, den Zustand ihrer Soil Probes selbst zu prüfen — ohne Umweg über den Support.',
    challenge: {
      heading: 'Falsche Daten, die sich richtig anfühlen',
      body: 'Nutzer:innen meldeten fehlerhafte Bodenfeuchtigkeitswerte — ihre Pflanzen wurden falsch gepflegt, ohne dass sie es wussten. Das führte zu hohem Support-Aufkommen und Vertrauensverlust in die Produktdaten.\n\nDas eigentliche Problem: Wir konnten nicht unterscheiden, ob die Ursache ein defekter Probe war oder eine fehlerhafte Kalibrierung. Beides erzeugt dasselbe Symptom — braucht aber grundlegend verschiedene Lösungen. Jeder Fall musste manuell untersucht werden.',
    },
    myRole: 'Ich habe den gesamten Diagnose-Flow konzipiert und gestaltet — vom ersten Konzept bis zum finalen UI, in enger Zusammenarbeit mit dem Tech-Team und dem Product Manager.',
    process: {
      steps: [
        {
          label: 'Warum der Probe-Test zuerst',
          body: 'Ein defekter Probe lässt sich nicht kalibrieren — er muss ersetzt werden. Der Probe-Test ist Fail-Fast-Logik: Er klärt die grundlegendste Frage, bevor weitere Schritte folgen.',
        },
        {
          label: 'Verbindung zuerst',
          body: 'Verbindung zum Sensor herstellen, bevor Nutzer:innen irgendetwas physisch vorbereiten. Wenn der Sensor nicht erreichbar ist, erfahren Nutzer:innen das sofort — bevor sie ein Glas Wasser bereitstellen und zwei Minuten investieren.',
        },
        {
          label: 'Der Test — einfach und zugänglich',
          body: 'Ein Glas Wasser, beide Probes eintauchen, Live-Messung pro Probe, klares Ergebnis: passed oder failed. Das Wort „Gefäß" wurde bewusst verworfen — zu klinisch. Sprache ist hier genauso wichtig wie UI.',
        },
        {
          label: 'Kein Probe-Naming',
          body: 'FYTA liefert immer beide Probes als Paar — einzelne Namen erzeugen Verwechslungspotenzial ohne Nutzen.',
        },
      ],
    },
    keyDecision: {
      heading: 'Self-Service statt Support-Schleife',
      body: 'Der eigentliche Shift war nicht ein einzelner Screen — sondern das Modell dahinter. Vorher: Nutzer:innen schildern das Problem, warten, werden manuell untersucht. Nachher: Nutzer:innen führen den Test selbst durch — und im Fehlerfall ist der Support-Request bereits vorbereitet.\n\nDie Entscheidung, den Flow so zugänglich zu machen (ein Glas Wasser, zwei Minuten, klare Schritte), war keine Vereinfachung um der Vereinfachung willen. Sie war die Voraussetzung dafür, dass das Modell funktioniert.\n\nTrade-off: Der Probe-Test löst nur die Hardware-Seite. Wenn beide Probes bestehen, die Messwerte aber trotzdem falsch sind, liegt die Ursache wahrscheinlich in der Kalibrierung — ein separater Flow, der noch in Planung ist.',
    },
    results: {
      note: 'Feature shipped. Post-launch-Daten folgen.',
      metrics: [
        'Support-Tickets: fehlerhafte Messwerte — Baseline 3 Monate vor Launch vs. nach Launch',
        'Flow-Completion-Rate — Wie viele Nutzer:innen kommen bis zum Ergebnis-Screen?',
        'Connection-Failure-Drop-off — Zeigt, ob der Fail-Fast-Schritt funktioniert',
        'Support-Request-Nutzung nach Failed Result — Wird das vorbereitete Formular tatsächlich genutzt?',
      ],
    },
    learning: {
      heading: 'Hardware braucht Klarheit, keine Abstraktion',
      body: 'Support-Aufwand entsteht nicht nur, wenn etwas kaputt ist — er entsteht, wenn Nutzer:innen keine Möglichkeit haben, selbst herauszufinden, was los ist. Ein Self-Service-Flow ist ein Vertrauensangebot: Wir geben dir die Mittel, es selbst zu überprüfen.\n\nDas zweite Learning: „Ein Glas Wasser" statt „ein geeignetes Gefäß" ist kein Stilproblem. Es ist der Unterschied zwischen einem Test, den jemand sofort versteht — und einem, bei dem jemand kurz zögert.',
    },
  },

  thesis: {
    slug: '/projekte/inklusive-lern-app',
    title: 'Inklusive Lern-App für Lesen & Schreiben im Schulalltag',
    shortTitle: 'Inklusive Lern-App',
    description: 'Konzeption einer digitalen Lernanwendung, die inklusives Lernen fördert, Lehrkräfte entlastet und Schüler:innen individuell beim Schriftspracherwerb unterstützt.',
    tags: ['Branding', 'UI/UX', 'Design System', 'Konzeption'],
    meta: {
      role: 'UX/UI Designer, Konzeption (Masterarbeit)',
      status: 'Abgeschlossen',
      imageFolder: '/images/masterthesis/',
      cover: 'cover.png',
    },
    intro: 'Lesen und Schreiben sind grundlegende Kompetenzen für gesellschaftliche Teilhabe. Kinder mit Lese- und Rechtschreibschwierigkeiten stoßen im Schulalltag jedoch häufig auf Barrieren — fachlich, emotional und sozial.\n\nZiel meiner Masterarbeit war die Konzeption einer digitalen Lernanwendung, die inklusives Lernen fördert, Lehrkräfte entlastet und Schüler:innen individuell beim Schriftspracherwerb unterstützt.',
    research: {
      body: 'Lesen- und Schreibkompetenzen sind entscheidend für gesellschaftliche Teilhabe. Kinder mit Lese- und Rechtschreibschwierigkeiten erleben Schule jedoch häufig nicht als Ort des Lernens, sondern als tägliche Überforderung.\n\nBesonders herausfordernd war die Erkenntnis, dass explizite Hilfestellungen für Kinder mit LRS im Unterricht oft nicht unterstützend wirken, sondern zusätzliche Stigmatisierung erzeugen. Diese Einsicht führte zu einem grundlegenden Umdenken in meiner Arbeit.',
      barriers: [
        { title: 'Schulische Überforderung', body: 'Starres Curriculum, kaum Differenzierung' },
        { title: 'Sichtbare Andersbehandlung', body: 'Stigmatisierung durch explizite Fördermaßnahmen' },
        { title: 'Mangelnde Förderung', body: 'Lehrerabhängigkeit, keine digitalen Tools' },
        { title: 'Schulangst & Rückzug', body: 'Angst, Frust, Vermeidungsverhalten' },
        { title: 'Innere Blockaden', body: '„Alle denken, ich sei dumm."' },
      ],
    },
    definition: 'Wie lässt sich eine App entwickeln, die alle Schüler:innen unterstützt — ohne auszugrenzen — und gleichzeitig praxisnah in den Unterricht integrierbar ist?',
    design: {
      heading: 'Hauptfunktionen',
      intro: 'Die Funktionen sind darauf ausgelegt, selbstständiges Lernen zu ermöglichen und Lehrkräfte zu entlasten — ohne dass die App zwischen Kindern unterscheidet.',
      ideation: 'Ausgehend von dieser Fragestellung entwickelte ich das Konzept einer App, die nicht zwischen „mit" und „ohne LRS" unterscheidet, sondern sich flexibel an unterschiedliche Lernstände anpasst und im gesamten Klassenverband genutzt werden kann.',
      features: [
        { title: 'Lesehelfer', body: 'Unterstützt beim Vorlesen und Mitlesen — Kinder können dem Unterricht folgen, ohne aufzufallen.' },
        { title: 'Feedbackgestützter Rechtschreibchecker', body: 'Erklärende Rückmeldungen statt bloßer Fehleranzeigen. Feedback, das erklärt, nicht nur markiert.' },
        { title: 'Digitaler Karteikasten', body: 'Individuelles Worttraining mit Lernfortschrittsanzeige — Fortschritte sichtbar, aber nur für das Kind selbst.' },
      ],
    },
    validation: {
      heading: 'Nutzer-Feedback',
      body: 'Den klickbaren Prototyp habe ich mit Expert:innen aus dem schulischen und therapeutischen Kontext getestet und besprochen. Besonders positiv: unmittelbare Rückmeldungen, selbstständiges Arbeiten, einfache Integration in den Unterricht.',
    },
    learning: {
      heading: 'Inklusion im Design',
      body: 'Im Verlauf dieses Projekts wurde mir besonders bewusst, wie viel Verantwortung Design trägt, wenn es darum geht, Unterstützung zugänglich zu machen, ohne auszugrenzen. Inklusion im Design sollte dabei nicht nur in Projekten wie diesem mitgedacht werden — sondern zentral als konzeptionelle Haltung generell eine Rolle spielen.',
    },
  },

  placeholder: {
    slug: '#',
    title: 'Nächstes Projekt',
    shortTitle: 'Nächstes Projekt',
    description: '[PLACEHOLDER — Projektbeschreibung folgt]',
    tags: ['Konzeption'],
    meta: {
      role: '',
      status: 'Coming soon',
      imageFolder: '',
    },
  },
}

export const about = {
  intro: 'Gutes Design fällt nicht auf — es funktioniert einfach.',
  bio: [
    'Diese Überzeugung treibt mich an: Komplexität so zu durchdenken und zu strukturieren, dass sie für Nutzer:innen unsichtbar wird.',
    'Ich bin Produktdesignerin in Berlin. Nach meinem B.A. in Visueller Kommunikation in Pforzheim und meinem M.A. in Interface Design an der FH Potsdam habe ich in verschiedenen Design-Agenturen und Studios gearbeitet, bevor ich als Head of Product Design zu FYTA gewechselt bin — einem Berliner Startup, das Pflanzenpflege mit sensorbasierter Technologie verbindet. Dort habe ich ein gesamtes Sensor-Ökosystem konzipiert und gestaltet: von der Systemlogik bis zum finalen UI.',
    'Meine Stärken liegen in Produktdesign, Interface Design und Design Systems — besonders dann, wenn technische Komplexität und menschliche Nutzung in Einklang gebracht werden müssen.',
    'Wenn ich nicht designe, bin ich im Garten oder kümmere mich um meine Pflanzen — was erklären mag, warum mich ein Sensor-Startup so begeistert hat. Ich spiele Squash und interessiere mich für Interior Design, weil gute Räume und gute Interfaces dasselbe leisten: Sie schaffen Ordnung, ohne dass man sie spürt.',
    'Ich suche eine Produktdesign-Rolle, in der ich komplexe Probleme von der Systemebene bis ins Detail gestalten kann.',
  ],
  skills: [
    { category: 'Design', items: ['Product Design', 'Interface Design', 'Design Systems', 'Interaction Design', 'UX Research'] },
    { category: 'Tools', items: ['Figma', 'Prototyping', 'Usability Testing', 'System Mapping'] },
    { category: 'Context', items: ['Mobile Apps', 'Hardware-nahe Produkte', 'B2C', 'Startups'] },
  ],
  education: [
    { degree: 'M.A. Interface Design', school: 'FH Potsdam', year: '' },
    { degree: 'B.A. Visuelle Kommunikation', school: 'Hochschule Pforzheim', year: '' },
  ],
  contact: {
    headline: 'Kontakt',
    text: 'Auf der Suche nach einer neuen Produktdesign-Rolle. Offen für Gespräche.',
    email: 'lisa@fyta.de',
    emailLabel: 'E-Mail schreiben',
    linkedin: 'LinkedIn',
  },
}
