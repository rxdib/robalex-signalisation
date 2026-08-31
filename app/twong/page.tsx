import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import FeatureBlock from '@/components/FeatureBlock'
import JsonLd from '@/components/JsonLd'
import ResponsivePicture from '@/components/ResponsivePicture'
import SectionHeader from '@/components/SectionHeader'
import SmartLink from '@/components/SmartLink'
import { twongMontageImage, twongSignalisationImage, twongSystemImage } from '@/app/imageVariants'
import { buildMetadata } from '@/app/seo'
import { createBreadcrumbSchema, createProductSchema, createWebPageSchema } from '@/app/schema'

const title = 'TWONG | Système de fixation mobile'
const description =
  'TWONG est un système de fixation mobile pour la signalisation temporaire: montage sans outil ni perçage, en stock à Lausanne et fourni dans toute la Suisse.'

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: '/twong/',
  image: twongMontageImage.fallback,
  imageAlt: 'Montage du système de fixation mobile TWONG sur une glissière de sécurité',
})

const applications = [
  {
    title: 'Signalisation et avertissement',
    description: 'Fixez rapidement des panneaux de signalisation et d’avertissement sur les dispositifs de retenue adaptés.',
  },
  {
    title: 'Écrans de protection',
    description: 'Installez des écrans pare-vue, anti-poussière ou anti-projection sans modifier le support.',
  },
  {
    title: 'Équipements temporaires',
    description: 'Utilisez le système pour des moniteurs, éléments d’éclairage et autres équipements de chantier compatibles.',
  },
]

const steps = [
  ['01', 'Positionnez', 'Placez le TWONG sur le support ou le profilé adapté.'],
  ['02', 'Fixez', 'Serrez la sangle à cliquet: sans outil et sans perçage.'],
  ['03', 'Installez', 'Montez le panneau ou l’équipement prévu pour votre intervention.'],
]

