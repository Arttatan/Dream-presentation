import { useEffect } from 'react'

interface KeyboardNavigationOptions {
  enabled: boolean
  onAdvance: () => void
  onRetreat: () => void
  onToggleMap: () => void
}

export function useKeyboardNavigation({
  enabled,
  onAdvance,
  onRetreat,
  onToggleMap,
}: KeyboardNavigationOptions): void {
  useEffect(() => {
    if (!enabled) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onToggleMap()
        return
      }

      if (
        e.key === 'Enter' ||
        e.key === ' ' ||
        e.key === 'ArrowDown' ||
        e.key === 'PageDown'
      ) {
        e.preventDefault()
        onAdvance()
        return
      }

      if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault()
        onRetreat()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [enabled, onAdvance, onRetreat, onToggleMap])
}
