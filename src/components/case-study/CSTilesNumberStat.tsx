interface StatTile {
  value: string
  label: string
  description?: string
}

interface CSTilesNumberStatProps {
  tiles: StatTile[]
  columns?: 2 | 3 | 4
}

export default function CSTilesNumberStat({ tiles, columns = 4 }: CSTilesNumberStatProps) {
  const colMap = { 2: 'md:grid-cols-2', 3: 'md:grid-cols-3', 4: 'md:grid-cols-4' }

  return (
    <div className={`grid grid-cols-1 ${colMap[columns]} gap-4`}>
      {tiles.map((tile, i) => (
        <div key={i} className="flex flex-col gap-2 border border-white/10 rounded-xl p-6">
          <span className="font-title-italic text-title-sm text-accent">{tile.value}</span>
          <span className="font-body text-body-md font-medium text-light">{tile.label}</span>
          {tile.description && (
            <p className="font-body text-body-sm text-light/50">{tile.description}</p>
          )}
        </div>
      ))}
    </div>
  )
}
