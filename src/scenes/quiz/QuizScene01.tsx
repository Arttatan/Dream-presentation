import { useCallback, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { SceneShell } from '../SceneShell'
import {
  BackgroundLayer,
  AtmosphereLayer,
  ArtworkLayer,
  TextLayer,
  ControlsLayer,
} from '../layers'
import { useKeyboardNavigation } from '../../engine/KeyboardNavigation'
import { loadProgress, saveProgress } from '../../engine/ProgressManager'

const MAX_STEP = 2

interface QuizScene01Props {
  onOpenMap?: () => void
}

export function QuizScene01({ onOpenMap }: QuizScene01Props) {
  const saved = loadProgress()
  const [revealStep, setRevealStep] = useState(
    saved?.sceneIndex === 0 ? Math.min(saved.revealStep, MAX_STEP) : 0,
  )
  const [quizAnswer, setQuizAnswer] = useState<string | null>(saved?.quizAnswer ?? null)

  const isComplete = revealStep >= MAX_STEP

  useEffect(() => {
    saveProgress({ sceneIndex: 0, revealStep })
  }, [revealStep])

  const advance = useCallback(() => {
    if (!isComplete) setRevealStep((s) => Math.min(s + 1, MAX_STEP))
  }, [isComplete])

  const retreat = useCallback(() => {
    if (revealStep > 0) setRevealStep((s) => s - 1)
  }, [revealStep])

  useKeyboardNavigation({
    enabled: true,
    onAdvance: advance,
    onRetreat: retreat,
    onToggleMap: () => onOpenMap?.(),
  })

  return (
    <motion.div
      className="fixed inset-0 cursor-pointer select-none"
      onClick={advance}
      role="presentation"
    >
      <SceneShell
        background={<BackgroundLayer />}
        atmosphere={<AtmosphereLayer />}
        artwork={<ArtworkLayer />}
        text={
          <TextLayer
            revealStep={revealStep}
            quizAnswer={quizAnswer}
            onQuizSelect={setQuizAnswer}
          />
        }
        controls={
          <ControlsLayer
            revealStep={revealStep}
            maxStep={MAX_STEP}
            isComplete={isComplete}
            onOpenMap={() => onOpenMap?.()}
          />
        }
      />
    </motion.div>
  )
}
