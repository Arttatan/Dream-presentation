export type BackgroundId =
  | 'cosmos'
  | 'bedroom-dream'
  | 'intro-photo'
  | 'ancient-photo'
  | 'ancient'
  | 'freud-photo'
  | 'freud'
  | 'memory-photo'
  | 'memory'
  | 'forgetting-photo'
  | 'forgetting'
  | 'activation-photo'
  | 'activation'
  | 'danger-photo'
  | 'danger'
  | 'stress-photo'
  | 'stress'
  | 'benzene-photo'
  | 'benzene'
  | 'lucid'
  | 'galaxy'
  | 'finale-audience'

export type RevealStepType =
  | 'heading'
  | 'paragraph'
  | 'list'
  | 'quiz'
  | 'quiz-panel'
  | 'title-card'
  | 'note'

export interface RevealStep {
  type: RevealStepType
  text?: string
  note?: string
  speaker?: string
  date?: string
  items?: string[]
}

export interface SceneDefinition {
  id: string
  index: number
  navTitle: string
  sceneLabel: string
  title: string
  titleAccent?: string
  background: BackgroundId
  steps: RevealStep[]
  isQuiz?: boolean
  isTitleCard?: boolean
}

export interface PresentationState {
  sceneIndex: number
  revealStep: number
  quizAnswer: string | null
}

export const STORAGE_KEY = 'present-dream-state-v3'
