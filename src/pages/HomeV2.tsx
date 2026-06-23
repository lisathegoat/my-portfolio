import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { home, caseStudies, about } from '../content'
import Footer from '../components/Footer'
import { ImagePlaceholder } from '../components/Placeholder'

const projects = [
  caseStudies.fyta,
  caseStudies.probe,
  caseStudies.thesis,
]

function ArrowIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6">
      <path stroke="#fff" strokeWidth="1.5" d="M8 8.162h7v7M8 15.162l7-6.989" />
    </svg>
  )
}

function DragCarouselCard({ slug, title, imageFolder, cover, coverVideo }: {
  slug: string
  title: string
  imageFolder: string
  cover?: string
  coverVideo?: string
}) {
  const [hovered, setHovered] = useState(false)
  const src = cover ? `${imageFolder}${cover}` : null
  const videoSrc = coverVideo ? `${imageFolder}${coverVideo}` : null

  return (
    <Link
      to={slug}
      className="shrink-0 w-[70vw] md:w-[45vw] lg:w-[38vw] aspect-square block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      draggable={false}
    >
      <div className="w-full h-full rounded-2xl lg:rounded-3xl relative overflow-hidden cursor-pointer">
        <div className="absolute inset-0">
          {videoSrc ? (
            <video
              src={videoSrc}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover transition-transform duration-700 ease-out select-none"
              style={{ transform: hovered ? 'scale(1.05)' : 'scale(1)' }}
            />
          ) : src ? (
            <img
              src={src}
              alt={title}
              draggable={false}
              className="w-full h-full object-cover transition-transform duration-700 ease-out select-none"
              style={{ transform: hovered ? 'scale(1.05)' : 'scale(1)' }}
            />
          ) : (
            <ImagePlaceholder aspectRatio="square" className="w-full h-full !aspect-auto !rounded-none" />
          )}
        </div>
        <div className="w-full px-2 absolute bottom-2 left-0">
          <div
            className="w-full p-3 pl-4 lg:p-6 bg-black/40 backdrop-blur-[25px] rounded-xl lg:rounded-2xl flex justify-between items-center transition-transform duration-500 ease-out"
            style={{ transform: hovered ? 'translateY(0px)' : 'translateY(200px)' }}
          >
            <span className="font-v2 text-[15px] text-white tracking-[-0.01em]">{title}</span>
            <ArrowIcon />
          </div>
        </div>
      </div>
    </Link>
  )
}

function DragCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollStart = useRef(0)
  const didDrag = useRef(false)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const onDown = (e: PointerEvent) => {
      isDragging.current = true
      didDrag.current = false
      startX.current = e.clientX
      scrollStart.current = track.scrollLeft
      track.setPointerCapture(e.pointerId)
      track.style.cursor = 'grabbing'
      track.style.scrollSnapType = 'none'
    }

    const onMove = (e: PointerEvent) => {
      if (!isDragging.current) return
      const dx = e.clientX - startX.current
      if (Math.abs(dx) > 4) didDrag.current = true
      track.scrollLeft = scrollStart.current - dx
    }

    const onUp = (e: PointerEvent) => {
      if (!isDragging.current) return
      isDragging.current = false
      track.releasePointerCapture(e.pointerId)
      track.style.cursor = 'grab'
      track.style.scrollSnapType = 'x mandatory'
    }

    const onClick = (e: MouseEvent) => {
      if (didDrag.current) {
        e.preventDefault()
        e.stopPropagation()
      }
    }

    track.addEventListener('pointerdown', onDown)
    track.addEventListener('pointermove', onMove)
    track.addEventListener('pointerup', onUp)
    track.addEventListener('pointercancel', onUp)
    track.addEventListener('click', onClick, true)

    return () => {
      track.removeEventListener('pointerdown', onDown)
      track.removeEventListener('pointermove', onMove)
      track.removeEventListener('pointerup', onUp)
      track.removeEventListener('pointercancel', onUp)
      track.removeEventListener('click', onClick, true)
    }
  }, [])

  return (
    <div
      ref={trackRef}
      className="flex gap-4 lg:gap-8 overflow-x-auto px-8 cursor-grab select-none scrollbar-hide"
      style={{
        scrollSnapType: 'x mandatory',
        WebkitOverflowScrolling: 'touch',
      }}
    >
      {projects.map((p) => (
        <div key={p.slug} style={{ scrollSnapAlign: 'start' }}>
          <DragCarouselCard
            slug={p.slug}
            title={p.shortTitle}
            imageFolder={p.meta.imageFolder}
            cover={(p.meta as { cover?: string }).cover}
            coverVideo={(p.meta as { coverVideo?: string }).coverVideo}
          />
        </div>
      ))}
      <div className="shrink-0 w-4" aria-hidden />
    </div>
  )
}

