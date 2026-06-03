import { useState, useEffect, useCallback } from 'react'

interface CSMediaLightboxProps {
  src: string
  alt: string
  className?: string
  children?: React.ReactNode
}

export default function CSMediaLightbox({ src, alt, className = '' }: CSMediaLightboxProps) {
  const [open, setOpen] = useState(false)

  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, close])

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={`cursor-zoom-in transition-opacity duration-200 hover:opacity-90 ${className}`}
        onClick={() => setOpen(true)}
      />

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-dark/95 backdrop-blur-sm"
          onClick={close}
        >
          <button
            onClick={close}
            className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-light/70 hover:text-light hover:border-white/40 transition-colors text-body-md"
            aria-label="Close"
          >
            &times;
          </button>
          <img
            src={src}
            alt={alt}
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-panel"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}
