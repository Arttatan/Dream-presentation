import { motion } from 'framer-motion'

/** Силуэт человека на «уступе» — левая зона, SVG */
export function SilhouetteFigure() {
  return (
    <motion.div
      className="pointer-events-none absolute bottom-[10%] left-[88px] z-[8] w-[140px] md:left-[100px] md:w-[180px]"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 0.3 }}
    >
      <svg viewBox="0 0 200 160" className="h-auto w-full" aria-hidden>
        {/* Ledge */}
        <path
          d="M0 130 L200 130 L200 160 L0 160 Z"
          fill="rgba(7,11,27,0.9)"
        />
        <path
          d="M0 128 Q100 118 200 128"
          stroke="rgba(136,121,255,0.2)"
          strokeWidth="1"
          fill="none"
        />
        {/* Person sitting */}
        <ellipse cx="72" cy="108" rx="14" ry="16" fill="#0a0e1c" />
        <path
          d="M72 95 Q68 82 72 72 Q76 82 72 95"
          fill="#0a0e1c"
        />
        <path
          d="M58 108 L52 125 M86 108 L92 122"
          stroke="#0a0e1c"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M65 118 Q72 128 80 118"
          stroke="#0a0e1c"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </motion.div>
  )
}
