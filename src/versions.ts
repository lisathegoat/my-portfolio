import type { ComponentType } from 'react'
import HomeV2 from './pages/versions/HomeV2'

export interface VersionEntry {
  id: string
  path: string
  label: string
  description: string
  /** Only mounted in dev. Explorations must never be reachable in production. */
  devOnly?: boolean
  component: ComponentType
}

// Landing page explorations. Exactly one entry is the live site (path '/');
// everything else is a dev-only reference route. Lab, VersionSwitcher and App
// routes all read from this single list.
export const versions: VersionEntry[] = [
  {
    id: 'v2',
    path: '/',
    label: 'V2',
    description: 'White, masonry grid — live',
    component: HomeV2,
  },
]
