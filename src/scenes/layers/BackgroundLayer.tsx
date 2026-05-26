import { motion } from 'framer-motion'

/** Базовый космический градиент — без изображений */
export function BackgroundLayer() {
  return (
    <motion.div
      className="absolute inset-0"
      animate={{ opacity: [0.95, 1, 0.95] }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
    >
      <motion.div className="absolute inset-0 bg-[#070B1B]" />
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 120% 80% at 15% 85%, #141f45 0%, transparent 55%), radial-gradient(ellipse 90% 70% at 85% 25%, #1a1248 0%, transparent 50%), linear-gradient(165deg, #070B1B 0%, #0c1430 45%, #070B1B 100%)',
        }}
      />
      <motion.div className="absolute inset-0 bg-gradient-to-r from-[#070B1B] via-transparent to-[#0a1028]/80" />
    </motion.div>
  )
}
