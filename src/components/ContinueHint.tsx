import { AnimatePresence, motion } from 'framer-motion'

interface ContinueHintProps {
  visible: boolean
}

export function ContinueHint({ visible }: ContinueHintProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="pointer-events-none fixed bottom-8 left-1/2 z-40 w-full max-w-lg -translate-x-1/2 px-6 text-center"
        >
          <motion.p
            animate={{ opacity: [0.35, 0.8, 0.35] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="text-xs tracking-wide text-dream-mist/55 md:text-sm"
          >
            Нажмите Enter или кликните для продолжения
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
