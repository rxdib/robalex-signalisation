import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import FeatureBlock from '@/components/FeatureBlock'
import JsonLd from '@/components/JsonLd'
import SectionHeader from '@/components/SectionHeader'
import SmartLink from '@/components/SmartLink'
import { twongInstallationImage, twongSignalisationImage } from '@/app/imageVariants'
import { buildMetadata } from '@/app/seo'
import { createBreadcrumbSchema, createProductSchema, createWebPageSchema } from '@/app/schema'

const title = 'TWONG'
const description =
  'TWONG est un système de fixation mobile pour la signalisation temporaire, disponible dans l’assortiment de Robalex Signalisation à Lausanne.'

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: '/twong/',
  image: twongSignalisationImage.fallback,
  imageAlt: 'Système de fixation mobile TWONG installé sur une glissière de sécurité',
})

export default function TwongPage() {
  const schemas = [
    createWebPageSchema({
      name: title,
      description,
      path: '/twong/',
      image: twongSignalisationImage.fallback,
    }),
    createProductSchema({
      name: 'TWONG - Système de fixation mobile',
      description,
      path: '/twong/',
      image: twongInstallationImage.fallback,
      brand: 'TWONG',
    }),
    createBreadcrumbSchema([
      { name: 'Accueil', path: '/' },
      { name: 'Nos produits', path: '/nos-produits/' },
      { name: 'TWONG', path: '/twong/' },
    ]),
  ]

  return (
    <>
      <JsonLd data={schemas} />
      <Hero
        bgImage={twongSignalisationImage.fallback}
        bgSources={[{ srcSet: twongSignalisationImage.webpSrcSet, type: 'image/webp', sizes: '100vw' }]}
        bgPosition="center"
        badge="Système de fixation mobile"
        title={<>TWONG</>}
        subtitle="Système de fixation mobile pour la signalisation temporaire. Disponible dans notre assortiment à Lausanne."
        primaryCta={{ label: 'Demander la disponibilité', href: '/contact' }}
      />

      <section className="section-pad bg-white" aria-labelledby="twong-overview-title">
        <div className="container">
          <FeatureBlock
            image={{
              src: twongInstallationImage.fallback,
              alt: 'Deux systèmes TWONG installés sur une glissière de sécurité',
              sources: [{ srcSet: twongInstallationImage.webpSrcSet, type: 'image/webp', sizes: twongInstallationImage.sizes }],
              sizes: twongInstallationImage.sizes,
            }}
            imageBadge="En stock à Lausanne"
            imageClassName="!aspect-[4/5] !object-contain bg-bg-light p-3 sm:p-5"
          >
            <SectionHeader badge="Dans notre assortiment" title={<>Une solution <span className="text-red">TWONG</span> pour vos installations temporaires.</>} />
            <p id="twong-overview-title" className="mb-6 text-gray-dark leading-relaxed">
              Robalex Signalisation propose le système TWONG pour vos besoins de signalisation temporaire. Contactez-nous pour vérifier la disponibilité ou obtenir un renseignement sur ce produit.
            </p>
            <div className="rounded-xl border border-gray/20 bg-bg-light p-5">
              <p className="font-head text-lg font-800 text-dark">Présentation TWONG</p>
              <p className="mt-2 text-sm leading-relaxed text-gray-dark">Retrouvez les informations complètes, les applications et les caractéristiques du système dans notre document de présentation.</p>
              <a
                href="/documents/presentation-twong-robalex.pdf"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex min-h-11 items-center justify-center rounded bg-red px-6 py-3 text-sm font-head font-700 uppercase tracking-wide text-white transition-colors hover:bg-red-dark"
              >
                Consulter la présentation PDF
              </a>
            </div>
            <SmartLink href="/contact" className="mt-5 inline-flex min-h-11 items-center justify-center rounded border-2 border-navy px-6 py-3 text-sm font-head font-700 uppercase tracking-wide text-navy transition-colors hover:bg-navy hover:text-white">
              Nous contacter
            </SmartLink>
          </FeatureBlock>
        </div>
      </section>
    </>
  )
}
