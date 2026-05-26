import { motion } from 'framer-motion'

export function Moon() {
  return (
    <motion.div
      className="relative aspect-square w-[min(42vw,420px)] max-w-full"
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
    >
      {/* Outer glow */}
      <div
        className="absolute inset-[-15%] rounded-full opacity-70"
        style={{
          background:
            'radial-gradient(circle, rgba(100,180,255,0.35) 0%, rgba(83,72,255,0.15) 40%, transparent 70%)',
        }}
      />

      {/* Moon sphere */}
      <motion.div
        className="absolute inset-[8%] rounded-full"
        style={{
          background:
            'radial-gradient(circle at 35% 32%, #e8f4ff 0%, #9ec8f0 18%, #5a8ec8 45%, #3d6a9e 70%, #2a4a72 100%)',
          boxShadow:
            'inset -20px -20px 40px rgba(20,40,80,0.5), 0 0 80px rgba(120,180,255,0.4), 0 0 120px rgba(83,72,255,0.25)',
        }}
      >
        {/* Craters */}
        <motion.div className="absolute left-[22%] top-[28%] h-[12%] w-[12%] rounded-full bg-[#4a7ab0]/40 blur-[2px]" />
        <motion.div className="absolute left-[48%] top-[55%] h-[8%] w-[8%] rounded-full bg-[#3d6898]/35 blur-[1px]" />
        <motion.div className="absolute left-[62%] top-[38%] h-[6%] w-[6%] rounded-full bg-[#5a90c8]/30" />
        {/* Terminator shadow */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              'linear-gradient(105deg, transparent 42%, rgba(15,25,55,0.55) 78%, rgba(7,11,27,0.85) 100%)',
          }}
        />
      </motion.div>
    </motion.div>
  )
}
