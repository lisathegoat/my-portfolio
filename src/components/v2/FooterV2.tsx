import { Link } from 'react-router-dom'
import { home } from '../../content'

// Shared across every V2-styled page. See NavV2 for the same rationale.
export default function FooterV2() {
  return (
    <footer className="border-t border-[#32404f]/10 px-6 md:px-[60px] h-16 flex items-center justify-between">
      <p className="font-mono text-[13px] md:text-[15px] uppercase tracking-[0.02em] text-[#32404f]/60">
        Designed &amp; Coded by Lisa Collmer
      </p>
      <div className="flex items-center gap-5 md:gap-8">
        <a
          href={`mailto:${home.footer.email}`}
          className="font-mono text-[13px] md:text-[15px] uppercase tracking-[0.02em] text-[#32404f]/60 hover:text-[#32404f] transition-colors"
        >
          Email
        </a>
        <Link to="/" className="font-mono text-[13px] md:text-[15px] uppercase tracking-[0.02em] text-[#32404f]/60 hover:text-[#32404f] transition-colors">
          Layout V1
        </Link>
        <Link to="/about" className="font-mono text-[13px] md:text-[15px] uppercase tracking-[0.02em] text-[#32404f]/60 hover:text-[#32404f] transition-colors">
          About
        </Link>
      </div>
    </footer>
  )
}
