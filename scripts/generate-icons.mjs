import { readFile } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const projectRoot = path.resolve(process.cwd())
const svgPath = path.join(projectRoot, 'public', 'brand', 'logo-mark.svg')
const svgBuffer = await readFile(svgPath)

const outputs = [
  { filename: 'favicon-16x16.png', size: 16 },
  { filename: 'favicon-32x32.png', size: 32 },
  { filename: 'favicon-48x48.png', size: 48 },
  { filename: 'apple-touch-icon.png', size: 180 },
  { filename: 'android-chrome-192x192.png', size: 192 },
  { filename: 'android-chrome-512x512.png', size: 512 },
]

await Promise.all(
  outputs.map(({ filename, size }) =>
    sharp(svgBuffer, { density: 300 })
      .resize(size, size)
      .png({ compressionLevel: 9 })
      .toFile(path.join(projectRoot, 'public', filename))
  )
)

console.log('Generated icon PNGs:', outputs.map((o) => o.filename).join(', '))
