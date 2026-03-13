import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Hero from '@/components/Hero'
import SectionHeader from '@/components/SectionHeader'
import FeatureBlock from '@/components/FeatureBlock'
import CtaBand from '@/components/CtaBand'

export const metadata: Metadata = {
  title: 'Nos services — Pose et installation signalisation Vaud',
  description: 'Pose et installation de signalisation routière selon la norme VSS 40 886. Signalisation temporaire, permanente, marquage routier et location de matériel.',
  alternates: { canonical: 'https://www.robalex-signalisation.ch/nos-services/' },
  openGraph: {
    title: 'Nos services de signalisation routière — Robalex Signalisation',
    description: 'Pose et installation de signalisation routière selon la norme VSS 40 886. Signalisation temporaire, permanente, marquage routier et location de matériel.',
    url: 'https://www.robalex-signalisation.ch/nos-services/',
    images: [{ url: '/images/travaux-installation.jpg' }],
  },
}

const services: Array<{
  img: string
  alt: string
  badge: string
  titleNode: ReactNode
  desc: string
  points: string[]
  reverse: boolean
}> = [
  {
    img: '/images/installation-signalisation-temporaire-location.jpg',
    alt: 'Installation de signalisation temporaire de chantier par Robalex Signalisation',
    badge: 'Signalisation temporaire',
    titleNode: <>Signalisation <span className="text-red">temporaire</span></>,
    desc: "Nous prenons en charge la mise en place complète de votre signalisation de chantier : fourniture, transport et installation sur site conformément aux directives OFROU et à la norme VSS 40 886. Nous nous adaptons aux plans fournis ou proposons notre expertise terrain si aucun plan n'est disponible.",
    points: ['Fermetures de routes','Travaux sur chaussée',"Interventions d'urgence",'Événements temporaires'],
    reverse: false,
  },
  {
    img: '/images/installation-panneaux.jpg',
    alt: 'Installation de panneaux de signalisation permanente par Robalex Signalisation',
    badge: 'Signalisation permanente',
    titleNode: <>Signalisation <span className="text-red">permanente</span></>,
    desc: "Fourniture et pose de signaux OSR conformes à l'ordonnance sur la signalisation routière : zones 30, passages piétons, panneaux d'interdiction et directionnels. Tous nos signaux sont disponibles en rétro-réflexion R1, R2 ou R3.",
    points: ['Zones 30 et 20','Passages piétons','Panneaux d\'interdiction','Panneaux indicateurs','Chemins privés','Mise à ban'],
    reverse: true,
  },
  {
    img: '/images/travaux-marquage-parking.jpg',
    alt: 'Marquage de places de parking réalisé par Robalex Signalisation en Suisse romande',
    badge: 'Marquage routier',
    titleNode: <>Marquage <span className="text-red">routier</span></>,
    desc: 'Nous réalisons tout type de marquage routier conformes aux prescriptions suisses : lignes axiales et de rive, passages piétons, zones de stationnement numérotées, flèches directionnelles et signalétique au sol.',
    points: ['Lignes axiales et de rive','Passages piétons','Marquage de parking & numérotation','Flèches et symboles'],
    reverse: false,
  },
  {
    img: '/images/travaux-location-materiel.jpg',
    alt: 'Location et installation de matériel de signalisation temporaire pour chantier en Suisse romande',
    badge: 'Location de matériel',
    titleNode: <>Location de <span className="text-red">matériel</span> de signalisation</>,
    desc: "Location et installation de matériel de signalisation routière pour toutes vos interventions temporaires. Service complet et clé en main : fourniture, installation sur site et retrait en fin d'intervention, conformément à la norme VSS 40 886.",
    points: ['Fermetures de routes','Pose de grues et engins de chantier','Modifications temporaires de circulation','Réservation de places de stationnement'],
    reverse: true,
  },
  {
    img: '/images/panneau-candelabre.jpg',
    alt: 'Montage et installation de panneau de signalisation sur candélabre par Robalex Signalisation',
    badge: 'Montage et installation',
    titleNode: <>Montage et <span className="text-red">installation</span></>,
    desc: "Nos équipes prennent en charge le montage et l'installation de tous vos équipements de signalisation sur site, qu'il s'agisse de signaux permanents ou de dispositifs temporaires. Interventions conformes aux directives OFROU, sur la base de vos plans ou avec notre propre expertise terrain.",
    points: ['Pose de panneaux permanents','Installation de signalisation temporaire','Démontage et retrait du matériel','Interventions d\'urgence et délais courts'],
    reverse: false,
  },
]

export default function NosServices() {
  return (
    <>
      <Hero
        bgImage="/images/passage-pieton.jpg"
        badge="Nos services"
        title={<>Nos services de <span className="text-red">signalisation routière</span></>}
        subtitle="De la conception à la pose, nous prenons en charge l'ensemble de vos besoins en signalisation routière, conformément aux directives OFROU et à la norme VSS 40 886."
        primaryCta={{ label: 'Demander un devis', href: '/contact' }}
      />

      {services.map((s, i) => (
        <section key={s.badge} className={`section-pad ${i % 2 === 1 ? 'bg-bg-light' : ''}`}>
          <div className="container">
            <FeatureBlock
              image={{ src: s.img, alt: s.alt }}
              reverse={s.reverse}
            >
              <SectionHeader badge={s.badge} title={s.titleNode} />
              <p className="text-gray-dark mb-4">{s.desc}</p>
              <ul className="flex flex-col gap-2 mb-6">
                {s.points.map(p => (
                  <li key={p} className="flex items-center gap-2 text-gray-dark text-sm">
                    <span className="text-red font-bold">✓</span> {p}
                  </li>
                ))}
              </ul>
              <a href="/contact" className="inline-block bg-red hover:bg-red-dark text-white font-head font-700 text-sm uppercase tracking-wide px-6 py-3 rounded transition-colors">
                Demander un devis
              </a>
            </FeatureBlock>
          </div>
        </section>
      ))}

      <CtaBand />
    </>
  )
}
