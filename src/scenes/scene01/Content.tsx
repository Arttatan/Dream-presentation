import { AnimatePresence, motion } from 'framer-motion'
import { QuizOptions } from '../../components/QuizOptions'

interface ContentProps {
  revealStep: number
  quizAnswer: string | null
  onQuizSelect: (id: string) => void
}

export function Content({ revealStep, quizAnswer, onQuizSelect }: ContentProps) {
  const showTitle = revealStep >= 0
  const showButtons = revealStep >= 1
  const showNote = revealStep >= 2

  return (
    <motion.div className="relative z-50 flex min-h-screen flex-col px-6 pb-28 pt-28 md:px-12 md:pl-[10%] lg:pl-[12%]">
      {/* Центральная зона контента */}
      <motion.div className="flex flex-1 flex-col justify-center">
        <AnimatePresence mode="wait">
          {showTitle && (
            <motion.h1
              key="title"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-2xl text-[clamp(1.85rem,4vw,3.25rem)] font-light leading-[1.12] tracking-tight text-[#DCE8FF]"
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
              key="quiz"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.06 }}
              className="mt-10 max-w-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <QuizOptions selected={quizAnswer} onSelect={onQuizSelect} />
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showNote && (
            <motion.p
              key="note"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="mt-8 flex max-w-2xl items-center gap-2.5 text-sm text-[#DCE8FF]/50"
            >
              <span className="inline-flex h-[18px] w-[18px] items-center justify-center rounded-full border border-[#DCE8FF]/25">
                <span className="h-1.5 w-1.5 rounded-full bg-[#8879FF]/60" />
              </span>
              Ответ — в самом конце.
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}
