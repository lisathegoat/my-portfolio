import CSMediaLightbox from './CSMediaLightbox'

interface DecisionCard {
  src: string
  alt: string
  title: string
  body: string
}

interface CSCardsDecisionProps {
  cards: DecisionCard[]
}

export default function CSCardsDecision({ cards }: CSCardsDecisionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-l">
      {cards.map((card, i) => (
        <div key={i} className="flex flex-col gap-4">
          <CSMediaLightbox
            src={card.src}
            alt={card.alt}
            className="w-full rounded-xl object-cover aspect-square"
          />
          <h3 className="font-body text-body-md font-medium text-light">{card.title}</h3>
          <p className="font-body text-body-sm text-light/70">{card.body}</p>
        </div>
      ))}
    </div>
  )
}
