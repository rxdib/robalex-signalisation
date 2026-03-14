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
    desc: 'Signaux pliants Triopan entièrement personnalisables, disponibles dans toutes dimensions et classes de rétro-réfléchissement.',
  },
  {
    img: '/images/Liste produit/Temporaire (Travaux de voirie - Urgences)/Triopan_Fireball_V5.png',
    name: 'Flash Fireball LED',
    desc: 'Lampe flash lumineuse de jour comme de nuit, à piles AA, avec fixation directe sur Triopan et support magnétique.',
  },
  {
    img: '/images/Liste produit/Temporaire (Travaux de voirie - Urgences)/Triopan_Helios_Blaze_v5.png',
    name: 'Helios Blaze LED',
    desc: 'Lampe flash lumineuse de jour comme de nuit, à piles AA, avec fixation directe sur Triopan et support magnétique.',
  },
  {
    img: '/images/Liste produit/Temporaire (Travaux de voirie - Urgences)/Star-Flash-610.png',
    name: 'Star-Flash LED 610',
    desc: 'Lampe flash lumineuse de jour comme de nuit, à piles 4R25, avec grande autonomie et fixation directe sur Triopan.',
  },
  {
    img: '/images/Liste produit/Temporaire (Travaux de voirie - Urgences)/PowerFlare.png',
    name: 'PowerFlare LED',
    desc: "Lampe flash rechargeable ultra-compacte et magnétique, idéale pour les interventions rapides.",
  },
  {
    img: '/images/Liste produit/Temporaire (Travaux de voirie - Urgences)/Eflare_AT700.png',
    name: 'Eflare EN800G / UB700G LED',
    desc: 'Lampe flash lumineuse de jour comme de nuit, avec fixation sur Triopan ou cône via adaptateur.',
  },
  {
    img: '/images/Liste produit/Temporaire (Travaux de voirie - Urgences)/Cône-de-signalisation.webp',
    name: 'Cônes de signalisation',
    desc: 'Cônes de signalisation orange pour chantier, disponibles en plusieurs dimensions et classes de rétro-réflexion.',
  },
  {
    img: '/images/Liste produit/Temporaire (Travaux de voirie - Urgences)/Quickcone_bag-of-4.jpeg',
    name: 'QuickCone',
    desc: "Balise de signalisation rapide, pliable et compacte au transport, idéale pour les interventions d'urgence.",
  },
  {
    img: '/images/Liste produit/Temporaire (Travaux de voirie - Urgences)/Bâton-led.jpg',
    name: 'Bâton lumineux LED',
    desc: 'Bâton de guidage LED, à piles ou rechargeable, disponible en plusieurs dimensions et couleurs.',
  },
  {
    img: '/images/Liste produit/Temporaire (Travaux de voirie - Urgences)/barriere-extensible.webp',
    name: 'Barrière extensible aluminium R2',
    desc: "Barrière pliable autonome en aluminium avec bandes réfléchissantes R2 rouge/blanc, ouverture jusqu'à 5 m.",
  },
  {
    img: '/images/Liste produit/Temporaire (Travaux de voirie - Urgences)/Barrière_Vauban.png',
    name: 'Barrière Vauban',
    desc: 'Barrière mobile Vauban en acier zingué, longueur 2,5 mètres, pour la sécurisation des chantiers ou manifestations.',
  },
  {
    img: '/images/Liste produit/Temporaire (Travaux de voirie - Urgences)/ruban-de-barrage-500m.png',
    name: 'Ruban de barrage rouge/blanc 500 m',
    desc: 'Ruban de barrage rouge/blanc très résistant, 500 m × 7,50 cm, pour la délimitation de périmètres. Entièrement personnalisable.',
  },
  {
    img: '/images/Liste produit/Temporaire (Travaux de voirie - Urgences)/Ruban-de-masquage.PNG',
    name: 'Bande à masquer',
    desc: 'Bande de masquage pour annuler temporairement un panneau, disponible en plusieurs dimensions.',
  },
  {
    img: '/images/Liste produit/Temporaire (Travaux de voirie - Urgences)/Bâche-forestière.jpeg',
    name: 'Bâche forestière de balisage',
    desc: 'Toile de signalisation pour chemins forestiers et zones naturelles, à haute résistance aux intempéries.',
  },
  {
    img: '/images/Liste produit/Temporaire (Travaux de voirie - Urgences)/Sac-de-sable-15kg.png',
    name: 'Sac de sable 15 kg',
    desc: 'Sac de lestage 15 kg avec sangle pour le maintien de panneaux, balises et supports temporaires.',
  },
  {
    img: '/images/Liste produit/Temporaire (Travaux de voirie - Urgences)/Pile-4R25-7AH.jpg',
    name: 'Pile 4R25 - 6V',
    desc: 'Pile standard 4R25 - 6V pour lampes de chantier et feux flash de signalisation.',
  },
]

