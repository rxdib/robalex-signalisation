import type { Metadata } from 'next'
import Image from 'next/image'
import Hero from '@/components/Hero'
import SectionHeader from '@/components/SectionHeader'
import CtaBand from '@/components/CtaBand'
import JsonLd from '@/components/JsonLd'
import { buildMetadata } from '@/app/seo'
import { createBreadcrumbSchema, createCollectionPageSchema } from '@/app/schema'

const pageTitle = 'Nos produits'
const pageDescription =
  'Signalisation temporaire, permanente, lumineuse et matériel de chantier. Signaux pliants Triopan, cônes, barrières, panneaux OSR, miroirs et équipements de sécurité routière.'

export const metadata: Metadata = buildMetadata({
  title: pageTitle,
  description: pageDescription,
  path: '/nos-produits/',
  image: '/images/panneaux-signalisation.jpg',
  imageAlt: 'Produits de signalisation et sécurité routière',
})

type Product = {
  img: string
  name: string
  desc: string
}

const tempProducts: Product[] = [
  {
    img: '/images/Liste produit/Temporaire (Travaux de voirie - Urgences)/Signaux-pliants-Triopan.jpg',
    name: 'Signaux pliants Triopan',
    desc: 'Signalisation pliable, légère et très visible pour chantiers, urgences et interventions mobiles.',
  },
  {
    img: '/images/Liste produit/Temporaire (Travaux de voirie - Urgences)/Triopan_Fireball_V5.png',
    name: 'Lampe flash Fireball',
    desc: "Lampe clignotante compacte pour renforcer la visibilité des zones d'intervention et de danger.",
  },
  {
    img: '/images/Liste produit/Temporaire (Travaux de voirie - Urgences)/Triopan_Helios_Blaze_v5.png',
    name: 'Lampe Helios Blaze',
    desc: 'Feu de balisage puissant conçu pour les chantiers exposés et les interventions de nuit.',
  },
  {
    img: '/images/Liste produit/Temporaire (Travaux de voirie - Urgences)/Star-Flash-610.png',
    name: 'Star Flash 610',
    desc: 'Lampe de signalisation robuste pour sécuriser rapidement un périmètre de travaux.',
  },
  {
    img: '/images/Liste produit/Temporaire (Travaux de voirie - Urgences)/PowerFlare.png',
    name: 'PowerFlare',
    desc: "Balise lumineuse LED rechargeable pour interventions d'urgence et sécurisation ponctuelle.",
  },
  {
    img: '/images/Liste produit/Temporaire (Travaux de voirie - Urgences)/Eflare_AT700.png',
    name: 'eFlare AT700',
    desc: "Balise de sécurité compacte pour véhicules d'intervention, dépannages et zones à risque.",
  },
  {
    img: '/images/Liste produit/Temporaire (Travaux de voirie - Urgences)/Cône-de-signalisation.webp',
    name: 'Cônes de signalisation',
    desc: 'Délimitation simple et rapide des zones de travaux, déviations et interventions ponctuelles.',
  },
  {
    img: '/images/Liste produit/Temporaire (Travaux de voirie - Urgences)/Bâton-led.jpg',
    name: 'Bâton LED de signalisation',
    desc: "Guidage manuel lumineux pour circulation alternée, événements et interventions d'urgence.",
  },
  {
    img: '/images/Liste produit/Temporaire (Travaux de voirie - Urgences)/barriere-extensible.webp',
    name: 'Barrière extensible aluminium',
    desc: 'Barrière légère et déployable pour isoler rapidement un accès ou une zone de travail.',
  },
  {
    img: '/images/Liste produit/Temporaire (Travaux de voirie - Urgences)/Barrière_Vauban.png',
    name: 'Barrière mobile Vauban',
    desc: 'Barrière de canalisation robuste pour chantiers, manifestations et gestion de flux piétons.',
  },
  {
    img: '/images/Liste produit/Temporaire (Travaux de voirie - Urgences)/ruban-de-barrage-500m.png',
    name: 'Ruban de barrage personnalisé',
    desc: 'Ruban rouge-blanc personnalisable pour délimiter et identifier clairement les périmètres.',
  },
  {
    img: '/images/Liste produit/Temporaire (Travaux de voirie - Urgences)/Ruban-de-masquage.PNG',
    name: 'Ruban de masquage',
    desc: 'Ruban pratique pour protéger, masquer ou marquer temporairement une zone de chantier.',
  },
  {
    img: '/images/Liste produit/Temporaire (Travaux de voirie - Urgences)/Bâche-forestière.jpeg',
    name: 'Bâche forestière',
    desc: 'Balisage visuel pour chemins forestiers, zones naturelles et interventions extérieures.',
  },
  {
    img: '/images/Liste produit/Temporaire (Travaux de voirie - Urgences)/Sac-de-sable-15kg.png',
    name: 'Sac de sable 15 kg',
    desc: 'Lestage simple et efficace pour maintenir panneaux, supports et balisage temporaire.',
  },
  {
    img: '/images/Liste produit/Temporaire (Travaux de voirie - Urgences)/Pile-4R25-7AH.jpg',
    name: 'Pile 4R25 7Ah',
    desc: 'Alimentation fiable pour lampes de chantier et équipements de signalisation autonomes.',
  },
]

