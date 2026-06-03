interface CSTextCalloutProps {
  text: string
}

export default function CSTextCallout({ text }: CSTextCalloutProps) {
  return (
    <div className="border-l-2 border-accent/40 bg-accent/5 rounded-r-panel pl-8 pr-6 py-6">
      <p className="font-body text-body-md text-light/80">{text}</p>
    </div>
  )
}
