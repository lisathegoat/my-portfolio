import CSMediaLightbox from './CSMediaLightbox'
import { ImagePlaceholder } from '../Placeholder'

interface TouchpointItem {
  title: string
  body: string
  src?: string
  alt?: string
  placeholderLabel?: string
}

interface CSTouchpointStackProps {
  items: TouchpointItem[]
}

export default function CSTouchpointStack({ items }: CSTouchpointStackProps) {
  return (
    <div className="flex flex-col gap-xxl">
      {items.map((item, i) => (
        <div key={i} className="flex flex-col gap-4">
          <h3 className="font-body text-body-md font-medium text-light">{item.title}</h3>
          <p className="font-body text-body-md text-light/70">{item.body}</p>
          {item.src ? (
            <CSMediaLightbox
              src={item.src}
              alt={item.alt || item.title}
              className="w-full rounded-card object-cover"
            />
          ) : (
            <ImagePlaceholder
              aspectRatio="hero"
              label={item.placeholderLabel || `${item.title} — Bild fehlt`}
            />
          )}
        </div>
      ))}
    </div>
  )
}