const permProducts: Product[] = [
  {
    img: '/images/Liste produit/Permanent (Signaux OSR - Mobilier urbain)/Panneau-2.30.1(G)-vitesse-max-50.png',
    name: 'Panneaux de signalisation OSR',
    desc: 'Panneaux permanents pour limitation, prescription, danger et indication sur voirie.',
  },
  {
    img: '/images/Liste produit/Permanent (Signaux OSR - Mobilier urbain)/Panneau-mise-a-ban.jpg',
    name: 'Panneaux de mise à ban',
    desc: 'Signalisation claire pour accès privés, parkings réservés et sites soumis à restriction.',
  },
  {
    img: '/images/Liste produit/Permanent (Signaux OSR - Mobilier urbain)/plaque-de-rue.jpg',
    name: 'Plaques de rue',
    desc: 'Plaques durables pour rues, quartiers, bâtiments publics et signalétique locale.',
  },
  {
    img: '/images/Liste produit/Permanent (Signaux OSR - Mobilier urbain)/Miroir-signalisation.jpg',
    name: 'Miroirs de signalisation',
    desc: 'Améliorent la visibilité dans les carrefours, sorties de parking et zones à angle mort.',
  },
  {
    img: '/images/Liste produit/Permanent (Signaux OSR - Mobilier urbain)/Barrière-piéton.JPEG',
    name: 'Barrières piétonnes',
    desc: 'Protection et guidage des usagers dans les espaces publics, écoles et zones sensibles.',
  },
  {
    img: '/images/Liste produit/Permanent (Signaux OSR - Mobilier urbain)/borne-ilot.png',
    name: "Bornes d'îlot",
    desc: 'Équipement de canalisation pour îlots directionnels, séparateurs et aménagements routiers.',
  },
  {
    img: '/images/Liste produit/Permanent (Signaux OSR - Mobilier urbain)/Potelet-flexible (Pole Cone).png',
    name: 'Potelets flexibles',
    desc: 'Délimitent les voies, zones piétonnes et espaces à protéger sans gêner la circulation.',
  },
  {
    img: '/images/Liste produit/Permanent (Signaux OSR - Mobilier urbain)/Ralentisseur.png',
    name: 'Ralentisseurs',
    desc: 'Solutions de modération de vitesse pour zones résidentielles, parkings et sites privés.',
  },
  {
    img: '/images/Liste produit/Permanent (Signaux OSR - Mobilier urbain)/Piquet-a-neige.PNG',
    name: 'Piquets à neige',
    desc: 'Repérage hivernal des bords de route et des zones sensibles exposées à la neige.',
  },
  {
    img: '/images/Liste produit/Permanent (Signaux OSR - Mobilier urbain)/Poteau-balisage-triangulaire.jpg',
    name: 'Poteaux de balisage',
    desc: 'Supports de repérage et de guidage pour alignements, îlots et aménagements latéraux.',
  },
  {
    img: '/images/Liste produit/Permanent (Signaux OSR - Mobilier urbain)/Cadre-rond.PNG',
    name: 'Cadres ronds',
    desc: 'Cadres adaptés aux panneaux circulaires pour une fixation durable et propre.',
  },
  {
    img: '/images/Liste produit/Permanent (Signaux OSR - Mobilier urbain)/Cadre-triangulaire.png',
    name: 'Cadres triangulaires',
    desc: 'Cadres pour panneaux de danger assurant un montage stable et précis.',
  },
  {
    img: '/images/Liste produit/Permanent (Signaux OSR - Mobilier urbain)/Cadre-octogonal.png',
    name: 'Cadres octogonaux',
    desc: 'Supports dédiés aux panneaux octogonaux pour une installation soignée sur site.',
  },
  {
    img: '/images/Liste produit/Permanent (Signaux OSR - Mobilier urbain)/Cadre-rectangulaire.PNG',
    name: 'Cadres rectangulaires',
    desc: "Cadres standards pour panneaux d'indication et signalétique permanente.",
  },
  {
    img: '/images/Liste produit/Permanent (Signaux OSR - Mobilier urbain)/Cadre-rectangulaire-soudé.PNG',
    name: 'Cadres rectangulaires soudés',
    desc: 'Version renforcée pour panneaux de plus grand format et montage durable.',
  },
]

