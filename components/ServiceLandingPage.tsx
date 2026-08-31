import CtaBand from './CtaBand'
import FeatureBlock from './FeatureBlock'
import Hero from './Hero'
import JsonLd from './JsonLd'
import SectionHeader from './SectionHeader'
import { createBreadcrumbSchema, createServiceSchema } from '@/app/schema'

interface ServiceLandingPageProps {
  title: string
  badge: string
  description: string
  path: string
  image: {
    src: string
    alt: string
    imageClassName?: string
    sources?: Array<{ srcSet: string; type: string; sizes?: string }>
    sizes?: string
  }
  points: string[]
  situations: string[]
}

export default function ServiceLandingPage({
  title,
  badge,
  description,
  path,
  image,
  points,
  situations,
}: ServiceLandingPageProps) {
  return (
    <>
      <JsonLd
        data={[
          createServiceSchema({ name: title, description, path, image: image.src }),
          createBreadcrumbSchema([
            { name: 'Accueil', path: '/' },
            { name: 'Nos services', path: '/nos-services/' },
            { name: title, path },
          ]),
        ]}
      />
      <Hero
        bgImage={image.src}
        bgImageSizes={image.sizes}
        bgSources={image.sources}
        badge={badge}
        title={title}
        subtitle={description}
        primaryCta={{ label: 'Demander un devis', href: '/contact' }}
      />

      <section className="section-pad bg-white">
        <div className="container">
          <FeatureBlock image={image} imageClassName={image.imageClassName}>
            <SectionHeader badge={badge} title={<>Une prise en charge <span className="text-red">complète</span></>} />
            <p className="mb-5 text-gray-dark">{description}</p>
            <ul className="mb-7 flex flex-col gap-2">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm text-gray-dark">
                  <span className="font-bold text-red">✓</span>
                  {point}
                </li>
              ))}
            </ul>
            <a href="/contact" className="inline-flex rounded bg-red px-6 py-3 text-sm font-head font-700 uppercase tracking-wide text-white transition-colors hover:bg-red-dark">
              Demander un devis
            </a>
          </FeatureBlock>
        </div>
      </section>

      <section className="section-pad bg-bg-light">
        <div className="container">
          <SectionHeader
            badge="Applications"
            title={<>Pour vos chantiers, voiries et <span className="text-red">sites privés</span></>}
            subtitle="Nous adaptons la solution à votre terrain, à vos contraintes et à la durée de votre intervention."
            centered
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {situations.map((situation) => (
              <div key={situation} className="rounded-xl border border-gray-light bg-white p-5 text-center text-sm font-head font-700 text-dark shadow-card">
                {situation}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
