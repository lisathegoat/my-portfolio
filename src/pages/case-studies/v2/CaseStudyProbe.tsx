import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import NavV2 from '../../../components/v2/NavV2'
import FooterV2 from '../../../components/v2/FooterV2'
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

// Decision 01 is text only; 02 to 05 pair with media. Same copy and assets as
// the former V1 treatment, ported to the V2 visual language.
const decisionMedia: ({ type: 'image' | 'video'; src: string; alt: string } | null)[] = [
  null,
  { type: 'image', src: '01.jpg', alt: 'Kontextueller Toast im Feuchtigkeits-Detailscreen' },
  { type: 'video', src: 'ProbeSwap', alt: 'Swap der Sonde' },
  { type: 'image', src: '02_2.jpg', alt: 'Vorher und nachher: Swap-Instruktion' },
  { type: 'image', src: '04.jpg', alt: 'Testergebnis und Support-Formular' },
]

export default function CaseStudyProbeV2() {
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
          <Link to="/" className="w-full text-left">
            <div className="flex items-center gap-2 font-mono text-[13px] md:text-[15px] uppercase tracking-[0.02em] text-[#32404f]/60 hover:text-[#32404f] transition-colors cursor-pointer">
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
              <p className="font-mono text-[13px] uppercase tracking-[0.02em] text-[#32404f]/50">
                {cs.tags.join(' · ')} · {cs.meta.status}
              </p>
              <h1 className="font-tiempos text-[clamp(32px,4.5vw,52px)] tracking-[-0.03em] leading-[1.1] text-[#32404f]">
                {cs.title}
              </h1>
            </div>

            {/* Hero image */}
            <div className="w-full aspect-video border border-[#32404f]/10 overflow-hidden">
              <img
                src={`${folder}hero.jpg`}
                alt={cs.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Meta row */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-12">
              <div className="flex w-full flex-col gap-2">
                <h4 className="font-mono text-[13px] uppercase tracking-[0.02em] text-[#32404f]/50 mb-1">Role</h4>
                <p className="font-geist text-[15px] text-[#32404f]/60">{cs.meta.role}</p>
              </div>
              <div className="flex w-full flex-col gap-2">
                <h4 className="font-mono text-[13px] uppercase tracking-[0.02em] text-[#32404f]/50 mb-1">Status</h4>
                <p className="font-geist text-[15px] text-[#32404f]/60">{cs.meta.status}</p>
              </div>
              <div className="flex w-full flex-col gap-2">
                <h4 className="font-mono text-[13px] uppercase tracking-[0.02em] text-[#32404f]/50 mb-1">Typ</h4>
                <p className="font-geist text-[15px] text-[#32404f]/60">Product Design</p>
              </div>
              <div className="flex w-full flex-col gap-2">
                <h4 className="font-mono text-[13px] uppercase tracking-[0.02em] text-[#32404f]/50 mb-1">Skills</h4>
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

            {/* Overview */}
            <section id="overview" className="flex flex-col gap-4">
              <h4 className="font-mono text-[13px] uppercase tracking-[0.02em] text-[#32404f]/50 mb-1">Overview</h4>
              <h3 className="font-tiempos text-[clamp(22px,3vw,32px)] tracking-[-0.02em] leading-[1.25] text-[#32404f] -mb-2">
                Algorithmische Defekterkennung
              </h3>
              {cs.intro.split('\n\n').map((para, i) => (
                <p key={i} className="font-geist text-[16px] leading-[1.7] text-[#32404f]/70">{para}</p>
              ))}
            </section>

            {/* Herausforderung */}
            <section id="herausforderung" className="flex flex-col gap-4">
              <h4 className="font-mono text-[13px] uppercase tracking-[0.02em] text-[#32404f]/50 mb-1">Herausforderung</h4>
              <h3 className="font-tiempos text-[clamp(22px,3vw,32px)] tracking-[-0.02em] leading-[1.25] text-[#32404f] -mb-2">
                {cs.challenge.heading}
              </h3>
              <p className="font-geist text-[16px] leading-[1.7] text-[#32404f]/70">{cs.challenge.body}</p>
              <blockquote className="border-l-2 border-[#32404f]/20 pl-6 mt-2">
                <p className="font-tiempos italic text-[17px] leading-[1.6] text-[#32404f]/60">{cs.challenge.callout}</p>
              </blockquote>
            </section>

            {/* Fragestellung */}
            <section id="fragestellung" className="flex flex-col gap-4">
              <h4 className="font-mono text-[13px] uppercase tracking-[0.02em] text-[#32404f]/50 mb-1">Fragestellung</h4>
              <h2 className="font-tiempos text-[clamp(22px,3vw,32px)] tracking-[-0.02em] leading-[1.25] text-[#32404f]">
                {cs.hmw}
              </h2>
            </section>

            {/* Entscheidungen */}
            <section id="entscheidungen" className="flex flex-col gap-4">
              <h4 className="font-mono text-[13px] uppercase tracking-[0.02em] text-[#32404f]/50 mb-1">Entscheidungen</h4>
              <h3 className="font-tiempos text-[clamp(22px,3vw,32px)] tracking-[-0.02em] leading-[1.25] text-[#32404f] -mb-2">
                Fünf Designentscheidungen
              </h3>

              <div className="flex flex-col gap-12 md:gap-16 mt-4">
                {cs.decisions.map((d, i) => {
                  const num = String(i + 1).padStart(2, '0')
                  const media = decisionMedia[i]

                  if (!media) {
                    return (
                      <div key={i} className="flex flex-col gap-2">
                        <span className="font-mono text-[13px] text-[#32404f]/40">{num}</span>
                        <h3 className="font-tiempos text-[clamp(18px,2vw,24px)] tracking-[-0.01em] leading-[1.3] text-[#32404f] mb-1">{d.heading}</h3>
                        <p className="font-geist text-[16px] leading-[1.7] text-[#32404f]/70">{d.body}</p>
                      </div>
                    )
                  }

                  return (
                    <div key={i} className="grid grid-cols-1 md:grid-cols-[60%_auto] gap-6 md:gap-8 items-end">
                      <div className="md:hidden flex flex-col pb-2">
                        <span className="font-mono text-[13px] text-[#32404f]/40">{num}</span>
                        <h3 className="font-tiempos text-[16px] text-[#32404f]">{d.heading}</h3>
                      </div>
                      <div className="relative w-full border border-[#32404f]/10 overflow-hidden">
                        {media.type === 'video' ? (
                          <video
                            className="w-full object-cover"
                            autoPlay
                            loop
                            muted
                            playsInline
                            aria-label={media.alt}
                            onMouseEnter={(e) => { e.currentTarget.controls = true }}
                            onMouseLeave={(e) => { e.currentTarget.controls = false }}
                          >
                            <source src={`${folder}${media.src}.webm`} type="video/webm" />
                            <source src={`${folder}${media.src}.mp4`} type="video/mp4" />
                          </video>
                        ) : (
                          <CSMediaLightbox
                            src={`${folder}${media.src}`}
                            alt={media.alt}
                            className="w-full h-auto object-cover"
                          />
                        )}
                      </div>
                      <div className="hidden md:flex flex-col h-fit">
                        <span className="font-mono text-[13px] text-[#32404f]/40 mb-2">{num}</span>
                        <h3 className="font-tiempos text-[clamp(18px,2vw,24px)] tracking-[-0.01em] leading-[1.3] text-[#32404f] mb-2">{d.heading}</h3>
                        <p className="font-geist text-[15px] text-[#32404f]/60 leading-[1.6]">{d.body}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </section>

            {/* Reflexion */}
            <section id="reflexion" className="flex flex-col gap-4">
              <h4 className="font-mono text-[13px] uppercase tracking-[0.02em] text-[#32404f]/50 mb-1">Reflexion</h4>
              <h3 className="font-tiempos text-[clamp(22px,3vw,32px)] tracking-[-0.02em] leading-[1.25] text-[#32404f] -mb-2">
                Validierung vor Gestaltung
              </h3>
              <p className="font-geist text-[16px] leading-[1.7] text-[#32404f]/70">{cs.reflection}</p>
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
