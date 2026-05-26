import sharp from 'sharp'

const base =
  'C:/Users/35191/.cursor/projects/c-Users-35191-PresentDream/assets/'
const files = [
  'image-1babf42b',
  'ChatGPT_Image_22',
  'image-7d1d95b4',
]
import { readdir } from 'fs/promises'
const all = await readdir(base)
for (const f of all) {
  if (files.some((k) => f.includes(k))) {
    const m = await sharp(base + f).metadata()
    console.log(f.slice(-40), m.width, 'x', m.height)
  }
}
