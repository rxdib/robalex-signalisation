import type { Metadata } from 'next'
import ServiceLandingPage from '@/components/ServiceLandingPage'
import { buildMetadata } from '@/app/seo'
import { marquageParkingImage } from '@/app/imageVariants'

const title = 'Marquage routier'
const description = 'Marquage routier pour parkings, voiries et sites privés: lignes, passages piétons, flèches, symboles et numérotation en Suisse romande.'

export const metadata: Metadata = buildMetadata({
  title: 'Marquage routier en Suisse romande',
  description,
  path: '/marquage-routier/',
  image: marquageParkingImage.fallback,
  imageAlt: 'Marquage routier de parking réalisé par Robalex Signalisation',
})

export default function MarquageRoutierPage() {
  return (
    <ServiceLandingPage
      title={title}
      badge="Marquage routier"
      description={description}
      path="/marquage-routier/"
      image={{
        src: marquageParkingImage.fallback,
        alt: 'Marquage de places de parking par Robalex Signalisation',
        imageClassName: 'object-[50%_center]',
        sources: [{ srcSet: marquageParkingImage.webpSrcSet, type: 'image/webp', sizes: marquageParkingImage.sizes }],
        sizes: marquageParkingImage.sizes,
      }}
      points={['Lignes axiales et de rive', 'Passages piétons', 'Marquage de parking et numérotation', 'Flèches et symboles']}
      situations={['Parkings', 'Routes et voiries', 'Sites privés', 'Accès et circulations internes']}
    />
  )
}
