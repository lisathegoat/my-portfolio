import type { ComponentType } from 'react'
import CaseStudyFytaV2 from './pages/case-studies/v2/CaseStudyFyta'
import CaseStudyProbeV2 from './pages/case-studies/v2/CaseStudyProbe'
import CaseStudyThesisV2 from './pages/case-studies/v2/CaseStudyThesis'
import CaseStudyDataVizV2 from './pages/case-studies/v2/CaseStudyDataViz'

export interface CaseStudyVersionEntry {
  id: string
  slug: string
  v2: ComponentType
}

// Mirrors versions.ts for the home page: each case study's content and
// images live once in content.ts (caseStudies[id].meta.imageFolder), and
// different visual (and copy) treatments render on top of that same data.
// V2 is the live treatment and owns the clean slug.
export const caseStudyVersions: CaseStudyVersionEntry[] = [
  { id: 'fyta', slug: '/projekte/fyta-sensor-onboarding', v2: CaseStudyFytaV2 },
  { id: 'probe', slug: '/projekte/soil-probe-diagnostic', v2: CaseStudyProbeV2 },
  { id: 'thesis', slug: '/projekte/inklusive-lern-app', v2: CaseStudyThesisV2 },
  { id: 'dataviz', slug: '/projekte/fyta-datenvisualisierung', v2: CaseStudyDataVizV2 },
]

// Every case study lives at its plain slug. Kept as a function so link sites
// don't need to change if versioning comes back.
export function caseStudyHref(slug: string): string {
  return slug
}

/** Component that owns the public slug. */
export function liveCaseStudy(entry: CaseStudyVersionEntry): ComponentType {
  return entry.v2
}