const permProducts: Product[] = [
  {
    img: '/images/Liste produit/Permanent (Signaux OSR - Mobilier urbain)/Panneau-2.30.1(G)-vitesse-max-50.png',
    name: 'Panneaux de signalisation routière OSR',
    desc: 'Panneaux officiels OSR en aluminium R2 : danger, prescription, indication et direction, dans toutes dimensions.',
  },
  {
    img: '/images/Liste produit/Permanent (Signaux OSR - Mobilier urbain)/Panneau-mise-a-ban.jpg',
    name: 'Panneaux de mise à ban',
    desc: 'Signal « Interdiction de stationner » 2.50 avec texte du juge de paix sur mesure.',
  },
  {
    img: '/images/Liste produit/Permanent (Signaux OSR - Mobilier urbain)/plaque-de-rue.jpg',
    name: "Plaques de rue en fonte d'aluminium",
    desc: "Plaques de rue en fonte d'aluminium, entièrement personnalisables.",
  },
  {
    img: '/images/Liste produit/Permanent (Signaux OSR - Mobilier urbain)/Miroir-signalisation.jpg',
    name: 'Miroirs routiers de signalisation',
    desc: 'Miroirs routiers en inox à cadre réfléchissant rouge/blanc, version normale ou libre de glace, disponibles dans toutes dimensions.',
  },
  {
    img: '/images/Liste produit/Permanent (Signaux OSR - Mobilier urbain)/Barrière-piéton.JPEG',
    name: 'Barrières-arceaux piétonnes',
    desc: 'Arceaux de protection en acier zingué Ø 60 mm pour la sécurisation des trottoirs et zones piétonnes.',
  },
  {
    img: '/images/Liste produit/Permanent (Signaux OSR - Mobilier urbain)/borne-ilot.png',
    name: "Bornes d'îlot",
    desc: "Bornes d'îlot réfléchissantes en acier ou PVC, disponibles avec signal 2.34 intégré.",
  },
  {
    img: '/images/Liste produit/Permanent (Signaux OSR - Mobilier urbain)/Potelet-flexible (Pole Cone).png',
    name: 'Potelets flexibles à mémoire de forme',
    desc: 'Potelets flexibles à mémoire de forme avec bandes réfléchissantes, disponibles dans plusieurs couleurs et dimensions.',
  },
  {
    img: '/images/Liste produit/Permanent (Signaux OSR - Mobilier urbain)/Ralentisseur.png',
    name: 'Ralentisseurs',
    desc: 'Ralentisseurs de vitesse 20 ou 30 km/h en PVC jaune et noir.',
  },
  {
    img: '/images/Liste produit/Permanent (Signaux OSR - Mobilier urbain)/Piquet-a-neige.PNG',
    name: 'Piquets à neige',
    desc: 'Piquets à neige Ø 40 à 50 mm, orange ou bleus, avec bande réfléchissante R2, hauteur de 1,50 à 2 m.',
  },
  {
    img: '/images/Liste produit/Permanent (Signaux OSR - Mobilier urbain)/Poteau-balisage-triangulaire.jpg',
    name: 'Balises de route',
    desc: 'Balises de route en PVC triangulaires ou rondes avec catadioptres, pour bords de chaussée.',
  },
  {
    img: '/images/Liste produit/Permanent (Signaux OSR - Mobilier urbain)/Socle-béton-50kg-prefabriqué.jpg',
    name: 'Socles en béton 50 kg',
    desc: 'Socles préfabriqués avec douille pour tube Ø 60 mm, assurant une base lourde et stable en signalisation permanente.',
  },
  {
    img: '/images/Liste produit/Permanent (Signaux OSR - Mobilier urbain)/Cadre-rond.PNG',
    name: 'Cadres ronds pour panneaux circulaires',
    desc: 'Cadres ronds en acier galvanisé Ø 40 ou 60 cm, à rails, manchon ou soudés sur tube Ø 60 mm.',
  },
  {
    img: '/images/Liste produit/Permanent (Signaux OSR - Mobilier urbain)/Cadre-triangulaire.png',
    name: 'Cadres triangulaires pour panneaux de danger',
    desc: 'Cadres triangulaires en acier galvanisé 60 ou 90 cm, à rails, manchon ou soudés sur tube Ø 60 mm.',
  },
  {
    img: '/images/Liste produit/Permanent (Signaux OSR - Mobilier urbain)/Cadre-octogonal.png',
    name: 'Cadres octogonaux STOP',
    desc: 'Cadres octogonaux en acier galvanisé 50 ou 60 cm, à rails, manchon ou soudés sur tube Ø 60 mm.',
  },
  {
    img: '/images/Liste produit/Permanent (Signaux OSR - Mobilier urbain)/Cadre-rectangulaire.PNG',
    name: 'Cadres rectangulaires à brides ou rails',
    desc: 'Cadres rectangulaires en acier galvanisé 35x50, 50x70 ou 50x90 cm, à rails, manchon ou soudés sur tube Ø 60 mm.',
  },
  {
    img: '/images/Liste produit/Permanent (Signaux OSR - Mobilier urbain)/Cadre-rectangulaire-soudé.PNG',
    name: 'Cadres rectangulaires soudés sur tube',
    desc: 'Cadres rectangulaires en acier galvanisé, soudés sur tube Ø 60 mm de hauteur 2,50 ou 3 m.',
  },
]

