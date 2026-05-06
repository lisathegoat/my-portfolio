import { useState, useRef, useLayoutEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import CaseStudyCard from '../components/CaseStudyCard'
import { home, caseStudies, about } from '../content'

// ── Star SVG ─────────────────────────────────────────────────────────────────
function StarSVG({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0L13.8 10.2L24 12L13.8 13.8L12 24L10.2 13.8L0 12L10.2 10.2L12 0Z" />
    </svg>
  )
}

// ── Dropdown panel (div, never inline) ───────────────────────────────────────
function DropdownPanel({ visible }: { visible: boolean }) {
  if (!visible) return null
  return (
    <div
      className="absolute z-50 w-[260px] bg-[#1e1e1e] border border-white/10 rounded-[16px] p-5 shadow-2xl"
      // Opens downward; right:0 aligns panel's right edge to star's right, extending left
      style={{ top: '100%', right: 0, marginTop: 8 }}
    >
      <p className="font-body text-[11px] text-grey uppercase tracking-[0.15em] mb-3 leading-none">
        Design Erfahrung
      </p>
      <p className="font-body text-[14px] text-light/70 leading-[1.6]">
        Mit mittlerweile mehr als 5 Jahren Erfahrung habe ich über 65 Projekte in den Bereichen
        Interface-, Web- und Anwendungsdesign begleitet und realisiert.
      </p>
    </div>
  )
}

// ── Star + label (always a div, never inline) ────────────────────────────────
function StarAnchor({ visible, onEnter, onLeave }: {
  visible: boolean
  onEnter: () => void
  onLeave: () => void
}) {
  return (
    <div
      className="relative flex items-center gap-1.5 cursor-pointer select-none"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <span className="text-grey/40">
        <StarSVG size={16} />
      </span>
      <span className="font-body text-[11px] text-grey/40 uppercase tracking-[0.15em] whitespace-nowrap">
        Design Erfahrung
      </span>
      <DropdownPanel visible={visible} />
    </div>
  )
}

// ── Projects list ─────────────────────────────────────────────────────────────
const projects = [
  caseStudies.fyta,
  caseStudies.probe,
  caseStudies.thesis,
  caseStudies.placeholder,
]

// ── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  const [activeDropdown, setActiveDropdown] = useState<'p' | 'o' | null>(null)

  // Refs on the individual letters to compute star positions
  const wordmarkRef = useRef<HTMLHeadingElement>(null)
  const pRef = useRef<HTMLSpanElement>(null)
  const oRef = useRef<HTMLSpanElement>(null)

  // Star positions relative to the wordmark container (px)
  const [pPos, setPPos] = useState({ x: 0, y: 0 })
  const [oPos, setOPos] = useState({ x: 0, y: 0 })

  const computePositions = useCallback(() => {
    if (!wordmarkRef.current || !pRef.current || !oRef.current) return
    const base = wordmarkRef.current.getBoundingClientRect()
    const p = pRef.current.getBoundingClientRect()
    const o = oRef.current.getBoundingClientRect()

    // P star: top-left corner of the letter "P"
    setPPos({
      x: p.left - base.left,
      y: p.top - base.top,
    })
    // o star: bottom-right corner of the letter "o"
    setOPos({
      x: o.right - base.left,
      y: o.bottom - base.top,
    })
  }, [])

  useLayoutEffect(() => {
    computePositions()
    window.addEventListener('resize', computePositions)
    return () => window.removeEventListener('resize', computePositions)
  }, [computePositions])

  return (
    <div className="bg-dark text-light min-h-screen">
      <Nav />

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section
        className="flex flex-col items-center justify-center gap-14 px-8"
        style={{ minHeight: 'calc(100svh - 68px - 110px)' }}
      >

        {/* Intro text */}
        <p className="font-body text-body-lg text-center leading-[1.6]">
          <span className="text-accent">{home.hero.intro}</span>
          <br />
          <span className="text-grey">{home.hero.introSub}</span>
        </p>

        {/* Wordmark + stars ─────────────────────────────────────── */}
        {/*
          The h1 is the positioning parent (position: relative).
          Stars are absolute-positioned div siblings rendered INSIDE the h1's
          bounding box but as separate DOM nodes — no inline span tricks.
          Dropdown panels open downward so they never overlap "Portfolio".
        */}
        <div
          ref={wordmarkRef}
          className="relative w-full flex items-center justify-center"
        >
          {/* The wordmark text — letter spans are refs only, no children */}
          <h1
            className="font-title-italic text-accent text-center leading-none whitespace-nowrap pointer-events-none"
            style={{
              fontSize: 'clamp(72px, 15vw, 220px)',
              letterSpacing: '-0.09em',
            }}
          >
            <span ref={pRef}>P</span>
            ortfoli
            <span ref={oRef}>o</span>
          </h1>

          {/* P star — right edge at left of "P", vertically centered on cap height */}
          <div
            className="absolute"
            style={{
              left: pPos.x,
              top: pPos.y,
              transform: 'translate(-100%, -50%)',
            }}
          >
            <StarAnchor
              visible={activeDropdown === 'p'}
              onEnter={() => setActiveDropdown('p')}
              onLeave={() => setActiveDropdown(null)}
            />
          </div>

          {/* o star — right edge at right of "o", bottom of component at o baseline */}
          <div
            className="absolute"
            style={{
              left: oPos.x,
              top: oPos.y,
              transform: 'translate(-100%, -100%)',
            }}
          >
            <StarAnchor
              visible={activeDropdown === 'o'}
              onEnter={() => setActiveDropdown('o')}
              onLeave={() => setActiveDropdown(null)}
            />
          </div>
        </div>

        {/* Profile photo pill */}
        <div
          className="overflow-hidden bg-grey/20 shrink-0"
          style={{
            width: 'clamp(220px, 24vw, 357px)',
            height: 'clamp(128px, 14vw, 206px)',
            borderRadius: '100px',
          }}
        >
          <img
            src="/images/profile.jpg"
            alt="Lisa"
            className="w-full h-full object-cover object-top"
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
          />
        </div>
      </section>

      {/* ── Projects ──────────────────────────────────────────────────── */}
      <section className="flex flex-col gap-16 px-8 pb-20">

        {/* Section header */}
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-title-italic text-title-lg text-light leading-[1.1] tracking-[-0.05em]">
            {home.work.heading}
          </h2>
          <div className="hidden sm:flex flex-wrap gap-2 items-center pb-1">
            {home.work.filters.map((f) => (
              <span key={f} className="tag-default">{f}</span>
            ))}
          </div>
        </div>

        {/* 2 × 2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {projects.map((p) => (
            <CaseStudyCard
              key={p.slug}
              slug={p.slug}
              title={p.shortTitle}
              description={p.description}
              tags={p.tags}
              imageFolder={p.meta.imageFolder}
              isPlaceholder={p.slug === '#'}
            />
          ))}
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────────────── */}
      <footer className="border-t border-grey/20 px-8 py-12 flex flex-col gap-8">

        <div className="flex flex-col gap-3">
          <span className="font-body text-[11px] font-bold text-light uppercase tracking-[0.15em]">
            {home.footer.projectsLabel}
          </span>
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {[caseStudies.fyta, caseStudies.probe, caseStudies.thesis].map((p) => (
              <Link
                key={p.slug}
                to={p.slug}
                className="font-body text-body-md text-light hover:text-accent transition-colors"
              >
                {p.shortTitle}
              </Link>
            ))}
          </div>
        </div>

        <a
          href={`mailto:${home.footer.email}`}
          className="font-title-italic text-accent leading-[1.1] tracking-[-0.05em] hover:opacity-75 transition-opacity break-all"
          style={{ fontSize: 'clamp(28px, 6vw, 84px)' }}
        >
          {home.footer.email}
        </a>

        <div className="flex items-start justify-between gap-8 pt-4 border-t border-grey/10">
          <p className="font-body text-body-sm text-grey max-w-md">{about.bio[0]}</p>
          <Link to="/about" className="font-body text-body-sm text-grey hover:text-light transition-colors shrink-0 ml-8">
            About →
          </Link>
        </div>
      </footer>
    </div>
  )
}
