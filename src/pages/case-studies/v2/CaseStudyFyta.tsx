import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import NavV2 from '../../../components/v2/NavV2'
import FooterV2 from '../../../components/v2/FooterV2'
import CSMediaLightbox from '../../../components/case-study/CSMediaLightbox'
import { caseStudies } from '../../../content'

const cs = caseStudies.fyta
const folder = cs.meta.imageFolder

const sections = [
  { id: 'zusammenfassung', label: 'Zusammenfassung' },
  { id: 'ueberblick', label: 'Überblick' },
  { id: 'fragestellung', label: 'Fragestellung' },
  { id: 'loesung', label: 'Lösung' },
  { id: 'prozess', label: 'Prozess' },
  { id: 'hardware', label: 'Systemweite Entscheidungen' },
  { id: 'reflexion', label: 'Reflexion' },
]

function DecisionCard({ img, alt, heading, body }: { img: string; alt: string; heading: string; body: string }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[60%_auto] gap-6 md:gap-8 items-end">
      <div className="md:hidden flex flex-col pb-2">
        <h3 className="font-tiempos text-[16px] text-[#32404f]">{heading}</h3>
      </div>
      <div className="relative w-full border border-[#32404f]/10 overflow-hidden">
        <CSMediaLightbox src={`${folder}${img}`} alt={alt} className="w-full h-auto object-cover" />
      </div>
      <div className="hidden md:flex flex-col h-fit">
        <h3 className="font-tiempos text-[clamp(18px,2vw,24px)] tracking-[-0.01em] leading-[1.3] text-[#32404f] mb-2">
          {heading}
        </h3>
        <p className="font-geist text-[15px] text-[#32404f]/60 leading-[1.6]">{body}</p>
      </div>
    </div>
  )
}

