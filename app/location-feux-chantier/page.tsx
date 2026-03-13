import type { Metadata } from 'next'
import Image from 'next/image'
import Hero from '@/components/Hero'
import SectionHeader from '@/components/SectionHeader'
import StepProcess from '@/components/StepProcess'
import CtaBand from '@/components/CtaBand'

export const metadata: Metadata = {
  title: 'Location feux de chantier — Suisse romande',
  description: 'Location de feux de chantier clé en main dans tout le Canton de Vaud et en Suisse romande. Installation, maintenance et retrait inclus. Devis rapide.',
  alternates: { canonical: 'https://www.robalex-signalisation.ch/location-feux-chantier/' },
  openGraph: {
    title: 'Location feux de chantier clé en main — Suisse romande',
    description: 'Location de feux de chantier dans tout le Canton de Vaud et en Suisse romande. Installation, maintenance et retrait inclus.',
    url: 'https://www.robalex-signalisation.ch/location-feux-chantier/',
    images: [{ url: '/images/feux-radar-1.jpg' }],
  },
}

const steps = [
  { number: 1, label: 'Contactez-nous',      desc: 'Appelez ou envoyez votre demande en ligne.' },
  { number: 2, label: 'Devis rapide',         desc: 'Réponse sous 24h, prix tout compris.' },
  { number: 3, label: 'Installation',         desc: 'Pose sur site par notre équipe.' },
  { number: 4, label: 'Suivi & maintenance',  desc: 'Disponible 7j/7 pendant toute la durée.' },
  { number: 5, label: 'Retrait',              desc: 'Démontage et reprise du matériel inclus.' },
]

const clientLogos = [
  { src: '/images/Logo client/Location feux/Logo_AGV-Toni.jpg',              alt: 'AGV Toni — client location feux de chantier Robalex Signalisation' },
  { src: '/images/Logo client/Location feux/Logo_bernasconi.png',             alt: 'Bernasconi — client location feux de chantier Robalex Signalisation' },
  { src: '/images/Logo client/Location feux/Logo_cornaz-fontanellaz.avif',    alt: 'Cornaz Fontanellaz — client location feux de chantier Robalex Signalisation' },
  { src: '/images/Logo client/Location feux/Logo_walo.jpg',                   alt: 'Walo Bertschinger — client location feux de chantier Robalex Signalisation' },
  { src: '/images/Logo client/Location feux/Romande_Energie_Logo.svg',        alt: 'Romande Energie — client location feux de chantier Robalex Signalisation' },
]

export default function LocationFeux() {
  return (
    <>
      <Hero
        bgImage="/images/feux-decompte-2.jpg"
        badge="Location feux de chantier"
        title={<>Location de <span className="text-red">feux de chantier</span> en Suisse romande</>}
        subtitle="Service clé en main : installation, maintenance et retrait toujours inclus. Nous intervenons dans tout le Canton de Vaud et en Suisse romande."
        primaryCta={{ label: 'Demander un devis', href: '/contact' }}
        secondaryCta={{ label: '021 657 07 05', href: 'tel:+41216570705' }}
      />

      {/* Nos feux */}
      <section className="section-pad" aria-label="Types de feux de chantier">
        <div className="container">
          <SectionHeader
            badge="Notre équipement"
            title={<>Nos types de <span className="text-red">feux de chantier</span></>}
            subtitle="Installation et retrait toujours inclus dans le service."
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              {
                img: '/images/feux-radar-2.jpg',
                alt: 'Feux de chantier avec radar sur chantier routier à Lausanne',
                title: 'Feux avec radar',
                desc: 'Les feux détectent automatiquement les véhicules grâce à leur radar et peuvent ainsi gérer le trafic de façon intelligente.',
              },
              {
                img: '/images/feux-decompte-1.jpg',
                alt: 'Feux avec décompte de temps sur chantier routier en Suisse romande',
                title: 'Feux avec décompte de temps',
                desc: "Affiche le temps d'attente restant aux usagers, réduisant la frustration et améliorant la fluidité du trafic.",
              },
            ].map(f => (
              <article key={f.title} className="bg-white border border-gray-light rounded-xl overflow-hidden hover:shadow-card transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <Image src={f.img} alt={f.alt} width={500} height={280} className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="font-head font-700 text-lg text-dark mb-2">{f.title}</h3>
                  <p className="text-gray-dark text-sm leading-relaxed">{f.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="section-pad bg-bg-light" aria-label="Processus de location feux de chantier">
        <div className="container">
          <SectionHeader
            badge="Notre processus"
            title={<>Comment ça <span className="text-red">marche</span> ?</>}
            centered
          />
          <p className="text-gray-dark text-sm text-center max-w-2xl mx-auto mb-8">
            Nous gérons l&apos;intégralité de la location : installation sur site, maintenance préventive, remplacement des batteries et dépannage en cas de panne. Vous n&apos;avez rien à gérer — nous nous occupons de tout.
          </p>
          <StepProcess steps={steps} />
        </div>
      </section>

      {/* Avantages */}
      <section className="section-pad" aria-label="Avantages de notre service location feux">
        <div className="container">
          <SectionHeader badge="Pourquoi nous choisir" title={<>Nos <span className="text-red">avantages</span></>} centered />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              {
                icon: <ClockIcon />,
                title: 'Réactivité',
                desc: "Devis sous 24h, livraison et pose dans les meilleurs délais, même pour les interventions d'urgence.",
              },
              {
                icon: <TagIcon />,
                title: 'Prix compétitifs',
                desc: 'Tarifs transparents et compétitifs, sans frais cachés. Tout est inclus : matériel, installation et retrait.',
              },
              {
                icon: <MapPinIcon />,
                title: 'Couverture étendue',
                desc: "Tout le Canton de Vaud et l'ensemble de la Suisse romande. Interventions possibles 7j/7.",
              },
            ].map(a => (
              <div key={a.title} className="text-center p-6 bg-bg-light rounded-xl">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-red/10 text-red mx-auto mb-4">
                  {a.icon}
                </div>
                <h3 className="font-head font-700 text-lg text-dark mb-2">{a.title}</h3>
                <p className="text-gray-dark text-sm">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ils nous font confiance */}
      <section className="section-pad bg-bg-light" aria-label="Clients location feux de chantier">
        <div className="container">
          <SectionHeader badge="Références" title={<>Ils nous font <span className="text-red">confiance</span></>} centered />
          <div className="flex flex-wrap justify-center items-center gap-8">
            {clientLogos.map(c => (
              <div key={c.alt} className="opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                <Image src={c.src} alt={c.alt} width={110} height={55} className="object-contain max-h-14" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}

function ClockIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function TagIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
    </svg>
  )
}

function MapPinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  )
}
