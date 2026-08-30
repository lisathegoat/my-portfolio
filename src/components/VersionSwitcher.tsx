import { Link, useLocation } from 'react-router-dom'
import { versions } from '../versions'

// Dev-only floating pill for jumping between landing page explorations.
// Rendered only on version routes themselves — case studies, resume, etc.
// stay switcher-free. Never mounted in production (see App.tsx).
export default function VersionSwitcher() {
  const { pathname } = useLocation()
  const isVersionRoute = versions.some((v) => v.path === pathname)
  if (!isVersionRoute) return null

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-1 bg-dark text-light rounded-pill px-1.5 py-1.5 shadow-2xl border border-white/10">
      {versions.map((v) => (
        <Link
          key={v.id}
          to={v.path}
          className={`font-mono text-[11px] uppercase tracking-[0.1em] px-3 py-1.5 rounded-pill transition-colors whitespace-nowrap ${
            pathname === v.path
              ? 'bg-accent text-dark'
              : 'text-light/50 hover:text-light'
          }`}
        >
          {v.label}
        </Link>
      ))}
      <span className="w-px h-4 bg-white/10 mx-0.5" />
      <Link
        to="/lab"
        className="font-mono text-[11px] uppercase tracking-[0.1em] px-3 py-1.5 rounded-pill text-light/50 hover:text-light transition-colors whitespace-nowrap"
      >
        Lab
      </Link>
    </div>
  )
}
