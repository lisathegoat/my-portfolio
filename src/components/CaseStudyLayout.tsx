import { Link } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'

interface Meta {
  role: string
  tags: string[]
  status: string
}

interface CaseStudyLayoutProps {
  title: string
  meta: Meta
  children: React.ReactNode
}

export default function CaseStudyLayout({ title, meta, children }: CaseStudyLayoutProps) {
  return (
    <div className="min-h-screen bg-dark text-light">
      <Nav />

      {/* Hero header */}
      <section className="px-xl pt-[160px] pb-[80px] max-w-[1400px] mx-auto">
        <div className="flex flex-col gap-8">
          <Link
            to="/"
            className="font-body text-body-sm text-grey hover:text-light transition-colors inline-flex items-center gap-2 w-fit"
          >
            ← Alle Projekte
          </Link>
          <h1 className="font-title-italic text-title-lg md:text-[clamp(48px,6vw,92px)] leading-[1.05] tracking-[-0.04em] text-light max-w-[900px]">
            {title}
          </h1>
          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <span className="font-body text-body-sm text-grey">{meta.role}</span>
            <span className="font-body text-body-sm text-grey/30">·</span>
            <span className="font-body text-body-sm text-grey">{meta.status}</span>
            <span className="font-body text-body-sm text-grey/30">·</span>
            <div className="flex flex-wrap gap-2">
              {meta.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-body text-body-sm border border-grey/40 text-grey rounded-l px-m py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="px-xl max-w-[1400px] mx-auto pb-[120px]">
        {children}
      </div>

      <Footer />
    </div>
  )
}

// Reusable section block for case studies
export function CaseSection({
  label,
  children,
  className = '',
}: {
  label?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <section className={`grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-xxl items-start py-xxl border-t border-white/10 ${className}`}>
      {label && <span className="section-label pt-1">{label}</span>}
      <div className={label ? '' : 'lg:col-span-2'}>{children}</div>
    </section>
  )
}
