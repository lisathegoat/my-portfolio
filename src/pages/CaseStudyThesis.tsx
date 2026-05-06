import CaseStudyLayout, { CaseSection } from '../components/CaseStudyLayout'
import { caseStudies } from '../content'

const cs = caseStudies.thesis
const folder = cs.meta.imageFolder

export default function CaseStudyThesis() {
  return (
    <CaseStudyLayout
      title={cs.title}
      meta={{ role: cs.meta.role, tags: cs.tags, status: cs.meta.status }}
    >
      {/* Hero image */}
      <img src={`${folder}hero.jpg.png`} alt="Inklusive Lern-App" className="w-full rounded-card object-cover mb-xxl" />

      {/* Intro */}
      <CaseSection label="Intro">
        <div className="flex flex-col gap-6">
          {cs.intro.split('\n\n').map((para, i) => (
            <p key={i} className="font-body text-body-md text-light/80">{para}</p>
          ))}
        </div>
      </CaseSection>

      {/* Recherche */}
      <CaseSection label="Recherche">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            {cs.research.body.split('\n\n').map((para, i) => (
              <p key={i} className="font-body text-body-md text-light/80">{para}</p>
            ))}
          </div>

          {/* Barrier nodes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cs.research.barriers.map((barrier) => (
              <div key={barrier.title} className="flex flex-col gap-2 p-6 border border-white/10 rounded-xl">
                <span className="font-body text-body-sm font-medium text-light">{barrier.title}</span>
                <span className="font-body text-body-sm text-light/50">{barrier.body}</span>
              </div>
            ))}
          </div>

          <img src={`${folder}02.png`} alt="Barrieren-Diagramm" className="w-full rounded-card object-cover" />
        </div>
      </CaseSection>

      {/* HMW */}
      <CaseSection>
        <blockquote className="font-title-italic text-title-sm text-light leading-[1.2] border-l-2 border-accent pl-8 tracking-[-0.03em]">
          {cs.definition}
        </blockquote>
      </CaseSection>

      {/* Ideation */}
      <CaseSection label="Ideation">
        <div className="flex flex-col gap-8">
          <p className="font-body text-body-md text-light/80">{cs.design.ideation}</p>
          <img src={`${folder}03-1.png`} alt="Ideation" className="w-full rounded-card object-cover" />
        </div>
      </CaseSection>

      {/* Entwurf */}
      <CaseSection label="Entwurf">
        <div className="flex flex-col gap-8">
          <p className="font-body text-body-md text-light/80">{cs.design.intro}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
            {cs.design.features.map((feature) => (
              <div key={feature.title} className="flex flex-col gap-3 p-6 border border-white/10 rounded-xl">
                <h3 className="font-body text-body-md font-medium text-light">{feature.title}</h3>
                <p className="font-body text-body-sm text-light/60">{feature.body}</p>
              </div>
            ))}
          </div>

          {/* Feature screens */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <img src={`${folder}03_Lesehelfer.png`} alt="Lesehelfer" className="w-full rounded-xl object-cover" />
            <img src={`${folder}04Feedback.png`} alt="Rechtschreibchecker" className="w-full rounded-xl object-cover" />
            <img src={`${folder}05_karteikarten.png`} alt="Karteikasten" className="w-full rounded-xl object-cover" />
          </div>
        </div>
      </CaseSection>

      {/* UX Flow video */}
      <CaseSection>
        <video
          src={`${folder}06.mov`}
          autoPlay
          muted
          loop
          playsInline
          className="w-full rounded-card"
        />
      </CaseSection>

      {/* Testing */}
      <CaseSection label="Testing">
        <div className="flex flex-col gap-6">
          <h3 className="font-body text-body-lg text-light">{cs.validation.heading}</h3>
          <p className="font-body text-body-md text-light/80">{cs.validation.body}</p>
          <img src={`${folder}04-1.png`} alt="Testing Session" className="w-full rounded-card object-cover" />
        </div>
      </CaseSection>

      {/* Ergebnis — metrics */}
      <CaseSection label={cs.results.heading}>
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {cs.results.metrics.map((m) => (
              <div key={m.label} className="flex flex-col gap-2 p-6 border border-white/10 rounded-xl">
                <span className="font-title-italic text-title-sm text-accent leading-none">{m.value}</span>
                <span className="font-body text-body-sm text-light/50">{m.label}</span>
              </div>
            ))}
          </div>
          <img src={`${folder}07.png`} alt="Ergebnisse" className="w-full rounded-card object-cover" />
        </div>
      </CaseSection>

      {/* Reflexion */}
      <CaseSection label="Reflexion">
        <div className="flex flex-col gap-4">
          <h3 className="font-body text-body-lg text-light">{cs.learning.heading}</h3>
          <p className="font-body text-body-md text-light/80">{cs.learning.body}</p>
        </div>
      </CaseSection>
    </CaseStudyLayout>
  )
}
