import NavV2 from '../components/v2/NavV2'
import FooterV2 from '../components/v2/FooterV2'
import { CONTACT_EMAIL, LINKEDIN_URL, about } from '../content'

// ─────────────────────────────────────────────────────────────────────────────
// Persönliche Daten, die nicht im Repo stehen. Leere Felder werden schlicht
// NICHT gerendert — die Seite ist damit jederzeit versandfertig, auch halb
// ausgefüllt. Nichts hier wird erfunden: eintragen, was stimmt.
// ─────────────────────────────────────────────────────────────────────────────
const personal = {
  phone: '+49 170 4818651',
  // TODO(Lisa): eintragen, sobald die Domain steht. koelmar.de ist nicht
  // erreichbar (keine Nameserver), lisacollmer.de sieht frei aus.
  portfolioUrl: '',
  languages: ['Deutsch (Muttersprache)', 'Englisch (fließend)'],
}

const contactRow = [
  CONTACT_EMAIL,
  personal.phone,
  LINKEDIN_URL,
  personal.portfolioUrl,
].filter(Boolean)

// Skills kommen aus derselben Quelle wie die About-Seite, damit Lebenslauf und
// Portfolio nicht auseinanderlaufen.
const skillLine = about.skills
  .filter((g) => g.category !== 'Context')
  .map((g) => g.items.join(', '))
  .join(' · ')

type Entry = {
  period: string
  role: string
  org: string
  place: string
  bullets?: React.ReactNode[]
}

// Reverse-chronological, straight from lebenslauf_Lisa.docx. Titel, Daten,
// Firmen und Orte sind verbatim. Die Bullets beschreiben Umfang und
// Verantwortung, nicht Wirkungskennzahlen: bei FYTA gibt es kaum Event
// Tracking, und die Support-Zahlen sind durch Hardware-Defekte verfälscht.
// Erfundene Metriken wären im Gespräch sofort angreifbar.
const experience: Entry[] = [
  {
    period: '10/2022 bis heute',
    role: 'Head of Product Design',
    org: 'FYTA',
    place: 'Berlin',
    bullets: [
      'Alleinige Designverantwortung für App, Website und Verpackung. Konzept, Research, UX und UI liegen durchgehend bei mir, von der Anforderung bis zum finalen Screen.',
      'App von einem auf fünf unterstützte Sensor-Modelle umgebaut: Systemlogik, Onboarding, Fehlerfälle und Datenvisualisierung neu strukturiert.',
      'Drei neue Sensorprodukte begleitet, von der Produktdefinition bis zum Launch.',
      'Enge Zusammenarbeit mit Hardware und Firmware, um technische Machbarkeit und Nutzerbedarf zusammenzubringen.',
      'Fachliche Führung einer Werkstudentin und mehrerer Praktikant:innen, inklusive Briefings und Design-Reviews.',
      'Designprinzipien, Guidelines und Projektplanung aufgebaut, da vorher keine Designstruktur existierte.',
    ],
  },
  {
    period: '08/2021 bis 09/2022',
    role: 'Werkstudentin · Marketing',
    org: 'FYTA',
    place: 'Berlin',
  },
  {
    period: '02/2020 bis 07/2021',
    role: 'Designerin',
    org: 'Loveto',
    place: 'Berlin',
    bullets: [
      'Nachhaltigkeitsberichte in Print und als interaktive Web-Versionen.',
      'Branding, Illustration und digitales Layout für KfW, HOWOGE, Stadtreinigung Hamburg, Rügenwalder Mühle und Fröbel.',
      'Website-Projekt "Gegen das Vergessen" eigenverantwortlich umgesetzt.',
    ],
  },
  {
    period: '08/2018 bis 04/2019',
    role: 'Werkstudentin',
    org: 'Loveto',
    place: 'Berlin',
  },
  {
    period: '04/2017 bis 05/2018',
    role: 'Designer · Festanstellung',
    org: 'Eichmeister Kreativagentur',
    place: 'München',
    bullets: [
      'Brandingstrategien, Website- und Layoutdesign für Startups, mit wachsendem Anteil digitaler Projekte.',
    ],
  },
]

// Older internships condensed per current resume standards.
const internships: Entry[] = [
  { period: '05/2016 bis 10/2016', role: 'Praktikum', org: 'Grünweiss Design', place: 'Hamburg' },
  { period: '03/2014 bis 09/2014', role: 'Praktikum · Praxissemester', org: 'Rocket & Wink', place: 'Hamburg' },
  { period: '09/2011 bis 02/2012', role: 'Vorpraktikum', org: 'ars 24, Fotografie Studio', place: 'München' },
]

const education: Entry[] = [
  {
    period: '10/2019 bis 07/2022',
    role: 'M.A. Interface Design',
    org: 'Fachhochschule Potsdam',
    place: 'Potsdam · Abschluss 13.07.2022',
  },
  {
    period: '10/2016 bis 02/2017',
    role: 'M.A. Visuelle Kommunikation',
    org: 'HBK Saar',
    place: 'Saarbrücken · Wechsel zu Interface Design, FH Potsdam',
  },
  {
    period: '08/2013 bis 12/2013',
    role: 'Auslandssemester · Visuelle Kommunikation',
    org: 'Designskolen Kolding',
    place: 'Kolding, Dänemark',
  },
  {
    period: '03/2012 bis 02/2016',
    role: 'B.A. Visuelle Kommunikation',
    org: 'Hochschule Pforzheim',
    place: 'Pforzheim',
  },
]

