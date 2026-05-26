import { motion } from 'framer-motion'
import { QUIZ_OPTIONS } from '../data/scenes'

interface QuizOptionsProps {
  selected: string | null
  onSelect: (id: string) => void
}

export function QuizOptions({ selected, onSelect }: QuizOptionsProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      {QUIZ_OPTIONS.map((opt) => {
        const active = selected === opt.id
        return (
          <motion.button
            key={opt.id}
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              onSelect(opt.id)
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`min-w-[8.5rem] rounded-2xl border px-7 py-4 backdrop-blur-md transition-shadow duration-300 md:min-w-[9.5rem] md:px-8 md:py-4 ${
              active
                ? 'border-[#8879FF]/70 bg-[#5348FF]/45 shadow-[0_0_32px_rgba(136,121,255,0.4)]'
                : 'border-white/15 bg-black/25 hover:border-white/30 hover:bg-black/35'
            }`}
          >
            <span className="text-xl font-medium text-[#DCE8FF] md:text-2xl">
              <span className={active ? 'text-white' : 'text-[#8879FF]'}>{opt.label})</span>{' '}
              {opt.text}
            </span>
          </motion.button>
        )
      })}
    </div>
  )
}
