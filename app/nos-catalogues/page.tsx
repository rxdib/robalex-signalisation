import type { Metadata } from 'next'
import Image from 'next/image'
import Hero from '@/components/Hero'
import SectionHeader from '@/components/SectionHeader'
import FeatureBlock from '@/components/FeatureBlock'
import CtaBand from '@/components/CtaBand'

export const metadata: Metadata = {
  title: 'Nos catalogues - Signalisation et sécurité routière',
  description: 'Consultez ou téléchargez nos catalogues Triopan, Robalex et notre liste des signaux routiers pour préparer vos commandes en signalisation et sécurité routière.',
  alternates: { canonical: 'https://www.robalex-signalisation.ch/nos-catalogues/' },
  openGraph: {
    title: 'Nos catalogues - Robalex Signalisation',
    description: 'Consultez ou téléchargez nos catalogues Triopan, Robalex et notre liste des signaux routiers pour préparer vos commandes en signalisation et sécurité routière.',
    url: 'https://www.robalex-signalisation.ch/nos-catalogues/',
    images: [{ url: '/images/triopan-bg.jpg' }],
  },
}

const mainCatalogues = [
  {
    badge: 'Catalogue Triopan',
    title: 'Catalogue Signaux pliants Triopan',
    description: "En tant que représentant officiel de Triopan SA pour toute la Suisse romande, ce catalogue occupe une place centrale dans notre offre. Il couvre l'intégralité des signaux pliants, accessoires et produits spécifiques Triopan.",
    points: ['Signaux pliants', 'Accessoires Triopan', "Produits adaptés aux interventions d'urgence"],
    image: '/images/catalogue-triopan-cover.jpg',
    imageAlt: 'Couverture du catalogue signaux pliants Triopan',
    href: '/catalogues/catalogue-triopan.pdf',
    buttonLabel: 'Télécharger le catalogue',
    tone: 'red' as const,
  },
  {
    badge: 'Gamme complète',
    title: 'Catalogue Signalisation & Sécurité routière',
    description: "Notre catalogue maison couvre l'ensemble de notre gamme de produits de signalisation et de sécurité routière: panneaux OSR, cônes, barrières, miroirs, lampes et matériel de chantier.",
    points: ['Panneaux OSR R1, R2, R3', 'Matériel de chantier complet', 'Dispositifs de sécurité et mobilier urbain'],
    image: '/images/catalogue-robalex-cover.png',
    imageAlt: 'Couverture du catalogue Robalex Signalisation',
    href: '/catalogues/catalogue-robalex.pdf',
    buttonLabel: 'Télécharger le catalogue',
    tone: 'navy' as const,
  },
]

export default function NosCatalogues() {
  return (
    <>
      <Hero
        bgImage="/images/triopan-bg.jpg"
        badge="Nos catalogues"
        title={<>Nos <span className="text-red">catalogues</span> de signalisation</>}
        subtitle="Consultez ou téléchargez nos catalogues pour préparer vos commandes et découvrir l'ensemble de notre gamme."
        primaryCta={{ label: 'Nous contacter', href: '/contact' }}
      />

      <section className="section-pad bg-white" aria-label="Catalogues principaux">
        <div className="container">
          <SectionHeader
            badge="Nos publications"
            title={<>Les catalogues <span className="text-red">essentiels</span></>}
            subtitle="Deux catalogues pour retrouver rapidement les produits Triopan et l'ensemble de notre gamme en signalisation et sécurité routière."
            centered
          />
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
            {mainCatalogues.map((catalogue) => (
              <article key={catalogue.title} className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-light bg-white shadow-card transition-shadow hover:shadow-card-lg">
                <div className="aspect-[3/4] overflow-hidden bg-bg-light">
                  <Image
                    src={catalogue.image}
                    alt={catalogue.imageAlt}
                    width={400}
                    height={533}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className={`mb-3 inline-block rounded px-3 py-1 text-xs font-head font-700 uppercase tracking-wide text-white ${catalogue.tone === 'red' ? 'bg-red' : 'bg-navy'}`}>
                    {catalogue.badge}
                  </span>
                  <h2 className="mb-3 font-head text-xl font-800 text-dark">{catalogue.title}</h2>
                  <p className="mb-4 text-sm leading-relaxed text-gray-dark">{catalogue.description}</p>
                  <ul className="mb-6 flex flex-1 flex-col gap-2 text-sm text-gray-dark">
                    {catalogue.points.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="font-bold text-red">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={catalogue.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${catalogue.buttonLabel} - ouverture dans un nouvel onglet`}
                    className={`block rounded px-6 py-3 text-center text-sm font-head font-700 uppercase tracking-wide text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${catalogue.tone === 'red' ? 'bg-red hover:bg-red-dark focus-visible:outline-red' : 'bg-navy hover:bg-navy-dark focus-visible:outline-navy'}`}
                  >
                    {catalogue.buttonLabel}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-bg-light" aria-label="Référence des signaux routiers">
        <div className="container">
          <FeatureBlock
            image={{ src: '/images/catalogue-robalex-cover.png', alt: 'Couverture de la liste des signaux routiers proposée par Robalex Signalisation' }}
            imageClassName="object-contain bg-white p-6"
            imageWrapperClassName="bg-white"
            reverse
          >
            <SectionHeader
              badge="Référence pratique"
              title={<>Liste des <span className="text-red">signaux routiers</span></>}
              subtitle="Un support simple pour identifier le panneau recherché et préparer votre demande."
            />
            <p className="mb-4 text-gray-dark">
              Ce document regroupe l&apos;ensemble des signaux routiers disponibles à la commande chez Robalex Signalisation: interdiction, obligation, danger, indication et localisation.
            </p>
            <ul className="mb-6 flex flex-col gap-2 text-sm text-gray-dark">
              {['Tous les symboles OSR', 'Tous les formats disponibles', 'Demande sur devis selon votre besoin'].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="font-bold text-red">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="/catalogues/Robalex_Signaux_Routiers.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Télécharger la liste des signaux routiers - ouverture dans un nouvel onglet"
              className="inline-block rounded bg-navy px-6 py-3 text-sm font-head font-700 uppercase tracking-wide text-white transition-colors hover:bg-navy-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
            >
              Télécharger la liste
            </a>
          </FeatureBlock>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
