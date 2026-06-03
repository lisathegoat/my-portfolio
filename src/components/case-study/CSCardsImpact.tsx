interface ImpactCard {
  title: string
  body: string
}

interface CSCardsImpactProps {
  cards: ImpactCard[]
  columns?: 2 | 4
}

export default function CSCardsImpact({ cards, columns = 2 }: CSCardsImpactProps) {
  const colClass = columns === 4 ? 'md:grid-cols-4' : 'md:grid-cols-2'

  return (
    <div className={`grid grid-cols-1 ${colClass} gap-4`}>
      {cards.map((card, i) => (
        <div key={i} className="flex flex-col gap-3 border border-white/10 rounded-xl p-6">
          <span className="font-body text-body-md font-medium text-accent">{card.title}</span>
          <p className="font-body text-body-md text-light/70">{card.body}</p>
        </div>
      ))}
    </div>
  )
}
