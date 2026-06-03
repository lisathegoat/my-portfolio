import CSMediaLightbox from './CSMediaLightbox'

interface ScrollStep {
  heading: string
  body: string
}

interface CSMediaStickyScrollProps {
  src: string
  alt: string
  steps: ScrollStep[]
}

export default function CSMediaStickyScroll({ src, alt, steps }: CSMediaStickyScrollProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-xxl">
      <div className="lg:sticky lg:top-[120px] lg:self-start">
        <CSMediaLightbox
          src={src}
          alt={alt}
          className="w-full rounded-card object-cover"
        />
      </div>
      <div className="flex flex-col gap-xxl">
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col gap-3">
            <span className="font-body text-body-sm text-accent font-medium">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="font-body text-body-lg font-medium text-light">{step.heading}</h3>
            <p className="font-body text-body-md text-light/70">{step.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
