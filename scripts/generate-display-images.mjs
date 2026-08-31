import { mkdirSync } from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const projectRoot = path.resolve(import.meta.dirname, '..')
const outputDirectory = path.join(projectRoot, 'public', 'images', 'optimized')
const widths = [768, 1280]
const images = [
  {
    source: 'public/images/panneau-candelabre.jpg',
    name: 'panneau-candelabre',
  },
  {
    source: 'public/images/travaux-marquage-parking.jpg',
    name: 'travaux-marquage-parking',
  },
  {
    source: 'public/images/installation-signalisation-temporaire-location.jpg',
    name: 'installation-signalisation-temporaire-location',
  },
  {
    source: 'public/images/Liste produit/Temporaire (Travaux de voirie - Urgences)/Signaux-pliants-Triopan.jpg',
    name: 'signaux-pliants-triopan',
  },
  {
    source: 'public/images/Liste produit/Permanent (Signaux OSR - Mobilier urbain)/Socle-béton-50kg-prefabriqué.jpg',
    name: 'socle-beton-50kg-prefabrique',
  },
  {
    source: 'public/images/twong/twong-systeme-fixation-mobile.png',
    name: 'twong-systeme-fixation-mobile',
  },
  {
    source: 'public/images/twong/twong-montage-sans-outil.png',
    name: 'twong-montage-sans-outil',
  },
  {
    source: 'public/images/twong/twong-signalisation-temporaire.png',
    name: 'twong-signalisation-temporaire',
  },
]

mkdirSync(outputDirectory, { recursive: true })

for (const image of images) {
  for (const width of widths) {
    const output = path.join(outputDirectory, `${image.name}-${width}.webp`)

    await sharp(path.join(projectRoot, image.source))
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 82, effort: 6 })
      .toFile(output)
  }
}
