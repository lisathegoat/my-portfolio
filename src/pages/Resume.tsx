import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function Resume() {
  return (
    <div className="min-h-screen bg-dark text-light">
      <Nav />

      <section className="px-8 pt-[160px] pb-[80px] max-w-[800px] mx-auto">
        <h1 className="font-title-italic text-[clamp(32px,4.5vw,52px)] tracking-[-0.03em] leading-[1.1] text-light mb-8">
          Resume
        </h1>
        <p className="font-body text-[16px] leading-[1.7] text-light/60">
          Coming soon.
        </p>
      </section>

      <Footer />
    </div>
  )
}
