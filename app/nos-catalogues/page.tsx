import type { Metadata } from 'next'
import Image from 'next/image'
import Hero from '@/components/Hero'
import SectionHeader from '@/components/SectionHeader'
import CtaBand from '@/components/CtaBand'
import JsonLd from '@/components/JsonLd'
import { buildMetadata } from '@/app/seo'
import { createBreadcrumbSchema, createCollectionPageSchema } from '@/app/schema'

const pageTitle = 'Nos catalogues'
const pageDescription =
  'Consultez ou téléchargez nos catalogues Triopan, Robalex Signalisation Sàrl et notre référence pratique des signaux routiers pour préparer vos commandes.'

export const metadata: Metadata = buildMetadata({
  title: pageTitle,
  description: pageDescription,
  path: '/nos-catalogues/',
  image: '/images/triopan-bg.jpg',
  imageAlt: 'Catalogues de signalisation et sécurité routière',
})

type CatalogueCard = {
  badge: string
  title: string
  kicker: string
  description: string
  image: string
  imageAlt: string
  href: string
  buttonLabel: string
  tone: 'red' | 'navy'
}

const mainCatalogues: CatalogueCard[] = [
  {
    badge: 'Catalogue Triopan',
    title: 'Catalogue Triopan',
    kicker: 'Signaux pliants',
    description:
      "En tant que représentant officiel de Triopan SA en Suisse romande, nous mettons à disposition le catalogue de référence pour les signaux pliants et accessoires Triopan.",
    image: '/images/catalogue-triopan-cover.jpg',
    imageAlt: 'Couverture du catalogue Triopan',
    href: '/catalogues/catalogue-triopan.pdf',
    buttonLabel: 'Télécharger le catalogue',
    tone: 'red',
  },
  {
    badge: 'Robalex Signalisation Sàrl',
    title: 'Catalogue 2025',
    kicker: 'Signalisation et sécurité routière',
    description:
      'Notre catalogue couvre l’ensemble de notre gamme de produits de signalisation et sécurité routière : flashs, panneaux, cônes, barrières, miroirs, mobilier urbain, balisage et matériel de chantier.',
    image: '/images/catalogue-robalex-cover.png',
    imageAlt: 'Couverture du catalogue 2025 Robalex Signalisation Sàrl',
    href: '/catalogues/catalogue-robalex.pdf',
    buttonLabel: 'Télécharger le catalogue',
    tone: 'navy',
  },
]

