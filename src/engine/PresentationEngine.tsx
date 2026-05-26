import { useCallback, useEffect, useMemo, useState } from 'react'
import { scenes } from '../data/scenes'
import { useKeyboardNavigation } from './KeyboardNavigation'
import { getGlobalProgress, loadProgress, saveProgress } from './ProgressManager'
import { SceneController } from './SceneController'
import { SectionMap } from '../components/SectionMap'

export function PresentationEngine() {
  const saved = loadProgress()
  const initialSceneIndex = saved?.sceneIndex ?? 0
  const initialRevealStep = Math.min(
    saved?.revealStep ?? 0,
    scenes[initialSceneIndex].steps.length - 1,
  )
  const [sceneIndex, setSceneIndex] = useState(initialSceneIndex)
  const [revealStep, setRevealStep] = useState(initialRevealStep)
  const [quizAnswer, setQuizAnswer] = useState<string | null>(null)
  const [mapOpen, setMapOpen] = useState(false)

  const scene = scenes[sceneIndex]
  const maxStep = scene.steps.length - 1
  const isSceneComplete = revealStep >= maxStep

  const progressPercent = useMemo(
    () => getGlobalProgress(sceneIndex, revealStep),
    [sceneIndex, revealStep],
  )

  useEffect(() => {
    saveProgress({ sceneIndex, revealStep })
  }, [sceneIndex, revealStep])

  const goToScene = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(scenes.length - 1, index))
    setSceneIndex(clamped)
    setRevealStep(0)
  }, [])

  const advance = useCallback(() => {
    if (mapOpen) return

    if (!isSceneComplete) {
      setRevealStep((s) => Math.min(maxStep, s + 1))
      return
    }

    if (sceneIndex < scenes.length - 1) {
      setSceneIndex((i) => i + 1)
      setRevealStep(0)
    }
  }, [isSceneComplete, maxStep, sceneIndex, mapOpen])

  const retreat = useCallback(() => {
    if (mapOpen) return

    if (revealStep > 0) {
      setRevealStep((s) => s - 1)
      return
    }

    if (sceneIndex > 0) {
      const prev = scenes[sceneIndex - 1]
      setSceneIndex(sceneIndex - 1)
      setRevealStep(prev.steps.length - 1)
    }
  }, [revealStep, sceneIndex, mapOpen])

  useKeyboardNavigation({
    enabled: !mapOpen,
    onAdvance: advance,
    onRetreat: retreat,
    onToggleMap: () => setMapOpen((o) => !o),
  })

  const handleSurfaceClick = () => {
    if (mapOpen) return
    const selection = window.getSelection()
    if (selection && selection.toString().length > 0) return
    advance()
  }

  const canRetreat = sceneIndex > 0 || revealStep > 0

  return (
    <div
      className="fixed inset-0 cursor-default bg-dream-base text-dream-mist"
      onClick={handleSurfaceClick}
      role="presentation"
    >
      <SceneController
        scene={scene}
        revealStep={revealStep}
        isSceneComplete={isSceneComplete}
        progressPercent={progressPercent}
        quizAnswer={quizAnswer}
        onQuizSelect={setQuizAnswer}
        onOpenMap={() => setMapOpen(true)}
        onDotSelect={goToScene}
        onRetreat={retreat}
        canRetreat={canRetreat}
      />

      <SectionMap
        open={mapOpen}
        currentIndex={sceneIndex}
        onClose={() => setMapOpen(false)}
        onSelect={goToScene}
      />

      {sceneIndex === scenes.length - 1 && isSceneComplete && (
        <p className="pointer-events-none fixed bottom-20 left-1/2 z-30 -translate-x-1/2 text-center text-xs text-dream-mist/30 md:text-sm">
          ↑ вернуться · Esc — карта сновидений
        </p>
      )}
    </div>
  )
}
