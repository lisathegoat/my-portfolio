import { useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import CaseStudyCard from '../components/CaseStudyCard'
import { home, caseStudies, about } from '../content'

// ── Decorative star SVG ──────────────────────────────────────────────────────
function StarSVG({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0L13.8 10.2L24 12L13.8 13.8L12 24L10.2 13.8L0 12L10.2 10.2L12 0Z" />
    </svg>
  )
}

// ── Hoverable star with dropdown opening LEFT ────────────────────────────────
interface StarDropdownProps {
  /** which side of the star the panel opens toward */
  panelAnchor: 'left' | 'right'
  /** vertical anchor of the panel */
  panelVertical: 'top' | 'bottom'
}

function StarDropdown({ panelAnchor, panelVertical }: StarDropdownProps) {
  const [open, setOpen] = useState(false)

  const panelH = panelVertical === 'top' ? 'bottom-full mb-3' : 'top-full mt-3'
  const panelX =
    panelAnchor === 'left'
      ? 'right-0'   // panel right-edge aligns with star, extends leftward
      : 'left-0'    // panel left-edge aligns with star, extends rightward

  return (
    <span
      className="relative inline-flex items-center gap-1.5 cursor-pointer select-none"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <StarSVG className="w-5 h-5 text-grey/50 hover:text-accent transition-colors duration-150 shrink-0" />
      <span className="font-body text-[13px] text-grey/50 uppercase tracking-[0.12em] leading-none whitespace-nowrap">
        Design Erfahrung
      </span>

      {/* Dropdown panel */}
      {open && (
        <span
          className={`absolute ${panelH} ${panelX} z-50 w-[280px] bg-[#1a1a1a] border border-white/10 rounded-l p-5 shadow-2xl pointer-events-none`}
        >
          <span className="block font-body text-[13px] text-grey uppercase tracking-[0.12em] mb-3 leading-none">
            Design Erfahrung
          </span>
          <span className="block font-body text-body-sm text-light/70 leading-[1.6]">
            Mit mittlerweile mehr als 5 Jahren Erfahrung habe ich über 65 Projekte in den Bereichen Interface-, Web- und Anwendungsdesign begleitet und realisiert.
          </span>
        </span>
      )}
    </span>
  )
}

// ── Projects ─────────────────────────────────────────────────────────────────
const projects = [
  caseStudies.fyta,
  caseStudies.probe,
  caseStudies.thesis,
  caseStudies.placeholder,
]

// ── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="bg-dark text-light min-h-screen">
      <Nav />

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="flex flex-col items-center gap-10 px-8 pt-6 pb-16">

        {/* Intro text */}
        <p className="font-body text-body-lg text-center leading-[1.4]">
          <span className="text-accent">{home.hero.intro} </span>
          <span className="text-grey">{home.hero.introSub}</span>
        </p>

        {/* Wordmark — centered, stars on P (top-left) and o (bottom-right) */}
        <div className="relative w-full flex items-center justify-center overflow-visible">
          <h1
            className="font-title-italic text-accent text-center leading-none whitespace-nowrap"
            style={{
              fontSize: 'clamp(72px, 15vw, 220px)',
              letterSpacing: '-0.09em',
            }}
          >
            {/* P — star at top-left, dropdown opens LEFT (panel extends leftward from star) */}
            <span className="relative" style={{ display: 'inline' }}>
              <span
                className="absolute z-20 flex items-start"
                style={{ top: '-0.35em', left: '-0.1em' }}
              >
                <StarDropdown panelAnchor="left" panelVertical="bottom" />
              </span>
              P
            </span>
            {/* remaining letters */}
            ortfoli
            {/* o — star at bottom-right, dropdown opens LEFT */}
            <span className="relative" style={{ display: 'inline' }}>
              o
              <span
                className="absolute z-20 flex items-end"
                style={{ bottom: '-0.35em', right: '-0.2em' }}
              >
                <StarDropdown panelAnchor="left" panelVertical="top" />
              </span>
            </span>
          </h1>
        </div>

        {/* Profile photo pill */}
        <div
          className="overflow-hidden bg-grey/20 shrink-0"
          style={{ width: 'clamp(240px, 25vw, 357px)', height: 'clamp(138px, 14.4vw, 206px)', borderRadius: '100px' }}
        >
          <img
            src="/images/profile.jpg"
            alt="Lisa"
            className="w-full h-full object-cover object-top"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = 'none'
            }}
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
          {/* Filter tags */}
          <div className="hidden sm:flex flex-wrap gap-3 items-center pb-1">
            {home.work.filters.map((f) => (
              <span key={f} className="tag-default">
                {f}
              </span>
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

        {/* Project links */}
        <div className="flex flex-col gap-3">
          <span className="font-body text-body-sm font-bold text-light tracking-wide uppercase text-[13px]">
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

        {/* Large email */}
        <a
          href={`mailto:${home.footer.email}`}
          className="font-title-italic text-accent leading-[1.1] tracking-[-0.05em] hover:opacity-75 transition-opacity break-all"
          style={{ fontSize: 'clamp(28px, 6vw, 84px)' }}
        >
          {home.footer.email}
        </a>

        {/* About tagline */}
        <div className="flex items-start justify-between gap-8 pt-4 border-t border-grey/10">
          <p className="font-body text-body-sm text-grey max-w-md">
            {about.bio[0]}
          </p>
          <Link
            to="/about"
            className="font-body text-body-sm text-grey hover:text-light transition-colors shrink-0"
          >
            About →
          </Link>
        </div>
      </footer>
    </div>
  )
}
