import { motion } from 'framer-motion'
import type { BackgroundId } from '../types/presentation'
import { Particles } from './Particles'
import { PHOTO_BACKGROUNDS, PHOTO_SCENE_CONFIG, photoOverlay } from './photoBackgrounds'

interface SceneBackgroundProps {
  id: BackgroundId
  parallax: { x: number; y: number }
}

function Layer({
  children,
  depth,
  parallax,
  className = '',
}: {
  children: React.ReactNode
  depth: number
  parallax: { x: number; y: number }
  className?: string
}) {
  return (
    <motion.div className={className} style={{ x: parallax.x * depth, y: parallax.y * depth }}>
      {children}
    </motion.div>
  )
}

export function SceneBackground({ id, parallax }: SceneBackgroundProps) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <Particles
        count={
          id === 'cosmos' || id === 'galaxy'
            ? 120
            : PHOTO_BACKGROUNDS.has(id)
              ? 25
              : 60
        }
      />
      {id === 'cosmos' && <Cosmos parallax={parallax} />}
      {id === 'bedroom-dream' && <BedroomDream parallax={parallax} />}
      {PHOTO_SCENE_CONFIG[id] && (
        <ScenePhoto
          src={PHOTO_SCENE_CONFIG[id]!.src}
          parallax={parallax}
          position={PHOTO_SCENE_CONFIG[id]!.position}
          brighten
          strong={PHOTO_SCENE_CONFIG[id]!.strong}
        />
      )}
      {id === 'ancient' && <Ancient parallax={parallax} />}
      {id === 'freud' && <Freud parallax={parallax} />}
      {id === 'memory' && <Memory parallax={parallax} />}
      {id === 'forgetting' && <Forgetting parallax={parallax} />}
      {id === 'activation' && <Activation parallax={parallax} />}
      {id === 'danger' && <Danger parallax={parallax} />}
      {id === 'stress' && <Stress parallax={parallax} />}
      {id === 'benzene' && <Benzene parallax={parallax} />}
      {id === 'lucid' && <Lucid parallax={parallax} />}
      {id === 'galaxy' && <Galaxy parallax={parallax} />}
      {id === 'finale-audience' && <Galaxy parallax={parallax} />}
      <motion.div className={`absolute inset-0 ${photoOverlay(id, 'x')}`} />
      <motion.div className={`absolute inset-0 ${photoOverlay(id, 'y')}`} />
    </div>
  )
}

function Cosmos({ parallax }: { parallax: { x: number; y: number } }) {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,#1a2a6c_0%,#070B1B_55%)]" />
      <Layer parallax={parallax} depth={12} className="absolute right-[8%] top-[18%]">
        <motion.div
          animate={{ scale: [1, 1.04, 1], opacity: [0.7, 0.95, 0.7] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="h-48 w-48 rounded-full bg-gradient-to-br from-[#4a9eff] to-[#5348FF] blur-sm md:h-72 md:w-72"
          style={{ boxShadow: '0 0 120px 40px rgba(83,72,255,0.35)' }}
        />
      </Layer>
    </>
  )
}

function BedroomDream({ parallax }: { parallax: { x: number; y: number } }) {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_30%,#2d1b69_0%,#070B1B_60%)]" />
      <Layer parallax={parallax} depth={14} className="absolute right-[5%] top-[15%] h-[55%] w-[50%] overflow-hidden rounded-2xl border border-dream-highlight/20 md:right-[10%] md:w-[42%]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#8879FF]/40 via-[#5348FF]/30 to-[#070B1B]" />
      </Layer>
    </>
  )
}

function ScenePhoto({
  src,
  parallax,
  position,
  brighten = false,
  strong = false,
}: {
  src: string
  parallax: { x: number; y: number }
  position: string
  brighten?: boolean
  strong?: boolean
}) {
  const tone = strong
    ? 'brightness-[1.2] contrast-[1.08] saturate-[1.12]'
    : brighten
      ? 'brightness-[1.14] contrast-[1.06] saturate-[1.08]'
      : ''

  return (
    <Layer parallax={parallax} depth={10} className="absolute inset-0">
      <img
        src={src}
        alt=""
        draggable={false}
        className={`h-full w-full object-cover ${tone}`}
        style={{ objectPosition: position }}
      />
    </Layer>
  )
}