function MinimalNav() {
  return (
    <header className="w-full px-8 py-6 flex items-center justify-between">
      <Link
        to="/v2"
        className="font-v2 text-[15px] tracking-[-0.01em] text-light hover:text-accent transition-colors"
      >
        Lisa Haupt
      </Link>
      <div className="flex items-center gap-8">
        <Link
          to="/about"
          className="font-v2 text-[15px] tracking-[-0.01em] text-grey/60 hover:text-light transition-colors"
        >
          About
        </Link>
        <a
          href={`mailto:${home.footer.email}`}
          className="font-v2 text-[15px] tracking-[-0.01em] text-grey/60 hover:text-light transition-colors"
        >
          Contact
        </a>
      </div>
    </header>
  )
}

export default function HomeV2() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const raf = requestAnimationFrame(() => setMounted(true))
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div className="bg-dark text-light min-h-screen font-v2">

      <MinimalNav />

      {/* ── Hero — compact intro + photo ── */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-8 px-8 pt-[40px] pb-[56px]">
        <div
          className="overflow-hidden bg-grey/20 shrink-0 transition-all duration-1000 ease-out"
          style={{
            width: 'clamp(200px, 22vw, 320px)',
            height: 'clamp(116px, 13vw, 184px)',
            borderRadius: '100px',
            opacity: mounted ? 1 : 0,
            transform: `translateY(${mounted ? 0 : 20}px)`,
            transitionDelay: '100ms',
          }}
        >
          <img
            src="/images/home/Lisa_C.png"
            alt="Lisa"
            className="w-full h-full object-cover object-top"
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
          />
        </div>

        <div
          className="flex flex-col items-center md:items-start gap-2 transition-all duration-1000 ease-out"
          style={{
            opacity: mounted ? 1 : 0,
            transform: `translateY(${mounted ? 0 : 16}px)`,
            transitionDelay: '300ms',
          }}
        >
          <p className="text-[clamp(22px,2.4vw,32px)] tracking-[-0.02em] leading-[1.4] text-center md:text-left">
            <span className="text-accent">{home.hero.intro}</span>
            <br />
            <span className="text-grey/70">{home.hero.introSub}</span>
          </p>
        </div>
      </section>

      {/* ── Selected Work — drag/scroll carousel ── */}
      <section className="pb-[80px]">
        <div className="flex items-center justify-between px-8 mb-6">
          <span
            className="text-[12px] font-medium uppercase tracking-[0.12em] text-grey/50 transition-all duration-1000 ease-out"
            style={{
              opacity: mounted ? 1 : 0,
              transitionDelay: '500ms',
            }}
          >
            Selected Work
          </span>
        </div>
        <div
          className="transition-all duration-1000 ease-out"
          style={{
            opacity: mounted ? 1 : 0,
            transform: `translateY(${mounted ? 0 : 30}px)`,
            transitionDelay: '600ms',
          }}
        >
          <DragCarousel />
        </div>
      </section>

      {/* ── About teaser ── */}
      <section className="px-8 pb-[80px]">
        <div className="max-w-[720px]">
          <p className="text-[18px] tracking-[-0.01em] text-light/60 leading-[1.65] mb-6">{about.bio[0]}</p>
          <Link
            to="/about"
            className="text-[15px] tracking-[-0.01em] text-accent hover:text-light transition-colors inline-flex items-center gap-2"
          >
            About me →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
