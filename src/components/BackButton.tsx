interface BackButtonProps {
  visible: boolean
  onBack: () => void
}

export function BackButton({ visible, onBack }: BackButtonProps) {
  if (!visible) return null

  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation()
        onBack()
      }}
      className="pointer-events-auto fixed bottom-8 right-6 z-[70] flex items-center gap-2 rounded-xl border border-white/15 bg-black/40 px-4 py-2.5 text-sm text-dream-mist/85 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-md transition hover:border-dream-highlight/40 hover:bg-black/55 hover:text-dream-mist md:right-10"
      aria-label="Назад"
    >
      <span className="text-dream-highlight" aria-hidden>
        ←
      </span>
      <span>Назад</span>
      <span className="hidden text-dream-mist/40 sm:inline">· ↑</span>
    </button>
  )
}
