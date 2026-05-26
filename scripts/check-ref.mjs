import sharp from 'sharp'
const base =
  'C:/Users/35191/.cursor/projects/c-Users-35191-PresentDream/assets/'
const names = ['abab2769', 'fedd3fc6', '7d1d95b4', '1babf42b']
import { readdir } from 'fs/promises'
for (const f of await readdir(base)) {
  if (names.some((n) => f.includes(n))) {
    const m = await sharp(base + f).metadata()
    console.log(f.slice(-36), m.width, 'x', m.height)
  }
}
