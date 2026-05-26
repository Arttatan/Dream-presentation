import { motion } from 'framer-motion'
import { Starfield } from '../quiz/artwork/Starfield'
import { NebulaFog } from '../quiz/artwork/NebulaFog'
import { SilhouetteFigure } from '../quiz/artwork/SilhouetteFigure'
import { Moon } from '../quiz/artwork/Moon'

export function AtmosphereLayer() {
  return (
    <>
      <Starfield density={140} />
      <NebulaFog />
      <SilhouetteFigure />
      <div className="pointer-events-none absolute right-0 top-[8%] w-[55vw] opacity-80 sm:hidden">
        <Moon />
      </div>
      <motion.div
        className="absolute bottom-0 left-0 h-[45%] w-[55%] opacity-40"
        style={{
          background:
            'radial-gradient(ellipse at 30% 100%, rgba(83,72,255,0.25) 0%, transparent 65%)',
        }}
        animate={{ opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
    </>
  )
}
