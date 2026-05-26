interface RichTextProps {
  text: string
  className?: string
}

export function RichText({ text, className = '' }: RichTextProps) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)

  return (
    <span className={className}>
      {parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <span key={i} className="text-dream-highlight font-medium">
              {part.slice(2, -2)}
            </span>
          )
        }
        return <span key={i}>{part}</span>
      })}
    </span>
  )
}
