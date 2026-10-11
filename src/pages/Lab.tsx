import { versions } from '../versions'
import LabPreviewCard from '../components/LabPreviewCard'
import FigmaClip from '../components/FigmaClip'

// Dev-only version gallery — never routed in production (see App.tsx).
export default function Lab() {
  return (
    <div className="min-h-screen bg-dark px-8 py-12">
      <div className="max-w-[1400px] mx-auto">
        <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-grey mb-1">
          Local only · not part of the live site
        </p>
        <h1 className="font-title-italic text-title-sm text-light mb-10">Version Lab</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {versions.map((v) => (
            <LabPreviewCard key={v.id} version={v} />
          ))}
        </div>

        <h2 className="font-title-italic text-title-sm text-light mt-20 mb-2">Motion test</h2>
        <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-grey mb-8">
          Figma animation exported as video · probe diagnosing screen
        </p>
        <FigmaClip name="probe-diagnosing" caption="Probe test · Diagnosing" />
      </div>
    </div>
  )
}