export default function TwongPage() {
  const schemas = [
    createWebPageSchema({
      name: title,
      description,
      path: '/twong/',
      image: twongMontageImage.fallback,
    }),
    createProductSchema({
      name: 'TWONG - Système de fixation mobile',
      description,
      path: '/twong/',
      image: twongSystemImage.fallback,
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
        bgImage={twongMontageImage.fallback}
        bgSources={[{ srcSet: twongMontageImage.webpSrcSet, type: 'image/webp', sizes: '100vw' }]}
        bgPosition="center 38%"
        badge="Système TWONG"
        title={<>La fixation mobile pour une <span className="text-red">signalisation temporaire</span> plus rapide.</>}
        subtitle="Un système breveté de fixation mobile pour installer vos équipements sans outil ni perçage sur les dispositifs de retenue adaptés."
        primaryCta={{ label: 'Demander la disponibilité', href: '/contact' }}
        secondaryCta={{ label: 'Demander une démonstration', href: '/contact' }}
      />

      <section className="section-pad bg-white" aria-labelledby="twong-system-title">
        <div className="container">
          <FeatureBlock
            image={{
              src: twongSystemImage.fallback,
              alt: 'Système de fixation mobile TWONG',
              sources: [{ srcSet: twongSystemImage.webpSrcSet, type: 'image/webp', sizes: twongSystemImage.sizes }],
              sizes: twongSystemImage.sizes,
            }}
            imageBadge="Breveté"
            imageClassName="object-contain bg-bg-light p-6 sm:p-10"
          >
            <SectionHeader badge="Le système" title={<>Un <span className="text-red">système de fixation mobile</span> pensé pour le terrain.</>} />
            <p className="mb-6 text-gray-dark leading-relaxed">
              TWONG permet le montage provisoire de panneaux de signalisation, d’écrans de protection et d’équipements temporaires sur les glissières et autres dispositifs de retenue compatibles.
            </p>
            <ul className="grid gap-3 sm:grid-cols-3">
              {[
                ['10 secondes', 'Une simple sangle à cliquet pour fixer le système.'],
                ['Sans outil', 'Un montage sans outil ni perçage du support.'],
                ['6 kg', 'Un système léger à transporter sur vos interventions.'],
              ].map(([number, text]) => (
                <li key={number} className="rounded-lg border border-gray/25 bg-bg-light p-4">
                  <strong className="block font-head text-xl font-800 text-red">{number}</strong>
                  <span className="mt-1 block text-xs leading-relaxed text-gray-dark">{text}</span>
                </li>
              ))}
            </ul>
          </FeatureBlock>
        </div>
      </section>

      <section className="section-pad bg-bg-light" aria-labelledby="twong-steps-title">
        <div className="container">
          <SectionHeader
            badge="Mise en place"
            title={<>Trois gestes. <span className="text-red">Aucun outil.</span></>}
            subtitle="Une méthode de fixation simple pour préparer rapidement vos installations temporaires."
            centered
          />
          <ol className="mt-10 grid gap-4 md:grid-cols-3">
            {steps.map(([number, heading, text]) => (
              <li key={number} className="rounded-xl bg-white p-7 shadow-card">
                <span className="mb-5 block font-head text-4xl font-900 text-red/25">{number}</span>
                <h2 className="mb-2 font-head text-xl font-800 text-dark">{heading}</h2>
                <p className="text-sm leading-relaxed text-gray-dark">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-pad bg-navy" aria-labelledby="twong-applications-title">
        <div className="container">
          <FeatureBlock
            image={{
              src: twongSignalisationImage.fallback,
              alt: 'Panneau de signalisation temporaire fixé par le système TWONG',
              sources: [{ srcSet: twongSignalisationImage.webpSrcSet, type: 'image/webp', sizes: twongSignalisationImage.sizes }],
              sizes: twongSignalisationImage.sizes,
            }}
            dark
            imageClassName="object-cover"
          >
            <SectionHeader badge="Applications" title={<>Un système, de nombreuses <span className="text-red">possibilités.</span></>} white />
            <div className="space-y-4">
              {applications.map((application) => (
                <div key={application.title} className="border-l-2 border-red pl-4">
                  <h2 className="font-head text-base font-800 text-white">{application.title}</h2>
                  <p className="mt-1 text-sm leading-relaxed text-white/75">{application.description}</p>
                </div>
              ))}
            </div>
          </FeatureBlock>
        </div>
      </section>

      <section className="section-pad bg-white" aria-labelledby="twong-compatibility-title">
        <div className="container max-w-5xl">
          <div className="rounded-xl border border-gray/20 bg-bg-light px-6 py-10 text-center shadow-card sm:px-10">
            <p className="mb-3 text-xs font-head font-700 uppercase tracking-[0.18em] text-red">Compatibilité</p>
            <h2 id="twong-compatibility-title" className="mx-auto max-w-3xl font-head text-3xl font-800 leading-tight text-dark sm:text-4xl">
              S’adapte aux dispositifs de retenue compatibles de <span className="text-red">30 à 330 mm.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-gray-dark sm:text-base">
              Le système est conçu pour les glissières de sécurité métalliques, parois de protection en béton et autres supports adaptés. Nous vous conseillons volontiers sur la compatibilité avec votre installation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-red py-16" aria-labelledby="twong-stock-title">
        <div className="container grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <p className="mb-3 text-xs font-head font-700 uppercase tracking-[0.18em] text-white/80">Robalex Signalisation</p>
            <h2 id="twong-stock-title" className="font-head text-3xl font-800 text-white sm:text-4xl">En stock à Lausanne pour vos besoins de signalisation temporaire.</h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/90">Contactez notre équipe pour vérifier la disponibilité, obtenir un devis ou organiser une démonstration sur site. Fourniture en Suisse.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <SmartLink href="/contact" className="inline-flex min-h-12 items-center justify-center rounded bg-white px-6 py-3 text-sm font-head font-700 uppercase tracking-wide text-red transition-colors hover:bg-bg-light">
              Demander la disponibilité
            </SmartLink>
            <SmartLink href="tel:+41216570705" className="inline-flex min-h-12 items-center justify-center rounded border-2 border-white px-6 py-3 text-sm font-head font-700 uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-red">
              021 657 07 05
            </SmartLink>
          </div>
        </div>
      </section>
    </>
  )
}
