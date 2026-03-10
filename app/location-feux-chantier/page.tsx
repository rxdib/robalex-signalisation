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
  { number: 1, label: 'Contactez-nous' },
  { number: 2, label: 'Devis rapide' },
  { number: 3, label: 'Installation' },
  { number: 4, label: 'Suivi & maintenance' },
  { number: 5, label: 'Retrait' },
]

// These logos are from the "Location feux" subfolder — companies that specifically rent construction lights from Robalex
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
        bgImage="/images/feux-radar-1.jpg"
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
                alt: 'Feux de chantier avec radar pédagogique intégré sur chantier routier à Lausanne',
                title: 'Feux avec radar pédagogique',
                desc: 'Combinaison idéale pour les zones de travaux : régulation du trafic et sensibilisation à la vitesse en une seule solution.',
              },
              {
                img: '/images/feux-decompte-1.jpg',
                alt: 'Feu à décompte de temps sur chantier routier en Suisse romande',
                title: 'Feu à décompte de temps',
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
          <StepProcess steps={steps} />
        </div>
      </section>

      {/* Avantages */}
      <section className="section-pad" aria-label="Avantages de notre service location feux">
        <div className="container">
          <SectionHeader badge="Pourquoi nous choisir" title={<>Nos <span className="text-red">avantages</span></>} centered />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { title: 'Réactivité',       desc: 'Devis rapide et intervention dans les meilleurs délais.' },
              { title: 'Prix compétitifs', desc: 'Tarifs transparents et compétitifs, sans frais cachés.' },
              { title: 'Couverture',       desc: "Tout le Canton de Vaud et l'ensemble de la Suisse romande." },
            ].map(a => (
              <div key={a.title} className="text-center p-6 bg-bg-light rounded-xl">
                <div className="w-2 h-10 bg-red mx-auto mb-4 rounded" />
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
