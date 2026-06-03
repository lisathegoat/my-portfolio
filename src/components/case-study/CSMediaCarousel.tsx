import { useState } from 'react'
import CSMediaLightbox from './CSMediaLightbox'

interface CarouselSlide {
  src: string
  alt: string
  caption?: string
}

interface CSMediaCarouselProps {
  slides: CarouselSlide[]
}

export default function CSMediaCarousel({ slides }: CSMediaCarouselProps) {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1))

  return (
    <div className="flex flex-col gap-4">
      <div className="relative">
        <CSMediaLightbox
          src={slides[current].src}
          alt={slides[current].alt}
          className="w-full rounded-card object-cover"
        />

        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/20 bg-dark/60 text-light/70 hover:text-light hover:border-white/40 transition-colors flex items-center justify-center"
          aria-label="Previous"
        >
          &larr;
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/20 bg-dark/60 text-light/70 hover:text-light hover:border-white/40 transition-colors flex items-center justify-center"
          aria-label="Next"
        >
          &rarr;
        </button>
      </div>

      {slides[current].caption && (
        <p className="font-body text-body-sm text-grey">{slides[current].caption}</p>
      )}

      <div className="flex items-center justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === current ? 'bg-accent' : 'bg-white/20'
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
