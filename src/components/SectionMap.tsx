import { AnimatePresence, motion } from 'framer-motion'
import { scenes } from '../data/scenes'

interface SectionMapProps {
  open: boolean
  currentIndex: number
  onClose: () => void
  onSelect: (index: number) => void
}

export function SectionMap({
  open,
  currentIndex,
  onClose,
  onSelect,
}: SectionMapProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-dream-base/80 backdrop-blur-xl"
            onClick={onClose}
          />
          <motion.aside
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ type: 'spring', damping: 28, stiffness: 260 }}
            className="fixed right-0 top-0 z-[101] flex h-full w-full max-w-md flex-col border-l border-white/10 bg-dream-surface/95 p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-light text-dream-mist">Карта сновидений</h2>
            <p className="mt-2 text-sm text-dream-mist/50">
              Esc — закрыть · выберите сцену
            </p>
            <nav className="mt-8 flex flex-1 flex-col gap-2 overflow-y-auto">
              {scenes.map((scene, i) => (
                <motion.button
                  key={scene.id}
                  type="button"
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => {
                    onSelect(i)
                    onClose()
                  }}
                  className={`rounded-xl px-4 py-3 text-left transition ${
                    i === currentIndex
                      ? 'bg-dream-accent/30 text-dream-mist'
                      : 'text-dream-mist/70 hover:bg-white/5 hover:text-dream-mist'
                  }`}
                >
                  <span className="font-mono text-xs text-dream-highlight/80">
                    {scene.sceneLabel}
                  </span>
                  <span className="mt-0.5 block text-sm">{scene.navTitle}</span>
                </motion.button>
              ))}
            </nav>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
