import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { about } from '../content'

export default function About() {
  return (
    <div className="min-h-screen bg-dark text-light">
      <Nav />

      {/* Header */}
      <section className="px-[32px] pt-[160px] pb-[80px] max-w-[1400px] mx-auto">
        <h1 className="font-title-italic text-title-xl md:text-[clamp(64px,8vw,150px)] leading-[1.05] tracking-[-0.04em] text-light max-w-[900px]">
          {about.intro}
        </h1>
      </section>

      {/* Bio */}
      <section className="px-[32px] pb-[80px] max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-[64px] items-start">
          <span className="section-label pt-2">Bio</span>
          <div className="flex flex-col gap-6">
            {about.bio.map((para, i) => (
              <p key={i} className="font-body text-body-md text-light/80">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="px-[32px] pb-[80px] max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-[64px] items-start">
          <span className="section-label pt-2">Skills</span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-[32px]">
            {about.skills.map((group) => (
              <div key={group.category} className="flex flex-col gap-4">
                <span className="font-body text-body-sm text-grey uppercase tracking-[0.08em]">
                  {group.category}
                </span>
                <ul className="flex flex-col gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="font-body text-body-sm text-light/80">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="px-[32px] pb-[80px] max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-[64px] items-start">
          <span className="section-label pt-2">Ausbildung</span>
          <div className="flex flex-col gap-6">
            {about.education.map((edu, i) => (
              <div key={i} className="flex flex-col gap-1">
                <span className="font-body text-body-md text-light">{edu.degree}</span>
                <span className="font-body text-body-sm text-grey">{edu.school}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="px-[32px] pb-[120px] max-w-[1400px] mx-auto">
        <div className="border border-white/10 rounded-[32px] p-[48px] flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="font-title-italic text-title-sm text-light">
              {about.contact.headline}
            </h2>
            <p className="font-body text-body-md text-light/70 max-w-[480px]">
              {about.contact.text}
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href={`mailto:${about.contact.email}`} className="btn-accent">
              {about.contact.emailLabel}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
