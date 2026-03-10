import type { Metadata } from 'next'
import Image from 'next/image'
import Hero from '@/components/Hero'
import SectionHeader from '@/components/SectionHeader'
import FeatureBlock from '@/components/FeatureBlock'
import CtaBand from '@/components/CtaBand'

export const metadata: Metadata = {
  title: 'À propos — Robalex Signalisation Sàrl Lausanne',
  description: "Depuis plus de 20 ans, Robalex Signalisation accompagne communes, services d'urgence et entreprises de génie civil en Suisse romande.",
  alternates: { canonical: 'https://www.robalex-signalisation.ch/a-propos/' },
  openGraph: {
    title: 'À propos — Robalex Signalisation Sàrl Lausanne',
    description: "Depuis plus de 20 ans, Robalex Signalisation accompagne communes, services d'urgence et entreprises de génie civil en Suisse romande.",
    url: 'https://www.robalex-signalisation.ch/a-propos/',
    images: [{ url: '/images/autoroute-suisse-pont.jpg' }],
  },
}

export default function AProposPage() {
  return (
    <>
      <Hero
        bgImage="/images/autoroute-suisse-pont.jpg"
        badge="À propos"
        title={<>À propos de <span className="text-red">Robalex Signalisation</span></>}
        subtitle="Plus de 20 ans au service de la signalisation routière en Suisse romande."
        primaryCta={{ label: 'Nous contacter', href: '/contact' }}
      />

      {/* Notre histoire */}
      <section className="section-pad">
        <div className="container">
          <FeatureBlock
            image={{ src: '/images/autoroute-geneve.jpg', alt: "Autoroute genevoise — terrain d'intervention de Robalex Signalisation en Suisse romande" }}
          >
            <SectionHeader badge="Notre histoire" title={<>Plus de 20 ans <span className="text-red">d'expertise</span></>} />
            <p className="text-gray-dark mb-4">Fondée en 2004 à Lausanne, Robalex Signalisation Sàrl s'est imposée comme un acteur incontournable de la signalisation routière en Suisse romande.</p>
            <p className="text-gray-dark mb-4">Notre approche repose sur deux piliers : des <strong>produits de haute qualité</strong> et un <strong>service client irréprochable</strong>. Nous intervenons pour les services d'autoroutes, les communes, la police, les corps de pompiers, les entreprises de génie civil et les régies immobilières.</p>
            <p className="text-gray-dark">En tant que représentant officiel de <strong>Triopan SA</strong> pour toute la Suisse romande, nous offrons un accès direct à la gamme complète des panneaux pliants et systèmes de signalisation innovants Triopan.</p>
          </FeatureBlock>
        </div>
      </section>

      {/* Valeurs */}
      <section className="section-pad bg-bg-light">
        <div className="container">
          <SectionHeader badge="Nos valeurs" title={<>Ce qui nous <span className="text-red">distingue</span></>} centered />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
            {[
              { title: 'Qualité', desc: 'Nous sélectionnons rigoureusement nos produits pour garantir leur conformité aux normes suisses VSS et ASTRA.' },
              { title: 'Réactivité', desc: 'Devis rapide, livraison efficace, intervention dans les meilleurs délais — nous savons que le temps est précieux.' },
              { title: 'Conseils personnalisés', desc: 'Chaque projet est différent. Notre équipe vous guide pour trouver la solution la mieux adaptée à votre situation.' },
            ].map(v => (
              <div key={v.title} className="text-center">
                <div className="w-2 h-12 bg-red mx-auto mb-4 rounded" />
                <h3 className="font-head font-700 text-lg text-dark mb-2">{v.title}</h3>
                <p className="text-gray-dark text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zone de couverture */}
      <section className="relative py-20 overflow-hidden" aria-label="Zone de couverture">
        <div className="absolute inset-0 bg-[url('/images/autoroute-suisse-pont.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="container relative z-10 text-center text-white">
          <SectionHeader
            badge="Notre couverture"
            title={<>Toute la <span className="text-red">Suisse romande</span></>}
            subtitle="Nous intervenons dans les cantons de Vaud, Genève, Valais, Fribourg, Neuchâtel et Jura."
            centered white
          />
        </div>
      </section>

      <CtaBand />
    </>
  )
}
