import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Hero from '@/components/Hero'
import SectionHeader from '@/components/SectionHeader'
import FeatureBlock from '@/components/FeatureBlock'
import CtaBand from '@/components/CtaBand'
import JsonLd from '@/components/JsonLd'
import { buildMetadata } from '@/app/seo'
import { createBreadcrumbSchema, createCollectionPageSchema, createServiceSchema } from '@/app/schema'

const pageTitle = 'Nos services'
const pageDescription =
  'Planification, installation, marquage routier et location de matériel pour vos besoins en signalisation et sécurité routière en Suisse romande.'

export const metadata: Metadata = buildMetadata({
  title: pageTitle,
  description: pageDescription,
  path: '/nos-services/',
  image: '/images/travaux-installation.jpg',
  imageAlt: 'Services de signalisation et sécurité routière en Suisse romande',
})

const services: Array<{
  img: string
  alt: string
  badge: string
  titleNode: ReactNode
  desc: string
  points: string[]
  reverse: boolean
  imageClassName?: string
}> = [
  {
    img: '/images/installation-signalisation-temporaire-location.jpg',
    alt: 'Installation de signalisation temporaire de chantier par Robalex Signalisation',
    badge: 'Signalisation temporaire',
    titleNode: <>Signalisation <span className="text-red">temporaire</span></>,
    desc: "Nous prenons en charge la mise en place complète de votre signalisation de chantier : fourniture, transport, installation sur site et adaptation aux contraintes du terrain. Nous travaillons sur la base de vos plans ou de vos besoins d'intervention.",
    points: ['Fermetures de routes','Travaux sur chaussée',"Interventions d'urgence",'Événements temporaires'],
    reverse: false,
    imageClassName: 'object-[56%_center]',
  },
  {
    img: '/images/installation-panneaux.jpg',
    alt: 'Installation de panneaux de signalisation permanente par Robalex Signalisation',
    badge: 'Signalisation permanente',
    titleNode: <>Signalisation <span className="text-red">permanente</span></>,
    desc: "Fourniture et pose de panneaux permanents pour zones 30, passages piétons, interdictions, indications et accès privés. Tous nos signaux sont disponibles en rétro-réflexion R1, R2 ou R3.",
    points: ['Zones 30 et 20','Passages piétons','Panneaux d\'interdiction','Panneaux indicateurs','Chemins privés','Mise à ban'],
    reverse: true,
    imageClassName: 'object-[54%_center]',
  },
  {
    img: '/images/travaux-marquage-parking.jpg',
    alt: 'Marquage de places de parking réalisé par Robalex Signalisation en Suisse romande',
    badge: 'Marquage routier',
    titleNode: <>Marquage <span className="text-red">routier</span></>,
    desc: 'Nous réalisons les marquages au sol nécessaires pour guider, protéger et organiser la circulation sur voirie, parkings et sites privés.',
    points: ['Lignes axiales et de rive','Passages piétons','Marquage de parking & numérotation','Flèches et symboles'],
    reverse: false,
    imageClassName: 'object-[50%_center]',
  },
  {
    img: '/images/travaux-location-materiel.jpg',
    alt: 'Location et installation de matériel de signalisation temporaire pour chantier en Suisse romande',
    badge: 'Location de matériel',
    titleNode: <>Location de <span className="text-red">matériel</span> de signalisation</>,
    desc: "Location et installation de matériel de signalisation pour toutes vos interventions temporaires. Service complet et clé en main avec pose sur site, suivi pendant l'intervention et retrait en fin de chantier.",
    points: ['Fermetures de routes','Pose de grues et engins de chantier','Modifications temporaires de circulation','Réservation de places de stationnement'],
    reverse: true,
    imageClassName: 'object-[34%_center]',
  },
  {
    img: '/images/panneau-candelabre.jpg',
    alt: 'Montage et installation de panneau de signalisation sur candélabre par Robalex Signalisation',
    badge: 'Montage et installation',
    titleNode: <>Montage et <span className="text-red">installation</span></>,
    desc: "Nos équipes assurent le montage et l'installation de vos équipements sur site, qu'il s'agisse de panneaux permanents, de dispositifs temporaires ou d'interventions ponctuelles.",
    points: ['Pose de panneaux permanents','Installation de signalisation temporaire','Démontage et retrait du matériel','Interventions d\'urgence et délais courts'],
    reverse: false,
    imageClassName: 'object-[58%_center]',
  },
]

export default function NosServices() {
  return (
    <>
      <JsonLd
        data={[
          createCollectionPageSchema({
            name: `${pageTitle} - Robalex Signalisation`,
            description: pageDescription,
            path: '/nos-services/',
            image: '/images/travaux-installation.jpg',
          }),
          createServiceSchema({
            name: 'Services de signalisation et sécurité routière',
            description: pageDescription,
            path: '/nos-services/',
            image: '/images/travaux-installation.jpg',
          }),
          createBreadcrumbSchema([
            { name: 'Accueil', path: '/' },
            { name: 'Nos services', path: '/nos-services/' },
          ]),
        ]}
      />
      <Hero
        bgImage="/images/passage-pieton.jpg"
        badge="Nos services"
        title={<>Nos services de <span className="text-red">signalisation et sécurité routière</span></>}
        subtitle="De la planification à l'installation, nous prenons en charge l'ensemble de vos besoins en signalisation et sécurité routière dans toute la Suisse romande."
        primaryCta={{ label: 'Demander un devis', href: '/contact' }}
      />

      {services.map((s, i) => (
        <section key={s.badge} className={`section-pad ${i % 2 === 1 ? 'bg-bg-light' : 'bg-white'}`}>
          <div className="container">
            <FeatureBlock
              image={{ src: s.img, alt: s.alt }}
              reverse={s.reverse}
              imageClassName={s.imageClassName}
            >
              <SectionHeader badge={s.badge} title={s.titleNode} />
              <p className="text-gray-dark mb-4">{s.desc}</p>
              <ul className="flex flex-col gap-2 mb-6">
                {s.points.map(p => (
                  <li key={p} className="flex items-start gap-2 text-gray-dark text-sm">
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
