import { motion } from 'framer-motion'

interface NavigationProps {
  revealStep: number
  maxStep: number
  isComplete: boolean
  onOpenMap: () => void
}

export function Navigation({
  revealStep,
  maxStep,
  isComplete,
  onOpenMap,
}: NavigationProps) {
  return (
    <motion.div className="pointer-events-none absolute inset-0 z-[60]">
      {/* Верх: 01 + заголовок раздела */}
      <header className="pointer-events-auto absolute left-6 top-6 flex items-baseline gap-3 md:left-10 md:top-8">
        <span className="text-4xl font-extralight tracking-tight text-[#DCE8FF]/95 md:text-5xl">
          01
        </span>
        <span className="text-sm text-[#DCE8FF]/55 md:text-base">Вопрос для зала</span>
      </header>

      {/* Меню */}
      <div className="pointer-events-auto absolute right-6 top-6 flex items-center gap-4 md:right-10 md:top-8">
        <span className="hidden font-mono text-xs tracking-widest text-[#DCE8FF]/35 sm:inline">
          01 / 13
        </span>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            onOpenMap()
          }}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-black/20 backdrop-blur-sm transition hover:border-[#8879FF]/40"
          aria-label="Меню"
        >
          <span className="h-0.5 w-5 rounded bg-[#DCE8FF]/70" />
          <span className="h-0.5 w-5 rounded bg-[#DCE8FF]/70" />
          <span className="h-0.5 w-5 rounded bg-[#DCE8FF]/70" />
        </button>
      </div>

      {/* Вертикальный прогресс */}
      <div className="absolute left-5 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-3 md:flex lg:left-7">
        {Array.from({ length: maxStep + 1 }).map((_, i) => (
          <div
            key={i}
            className={`rounded-full transition-all ${
              i === revealStep
                ? 'h-2.5 w-2.5 bg-[#8879FF] shadow-[0_0_12px_#8879FF]'
                : i < revealStep
                  ? 'h-2 w-2 bg-[#5348FF]/70'
                  : 'h-2 w-2 bg-white/20'
            }`}
          />
        ))}
        <div className="mt-2 h-12 w-px bg-gradient-to-b from-[#8879FF]/35 to-transparent" />
      </div>

      {/* Нижняя подсказка */}
      {isComplete && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.35, 0.75, 0.35] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 w-full max-w-md -translate-x-1/2 px-6 text-center text-xs text-[#DCE8FF]/50 md:text-sm"
        >
          Нажмите Enter или кликните для продолжения
        </motion.p>
      )}
    </motion.div>
  )
}
