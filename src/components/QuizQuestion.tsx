/** Заголовок викторины как в макете — с фиолетовыми акцентами */
export function QuizQuestion({ text }: { text: string }) {
  const parts = text.split(/(снов|за одну)/g)

  return (
    <p className="mx-auto max-w-4xl text-center text-2xl font-light leading-snug text-dream-mist md:text-4xl lg:text-[2.65rem] lg:leading-tight">
      {parts.map((part, i) =>
        part === 'снов' || part === 'за одну' ? (
          <span key={i} className="text-[#b8a8ff]">
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </p>
  )
}
