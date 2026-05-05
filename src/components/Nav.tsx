import { Link, useLocation } from 'react-router-dom'
import { nav } from '../content'

export default function Nav() {
  const { pathname } = useLocation()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-xl py-m">
      <nav className="flex items-center justify-between px-m py-s rounded-xxl bg-dark/80 backdrop-blur-md border border-white/10 max-w-[1600px] mx-auto">
        <Link
          to="/"
          className="font-body text-body-md text-light px-[18px] py-[18px] rounded-[60px] transition-colors hover:text-accent leading-[1.3]"
        >
          Lisa
        </Link>
        <div className="flex items-center gap-2">
          <Link
            to="/"
            className={`font-body text-body-md px-[18px] py-[18px] rounded-[60px] transition-colors leading-[1.3] ${
              pathname === '/' ? 'text-accent' : 'text-light hover:text-accent'
            }`}
          >
            {nav.projekte}
          </Link>
          <Link
            to="/about"
            className={`font-body text-body-md px-[18px] py-[18px] rounded-[60px] transition-colors leading-[1.3] ${
              pathname === '/about' ? 'text-accent' : 'text-light hover:text-accent'
            }`}
          >
            {nav.about}
          </Link>
        </div>
      </nav>
    </header>
  )
}
