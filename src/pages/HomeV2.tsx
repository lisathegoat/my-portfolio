import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { home, caseStudies } from '../content'

const projects = [
  { ...caseStudies.fyta, aspectRatio: '16/9', wideCover: '/images/home/Onboarding_16x9.mp4' },
  { ...caseStudies.probe, aspectRatio: '8/5', wideCover: '' },
  { ...caseStudies.thesis, aspectRatio: '10/7', wideCover: '/images/home/01_Hero_LernApp.mp4' },
  { ...caseStudies.scrollytelling, aspectRatio: '16/9', wideCover: '/images/home/Daten_der_Intersektionalitaet.mp4' },
]

function CaseStudyGridCard({ project }: { project: typeof projects[number] }) {
  const isExternal = project.slug.startsWith('http')
  const videoSrc = project.wideCover || (project.meta as { coverVideo?: string }).coverVideo
    ? project.wideCover || `${project.meta.imageFolder}${(project.meta as { coverVideo?: string }).coverVideo}`
    : null
  const imgSrc = !videoSrc && (project.meta as { cover?: string }).cover
    ? `${project.meta.imageFolder}${(project.meta as { cover?: string }).cover}`
    : null

  const inner = (
    <>
      <div
        className="w-full overflow-hidden rounded-lg bg-[#111]"
        style={{ aspectRatio: project.aspectRatio }}
      >
        {videoSrc ? (
          <video
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        ) : imgSrc ? (
          <img src={imgSrc} alt={project.shortTitle} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-[#1a1a1a]" />
        )}
      </div>
      <div className="mt-3">
        <h3 className="font-tiempos text-[17px] text-dark font-normal leading-tight">{project.shortTitle}</h3>
        <h4 className="font-geist text-[15px] text-dark/50 mt-0.5">{project.tags.join(' · ')}</h4>
      </div>
    </>
  )

  if (isExternal) {
    return (
      <a href={project.slug} target="_blank" rel="noopener noreferrer" className="block">
        {inner}
      </a>
    )
  }

  return (
    <Link to={project.slug} className="block">
      {inner}
    </Link>
  )
}

function MinimalNav() {
  return (
    <header className="w-full px-8 py-6 flex items-center justify-between">
      <Link
        to="/v2"
        className="font-mono text-[11px] uppercase tracking-[0.15em] text-dark hover:text-dark/60 transition-colors"
      >
        Lisa Haupt
      </Link>
      <div className="flex items-center gap-8">
        <Link
          to="/about"
          className="font-mono text-[11px] uppercase tracking-[0.15em] text-dark/50 hover:text-dark transition-colors"
        >
          About
        </Link>
        <a
          href={`mailto:${home.footer.email}`}
          className="font-mono text-[11px] uppercase tracking-[0.15em] text-dark/50 hover:text-dark transition-colors"
        >
          Contact
        </a>
      </div>
    </header>
  )
}

const cvEntries = [
  { year: '2024', role: 'Lead of Design', company: 'FYTA' },
  { year: '2022', role: 'Produkt Designer', company: 'FYTA' },
  { year: '2022', role: 'Master of Arts', company: 'FH Potsdam' },
  { year: '2020', role: 'Grafik & Digital Designerin', company: 'Loveto' },
  { year: '2018', role: 'Grafik & Digital Designerin', company: 'FH Eichmeister Kreativagentur' },
]

export default function HomeV2() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const raf = requestAnimationFrame(() => setMounted(true))
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div className="bg-white text-dark min-h-screen">

      <MinimalNav />

      {/* ── Hero — intro left + CV right ── */}
      <section
        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 px-8 items-end pt-12 pb-20"
        style={{
          opacity: mounted ? 1 : 0,
          transform: `translateY(${mounted ? 0 : 20}px)`,
          transition: 'opacity 1s ease-out, transform 1s ease-out',
        }}
      >
        {/* Left — intro */}
        <div className="flex flex-col justify-end">
          <h1 className="font-tiempos text-[clamp(28px,3.2vw,42px)] tracking-[-0.02em] leading-[1.3]">
            <span className="text-dark">Hi, ich bin Lisa.</span>
            <br />
            <span className="italic text-dark/60">Produkt + Visuelle-designerin</span>
          </h1>
        </div>

        {/* Right — CV table */}
        <div className="flex flex-col justify-end">
          <table className="w-full border-collapse">
            <tbody>
              {cvEntries.map((entry, i) => (
                <tr key={i} className="border-b border-dark/10">
                  <td className="font-mono text-[13px] text-dark/40 py-3 pr-8 whitespace-nowrap align-top">
                    {entry.year}
                  </td>
                  <td className="font-geist text-[15px] text-dark py-3 align-top">
                    {entry.role}
                  </td>
                  <td className="font-geist text-[15px] text-dark/40 py-3 pl-4 text-right align-top whitespace-nowrap">
                    {entry.company}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Case Studies — 2-column masonry grid, full width ── */}
      <section className="px-8 pb-20">
        <div className="columns-1 md:columns-2 gap-8">
          {projects.map((p) => (
            <div key={p.slug} className="break-inside-avoid mb-8">
              <CaseStudyGridCard project={p} />
            </div>
          ))}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-dark/10 px-8 py-12 flex flex-col gap-6">
        <a
          href={`mailto:${home.footer.email}`}
          className="font-tiempos text-dark leading-[1.1] tracking-[-0.03em] hover:opacity-60 transition-opacity"
          style={{ fontSize: 'clamp(28px, 5vw, 64px)' }}
        >
          {home.footer.email}
        </a>
        <div className="flex items-center justify-between pt-4 border-t border-dark/10">
          <p className="font-geist text-[14px] text-dark/40">© 2025 Lisa Haupt</p>
          <div className="flex items-center gap-6">
            <Link to="/" className="font-geist text-[14px] text-dark/40 hover:text-dark transition-colors">
              Layout V1
            </Link>
            <Link to="/about" className="font-geist text-[14px] text-dark/40 hover:text-dark transition-colors">
              About
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
