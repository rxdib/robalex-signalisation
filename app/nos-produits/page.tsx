import type { Metadata } from 'next'
import Image from 'next/image'
import Hero from '@/components/Hero'
import SectionHeader from '@/components/SectionHeader'
import CtaBand from '@/components/CtaBand'

export const metadata: Metadata = {
  title: 'Nos produits — Signalisation routière Suisse',
  description: 'Signalisation temporaire, permanente et matériel de chantier. Signaux pliants Triopan, cônes, barrières, panneaux OSR R1 R2 R3. Conforme normes suisses.',
  alternates: { canonical: 'https://www.robalex-signalisation.ch/nos-produits/' },
  openGraph: {
    title: 'Nos produits de signalisation routière — Robalex Signalisation',
    description: 'Signalisation temporaire, permanente et matériel de chantier. Signaux pliants Triopan, cônes, barrières, panneaux OSR R1 R2 R3.',
    url: 'https://www.robalex-signalisation.ch/nos-produits/',
    images: [{ url: '/images/panneaux-signalisation.jpg' }],
  },
}

const tempProducts = [
  { img: '/images/Liste produit/Triopan.jpg',              name: 'Signaux pliants Triopan',       desc: "Fabrication sur mesure — tous les symboles et textes sont possibles." },
  { img: '/images/Liste produit/Fireball.png',             name: 'Lampes flash Fireball',          desc: "Très compactes, particulièrement appréciées des services d'urgence." },
  { img: '/images/Liste produit/Cône-de-signalisation.webp', name: 'Cônes de signalisation',      desc: 'Cônes K1, K2, K3 pour délimiter zones de travaux et interventions.' },
  { img: '/images/Liste produit/barriere-extensible.webp', name: 'Barrière extensible aluminium', desc: "Légère et robuste, s'adapte à toutes les configurations de chantier." },
  { img: '/images/Liste produit/Ruban de barrage 500m + texte.png', name: 'Ruban de barrage rouge-blanc', desc: 'Personnalisable : POLICE, POLICE ZONE INTERDITE, nom d\'entreprise…' },
  { img: '/images/Liste produit/Barrière_Vauban.png',      name: 'Barrière mobile Vauban',         desc: 'Délimitation de périmètre robuste pour chantiers et événements.' },
]

const permProducts = [
  { img: '/images/Liste produit/Miroir-signalisation.jpg',      name: 'Miroirs de signalisation',  desc: 'Modèles rectangulaires ou ronds pour carrefours, parkings et zones de faible visibilité.' },
  { img: '/images/Liste produit/Mise à ban.jpeg',               name: 'Mise à ban',                desc: 'Fabrication et installation de signalisation de mise à ban selon vos besoins.' },
  { img: '/images/Liste produit/Radar-pedagogique.jpg',         name: 'Radar pédagogique',         desc: 'Affichage de vitesse pour sensibiliser les conducteurs et améliorer la sécurité locale.' },
  { img: '/images/Liste produit/Potelet.jpeg',                  name: 'Mobilier urbain',            desc: 'Potelets, barrières, ralentisseurs et autres dispositifs de gestion du trafic.' },
]

const chantierProducts = [
  { img: '/images/Liste produit/Latte-barrage.jpg',             name: 'Lattes de barrage rouge-blanc', desc: 'En bois avec bandes réfléchissantes, disponibles en 3m ou 4m.' },
  { img: '/images/Liste produit/Lampe-chantier.png',            name: 'Lampes de chantier',            desc: 'Éclairage et balisage de chantier homologué.' },
  { img: '/images/Liste produit/Support-trilatte.jpeg',         name: 'Support trilatte',              desc: 'Support pour signalisation avancée de chantier.' },
]

function ProductGrid({ products }: { products: typeof tempProducts }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map(p => (
        <article key={p.name} className="bg-white border border-gray-light rounded-xl overflow-hidden hover:shadow-card transition-shadow">
          <div className="aspect-video overflow-hidden bg-bg-light">
            <Image src={p.img} alt={`${p.name} — Robalex Signalisation Lausanne`} width={400} height={225} className="w-full h-full object-contain p-4" />
          </div>
          <div className="p-5">
            <h3 className="font-head font-700 text-base text-dark mb-2">{p.name}</h3>
            <p className="text-gray-dark text-sm leading-relaxed">{p.desc}</p>
          </div>
        </article>
      ))}
    </div>
  )
}

export default function NosProduits() {
  return (
    <>
      <Hero
        bgImage="/images/panneaux-signalisation.jpg"
        badge="Nos produits"
        title={<>Nos produits de <span className="text-red">signalisation routière</span></>}
        subtitle="Fourniture de matériel de signalisation conforme aux normes suisses OSR, VSS et ASTRA."
        primaryCta={{ label: 'Demander un devis', href: '/contact' }}
        secondaryCta={{ label: 'Voir les catalogues', href: '/nos-catalogues' }}
      />

      {/* Sig. temporaire */}
      <section className="section-pad" aria-label="Signalisation temporaire">
        <div className="container">
          <SectionHeader
            badge="Signalisation temporaire"
            title={<>Matériel pour <span className="text-red">chantiers et urgences</span></>}
            subtitle="Tout le matériel nécessaire pour sécuriser vos chantiers, interventions d'urgence ou événements."
          />
          <ProductGrid products={tempProducts} />
          <p className="text-gray-dark mt-6 italic text-sm">
            …et bien plus encore dans notre catalogue.{' '}
            <a href="/nos-catalogues" className="text-red font-700 hover:underline">Voir les catalogues →</a>
          </p>
        </div>
      </section>

      {/* Sig. permanente */}
      <section className="section-pad bg-bg-light" aria-label="Signalisation permanente">
        <div className="container">
          <SectionHeader
            badge="Signalisation permanente"
            title={<>Panneaux et dispositifs <span className="text-red">permanents</span></>}
            subtitle="Tous les panneaux de signalisation selon l'OSR Suisse, disponibles dans tous les types de rétro-réflexion : classe R1, R2 ou R3."
          />
          <ProductGrid products={permProducts} />
        </div>
      </section>

      {/* Matériel chantier */}
      <section className="section-pad" aria-label="Matériel de chantier et balisage">
        <div className="container">
          <SectionHeader
            badge="Matériel de chantier"
            title={<>Équipement de <span className="text-red">balisage</span></>}
          />
          <ProductGrid products={chantierProducts} />
        </div>
      </section>

      <CtaBand />
    </>
  )
}
