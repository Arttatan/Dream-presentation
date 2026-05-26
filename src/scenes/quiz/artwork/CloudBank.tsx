import { motion } from 'framer-motion'

interface CloudBankProps {
  side: 'left' | 'right'
}

export function CloudBank({ side }: CloudBankProps) {
  const isRight = side === 'right'
  return (
    <>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${120 + i * 40}px`,
            height: `${50 + i * 20}px`,
            bottom: `${8 + i * 6}%`,
            right: isRight ? `${5 + i * 4}%` : undefined,
            left: isRight ? undefined : `${8 + i * 5}%`,
            background:
              'radial-gradient(ellipse, rgba(136,121,255,0.35) 0%, rgba(83,72,255,0.15) 50%, transparent 100%)',
            filter: 'blur(28px)',
          }}
          animate={{
            x: isRight ? [0, 12, 0] : [0, -10, 0],
            opacity: [0.5, 0.85, 0.5],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.6,
          }}
        />
      ))}
      <motion.div
        className="absolute bottom-0 right-0 h-[35%] w-[55%]"
        style={{
          background:
            'linear-gradient(to top, rgba(83,72,255,0.2) 0%, rgba(136,121,255,0.08) 40%, transparent 100%)',
        }}
        animate={{ opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 7, repeat: Infinity }}
      />
    </>
  )
}
