import { motion } from 'framer-motion'
import { QUIZ_OPTIONS } from '../../data/scenes'

interface QuizGlassButtonsProps {
  selected: string | null
  onSelect: (id: string) => void
}

export function QuizGlassButtons({ selected, onSelect }: QuizGlassButtonsProps) {
  return (
    <motion.div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
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
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            className={`min-w-[7.5rem] rounded-2xl border px-6 py-3.5 backdrop-blur-md transition-shadow duration-300 ${
              active
                ? 'border-[#8879FF]/70 bg-[#5348FF]/40 shadow-[0_0_36px_rgba(136,121,255,0.45)]'
                : 'border-white/12 bg-white/[0.04] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] hover:border-white/25 hover:bg-white/[0.07]'
            }`}
          >
            <span className="text-lg font-medium text-[#DCE8FF]">
              <span className={active ? 'text-white' : 'text-[#8879FF]'}>
                {opt.label})
              </span>{' '}
              {opt.text}
            </span>
          </motion.button>
        )
      })}
    </motion.div>
  )
}
