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
    research: 'Da für die neuen Sensoren kein vergleichbares Onboarding existierte, nahm die Recherche eine andere Form an als klassische Nutzerforschung. Ich analysierte, an welchen Stellen der bestehende Beam-Flow strukturell versagt, sobald man ihn auf neue Sensortypen überträgt — und welche mentalen Modelle dabei zusammenbrechen. Support-Anfragen aus der Beam-Zeit gaben Aufschluss darüber, wo Nutzer:innen beim Setup grundsätzlich ins Stocken geraten. Parallel dazu arbeitete ich eng mit dem Tech-Team zusammen, um Edge Cases zu erfassen, die das Backend bereits kannte, aber im UI noch nie adressiert worden waren.',
    definition: 'Die zentrale Herausforderung war nicht das UI — sondern das Aufbrechen eines eingefahrenen mentalen Modells. Der Beam hatte Nutzer:innen genau eine Logik gelehrt: ein Sensor, eine Pflanze. Alle neuen Sensoren brachen diese Logik. Das Onboarding musste nicht nur erklären, wie ein Sensor verbunden wird — sondern warum manche Konfigurationen überhaupt erst sinnvoll sind.',
    design: 'Ziel war ein Onboarding-System, das mit dem Produkt-Ökosystem mitwächst — ohne bei jedem neuen Sensor neu gedacht werden zu müssen. Neben klarem UI lag der Fokus auf zwei Dingen: Komplexität so früh wie möglich abfangen, bevor sie sich im System festschreibt, und Nutzer:innen nur die Informationen zeigen, die in diesem Moment relevant sind.',
    challenge: {
      intro: 'Mit jedem neuen Sensor wuchs nicht nur das Portfolio — sondern die Komplexität dahinter. Unterschiedliche Sensortypen, variierende Nutzungskontexte und neue Zuordnungslogiken machten das bestehende mentale Modell der App zunehmend unbrauchbar.\n\nAus systemischer Sicht ergaben sich drei zentrale Herausforderungen:',
      points: [
        'Sensoren können unabhängig von Pflanzen angebunden werden — das bisherige Onboarding kannte diesen Zustand nicht.',
        'Technische Einschränkungen der Sensorik müssen berücksichtigt werden, ohne Nutzer:innen mit Details zu belasten.',
        'Unterschiedliche Konfigurationen erzeugen zahlreiche Edge Cases, die im bisherigen Onboarding schlicht nicht existierten.',
      ],
    },
    hmw: 'Wie lässt sich ein Onboarding gestalten, das mit einem wachsenden Sensor-Ökosystem skaliert — ohne dass Nutzer:innen die Komplexität dahinter spüren?',
    deepDive: 'Bodensensoren wie Beam oder Mini liefern nur dann zuverlässige Daten, wenn alle zugeordneten Pflanzen im selben Substrat und Topf wachsen. Für Nutzer:innen ist das nicht intuitiv — es ist eine technische Einschränkung, die das Design lösen muss, bevor sie zum Problem wird. Ich habe die Zuordnungslogik zunächst als Flowchart modelliert, um alle Abhängigkeiten und Edge Cases sichtbar zu machen, bevor der erste Screen entworfen wurde.',
    iteration: 'Bevor wir beim Info-Screen mit anschließender Inline-Validierung landeten, haben wir einen einfacheren Weg in Betracht gezogen: Pflanzen frei auswählen lassen — und erst nach der Konfiguration auf Inkompatibilitäten hinweisen.\n\nDas Problem: Nutzer:innen hätten bereits Entscheidungen getroffen, bevor das System eingreift. Korrekturen am Ende eines Flows erzeugen Frust — und das Gefühl, etwas falsch gemacht zu haben, obwohl die App es hätte verhindern können.\n\nDie Entscheidung für einen vorgelagerten Info-Screen war kein Kompromiss. Sie war die einzige Variante, die Fehler verhindert, bevor sie entstehen.',
    uxDecision: {
      intro: 'Die folgenden Screens zeigen einen verkürzten User Flow: wie das System Nutzer:innen durch einen vorgelagerten Info-Screen auf die Auswahl vorbereitet — was passiert, wenn die Auswahl inkompatibel ist — und welche Handlungsoptionen das System dann anbietet.',
      annotations: [
        { screen: 'Screen 1', label: 'Info-Screen — Nutzer:innen erhalten vor der Auswahl die Kompatibilitätsregeln.' },
        { screen: 'Screen 2', label: 'Inkompatibilität erkannt — das System erklärt, warum zwei Pflanzen nicht zusammenpassen.' },
        { screen: 'Screen 3', label: 'Handlungsoptionen — Auswahl anpassen oder Einstellungen korrigieren.' },
      ],
    },
    furtherTouchpoints: {
      intro: 'Das Onboarding war nur der Einstiegspunkt. Damit Nutzer:innen das neue Sensor-Modell wirklich verstehen — nicht nur beim Setup, sondern im täglichen Gebrauch — habe ich zentrale Touchpoints in der bestehenden App neu konzipiert.',
      items: [
        {
          title: 'Sensorübersicht',
          body: '„My Devices" entkoppelt Sensoren erstmals von einzelnen Pflanzen und gibt Nutzer:innen einen eigenständigen Überblick über alle Geräte, deren aktuellen Status und den Zeitpunkt der letzten Synchronisation.',
        },
        {
          title: 'Empty States',
          body: 'Pflanzenprofile ohne Sensor zeigen keine leere Fläche — sie erklären, was ein Sensor dort leisten würde, und empfehlen konkret, welche Kombination für diesen Pflanzentyp, Standort und Kontext sinnvoll ist.',
        },
        {
          title: 'Statuskommunikation',
          body: 'Die App hatte keine klare Definition, ab wann Sensordaten als veraltet gelten. Ich habe diese interne Grenze — 24 Stunden ohne Sync — explizit im UI sichtbar gemacht und Statusmeldungen vereinheitlicht. Ist ein Sensor out of sync, überträgt sich das auf alle abhängigen Parameter: Sie werden ausgegraut statt mit Statusfarben angezeigt — um Fehlinterpretationen zu vermeiden.',
        },
      ],
    },
    impact: {
      items: [
        'Weniger fehlerhafte Setups: Validierungsfehler werden abgefangen, bevor sie sich ins System schreiben — und bevor Nutzer:innen bemerken, dass etwas schiefgelaufen ist.',
        'Verlässlichere Pflegeempfehlungen: Nur korrekte Sensor-Pflanzen-Zuordnungen liefern Daten, auf denen Pflegeempfehlungen tatsächlich basieren können.',
        'Reduziertes Support-Aufkommen: [PLACEHOLDER — Ticket-Volumen aus Intercom eintragen]',
        'Stabilität in Multi-Sensor Setups: Validierte Konfigurationen verhindern, dass sich Fehler in komplexeren Multi-Sensor-Umgebungen unbemerkt fortsetzen.',
      ],
    },
    reflection: 'Das größte Learning war keine UI-Entscheidung — es war das Verständnis, dass gutes Onboarding bei hardware-nahen Produkten Systemdenken voraussetzt, nicht nur Gestaltung. Die schwierigsten Probleme lagen nicht im Interface, sondern in der Frage: Welche Komplexität darf ich sichtbar machen — und welche muss ich schlucken?',
  },

  probe: {
    slug: '/projekte/soil-probe-diagnostic',
    title: 'FYTA – Soil Probe Diagnostic',
    shortTitle: 'Probe Diagnostic',
    description: 'Ein Diagnose-Flow, der Nutzer:innen hilft, beschädigte Soil Probes zu erkennen — und gleichzeitig Missbrauch für Garantieansprüche verhindert.',
    tags: ['UI/UX', 'System Design', 'Abuse Prevention', 'Hardware'],
    meta: {
      role: 'Head of Product Design',
      status: 'Shipped [DATUM EINTRAGEN]',
      imageFolder: '/images/probe-diagnostic/',
    },
    intro: 'Sensoren messen nur so gut, wie sie eingesetzt werden. Wenn ein Beam-Probe beschädigt ist oder falsch sitzt, liefert die App Daten — aber keine richtigen. Nutzer:innen merken das nicht sofort. Das ist das Problem.\n\nAls Head of Product Design habe ich einen Diagnose-Flow entwickelt, der Nutzer:innen hilft, den Zustand ihrer Soil Probes zu prüfen — und der gleichzeitig verhindert, dass das System für falsche Ergebnisse missbraucht wird.',
    challenge: 'Ein beschädigter oder falsch eingesetzter Soil Probe erzeugt keine offensichtlichen Fehler — er erzeugt plausible, aber falsche Messwerte. Nutzer:innen vertrauen diesen Werten und pflegen ihre Pflanzen entsprechend falsch.\n\nDas Diagnose-Feature löst zwei Probleme gleichzeitig: Es hilft legitimen Nutzer:innen, echte Hardware-Fehler zu erkennen. Und es verhindert, dass das System von Nutzer:innen ausgenutzt wird, die Diagnoseergebnisse als Hebel für Garantieansprüche missbrauchen.',
    myRole: 'Ich habe den gesamten Diagnose-Flow konzipiert und gestaltet — von der Systemlogik und den Abuse-Prevention-Gates bis zum finalen UI. Die Arbeit entstand in enger Zusammenarbeit mit dem Tech-Team und dem Product Manager.',
    process: {
      steps: [
        {
          label: 'Step 1 — Problem modellieren',
          body: 'Bevor der erste Screen entworfen wurde, habe ich die möglichen Abuse-Vektoren kartiert: schnelles Wiederholen des Tests, erzwungene Bedingungen, mehrere Accounts.',
        },
        {
          label: 'Step 2 — Connection first, fail fast',
          body: 'Verbindung prüfen, bevor der eigentliche Test beginnt. Wenn die Probe nicht verbunden ist, gibt es keinen Test.',
        },
        {
          label: 'Step 3 — Vier Abuse-Prevention-Gates',
          body: '',
          gates: [
            'Backend-verifizierte Ergebnisse',
            '90-Tage-Cooldown',
            'Account-Level-Limits',
            'Historischer Feuchtigkeits-Crosscheck: Das System vergleicht das aktuelle Ergebnis mit historischen Messwerten. Ein abrupter Cliff-Edge ist ein Missbrauchssignal. Ein graduelles Degradationsmuster ist ein echter Hardware-Defekt. Keine neue Hardware nötig — nur vorhandene Daten.',
          ],
        },
        {
          label: 'Step 4 — Kein Probe-Naming',
          body: 'FYTA liefert immer beide Probes als Paar — einzelne Namen erzeugen Verwechslungspotenzial ohne Nutzen.',
        },
      ],
    },
    keyDecision: 'Der historische Feuchtigkeits-Crosscheck nutzt Daten, die bereits existieren. Ein Sensor, dessen Feuchtigkeitskurve abrupt auf null springt, zeigt ein anderes Muster als einer, der langsam degradiert. Diese Unterscheidung passiert im Backend, unsichtbar für Nutzer:innen — ohne einen einzigen zusätzlichen Schritt im Flow.\n\nTrade-off: Bei sehr neuen Sensoren (unter ~2 Wochen Nutzung) greift dieser Gate nicht. Akzeptiert — neue Sensoren haben ein geringeres Missbrauchspotenzial.',
    results: {
      placeholder: '[PLACEHOLDER — Feature shipped [DATUM EINTRAGEN]. Post-launch-Daten folgen.]',
      metrics: [
        'Retry-Rate innerhalb des Cooldown-Fensters',
        'Connection-Failure-Drop-off',
        'Support-Tickets: fehlerhafte Diagnoseergebnisse',
        'Cooldown-Beschwerden',
      ],
    },
    learning: 'Wenn ein Feature Konsequenzen hat — Garantieansprüche, Austausch, Erstattung — wird es ausgenutzt. Gutes Abuse-Prevention-Design bestraft nicht alle Nutzer:innen für das Verhalten weniger. Es schichtet Hürden so, dass legitime Flows unberührt bleiben — und Missbrauch teuer wird, ohne sichtbar zu sein.',
  },

  thesis: {
    slug: '/projekte/inklusive-lern-app',
    title: 'Inklusive Lern-App für Lesen & Schreiben im Schulalltag',
    shortTitle: 'Inklusive Lern-App',
    description: 'Konzeption und Gestaltung einer digitalen Lernanwendung, die inklusives Lernen fördert, Lehrkräfte entlastet und Schüler:innen individuell beim Schriftspracherwerb unterstützt.',
    tags: ['Branding', 'UI/UX', 'Design System', 'Konzeption'],
    meta: {
      role: 'UX/UI Designer, Konzeption (Masterarbeit)',
      status: 'Abgeschlossen',
      imageFolder: '/images/masterthesis/',
    },
    intro: 'Lesen und Schreiben sind grundlegende Kompetenzen für Bildung und gesellschaftliche Teilhabe. Kinder mit Lese- und Rechtschreibschwierigkeiten stoßen im Schulalltag jedoch häufig auf Barrieren — fachlich, emotional und sozial.\n\nZiel meiner Masterarbeit war die Konzeption und Gestaltung einer digitalen Lernanwendung, die inklusives Lernen fördert, Lehrkräfte entlastet und Schüler:innen individuell beim Schriftspracherwerb unterstützt.',
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
      intro: 'Die Funktionen der App sind darauf ausgelegt, selbstständiges Lernen zu ermöglichen, die Selbstwirksamkeit der Schüler:innen zu stärken und Lehrkräfte durch adaptive Inhalte und automatisiertes Feedback zu entlasten.',
      ideation: 'Ausgehend von dieser Fragestellung entwickelte ich das Konzept einer App, die nicht zwischen „mit" und „ohne LRS" unterscheidet, sondern sich flexibel an unterschiedliche Lernstände anpasst und im gesamten Klassenverband genutzt werden kann.',
      features: [
        { title: 'Lesehelfer', body: 'Unterstützung beim Vorlesen und Mitlesen von Texten.' },
        { title: 'Feedbackgestützter Rechtschreibchecker', body: 'Direkte, erklärende Rückmeldungen statt bloßer Fehleranzeigen. Das „a in Vater lässt sich durch das a in Vater ableiten" — Feedback, das erklärt, nicht nur markiert.' },
        { title: 'Digitaler Karteikasten', body: 'Individuelles Worttraining mit Lernfortschrittsanzeige.' },
      ],
    },
    validation: {
      heading: 'Nutzer-Feedback',
      body: 'Der klickbare Prototyp wurde in Figma entwickelt und mit Expert:innen aus dem schulischen und therapeutischen Kontext reflektiert. Besonders positiv bewertet wurden die unmittelbaren Rückmeldungen, die Möglichkeit zum selbstständigen Arbeiten und die einfache Integration in den Unterricht.',
    },
    results: {
      heading: 'Trainieren',
      metrics: [
        { label: 'Wörter pro Minute', value: '9' },
        { label: 'Trainierte Karteikarten', value: '36' },
        { label: 'Abgeschlossene Karteikarten', value: '14' },
        { label: 'Zeit trainiert', value: '25 Min.' },
      ],
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