function EntryRow({ e }: { e: Entry }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-1 md:gap-6 break-inside-avoid">
      <p className="font-mono text-[12px] uppercase tracking-[0.02em] text-[#32404f]/50 md:pt-0.5">{e.period}</p>
      <div className="flex flex-col gap-1">
        <div className="flex flex-wrap items-baseline gap-x-2">
          <h3 className="font-tiempos text-[18px] tracking-[-0.01em] text-[#32404f]">{e.role}</h3>
          <span className="font-geist text-[15px] text-[#32404f]/70">· {e.org}</span>
          <span className="font-geist text-[14px] text-[#32404f]/45">· {e.place}</span>
        </div>
        {e.bullets && (
          <ul className="flex flex-col gap-1 mt-1">
            {e.bullets.map((b, i) => (
              <li key={i} className="font-geist text-[15px] leading-[1.6] text-[#32404f]/70">{b}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-mono text-[13px] uppercase tracking-[0.04em] text-[#32404f]/50 pb-3 border-b border-[#32404f]/10">
      {children}
    </h2>
  )
}

export default function Resume() {
  return (
    <div className="min-h-screen bg-[#fafcfd] text-[#32404f]">
      <div className="print:hidden">
        <NavV2 active="Resume" />
      </div>

      <main className="max-w-[820px] mx-auto px-8 pt-20 md:pt-28 pb-24 print:pt-0 print:px-0">

        {/* ── Header ── */}
        <header className="flex flex-col gap-6 pb-10 border-b border-[#32404f]/10">
          <div className="flex items-start justify-between gap-6">
            <div className="flex flex-col gap-2">
              <h1 className="font-tiempos text-[clamp(30px,4vw,44px)] tracking-[-0.02em] leading-[1.05]">
                Lisa Collmer
              </h1>
              <p className="font-geist text-[17px] text-[#32404f]/70">
                Product Designer · Berlin
              </p>
            </div>
            <button
              onClick={() => window.print()}
              className="print:hidden shrink-0 rounded-full bg-[#32404f] px-5 py-2 font-mono text-[12px] uppercase tracking-[0.04em] text-[#fafcfd] hover:bg-[#e65f2e] transition-colors duration-200"
            >
              Download PDF
            </button>
          </div>

          {/* Contact row */}
          <div className="flex flex-wrap gap-x-6 gap-y-1 font-geist text-[14px] text-[#32404f]/70">
            {contactRow.map((item) => <span key={item}>{item}</span>)}
          </div>
        </header>

        {/* ── Profile ── */}
        <section className="flex flex-col gap-4 pt-10">
          <SectionLabel>Profil</SectionLabel>
          <p className="font-geist text-[16px] leading-[1.7] text-[#32404f]/75">
            Produktdesignerin mit Hintergrund in Visueller Kommunikation (B.A., Pforzheim)
            und einem M.A. in Interface Design (FH Potsdam). Seit vier Jahren alleinige
            Designerin bei FYTA, einem Berliner Sensor-Startup: App, Website und Verpackung
            liegen vollständig bei mir, von der Systemlogik bis zum finalen Screen. In dieser
            Zeit habe ich die App von einem auf fünf Sensor-Modelle umgebaut und drei neue
            Produkte bis zum Launch begleitet. Meine Stärke liegt dort, wo technische
            Komplexität und menschliche Nutzung in Einklang gebracht werden müssen. Ich suche
            eine Produktdesign-Rolle mit starkem Hands-on-Anteil, in der ich komplexe Probleme
            von der Systemebene bis ins Detail gestalten kann.
          </p>
        </section>

        {/* ── Experience ── */}
        <section className="flex flex-col gap-6 pt-12">
          <SectionLabel>Berufserfahrung</SectionLabel>
          <div className="flex flex-col gap-7">
            {experience.map((e, i) => <EntryRow key={i} e={e} />)}
          </div>
        </section>

        {/* ── Internships — eine Zeile, Details gehören nicht auf einen Senior-CV ── */}
        <section className="flex flex-col gap-3 pt-12">
          <SectionLabel>Frühere Praktika</SectionLabel>
          <p className="font-geist text-[14px] leading-[1.7] text-[#32404f]/60">
            {internships.map((e) => `${e.org} (${e.place.split(' · ')[0]})`).join(' · ')}
            {' · 2011 bis 2016'}
          </p>
        </section>

        {/* ── Education ── */}
        <section className="flex flex-col gap-6 pt-12">
          <SectionLabel>Ausbildung</SectionLabel>
          <div className="flex flex-col gap-5">
            {education.map((e, i) => <EntryRow key={i} e={e} />)}
          </div>
        </section>

        {/* ── Skills ── */}
        <section className="flex flex-col gap-4 pt-12">
          <SectionLabel>Skills & Tools</SectionLabel>
          <p className="font-geist text-[15px] leading-[1.7] text-[#32404f]/70">
            {skillLine}
          </p>
        </section>

        {/* ── Languages — rendert erst, wenn personal.languages gefüllt ist ── */}
        {personal.languages.length > 0 && (
          <section className="flex flex-col gap-4 pt-12">
            <SectionLabel>Sprachen</SectionLabel>
            <p className="font-geist text-[15px] leading-[1.7] text-[#32404f]/70">
              {personal.languages.join(' · ')}
            </p>
          </section>
        )}

      </main>

      <div className="print:hidden">
        <FooterV2 />
      </div>
    </div>
  )
}
