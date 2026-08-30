import { useState, useEffect, type MouseEvent as ReactMouseEvent } from 'react'
import { Link } from 'react-router-dom'
import { caseStudies } from '../../content'
import NavV2 from '../../components/v2/NavV2'
import FooterV2 from '../../components/v2/FooterV2'
import { caseStudyHref } from '../../caseStudyVersions'

// Each project carries a Japanese-gradient wash tuned to its cover palette.
// The gradient is anchored lower-right and blends up into the near-white base
// (#fafcfd), so the hero copy top-left stays on a light field and the dark
// #32404f type remains readable — no dark-mode flip needed. To make any
// single project go full dark-with-white-text later, that's a per-entry swap.
const projects = [
  { ...caseStudies.fyta, aspectRatio: '16/9', wideCover: '/images/home/Onboarding_16x9.mp4',
    hue: 'rgba(140,158,86,0.45)' },
  // { ...caseStudies.probe, aspectRatio: '8/5', wideCover: '' },
  { ...caseStudies.thesis, aspectRatio: '3/2', wideCover: '/images/home/01_Hero_LernApp.mp4',
    hue: 'rgba(120,140,200,0.42)' },
  { ...caseStudies.dataviz, aspectRatio: '3/2', wideCover: '',
    hue: 'rgba(190,120,110,0.42)' },
  { ...caseStudies.scrollytelling, aspectRatio: '16/9', wideCover: '/images/home/Daten_der_Intersektionalitaet.mp4',
    hue: 'rgba(210,162,90,0.42)' },
]

function CaseStudyGridCard({ project, onHover }: { project: typeof projects[number]; onHover: (hue: string | null, label: string | null, origin?: { x: number; y: number }) => void }) {
  const isExternal = project.slug.startsWith('http')
  const videoSrc = project.wideCover || (project.meta as { coverVideo?: string }).coverVideo
    ? project.wideCover || `${project.meta.imageFolder}${(project.meta as { coverVideo?: string }).coverVideo}`
    : null
  const imgSrc = !videoSrc && (project.meta as { cover?: string }).cover
    ? `${project.meta.imageFolder}${(project.meta as { cover?: string }).cover}`
    : null

  const inner = (
    <div className="flex flex-col gap-2">
      <div
        data-cover
        className="relative w-full overflow-hidden border border-[#32404f]/10 box-border bg-[#f0f2f4] transition-all duration-300 ease-in-out"
        style={{ aspectRatio: project.aspectRatio }}
      >
        {videoSrc ? (
          <video
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover scale-[1.02]"
          />
        ) : imgSrc ? (
          <img src={imgSrc} alt={project.shortTitle} className="w-full h-full object-cover scale-[1.02]" />
        ) : (
          <div className="w-full h-full bg-[#f0f2f4]" />
        )}
      </div>
      <div className="flex flex-col justify-between gap-0.5 mt-1 lg:flex-row">
        <h3 className="font-tiempos text-[17px] text-[#32404f] font-normal leading-tight tracking-[-0.02em]">
          {project.shortTitle}
        </h3>
        <h4 className="font-mono text-[13px] uppercase tracking-[0.02em] text-[#32404f]/60 whitespace-nowrap">
          {project.tags.join(' · ')}
        </h4>
      </div>
    </div>
  )

  const label = isExternal ? 'Zur Website' : 'Zur Case Study'
  const handleEnter = (e: ReactMouseEvent<HTMLElement>) => {
    const cover = e.currentTarget.querySelector('[data-cover]')
    const r = cover?.getBoundingClientRect()
    const origin = r ? { x: r.left + r.width / 2, y: r.top + r.height / 2 } : undefined
    onHover(project.hue, label, origin)
  }
  const hoverHandlers = {
    onMouseEnter: handleEnter,
    onMouseLeave: () => onHover(null, null),
  }

  if (isExternal) {
    return (
      <a href={project.slug} target="_blank" rel="noopener noreferrer" className="group block cursor-none transition-all duration-300 ease-in-out" {...hoverHandlers}>
        {inner}
      </a>
    )
  }

  return (
    <Link to={caseStudyHref(project.slug)} className="group block cursor-none transition-all duration-300 ease-in-out" {...hoverHandlers}>
      {inner}
    </Link>
  )
}

