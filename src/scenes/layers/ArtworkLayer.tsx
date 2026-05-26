import { motion } from 'framer-motion'
import { Moon } from '../quiz/artwork/Moon'
import { CloudBank } from '../quiz/artwork/CloudBank'

export function ArtworkLayer() {
  return (
    <motion.div className="relative h-full w-full overflow-hidden">
      <motion.div className="absolute inset-0 flex items-start justify-center pr-2 pt-12 md:pt-16">
        <Moon />
      </motion.div>
      <CloudBank side="right" />
    </motion.div>
  )
}
