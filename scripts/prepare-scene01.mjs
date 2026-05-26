/**
 * Подготовка scene01 из исходника дизайна (верхний левый кадр, без upscale).
 */
import sharp from 'sharp'
import { mkdir } from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')

const source = path.join(
  'C:',
  'Users',
  '35191',
  '.cursor',
  'projects',
  'c-Users-35191-PresentDream',
  'assets',
  'c__Users_35191_AppData_Roaming_Cursor_User_workspaceStorage_b2898bb1d9a243bfeb408a5821d54dc4_images_image-7d1d95b4-7104-40e3-a437-026df11c0b3f.png',
)

const outDir = path.join(root, 'public', 'scenes')

async function main() {
  await mkdir(outDir, { recursive: true })
  const meta = await sharp(source).metadata()
  const w = meta.width ?? 917
  const h = meta.height ?? 608
  const cellW = Math.floor(w / 3)
  const cellH = Math.floor(h / 2)

  await sharp(source)
    .extract({ left: 0, top: 0, width: cellW, height: cellH })
    .png({ compressionLevel: 6 })
    .toFile(path.join(outDir, 'scene01.png'))

  console.log(`scene01.png → ${cellW}×${cellH} (native, no upscale)`)
}

main()
