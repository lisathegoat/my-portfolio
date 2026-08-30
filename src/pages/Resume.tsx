import NavV2 from '../components/v2/NavV2'
import FooterV2 from '../components/v2/FooterV2'

// Placeholder marker — anything not present in the source CV is flagged in the
// accent colour so Lisa can spot and fill it. Never invent facts.
function PH({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[#e65f2e] font-mono text-[12px] uppercase tracking-[0.02em] print:text-[#b0480f]">
      [{children}]
    </span>
  )
}

type Entry = {
  period: string
  role: string
  org: string
  place: string
  bullets?: React.ReactNode[]
}

// Reverse-chronological, straight from lebenslauf_Lisa.docx — titles, dates,
// companies and places are verbatim. Impact bullets are placeholders.
const experience: Entry[] = [
  {
    period: '10/2022 – heute',
    role: 'Head of Product Design',
    org: 'FYTA',
    place: 'Berlin',
    bullets: [
      <PH>1–3 Ergebnis-Bullets: was gebaut, welche Wirkung, welche Zahl (z. B. „Onboarding für 4 neue Sensortypen konzipiert und shipped")</PH>,
    ],
  },
  {
    period: '08/2021 – 09/2022',
    role: 'Werkstudentin · Marketing',
    org: 'FYTA',
    place: 'Berlin',
    bullets: [<PH>1–2 Bullets: Aufgaben/Ergebnis in dieser Rolle</PH>],
  },
  {
    period: '02/2020 – 07/2021',
    role: 'Designerin',
    org: 'Loveto',
    place: 'Berlin',
    bullets: [<PH>1–2 Bullets: Projekte/Ergebnisse bei Loveto</PH>],
  },
  {
    period: '08/2018 – 04/2019',
    role: 'Werkstudentin',
    org: 'Loveto',
    place: 'Berlin',
  },
  {
    period: '04/2017 – 05/2018',
    role: 'Designer · Festanstellung',
    org: 'Eichmeister Kreativagentur',
    place: 'München',
    bullets: [<PH>optional: 1 Bullet zum Schwerpunkt der Agenturarbeit</PH>],
  },
]

// Older internships condensed per current resume standards.
const internships: Entry[] = [
  { period: '05/2016 – 10/2016', role: 'Praktikum', org: 'Grünweiss Design', place: 'Hamburg' },
  { period: '03/2014 – 09/2014', role: 'Praktikum · Praxissemester', org: 'Rocket & Wink', place: 'Hamburg' },
  { period: '09/2011 – 02/2012', role: 'Vorpraktikum', org: 'ars 24, Fotografie Studio', place: 'München' },
]

const education: Entry[] = [
  {
    period: '10/2019 – 07/2022',
    role: 'M.A. Interface Design',
    org: 'Fachhochschule Potsdam',
    place: 'Potsdam · Abschluss 13.07.2022',
  },
  {
    period: '10/2016 – 02/2017',
    role: 'M.A. Visuelle Kommunikation',
    org: 'HBK Saar',
    place: 'Saarbrücken',
    bullets: [<PH>Nur 5 Monate im CV — abgeschlossen, abgebrochen oder Wechsel nach Potsdam? Bitte klarstellen oder Eintrag entfernen</PH>],
  },
  {
    period: '08/2013 – 12/2013',
    role: 'Auslandssemester · Visuelle Kommunikation',
    org: 'Designskolen Kolding',
    place: 'Kolding, Dänemark',
  },
  {
    period: '03/2012 – 02/2016',
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
            <span>lisa@fyta.de <PH>ggf. private E-Mail für Bewerbungen</PH></span>
            <span><PH>Telefon</PH></span>
            <span><PH>LinkedIn-URL</PH></span>
            <span><PH>Portfolio-URL</PH></span>
          </div>
        </header>

        {/* ── Profile ── */}
        <section className="flex flex-col gap-4 pt-10">
          <SectionLabel>Profil</SectionLabel>
          <p className="font-geist text-[16px] leading-[1.7] text-[#32404f]/75">
            Product Designer mit Hintergrund in Visueller Kommunikation und einem M.A. in
            Interface Design. Aktuell bei FYTA, einem Berliner Sensor-Startup.{' '}
            <PH>2–3 Sätze Profil in eigenen Worten: Spezialisierung, Arbeitsweise, wonach du suchst — hier faktisch ergänzen/überschreiben</PH>
          </p>
        </section>

        {/* ── Experience ── */}
        <section className="flex flex-col gap-6 pt-12">
          <SectionLabel>Berufserfahrung</SectionLabel>
          <div className="flex flex-col gap-7">
            {experience.map((e, i) => <EntryRow key={i} e={e} />)}
          </div>
        </section>

        {/* ── Internships ── */}
        <section className="flex flex-col gap-6 pt-12">
          <SectionLabel>Frühere Praktika</SectionLabel>
          <div className="flex flex-col gap-5">
            {internships.map((e, i) => <EntryRow key={i} e={e} />)}
          </div>
        </section>

        {/* ── Education ── */}
        <section className="flex flex-col gap-6 pt-12">
          <SectionLabel>Ausbildung</SectionLabel>
          <div className="flex flex-col gap-5">
            {education.map((e, i) => <EntryRow key={i} e={e} />)}
          </div>
          <p className="font-geist text-[13px] text-[#32404f]/45 mt-1">
            Abitur (musischer Zweig), München, 2011 <PH>auf Senior-Lebenslauf optional — behalten oder streichen?</PH>
          </p>
        </section>

        {/* ── Skills ── */}
        <section className="flex flex-col gap-4 pt-12">
          <SectionLabel>Skills & Tools</SectionLabel>
          <p className="font-geist text-[15px] leading-[1.7] text-[#32404f]/70">
            <PH>Skills bestätigen/ergänzen — z. B. UI/UX Design, Design Systems, Interaction Design, Konzeption, Prototyping. Tools: Figma, o. Ä. Nur eintragen, was zutrifft</PH>
          </p>
        </section>

        {/* ── Languages ── */}
        <section className="flex flex-col gap-4 pt-12">
          <SectionLabel>Sprachen</SectionLabel>
          <p className="font-geist text-[15px] leading-[1.7] text-[#32404f]/70">
            <PH>Sprachen + Niveau eintragen, z. B. Deutsch (Muttersprache), Englisch (fließend)</PH>
          </p>
        </section>

      </main>

      <div className="print:hidden">
        <FooterV2 />
      </div>
    </div>
  )
}
