import { useSearchParams } from 'react-router-dom'
import NavV2 from '../components/v2/NavV2'
import FooterV2 from '../components/v2/FooterV2'
import { CONTACT_EMAIL, LINKEDIN_URL, about } from '../content'

// ─────────────────────────────────────────────────────────────────────────────
// Persönliche Daten, die nicht im Repo stehen. Leere Felder werden schlicht
// NICHT gerendert, die Seite ist damit jederzeit versandfertig, auch halb
// ausgefüllt. Nichts hier wird erfunden: eintragen, was stimmt.
// ─────────────────────────────────────────────────────────────────────────────
const personal = {
  phone: '+49 170 4818651',
  // Vercel-Produktions-Alias. Sobald die eigene Domain steht, hier tauschen
  // (und die og:-Tags in index.html).
  portfolioUrl: 'my-portfolio-xi-ivory-29.vercel.app',
}

type Lang = 'de' | 'en'

type Entry = {
  period: string
  role: string
  org: string
  place: string
  bullets?: string[]
}

// Beide Sprachen in einer Struktur, damit sie nicht auseinanderlaufen. Titel,
// Daten, Firmen und Orte sind verbatim aus lebenslauf_Lisa.docx. Die Bullets
// beschreiben Umfang und Verantwortung, nicht Wirkungskennzahlen: bei FYTA gibt
// es kaum Event Tracking, erfundene Metriken wären im Gespräch angreifbar.
// EN-Bullets sind Verb-first, wie im englischen Lebenslauf üblich.
const copy = {
  de: {
    headline: 'Senior Product Designer · Berlin',
    download: 'PDF herunterladen',
    labels: {
      profile: 'Profil',
      experience: 'Berufserfahrung',
      internships: 'Frühere Praktika',
      education: 'Ausbildung',
      skills: 'Skills & Tools',
      languages: 'Sprachen',
    },
    profile:
      'Produktdesignerin mit Hintergrund in Visueller Kommunikation (B.A., Pforzheim) und einem M.A. in Interface Design (FH Potsdam). Seit vier Jahren alleinige Designerin bei FYTA, einem Berliner Sensor-Startup: App, Website und Verpackung vollständig verantwortet, von der Systemlogik bis zum finalen Screen. App von einem auf fünf Sensor-Modelle umgebaut und drei neue Produkte bis zum Launch begleitet, in enger Zusammenarbeit mit Hardware und Firmware. Stärken liegen dort, wo technische Komplexität und menschliche Nutzung in Einklang gebracht werden müssen. Auf der Suche nach einer Produktdesign-Rolle mit starkem Hands-on-Anteil.',
    internshipsYears: '2014 bis 2016',
    languages: ['Deutsch (Muttersprache)', 'Englisch (fließend)'],
    skillCategory: (c: string) => c,
    skillItem: (s: string) => s,
    experience: [
      {
        period: '10/2022 bis heute',
        role: 'Head of Product Design',
        org: 'FYTA',
        place: 'Berlin',
        bullets: [
          'Verantwortete Konzept, Research, UX und UI für App, Website und Verpackung durchgehend allein, von der Anforderung bis zum finalen Screen.',
          'Baute die App von einem auf fünf unterstützte Sensor-Modelle um: Systemlogik, Onboarding, Fehlerfälle und Datenvisualisierung neu strukturiert.',
          'Begleitete drei neue Sensorprodukte von der Produktdefinition bis zum Launch.',
          'Arbeitete eng mit Hardware und Firmware zusammen, um technische Machbarkeit und Nutzerbedarf zusammenzubringen.',
          'Präsentierte Design-Entscheidungen und Trade-offs regelmäßig vor der Geschäftsführung, um Scope und Prioritäten abzustimmen.',
          'Führte fachlich eine Werkstudentin und mehrere Praktikant:innen, inklusive Briefings und Design-Reviews.',
          'Baute Designprinzipien, Guidelines und Projektplanung auf, da vorher keine Designstruktur existierte.',
        ],
      },
      { period: '08/2021 bis 09/2022', role: 'Werkstudentin · Marketing', org: 'FYTA', place: 'Berlin' },
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
      { period: '08/2018 bis 04/2019', role: 'Werkstudentin', org: 'Loveto', place: 'Berlin' },
      {
        period: '04/2017 bis 05/2018',
        role: 'Designer · Festanstellung',
        org: 'Eichmeister Kreativagentur',
        place: 'München',
        bullets: ['Brandingstrategien, Website- und Layoutdesign für Startups, mit wachsendem Anteil digitaler Projekte.'],
      },
    ] as Entry[],
    internships: [
      { org: 'Grünweiss Design', place: 'Hamburg' },
      { org: 'Rocket & Wink', place: 'Hamburg' },
    ],
    education: [
      { period: '10/2019 bis 07/2022', role: 'M.A. Interface Design', org: 'Fachhochschule Potsdam', place: 'Potsdam' },
      { period: '10/2016 bis 02/2017', role: 'M.A. Visuelle Kommunikation', org: 'HBK Saar', place: 'Saarbrücken · Wechsel zu Interface Design, FH Potsdam' },
      { period: '03/2012 bis 02/2016', role: 'B.A. Visuelle Kommunikation', org: 'Hochschule Pforzheim', place: 'Pforzheim' },
    ] as Entry[],
  },
  en: {
    headline: 'Senior Product Designer · Berlin',
    download: 'Download PDF',
    labels: {
      profile: 'Profile',
      experience: 'Experience',
      internships: 'Earlier internships',
      education: 'Education',
      skills: 'Skills & Tools',
      languages: 'Languages',
    },
    profile:
      'Product designer with a background in visual communication (B.A., Pforzheim) and an M.A. in Interface Design (FH Potsdam). For four years the sole designer at FYTA, a Berlin plant sensor startup, owning app, website and packaging end to end, from system logic to final screen. Rebuilt the app from one to five supported sensor models and took three new products to launch, working closely with hardware and firmware. Strongest where technical complexity has to meet everyday use. Looking for a hands-on product design role.',
    internshipsYears: '2014 to 2016',
    languages: ['German (native)', 'English (fluent)'],
    skillCategory: (c: string) => ({ Methoden: 'Methods', Zusammenarbeit: 'Collaboration' } as Record<string, string>)[c] ?? c,
    skillItem: (s: string) => (s === 'Cross-funktionale Zusammenarbeit' ? 'Cross-functional collaboration' : s),
    experience: [
      {
        period: '10/2022 to present',
        role: 'Head of Product Design',
        org: 'FYTA',
        place: 'Berlin',
        bullets: [
          'Owned concept, research, UX and UI for app, website and packaging as the sole designer, from requirement to final screen.',
          'Rebuilt the app from one to five supported sensor models, restructuring system logic, onboarding, error handling and data visualisation.',
          'Took three new sensor products from product definition to launch.',
          'Worked closely with hardware and firmware to align technical feasibility with user needs.',
          'Presented design decisions and trade-offs to leadership on a regular basis to agree on scope and priorities.',
          'Mentored a working student and several interns through briefings and design reviews.',
          'Set up design principles, guidelines and project planning where no design structure existed before.',
        ],
      },
      { period: '08/2021 to 09/2022', role: 'Working Student · Marketing', org: 'FYTA', place: 'Berlin' },
      {
        period: '02/2020 to 07/2021',
        role: 'Designer',
        org: 'Loveto',
        place: 'Berlin',
        bullets: [
          'Designed sustainability reports in print and as interactive web versions.',
          'Created branding, illustration and digital layouts for KfW, HOWOGE, Stadtreinigung Hamburg, Rügenwalder Mühle and Fröbel.',
          'Delivered the website project "Gegen das Vergessen" independently.',
        ],
      },
      { period: '08/2018 to 04/2019', role: 'Working Student', org: 'Loveto', place: 'Berlin' },
      {
        period: '04/2017 to 05/2018',
        role: 'Designer · Full-time',
        org: 'Eichmeister Kreativagentur',
        place: 'Munich',
        bullets: ['Developed branding strategies, websites and layouts for startups, with a growing share of digital work.'],
      },
    ] as Entry[],
    internships: [
      { org: 'Grünweiss Design', place: 'Hamburg' },
      { org: 'Rocket & Wink', place: 'Hamburg' },
    ],
    education: [
      { period: '10/2019 to 07/2022', role: 'M.A. Interface Design', org: 'University of Applied Sciences Potsdam', place: 'Potsdam' },
      { period: '10/2016 to 02/2017', role: 'M.A. Visual Communication', org: 'HBK Saar', place: 'Saarbrücken · transferred to Interface Design, FH Potsdam' },
      { period: '03/2012 to 02/2016', role: 'B.A. Visual Communication', org: 'Pforzheim University', place: 'Pforzheim' },
    ] as Entry[],
  },
}

