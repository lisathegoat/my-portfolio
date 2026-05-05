import CaseStudyLayout, { CaseSection } from '../components/CaseStudyLayout'
import { ImagePlaceholder } from '../components/Placeholder'
import { caseStudies } from '../content'

const cs = caseStudies.thesis

export default function CaseStudyThesis() {
  return (
    <CaseStudyLayout
      title={cs.title}
      meta={{ role: cs.meta.role, tags: cs.tags, status: cs.meta.status }}
    >
      {/* Hero image */}
      <ImagePlaceholder aspectRatio="hero" label="Inklusive Lern-App — Hero" className="w-full mb-xxl" />

      {/* Intro */}
      <CaseSection label="Intro">
        <div className="flex flex-col gap-6">
          {cs.intro.split('\n\n').map((para, i) => (
            <p key={i} className="font-body text-body-md text-light/80">{para}</p>
          ))}
        </div>
      </CaseSection>

      {/* Research */}
      <CaseSection label="Research">
        <div className="flex flex-col gap-6">
          {cs.research.split('\n\n').map((para, i) => (
            <p key={i} className="font-body text-body-md text-light/80">{para}</p>
          ))}
        </div>
      </CaseSection>

      {/* Definition / HMW */}
      <CaseSection>
        <blockquote className="font-title-italic text-title-sm text-light leading-[1.2] border-l-2 border-accent pl-8 tracking-[-0.03em]">
          {cs.definition}
        </blockquote>
      </CaseSection>

      {/* Design */}
      <CaseSection label="Design">
        <div className="flex flex-col gap-8">
          <p className="font-body text-body-md text-light/80">{cs.design.intro}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-l mt-4">
            {cs.design.features.map((feature, i) => (
              <div key={i} className="flex flex-col gap-3 p-l border border-white/10 rounded-xl">
                <h3 className="font-body text-body-md font-medium text-light">{feature.title}</h3>
                <p className="font-body text-body-sm text-light/60">{feature.body}</p>
              </div>
            ))}
          </div>
        </div>
      </CaseSection>

      {/* Screens placeholder */}
      <CaseSection>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-l">
          {['Lesehelfer', 'Rechtschreibchecker', 'Karteikasten'].map((label) => (
            <ImagePlaceholder key={label} aspectRatio="phone" label={label} />
          ))}
        </div>
      </CaseSection>

      {/* Validation */}
      <CaseSection label="Validierung">
        <p className="font-body text-body-md text-light/80">{cs.validation}</p>
      </CaseSection>

      {/* Results */}
      <CaseSection label="Ergebnisse">
        <p className="font-body text-body-md text-light/80">{cs.results}</p>
      </CaseSection>

      {/* Learning */}
      <CaseSection label="Learning">
        <p className="font-body text-body-md text-light/80">{cs.learning}</p>
      </CaseSection>
    </CaseStudyLayout>
  )
}
