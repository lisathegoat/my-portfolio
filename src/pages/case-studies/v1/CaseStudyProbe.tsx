import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer'
import CSMediaLightbox from '../../../components/case-study/CSMediaLightbox'
import { caseStudies } from '../../../content'

const cs = caseStudies.probe
const folder = cs.meta.imageFolder

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'herausforderung', label: 'Herausforderung' },
  { id: 'fragestellung', label: 'Fragestellung' },
  { id: 'entscheidungen', label: 'Entscheidungen' },
  { id: 'reflexion', label: 'Reflexion' },
]

export default function CaseStudyProbe() {
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
                alt="Soil Probe Diagnostic"
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
              <h4 className="font-mono text-[14px] text-light font-normal mb-1">Overview</h4>
              <h3 className="font-title-italic text-[clamp(22px,3vw,32px)] tracking-[-0.02em] leading-[1.25] text-light -mb-2">
                Algorithmische Defekterkennung
              </h3>
              {cs.intro.split('\n\n').map((para, i) => (
                <p key={i} className="font-body text-[16px] leading-[1.7] text-light/60">{para}</p>
              ))}
            </section>

            {/* Herausforderung */}
            <section id="herausforderung" className="flex flex-col gap-4">
              <h4 className="font-mono text-[14px] text-light font-normal mb-1">Herausforderung</h4>
              <h3 className="font-title-italic text-[clamp(22px,3vw,32px)] tracking-[-0.02em] leading-[1.25] text-light -mb-2">
                {cs.challenge.heading}
              </h3>
              <p className="font-body text-[16px] leading-[1.7] text-light/60">{cs.challenge.body}</p>
              <blockquote className="border-l-2 border-white/20 pl-6 mt-2">
                <p className="font-body text-[16px] leading-[1.7] text-light/40 italic">{cs.challenge.callout}</p>
              </blockquote>
            </section>

            {/* Fragestellung — keeps h2 (main question) */}
            <section id="fragestellung" className="flex flex-col gap-4">
              <h4 className="font-mono text-[14px] text-light font-normal mb-1">Fragestellung</h4>
              <h2 className="font-title-italic text-[clamp(22px,3vw,32px)] tracking-[-0.02em] leading-[1.25] text-light">
                {cs.hmw}
              </h2>
              <div className="h-px w-full bg-white/10 mt-12 mb-4" />
            </section>

            {/* Entscheidungen */}
            <section id="entscheidungen" className="flex flex-col gap-4">
              <h4 className="font-mono text-[14px] text-light font-normal mb-1">Entscheidungen</h4>
              <h3 className="font-title-italic text-[clamp(22px,3vw,32px)] tracking-[-0.02em] leading-[1.25] text-light -mb-2">
                Fünf Designentscheidungen
              </h3>

              <div className="flex flex-col gap-12 md:gap-16 mt-4">

                {/* Decision 01 — text only */}
                <div className="flex flex-col gap-2">
                  <span className="font-body text-[13px] text-light/30 font-medium">01</span>
                  <h3 className="font-title-italic text-[clamp(18px,2vw,24px)] tracking-[-0.01em] leading-[1.3] text-light mb-1">{cs.decisions[0].heading}</h3>
                  <p className="font-body text-[16px] leading-[1.7] text-light/60">{cs.decisions[0].body}</p>
                </div>

                {/* Decision 02 — image split */}
                <div className="grid grid-cols-1 md:grid-cols-[60%_auto] gap-6 md:gap-8 items-end">
                  <div className="md:hidden flex flex-col pb-2">
                    <span className="font-body text-[13px] text-light/30 font-medium">02</span>
                    <h3 className="font-title-italic text-[16px] text-light">{cs.decisions[1].heading}</h3>
                  </div>
                  <div className="relative w-full border border-white/10 overflow-hidden">
                    <CSMediaLightbox
                      src={`${folder}01.jpg`}
                      alt="Kontextueller Toast im Feuchtigkeits-Detailscreen"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="hidden md:flex flex-col h-fit">
                    <span className="font-body text-[13px] text-light/30 font-medium mb-2">02</span>
                    <h3 className="font-title-italic text-[clamp(18px,2vw,24px)] tracking-[-0.01em] leading-[1.3] text-light mb-2">{cs.decisions[1].heading}</h3>
                    <p className="font-body text-[15px] text-light/50 leading-[1.6]">{cs.decisions[1].body}</p>
                  </div>
                </div>

                {/* Decision 03 — video split */}
                <div className="grid grid-cols-1 md:grid-cols-[60%_auto] gap-6 md:gap-8 items-end">
                  <div className="md:hidden flex flex-col pb-2">
                    <span className="font-body text-[13px] text-light/30 font-medium">03</span>
                    <h3 className="font-title-italic text-[16px] text-light">{cs.decisions[2].heading}</h3>
                  </div>
                  <div className="relative w-full border border-white/10 overflow-hidden">
                    <video
                      className="w-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                      onMouseEnter={(e) => { e.currentTarget.controls = true }}
                      onMouseLeave={(e) => { e.currentTarget.controls = false }}
                    >
                      <source src={`${folder}ProbeSwap.webm`} type="video/webm" />
                      <source src={`${folder}ProbeSwap.mp4`} type="video/mp4" />
                    </video>
                  </div>
                  <div className="hidden md:flex flex-col h-fit">
                    <span className="font-body text-[13px] text-light/30 font-medium mb-2">03</span>
                    <h3 className="font-title-italic text-[clamp(18px,2vw,24px)] tracking-[-0.01em] leading-[1.3] text-light mb-2">{cs.decisions[2].heading}</h3>
                    <p className="font-body text-[15px] text-light/50 leading-[1.6]">{cs.decisions[2].body}</p>
                  </div>
                </div>

                {/* Decision 04 — image split */}
                <div className="grid grid-cols-1 md:grid-cols-[60%_auto] gap-6 md:gap-8 items-end">
                  <div className="md:hidden flex flex-col pb-2">
                    <span className="font-body text-[13px] text-light/30 font-medium">04</span>
                    <h3 className="font-title-italic text-[16px] text-light">{cs.decisions[3].heading}</h3>
                  </div>
                  <div className="relative w-full border border-white/10 overflow-hidden">
                    <CSMediaLightbox
                      src={`${folder}02_2.jpg`}
                      alt="Vorher/Nachher — Swap-Instruktion"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="hidden md:flex flex-col h-fit">
                    <span className="font-body text-[13px] text-light/30 font-medium mb-2">04</span>
                    <h3 className="font-title-italic text-[clamp(18px,2vw,24px)] tracking-[-0.01em] leading-[1.3] text-light mb-2">{cs.decisions[3].heading}</h3>
                    <p className="font-body text-[15px] text-light/50 leading-[1.6]">{cs.decisions[3].body}</p>
                  </div>
                </div>

                {/* Decision 05 — image split */}
                <div className="grid grid-cols-1 md:grid-cols-[60%_auto] gap-6 md:gap-8 items-end">
                  <div className="md:hidden flex flex-col pb-2">
                    <span className="font-body text-[13px] text-light/30 font-medium">05</span>
                    <h3 className="font-title-italic text-[16px] text-light">{cs.decisions[4].heading}</h3>
                  </div>
                  <div className="relative w-full border border-white/10 overflow-hidden">
                    <CSMediaLightbox
                      src={`${folder}04.jpg`}
                      alt="Testergebnis und Support-Formular"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="hidden md:flex flex-col h-fit">
                    <span className="font-body text-[13px] text-light/30 font-medium mb-2">05</span>
                    <h3 className="font-title-italic text-[clamp(18px,2vw,24px)] tracking-[-0.01em] leading-[1.3] text-light mb-2">{cs.decisions[4].heading}</h3>
                    <p className="font-body text-[15px] text-light/50 leading-[1.6]">{cs.decisions[4].body}</p>
                  </div>
                </div>

              </div>
            </section>

            {/* Reflexion */}
            <section id="reflexion" className="flex flex-col gap-4">
              <h4 className="font-mono text-[14px] text-light font-normal mb-1">Reflexion</h4>
              <h3 className="font-title-italic text-[clamp(22px,3vw,32px)] tracking-[-0.02em] leading-[1.25] text-light -mb-2">
                Validierung vor Gestaltung
              </h3>
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