const contactRow = [CONTACT_EMAIL, personal.phone, LINKEDIN_URL, personal.portfolioUrl].filter(Boolean)

// "Context" ist Portfolio-Sprache und gehoert nicht in die Skill-Liste eines Lebenslaufs.
const skillGroups = about.skills.filter((g) => g.category !== 'Context')

// Druck: alles eine Stufe kleiner und enger, damit der Lebenslauf auf eine
// A4-Seite passt. Bildschirm bleibt unverändert luftig.
function EntryRow({ e }: { e: Entry }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] print:grid-cols-[110px_1fr] gap-1 md:gap-6 print:gap-4 break-inside-avoid">
      <p className="font-mono text-[12px] print:text-[9px] uppercase tracking-[0.02em] text-[#32404f]/50 md:pt-0.5">{e.period}</p>
      <div className="flex flex-col gap-1 print:gap-0">
        <div className="flex flex-wrap items-baseline gap-x-2">
          <h3 className="font-tiempos text-[18px] print:text-[12.5px] tracking-[-0.01em] text-[#32404f]">{e.role}</h3>
          <span className="font-geist text-[15px] print:text-[10.5px] text-[#32404f]/70">· {e.org}</span>
          <span className="font-geist text-[14px] print:text-[10px] text-[#32404f]/45">· {e.place}</span>
        </div>
        {e.bullets && (
          <ul className="flex flex-col gap-1 print:gap-0 mt-1 print:mt-0.5">
            {e.bullets.map((b, i) => (
              <li key={i} className="font-geist text-[15px] print:text-[10px] leading-[1.6] print:leading-[1.4] text-[#32404f]/70">{b}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-mono text-[13px] print:text-[9.5px] uppercase tracking-[0.04em] text-[#32404f]/50 pb-3 print:pb-1 border-b border-[#32404f]/10">
      {children}
    </h2>
  )
}

export default function Resume() {
  // ?lang=en ist teilbar: der englische Lebenslauf hat damit eine eigene URL.
  const [params, setParams] = useSearchParams()
  const lang: Lang = params.get('lang') === 'en' ? 'en' : 'de'
  const t = copy[lang]

  return (
    <div lang={lang} className="min-h-screen bg-[#fafcfd] print:bg-white text-[#32404f]">
      <div className="print:hidden">
        <NavV2 active="Resume" />
      </div>

      <main className="max-w-[820px] mx-auto px-8 pt-20 md:pt-28 pb-24 print:p-0 print:max-w-none">

        {/* ── Header ── */}
        <header className="flex flex-col gap-6 print:gap-2 pb-10 print:pb-3 border-b border-[#32404f]/10">
          <div className="flex items-start justify-between gap-6">
            <div className="flex flex-col gap-2 print:gap-0.5">
              <h1 className="font-tiempos text-[clamp(30px,4vw,44px)] print:text-[24px] tracking-[-0.02em] leading-[1.05]">
                Lisa Collmer
              </h1>
              <p className="font-geist text-[17px] print:text-[12px] text-[#32404f]/70">{t.headline}</p>
            </div>
            <div className="print:hidden shrink-0 flex items-center gap-3">
              <div className="flex rounded-full border border-[#32404f]/15 p-0.5 font-mono text-[12px] uppercase tracking-[0.04em]">
                {(['de', 'en'] as Lang[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => setParams(l === 'en' ? { lang: 'en' } : {}, { replace: true })}
                    aria-pressed={lang === l}
                    className={`rounded-full px-3 py-1.5 transition-colors duration-200 ${lang === l ? 'bg-[#32404f] text-[#fafcfd]' : 'text-[#32404f]/60 hover:text-[#32404f]'}`}
                  >
                    {l}
                  </button>
                ))}
              </div>
              <button
                onClick={() => window.print()}
                className="rounded-full bg-[#32404f] px-5 py-2 font-mono text-[12px] uppercase tracking-[0.04em] text-[#fafcfd] hover:bg-[#e65f2e] transition-colors duration-200"
              >
                {t.download}
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-6 print:gap-x-4 gap-y-1 font-geist text-[14px] print:text-[10px] text-[#32404f]/70">
            {contactRow.map((item) => <span key={item}>{item}</span>)}
          </div>
        </header>

        <section className="flex flex-col gap-4 print:gap-1.5 pt-10 print:pt-3">
          <SectionLabel>{t.labels.profile}</SectionLabel>
          <p className="font-geist text-[16px] print:text-[10px] leading-[1.7] print:leading-[1.45] text-[#32404f]/75">{t.profile}</p>
        </section>

        <section className="flex flex-col gap-6 print:gap-2 pt-12 print:pt-3">
          <SectionLabel>{t.labels.experience}</SectionLabel>
          <div className="flex flex-col gap-7 print:gap-2">
            {t.experience.map((e, i) => <EntryRow key={i} e={e} />)}
          </div>
        </section>

        <section className="flex flex-col gap-3 print:gap-1 pt-12 print:pt-3">
          <SectionLabel>{t.labels.internships}</SectionLabel>
          <p className="font-geist text-[14px] print:text-[10px] leading-[1.7] text-[#32404f]/60">
            {t.internships.map((e) => `${e.org} (${e.place})`).join(' · ')}
            {` · ${t.internshipsYears}`}
          </p>
        </section>

        <section className="flex flex-col gap-6 print:gap-2 pt-12 print:pt-3">
          <SectionLabel>{t.labels.education}</SectionLabel>
          <div className="flex flex-col gap-5 print:gap-1.5">
            {t.education.map((e, i) => <EntryRow key={i} e={e} />)}
          </div>
        </section>

        <section className="flex flex-col gap-4 print:gap-1.5 pt-12 print:pt-3">
          <SectionLabel>{t.labels.skills}</SectionLabel>
          <div className="flex flex-col gap-1.5 print:gap-0.5">
            {skillGroups.map((g) => (
              <div key={g.category} className="grid grid-cols-1 md:grid-cols-[140px_1fr] print:grid-cols-[110px_1fr] gap-1 md:gap-6 print:gap-4">
                <p className="font-mono text-[12px] print:text-[9px] uppercase tracking-[0.02em] text-[#32404f]/50 md:pt-0.5">
                  {t.skillCategory(g.category)}
                </p>
                <p className="font-geist text-[15px] print:text-[10px] leading-[1.6] print:leading-[1.4] text-[#32404f]/70">
                  {g.items.map(t.skillItem).join(', ')}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-4 print:gap-1 pt-12 print:pt-3">
          <SectionLabel>{t.labels.languages}</SectionLabel>
          <p className="font-geist text-[15px] print:text-[10px] leading-[1.7] text-[#32404f]/70">{t.languages.join(' · ')}</p>
        </section>

      </main>

      <div className="print:hidden">
        <FooterV2 />
      </div>
    </div>
  )
}
