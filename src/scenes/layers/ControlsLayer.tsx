import { motion } from 'framer-motion'
import { TOTAL_SCENES } from '../../data/scenes'

interface ControlsLayerProps {
  revealStep: number
  maxStep: number
  isComplete: boolean
  onOpenMap: () => void
}

export function ControlsLayer({
  revealStep,
  maxStep,
  isComplete,
  onOpenMap,
}: ControlsLayerProps) {
  return (
    <>
      {/* Header — full width */}
      <header className="pointer-events-none fixed left-0 right-0 top-0 z-[70] flex items-start justify-between px-6 pt-6 md:px-10 md:pt-8">
        <div className="pointer-events-auto flex items-baseline gap-3">
          <span className="text-4xl font-extralight tracking-tight text-[#DCE8FF]/90 md:text-5xl">
            01
          </span>
          <span className="text-sm text-[#DCE8FF]/50 md:text-base">Вопрос для зала</span>
        </div>
        <div className="pointer-events-auto flex items-center gap-4">
          <span className="hidden font-mono text-xs tracking-widest text-[#DCE8FF]/35 sm:inline">
            01 / {String(TOTAL_SCENES).padStart(2, '0')}
          </span>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              onOpenMap()
            }}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-black/20 backdrop-blur-md transition hover:border-[#8879FF]/40"
            aria-label="Меню"
          >
            <span className="h-0.5 w-5 rounded bg-[#DCE8FF]/70" />
            <span className="h-0.5 w-5 rounded bg-[#DCE8FF]/70" />
            <span className="h-0.5 w-5 rounded bg-[#DCE8FF]/70" />
          </button>
        </div>
      </header>

      {/* Vertical progress — left rail */}
      <div className="flex h-full flex-col items-center justify-center gap-3 py-24">
        {Array.from({ length: maxStep + 1 }).map((_, i) => (
          <motion.div
            key={i}
            className={`rounded-full transition-all duration-400 ${
              i === revealStep
                ? 'h-2.5 w-2.5 bg-[#8879FF] shadow-[0_0_12px_#8879FF]'
                : i < revealStep
                  ? 'h-2 w-2 bg-[#5348FF]/70'
                  : 'h-2 w-2 bg-white/15'
            }`}
            animate={i === revealStep ? { scale: [1, 1.15, 1] } : {}}
            transition={{ duration: 2, repeat: Infinity }}
          />
        ))}
        <div className="mt-4 h-16 w-px bg-gradient-to-b from-[#8879FF]/40 to-transparent" />
      </div>

      {/* Continue hint */}
      {isComplete && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.35, 0.75, 0.35] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="pointer-events-none fixed bottom-8 left-1/2 z-[70] -translate-x-1/2 text-center text-xs text-[#DCE8FF]/50 md:text-sm"
        >
          Нажмите Enter или кликните для продолжения
        </motion.p>
      )}
    </>
  )
}
