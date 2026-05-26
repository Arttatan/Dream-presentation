import type { BackgroundId } from '../types/presentation'

export interface PhotoBackgroundConfig {
  src: string
  position: string
  strong?: boolean
}

export const PHOTO_BACKGROUNDS = new Set<BackgroundId>([
  'intro-photo',
  'ancient-photo',
  'freud-photo',
  'memory-photo',
  'forgetting-photo',
  'activation-photo',
  'danger-photo',
  'stress-photo',
  'benzene-photo',
])

export const PHOTO_SCENE_CONFIG: Partial<Record<BackgroundId, PhotoBackgroundConfig>> = {
  'intro-photo': { src: '/backgrounds/intro-son1.png', position: '72% center', strong: true },
  'ancient-photo': { src: '/backgrounds/ancient-son2.png', position: '58% center' },
  'freud-photo': { src: '/backgrounds/freud-son3.png', position: '55% center', strong: true },
  'memory-photo': { src: '/backgrounds/memory-son4.png', position: '62% center', strong: true },
  'forgetting-photo': { src: '/backgrounds/forgetting-son5.png', position: '60% center', strong: true },
  'activation-photo': { src: '/backgrounds/activation-son6.png', position: '58% center', strong: true },
  'danger-photo': { src: '/backgrounds/activation-son6.png', position: '65% center', strong: true },
  'stress-photo': { src: '/backgrounds/stress-son7.png', position: '60% center', strong: true },
  'benzene-photo': { src: '/backgrounds/benzene-son8.png', position: '62% center', strong: true },
}

export function photoOverlay(id: BackgroundId, axis: 'x' | 'y'): string {
  if (id === 'intro-photo') {
    return axis === 'x'
      ? 'bg-gradient-to-r from-dream-base/35 via-dream-base/15 to-transparent'
      : 'bg-gradient-to-t from-dream-base/30 via-transparent to-dream-base/5'
  }
  if (PHOTO_BACKGROUNDS.has(id)) {
    return axis === 'x'
      ? 'bg-gradient-to-r from-dream-base/40 via-dream-base/18 to-transparent'
      : 'bg-gradient-to-t from-dream-base/35 via-transparent to-dream-base/8'
  }
  return axis === 'x'
    ? 'bg-gradient-to-r from-dream-base via-dream-base/85 to-transparent'
    : 'bg-gradient-to-t from-dream-base/90 via-transparent to-dream-base/40'
}
