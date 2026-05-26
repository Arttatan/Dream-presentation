import { AnimatePresence, motion } from 'framer-motion'
import type { RevealStep } from '../types/presentation'
import { RichText } from '../components/RichText'
import { QuizOptions } from '../components/QuizOptions'
import { TitleCard } from '../components/TitleCard'

interface RevealTextProps {
  title: string
  titleAccent?: string
  isTitleCard?: boolean
  step: RevealStep | null
  stepIndex: number
  quizAnswer: string | null
  onQuizSelect: (id: string) => void
}

export function RevealText({
  title,
  titleAccent,
  isTitleCard,
  step,
  stepIndex,
  quizAnswer,
  onQuizSelect,
}: RevealTextProps) {
  if (isTitleCard && step?.type === 'title-card') {
    return (
      <div
        className="relative z-20 flex w-full max-w-5xl cursor-text select-text items-center justify-center px-6 pb-28 pt-8 md:px-12 md:pb-32"
        onClick={(e) => e.stopPropagation()}
      >
        <TitleCard
          topic={step.text ?? ''}
          speaker={step.speaker ?? ''}
          date={step.date ?? ''}
        />
      </div>
    )
  }

  return (
    <div
      className="scene-content relative z-20 w-full cursor-text select-text"
      onClick={(e) => e.stopPropagation()}
    >
      <h1 className="scene-title">
        {title}
        {titleAccent && (
          <>
            <br />
            <span className="bg-gradient-to-r from-dream-highlight to-dream-accent bg-clip-text text-transparent">
              {titleAccent}
            </span>
          </>
        )}
      </h1>

      <div className="mt-8 min-h-[8rem] md:min-h-[10rem]">
        <AnimatePresence mode="wait">
          {step && (
            <motion.div
              key={`${stepIndex}-${step.type}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="scene-body"
            >
              {step.type === 'heading' && step.text && (
                <p className="scene-heading">
                  <RichText text={step.text} />
                </p>
              )}
              {step.type === 'paragraph' && step.text && (
                <p>
                  <RichText text={step.text} />
                </p>
              )}
              {step.type === 'note' && step.text && (
                <p className="scene-note">
                  <RichText text={step.text} />
                </p>
              )}
              {step.type === 'list' && step.items && (
                <ul className="scene-list scene-body">
                  {step.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-dream-highlight">·</span>
                      <RichText text={item} />
                    </li>
                  ))}
                </ul>
              )}
              {step.type === 'quiz' && (
                <QuizOptions selected={quizAnswer} onSelect={onQuizSelect} />
              )}
              {step.type === 'quiz-panel' && (
                <div className="space-y-6">
                  {step.text && (
                    <p className="scene-heading">
                      <RichText text={step.text} />
                    </p>
                  )}
                  <QuizOptions selected={quizAnswer} onSelect={onQuizSelect} />
                  {step.note && (
                    <p className="scene-note">
                      <RichText text={step.note} />
                    </p>
                  )}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
