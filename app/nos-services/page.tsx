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
    img: '/images/signalisation-chantier-hd.jpg',
    alt: 'Signalisation temporaire de chantier posée par Robalex Signalisation à Lausanne',
    badge: 'Service 1',
    titleNode: <>Signalisation <span className="text-red">temporaire</span></>,
    desc: "Nous prenons en charge la mise en place complète de votre signalisation de chantier : fourniture, transport et installation sur site selon les normes en vigueur (VSS 40 886). Nous suivons les plans fournis ou conseillons si aucun plan n'est disponible.",
    points: ['Fermetures de routes','Travaux sur chaussée',"Interventions d'urgence",'Événements temporaires'],
    reverse: false,
  },
  {
    img: '/images/installation-panneaux.jpg',
    alt: 'Installation de panneaux de signalisation permanente par Robalex Signalisation',
    badge: 'Service 2',
    titleNode: <>Signalisation <span className="text-red">permanente</span></>,
    desc: "Fourniture et pose de panneaux de signalisation permanente conformes à l'OSR : zones 30, passages piétons, panneaux d'interdiction et directionnels. Tous nos panneaux sont disponibles en rétro-réflexion R1, R2 ou R3.",
    points: ['Zones 30 et 20','Passages piétons','Panneaux indicateurs','Mise à ban'],
    reverse: true,
  },
  {
    img: '/images/travaux-marquage-parking.jpg',
    alt: 'Marquage de places de parking réalisé par Robalex Signalisation en Suisse romande',
    badge: 'Service 3',
    titleNode: <>Marquage <span className="text-red">routier</span></>,
    desc: 'Nous réalisons tout type de marquage routier : lignes, passages piétons, zones de stationnement numérotées, flèches directionnelles et signalétique au sol.',
    points: ['Lignes axiales et de rive','Passages piétons','Marquage de parking & numérotation','Flèches et symboles'],
    reverse: false,
  },
  {
    img: '/images/travaux-location-materiel.jpg',
    alt: 'Location et installation de matériel de signalisation temporaire pour chantier en Suisse romande',
    badge: 'Service 4',
    titleNode: <>Location de <span className="text-red">matériel</span> de signalisation</>,
    desc: "Nous louons et installons le matériel de signalisation routière pour toutes vos situations temporaires. Service complet : fourniture, installation sur site, et retrait en fin d'intervention. Nous suivons les plans fournis ou gérons la signalisation nous-mêmes si aucun plan n'est disponible. Norme de référence : VSS 40 886.",
    points: ['Fermetures de routes','Pose de grues et engins de chantier','Modifications temporaires de circulation','Réservation de places de stationnement'],
    reverse: true,
  },
  {
    img: '/images/panneau-candelabre.jpg',
    alt: 'Montage et installation de panneau de signalisation sur candélabre par Robalex Signalisation',
    badge: 'Service 5',
    titleNode: <>Montage et <span className="text-red">installation</span></>,
    desc: "Nos équipes prennent en charge le montage et l'installation de tous vos équipements de signalisation sur site, qu'il s'agisse de panneaux permanents ou de dispositifs temporaires. Interventions conformes à la norme VSS 40 886, sur la base de vos plans ou avec notre propre expertise terrain.",
    points: ['Pose de panneaux permanents','Installation de signalisation temporaire','Démontage et retrait du matériel','Interventions d\'urgence et délais courts'],
    reverse: false,
  },
]

export default function NosServices() {
  return (
    <>
      <Hero
        bgImage="/images/travaux-installation.jpg"
        badge="Nos services"
        title={<>Nos services de <span className="text-red">signalisation routière</span></>}
        subtitle="Nous prenons en charge l'ensemble : fourniture, pose et signalisation selon les normes en vigueur, notamment la norme VSS 40 886."
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
