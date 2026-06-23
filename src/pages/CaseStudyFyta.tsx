import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import CSMediaLightbox from '../components/case-study/CSMediaLightbox'
import { ImagePlaceholder } from '../components/Placeholder'
import { caseStudies } from '../content'

const cs = caseStudies.fyta
const folder = cs.meta.imageFolder

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'herausforderung', label: 'Herausforderung' },
  { id: 'fragestellung', label: 'Fragestellung' },
  { id: 'research', label: 'Research' },
  { id: 'design', label: 'Design' },
  { id: 'vertiefung', label: 'Vertiefung' },
  { id: 'ux-entscheidung', label: 'UX-Entscheidung' },
  { id: 'touchpoints', label: 'Touchpoints' },
  { id: 'impact', label: 'Impact' },
  { id: 'reflexion', label: 'Reflexion' },
]

export default function CaseStudyFyta() {
  const [activeId, setActiveId] = useState('overview')

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

            {/* Overview */}
            <section id="overview" className="flex flex-col gap-4">
              <h4 className="font-body text-[14px] text-light font-medium mb-1">Overview</h4>
              <h2 className="font-title-italic text-[clamp(22px,3vw,32px)] tracking-[-0.02em] leading-[1.25] text-light -mb-2">
                Vom Einzelprodukt zum Ökosystem
              </h2>
              {cs.intro.split('\n\n').map((para, i) => (
                <p key={i} className="font-body text-[16px] leading-[1.7] text-light/60">{para}</p>
              ))}
            </section>

            {/* Herausforderung */}
            <section id="herausforderung" className="flex flex-col gap-4">
              <h4 className="font-body text-[14px] text-light font-medium mb-1">Herausforderung</h4>
              <h2 className="font-title-italic text-[clamp(22px,3vw,32px)] tracking-[-0.02em] leading-[1.25] text-light -mb-2">
                {cs.challenge.heading}
              </h2>
              <p className="font-body text-[16px] leading-[1.7] text-light/60">{cs.challenge.body}</p>
              <ul className="flex flex-col gap-4 pl-0 mt-2">
                {cs.challenge.points.map((point, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <span className="font-body text-[14px] text-light/30 mt-0.5 shrink-0">—</span>
                    <span className="font-body text-[16px] leading-[1.7] text-light/60">{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4">
                <CSMediaLightbox
                  src={`${folder}01_Mental_Model.png`}
                  alt="Komplexitätsmodell"
                  className="w-full object-cover"
                />
              </div>
            </section>

            {/* Fragestellung */}
            <section id="fragestellung" className="flex flex-col gap-4">
              <h4 className="font-body text-[14px] text-light font-medium mb-1">Fragestellung</h4>
              <h2 className="font-title-italic text-[clamp(22px,3vw,32px)] tracking-[-0.02em] leading-[1.25] text-light">
                {cs.hmw}
              </h2>
              <div className="h-px w-full bg-white/10 mt-12 mb-4" />
            </section>

            {/* Research */}
            <section id="research" className="flex flex-col gap-4">
              <h4 className="font-body text-[14px] text-light font-medium mb-1">Research</h4>
              <h2 className="font-title-italic text-[clamp(22px,3vw,32px)] tracking-[-0.02em] leading-[1.25] text-light -mb-2">
                Support-Tickets und Systemlogik
              </h2>
              {cs.research.split('\n\n').map((para, i) => (
                <p key={i} className="font-body text-[16px] leading-[1.7] text-light/60">{para}</p>
              ))}

              <div className="mt-4">
                <CSMediaLightbox
                  src={`${folder}02_Add sensor 1 Flow chart.png`}
                  alt="Flowchart: Zuordnungslogik und Edge Cases"
                  className="w-full object-cover"
                />
              </div>

              {/* Old flow UX review */}
              <div className="flex flex-col gap-4 mt-8">
                <p className="font-body text-[12px] text-light/30 uppercase tracking-[0.08em]">{cs.oldFlowReview.intro}</p>
                <div className="flex flex-col gap-4">
                  {cs.oldFlowReview.screens.map((screen, i) => (
                    <div key={i} className="flex flex-col gap-3 p-6 border border-white/10">
                      <span className="font-body text-[14px] font-medium text-light/80">{screen.label}</span>
                      <ul className="flex flex-col gap-2">
                        {screen.notes.map((note, j) => (
                          <li key={j} className="flex gap-3 items-start">
                            <span className="text-light/20 shrink-0 mt-1">—</span>
                            <span className="font-body text-[14px] text-light/50 leading-[1.6]">{note}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Design */}
            <section id="design" className="flex flex-col gap-4">
              <h4 className="font-body text-[14px] text-light font-medium mb-1">Design</h4>
              <h2 className="font-title-italic text-[clamp(22px,3vw,32px)] tracking-[-0.02em] leading-[1.25] text-light -mb-2">
                Ein System, das mitwächst
              </h2>
              <p className="font-body text-[16px] leading-[1.7] text-light/60">{cs.definition}</p>
              {cs.design.split('\n\n').map((para, i) => (
                <p key={i} className="font-body text-[16px] leading-[1.7] text-light/60">{para}</p>
              ))}

              <div className="mt-4">
                <CSMediaLightbox
                  src={`${folder}03_System_support.png`}
                  alt="System Support"
                  className="w-full object-cover"
                />
              </div>
            </section>

            {/* Vertiefung */}
            <section id="vertiefung" className="flex flex-col gap-4">
              <h4 className="font-body text-[14px] text-light font-medium mb-1">Vertiefung</h4>
              <h2 className="font-title-italic text-[clamp(22px,3vw,32px)] tracking-[-0.02em] leading-[1.25] text-light -mb-2">
                Substrat, Konflikte, Platzierung
              </h2>
              {cs.deepDive.split('\n\n').map((para, i) => (
                <p key={i} className="font-body text-[16px] leading-[1.7] text-light/60">{para}</p>
              ))}

              {/* Iteration as inline blockquote */}
              <blockquote className="border-l-2 border-white/20 pl-6 mt-6">
                {cs.iteration.split('\n\n').map((para, i) => (
                  <p key={i} className="font-body text-[16px] leading-[1.7] text-light/40 italic mb-3 last:mb-0">{para}</p>
                ))}
              </blockquote>
            </section>

            {/* UX-Entscheidung */}
            <section id="ux-entscheidung" className="flex flex-col gap-4">
              <h4 className="font-body text-[14px] text-light font-medium mb-1">UX-Entscheidung</h4>
              <h2 className="font-title-italic text-[clamp(22px,3vw,32px)] tracking-[-0.02em] leading-[1.25] text-light -mb-2">
                Sphere-Pflanzenzuordnung
              </h2>
              <p className="font-body text-[16px] leading-[1.7] text-light/60">{cs.uxDecision.intro}</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                {cs.uxDecision.annotations.map((ann, i) => {
                  const screens = ['04.png', '05.png', '06.png']
                  return (
                    <div key={i} className="flex flex-col gap-4">
                      <CSMediaLightbox
                        src={`${folder}${screens[i]}`}
                        alt={ann.screen}
                        className="w-full object-cover"
                      />
                      <div className="flex flex-col gap-1">
                        <span className="font-body text-[14px] font-medium text-light/80">{ann.screen}</span>
                        <p className="font-body text-[14px] text-light/50 leading-[1.6]">{ann.label}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </section>

            {/* Weitere Touchpoints */}
            <section id="touchpoints" className="flex flex-col gap-4">
              <h4 className="font-body text-[14px] text-light font-medium mb-1">Weitere Touchpoints</h4>
              <h2 className="font-title-italic text-[clamp(22px,3vw,32px)] tracking-[-0.02em] leading-[1.25] text-light -mb-2">
                Über das Onboarding hinaus
              </h2>
              <p className="font-body text-[16px] leading-[1.7] text-light/60">{cs.furtherTouchpoints.intro}</p>

              <div className="flex flex-col gap-12 mt-4">
                {cs.furtherTouchpoints.items.map((item, i) => {
                  const touchpointImages = ['07.png', '09.png', null]
                  const img = touchpointImages[i]
                  return (
                    <div key={i} className="grid grid-cols-1 md:grid-cols-[60%_auto] gap-6 md:gap-8 items-end">
                      <div className="md:hidden flex flex-col pb-2">
                        <h3 className="font-body text-[16px] font-medium text-light">{item.title}</h3>
                      </div>
                      <div className="relative w-full border border-white/10 overflow-hidden">
                        {img ? (
                          <CSMediaLightbox
                            src={`${folder}${img}`}
                            alt={item.title}
                            className="w-full h-auto object-cover"
                          />
                        ) : (
                          <ImagePlaceholder aspectRatio="hero" label={`${item.title} — Bild fehlt`} />
                        )}
                      </div>
                      <div className="hidden md:flex flex-col h-fit">
                        <h3 className="font-body text-[clamp(18px,2vw,24px)] tracking-[-0.01em] leading-[1.3] text-light mb-2">{item.title}</h3>
                        <p className="font-body text-[15px] text-light/50 leading-[1.6]">{item.body}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* UI Decisions inline */}
              <h4 className="font-body text-[14px] text-light font-medium mt-12 mb-2">UI-Entscheidungen</h4>
              <div className="flex flex-col gap-6">
                {cs.uiDecisions.map((decision, i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <h3 className="font-body text-[16px] font-medium text-light">{decision.title}</h3>
                    <p className="font-body text-[16px] leading-[1.7] text-light/60">{decision.body}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Business Impact */}
            <section id="impact" className="flex flex-col gap-4">
              <h4 className="font-body text-[14px] text-light font-medium mb-1">Business Impact</h4>
              <h2 className="font-title-italic text-[clamp(22px,3vw,32px)] tracking-[-0.02em] leading-[1.25] text-light -mb-2">
                Messbare Ergebnisse
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {cs.impact.cards.map((card, i) => (
                  <div key={i} className="flex flex-col gap-3 border border-white/10 p-6">
                    <span className="font-body text-[14px] font-medium text-light">{card.title}</span>
                    <p className="font-body text-[15px] text-light/50 leading-[1.6]">{card.body}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Reflexion */}
            <section id="reflexion" className="flex flex-col gap-4">
              <h4 className="font-body text-[14px] text-light font-medium mb-1">Reflexion</h4>
              <h2 className="font-title-italic text-[clamp(22px,3vw,32px)] tracking-[-0.02em] leading-[1.25] text-light -mb-2">
                System vor Interface
              </h2>
              <p className="font-body text-[16px] leading-[1.7] text-light/60">{cs.reflection}</p>
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