const lightProducts: Product[] = [
  {
    img: '/images/Liste produit/Signalisation lumineuse/Feu-bicolore.png',
    name: 'Feux bicolores',
    desc: 'Gestion alternée du trafic pour chantiers, accès temporaires et passages régulés.',
  },
  {
    img: '/images/Liste produit/Signalisation lumineuse/Radar-pedagogique.jpg',
    name: 'Radars pédagogiques',
    desc: 'Affichage de la vitesse en temps réel pour sensibiliser les conducteurs dans les zones sensibles.',
  },
  {
    img: '/images/Liste produit/Signalisation lumineuse/Signaux-dynamique.jpg',
    name: 'Signaux dynamiques',
    desc: 'Panneaux lumineux pour messages variables, alertes temporaires et information des usagers.',
  },
  {
    img: '/images/Liste produit/Signalisation lumineuse/Triflash.avif',
    name: 'Triflash',
    desc: 'Signal lumineux clignotant pour renforcer la visibilité des points singuliers et des dangers.',
  },
]

const chantierProducts: Product[] = [
  {
    img: '/images/Liste produit/Chantier (Balisages pour zones de chantier)/Triopan-1.14-construction-90cm-R2.webp',
    name: 'Triopan 1.14 Construction 90 cm R2',
    desc: 'Signal pliant de chantier haute visibilité pour travaux de voirie et balisage temporaire.',
  },
  {
    img: '/images/Liste produit/Chantier (Balisages pour zones de chantier)/Balise-de-signalisation-flèche.png',
    name: 'Balises directionnelles à flèche',
    desc: 'Guidage visuel des usagers pour déviations, contournements et rétrécissements de voie.',
  },
  {
    img: '/images/Liste produit/Chantier (Balisages pour zones de chantier)/Balise-tornado-flexible.jpg',
    name: 'Balises Tornado flexibles',
    desc: 'Balises souples et résistantes pour séparer les flux et sécuriser les zones de chantier.',
  },
  {
    img: '/images/Liste produit/Chantier (Balisages pour zones de chantier)/Lampe-chantier.png',
    name: 'Lampes de chantier',
    desc: 'Éclairage de balisage pour rendre les obstacles et zones de travaux visibles de jour comme de nuit.',
  },
  {
    img: '/images/Liste produit/Chantier (Balisages pour zones de chantier)/latte-barrage.png',
    name: 'Lattes de barrage rouge-blanc',
    desc: 'Balisage horizontal simple et efficace pour fermer une zone et structurer le chantier.',
  },
  {
    img: '/images/Liste produit/Chantier (Balisages pour zones de chantier)/Socle-28kg-recyclé.png',
    name: 'Socles 28 kg recyclés',
    desc: 'Socles lourds et stables pour maintenir balises, lampes et supports en toute sécurité.',
  },
  {
    img: '/images/Liste produit/Chantier (Balisages pour zones de chantier)/Support-trilatte.jpeg',
    name: 'Supports trilatte',
    desc: 'Support pratique pour panneaux temporaires et signalisation avancée de chantier.',
  },
]