const lightProducts: Product[] = [
  {
    img: '/images/Liste produit/Signalisation lumineuse/Feu-bicolore.png',
    name: 'Feux bicolores',
    desc: 'Feux de signalisation fixes bicolores pour installation en sortie ou entrée de parking et chemins privés.',
  },
  {
    img: '/images/Liste produit/Signalisation lumineuse/Radar-pedagogique.jpg',
    name: 'Radars pédagogiques',
    desc: "Radar d'affichage de vitesse en temps réel, pour sensibiliser les conducteurs dans les zones sensibles.",
  },
  {
    img: '/images/Liste produit/Signalisation lumineuse/Signaux-dynamique.jpg',
    name: 'Signaux dynamiques',
    desc: 'Panneaux lumineux LED pour messages variables, alertes temporaires et information des usagers en temps réel.',
  },
  {
    img: '/images/Liste produit/Signalisation lumineuse/Triflash.avif',
    name: 'Triflash',
    desc: 'Signal clignotant LED pour fixation sur véhicule, entièrement personnalisable.',
  },
]

const chantierProducts: Product[] = [
  {
    img: '/images/Liste produit/Chantier (Balisages pour zones de chantier)/Triopan-1.14-construction-90cm-R2.webp',
    name: 'Triopan 1.14 Construction 90 cm R2',
    desc: 'Signal pliant Triopan « Construction » 90 cm R2, 3 faces 1.14, complet avec étui bleu de transport.',
  },
  {
    img: '/images/Liste produit/Chantier (Balisages pour zones de chantier)/Balise-de-signalisation-flèche.png',
    name: 'Balise de signalisation R2',
    desc: 'Balise de signalisation R2 pour déviations, contournements ou rétrécissements de voie.',
  },
  {
    img: '/images/Liste produit/Chantier (Balisages pour zones de chantier)/Balise-tornado-flexible.jpg',
    name: 'Balises Tornado Flex',
    desc: 'Balise souple 75 cm avec bandes hachurées ou fléchées R2, résistante aux chocs et au renversement.',
  },
  {
    img: '/images/Liste produit/Chantier (Balisages pour zones de chantier)/Lampe-chantier.png',
    name: 'Lampes de chantier',
    desc: 'Lampes de chantier sur pile ou solaires, avec bride de fixation.',
  },
  {
    img: '/images/Liste produit/Chantier (Balisages pour zones de chantier)/Flash-sur-cone.png',
    name: 'Flash sur cône',
    desc: "Flash LED à grand diamètre, à fixer sur cône pour renforcer la visibilité d'une zone d'intervention ou de chantier.",
  },
  {
    img: '/images/Liste produit/Chantier (Balisages pour zones de chantier)/latte-barrage.png',
    name: 'Lattes de barrage rouge/blanc R2',
    desc: 'Lattes de barrage en bois, 3 ou 4 m, avec bandes réfléchissantes R2 rouge/blanc pour la fermeture de zone.',
  },
  {
    img: '/images/Liste produit/Chantier (Balisages pour zones de chantier)/Socle-28kg-recyclé.png',
    name: 'Socles 28 kg en PVC recyclé',
    desc: 'Socles 28 kg en PVC recyclé noir, empilables et incassables, pour balises, lampes et tubes Ø 42/60 mm.',
  },
  {
    img: '/images/Liste produit/Chantier (Balisages pour zones de chantier)/Support-trilatte.jpeg',
    name: 'Support vertical trilatte pliable',
    desc: 'Support pliable en acier pour 3 lattes de barrage, idéal pour la signalisation avancée et la fermeture de chantier.',
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
              sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 25vw"
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
            subtitle="Tout le matériel nécessaire pour le balisage temporaire de vos chantiers, interventions d'urgence et événements."
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
