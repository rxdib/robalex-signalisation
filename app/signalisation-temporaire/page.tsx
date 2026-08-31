import type { Metadata } from 'next'
import ServiceLandingPage from '@/components/ServiceLandingPage'
import { buildMetadata } from '@/app/seo'
import { installationTemporaireImage } from '@/app/imageVariants'

const title = 'Signalisation temporaire'
const description = 'Mise en place de signalisation temporaire pour chantiers, fermetures de routes, interventions urgentes et événements en Suisse romande.'

export const metadata: Metadata = buildMetadata({
  title: 'Signalisation temporaire en Suisse romande',
  description,
  path: '/signalisation-temporaire/',
  image: installationTemporaireImage.fallback,
  imageAlt: 'Installation de signalisation temporaire par Robalex Signalisation',
})

export default function SignalisationTemporairePage() {
  return (
    <ServiceLandingPage
      title={title}
      badge="Signalisation temporaire"
      description={description}
      path="/signalisation-temporaire/"
      image={{
        src: installationTemporaireImage.fallback,
        alt: 'Installation de signalisation temporaire de chantier par Robalex Signalisation',
        imageClassName: 'object-[56%_center]',
        sources: [{ srcSet: installationTemporaireImage.webpSrcSet, type: 'image/webp', sizes: installationTemporaireImage.sizes }],
        sizes: installationTemporaireImage.sizes,
      }}
      points={['Fourniture et transport du matériel', 'Installation sur site', 'Adaptation aux contraintes du terrain', 'Retrait du matériel en fin d’intervention']}
      situations={['Fermetures de routes', 'Travaux sur chaussée', 'Interventions d’urgence', 'Événements temporaires']}
    />
  )
}
