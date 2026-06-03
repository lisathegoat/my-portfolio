interface CSHeroImageProps {
  src: string
  alt: string
}

export default function CSHeroImage({ src, alt }: CSHeroImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className="w-full rounded-card object-cover mb-xxl"
    />
  )
}
