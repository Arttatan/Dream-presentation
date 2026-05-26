import type { PresentationState } from '../types/presentation'
import { STORAGE_KEY } from '../types/presentation'
import { scenes } from '../data/scenes'

export function loadProgress(): PresentationState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as PresentationState
    if (
      typeof parsed.sceneIndex !== 'number' ||
      typeof parsed.revealStep !== 'number' ||
      parsed.sceneIndex < 0 ||
      parsed.sceneIndex >= scenes.length
    ) {
      return null
    }
    return parsed
  } catch {
    return null
  }
}

export function saveProgress(
  state: Pick<PresentationState, 'sceneIndex' | 'revealStep'>,
): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
}

export function clearProgress(): void {
  localStorage.removeItem(STORAGE_KEY)
}

export function getGlobalProgress(sceneIndex: number, revealStep: number): number {
  const totalSteps = scenes.reduce((acc, s) => acc + s.steps.length, 0)
  let completed = 0
  for (let i = 0; i < scenes.length; i++) {
    if (i < sceneIndex) {
      completed += scenes[i].steps.length
    } else if (i === sceneIndex) {
      completed += revealStep + 1
    }
  }
  return Math.min(100, Math.round((completed / totalSteps) * 100))
}
