/**
 * Импорт ОДНОГО фона в высоком качестве.
 * Использование: node scripts/import-scene.mjs 01 путь/к/картинке.png
 *
 * Правила:
 * - увеличивать (upscale) НЕ будем — только уменьшение, если файл больше 2560px
 * - сохраняем в public/backgrounds/hq/scene-XX.webp
 */
import sharp from 'sharp'
import { mkdir } from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const MAX_W = 2560

const sceneNum = process.argv[2]
const inputPath = process.argv[3]

if (!sceneNum || !inputPath) {
  console.error('Пример: node scripts/import-scene.mjs 01 C:\\Pictures\\slide-01.png')
  process.exit(1)
}

const padded = String(sceneNum).padStart(2, '0')
const outDir = path.join(root, 'public', 'backgrounds', 'hq')
const outFile = path.join(outDir, `scene-${padded}.webp`)

async function main() {
  await mkdir(outDir, { recursive: true })
  const meta = await sharp(inputPath).metadata()
  console.log(`Вход: ${meta.width}×${meta.height}`)

  if ((meta.width ?? 0) < 1280) {
    console.warn(
      '⚠️  Ширина меньше 1280px — на полном экране может быть мягко. Рекомендуем 1920×1080 и больше.',
    )
  }

  let pipeline = sharp(inputPath)
  if ((meta.width ?? 0) > MAX_W) {
    pipeline = pipeline.resize(MAX_W, null, { withoutEnlargement: true, fit: 'inside' })
  }

  await pipeline
    .sharpen({ sigma: 0.6, m1: 0.5, m2: 0.35 })
    .webp({ quality: 95, effort: 6 })
    .toFile(outFile)

  const outMeta = await sharp(outFile).metadata()
  console.log(`✓ ${outFile} → ${outMeta.width}×${outMeta.height}`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