function CatalogLink() {
  return (
    <p className="mt-6 text-sm italic text-gray-dark">
      ...et bien plus encore dans notre catalogue{' '}
      <a href="/nos-catalogues" className="font-700 text-red hover:underline">
        Voir les catalogues {'->'}
      </a>
    </p>
  )
}

function ProductGrid({ products }: { products: Product[] }) {
  const gridClassName =
    products.length === 2
      ? 'mx-auto grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2'
      : products.length >= 4
        ? 'grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
        : 'grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'

  return (
    <div className={gridClassName}>
      {products.map((product) => (
        <article
          key={product.name}
          className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-light bg-white shadow-card transition-shadow hover:shadow-card-lg"
        >
          <div className="aspect-[16/10] overflow-hidden bg-bg-light">
            <Image
              src={product.img}
              alt={`${product.name} - Robalex Signalisation Lausanne`}
              width={400}
              height={225}
              className="h-full w-full object-contain p-4"
            />
          </div>
          <div className="flex flex-1 flex-col p-5">
            <h3 className="mb-2 font-head text-base font-700 text-dark">{product.name}</h3>
            <p className="text-sm leading-relaxed text-gray-dark">{product.desc}</p>
          </div>
        </article>
      ))}
    </div>
  )
}

export default function NosProduits() {
  return (
    <>
      <JsonLd
        data={[
          createCollectionPageSchema({
            name: `${pageTitle} - Robalex Signalisation`,
            description: pageDescription,
            path: '/nos-produits/',
            image: '/images/panneaux-signalisation.jpg',
          }),
          createBreadcrumbSchema([
            { name: 'Accueil', path: '/' },
            { name: 'Nos produits', path: '/nos-produits/' },
          ]),
        ]}
      />
      <Hero
        bgImage="/images/panneaux-signalisation.jpg"
        badge="Nos produits"
        title={
          <>
            Nos produits de <span className="text-red">signalisation et sécurité routière</span>
          </>
        }
        subtitle="Une gamme complète pour le balisage, la signalisation permanente, la signalisation lumineuse et la sécurité routière."
        primaryCta={{ label: 'Demander un devis', href: '/contact' }}
        secondaryCta={{ label: 'Voir les catalogues', href: '/nos-catalogues' }}
      />

      <section className="section-pad" aria-label="Signalisation temporaire">
        <div className="container">
          <SectionHeader
            badge="Signalisation temporaire"
            title={
              <>
                Matériel pour <span className="text-red">chantiers et urgences</span>
              </>
            }
            subtitle="Tout le matériel nécessaire pour le balisage temporaire de vos chantiers, interventions d urgence et événements."
          />
          <ProductGrid products={tempProducts} />
          <CatalogLink />
        </div>
      </section>

      <section className="section-pad bg-bg-light" aria-label="Signalisation permanente">
        <div className="container">
          <SectionHeader
            badge="Signalisation permanente"
            title={
              <>
                Panneaux permanents et <span className="text-red">mobilier urbain</span>
              </>
            }
            subtitle="Panneaux, supports et équipements durables pour l'aménagement routier, les accès privés et les espaces publics."
          />
          <ProductGrid products={permProducts} />
          <CatalogLink />
        </div>
      </section>

      <section className="section-pad" aria-label="Signalisation lumineuse">
        <div className="container">
          <SectionHeader
            badge="Signalisation lumineuse"
            title={
              <>
                Gestion du trafic et <span className="text-red">signalisation active</span>
              </>
            }
            subtitle="Équipements lumineux pour réguler la circulation, alerter les usagers et renforcer la visibilité des zones sensibles."
          />
          <ProductGrid products={lightProducts} />
          <CatalogLink />
        </div>
      </section>

      <section className="section-pad bg-bg-light" aria-label="Matériel de chantier et balisage">
        <div className="container">
          <SectionHeader
            badge="Matériel de chantier"
            title={
              <>
                Équipement de <span className="text-red">balisage</span>
              </>
            }
            subtitle="Balises, lampes, socles et supports pour organiser et sécuriser efficacement vos zones de chantier."
          />
          <ProductGrid products={chantierProducts} />
          <CatalogLink />
        </div>
      </section>

      <CtaBand />
    </>
  )
}
