import CSMediaLightbox from './CSMediaLightbox'

interface CSMediaFullProps {
  src: string
  alt: string
  caption?: string
}

export default function CSMediaFull({ src, alt, caption }: CSMediaFullProps) {
  return (
    <figure className="flex flex-col gap-3">
      <CSMediaLightbox
        src={src}
        alt={alt}
        className="w-full rounded-card object-cover"
      />
      {caption && (
        <figcaption className="font-body text-body-sm text-grey">{caption}</figcaption>
      )}
    </figure>
  )
}
