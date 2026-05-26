import { motion } from 'framer-motion'

interface TitleCardProps {
  topic: string
  speaker: string
  date: string
}

export function TitleCard({ topic, speaker, date }: TitleCardProps) {
  const [line1, line2] = splitTopic(topic)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="flex w-full flex-col items-center text-center"
    >
      <p className="mb-6 text-xs font-medium uppercase tracking-[0.35em] text-dream-mist/45 md:text-sm">
        Тема презентации
      </p>

      <h1 className="max-w-4xl text-4xl font-light leading-[1.1] tracking-tight text-dream-mist sm:text-5xl md:text-6xl lg:text-7xl">
        {line2 ? (
          <>
            {line1}
            <br />
            <span className="bg-gradient-to-r from-dream-highlight via-dream-accent to-dream-highlight bg-clip-text text-transparent">
              {line2}
            </span>
          </>
        ) : (
          <span className="bg-gradient-to-r from-dream-highlight via-dream-accent to-dream-highlight bg-clip-text text-transparent">
            {line1}
          </span>
        )}
      </h1>

      <div className="mt-14 w-full max-w-md space-y-4 border-t border-white/10 pt-10 md:mt-16 md:pt-12">
        <p className="text-lg text-dream-mist/75 md:text-xl lg:text-2xl">
          <span className="text-dream-mist/45">Спикер · </span>
          <span className="font-medium text-dream-mist">{speaker}</span>
        </p>
        <p className="font-mono text-base tracking-wide text-dream-highlight/90 md:text-lg lg:text-xl">
          {date}
        </p>
      </div>
    </motion.div>
  )
}

function splitTopic(topic: string): [string, string | null] {
  const cleaned = topic.replace(/^[«"]|[»"]$/g, '').trim()
  const match = cleaned.match(/^(.+?)\s+(видим\s+сны\??)$/i)
  if (match) {
    return [match[1].trim(), match[2].trim()]
  }
  return [cleaned, null]
}
