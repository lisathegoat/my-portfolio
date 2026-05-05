interface PlaceholderProps {
  text: string
  className?: string
}

export function InlinePlaceholder({ text, className = '' }: PlaceholderProps) {
  return (
    <span className={`inline-block border border-dashed border-grey/50 rounded-s px-3 py-1 text-grey/60 font-body text-body-sm italic ${className}`}>
      {text}
    </span>
  )
}

export function BlockPlaceholder({ text, className = '' }: PlaceholderProps) {
  return (
    <div className={`border border-dashed border-grey/40 rounded-m px-m py-4 text-grey/50 font-body text-body-sm italic ${className}`}>
      {text}
    </div>
  )
}

interface ImagePlaceholderProps {
  aspectRatio?: 'hero' | 'phone' | 'square'
  label?: string
  className?: string
}

export function ImagePlaceholder({ aspectRatio = 'hero', label, className = '' }: ImagePlaceholderProps) {
  const ratioClass = {
    hero: 'aspect-hero',
    phone: 'aspect-phone',
    square: 'aspect-square',
  }[aspectRatio]

  return (
    <div className={`bg-[#A0F6AE]/10 rounded-card flex items-center justify-center ${ratioClass} ${className}`}>
      {label && (
        <span className="font-body text-body-sm text-[#A0F6AE]/60 italic">{label}</span>
      )}
    </div>
  )
}
