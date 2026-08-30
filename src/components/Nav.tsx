import { Link, useLocation } from 'react-router-dom'

const tabs = [
  { label: 'Work', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Resume', to: '/resume' },
]

export default function Nav() {
  const { pathname } = useLocation()

  const isActive = (to: string) =>
    to === '/' ? pathname === '/' : pathname.startsWith(to)

  return (
    <header className="w-full flex justify-end px-8 py-6">
      <nav className="flex items-center gap-6">
        {tabs.map((tab) => (
          <Link
            key={tab.to}
            to={tab.to}
            className={`font-body text-[14px] leading-[1.3] transition-colors whitespace-nowrap ${
              isActive(tab.to)
                ? 'text-light'
                : 'text-light/40 hover:text-light'
            }`}
          >
            {tab.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
