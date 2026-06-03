interface CSTextStatementProps {
  text: string
}

export default function CSTextStatement({ text }: CSTextStatementProps) {
  return (
    <blockquote className="font-title-italic text-title-sm text-light leading-[1.2] border-l-2 border-accent pl-8 tracking-[-0.03em]">
      {text}
    </blockquote>
  )
}
