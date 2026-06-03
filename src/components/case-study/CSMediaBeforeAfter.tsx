import { useState, useRef, useCallback } from 'react'

interface CSMediaBeforeAfterProps {
  beforeSrc: string
  afterSrc: string
  beforeLabel?: string
  afterLabel?: string
  alt: string
}

export default function CSMediaBeforeAfter({
  beforeSrc,
  afterSrc,
  beforeLabel = 'Vorher',
  afterLabel = 'Nachher',
  alt,
}: CSMediaBeforeAfterProps) {
  const [position, setPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    setPosition((x / rect.width) * 100)
  }, [])

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    dragging.current = true
    ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
    updatePosition(e.clientX)
  }, [updatePosition])

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragging.current) return
    updatePosition(e.clientX)
  }, [updatePosition])

  const onPointerUp = useCallback(() => {
    dragging.current = false
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden rounded-card select-none cursor-col-resize"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
    >
      <img src={afterSrc} alt={`${alt} — ${afterLabel}`} className="w-full block" />

      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <img
          src={beforeSrc}
          alt={`${alt} — ${beforeLabel}`}
          className="w-full block"
          style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%' }}
        />
      </div>

      <div
        className="absolute top-0 bottom-0 w-[2px] bg-accent"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-accent flex items-center justify-center">
          <span className="text-dark text-body-sm font-medium">&harr;</span>
        </div>
      </div>

      <span className="absolute top-4 left-4 font-body text-label uppercase tracking-[0.1em] text-light/70 bg-dark/60 px-3 py-1 rounded-full">
        {beforeLabel}
      </span>
      <span className="absolute top-4 right-4 font-body text-label uppercase tracking-[0.1em] text-light/70 bg-dark/60 px-3 py-1 rounded-full">
        {afterLabel}
      </span>
    </div>
  )
}
