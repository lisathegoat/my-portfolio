interface CSReviewCardProps {
  label: string
  notes: string[]
}

export default function CSReviewCard({ label, notes }: CSReviewCardProps) {
  return (
    <div className="flex flex-col gap-3 p-6 border border-white/10 rounded-xl">
      <span className="font-body text-body-sm font-medium text-accent">{label}</span>
      <ul className="flex flex-col gap-2">
        {notes.map((note, j) => (
          <li key={j} className="flex gap-3 items-start">
            <span className="text-grey/40 shrink-0 mt-1">&mdash;</span>
            <span className="font-body text-body-sm text-light/70">{note}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