function CatalogueCard({ catalogue }: { catalogue: CatalogueCard }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-light bg-white shadow-card transition-shadow hover:shadow-card-lg">
      <div className="aspect-[3/4] overflow-hidden bg-bg-light">
        <Image
          src={catalogue.image}
          alt={catalogue.imageAlt}
          width={400}
          height={533}
          sizes="(max-width: 767px) 100vw, 50vw"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span
          className={`mb-3 inline-block rounded px-3 py-1 text-xs font-head font-700 uppercase tracking-wide text-white ${
            catalogue.tone === 'red' ? 'bg-red' : 'bg-navy'
          }`}
        >
          {catalogue.badge}
        </span>
        <h2 className="mb-2 font-head text-xl font-800 text-dark">{catalogue.title}</h2>
        <p className="mb-4 text-xs font-head font-700 uppercase tracking-[0.22em] text-gray-dark">
          {catalogue.kicker}
        </p>
        <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-dark">{catalogue.description}</p>
        <a
          href={catalogue.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${catalogue.buttonLabel} - ouverture dans un nouvel onglet`}
          className={`block rounded px-6 py-3 text-center text-sm font-head font-700 uppercase tracking-wide text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
            catalogue.tone === 'red'
              ? 'bg-red hover:bg-red-dark focus-visible:outline-red'
              : 'bg-navy hover:bg-navy-dark focus-visible:outline-navy'
          }`}
        >
          {catalogue.buttonLabel}
        </a>
      </div>
    </article>
  )
}

export default function NosCatalogues() {
  return (
    <>
      <JsonLd
        data={[
          createCollectionPageSchema({
            name: `${pageTitle} - Robalex Signalisation`,
            description: pageDescription,
            path: '/nos-catalogues/',
            image: '/images/triopan-bg.jpg',
          }),
          createBreadcrumbSchema([
            { name: 'Accueil', path: '/' },
            { name: 'Nos catalogues', path: '/nos-catalogues/' },
          ]),
        ]}
      />
      <Hero
        bgImage="/images/triopan-bg.jpg"
        badge="Nos catalogues"
        title={
          <>
            Nos <span className="text-red">catalogues</span> de signalisation
          </>
        }
        subtitle="Consultez ou téléchargez nos catalogues pour préparer vos commandes et découvrir l'ensemble de notre gamme."
        primaryCta={{ label: 'Nous contacter', href: '/contact' }}
      />

      <section className="section-pad bg-white" aria-label="Catalogues principaux">
        <div className="container">
          <SectionHeader
            badge="Nos publications"
            title={
              <>
                Le catalogue <span className="text-red">essentiel</span>
              </>
            }
            subtitle="Deux catalogues pour retrouver rapidement les signaux pliants Triopan et l'ensemble de notre gamme de signalisation et sécurité routière."
            centered
          />
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
            {mainCatalogues.map((catalogue) => (
              <CatalogueCard key={catalogue.title} catalogue={catalogue} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-bg-light" aria-label="Référence pratique des signaux routiers">
        <div className="container">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
            <div>
              <SectionHeader
                badge="Répertoire visuel"
                title={
                  <>
                    Robalex, <span className="text-red">signaux routiers</span>
                  </>
                }
                subtitle="Presque tous les signaux routiers OSR rassemblés dans un seul document pratique."
              />
              <p className="mb-4 text-gray-dark">
                Ce document maison n&apos;est pas un catalogue commercial. C&apos;est une référence visuelle pensée pour identifier rapidement un signal et retrouver plus facilement la bonne désignation.
              </p>
              <p className="mb-6 text-gray-dark">
                Utile pour préparer une commande, vérifier un panneau avant intervention ou garder une aide simple à portée de main au bureau comme sur chantier.
              </p>
              <ul className="mb-8 grid gap-3 text-sm text-gray-dark">
                {[
                  'Repérer rapidement un signal',
                  'Vérifier une référence visuelle avant commande',
                  'Garder un support simple au bureau ou sur chantier',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 rounded-lg border border-gray-light bg-white px-4 py-3">
                    <span className="mt-0.5 font-bold text-red">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="/catalogues/Robalex_Signaux_Routiers.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Télécharger la liste des signaux routiers - ouverture dans un nouvel onglet"
                  className="inline-block rounded bg-navy px-6 py-3 text-sm font-head font-700 uppercase tracking-wide text-white transition-colors hover:bg-navy-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
                >
                  Télécharger la liste
                </a>
                <p className="text-sm text-gray-dark">Support complémentaire à garder sous la main pour retrouver rapidement un signal.</p>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-light bg-white p-4 shadow-card lg:p-6">
              <div className="overflow-hidden rounded-xl border border-gray-light bg-[#f4f1eb]">
                <Image
                  src="/images/catalogue-signaux-routiers-preview.png"
                  alt="Aperçu du répertoire visuel Robalex des signaux routiers"
                  width={1600}
                  height={1100}
                  sizes="(max-width: 1023px) 100vw, 55vw"
                  className="h-auto w-full object-cover"
                />
              </div>
              <div className="mt-4 rounded-xl bg-bg-light px-4 py-4">
                <p className="mb-1 text-xs font-head font-700 uppercase tracking-[0.18em] text-red">Aperçu du document</p>
                <p className="text-sm text-gray-dark">
                  Une première page lisible avec les signaux et leurs références, pour comprendre immédiatement l&apos;utilité du document.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
