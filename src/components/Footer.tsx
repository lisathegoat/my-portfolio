import { Link } from 'react-router-dom'
import { footer } from '../content'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-xl py-xxl mt-[120px]">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="flex flex-col gap-2">
          <span className="font-title-italic text-title-sm text-light">{footer.name}</span>
          <span className="font-body text-body-sm text-grey">{footer.tagline}</span>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <a
            href={`mailto:${footer.email}`}
            className="font-body text-body-sm text-grey hover:text-light transition-colors"
          >
            {footer.email}
          </a>
          <span className="font-body text-body-sm text-grey/40 hidden md:block">·</span>
          <Link
            to="/about"
            className="font-body text-body-sm text-grey hover:text-light transition-colors"
          >
            About
          </Link>
        </div>
        <span className="font-body text-body-sm text-grey/40">{footer.copyright}</span>
      </div>
    </footer>
  )
}
