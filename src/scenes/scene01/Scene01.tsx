import { useCallback, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { BackgroundImage } from './BackgroundImage'
import { Overlay } from './Overlay'
import { Content } from './Content'
import { Navigation } from './Navigation'
import { useKeyboardNavigation } from '../../engine/KeyboardNavigation'
import { loadProgress, saveProgress } from '../../engine/ProgressManager'

const SCENE01_ART = '/scenes/scene01.png'
const MAX_STEP = 2

interface Scene01Props {
  onOpenMap?: () => void
}

export function Scene01({ onOpenMap }: Scene01Props) {
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
      className="fixed inset-0 cursor-pointer select-none overflow-hidden bg-[#070B1B]"
      onClick={advance}
      role="presentation"
    >
      <BackgroundImage src={SCENE01_ART} />
      <Overlay />
      <Content
        revealStep={revealStep}
        quizAnswer={quizAnswer}
        onQuizSelect={setQuizAnswer}
      />
      <Navigation
        revealStep={revealStep}
        maxStep={MAX_STEP}
        isComplete={isComplete}
        onOpenMap={() => onOpenMap?.()}
      />
    </motion.div>
  )
}
