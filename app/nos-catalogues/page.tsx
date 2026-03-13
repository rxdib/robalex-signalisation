import type { Metadata } from 'next'
import Image from 'next/image'
import Hero from '@/components/Hero'
import SectionHeader from '@/components/SectionHeader'
import CtaBand from '@/components/CtaBand'

export const metadata: Metadata = {
  title: 'Catalogues — Signaux pliants Triopan & Robalex',
  description: 'Téléchargez nos catalogues : signaux pliants Triopan (représentant officiel Suisse romande) et catalogue complet de signalisation et sécurité routière Robalex.',
  alternates: { canonical: 'https://www.robalex-signalisation.ch/nos-catalogues/' },
  openGraph: {
    title: 'Catalogues Triopan & signalisation — Robalex Signalisation',
    description: 'Téléchargez nos catalogues : signaux pliants Triopan et catalogue complet de signalisation et sécurité routière Robalex.',
    url: 'https://www.robalex-signalisation.ch/nos-catalogues/',
    images: [{ url: '/images/triopan-bg.jpg' }],
  },
}

export default function NosCatalogues() {
  return (
    <>
      <Hero
        bgImage="/images/triopan-bg.jpg"
        badge="Nos catalogues"
        title={<>Nos <span className="text-red">catalogues</span> de signalisation</>}
        subtitle="Consultez ou téléchargez nos catalogues pour découvrir l'ensemble de notre gamme."
        primaryCta={{ label: 'Nous contacter', href: '/contact' }}
      />

      <section className="section-pad" aria-label="Nos catalogues à télécharger">
        <div className="container">
          <SectionHeader
            badge="Nos publications"
            title={<>Nos catalogues à <span className="text-red">votre disposition</span></>}
            subtitle="Consultez ou téléchargez nos catalogues pour découvrir notre gamme complète."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">

            {/* Catalogue Triopan */}
            <article className="bg-white border border-gray-light rounded-xl overflow-hidden shadow-card hover:shadow-card-lg transition-shadow">
              <div className="aspect-[3/4] overflow-hidden bg-bg-light">
                <Image
                  src="/images/catalogue-triopan-cover.jpg"
                  alt="Couverture catalogue signaux pliants Triopan — Robalex Signalisation représentant Suisse romande"
                  width={400}
                  height={533}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block bg-red text-white text-xs font-head font-700 uppercase tracking-wide px-3 py-1 rounded mb-3">Produit phare</span>
                <h2 className="font-head font-800 text-xl text-dark mb-3">Catalogue Signaux pliants Triopan</h2>
                <p className="text-gray-dark text-sm leading-relaxed mb-4">
                  En tant que représentant officiel de Triopan SA pour toute la Suisse romande, ce catalogue est le cœur de notre offre. Il couvre l&apos;intégralité des signaux pliants, accessoires et produits spécifiques Triopan — fabrication sur mesure possible.
                </p>
                <ul className="flex flex-col gap-1.5 mb-5 text-sm text-gray-dark">
                  {['Signaux pliants (tous symboles et textes possibles)','Accessoires Triopan','Systèmes modulaires pour interventions d\'urgence'].map(i => (
                    <li key={i} className="flex items-center gap-2"><span className="text-red font-bold">✓</span>{i}</li>
                  ))}
                </ul>
                <a
                  href="/catalogues/catalogue-triopan.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Télécharger le catalogue Triopan (s'ouvre dans un nouvel onglet)"
                  className="w-full block text-center bg-red hover:bg-red-dark text-white font-head font-700 text-sm uppercase tracking-wide px-6 py-3 rounded transition-colors"
                >
                  Télécharger le catalogue
                </a>
              </div>
            </article>

            {/* Catalogue Robalex */}
            <article className="bg-white border border-gray-light rounded-xl overflow-hidden shadow-card hover:shadow-card-lg transition-shadow">
              <div className="aspect-[3/4] overflow-hidden bg-bg-light">
                <Image
                  src="/images/catalogue-robalex-cover.png"
                  alt="Couverture catalogue signalisation et sécurité routière Robalex Signalisation"
                  width={400}
                  height={533}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block bg-navy text-white text-xs font-head font-700 uppercase tracking-wide px-3 py-1 rounded mb-3">Gamme complète</span>
                <h2 className="font-head font-800 text-xl text-dark mb-3">Catalogue Signalisation & Sécurité routière</h2>
                <p className="text-gray-dark text-sm leading-relaxed mb-4">
                  Notre catalogue maison couvre l&apos;ensemble de notre gamme de produits de signalisation et de sécurité routière : panneaux OSR, cônes, barrières, miroirs, lampes, et tout le matériel de chantier.
                </p>
                <ul className="flex flex-col gap-1.5 mb-5 text-sm text-gray-dark">
                  {['Panneaux OSR R1, R2, R3','Matériel de chantier complet','Dispositifs de sécurité et mobilier urbain'].map(i => (
                    <li key={i} className="flex items-center gap-2"><span className="text-red font-bold">✓</span>{i}</li>
                  ))}
                </ul>
                <a
                  href="/catalogues/catalogue-robalex.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Télécharger le catalogue Robalex (s'ouvre dans un nouvel onglet)"
                  className="w-full block text-center bg-navy hover:bg-navy-dark text-white font-head font-700 text-sm uppercase tracking-wide px-6 py-3 rounded transition-colors"
                >
                  Télécharger le catalogue
                </a>
              </div>
            </article>

          </div>

          <div className="max-w-sm mx-auto mt-10">
            <article className="bg-white border border-gray-light rounded-xl overflow-hidden shadow-card hover:shadow-card-lg transition-shadow">
              <div className="aspect-[3/4] overflow-hidden bg-bg-light">
                <Image
                  src="/images/catalogue-robalex-cover.png"
                  alt="Couverture liste des signaux routiers OSR — Robalex Signalisation"
                  width={400}
                  height={533}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block bg-navy text-white text-xs font-head font-700 uppercase tracking-wide px-3 py-1 rounded mb-3">Référence OSR</span>
                <h2 className="font-head font-800 text-xl text-dark mb-3">Liste des signaux routiers OSR</h2>
                <p className="text-gray-dark text-sm leading-relaxed mb-4">
                  Répertoire complet de tous les signaux routiers OSR disponibles à la commande chez Robalex Signalisation — panneaux d&apos;interdiction, obligation, danger, indication et localisation.
                </p>
                <ul className="flex flex-col gap-1.5 mb-5 text-sm text-gray-dark">
                  {['Tous les symboles OSR', 'Tous formats disponibles', 'Sur devis'].map(i => (
                    <li key={i} className="flex items-center gap-2"><span className="text-red font-bold">✓</span>{i}</li>
                  ))}
                </ul>
                <a
                  href="/catalogues/Robalex_Signaux_Routiers.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Télécharger la liste des signaux routiers OSR (s'ouvre dans un nouvel onglet)"
                  className="w-full block text-center bg-navy hover:bg-navy-dark text-white font-head font-700 text-sm uppercase tracking-wide px-6 py-3 rounded transition-colors"
                >
                  Télécharger la liste
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
