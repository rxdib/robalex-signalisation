import type { Metadata } from 'next'
import ServiceLandingPage from '@/components/ServiceLandingPage'
import { buildMetadata } from '@/app/seo'
import { panneauCandelabreImage } from '@/app/imageVariants'

const title = 'Signalisation permanente'
const description = 'Fourniture et pose de panneaux de signalisation permanente, de mobilier routier et d’équipements pour voiries, accès privés et espaces publics en Suisse romande.'

export const metadata: Metadata = buildMetadata({
  title: 'Signalisation permanente en Suisse romande',
  description,
  path: '/signalisation-permanente/',
  image: panneauCandelabreImage.fallback,
  imageAlt: 'Pose de panneau de signalisation permanente par Robalex Signalisation',
})

export default function SignalisationPermanentePage() {
  return (
    <ServiceLandingPage
      title={title}
      badge="Signalisation permanente"
      description={description}
      path="/signalisation-permanente/"
      image={{
        src: panneauCandelabreImage.fallback,
        alt: 'Montage de panneau de signalisation permanente par Robalex Signalisation',
        imageClassName: 'object-[22%_34%]',
        sources: [{ srcSet: panneauCandelabreImage.webpSrcSet, type: 'image/webp', sizes: panneauCandelabreImage.sizes }],
        sizes: panneauCandelabreImage.sizes,
      }}
      points={['Panneaux OSR et indicateurs', 'Pose de panneaux et supports', 'Équipements pour zones 30 et passages piétons', 'Solutions pour accès privés et espaces publics']}
      situations={['Zones 30 et 20', 'Passages piétons', 'Chemins privés', 'Mise à ban']}
    />
  )
}
