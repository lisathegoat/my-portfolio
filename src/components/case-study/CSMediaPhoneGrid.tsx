import CSMediaLightbox from './CSMediaLightbox'

interface PhoneScreen {
  src: string
  alt: string
  label: string
  description?: string
}

interface CSMediaPhoneGridProps {
  screens: PhoneScreen[]
  columns?: 2 | 3
}

export default function CSMediaPhoneGrid({ screens, columns = 3 }: CSMediaPhoneGridProps) {
  const colClass = columns === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'

  return (
    <div className={`grid grid-cols-1 ${colClass} gap-l`}>
      {screens.map((screen, i) => (
        <div key={i} className="flex flex-col gap-4">
          <CSMediaLightbox
            src={screen.src}
            alt={screen.alt}
            className="w-full rounded-xl object-cover"
          />
          <div className="flex flex-col gap-1">
            <span className="font-body text-body-sm text-accent">{screen.label}</span>
            {screen.description && (
              <p className="font-body text-body-sm text-light/70">{screen.description}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
