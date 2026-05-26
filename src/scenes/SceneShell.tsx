import { motion } from 'framer-motion'

interface SceneShellProps {
  background: React.ReactNode
  atmosphere: React.ReactNode
  artwork: React.ReactNode
  text: React.ReactNode
  controls: React.ReactNode
}

export function SceneShell({
  background,
  atmosphere,
  artwork,
  text,
  controls,
}: SceneShellProps) {
  return (
    <motion.div
      className="relative h-full min-h-screen w-full overflow-hidden bg-[#070B1B]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div className="pointer-events-none absolute inset-0 z-0">{background}</motion.div>
      <motion.div className="pointer-events-none absolute inset-0 z-[1]">{atmosphere}</motion.div>

      <div
        className="relative z-10 grid h-full min-h-screen w-full max-lg:grid-cols-[56px_1fr]"
        style={{ gridTemplateColumns: '72px 1fr minmax(240px, 38vw)' }}
      >
        <motion.div className="relative z-[60]">{controls}</motion.div>
        <motion.div className="relative z-50 flex flex-col justify-center px-5 py-20 md:px-10 md:py-24 lg:px-12">
          {text}
        </motion.div>
        <motion.div className="relative z-[5] hidden min-h-0 sm:block">{artwork}</motion.div>
      </div>
    </motion.div>
  )
}
