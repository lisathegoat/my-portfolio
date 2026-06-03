interface CSTextIntroProps {
  text: string
}

export default function CSTextIntro({ text }: CSTextIntroProps) {
  return (
    <div className="flex flex-col gap-6">
      {text.split('\n\n').map((para, i) => (
        <p key={i} className="font-body text-body-md text-light/80">
          {para}
        </p>
      ))}
    </div>
  )
}