function Ancient({ parallax }: { parallax: { x: number; y: number } }) {
  return (
    <>
      <motion.div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_80%,#3d2a1a_0%,#070B1B_50%)]" />
      <Layer parallax={parallax} depth={16} className="absolute bottom-[25%] right-[25%]">
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="h-40 w-28 rounded border border-amber-600/20 bg-stone-800/50 md:h-52 md:w-36"
        />
      </Layer>
    </>
  )
}

function Freud({ parallax }: { parallax: { x: number; y: number } }) {
  return (
    <Layer parallax={parallax} depth={10} className="absolute right-[5%] top-1/2 -translate-y-1/2 md:right-[12%]">
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="h-40 w-40 rounded-full bg-[radial-gradient(circle,#8879FF_0%,#5348FF44_40%,transparent_70%)] md:h-56 md:w-56"
      />
    </Layer>
  )
}

function Memory({ parallax }: { parallax: { x: number; y: number } }) {
  return (
    <Layer parallax={parallax} depth={12} className="absolute right-[10%] top-1/2 -translate-y-1/2">
      <motion.div
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="h-56 w-56 rounded-full border border-dream-accent/30 bg-dream-accent/10 md:h-72 md:w-72"
      />
    </Layer>
  )
}

function Forgetting({ parallax }: { parallax: { x: number; y: number } }) {
  return (
    <Layer parallax={parallax} depth={10} className="absolute right-[20%] top-[35%]">
      <motion.div
        animate={{ opacity: [0.8, 0.2, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="h-16 w-14 rounded-lg border border-cyan-400/30 bg-cyan-500/10 md:h-20 md:w-16"
      />
    </Layer>
  )
}

function Activation({ parallax }: { parallax: { x: number; y: number } }) {
  return (
    <Layer parallax={parallax} depth={10} className="absolute right-[8%] top-1/2 flex -translate-y-1/2 gap-3">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          animate={{ opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
          className="h-28 w-40 rounded-lg border border-dream-accent/30 bg-dream-accent/20 md:h-36 md:w-48"
        />
      ))}
    </Layer>
  )
}

function Danger({ parallax }: { parallax: { x: number; y: number } }) {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_60%,#0a1520_0%,#070B1B_70%)]" />
      <Layer parallax={parallax} depth={14} className="absolute right-[10%] top-[35%]">
        <div className="h-40 w-56 rounded-t-full bg-gradient-to-t from-indigo-950/80 to-dream-highlight/20 md:h-52 md:w-72" />
      </Layer>
    </>
  )
}

function Stress({ parallax }: { parallax: { x: number; y: number } }) {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a2844] via-[#101B38] to-[#070B1B]" />
      <Layer parallax={parallax} depth={8} className="absolute bottom-[25%] right-[15%] text-5xl opacity-50">
        ⛵
      </Layer>
    </>
  )
}

function Benzene({ parallax }: { parallax: { x: number; y: number } }) {
  return (
    <Layer parallax={parallax} depth={12} className="absolute right-[12%] top-[30%]">
      <motion.svg
        viewBox="0 0 120 120"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="h-40 w-40 md:h-56 md:w-56"
      >
        <polygon
          points="60,10 95,35 95,85 60,110 25,85 25,35"
          fill="none"
          stroke="#8879FF"
          strokeWidth="1.5"
        />
      </motion.svg>
    </Layer>
  )
}

function Lucid({ parallax }: { parallax: { x: number; y: number } }) {
  return (
    <Layer parallax={parallax} depth={10} className="absolute right-[15%] top-[40%]">
      <motion.div
        animate={{ boxShadow: ['0 0 40px #5348FF', '0 0 80px #8879FF', '0 0 40px #5348FF'] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="h-32 w-48 rounded-lg border-2 border-dream-highlight/60 bg-dream-accent/20 md:h-40 md:w-56"
      />
    </Layer>
  )
}

function Galaxy({ parallax }: { parallax: { x: number; y: number } }) {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,#3d2060_0%,#070B1B_55%)]" />
      <Layer parallax={parallax} depth={10} className="absolute left-1/2 top-[20%] -translate-x-1/2">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
          className="h-64 w-64 rounded-full opacity-60 md:h-96 md:w-96"
          style={{
            background: 'conic-gradient(from 0deg, #5348FF, #8879FF, #e879f9, #5348FF)',
            filter: 'blur(40px)',
          }}
        />
      </Layer>
    </>
  )
}
