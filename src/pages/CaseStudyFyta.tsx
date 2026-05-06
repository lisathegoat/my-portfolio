import CaseStudyLayout, { CaseSection } from '../components/CaseStudyLayout'
import { ImagePlaceholder, BlockPlaceholder } from '../components/Placeholder'
import { caseStudies } from '../content'

const cs = caseStudies.fyta

export default function CaseStudyFyta() {
  return (
    <CaseStudyLayout
      title={cs.title}
      meta={{ role: cs.meta.role, tags: cs.tags, status: cs.meta.status }}
    >
      {/* Hero image */}
      <img src="/images/fyta-onboarding/hero.jpg" alt="FYTA Sensoranbindung" className="w-full rounded-card object-cover mb-xxl" />

      {/* Intro */}
      <CaseSection label="Intro">
        <div className="flex flex-col gap-6">
          {cs.intro.split('\n\n').map((para, i) => (
            <p key={i} className="font-body text-body-md text-light/80">{para}</p>
          ))}
        </div>
      </CaseSection>

      {/* Challenge */}
      <CaseSection label="Herausforderung">
        <div className="flex flex-col gap-6">
          {cs.challenge.intro.split('\n\n').map((para, i) => (
            <p key={i} className="font-body text-body-md text-light/80">{para}</p>
          ))}
          <ul className="flex flex-col gap-4 pl-0 mt-2">
            {cs.challenge.points.map((point, i) => (
              <li key={i} className="flex gap-4 items-start">
                <span className="font-body text-body-sm text-accent mt-1 shrink-0">—</span>
                <span className="font-body text-body-md text-light/80">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </CaseSection>

      {/* HMW */}
      <CaseSection>
        <blockquote className="font-title-italic text-title-sm text-light leading-[1.2] border-l-2 border-accent pl-8 tracking-[-0.03em]">
          {cs.hmw}
        </blockquote>
      </CaseSection>

      {/* Research */}
      <CaseSection label="Research">
        <p className="font-body text-body-md text-light/80">{cs.research}</p>
      </CaseSection>

      {/* Definition */}
      <CaseSection label="Definition">
        <p className="font-body text-body-md text-light/80">{cs.definition}</p>
      </CaseSection>

      {/* Design */}
      <CaseSection label="Design">
        <p className="font-body text-body-md text-light/80">{cs.design}</p>
      </CaseSection>

      {/* Deep Dive */}
      <CaseSection label="Vertiefung">
        <div className="flex flex-col gap-8">
          <p className="font-body text-body-md text-light/80">{cs.deepDive}</p>
          {/* Flow diagram placeholder */}
          <ImagePlaceholder aspectRatio="hero" label="Flowchart: Zuordnungslogik + Edge Cases" />
        </div>
      </CaseSection>

      {/* Iteration — text only, blockquote treatment */}
      <CaseSection label="Iteration">
        <div className="border-l-2 border-white/20 pl-8 flex flex-col gap-6">
          {cs.iteration.split('\n\n').map((para, i) => (
            <p key={i} className="font-body text-body-md text-light/70 italic">{para}</p>
          ))}
        </div>
      </CaseSection>

      {/* UX Decision */}
      <CaseSection label="UX-Entscheidung">
        <div className="flex flex-col gap-8">
          <p className="font-body text-body-md text-light/80">{cs.uxDecision.intro}</p>
          {/* Screen annotations + placeholders */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-l">
            {cs.uxDecision.annotations.map((ann, i) => (
              <div key={i} className="flex flex-col gap-4">
                <ImagePlaceholder aspectRatio="phone" label={ann.screen} />
                <div className="flex flex-col gap-1">
                  <span className="font-body text-body-sm text-accent">{ann.screen}</span>
                  <p className="font-body text-body-sm text-light/70">{ann.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CaseSection>

      {/* Further Touchpoints */}
      <CaseSection label="Weitere Touchpoints">
        <div className="flex flex-col gap-8">
          <p className="font-body text-body-md text-light/80">{cs.furtherTouchpoints.intro}</p>
          <div className="flex flex-col gap-xxl">
            {cs.furtherTouchpoints.items.map((item, i) => (
              <div key={i} className="flex flex-col gap-4">
                <h3 className="font-body text-body-md font-medium text-light">{item.title}</h3>
                <p className="font-body text-body-md text-light/70">{item.body}</p>
                <ImagePlaceholder aspectRatio="hero" label={item.title} />
              </div>
            ))}
          </div>
        </div>
      </CaseSection>

      {/* Business Impact */}
      <CaseSection label="Business Impact">
        <div className="flex flex-col gap-4">
          {cs.impact.items.map((item, i) => {
            const isPlaceholder = item.includes('[PLACEHOLDER')
            return isPlaceholder ? (
              <BlockPlaceholder key={i} text={item} />
            ) : (
              <div key={i} className="flex gap-4 items-start">
                <span className="font-body text-body-sm text-accent mt-1 shrink-0">—</span>
                <p className="font-body text-body-md text-light/80">{item}</p>
              </div>
            )
          })}
        </div>
      </CaseSection>

      {/* Reflection */}
      <CaseSection label="Reflexion">
        <p className="font-body text-body-md text-light/80">{cs.reflection}</p>
      </CaseSection>
    </CaseStudyLayout>
  )
}
