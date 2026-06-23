import CSMediaLightbox from './CSMediaLightbox'
import { ImagePlaceholder } from '../Placeholder'

interface CSMediaSplitProps {
  src?: string
  alt?: string
  placeholderLabel?: string
  heading: string
  body: string
  flip?: boolean
  counter?: string
  minImageHeight?: string
}

export default function CSMediaSplit({ src, alt, placeholderLabel, heading, body, flip = false, counter, minImageHeight = '600px' }: CSMediaSplitProps) {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-xxl items-center ${flip ? 'lg:[direction:rtl]' : ''}`}>
      <div className={flip ? 'lg:[direction:ltr]' : ''}>
        {src ? (
          <CSMediaLightbox
            src={src}
            alt={alt || heading}
            className="w-full rounded-card object-cover"
            style={{ minHeight: minImageHeight }}
          />
        ) : (
          <div style={{ minHeight: minImageHeight }} className="flex">
            <ImagePlaceholder
              aspectRatio="hero"
              label={placeholderLabel || `${heading} — Bild`}
              className="flex-1"
            />
          </div>
        )}
      </div>
      <div className={`flex flex-col gap-4 ${flip ? 'lg:[direction:ltr]' : ''}`}>
        {counter && (
          <span className="font-body text-body-sm text-accent font-medium">{counter}</span>
        )}
        <h3 className="font-body text-body-lg font-medium text-light">{heading}</h3>
        <p className="font-body text-body-md text-light/80">{body}</p>
      </div>
    </div>
  )
}
