import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import CSMediaLightbox from '../components/case-study/CSMediaLightbox'
import { caseStudies } from '../content'

const cs = caseStudies.fyta
const folder = cs.meta.imageFolder

const sections = [
  { id: 'zusammenfassung', label: 'Zusammenfassung' },
  { id: 'ueberblick', label: 'Überblick' },
  { id: 'fragestellung', label: 'Fragestellung' },
  { id: 'prozess', label: 'Prozess' },
  { id: 'loesung', label: 'Lösung' },
  { id: 'hardware', label: 'Hardware' },
  { id: 'reflexion', label: 'Reflexion' },
]

export default function CaseStudyFyta() {
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
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-dark text-light">
      <Nav />

      <main className="grid max-w-[1800px] mx-auto grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-0 md:gap-8">

        {/* ── Left sidebar ── */}
        <aside className="md:sticky md:top-0 md:h-fit px-8 md:px-0 md:pl-8 pt-12 pb-0 md:py-12 min-w-[160px]">
          <Link to="/" className="w-full text-left">
            <div className="flex items-center gap-2 font-body text-[14px] text-grey/50 hover:text-light transition-colors cursor-pointer">
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
                  className={`font-body text-[14px] text-left transition-colors cursor-pointer ${
                    activeId === s.id
                      ? 'text-light'
                      : 'text-light/30 hover:text-light'
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
              <h4 className="font-body text-[14px] text-grey/50">{cs.tags.join(' · ')} · {cs.meta.status}</h4>
              <h1 className="font-title-italic text-[clamp(32px,4.5vw,52px)] tracking-[-0.03em] leading-[1.1] text-light">
                {cs.title}
              </h1>
            </div>

            {/* Hero image */}
            <div className="w-full aspect-video border border-white/10 overflow-hidden">
              <img
                src={`${folder}hero.jpg`}
                alt="FYTA Sensoranbindung"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Meta row */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-12">
              <div className="flex w-full flex-col gap-2">
                <h4 className="font-body text-[14px] text-light font-medium">Role</h4>
                <p className="font-body text-[15px] text-light/60">{cs.meta.role}</p>
              </div>
              <div className="flex w-full flex-col gap-2">
                <h4 className="font-body text-[14px] text-light font-medium">Status</h4>
                <p className="font-body text-[15px] text-light/60">{cs.meta.status}</p>
              </div>
              <div className="flex w-full flex-col gap-2">
                <h4 className="font-body text-[14px] text-light font-medium">Typ</h4>
                <p className="font-body text-[15px] text-light/60">Product Design</p>
              </div>
              <div className="flex w-full flex-col gap-2">
                <h4 className="font-body text-[14px] text-light font-medium">Skills</h4>
                <div className="flex flex-col gap-0">
                  {cs.tags.map((t) => (
                    <p key={t} className="font-body text-[15px] text-light/60">{t}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Sections ── */}
          <div className="flex flex-col gap-12 md:gap-24">

            {/* Zusammenfassung */}
            <section id="zusammenfassung" className="flex flex-col gap-4">
              <h4 className="font-mono text-[14px] text-light font-normal mb-1">Zusammenfassung</h4>
              <h3 className="font-title-italic text-[clamp(22px,3vw,32px)] tracking-[-0.02em] leading-[1.25] text-light -mb-2">
                Ein skalierbares Onboarding-System für das neue FYTA-Ökosystem. Von einem Sensor auf viele.
              </h3>
              <p className="font-body text-[16px] leading-[1.7] text-light/60">
                FYTA ist ein Berliner Startup, das Pflanzenpflege mit einem smarten Sensor und einer App verbindet, die datenbasierte Insights zur optimalen Pflege bieten. Die Sensoren messen Bodenfeuchtigkeit, Licht, Temperatur und Nährstoffe — und helfen dabei, jede Pflanze individuell zu versorgen.
              </p>
            </section>

            {/* Überblick */}
            <section id="ueberblick" className="flex flex-col gap-4">
              <h4 className="font-mono text-[14px] text-light font-normal mb-1">Überblick</h4>
              <h3 className="font-title-italic text-[clamp(22px,3vw,32px)] tracking-[-0.02em] leading-[1.25] text-light -mb-2">
                Von einem Sensor zu einem Ökosystem
              </h3>
              <p className="font-body text-[16px] leading-[1.7] text-light/60">
                Die App kannte bis dahin genau eine Beziehung: ein Sensor, eine Pflanze. Mit der neuen Sensorfamilie wurde daraus ein Viele-zu-viele-System. Als Head of Product Design habe ich mich mit dem neuen Setup, dem Backend, eigenen Video-Meetings und frühzeitigem Verhindern von Fehlbedienungen auseinandergesetzt. Als Head of Product Design habe ich das System von Grund auf neu gestaltet.
              </p>

              <div className="mt-4">
                <CSMediaLightbox
                  src={`${folder}01_Mental_Model.png`}
                  alt="Komplexitätsmodell: Eins zu eins, Eins zu vielen, Viele zu viele"
                  className="w-full object-cover"
                />
              </div>
            </section>

            {/* Fragestellung — keeps h2 (main question) */}
            <section id="fragestellung" className="flex flex-col gap-4">
              <h4 className="font-mono text-[14px] text-light font-normal mb-1">Fragestellung</h4>
              <h2 className="font-title-italic text-[clamp(22px,3vw,32px)] tracking-[-0.02em] leading-[1.25] text-light">
                Wie lässt sich ein Onboarding gestalten, das mit einem wachsenden Sensor-Ökosystem skaliert — ohne dass Nutzer:innen die Komplexität dahinter spüren?
              </h2>
              <div className="h-px w-full bg-white/10 mt-12 mb-4" />
            </section>

            {/* Prozess */}
            <section id="prozess" className="flex flex-col gap-4">
              <h4 className="font-mono text-[14px] text-light font-normal mb-1">Prozess</h4>
              <h3 className="font-title-italic text-[clamp(22px,3vw,32px)] tracking-[-0.02em] leading-[1.25] text-light -mb-2">
                Systemlogik vor Screens
              </h3>
              <p className="font-body text-[16px] leading-[1.7] text-light/60">
                Das Onboarding musste nicht nur ein neues mentales Modell vermitteln, sondern gleichzeitig ein System abbilden, in dem Sensoren, Pflanzen, Substrate und Nutzungskontexte in unzähligen Kombinationen miteinander interagieren — jede davon mit eigenen Regeln, Abhängigkeiten und Fehlerzuständen.
              </p>
              <p className="font-body text-[16px] leading-[1.7] text-light/60">
                Bevor der erste Screen entworfen wurde, habe ich die Logik als Flowchart modelliert, um alle Abhängigkeiten und Edge Cases sichtbar zu machen.
              </p>

              <div className="mt-4">
                <CSMediaLightbox
                  src={`${folder}02_Add sensor 1 Flow chart.png`}
                  alt="Flowchart: Zuordnungslogik und Edge Cases"
                  className="w-full object-cover"
                />
              </div>
            </section>

            {/* Lösung */}
            <section id="loesung" className="flex flex-col gap-4">
              <h4 className="font-mono text-[14px] text-light font-normal mb-1">Lösung</h4>
              <h3 className="font-title-italic text-[clamp(22px,3vw,32px)] tracking-[-0.02em] leading-[1.25] text-light -mb-2">
                Ein System, das mitwächst
              </h3>
              <p className="font-body text-[16px] leading-[1.7] text-light/60">
                Aus einem einzigen mentalen Modell entstanden vier eigenständige Onboarding-Flows — für Beam, Mini, Terra und Sphere — die trotz unterschiedlicher Sensorkonfigurationen derselben Informationsarchitektur und wiederkehrenden Interaktionsmustern folgen. Konsistente Statussprache, einheitliche Fehlerbehandlung und ein gemeinsames Navigationsgerüst sorgen dafür, dass Nutzer:innen sich beim zweiten Sensor bereits orientieren können, ohne den Flow neu erlernen zu müssen.
              </p>

              {/* Flows overview image */}
              <div className="mt-4">
                <CSMediaLightbox
                  src={`${folder}casestudy-04.png`}
                  alt="Vier Onboarding-Flows: Beam, Mini, Terra, Sphere"
                  className="w-full object-cover"
                />
              </div>

              {/* Entscheidungskarten */}
              <p className="font-body text-[14px] text-light/40 mt-8 mb-2">
                Wichtige Entscheidungen, die einen großen Unterschied gemacht haben
              </p>

              <div className="flex flex-col gap-12 md:gap-16">

                {/* Entscheidung 1 — Statussprache */}
                <div className="grid grid-cols-1 md:grid-cols-[60%_auto] gap-6 md:gap-8 items-end">
                  <div className="md:hidden flex flex-col pb-2">
                    <h3 className="font-body text-[16px] font-medium text-light">Alle Sensortypen folgen derselben Statussprache</h3>
                  </div>
                  <div className="relative w-full border border-white/10 overflow-hidden">
                    <CSMediaLightbox
                      src={`${folder}casestudy-05.png`}
                      alt="Connecting to Sphere — einheitliche Statussprache"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="hidden md:flex flex-col h-fit">
                    <h3 className="font-body text-[clamp(18px,2vw,24px)] tracking-[-0.01em] leading-[1.3] text-light mb-2">Alle Sensortypen folgen derselben Statussprache</h3>
                    <p className="font-body text-[15px] text-light/50 leading-[1.6]">Die Statuslichter der Sensoren folgen einer einheitlichen Farbsprache: Blau pulsierend signalisiert den Kopplungsmodus, Orange ein laufendes Firmware-Update. Nutzer:innen müssen diese Zustände nicht erlernen — sie verinnerlichen sie, weil sie sensorübergreifend immer gleich kommuniziert werden.</p>
                  </div>
                </div>

                {/* Entscheidung 2 — Pflanzenkompatibilität */}
                <div className="grid grid-cols-1 md:grid-cols-[60%_auto] gap-6 md:gap-8 items-end">
                  <div className="md:hidden flex flex-col pb-2">
                    <h3 className="font-body text-[16px] font-medium text-light">Pflanzenkompatibilität durch Information abfangen</h3>
                  </div>
                  <div className="relative w-full border border-white/10 overflow-hidden">
                    <CSMediaLightbox
                      src={`${folder}casestudy-06.png`}
                      alt="Kompatibilitätsprüfung und Konflikt-Dialog"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="hidden md:flex flex-col h-fit">
                    <h3 className="font-body text-[clamp(18px,2vw,24px)] tracking-[-0.01em] leading-[1.3] text-light mb-2">Pflanzenkompatibilität durch Information abfangen</h3>
                    <p className="font-body text-[15px] text-light/50 leading-[1.6]">Statt Inkompatibilitäten erst im Pflanzenprofil zu blockieren, greift das System früh ein — Nutzer:innen werden vorbereitet, nicht gestoppt. Frustration entsteht durch schlechte Vorbereitung, nicht durch zu viel Kontext.</p>
                  </div>
                </div>

                {/* Entscheidung 3 — Illustrative Ebene */}
                <div className="grid grid-cols-1 md:grid-cols-[60%_auto] gap-6 md:gap-8 items-end">
                  <div className="md:hidden flex flex-col pb-2">
                    <h3 className="font-body text-[16px] font-medium text-light">Illustrative Ebene für adaptive Nutzungskontexte</h3>
                  </div>
                  <div className="relative w-full border border-white/10 overflow-hidden">
                    <CSMediaLightbox
                      src={`${folder}casestudy-07.png`}
                      alt="Terra Platzierung — illustrative Instruktion"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="hidden md:flex flex-col h-fit">
                    <h3 className="font-body text-[clamp(18px,2vw,24px)] tracking-[-0.01em] leading-[1.3] text-light mb-2">Illustrative Ebene für adaptive Nutzungskontexte</h3>
                    <p className="font-body text-[15px] text-light/50 leading-[1.6]">Durch die verschiedenen Nutzungskontexte muss jeder Sensor anders installiert werden. Um das visuell zu unterstützen, wurden speziell für die App Illustrationen der Sensoren entwickelt.</p>
                  </div>
                </div>

              </div>
            </section>

            {/* Hardware in der App verankern */}
            <section id="hardware" className="flex flex-col gap-4">
              <h4 className="font-mono text-[14px] text-light font-normal mb-1">Hardware in der App verankern</h4>
              <h3 className="font-title-italic text-[clamp(22px,3vw,32px)] tracking-[-0.02em] leading-[1.25] text-light -mb-2">
                Über das Onboarding hinaus
              </h3>
              <p className="font-body text-[16px] leading-[1.7] text-light/60">
                Neben den Onboarding-Flows der einzelnen Sensoren endete das Projekt nicht mit dem letzten Setup-Screen. Die neuen Sensoren betrafen Touchpoints in der gesamten App, die vorher schlicht nicht existiert hatten. Ich sammelte Szenarien und offene Fragen, die wir als Produktteam gemeinsam diskutierten, um zu evaluieren, wo die bestmögliche Lösung liegt.
              </p>

              <div className="flex flex-col gap-12 mt-4">

                {/* My Devices */}
                <div className="grid grid-cols-1 md:grid-cols-[60%_auto] gap-6 md:gap-8 items-end">
                  <div className="md:hidden flex flex-col pb-2">
                    <h3 className="font-body text-[16px] font-medium text-light">My Devices</h3>
                  </div>
                  <div className="relative w-full border border-white/10 overflow-hidden">
                    <CSMediaLightbox
                      src={`${folder}casestudy-09.png`}
                      alt="My Devices — Sensorübersicht"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="hidden md:flex flex-col h-fit">
                    <h3 className="font-body text-[clamp(18px,2vw,24px)] tracking-[-0.01em] leading-[1.3] text-light mb-2">My Devices</h3>
                    <p className="font-body text-[15px] text-light/50 leading-[1.6]">Sensoren lassen sich jetzt unabhängig von Pflanzen anbinden. Mit „My Devices" entstand erstmals eine sensorzentrische Ebene in der App — Geräte, Status und letzter Sync auf einen Blick, losgelöst vom Pflanzenprofil.</p>
                  </div>
                </div>

                {/* Out of Sync */}
                <div className="grid grid-cols-1 md:grid-cols-[60%_auto] gap-6 md:gap-8 items-end">
                  <div className="md:hidden flex flex-col pb-2">
                    <h3 className="font-body text-[16px] font-medium text-light">Out of Sync / Sensor Cards</h3>
                  </div>
                  <div className="relative w-full border border-white/10 overflow-hidden">
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
                    <h3 className="font-body text-[clamp(18px,2vw,24px)] tracking-[-0.01em] leading-[1.3] text-light mb-2">Out of Sync / Sensor Cards</h3>
                    <p className="font-body text-[15px] text-light/50 leading-[1.6]">Veraltete Daten werden nicht mehr isoliert pro Pflanze kommuniziert, sondern direkt an der Sensorkarte — mit den betroffenen Parametern sichtbar im Pflanzenprofil. So wird klar, dass das Problem beim Gerät liegt, nicht bei der Pflanze.</p>
                  </div>
                </div>

                {/* Empty States */}
                <div className="grid grid-cols-1 md:grid-cols-[60%_auto] gap-6 md:gap-8 items-end">
                  <div className="md:hidden flex flex-col pb-2">
                    <h3 className="font-body text-[16px] font-medium text-light">Empty States</h3>
                  </div>
                  <div className="relative w-full border border-white/10 overflow-hidden">
                    <CSMediaLightbox
                      src={`${folder}casestudy-11.png`}
                      alt="Empty State — Sensor-Empfehlung"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="hidden md:flex flex-col h-fit">
                    <h3 className="font-body text-[clamp(18px,2vw,24px)] tracking-[-0.01em] leading-[1.3] text-light mb-2">Empty States</h3>
                    <p className="font-body text-[15px] text-light/50 leading-[1.6]">Empty States erklären den Mehrwert eines Sensors kontextbezogen — genau dann, wenn eine Pflanze ein Gerät vermisst, das sie noch nicht hat.</p>
                  </div>
                </div>

              </div>
            </section>

            {/* Reflexion */}
            <section id="reflexion" className="flex flex-col gap-4">
              <h4 className="font-mono text-[14px] text-light font-normal mb-1">Reflexion</h4>
              <h3 className="font-title-italic text-[clamp(22px,3vw,32px)] tracking-[-0.02em] leading-[1.25] text-light -mb-2">
                System vor Interface
              </h3>
              <p className="font-body text-[16px] leading-[1.7] text-light/60">
                Das größte Learning war keine UI-Entscheidung. Onboarding bei hardware-nahen Produkten beginnt nicht am Interface — sondern am System dahinter. Die schwierigsten Fragen waren konzeptioneller Natur: Welche Komplexität darf ich zeigen — und welche muss das Design schlucken?
              </p>
            </section>

          </div>
        </div>

        {/* ── Right spacer ── */}
        <div className="p-6 py-12" />

      </main>

      <Footer />
    </div>
  )
}
