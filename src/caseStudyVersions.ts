import type { ComponentType } from 'react'
import CaseStudyFytaV1 from './pages/case-studies/v1/CaseStudyFyta'
import CaseStudyProbeV1 from './pages/case-studies/v1/CaseStudyProbe'
import CaseStudyThesisV1 from './pages/case-studies/v1/CaseStudyThesis'
import CaseStudyFytaV2 from './pages/case-studies/v2/CaseStudyFyta'
import CaseStudyThesisV2 from './pages/case-studies/v2/CaseStudyThesis'
import CaseStudyDataVizV2 from './pages/case-studies/v2/CaseStudyDataViz'

export interface CaseStudyVersionEntry {
  id: string
  slug: string
  v1: ComponentType
  v2?: ComponentType
}

// Mirrors versions.ts for the home page: each case study's content and
// images live once in content.ts (caseStudies[id].meta.imageFolder), and
// different visual (and copy) treatments render on top of that same data.
// v1 is always the default route; v2 (once built) gets a sibling route at
// `${slug}/v2`. Add a new entry's v2 field as each case study gets its
// restyle — no other file needs to change.
export const caseStudyVersions: CaseStudyVersionEntry[] = [
  { id: 'fyta', slug: '/projekte/fyta-sensor-onboarding', v1: CaseStudyFytaV1, v2: CaseStudyFytaV2 },
  { id: 'probe', slug: '/projekte/soil-probe-diagnostic', v1: CaseStudyProbeV1 },
  { id: 'thesis', slug: '/projekte/inklusive-lern-app', v1: CaseStudyThesisV1, v2: CaseStudyThesisV2 },
  { id: 'dataviz', slug: '/projekte/fyta-datenvisualisierung', v1: CaseStudyProbeV1, v2: CaseStudyDataVizV2 },
]

// Resolves the right link target for a project slug: `${slug}/v2` if that
// case study has a V2 design yet, otherwise the plain V1 slug.
export function caseStudyHref(slug: string): string {
  const entry = caseStudyVersions.find((c) => c.slug === slug)
  return entry?.v2 ? `${slug}/v2` : slug
}
