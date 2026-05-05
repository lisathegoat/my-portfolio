import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ImagePlaceholder } from './Placeholder'

interface CaseStudyCardProps {
  slug: string
  title: string
  description: string
  tags: string[]
  imageFolder: string
  imageName?: string
  isPlaceholder?: boolean
}

export default function CaseStudyCard({
  slug,
  title,
  description,
  tags,
  imageFolder,
  imageName,
  isPlaceholder = false,
}: CaseStudyCardProps) {
  const [hovered, setHovered] = useState(false)
  const imageSrc = imageName ? `${imageFolder}${imageName}` : null

  const inner = (
    <>
      {/* Image */}
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-card">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <ImagePlaceholder aspectRatio="square" className="w-full h-full !aspect-auto !rounded-card" />
        )}
      </div>

      {/* Meta */}
      <div className="flex flex-col gap-m">
        {/* Title — Neue Montreal 32px as per Figma */}
        <p className={`font-body text-body-lg leading-[1.3] transition-colors duration-200 ${
          hovered ? 'text-accent' : 'text-light'
        }`}>
          {title}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-s items-center">
          {tags.map((tag) => (
            <span
              key={tag}
              className={`font-body text-body-sm border rounded-l px-m py-2 transition-colors duration-200 whitespace-nowrap ${
                hovered
                  ? 'border-accent text-accent'
                  : 'border-grey text-grey'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Description — visible on hover */}
        <p
          className={`font-body text-body-md text-light/70 transition-all duration-300 overflow-hidden ${
            hovered ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          {description}
        </p>
      </div>
    </>
  )

  if (isPlaceholder) {
    return (
      <div
        className="group flex flex-col gap-l opacity-50"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {inner}
      </div>
    )
  }

  return (
    <Link
      to={slug}
      className="group flex flex-col gap-l cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {inner}
    </Link>
  )
}
