import NavV2 from '../components/v2/NavV2'
import FooterV2 from '../components/v2/FooterV2'
import { about } from '../content'

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-mono text-[13px] uppercase tracking-[0.04em] text-[#32404f]/50 md:pt-1">
      {children}
    </h2>
  )
}

// Two-column row: mono label left, content right — same rhythm as the résumé.
function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-3 md:gap-10 py-10 border-t border-[#32404f]/10">
      <SectionLabel>{label}</SectionLabel>
      <div>{children}</div>
    </section>
  )
}

export default function About() {
  return (
    <div className="min-h-screen bg-[#fafcfd] text-[#32404f]">
      <NavV2 active="About" />

      <main className="max-w-[900px] mx-auto px-8 pt-20 md:pt-28 pb-24">

        {/* ── Intro — headline left, portrait right ── */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-center">
          <h1 className="font-tiempos text-[clamp(32px,4.5vw,52px)] tracking-[-0.03em] leading-[1.1] max-w-[520px]">
            {about.intro}
          </h1>
          <div className="w-full md:w-[280px] aspect-[4/5] border border-[#32404f]/10 overflow-hidden shrink-0">
            <img
              src="/images/home/Lisa_C.png"
              alt="Lisa Collmer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* ── Bio ── */}
        <Row label="Bio">
          <p className="font-geist text-[16px] leading-[1.7] text-[#32404f]/75 max-w-[620px]">
            {about.bioShort}
          </p>
        </Row>

        {/* ── Skills ── */}
        <Row label="Skills">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {about.skills.map((group) => (
              <div key={group.category} className="flex flex-col gap-3">
                <span className="font-mono text-[12px] uppercase tracking-[0.04em] text-[#32404f]/40">
                  {group.category}
                </span>
                <ul className="flex flex-col gap-1.5">
                  {group.items.map((item) => (
                    <li key={item} className="font-geist text-[15px] text-[#32404f]/75">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Row>

        {/* ── Education ── */}
        <Row label="Ausbildung">
          <div className="flex flex-col gap-4">
            {about.education.map((edu, i) => (
              <div key={i} className="flex flex-col gap-0.5">
                <span className="font-tiempos text-[17px] tracking-[-0.01em] text-[#32404f]">{edu.degree}</span>
                <span className="font-geist text-[14px] text-[#32404f]/55">{edu.school}</span>
              </div>
            ))}
          </div>
        </Row>

        {/* ── Contact ── */}
        <Row label="Kontakt">
          <div className="flex flex-col gap-5 max-w-[520px]">
            <p className="font-geist text-[16px] leading-[1.7] text-[#32404f]/75">
              {about.contact.text}
            </p>
            <a
              href={`mailto:${about.contact.email}`}
              className="self-start rounded-full bg-[#32404f] px-5 py-2 font-mono text-[12px] uppercase tracking-[0.04em] text-[#fafcfd] hover:bg-[#e65f2e] transition-colors duration-200"
            >
              {about.contact.emailLabel}
            </a>
          </div>
        </Row>

      </main>

      <FooterV2 />
    </div>
  )
}
