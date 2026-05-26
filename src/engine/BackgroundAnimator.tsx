import { useCallback, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { BackgroundId } from '../types/presentation'
import { SceneBackground } from '../backgrounds/SceneBackgrounds'

interface BackgroundAnimatorProps {
  backgroundId: BackgroundId
  sceneKey: string
}

export function BackgroundAnimator({ backgroundId, sceneKey }: BackgroundAnimatorProps) {
  const [parallax, setParallax] = useState({ x: 0, y: 0 })

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const cx = (e.clientX / window.innerWidth - 0.5) * 16
    const cy = (e.clientY / window.innerHeight - 0.5) * 16
    setParallax({ x: cx, y: cy })
  }, [])

  return (
    <motion.div className="absolute inset-0" onMouseMove={handleMouseMove}>
      <AnimatePresence mode="wait">
        <motion.div
          key={sceneKey}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <SceneBackground id={backgroundId} parallax={parallax} />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(7,11,27,0.3)_0%,rgba(7,11,27,0.85)_70%)]" />
    </motion.div>
  )
}
