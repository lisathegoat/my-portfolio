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
  /** Archived V1 treatment. Dev-only route, never linked in production. */
  v1?: ComponentType
  v2?: ComponentType
}

// Mirrors versions.ts for the home page: each case study's content and
// images live once in content.ts (caseStudies[id].meta.imageFolder), and
// different visual (and copy) treatments render on top of that same data.
// V2 is the live treatment and owns the clean slug. Where no V2 exists yet the
// V1 component still serves that slug, so no project 404s. V1 stays reachable
// at `${slug}/v1` in dev only.
export const caseStudyVersions: CaseStudyVersionEntry[] = [
  { id: 'fyta', slug: '/projekte/fyta-sensor-onboarding', v1: CaseStudyFytaV1, v2: CaseStudyFytaV2 },
  { id: 'probe', slug: '/projekte/soil-probe-diagnostic', v1: CaseStudyProbeV1 },
  { id: 'thesis', slug: '/projekte/inklusive-lern-app', v1: CaseStudyThesisV1, v2: CaseStudyThesisV2 },
  { id: 'dataviz', slug: '/projekte/fyta-datenvisualisierung', v2: CaseStudyDataVizV2 },
]

// Every case study lives at its plain slug. Kept as a function so link sites
// don't need to change if versioning comes back.
export function caseStudyHref(slug: string): string {
  return slug
}

/** Component that owns the public slug: V2 where it exists, else V1. */
export function liveCaseStudy(entry: CaseStudyVersionEntry): ComponentType | undefined {
  return entry.v2 ?? entry.v1
}
