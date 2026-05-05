import { Link, useLocation } from 'react-router-dom'
import { nav } from '../content'

export default function Nav() {
  const { pathname } = useLocation()

  return (
    <header className="w-full px-8 pt-4 pb-0">
      {/* Exact Figma spec: h-[68px] container, px-4 py-2, items p-[18px] */}
      <nav className="flex h-[68px] items-center justify-between px-4 py-2">
        <Link
          to="/"
          className={`font-body text-body-md leading-[1.3] px-[18px] py-[18px] transition-colors whitespace-nowrap ${
            pathname === '/' ? 'text-light underline decoration-1 underline-offset-4' : 'text-light hover:underline hover:underline-offset-4 hover:decoration-1'
          }`}
        >
          {nav.projekte}
        </Link>
        <Link
          to="/about"
          className={`font-body text-body-md leading-[1.3] px-[18px] py-[18px] transition-colors whitespace-nowrap ${
            pathname === '/about' ? 'text-light underline decoration-1 underline-offset-4' : 'text-grey hover:text-light'
          }`}
        >
          {nav.about}
        </Link>
      </nav>
    </header>
  )
}
