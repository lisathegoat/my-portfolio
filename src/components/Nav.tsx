import { Link, useLocation } from 'react-router-dom'
import { nav } from '../content'

export default function Nav() {
  const { pathname } = useLocation()
  const onHome = pathname === '/'

  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-xl py-m">
      <nav className="flex items-center justify-between px-m py-s max-w-full">
        <Link
          to="/"
          className={`font-body text-body-md leading-[1.3] px-[18px] py-[18px] transition-colors ${
            onHome ? 'text-light underline' : 'text-light hover:underline'
          }`}
        >
          {nav.projekte}
        </Link>
        <Link
          to="/about"
          className={`font-body text-body-md leading-[1.3] px-[18px] py-[18px] transition-colors ${
            pathname === '/about' ? 'text-light underline' : 'text-grey hover:text-light'
          }`}
        >
          {nav.about}
        </Link>
      </nav>
    </header>
  )
}
