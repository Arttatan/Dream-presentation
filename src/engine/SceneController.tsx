import { RevealText } from './RevealText'
import { BackgroundAnimator } from './BackgroundAnimator'
import {
  ProgressIndicator,
  SceneChromeHeader,
  SceneDots,
} from '../components/ProgressIndicator'
import { ContinueHint } from '../components/ContinueHint'
import { BackButton } from '../components/BackButton'
import type { SceneDefinition } from '../types/presentation'
import { TOTAL_SCENES } from '../data/scenes'

interface SceneControllerProps {
  scene: SceneDefinition
  revealStep: number
  isSceneComplete: boolean
  progressPercent: number
  quizAnswer: string | null
  onQuizSelect: (id: string) => void
  onOpenMap: () => void
  onDotSelect: (index: number) => void
  onRetreat: () => void
  canRetreat: boolean
}

export function SceneController({
  scene,
  revealStep,
  isSceneComplete,
  progressPercent,
  quizAnswer,
  onQuizSelect,
  onOpenMap,
  onDotSelect,
  onRetreat,
  canRetreat,
}: SceneControllerProps) {
  const currentStep = scene.steps[revealStep] ?? null

  return (
    <div className="relative flex h-dvh w-full flex-col overflow-hidden">
      <BackgroundAnimator backgroundId={scene.background} sceneKey={scene.id} />

      <SceneDots total={TOTAL_SCENES} current={scene.index} onSelect={onDotSelect} />
      <ProgressIndicator percent={progressPercent} sceneLabel={scene.sceneLabel} />
      <SceneChromeHeader
        sceneLabel={scene.sceneLabel}
        navTitle={scene.navTitle}
        onOpenMap={onOpenMap}
      />

      <main
        className={`scene-stage relative z-10 flex min-h-0 flex-1 w-full flex-col overflow-y-auto overscroll-contain ${
          scene.isTitleCard ? 'items-center justify-center' : 'justify-start'
        }`}
      >
        <RevealText
          title={scene.title}
          titleAccent={scene.titleAccent}
          isTitleCard={scene.isTitleCard}
          step={currentStep}
          stepIndex={revealStep}
          quizAnswer={quizAnswer}
          onQuizSelect={onQuizSelect}
        />
      </main>

      <BackButton visible={canRetreat} onBack={onRetreat} />
      <ContinueHint visible={isSceneComplete} />
    </div>
  )
}
