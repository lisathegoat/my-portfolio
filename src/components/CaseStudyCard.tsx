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
  videoName?: string
  isPlaceholder?: boolean
}

function ArrowIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6">
      <path stroke="#fff" strokeWidth="1.5" d="M8 8.162h7v7M8 15.162l7-6.989" />
    </svg>
  )
}

export default function CaseStudyCard({
  slug,
  title,
  imageFolder,
  imageName,
  videoName,
  isPlaceholder = false,
}: CaseStudyCardProps) {
  const [hovered, setHovered] = useState(false)
  const imageSrc = imageName ? `${imageFolder}${imageName}` : null
  const videoSrc = videoName ? `${imageFolder}${videoName}` : null

  const inner = (
    <div className="relative w-full aspect-square overflow-hidden rounded-[24px]">
      {videoSrc ? (
        <video
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out will-change-transform"
          style={{ transform: hovered ? 'scale(1.05)' : 'scale(1)' }}
        />
      ) : imageSrc ? (
        <img
          src={imageSrc}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out will-change-transform"
          style={{
            transform: hovered ? 'scale(1.05)' : 'scale(1)',
          }}
        />
      ) : (
        <ImagePlaceholder aspectRatio="square" className="absolute inset-0 w-full h-full !aspect-auto !rounded-none" />
      )}

      {/* Bottom bar — slides up on hover */}
      <div className="w-full px-2 absolute bottom-2 left-0">
        <div
          className="w-full p-3 pl-4 lg:p-6 bg-black/40 backdrop-blur-[25px] rounded-xl lg:rounded-2xl flex justify-between items-center transition-transform duration-500 ease-out"
          style={{
            transform: hovered ? 'translateY(0px)' : 'translateY(200px)',
          }}
        >
          <span className="font-body text-body-sm text-white">{title}</span>
          <ArrowIcon />
        </div>
      </div>
    </div>
  )

  if (isPlaceholder) {
    return (
      <div
        className="opacity-50"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {inner}
      </div>
    )
  }

  const isExternal = slug.startsWith('http')

  if (isExternal) {
    return (
      <a
        href={slug}
        target="_blank"
        rel="noopener noreferrer"
        className="block cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {inner}
      </a>
    )
  }

  return (
    <Link
      to={slug}
      className="block cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {inner}
    </Link>
  )
}