const cvEntries = [
  { year: '2024', role: 'Head of Product Design', company: 'FYTA' },
  { year: '2022', role: 'Produkt Designer', company: 'FYTA' },
  { year: '2022', role: 'Master of Arts', company: 'FH Potsdam' },
  { year: '2020', role: 'Grafik & Digital Designerin', company: 'Loveto' },
  { year: '2018', role: 'Grafik & Digital Designerin', company: 'FH Eichmeister Kreativagentur' },
]

export default function HomeV2() {
  const [mounted, setMounted] = useState(false)
  const [gradient, setGradient] = useState<string | null>(null)
  const [cursorLabel, setCursorLabel] = useState<string | null>(null)
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })

  const onHover = (hue: string | null, label: string | null, origin?: { x: number; y: number }) => {
    setGradient(
      hue && origin
        ? `radial-gradient(70vw 70vw at ${origin.x}px ${origin.y}px, ${hue} 0%, transparent 62%)`
        : null
    )
    setCursorLabel(label)
  }

  useEffect(() => {
    const raf = requestAnimationFrame(() => setMounted(true))
    return () => cancelAnimationFrame(raf)
  }, [])

  useEffect(() => {
    if (!cursorLabel) return
    const onMove = (e: MouseEvent) => setCursorPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [cursorLabel])

  return (
    <div className="relative bg-[#fafcfd] text-[#32404f] min-h-screen">
      {/* Japanese-gradient wash — fades in on case-study hover, tinted to the
          hovered project's cover palette. Fixed + behind content, pointer-events
          off so it never blocks interaction. */}
      <div
        aria-hidden
        className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-700 ease-in-out"
        style={{ background: gradient ?? 'transparent', opacity: gradient ? 1 : 0 }}
      />

      {/* Custom cursor pill — follows the pointer while hovering a cover */}
      <div
        aria-hidden
        className="fixed left-0 top-0 z-50 pointer-events-none rounded-full bg-[#32404f] px-4 py-1 font-mono text-[12px] uppercase tracking-[0.04em] text-[#fafcfd] whitespace-nowrap transition-[transform,opacity] duration-[250ms] ease-out"
        style={{ transform: `translate3d(calc(${cursorPos.x}px - 50%), calc(${cursorPos.y}px - 50%), 0)`, opacity: cursorLabel ? 1 : 0 }}
      >
        {cursorLabel}
      </div>

      <div className="relative z-10">
      <NavV2 />

      {/* ── Hero — intro left + CV right ── */}
      <section
        className="grid grid-cols-1 md:grid-cols-2 gap-6 px-8 items-end pt-24 md:pt-56 pb-20"
        style={{
          opacity: mounted ? 1 : 0,
          transform: `translateY(${mounted ? 0 : 20}px)`,
          transition: 'opacity 1s ease-out, transform 1s ease-out',
        }}
      >
        {/* Left — intro */}
        <div className="flex flex-col justify-end">
          <h1 className="font-tiempos text-[clamp(32px,4vw,56px)] tracking-[-0.02em] leading-[1.1]">
            <span className="text-[#32404f]">Hi, ich bin Lisa, </span>
            <span className="italic text-[#32404f]/60">Produktdesignerin.</span>
          </h1>
        </div>

        {/* Right — CV list */}
        <div className="flex flex-col justify-end">
          <div className="flex flex-col gap-3 lg:gap-1">
            {cvEntries.map((entry, i) => (
              <div key={i} className="flex gap-2">
                <h4 className="w-[104px] min-w-[104px] font-mono text-[13px] uppercase tracking-[0.02em] text-[#32404f]/60">
                  {entry.year}
                </h4>
                <div className="flex flex-col lg:flex-row gap-0.5">
                  <div className="w-56 min-w-56 font-geist text-[15px] text-[#32404f]">
                    {entry.company}
                  </div>
                  <p className="font-geist text-[15px] text-[#32404f]/60">{entry.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Case Studies — two explicit columns so height pairs stay side by side ── */}
      <section className="px-8 pb-20">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            {[projects[0], projects[2]].map((p) => (
              <CaseStudyGridCard key={p.slug} project={p} onHover={onHover} />
            ))}
          </div>
          <div className="flex flex-col gap-6">
            {[projects[1], projects[3]].map((p) => (
              <CaseStudyGridCard key={p.slug} project={p} onHover={onHover} />
            ))}
          </div>
        </div>
      </section>

      <FooterV2 />
      </div>
    </div>
  )
}
