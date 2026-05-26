import sharp from 'sharp'
import { mkdir } from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')

const input = path.join(root, 'assets', 'design-collage-12.png')

const COLS = 4
const ROWS = 3
const TARGET_W = 1920
const TARGET_H = 1080
const outDir = path.join(root, 'public', 'backgrounds')

async function main() {
  await mkdir(outDir, { recursive: true })
  const meta = await sharp(input).metadata()
  const width = meta.width ?? 0
  const height = meta.height ?? 0
  const cellW = Math.floor(width / COLS)
  const cellH = Math.floor(height / ROWS)

  console.log(`Source ${width}x${height}, cell ${cellW}x${cellH}`)

  let index = 1
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      const left = col * cellW
      const top = row * cellH
      const name = `scene-${String(index).padStart(2, '0')}.webp`
      await sharp(input)
        .extract({ left, top, width: cellW, height: cellH })
        .resize(TARGET_W, TARGET_H, { fit: 'cover', position: 'centre' })
        .webp({ quality: 92 })
        .toFile(path.join(outDir, name))
      console.log('Wrote', name)
      index++
    }
  }

  await sharp(path.join(outDir, 'scene-02.webp'))
    .resize(TARGET_W, TARGET_H, { fit: 'cover' })
    .modulate({ brightness: 0.92, saturation: 1.1 })
    .webp({ quality: 92 })
    .toFile(path.join(outDir, 'scene-13.webp'))
  console.log('Wrote scene-13.webp (from intro mood)')
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
