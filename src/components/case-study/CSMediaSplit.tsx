import CSMediaLightbox from './CSMediaLightbox'

interface CSMediaSplitProps {
  src: string
  alt: string
  heading: string
  body: string
  flip?: boolean
}

export default function CSMediaSplit({ src, alt, heading, body, flip = false }: CSMediaSplitProps) {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-xxl items-center ${flip ? 'lg:[direction:rtl]' : ''}`}>
      <div className={flip ? 'lg:[direction:ltr]' : ''}>
        <CSMediaLightbox
          src={src}
          alt={alt}
          className="w-full rounded-card object-cover"
        />
      </div>
      <div className={`flex flex-col gap-4 ${flip ? 'lg:[direction:ltr]' : ''}`}>
        <h3 className="font-body text-body-lg font-medium text-light">{heading}</h3>
        <p className="font-body text-body-md text-light/80">{body}</p>
      </div>
    </div>
  )
}
