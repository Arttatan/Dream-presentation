interface ProgressIndicatorProps {
  percent: number
  sceneLabel: string
}

export function ProgressIndicator({ percent, sceneLabel }: ProgressIndicatorProps) {
  return (
    <div className="fixed right-6 top-6 z-50 hidden items-center gap-4 sm:flex">
      <div className="h-1 w-24 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-dream-accent to-dream-highlight transition-all duration-700 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>
      <span className="font-mono text-xs text-dream-mist/40">
        {sceneLabel} / {String(percent).padStart(2, '0')}%
      </span>
    </div>
  )
}

export function SceneDots({
  total,
  current,
  onSelect,
}: {
  total: number
  current: number
  onSelect: (index: number) => void
}) {
  return (
    <div className="fixed left-5 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-2 md:flex">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          type="button"
          aria-label={`Сцена ${i + 1}`}
          onClick={(e) => {
            e.stopPropagation()
            onSelect(i)
          }}
          className={`h-2 w-2 rounded-full transition-all duration-300 ${
            i === current
              ? 'scale-125 bg-dream-highlight shadow-[0_0_12px_#8879FF]'
              : i < current
                ? 'bg-dream-accent/60'
                : 'bg-white/20 hover:bg-white/40'
          }`}
        />
      ))}
    </div>
  )
}

export function SceneChromeHeader({
  sceneLabel,
  navTitle,
  onOpenMap,
}: {
  sceneLabel: string
  navTitle: string
  onOpenMap: () => void
}) {
  return (
    <header className="relative z-30 flex items-start justify-between px-6 pt-6 md:px-10 md:pt-8">
      <div>
        <p className="font-mono text-xs tracking-[0.2em] text-dream-mist/40">{sceneLabel}</p>
        <p className="mt-1 text-sm text-dream-mist/60">{navTitle}</p>
      </div>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          onOpenMap()
        }}
        className="group mt-0 flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/5 transition hover:border-dream-accent/40 hover:bg-white/10 sm:mt-12 md:mt-14"
        aria-label="Карта разделов (Esc)"
      >
        <span className="h-0.5 w-5 rounded bg-dream-mist/70 transition group-hover:bg-dream-highlight" />
        <span className="h-0.5 w-5 rounded bg-dream-mist/70 transition group-hover:bg-dream-highlight" />
        <span className="h-0.5 w-5 rounded bg-dream-mist/70 transition group-hover:bg-dream-highlight" />
      </button>
    </header>
  )
}
