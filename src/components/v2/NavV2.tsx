import { Link } from 'react-router-dom'

const tabs = [
  { label: 'Work', to: '/v2' },
  { label: 'About', to: '/about' },
  { label: 'Resume', to: '/resume' },
]

// Shared across every V2-styled page (HomeV2, V2 case studies...) so the
// design language stays in sync — restyle here, it updates everywhere.
export default function NavV2({ active = 'Work' }: { active?: string }) {
  return (
    <header className="w-full px-6 md:px-[60px] h-16 flex items-center justify-between border-b border-[#32404f]/10">
      <Link to="/v2" className="flex items-baseline gap-3 md:gap-4">
        <span className="font-mono text-[13px] md:text-[15px] uppercase tracking-[0.02em] text-[#32404f]">
          Lisa Collmer
        </span>
        <span className="hidden sm:inline font-mono text-[13px] md:text-[15px] uppercase tracking-[0.02em] text-[#32404f]/60">
          Produkt-Designerin
        </span>
      </Link>
      <nav className="flex items-center gap-5 md:gap-10">
        {tabs.map((tab) =>
          tab.label === active ? (
            <span
              key={tab.to}
              className="font-mono text-[13px] md:text-[15px] uppercase tracking-[0.02em] text-[#e65f2e]"
            >
              {tab.label}
            </span>
          ) : (
            <Link
              key={tab.to}
              to={tab.to}
              className="font-mono text-[13px] md:text-[15px] uppercase tracking-[0.02em] text-[#32404f]/60 hover:text-[#32404f] transition-colors"
            >
              {tab.label}
            </Link>
          )
        )}
      </nav>
    </header>
  )
}
