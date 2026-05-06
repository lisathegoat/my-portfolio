import CaseStudyLayout, { CaseSection } from '../components/CaseStudyLayout'
import { ImagePlaceholder, BlockPlaceholder } from '../components/Placeholder'
import { caseStudies } from '../content'

const cs = caseStudies.probe

export default function CaseStudyProbe() {
  return (
    <CaseStudyLayout
      title={cs.title}
      meta={{ role: cs.meta.role, tags: cs.tags, status: cs.meta.status }}
    >
      {/* Hero image */}
      <img src="/images/probe-diagnostic/hero.jpg" alt="Soil Probe Diagnostic" className="w-full rounded-card object-cover mb-xxl" />

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
          {cs.challenge.split('\n\n').map((para, i) => (
            <p key={i} className="font-body text-body-md text-light/80">{para}</p>
          ))}
        </div>
      </CaseSection>

      {/* My Role */}
      <CaseSection label="Meine Rolle">
        <p className="font-body text-body-md text-light/80">{cs.myRole}</p>
      </CaseSection>

      {/* Design Process */}
      <CaseSection label="Designprozess">
        <div className="flex flex-col gap-xxl">
          {cs.process.steps.map((step, i) => (
            <div key={i} className="flex flex-col gap-4">
              <h3 className="font-body text-body-md font-medium text-light">{step.label}</h3>
              {step.body && (
                <p className="font-body text-body-md text-light/70">{step.body}</p>
              )}
              {step.gates && (
                <ul className="flex flex-col gap-3 mt-2">
                  {step.gates.map((gate, j) => (
                    <li key={j} className="flex gap-4 items-start">
                      <span className="font-body text-body-sm text-accent mt-1 shrink-0">{j + 1}.</span>
                      <span className="font-body text-body-md text-light/70">{gate}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </CaseSection>

      {/* Process screens placeholder */}
      <CaseSection>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-l">
          {['Connection Check', 'Test läuft', 'Ergebnis: OK', 'Ergebnis: Defekt'].map((label) => (
            <ImagePlaceholder key={label} aspectRatio="phone" label={label} />
          ))}
        </div>
      </CaseSection>

      {/* Key Decision */}
      <CaseSection label="Schlüsselentscheidung">
        <div className="flex flex-col gap-6">
          {cs.keyDecision.split('\n\n').map((para, i) => (
            <p key={i} className="font-body text-body-md text-light/80">{para}</p>
          ))}
        </div>
      </CaseSection>

      {/* Results — placeholder visible */}
      <CaseSection label="Ergebnisse">
        <div className="flex flex-col gap-6">
          <BlockPlaceholder text={cs.results.placeholder} />
          <div className="flex flex-col gap-3 mt-4">
            <p className="font-body text-body-sm text-grey uppercase tracking-[0.08em] mb-2">
              Metriken in Beobachtung
            </p>
            {cs.results.metrics.map((m, i) => (
              <div key={i} className="flex gap-4 items-start">
                <span className="font-body text-body-sm text-grey/50 mt-1 shrink-0">—</span>
                <span className="font-body text-body-md text-light/70">{m}</span>
              </div>
            ))}
          </div>
        </div>
      </CaseSection>

      {/* Learning */}
      <CaseSection label="Learning">
        <p className="font-body text-body-md text-light/80">{cs.learning}</p>
      </CaseSection>
    </CaseStudyLayout>
  )
}
