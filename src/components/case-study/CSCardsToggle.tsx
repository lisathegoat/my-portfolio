import { useState } from 'react'

interface CSCardsToggleProps {
  title: string
  summary: string
  children: React.ReactNode
  defaultOpen?: boolean
}

export default function CSCardsToggle({ title, summary, children, defaultOpen = false }: CSCardsToggleProps) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border border-white/10 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 p-6 text-left hover:bg-white/[0.02] transition-colors"
      >
        <div className="flex flex-col gap-2">
          <span className="font-body text-body-md font-medium text-accent">{title}</span>
          {!open && (
            <p className="font-body text-body-sm text-light/50">{summary}</p>
          )}
        </div>
        <span
          className="text-grey/60 text-body-md shrink-0 mt-1 transition-transform duration-200"
          style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}
        >
          +
        </span>
      </button>
      {open && (
        <div className="px-6 pb-6 pt-0">
          {children}
        </div>
      )}
    </div>
  )
}
