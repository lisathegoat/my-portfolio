import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import CaseStudyCard from '../components/CaseStudyCard'
import { home, caseStudies } from '../content'

export default function Home() {
  const projects = [caseStudies.fyta, caseStudies.probe, caseStudies.thesis]

  return (
    <div className="min-h-screen bg-dark text-light">
      <Nav />

      {/* Hero */}
      <section className="px-xl pt-[160px] pb-[120px] max-w-[1400px] mx-auto">
        <div className="flex flex-col gap-8">
          <span className="section-label">{home.hero.greeting}</span>
          <div className="flex flex-col gap-6">
            <h1 className="font-title-italic text-title-xl md:text-[clamp(80px,10vw,150px)] leading-[1.05] tracking-[-0.04em] text-light">
              {home.hero.headline}
            </h1>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <p className="font-body text-body-lg text-light/80 max-w-[640px]">
                {home.hero.tagline}
              </p>
              <div className="flex flex-wrap gap-4 shrink-0">
                <Link to="/" className="btn-primary">
                  {home.hero.cta}
                </Link>
                <Link to="/about" className="btn-accent">
                  {home.hero.ctaAbout}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="px-xl pb-[120px] max-w-[1400px] mx-auto">
        <div className="flex items-center justify-between mb-xxl">
          <span className="section-label">{home.work.label}</span>
          <span className="font-body text-body-sm text-grey">
            {projects.length} Projekte
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-xl">
          {projects.map((p) => (
            <CaseStudyCard
              key={p.slug}
              slug={p.slug}
              title={p.shortTitle}
              description={p.description}
              tags={p.tags}
              imageFolder={p.meta.imageFolder}
            />
          ))}
        </div>
      </section>

      {/* About Preview */}
      <section className="px-xl pb-[120px] max-w-[1400px] mx-auto">
        <div className="border border-white/10 rounded-xxl p-xxl flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex flex-col gap-4 max-w-[560px]">
            <span className="section-label">{home.about.label}</span>
            <p className="font-body text-body-md text-light/80">
              {home.about.text}
            </p>
          </div>
          <Link to="/about" className="btn-primary shrink-0">
            {home.about.cta}
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
