import CaseStudyLayout, { CaseSection } from '../components/CaseStudyLayout'
import { ImagePlaceholder } from '../components/Placeholder'
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
          <h3 className="font-body text-body-lg font-medium text-light">{cs.challenge.heading}</h3>
          <p className="font-body text-body-md text-light/80">{cs.challenge.body}</p>
          <ul className="flex flex-col gap-4 pl-0 mt-2">
            {cs.challenge.points.map((point, i) => (
              <li key={i} className="flex gap-4 items-start">
                <span className="font-body text-body-sm text-accent mt-1 shrink-0">—</span>
                <span className="font-body text-body-md text-light/80">{point}</span>
              </li>
            ))}
          </ul>
          <img src="/images/fyta-onboarding/01_Mental_Model.png" alt="Komplexitätsmodell: Eins zu eins, Eins zu vielen, Viele zu viele" className="w-full rounded-card object-cover mt-4" />
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
        <div className="flex flex-col gap-10">
          {cs.research.split('\n\n').map((para, i) => (
            <p key={i} className="font-body text-body-md text-light/80">{para}</p>
          ))}

          {/* Flowchart */}
          <img src="/images/fyta-onboarding/02_Add sensor 1 Flow chart.png" alt="Flowchart: Zuordnungslogik und Edge Cases" className="w-full rounded-card object-cover" />

          {/* Old flow UX review */}
          <div className="flex flex-col gap-6">
            <p className="font-body text-body-sm text-grey uppercase tracking-[0.08em]">{cs.oldFlowReview.intro}</p>
            <div className="flex flex-col gap-6">
              {cs.oldFlowReview.screens.map((screen, i) => (
                <div key={i} className="flex flex-col gap-3 p-6 border border-white/10 rounded-xl">
                  <span className="font-body text-body-sm font-medium text-accent">{screen.label}</span>
                  <ul className="flex flex-col gap-2">
                    {screen.notes.map((note, j) => (
                      <li key={j} className="flex gap-3 items-start">
                        <span className="text-grey/40 shrink-0 mt-1">—</span>
                        <span className="font-body text-body-sm text-light/70">{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CaseSection>

      {/* Definition */}
      <CaseSection label="Definition">
        <p className="font-body text-body-md text-light/80">{cs.definition}</p>
      </CaseSection>

      {/* Design */}
      <CaseSection label="Design">
        <div className="flex flex-col gap-8">
          <p className="font-body text-body-md text-light/80">{cs.design}</p>
          <img src="/images/fyta-onboarding/03_System_support.png" alt="System Support" className="w-full rounded-card object-cover" />
        </div>
      </CaseSection>

      {/* Deep Dive */}
      <CaseSection label="Vertiefung">
        <p className="font-body text-body-md text-light/80">{cs.deepDive}</p>
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
          {/* Screen annotations */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-l">
            {cs.uxDecision.annotations.map((ann, i) => {
              const screens = ['04.png', '05.png', '06.png']
              return (
                <div key={i} className="flex flex-col gap-4">
                  <img src={`/images/fyta-onboarding/${screens[i]}`} alt={ann.screen} className="w-full rounded-xl object-cover" />
                  <div className="flex flex-col gap-1">
                    <span className="font-body text-body-sm text-accent">{ann.screen}</span>
                    <p className="font-body text-body-sm text-light/70">{ann.label}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </CaseSection>

      {/* Further Touchpoints */}
      <CaseSection label="Weitere Touchpoints">
        <div className="flex flex-col gap-8">
          <p className="font-body text-body-md text-light/80">{cs.furtherTouchpoints.intro}</p>
          <div className="flex flex-col gap-xxl">
            {cs.furtherTouchpoints.items.map((item, i) => {
              const touchpointImages = ['07.png', '09.png', null] // 08.png missing — Statuskommunikation pending
              const img = touchpointImages[i]
              return (
                <div key={i} className="flex flex-col gap-4">
                  <h3 className="font-body text-body-md font-medium text-light">{item.title}</h3>
                  <p className="font-body text-body-md text-light/70">{item.body}</p>
                  {img
                    ? <img src={`/images/fyta-onboarding/${img}`} alt={item.title} className="w-full rounded-card object-cover" />
                    : <ImagePlaceholder aspectRatio="hero" label={`${item.title} — Bild fehlt (08.png)`} />
                  }
                </div>
              )
            })}
          </div>
        </div>
      </CaseSection>

      {/* UI-Entscheidungen */}
      <CaseSection label="UI-Entscheidungen">
        <div className="flex flex-col gap-xxl">
          {cs.uiDecisions.map((decision, i) => (
            <div key={i} className="flex flex-col gap-4">
              <h3 className="font-body text-body-md font-medium text-light">{decision.title}</h3>
              <p className="font-body text-body-md text-light/70">{decision.body}</p>
              <ImagePlaceholder aspectRatio="hero" />
            </div>
          ))}
        </div>
      </CaseSection>

      {/* Business Impact */}
      <CaseSection label="Business Impact">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cs.impact.cards.map((card, i) => (
            <div key={i} className="flex flex-col gap-3 border border-white/10 rounded-xl p-6">
              <span className="font-body text-body-md font-medium text-accent">{card.title}</span>
              <p className="font-body text-body-md text-light/70">{card.body}</p>
            </div>
          ))}
        </div>
      </CaseSection>

      {/* Reflection */}
      <CaseSection label="Reflexion">
        <p className="font-body text-body-md text-light/80">{cs.reflection}</p>
      </CaseSection>
    </CaseStudyLayout>
  )
}
