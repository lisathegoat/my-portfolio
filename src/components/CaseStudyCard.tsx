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
}

export default function CaseStudyCard({
  slug,
  title,
  description,
  tags,
  imageFolder,
  imageName,
}: CaseStudyCardProps) {
  const [hovered, setHovered] = useState(false)
  const imageSrc = imageName ? `${imageFolder}${imageName}` : null

  return (
    <Link
      to={slug}
      className="group flex flex-col gap-l cursor-pointer w-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
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
      <div className={`flex flex-col gap-${hovered ? 's' : 'm'} transition-all duration-200`}>
        {/* Title row + tags */}
        <div className="flex flex-wrap items-start gap-s">
          <h3 className={`font-title-italic text-title-sm text-light flex-1 min-w-0 transition-colors duration-200 ${hovered ? 'text-accent-light' : 'text-light'}`}>
            {title}
          </h3>
          <div className={`flex flex-wrap gap-s items-center ${hovered ? 'justify-start' : 'justify-end'} flex-shrink-0`}>
            {tags.map((tag) => (
              <span
                key={tag}
                className={`font-body text-body-sm border rounded-l px-m py-2 transition-colors duration-200 whitespace-nowrap ${
                  hovered
                    ? 'border-accent-light text-accent-light'
                    : 'border-grey text-grey'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
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
    </Link>
  )
}
