import { motion } from 'framer-motion'

/** Лёгкое затемнение слева — для читаемости HTML-текста */
export function Overlay() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[1]" aria-hidden>
      <motion.div className="absolute inset-0 bg-[#070B1B]/15" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#070B1B]/55 via-[#070B1B]/15 to-transparent" />
    </div>
  )
}
