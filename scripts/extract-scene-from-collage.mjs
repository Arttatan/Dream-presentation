/** Временный экспорт ячейки коллажа БЕЗ upscale (только для сравнения) */
import sharp from 'sharp'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const input = path.join(root, 'assets', 'design-collage-12.png')
const COLS = 4
const ROWS = 3

const scene = Number(process.argv[2] ?? 1)
const col = (scene - 1) % COLS
const row = Math.floor((scene - 1) / COLS)

const meta = await sharp(input).metadata()
const cellW = Math.floor((meta.width ?? 0) / COLS)
const cellH = Math.floor((meta.height ?? 0) / ROWS)

const out = path.join(root, 'public', 'backgrounds', `scene-${String(scene).padStart(2, '0')}-collage-fallback.png`)

await sharp(input)
  .extract({ left: col * cellW, top: row * cellH, width: cellW, height: cellH })
  .png()
  .toFile(out)

console.log(`scene ${scene} cell (${col},${row}) ${cellW}×${cellH} → ${out}`)
