import type { ComponentType } from 'react'
import HomeV1 from './pages/versions/HomeV1'
import HomeV2 from './pages/versions/HomeV2'

export interface VersionEntry {
  id: string
  path: string
  label: string
  description: string
  component: ComponentType
}

// Add new landing page explorations here — Lab, VersionSwitcher, and App
// routes all read from this single list.
export const versions: VersionEntry[] = [
  {
    id: 'v1',
    path: '/',
    label: 'V1',
    description: 'Dark, editorial hero',
    component: HomeV1,
  },
  {
    id: 'v2',
    path: '/v2',
    label: 'V2',
    description: 'White, masonry grid',
    component: HomeV2,
  },
]