// Two images side by side, then their captions below in the same two columns.
function TwoUpImageText({
  leftImg,
  leftAlt,
  rightImg,
  rightAlt,
  left,
  right,
}: {
  leftImg: string
  leftAlt: string
  rightImg: string
  rightAlt: string
  left: { heading: string; body: string }
  right: { heading: string; body: string }
}) {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-[#32404f]/10 overflow-hidden">
          <CSMediaLightbox src={`${folder}${leftImg}`} alt={leftAlt} className="w-full object-cover" />
        </div>
        <div className="border border-[#32404f]/10 overflow-hidden">
          <CSMediaLightbox src={`${folder}${rightImg}`} alt={rightAlt} className="w-full object-cover" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-tiempos text-[18px] text-[#32404f] mb-2">{left.heading}</h4>
          <p className="font-geist text-[15px] text-[#32404f]/60 leading-[1.6]">{left.body}</p>
        </div>
        <div>
          <h4 className="font-tiempos text-[18px] text-[#32404f] mb-2">{right.heading}</h4>
          <p className="font-geist text-[15px] text-[#32404f]/60 leading-[1.6]">{right.body}</p>
        </div>
      </div>
    </div>
  )
}

// V2 copy — same facts as the V1 case study, rewritten to the portfolio's
// tone-of-voice guide: first person, thesis headlines, open on the question,
// concrete numbers over adjectives, trade-offs named explicitly.
const copy = {
  hook: (
    <>
      Wie gestalte ich ein Onboarding, das mit einem wachsenden Sensor-Ökosystem{' '}
      <em className="italic">mitwächst</em>, ohne dass Nutzer:innen die Komplexität dahinter spüren?
    </>
  ),
  intro:
    'FYTA verbindet Pflanzenpflege mit sensorbasierten Daten aus Boden, Licht und Umgebung. Mit vier neuen Sensortypen (Beam, Mini, Terra und Sphere) musste das Onboarding lernen, beliebig viele Kombinationen zu verstehen, ohne sich für Nutzer:innen wie vier verschiedene Apps anzufühlen.',
  ueberblick: {
    thesis: (
      <>
        Ein Sensor, eine Pflanze: Dieses Modell hält vier neue Sensortypen nicht mehr <em className="italic">aus</em>.
      </>
    ),
    body: 'Die App kannte bis dahin genau eine Beziehung: ein Sensor, eine Pflanze. Mit der neuen Sensorfamilie wurde daraus ein Viele-zu-viele-System: gleiche Grundlogik, aber jeder Sensor mit eigenem Hardware-Setup und eigenen Edge Cases. Ich habe das System von Grund auf neu gestaltet: von der Backend-Logik bis zum letzten Onboarding-Screen.',
  },
  fragestellung: (
    <>
      Wie baue ich vier grundverschiedene Sensor-Flows, ohne dass sich das für Nutzer:innen wie{' '}
      <em className="italic">vier verschiedene Produkte</em> anfühlt?
    </>
  ),
  prozess: {
    thesis: (
      <>
        Bevor ich einen Screen zeichne, zeichne ich die <em className="italic">Systemlogik</em>.
      </>
    ),
    body: [
      'Das Onboarding musste ein neues mentales Modell vermitteln und gleichzeitig ein System abbilden, in dem Sensoren, Pflanzen, Substrate und Nutzungskontexte in unzähligen Kombinationen interagieren, jede mit eigenen Regeln, Abhängigkeiten und Fehlerzuständen.',
      'Also habe ich zuerst die Logik als Flowchart modelliert, nicht die Screens. Jede Abhängigkeit und jeder Edge Case musste sichtbar sein, bevor ich eine einzige UI-Entscheidung treffe.',
    ],
    followup:
      'Bevor ich die finalen Flows gestaltet habe, brauchte ich eine wiederkehrende Struktur für die übergeordneten Schritte im Onboarding. Einzige Ausnahme: der Outdoor-Sensor, der zusätzlich mit WLAN verbunden werden muss.',
  },
  loesung: {
    thesis: (
      <>
        Vier Sensoren, ein gemeinsames <em className="italic">Muster</em>.
      </>
    ),
    body: 'Aus einem mentalen Modell entstanden vier eigenständige Onboarding-Flows für Beam, Mini, Terra und Sphere. Unterschiedliche Hardware, dieselbe Informationsarchitektur: gleiche Statussprache, gleiche Fehlerbehandlung, gleiches Navigationsgerüst. Der Trade-off: mehr Abstimmungsaufwand pro Sensor, damit Nutzer:innen beim zweiten Gerät nichts neu lernen müssen.',
    decisions: [
      {
        heading: 'Ich lasse jeden Sensor dieselbe Sprache sprechen.',
        body: 'Bei jedem Sensortyp bedeutet Blau pulsierend Kopplungsmodus, Orange ein laufendes Firmware-Update. Nutzer:innen lernen diese Zustände nicht neu, sie verinnerlichen sie einmal.',
      },
      {
        heading: 'Renderings erklären die Hardware, Illustrationen den Kontext.',
        body: 'Jeder Sensor verlangt eine andere physische Handlung: Terra wird vergraben, Beam gesteckt. Produktrenderings zeigen das Gerät, eigens entwickelte Illustrationen den Nutzungskontext, den kein Rendering allein vermitteln kann.',
      },
    ],
    compatibility: {
      thesis: (
        <>
          Ich informiere und korrigiere, statt zu <em className="italic">blockieren</em>.
        </>
      ),
      intro:
        'Sobald ein Sensor mehrere Pflanzen überwacht, wird das Onboarding komplex. Alle Pflanzen müssen unter denselben Umweltbedingungen wachsen, Bodensensoren zusätzlich im selben Substrat. Nutzer:innen können außerdem Pflanzen mit sehr unterschiedlichen Pflegebedürfnissen im selben Topf oder Bereich gruppieren, was zu widersprüchlichen Pflegetipps führt. Die Herausforderung war, eine Lösung zu finden, die den Flow nicht unterbricht und die Frustration gering hält.',
      left: {
        heading: 'Ich informiere über Kompatibilität, bevor es zum Problem wird.',
        body: 'Bevor Nutzer:innen Pflanzen auswählen und auf eine Inkompatibilität stoßen, erklärt jeder Sensor vorab, worauf sie bei der Auswahl achten sollten.',
      },
      right: {
        heading: 'Ich korrigiere, statt zu blockieren.',
        body: 'Nutzer:innen wollen nicht durch eine Systemeinschränkung blockiert werden. Deshalb bekommen sie sofort die Chance, widersprüchliche Angaben zwischen zwei Pflanzen zu korrigieren.',
      },
    },
    pullQuote: 'Ich gebe Nutzer:innen die Chance, den Fehler zu beheben, statt das Onboarding zu blockieren.',
  },
  hardware: {
    thesis: (
      <>
        Das Onboarding endet, die Hardware <em className="italic">bleibt</em>.
      </>
    ),
    body: 'Nach dem Onboarding begleiten die Sensoren Nutzer:innen dauerhaft — vorher liefen alle Statusinfos über die Pflanze, die Sensoren selbst hatten keinen eigenen Ort. Ich habe die Touchpoints identifiziert, an denen ich die größten Probleme kommen sah. Drei Beispiele: Wo leben Sensoren, wenn sie nicht mehr an eine einzelne Pflanze gebunden sind? Woran erkennen Nutzer:innen bei mehreren Sensoren, welcher die Verbindung verloren hat? Und wie empfehlen wir den passenden Sensor, ohne aufdringlich zu wirken?',
    items: [
      {
        heading: '„My Devices" macht Sensoren zu einer eigenen Ebene.',
        body: 'Sensoren lassen sich jetzt unabhängig von Pflanzen anbinden: Gerät, Status und letzter Sync auf einen Blick, losgelöst vom Pflanzenprofil.',
      },
      {
        heading: 'Ich zeige, welches Gerät betroffen ist, nicht nur, dass ein Wert fehlt.',
        body: 'Veraltete Messwerte bleiben im Pflanzenprofil sichtbar, weil sie den Status anderer Parameter verfälschen können. Bei zwei angebundenen Sensoren war unklar, welcher betroffen ist. Ein Toast nennt jetzt den Sensor namentlich, die Sensorkarte zeigt ihn zusätzlich, und die betroffenen Statuschips werden ausgegraut. So liegt das Problem sichtbar beim Gerät, nicht bei der Pflanze.',
      },
      {
        heading: 'Ein leerer Parameter empfiehlt den passenden Sensor.',
        body: 'Öffnen Nutzer:innen einen Parameter ohne angebundenen Sensor, sehen sie statt einer Datenvisualisierung, welcher Sensor ihn messen kann und was er der Pflanze bringt. Wie eine Paywall für Pro-Features — nur wird nichts deaktiviert und kein Abo verkauft, sondern der passende Sensor kontextbezogen empfohlen.',
      },
    ],
  },
  reflexion: {
    thesis: (
      <>
        Die schwierigsten Entscheidungen lagen <em className="italic">außerhalb</em> des Onboardings, das ich eigentlich gestalten sollte.
      </>
    ),
    takeaways: [
      {
        heading: 'Restriktionen kommen selten pünktlich. Ich musste meinen Prozess danach ausrichten.',
        body: 'Sensorentwicklung und App-Integration liefen bei FYTA parallel: normal für ein wachsendes Startup. Hardware-Restriktionen kamen deshalb oft erst spät oder änderten sich noch während des Designs. Ich habe gelernt, meinen Prozess so flexibel zu halten, dass neue Restriktionen eingearbeitet werden konnten, ohne von vorne anzufangen, und so häufig wie möglich mit dem Team im Austausch zu bleiben, um solche Fehlerquellen frühzeitig zu erkennen.',
      },
      {
        heading: 'Nicht jede Information gehört ins Onboarding.',
        body: 'Es war mein erstes Projekt mit voller Verantwortung für ein derart komplexes Produkt. Eine große Hürde dabei war, zu hinterfragen, welche Informationen im Onboarding bleiben müssen und welche zu Frustration führen könnten, weil die Kaufentscheidung längst gefallen ist. Welcher Sensor zu welcher Pflanze passt oder welche Probe-Länge zur Topfgröße, gehört in den Webshop, wo Nutzer:innen noch wählen können. Produktübergreifend zu denken, wo welche Information hingehört, war eines der größten Learnings dieses Projekts.',
      },
    ],
  },
}

export default function CaseStudyFytaV2() {
  const [activeId, setActiveId] = useState('zusammenfassung')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length > 0) {
          visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
          setActiveId(visible[0].target.id)
        }
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    )
    sections.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })

    // Last section can be shorter than the observer's scroll band, so it
    // may never re-enter the intersection zone once the page hits max
    // scroll. Force it active when the user has scrolled to the bottom.
    const handleScroll = () => {
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
      if (atBottom) setActiveId(sections[sections.length - 1].id)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-[#fafcfd] text-[#32404f]">
      <NavV2 active="Work" />

      <main className="grid max-w-[1800px] mx-auto grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-0 md:gap-8">

        {/* ── Left sidebar ── */}
        <aside className="md:sticky md:top-0 md:h-fit px-8 md:px-0 md:pl-8 pt-12 pb-0 md:py-12 min-w-[160px]">
          <Link to="/v2" className="w-full text-left">
            <div className="flex items-center gap-2 font-geist text-[14px] text-[#32404f]/50 hover:text-[#32404f] transition-colors cursor-pointer">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z" />
              </svg>
              Back
            </div>
          </Link>

          <nav className="mt-8 hidden md:block">
            <div className="flex flex-col items-start gap-2">
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className={`font-mono text-[13px] uppercase tracking-[0.02em] text-left transition-colors cursor-pointer ${
                    activeId === s.id ? 'text-[#e65f2e]' : 'text-[#32404f]/40 hover:text-[#32404f]'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </nav>
        </aside>

        {/* ── Main content column ── */}
        <div className="w-full md:max-w-3xl lg:max-w-4xl py-12 px-8 md:px-0 flex flex-col gap-12 md:gap-24">

          {/* ── Header block ── */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h4 className="font-mono text-[13px] uppercase tracking-[0.02em] text-[#32404f]/50">
                {cs.tags.join(' · ')} · {cs.meta.status}
              </h4>
              <h1 className="font-tiempos text-[clamp(32px,4.5vw,52px)] tracking-[-0.02em] leading-[1.1] text-[#32404f]">
                {cs.title}
              </h1>
              <p className="font-tiempos text-[clamp(20px,2.4vw,28px)] tracking-[-0.01em] leading-[1.35] text-[#32404f]/80 mt-2">
                {copy.hook}
              </p>
            </div>

            {/* Hero video */}
            <div className="w-full aspect-video border border-[#32404f]/10 overflow-hidden">
              <video
                src={`${folder}hero_Onboarding_hero.mp4`}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>

            {/* Meta row */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-12">
              <div className="flex w-full flex-col gap-2">
                <h4 className="font-mono text-[13px] uppercase tracking-[0.02em] text-[#32404f]">Role</h4>
                <p className="font-geist text-[15px] text-[#32404f]/60">{cs.meta.role}</p>
              </div>
              <div className="flex w-full flex-col gap-2">
                <h4 className="font-mono text-[13px] uppercase tracking-[0.02em] text-[#32404f]">Status</h4>
                <p className="font-geist text-[15px] text-[#32404f]/60">{cs.meta.status}</p>
              </div>
              <div className="flex w-full flex-col gap-2">
                <h4 className="font-mono text-[13px] uppercase tracking-[0.02em] text-[#32404f]">Typ</h4>
                <p className="font-geist text-[15px] text-[#32404f]/60">Product Design</p>
              </div>
              <div className="flex w-full flex-col gap-2">
                <h4 className="font-mono text-[13px] uppercase tracking-[0.02em] text-[#32404f]">Skills</h4>
                <div className="flex flex-col gap-0">
                  {cs.tags.map((t) => (
                    <p key={t} className="font-geist text-[15px] text-[#32404f]/60">{t}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Sections ── */}
          <div className="flex flex-col gap-12 md:gap-24">

            {/* Zusammenfassung */}
            <section id="zusammenfassung" className="flex flex-col gap-4">
              <h4 className="font-mono text-[13px] uppercase tracking-[0.02em] text-[#32404f]/50 mb-1">Zusammenfassung</h4>
              <p className="font-geist text-[16px] leading-[1.7] text-[#32404f]/70">
                {copy.intro}
              </p>
            </section>

            {/* Überblick — mental model image full-width, carries the explanation */}
            <section id="ueberblick" className="flex flex-col gap-6">
              <div className="border border-[#32404f]/10 bg-[#f2f4f5] p-4">
                <span className="block font-mono text-[10px] uppercase tracking-[0.12em] text-[#32404f]/40 mb-3">
                  Exhibit · Mentales Modell
                </span>
                <CSMediaLightbox
                  src={`${folder}01_Mental_Model.png`}
                  alt="Komplexitätsmodell: Eins zu eins, Eins zu vielen, Viele zu viele"
                  className="w-full object-cover border border-[#32404f]/10"
                />
              </div>
              <div className="flex flex-col gap-3 max-w-2xl">
                <h4 className="font-mono text-[13px] uppercase tracking-[0.02em] text-[#32404f]/50 mb-1">Überblick</h4>
                <h3 className="font-tiempos text-[clamp(20px,2.6vw,28px)] tracking-[-0.02em] leading-[1.3] text-[#32404f]">
                  {copy.ueberblick.thesis}
                </h3>
                <p className="font-geist text-[16px] leading-[1.7] text-[#32404f]/70">
                  {copy.ueberblick.body}
                </p>
              </div>
            </section>

            {/* Fragestellung */}
            <section id="fragestellung" className="flex flex-col gap-4">
              <h4 className="font-mono text-[13px] uppercase tracking-[0.02em] text-[#32404f]/50 mb-1">Fragestellung</h4>
              <h2 className="font-tiempos text-[clamp(22px,3vw,32px)] tracking-[-0.02em] leading-[1.25] text-[#32404f]">
                {copy.fragestellung}
              </h2>
            </section>

            {/* Lösung — intro + overview image only, decision cards moved back after Prozess */}
            <section id="loesung" className="flex flex-col gap-4">
              <h4 className="font-mono text-[13px] uppercase tracking-[0.02em] text-[#32404f]/50 mb-1">Lösung</h4>
              <h3 className="font-tiempos text-[clamp(22px,3vw,32px)] tracking-[-0.02em] leading-[1.25] text-[#32404f] -mb-2">
                {copy.loesung.thesis}
              </h3>
              <p className="font-geist text-[16px] leading-[1.7] text-[#32404f]/70">
                {copy.loesung.body}
              </p>

              {/* Flows overview image */}
              <div className="mt-4 border border-[#32404f]/10">
                <CSMediaLightbox
                  src={`${folder}casestudy-04.png`}
                  alt="Vier Onboarding-Flows: Beam, Mini, Terra, Sphere"
                  className="w-full object-cover"
                />
              </div>
            </section>

            {/* Prozess */}
            <section id="prozess" className="flex flex-col gap-4">
              <h4 className="font-mono text-[13px] uppercase tracking-[0.02em] text-[#32404f]/50 mb-1">Prozess</h4>
              <h3 className="font-tiempos text-[clamp(22px,3vw,32px)] tracking-[-0.02em] leading-[1.25] text-[#32404f] -mb-2">
                {copy.prozess.thesis}
              </h3>
              {copy.prozess.body.map((p, i) => (
                <p key={i} className="font-geist text-[16px] leading-[1.7] text-[#32404f]/70">
                  {p}
                </p>
              ))}

              <div className="mt-4 border border-[#32404f]/10 bg-[#F9F9F9] p-4">
                <span className="block font-mono text-[10px] uppercase tracking-[0.12em] text-[#32404f]/40 mb-3">
                  Exhibit · Systemlogik
                </span>
                <CSMediaLightbox
                  src={`${folder}02_Add sensor 1 Flow chart.png`}
                  alt="Flowchart: Zuordnungslogik und Edge Cases"
                  className="w-full object-cover border border-[#32404f]/10"
                />
              </div>

              <p className="font-geist text-[16px] leading-[1.7] text-[#32404f]/70 mt-4">
                {copy.prozess.followup}
              </p>

              <div className="mt-4 border border-[#32404f]/10 bg-[#F9F9F9]">
                <CSMediaLightbox
                  src={`${folder}casestudy-03.png`}
                  alt="Wiederkehrende Struktur der übergeordneten Onboarding-Schritte"
                  className="w-full object-cover"
                />
              </div>
            </section>

            {/* Entscheidungen, die einen Unterschied gemacht haben */}
            <div className="flex flex-col gap-4">
              <p className="font-mono text-[13px] uppercase tracking-[0.02em] text-[#32404f]/40 mb-2">
                Entscheidungen, die einen Unterschied gemacht haben
              </p>

              <div className="flex flex-col gap-12 md:gap-16">
                <DecisionCard
                  img="casestudy-05.mp4"
                  alt="Connecting to Sphere: einheitliche Statussprache"
                  heading={copy.loesung.decisions[0].heading}
                  body={copy.loesung.decisions[0].body}
                />

                {/* Kompatibilität: informieren + korrigieren, statt blockieren */}
                <div className="flex flex-col gap-4">
                  <h3 className="font-tiempos text-[clamp(20px,2.6vw,26px)] tracking-[-0.02em] leading-[1.3] text-[#32404f]">
                    {copy.loesung.compatibility.thesis}
                  </h3>
                  <p className="font-geist text-[16px] leading-[1.7] text-[#32404f]/70">
                    {copy.loesung.compatibility.intro}
                  </p>
                  <TwoUpImageText
                    leftImg="casestudy-06.mp4"
                    leftAlt="Choosing compatible plants: Kriterien für kompatible Pflanzen"
                    rightImg="casestudy-06-1.png"
                    rightAlt="Different plant settings detected: Dialog zum Vereinheitlichen der Pflanzensettings"
                    left={copy.loesung.compatibility.left}
                    right={copy.loesung.compatibility.right}
                  />
                </div>

                {/* Pull-quote — sits right after the compatibility story it belongs to */}
                <blockquote className="border-l-2 border-[#e65f2e] pl-6 py-1">
                  <p className="font-tiempos italic text-[clamp(20px,2.4vw,26px)] leading-[1.35] text-[#32404f]">
                    {copy.loesung.pullQuote}
                  </p>
                </blockquote>

                <DecisionCard
                  img="casestudy-07.png"
                  alt="Terra Platzierung: illustrative Instruktion"
                  heading={copy.loesung.decisions[1].heading}
                  body={copy.loesung.decisions[1].body}
                />
              </div>
            </div>

            {/* Systemweite Entscheidungen */}
            <section id="hardware" className="flex flex-col gap-4">
              <h4 className="font-mono text-[13px] uppercase tracking-[0.02em] text-[#32404f]/50 mb-1">Systemweite Entscheidungen</h4>
              <h3 className="font-tiempos text-[clamp(22px,3vw,32px)] tracking-[-0.02em] leading-[1.25] text-[#32404f] -mb-2">
                {copy.hardware.thesis}
              </h3>
              <p className="font-geist text-[16px] leading-[1.7] text-[#32404f]/70">
                {copy.hardware.body}
              </p>

              <div className="flex flex-col gap-12 mt-4">
                {/* My Devices */}
                <div className="grid grid-cols-1 md:grid-cols-[60%_auto] gap-6 md:gap-8 items-end">
                  <div className="md:hidden flex flex-col pb-2">
                    <h3 className="font-tiempos text-[16px] text-[#32404f]">{copy.hardware.items[0].heading}</h3>
                  </div>
                  <div className="relative w-full border border-[#32404f]/10 overflow-hidden">
                    <CSMediaLightbox
                      src={`${folder}casestudy-09.png`}
                      alt="My Devices: Sensorübersicht"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="hidden md:flex flex-col h-fit">
                    <h3 className="font-tiempos text-[clamp(18px,2vw,24px)] tracking-[-0.01em] leading-[1.3] text-[#32404f] mb-2">
                      {copy.hardware.items[0].heading}
                    </h3>
                    <p className="font-geist text-[15px] text-[#32404f]/60 leading-[1.6]">{copy.hardware.items[0].body}</p>
                  </div>
                </div>

                {/* Out of Sync */}
                <div className="grid grid-cols-1 md:grid-cols-[60%_auto] gap-6 md:gap-8 items-end">
                  <div className="md:hidden flex flex-col pb-2">
                    <h3 className="font-tiempos text-[16px] text-[#32404f]">{copy.hardware.items[1].heading}</h3>
                  </div>
                  <div className="relative w-full border border-[#32404f]/10 overflow-hidden">
                    <video
                      src={`${folder}casestudy-10.mp4`}
                      autoPlay
                      loop
                      muted
                      playsInline
                      onMouseEnter={(e) => { e.currentTarget.controls = true }}
                      onMouseLeave={(e) => { e.currentTarget.controls = false }}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="hidden md:flex flex-col h-fit">
                    <h3 className="font-tiempos text-[clamp(18px,2vw,24px)] tracking-[-0.01em] leading-[1.3] text-[#32404f] mb-2">
                      {copy.hardware.items[1].heading}
                    </h3>
                    <p className="font-geist text-[15px] text-[#32404f]/60 leading-[1.6]">{copy.hardware.items[1].body}</p>
                  </div>
                </div>

                {/* Empty States */}
                <div className="grid grid-cols-1 md:grid-cols-[60%_auto] gap-6 md:gap-8 items-end">
                  <div className="md:hidden flex flex-col pb-2">
                    <h3 className="font-tiempos text-[16px] text-[#32404f]">{copy.hardware.items[2].heading}</h3>
                  </div>
                  <div className="relative w-full border border-[#32404f]/10 overflow-hidden">
                    <CSMediaLightbox
                      src={`${folder}casestudy-11.png`}
                      alt="Empty State: Sensor-Empfehlung"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="hidden md:flex flex-col h-fit">
                    <h3 className="font-tiempos text-[clamp(18px,2vw,24px)] tracking-[-0.01em] leading-[1.3] text-[#32404f] mb-2">
                      {copy.hardware.items[2].heading}
                    </h3>
                    <p className="font-geist text-[15px] text-[#32404f]/60 leading-[1.6]">{copy.hardware.items[2].body}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Reflexion */}
            <section id="reflexion" className="flex flex-col gap-4">
              <h4 className="font-mono text-[13px] uppercase tracking-[0.02em] text-[#32404f]/50 mb-1">Reflexion</h4>
              <h3 className="font-tiempos text-[clamp(22px,3vw,32px)] tracking-[-0.02em] leading-[1.25] text-[#32404f] -mb-2">
                {copy.reflexion.thesis}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-2">
                {copy.reflexion.takeaways.map((t, i) => (
                  <div key={i}>
                    <h4 className="font-tiempos text-[20px] text-[#32404f] mb-2">{t.heading}</h4>
                    <p className="font-geist text-[15px] leading-[1.6] text-[#32404f]/60">{t.body}</p>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </div>

        {/* ── Right spacer ── */}
        <div className="p-6 py-12" />

      </main>

      <FooterV2 />
    </div>
  )
}
