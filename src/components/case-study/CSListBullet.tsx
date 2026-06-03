interface CSListBulletProps {
  items: string[]
}

export default function CSListBullet({ items }: CSListBulletProps) {
  return (
    <ul className="flex flex-col gap-4 pl-0">
      {items.map((item, i) => (
        <li key={i} className="flex gap-4 items-start">
          <span className="font-body text-body-sm text-accent mt-1 shrink-0">&mdash;</span>
          <span className="font-body text-body-md text-light/80">{item}</span>
        </li>
      ))}
    </ul>
  )
}
