import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import type { VersionEntry } from '../versions'

const FRAME_WIDTH = 1440
const FRAME_HEIGHT = 900

// Scales a live iframe of the route down to fit the card — always reflects
// the real page, no manually-maintained screenshots to go stale.
export default function LabPreviewCard({ version }: { version: VersionEntry }) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(0.25)

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const observer = new ResizeObserver(([entry]) => {
      setScale(entry.contentRect.width / FRAME_WIDTH)
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Link to={version.path} className="group block">
      <div
        ref={wrapRef}
        className="relative w-full overflow-hidden rounded-[16px] bg-[#111] border border-white/10 group-hover:border-white/30 transition-colors"
        style={{ aspectRatio: `${FRAME_WIDTH} / ${FRAME_HEIGHT}` }}
      >
        <iframe
          src={version.path}
          title={version.label}
          tabIndex={-1}
          className="absolute top-0 left-0 pointer-events-none"
          style={{
            width: FRAME_WIDTH,
            height: FRAME_HEIGHT,
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
            border: 0,
          }}
        />
      </div>
      <div className="flex items-baseline justify-between mt-3">
        <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-light">
          {version.label}
        </span>
        <span className="font-body text-body-sm text-grey">{version.description}</span>
      </div>
    </Link>
  )
}
