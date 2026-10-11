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
  about?: string
  earlier?: { role: string; period: string }[]
  bullets?: string[]
}

// Beide Sprachen in einer Struktur, damit sie nicht auseinanderlaufen. Titel,
// Daten, Firmen und Orte sind verbatim aus lebenslauf_Lisa.docx. Die Bullets
// beschreiben Umfang und Verantwortung, nicht Wirkungskennzahlen: bei FYTA gibt
// es kaum Event Tracking, erfundene Metriken wären im Gespräch angreifbar.
// DE ist bewusst Nominalstil ("Umbau der App", "Anleitung einer Werkstudentin"),
// Verbstil klingt im Deutschen komisch. EN ist Verb-first.
// Kanonische Zahlen (überall gleich, auch LinkedIn und JOBHUNT.md): fünf
// unterstützte Sensor-Modelle (Beam Gen 1 bestand, neu: Beam Gen 2, Mini,
// Sphere, Terra), davon drei neue Produktlinien (Mini, Sphere, Terra).
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
      'Produktdesignerin mit Hintergrund in Visueller Kommunikation (B.A., Pforzheim) und einem M.A. in Interface Design (FH Potsdam). Seit vier Jahren alleinige Designerin bei FYTA, einem Berliner Sensor-Startup: App, Website und Verpackung vollständig verantwortet, von der Systemlogik bis zur finalen Umsetzung. Stärken liegen dort, wo technische Komplexität und menschliche Nutzung in Einklang gebracht werden müssen.',
    languages: ['Deutsch (Muttersprache)', 'Englisch (fließend)'],
    skillCategory: (c: string) => c,
    skillItem: (s: string) => s,
    experience: [
      {
        period: '02/2024 bis heute',
        role: 'Senior Product Designer',
        org: 'FYTA',
        place: 'Berlin',
        earlier: [{ role: 'Produktdesignerin', period: '10/2022 bis 01/2024' }],
        about: 'Berliner Startup, das Pflanzenpflege mit sensorbasierter Technologie verbindet.',
        bullets: [
          'Alleinige Verantwortung für Konzept, Research, UX und UI von App, Website und Verpackung, von der Anforderung bis zur finalen Umsetzung.',
          'Vollständiges Redesign der App und Aufbau eines Design Systems, 2023 ausgeliefert und im Code umgesetzt.',
          'Ausbau der App von einem auf fünf unterstützte Sensor-Modelle (vier neu: Beam Gen 2, Mini, Sphere, Terra): Neustrukturierung von Systemlogik, Onboarding, Fehlerfällen und Datenvisualisierung.',
          'Begleitung von drei neuen Sensorprodukten (Mini, Sphere, Terra), von der Produktdefinition bis zum Launch.',
          'Dokumentation der gesamten App und Begleitung der Übergabe an ein externes Entwicklungsteam gemeinsam mit dem CTO beim Wechsel von nativem iOS und Android auf Flutter.',
          'Cross-funktionale Zusammenarbeit mit CTO, Frontend- und Backend-Entwicklung, Hardware und Firmware, Data Science und Pflanzenwissenschaft zur Abstimmung von technischer Machbarkeit und Nutzerbedarf.',
          'Regelmäßige Präsentation von Design-Entscheidungen und Trade-offs vor der Geschäftsführung zur Abstimmung von Scope und Prioritäten.',
          'Fachliche Anleitung einer Werkstudentin und mehrerer Praktikant:innen, inklusive Briefings und Design-Reviews.',
          'Aufbau von Designprinzipien, Guidelines und Projektplanung, da vorher keine Designstruktur existierte.',
        ],
      },
      {
        period: '08/2021 bis 09/2022',
        role: 'Werkstudentin · Marketing',
        org: 'FYTA',
        place: 'Berlin',
        bullets: [
          'Gestaltung von Webshop und Landingpages, Anpassung von Shopify- und WordPress-Theme über CSS und kleine HTML-Snippets, Aufbau des FYTA-Magazins.',
          'Visuelle Konzeption und Umsetzung von Social-Media-Kampagnen, Produktion von Videos für Social-Media-Advertising.',
        ],
      },
      {
        period: '02/2020 bis 07/2021',
        role: 'Designerin',
        org: 'Loveto',
        place: 'Berlin',
        bullets: [
          'Entwicklung visueller Konzepte aus Kunden-Briefings, häufig als finale Umsetzung ausgewählt.',
          'Gestaltung von Nachhaltigkeitsberichten in Print und als interaktive Web-Versionen, Branding, Illustration und digitales Layout für Kunden wie KfW, HOWOGE, Stadtreinigung Hamburg, Rügenwalder Mühle und Fröbel.',
          'Betreuung von Kundenprojekten, teilweise eigenständige Abstimmung mit Kund:innen.',
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
      { org: 'Grünweiss Design', place: 'Hamburg', period: '05/2016 bis 10/2016' },
      { org: 'Rocket & Wink', place: 'Hamburg', period: '03/2014 bis 09/2014' },
    ],
    education: [
      { period: '10/2019 bis 07/2022', role: 'M.A. Interface Design', org: 'Fachhochschule Potsdam', place: 'Potsdam' },
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
      'Product designer with a background in visual communication (B.A., Pforzheim) and an M.A. in Interface Design (FH Potsdam). For four years the sole designer at FYTA, a Berlin plant sensor startup, owning app, website and packaging end to end, from system logic to final execution. Strongest where technical complexity has to meet everyday use.',
    languages: ['German (native)', 'English (fluent)'],
    skillCategory: (c: string) => ({ Methoden: 'Methods', Zusammenarbeit: 'Collaboration' } as Record<string, string>)[c] ?? c,
    skillItem: (s: string) => (s === 'Cross-funktionale Zusammenarbeit' ? 'Cross-functional collaboration' : s),
    experience: [
      {
        period: '02/2024 to present',
        role: 'Senior Product Designer',
        org: 'FYTA',
        place: 'Berlin',
        earlier: [{ role: 'Product Designer', period: '10/2022 to 01/2024' }],
        about: 'Berlin startup combining plant care with sensor-based technology.',
        bullets: [
          'Owned concept, research, UX and UI for app, website and packaging as the sole designer, from requirement to final execution.',
          'Completely redesigned the app and built a design system, shipped in 2023 and implemented in code.',
          'Extended the app from one to five supported sensor models (four new: Beam Gen 2, Mini, Sphere and Terra), restructuring system logic, onboarding, error handling and data visualisation.',
          'Took three new sensor products (Mini, Sphere, Terra) from product definition to launch.',
          'Created the complete documentation for the app and, together with the CTO, guided its handover to an external development team during the move from native iOS and Android to Flutter.',
          'Worked cross-functionally with the CTO, front-end and back-end developers, hardware and firmware, data scientists and plant scientists to align technical feasibility with user needs.',
          'Presented design decisions and trade-offs to leadership on a regular basis to agree on scope and priorities.',
          'Mentored a working student and several interns through briefings and design reviews.',
          'Set up design principles, guidelines and project planning where no design structure existed before.',
        ],
      },
      {
        period: '08/2021 to 09/2022',
        role: 'Working Student · Marketing',
        org: 'FYTA',
        place: 'Berlin',
        bullets: [
          'Designed the webshop and landing pages, customised the Shopify and WordPress themes through CSS and small HTML snippets, and set up the FYTA Magazine.',
          'Conceived and executed social media campaigns and produced videos for social media advertising.',
        ],
      },
      {
        period: '02/2020 to 07/2021',
        role: 'Designer',
        org: 'Loveto',
        place: 'Berlin',
        bullets: [
          'Developed visual concepts from client briefs, frequently selected as the final direction.',
          'Designed sustainability reports in print and as interactive web versions, plus branding, illustration and digital layouts for clients including KfW, HOWOGE, Stadtreinigung Hamburg, Rügenwalder Mühle and Fröbel.',
          'Managed client projects, partly coordinating directly with clients independently.',
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
      { org: 'Grünweiss Design', place: 'Hamburg', period: '05/2016 to 10/2016' },
      { org: 'Rocket & Wink', place: 'Hamburg', period: '03/2014 to 09/2014' },
    ],
    education: [
      { period: '10/2019 to 07/2022', role: 'M.A. Interface Design', org: 'University of Applied Sciences Potsdam', place: 'Potsdam' },
      { period: '03/2012 to 02/2016', role: 'B.A. Visual Communication', org: 'Pforzheim University', place: 'Pforzheim' },
    ] as Entry[],
  },
}

// Reihenfolge: Portfolio zuerst, dort fällt bei Designer-Stellen die Entscheidung.
// Alles echte Links, damit sie im PDF klickbar bleiben.
const contactLinks = [
  { label: personal.portfolioUrl, href: `https://${personal.portfolioUrl}` },
  { label: LINKEDIN_URL.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, ''), href: LINKEDIN_URL },
  { label: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
  { label: personal.phone, href: `tel:${personal.phone.replace(/\s/g, '')}` },
].filter((l) => l.label)

// "Context" ist Portfolio-Sprache und gehoert nicht in die Skill-Liste eines Lebenslaufs.
// "Zusammenarbeit" steht auf dem Lebenslauf in den FYTA-Bullets, nicht als Wortliste.
const skillGroups = about.skills.filter((g) => g.category !== 'Context' && g.category !== 'Zusammenarbeit')

// Zweitrangiger Text liegt überall bei mindestens 75% (≥ 4.5:1 auf Weiß, WCAG AA).
// Druck: alles eine Stufe kleiner, damit der Lebenslauf auf eine A4-Seite passt.
// Eine Textspalte, Datum in der Rollenzeile: Parser (Greenhouse, Personio)
// trennen sonst Datum und Rolle voneinander.
function HeadingRow({ role, org, place, period, compact }: { role: string; org: string; place: string; period: string; compact: boolean }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between print:block print:leading-[1.25] gap-x-4 gap-y-0.5">
      <div className="flex flex-wrap items-baseline gap-x-2 min-w-0 print:inline">
        <h3
          className={
            compact
              ? 'font-tiempos text-[16px] print:text-[12px] print:inline print:mr-2 text-[#32404f]/85'
              : 'font-tiempos text-[18px] print:text-[13.5px] print:inline print:mr-2 tracking-[-0.01em] text-[#32404f]'
          }
        >
          {role}
        </h3>
        <span className="font-geist text-[15px] print:text-[12px] text-[#32404f]/75">
          · {org} · {place}
        </span>
      </div>
      <p className="font-mono text-[12px] print:text-[10px] uppercase tracking-[0.02em] text-[#c84a1a] whitespace-nowrap shrink-0 print:inline print:ml-2 print:before:content-['·'] print:before:mr-2">{period}</p>
    </div>
  )
}

function EntryRow({ e, compact = false }: { e: Entry; compact?: boolean }) {
  return (
    <div className="break-inside-avoid">
      <HeadingRow role={e.role} org={e.org} place={e.place} period={e.period} compact={compact} />
      {e.earlier?.map((r) => (
        <div key={r.role + r.period} className="mt-0.5 print:mt-0">
          <HeadingRow role={r.role} org={e.org} place={e.place} period={r.period} compact />
        </div>
      ))}
      {e.about && (
        <p className="font-geist text-[14px] print:text-[11.5px] italic text-[#32404f]/75 mt-0.5">{e.about}</p>
      )}
      {e.bullets && (
        <ul className="flex flex-col gap-1 print:gap-[2px] mt-1.5 print:mt-1 list-disc pl-4 marker:text-[#32404f]/60">
          {e.bullets.map((b, i) => (
            <li key={i} className="font-geist text-[15px] print:text-[12px] leading-[1.6] print:leading-[1.35] text-[#32404f]/80">{b}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-mono text-[13px] print:text-[10px] uppercase tracking-[0.04em] text-[#32404f]/75 pb-3 print:pb-1 border-b border-[#32404f]/10">
      {children}
    </h2>
  )
}

function RunInLabel({ children, fixed = false }: { children: React.ReactNode; fixed?: boolean }) {
  return (
    <span
      className={`font-mono text-[12px] print:text-[10px] uppercase tracking-[0.02em] text-[#32404f]/75 mr-2 ${fixed ? 'inline-block indent-0 w-[108px] print:w-[96px]' : ''}`}
    >
      {children}
    </span>
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
        <header className="flex flex-col gap-6 print:gap-1.5 pb-10 print:pb-2.5 border-b border-[#32404f]/10">
          <div className="flex items-start justify-between gap-6">
            <div className="flex flex-col gap-2 print:gap-0.5">
              <h1 className="font-tiempos text-[clamp(30px,4vw,44px)] print:text-[26px] tracking-[-0.02em] leading-[1.05]">
                Lisa Collmer
              </h1>
              <p className="font-geist text-[17px] print:text-[13px] text-[#32404f]/75">{t.headline}</p>
            </div>
            <div className="print:hidden shrink-0 flex items-center gap-3">
              <div className="flex rounded-full border border-[#32404f]/15 p-0.5 font-mono text-[12px] uppercase tracking-[0.04em]">
                {(['de', 'en'] as Lang[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => setParams(l === 'en' ? { lang: 'en' } : {}, { replace: true })}
                    aria-pressed={lang === l}
                    className={`rounded-full px-3 py-1.5 transition-colors duration-200 ${lang === l ? 'bg-[#32404f] text-[#fafcfd]' : 'text-[#32404f]/75 hover:text-[#32404f]'}`}
                  >
                    {l}
                  </button>
                ))}
              </div>
              {/* Echter Download statt window.print(). Die PDFs liegen fertig in
                  public/cv/ und werden mit `npm run cv:pdf` neu erzeugt. */}
              <a
                href={`/cv/Lisa-Collmer-CV-${lang.toUpperCase()}.pdf`}
                download
                className="rounded-full bg-[#32404f] px-5 py-2 font-mono text-[12px] uppercase tracking-[0.04em] text-[#fafcfd] hover:bg-[#e65f2e] transition-colors duration-200"
              >
                {t.download}
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-6 print:gap-x-3 gap-y-1 font-geist text-[14px] print:text-[11px] text-[#32404f]/80">
            {contactLinks.map((l) => (
              <a key={l.href} href={l.href} className="hover:underline print:no-underline">{l.label}</a>
            ))}
          </div>
        </header>

        <section className="flex flex-col gap-4 print:gap-1.5 pt-10 print:pt-3">
          <SectionLabel>{t.labels.profile}</SectionLabel>
          <p className="font-geist text-[16px] print:text-[12px] leading-[1.7] print:leading-[1.4] text-[#32404f]/80">{t.profile}</p>
        </section>

        <section className="flex flex-col gap-6 print:gap-2 pt-12 print:pt-3">
          <SectionLabel>{t.labels.experience}</SectionLabel>
          <div className="flex flex-col gap-7 print:gap-2">
            {t.experience.map((e, i) => <EntryRow key={i} e={e} compact={!e.bullets} />)}
          </div>
          <p className="font-geist text-[14px] print:text-[11.5px] leading-[1.6] text-[#32404f]/75">
            <RunInLabel>{t.labels.internships}</RunInLabel>
            {t.internships.map((e) => `${e.org} (${e.place}) ${e.period}`).join(' · ')}
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
          <div className="flex flex-col gap-1.5 print:gap-[2px]">
            {skillGroups.map((g) => (
              <p key={g.category} className="pl-[116px] -indent-[116px] print:pl-[104px] print:-indent-[104px] font-geist text-[15px] print:text-[12px] leading-[1.6] print:leading-[1.35] text-[#32404f]/80">
                <RunInLabel fixed>{t.skillCategory(g.category)}</RunInLabel>
                {g.items.map(t.skillItem).join(', ')}
              </p>
            ))}
            <p className="pl-[116px] -indent-[116px] print:pl-[104px] print:-indent-[104px] font-geist text-[15px] print:text-[12px] leading-[1.6] print:leading-[1.35] text-[#32404f]/80">
              <RunInLabel fixed>{t.labels.languages}</RunInLabel>
              {t.languages.join(' · ')}
            </p>
          </div>
        </section>

      </main>

      <div className="print:hidden">
        <FooterV2 />
      </div>
    </div>
  )
}
