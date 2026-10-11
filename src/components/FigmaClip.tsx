import { useEffect, useState } from 'react'

type Props = {
  /** Path without extension under /media, e.g. "probe-diagnosing". Needs .webm, .mp4 and -poster.jpg. */
  name: string
  caption?: string
  /** Max display width in px. Clip keeps its native aspect ratio. */
  maxWidth?: number
}

// Phone-frame corner radius as a share of the clip width (44px on a 375px frame).
const CORNER = '11.7cqw'

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const onChange = () => setReduced(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])
  return reduced
}

// Looping clip exported from Figma animation. Reduced-motion users get the poster only.
export default function FigmaClip({ name, caption, maxWidth = 280 }: Props) {
  const reduced = usePrefersReducedMotion()
  const base = `/media/${name}`

  return (
    <figure style={{ maxWidth, width: '100%' }} className="m-0">
      <div style={{ containerType: 'inline-size' }}>
        <div style={{ borderRadius: CORNER }} className="overflow-hidden">
          {reduced ? (
            <img src={`${base}-poster.jpg`} alt={caption ?? ''} className="block w-full h-auto" />
          ) : (
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              poster={`${base}-poster.jpg`}
              aria-label={caption}
              className="block w-full h-auto"
            >
              <source src={`${base}.webm`} type="video/webm" />
              <source src={`${base}.mp4`} type="video/mp4" />
            </video>
          )}
        </div>
      </div>
      {caption && (
        <figcaption className="font-mono text-[11px] uppercase tracking-[0.15em] text-grey mt-3">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
