import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import NavV2 from '../../../components/v2/NavV2'
import FooterV2 from '../../../components/v2/FooterV2'
import CSMediaLightbox from '../../../components/case-study/CSMediaLightbox'
import { caseStudies } from '../../../content'

const cs = caseStudies.dataviz
const folder = cs.meta.imageFolder

const sections = [
  { id: 'zusammenfassung', label: 'Zusammenfassung' },
  { id: 'fragestellung', label: 'Fragestellung' },
  { id: 'prozess', label: 'Prozess' },
  { id: 'loesung', label: 'Lösung' },
  { id: 'reflexion', label: 'Reflexion' },
]

export default function CaseStudyDataVizV2() {
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
                src={`${folder}01_Hero.png`}
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

            {/* Zusammenfassung */}
            <section id="zusammenfassung" className="flex flex-col gap-4">
              <h4 className="font-mono text-[13px] uppercase tracking-[0.02em] text-[#32404f]/50 mb-1">Zusammenfassung</h4>
              <h3 className="font-tiempos text-[clamp(22px,3vw,32px)] tracking-[-0.02em] leading-[1.25] text-[#32404f] -mb-2">
                Sensordaten verständlich visualisieren
              </h3>
              <p className="font-geist text-[16px] leading-[1.7] text-[#32404f]/70">{cs.intro}</p>
            </section>

            {/* Fragestellung */}
            <section id="fragestellung" className="flex flex-col gap-4">
              <h4 className="font-mono text-[13px] uppercase tracking-[0.02em] text-[#32404f]/50 mb-1">Fragestellung</h4>
              <h2 className="font-tiempos text-[clamp(22px,3vw,32px)] tracking-[-0.02em] leading-[1.25] text-[#32404f]">
                {cs.definition}
              </h2>
            </section>

            {/* Prozess — three problems, 3-column grid */}
            <section id="prozess" className="flex flex-col gap-4">
              <h4 className="font-mono text-[13px] uppercase tracking-[0.02em] text-[#32404f]/50 mb-1">Prozess</h4>
              <h3 className="font-tiempos text-[clamp(22px,3vw,32px)] tracking-[-0.02em] leading-[1.25] text-[#32404f] -mb-2">
                Konzept ohne Kategorisierung
              </h3>
              <p className="font-geist text-[16px] leading-[1.7] text-[#32404f]/70">{cs.research.intro}</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
                {cs.research.problems.map((p, i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <h4 className="font-geist text-[16px] font-semibold text-[#32404f]">{p.title}</h4>
                    <p className="font-geist text-[15px] leading-[1.6] text-[#32404f]/60">{p.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Lösung — intro + full-width overview image */}
            <section id="loesung" className="flex flex-col gap-4">
              <h4 className="font-mono text-[13px] uppercase tracking-[0.02em] text-[#32404f]/50 mb-1">Lösung</h4>
              <h3 className="font-tiempos text-[clamp(22px,3vw,32px)] tracking-[-0.02em] leading-[1.25] text-[#32404f] -mb-2">
                {cs.design.heading}
              </h3>
              <p className="font-geist text-[16px] leading-[1.7] text-[#32404f]/70">{cs.design.intro}</p>

              <div className="mt-4 border border-[#32404f]/10">
                <CSMediaLightbox
                  src={`${folder}03_Loesung.png`}
                  alt="Fünf neu gestaltete Datenvisualisierungen"
                  className="w-full object-cover"
                />
              </div>

              {/* Solution videos — decision-card pattern */}
              <div className="flex flex-col gap-16 mt-16">
                {cs.design.problems.map((p, i) => (
                  <div key={i} className="grid grid-cols-1 md:grid-cols-[60%_auto] gap-6 md:gap-8 items-end">
                    <div className="md:hidden flex flex-col pb-2">
                      <h3 className="font-tiempos text-[16px] text-[#32404f]">{p.title}</h3>
                    </div>
                    <div className="relative w-full border border-[#32404f]/10 overflow-hidden">
                      <CSMediaLightbox
                        src={`${folder}${p.video}`}
                        alt={p.title}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <div className="hidden md:flex flex-col h-fit">
                      <h3 className="font-tiempos text-[clamp(18px,2vw,24px)] tracking-[-0.01em] leading-[1.3] text-[#32404f] mb-2">
                        {p.title}
                      </h3>
                      {p.desc.split('\n\n').map((para, j) => (
                        <p key={j} className="font-geist text-[15px] text-[#32404f]/60 leading-[1.6] mt-2 first:mt-0">{para}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* EC Graph — full-width subsection */}
              <div className="mt-16 flex flex-col gap-4">
                <h3 className="font-tiempos text-[clamp(20px,2.6vw,26px)] tracking-[-0.02em] leading-[1.3] text-[#32404f]">
                  {cs.design.ecGraph.heading}
                </h3>
                <p className="font-geist text-[16px] leading-[1.7] text-[#32404f]/70">{cs.design.ecGraph.body}</p>
                <div className="mt-4 border border-[#32404f]/10">
                  <CSMediaLightbox
                    src={`${folder}08_System_support-2.png`}
                    alt="EC Graph — verschiedene Zustände"
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </section>

            {/* Reflexion */}
            <section id="reflexion" className="flex flex-col gap-4">
              <h4 className="font-mono text-[13px] uppercase tracking-[0.02em] text-[#32404f]/50 mb-1">Reflexion</h4>
              <h3 className="font-tiempos text-[clamp(22px,3vw,32px)] tracking-[-0.02em] leading-[1.25] text-[#32404f] -mb-2">
                {cs.validation.heading}
              </h3>
              <p className="font-geist text-[16px] leading-[1.7] text-[#32404f]/70">{cs.validation.body}</p>
              <p className="font-geist text-[16px] leading-[1.7] text-[#32404f]/70 mt-4">{cs.learning.body}</p>
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
