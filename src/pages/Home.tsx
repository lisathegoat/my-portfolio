import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import CaseStudyCard from '../components/CaseStudyCard'
import { home, caseStudies, about } from '../content'

// ✦ decorative star
function Star({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" fill="currentColor" />
    </svg>
  )
}

const projects = [
  caseStudies.fyta,
  caseStudies.probe,
  caseStudies.thesis,
  caseStudies.placeholder,
]

export default function Home() {
  return (
    <div className="bg-dark text-light min-h-screen flex flex-col gap-8 px-xl">
      <Nav />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="pt-[100px] pb-8 flex flex-col gap-8 items-center w-full">

        {/* Intro text */}
        <p className="font-body text-body-lg text-center">
          <span className="text-accent">{home.hero.intro} </span>
          <br />
          <span className="text-grey">{home.hero.introSub}</span>
        </p>

        {/* Giant "Portfolio" wordmark */}
        <div className="relative w-full flex items-end justify-start overflow-hidden">
          {/* Skillset label — bottom-left of word */}
          <div className="flex items-end gap-s pb-[0.2em] shrink-0 z-10">
            <span className="font-body text-body-md text-grey/70 whitespace-nowrap">{home.hero.skillsetLabel}</span>
            <Star className="text-grey/70 w-[22px] h-[22px] mb-[0.1em]" />
          </div>

          {/* The wordmark */}
          <h1
            className="font-title-italic text-accent leading-none tracking-[-0.09em] whitespace-nowrap select-none"
            style={{ fontSize: 'clamp(80px, 18vw, 284px)' }}
          >
            {home.hero.wordmark}
          </h1>

          {/* Superkraft label — bottom-right of word */}
          <div className="flex items-end gap-s pb-[0.2em] shrink-0 z-10">
            <Star className="text-grey/70 w-[22px] h-[22px] mb-[0.1em]" />
            <span className="font-body text-body-md text-grey/70 whitespace-nowrap">{home.hero.superkraftLabel}</span>
          </div>
        </div>

        {/* Profile photo */}
        <div className="w-[320px] md:w-[357px] h-[206px] rounded-[100px] overflow-hidden bg-grey/20 shrink-0">
          {/* Drop photo at /public/images/profile.jpg to activate */}
          <img
            src="/images/profile.jpg"
            alt="Lisa"
            className="w-full h-full object-cover object-top"
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
          />
        </div>
      </section>

      {/* ── Projects ─────────────────────────────────────────────────── */}
      <section className="flex flex-col gap-[80px] py-3 w-full">

        {/* Section header */}
        <div className="flex items-end justify-between w-full">
          <h2 className="font-title-italic text-title-lg text-light leading-[1.1] tracking-[-0.05em]">
            {home.work.heading}
          </h2>
          {/* Filter tags */}
          <div className="hidden md:flex flex-wrap gap-m items-center">
            {home.work.filters.map((f) => (
              <span key={f} className="tag-default">
                {f}
              </span>
            ))}
          </div>
        </div>

        {/* 2-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 w-full">
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

      {/* ── Footer ───────────────────────────────────────────────────── */}
      <footer className="border-t border-grey/30 mt-8 px-xl py-8 -mx-xl w-[calc(100%+64px)]">
        <div className="flex flex-col gap-8">

          {/* Project links row */}
          <div className="flex flex-col gap-3">
            <span className="font-body text-body-md font-bold text-light">{home.footer.projectsLabel}</span>
            <div className="flex flex-wrap gap-x-8 gap-y-1">
              {[caseStudies.fyta, caseStudies.probe, caseStudies.thesis].map((p) => (
                <Link key={p.slug} to={p.slug} className="font-body text-body-md text-light hover:text-accent transition-colors">
                  {p.shortTitle}
                </Link>
              ))}
            </div>
          </div>

          {/* Email in large italic */}
          <a
            href={`mailto:${home.footer.email}`}
            className="font-title-italic text-title-lg text-accent leading-[1.1] tracking-[-0.05em] hover:opacity-80 transition-opacity break-all"
            style={{ fontSize: 'clamp(32px, 6vw, 92px)' }}
          >
            {home.footer.email}
          </a>

          {/* About */}
          <div className="flex items-center justify-between">
            <span className="font-body text-body-sm text-grey">{about.bio[0]}</span>
            <Link to="/about" className="font-body text-body-sm text-grey hover:text-light transition-colors shrink-0 ml-8">
              About →
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
