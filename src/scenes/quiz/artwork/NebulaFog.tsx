import { motion } from 'framer-motion'

export function NebulaFog() {
  return (
    <>
      <motion.div
        className="absolute -left-[10%] bottom-[5%] h-[50%] w-[70%] rounded-full blur-[80px]"
        style={{ background: 'rgba(83, 72, 255, 0.12)' }}
        animate={{ x: [0, 20, 0], opacity: [0.5, 0.75, 0.5] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-[5%] top-[15%] h-[40%] w-[45%] rounded-full blur-[100px]"
        style={{ background: 'rgba(136, 121, 255, 0.08)' }}
        animate={{ y: [0, -15, 0], opacity: [0.4, 0.65, 0.4] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
      />
    </>
  )
}
