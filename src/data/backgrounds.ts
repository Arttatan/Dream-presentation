export type OverlayPreset = 'quiz' | 'theory' | 'dark'

export interface SceneBackgroundConfig {
  /** Основной файл (HQ) */
  src: string
  /** Запасной, если HQ ещё не загружен */
  fallback?: string
  overlay: OverlayPreset
  /** object-position для кадрирования */
  position?: string
}

/**
 * Для чёткости: кладите файлы в public/backgrounds/hq/scene-XX.webp
 * (минимум 1920×1080). Импорт: npm run import-bg -- 01 путь.png
 */
export const SCENE_BACKGROUNDS: Record<number, SceneBackgroundConfig> = {
  0: {
    src: '/backgrounds/hq/scene-01.webp',
    fallback: '/backgrounds/scene-01.png',
    overlay: 'quiz',
    position: '70% center',
  },
  1: {
    src: '/backgrounds/hq/scene-02.webp',
    fallback: '/backgrounds/scene-02.webp',
    overlay: 'theory',
    position: 'center',
  },
  2: {
    src: '/backgrounds/hq/scene-03.webp',
    fallback: '/backgrounds/scene-03.webp',
    overlay: 'theory',
    position: 'center',
  },
  3: {
    src: '/backgrounds/hq/scene-04.webp',
    fallback: '/backgrounds/scene-04.webp',
    overlay: 'theory',
    position: 'center',
  },
  4: {
    src: '/backgrounds/hq/scene-05.webp',
    fallback: '/backgrounds/scene-05.webp',
    overlay: 'theory',
  },
  5: {
    src: '/backgrounds/hq/scene-06.webp',
    fallback: '/backgrounds/scene-06.webp',
    overlay: 'theory',
  },
  6: {
    src: '/backgrounds/hq/scene-07.webp',
    fallback: '/backgrounds/scene-07.webp',
    overlay: 'theory',
  },
  7: {
    src: '/backgrounds/hq/scene-08.webp',
    fallback: '/backgrounds/scene-08.webp',
    overlay: 'theory',
  },
  8: {
    src: '/backgrounds/hq/scene-09.webp',
    fallback: '/backgrounds/scene-09.webp',
    overlay: 'theory',
  },
  9: {
    src: '/backgrounds/hq/scene-10.webp',
    fallback: '/backgrounds/scene-10.webp',
    overlay: 'theory',
  },
  10: {
    src: '/backgrounds/hq/scene-11.webp',
    fallback: '/backgrounds/scene-11.webp',
    overlay: 'theory',
  },
  11: {
    src: '/backgrounds/hq/scene-12.webp',
    fallback: '/backgrounds/scene-12.webp',
    overlay: 'dark',
  },
  12: {
    src: '/backgrounds/hq/scene-13.webp',
    fallback: '/backgrounds/scene-13.webp',
    overlay: 'theory',
  },
}

export function getSceneBackgroundConfig(sceneIndex: number): SceneBackgroundConfig {
  return SCENE_BACKGROUNDS[sceneIndex] ?? SCENE_BACKGROUNDS[0]
}
