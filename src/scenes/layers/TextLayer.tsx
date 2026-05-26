import { AnimatePresence, motion } from 'framer-motion'
import { QuizGlassButtons } from '../quiz/QuizGlassButtons'

interface TextLayerProps {
  revealStep: number
  quizAnswer: string | null
  onQuizSelect: (id: string) => void
}

export function TextLayer({ revealStep, quizAnswer, onQuizSelect }: TextLayerProps) {
  const showTitle = revealStep >= 0
  const showButtons = revealStep >= 1
  const showNote = revealStep >= 2

  return (
    <motion.div className="relative z-50 max-w-xl">
      <AnimatePresence mode="wait">
        {showTitle && (
          <motion.h1
            key="title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(1.75rem,4.2vw,3.15rem)] font-light leading-[1.15] tracking-tight text-[#DCE8FF]"
          >
            <span className="block">
              Сколько <span className="text-[#b8a8ff]">снов</span>
            </span>
            <span className="block">в среднем видит</span>
            <span className="block">
              человек <span className="text-[#b8a8ff]">за одну</span> ночь?
            </span>
          </motion.h1>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showButtons && (
          <motion.div
            key="buttons"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mt-10"
          >
            <QuizGlassButtons selected={quizAnswer} onSelect={onQuizSelect} />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showNote && (
          <motion.p
            key="note"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8 flex items-center gap-2.5 text-sm text-[#DCE8FF]/45"
          >
            <span className="inline-flex h-[18px] w-[18px] items-center justify-center rounded-full border border-[#DCE8FF]/25">
              <span className="h-1.5 w-1.5 rounded-full bg-[#8879FF]/60" />
            </span>
            Ответ — в самом конце.
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
