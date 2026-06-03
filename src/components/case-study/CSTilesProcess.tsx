interface ProcessTile {
  label: string
  description: string
}

interface CSTilesProcessProps {
  tiles: ProcessTile[]
}

export default function CSTilesProcess({ tiles }: CSTilesProcessProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-l">
      {tiles.map((tile, i) => (
        <div key={i} className="flex flex-col gap-3 border border-white/10 rounded-xl p-6">
          <span className="font-body text-body-sm font-medium text-accent uppercase tracking-[0.08em]">
            {tile.label}
          </span>
          <p className="font-body text-body-sm text-light/70">{tile.description}</p>
        </div>
      ))}
    </div>
  )
}
