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
        subtitle="Depuis 2004, nous assurons la fourniture, la pose et la sécurisation des chantiers en Suisse romande — conformes aux normes OFROU/VSS."
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
              {
                icon: <QualityIcon />,
                title: 'Qualité',
                desc: 'Nos produits sont conformes aux normes OFROU/VSS et sélectionnés pour leur durabilité et leur lisibilité optimale sur le terrain.',
              },
              {
                icon: <ReactivityIcon />,
                title: 'Réactivité',
                desc: "Devis sous 24h et intervention dans les meilleurs délais — disponibles pour les urgences et les interventions de nuit.",
              },
              {
                icon: <AdviceIcon />,
                title: 'Conseils personnalisés',
                desc: "De la conception à la pose, notre équipe terrain vous accompagne pour trouver la solution la mieux adaptée à votre situation.",
              },
            ].map(v => (
              <div key={v.title} className="text-center">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-red/10 text-red mx-auto mb-4">
                  {v.icon}
                </div>
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
            subtitle="Interventions dans 6 cantons, de la signalisation temporaire de chantier aux signaux OSR permanents."
            centered white
          />
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {['VD — Vaud', 'GE — Genève', 'VS — Valais', 'FR — Fribourg', 'NE — Neuchâtel', 'JU — Jura'].map(c => (
              <span key={c} className="bg-white/15 border border-white/30 text-white text-sm font-head font-600 px-4 py-2 rounded-full">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}

function QualityIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  )
}

function ReactivityIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  )
}

function AdviceIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
    </svg>
  )
}
