interface CSCardsHighlightProps {
  children: React.ReactNode
}

export default function CSCardsHighlight({ children }: CSCardsHighlightProps) {
  return (
    <div className="bg-accent/10 -mx-xl px-xl py-xxl rounded-[32px] my-xxl">
      {children}
    </div>
  )
}
