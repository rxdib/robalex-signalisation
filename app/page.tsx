import type { Metadata } from 'next'
import Image from 'next/image'
import Hero from '@/components/Hero'
import SectionHeader from '@/components/SectionHeader'
import FeatureBlock from '@/components/FeatureBlock'
import CtaBand from '@/components/CtaBand'
import LogoMarquee from '@/components/LogoMarquee'
import SmartLink from '@/components/SmartLink'
import JsonLd from '@/components/JsonLd'
import { buildMetadata } from './seo'
import { createWebPageSchema } from './schema'
import { autorouteGeneveDisplayImage, homeHeroImage } from './imageVariants'

const pageTitle = 'Signalisation et sécurité routière en Suisse romande'
const pageDescription =
  'Fourniture, location et installation en signalisation et sécurité routière en Suisse romande. Représentant Triopan SA. Demandez votre devis au 021 657 07 05.'

export const metadata: Metadata = buildMetadata({
  title: pageTitle,
  description: pageDescription,
  path: '/',
  image: '/images/triopan-bg.jpg',
  imageAlt: 'Signalisation et sécurité routière en Suisse romande par Robalex Signalisation',
})

type HomeExpertise = {
  badge: 'Produits' | 'Location' | 'Services'
  title: string
  desc: string
  details?: string
  img: string
  alt: string
  fit: string
  link: string
  linkLabel: string
}

const expertises: HomeExpertise[] = [
  {
    badge: 'Produits',
    title: 'Signalisation temporaire',
    desc: "Tout le matériel pour vos chantiers, fermetures de routes, déviations et interventions d'urgence.",
    details: 'Triopan, cônes, balises, barrières et flashs',
    img: '/images/triopan-protection-civil.jpg',
    alt: 'Signalisation temporaire de chantier par Robalex Signalisation',
    fit: 'object-cover object-[46%_center]',
    link: '/nos-catalogues',
    linkLabel: 'Voir les catalogues',
  },
  {
    badge: 'Produits',
    title: 'Signalisation permanente',
    desc: "L'équipement durable de vos voiries, accès privés, parkings et espaces publics.",
    details: 'Panneaux OSR, miroirs, bornes, potelets et plaques de rue',
    img: '/images/installation-panneaux.jpg',
    alt: 'Signalisation permanente installée par Robalex Signalisation',
    fit: 'object-cover object-[54%_center]',
    link: '/nos-catalogues',
    linkLabel: 'Voir les catalogues',
  },
  {
    badge: 'Produits',
    title: 'Signalisation lumineuse',
    desc: 'Des équipements visibles et efficaces pour renforcer la sécurité et ralentir les usagers aux points sensibles.',
    details: 'Radars pédagogiques, feux bicolores, triflash et signaux dynamiques',
    img: '/images/Liste produit/Signalisation lumineuse/Radar-pedagogique.jpg',
    alt: 'Radar pédagogique proposé par Robalex Signalisation',
    fit: 'object-contain bg-bg-light p-4',
    link: '/nos-catalogues',
    linkLabel: 'Voir les catalogues',
  },
  {
    badge: 'Location',
    title: 'Location de matériel',
    desc: 'Feux de chantier et signalisation temporaire en location, avec service complet sur le terrain.',
    img: '/images/feux-radar-2.jpg',
    alt: 'Feux de chantier et matériel de signalisation en location',
    fit: 'object-cover object-[62%_center]',
    link: '/nos-services',
    linkLabel: 'Voir les services',
  },
  {
    badge: 'Services',
    title: 'Pose et interventions',
    desc: 'Montage, pose, remplacement et démontage de vos équipements de signalisation sur site.',
    img: '/images/panneau-candelabre.jpg',
    alt: 'Pose et interventions sur site par Robalex Signalisation',
    fit: 'object-cover object-[28%_38%]',
    link: '/nos-services',
    linkLabel: 'Voir les services',
  },
  {
    badge: 'Services',
    title: 'Marquage routier',
    desc: 'Marquages routiers en peinture ou à 2 composants pour parkings, routes et sites privés.',
    img: '/images/travaux-marquage-parking.jpg',
    alt: 'Marquage routier réalisé par Robalex Signalisation',
    fit: 'object-cover object-[50%_center]',
    link: '/nos-services',
    linkLabel: 'Voir les services',
  },
]

const homeClientLogo = (fileName: string) => `/images/home-clients/${fileName}`

const clients = [
  // Cantons & collectivités publiques
  { src: homeClientLogo('logo-canton-vaud.png'),              alt: 'Canton de Vaud',                    href: 'https://www.vd.ch' },
  { src: homeClientLogo('logo-canton-valais.png'),            alt: 'Canton du Valais',                  href: 'https://www.vs.ch' },
  { src: '/images/logo-canton-fribourg.svg',          alt: 'Canton de Fribourg',                href: 'https://www.fr.ch' },
  { src: homeClientLogo('logo-canton-jura.png'),              alt: 'Canton du Jura',                    href: 'https://www.jura.ch' },
  // Polices
  { src: homeClientLogo('logo-police-vaudoise.jpg'),          alt: 'Police cantonale vaudoise',         href: 'https://www.police.vd.ch' },
  { src: homeClientLogo('logo-police-geneve.jpg'),            alt: 'Police cantonale genevoise',        href: 'https://www.police.ge.ch' },
  { src: homeClientLogo('logo-police-neuchatel.png'),         alt: 'Police cantonale neuchâteloise',    href: 'https://www.ne.ch' },
  { src: homeClientLogo('logo-police-sion-sierre.png'),       alt: 'Police régionale Sion-Sierre',      href: 'https://www.vs.ch' },
  // Villes & communes
  { src: homeClientLogo('logo-ville-lausanne.jpg'),           alt: 'Ville de Lausanne',                 href: 'https://www.lausanne.ch' },
  { src: homeClientLogo('logo-ville-yverdon.png'),            alt: 'Yverdon-les-Bains',                 href: 'https://www.yverdon-les-bains.ch' },
  { src: homeClientLogo('logo-ville-pully.png'),              alt: 'Ville de Pully',                    href: 'https://www.pully.ch' },
  { src: homeClientLogo('logo-ville-nyon.png'),               alt: 'Ville de Nyon',                     href: 'https://www.nyon.ch' },
  { src: homeClientLogo('logo-commune-yvonand.jpg'),          alt: "Commune d'Yvonand",                 href: 'https://www.yvonand.ch' },
  { src: homeClientLogo('logo-commune-estavayer.png'),        alt: "Commune d'Estavayer",               href: 'https://www.estavayer.ch' },
  { src: homeClientLogo('logo-commune-bourg-en-lavaux.png'),  alt: 'Commune de Bourg-en-Lavaux',        href: 'https://www.bourg-en-lavaux.ch' },
  { src: homeClientLogo('logo-commune-gibloux.png'),          alt: 'Commune de Gibloux',                href: 'https://www.gibloux.ch' },
  { src: homeClientLogo('logo-commune-orvin.png'),            alt: "Commune d'Orvin",                   href: 'https://www.orvin.ch' },
  // Aéroport & régies
  { src: '/images/logo-geneve-aeroport.svg',          alt: 'Genève Aéroport',                   href: 'https://www.gva.ch' },
  { src: '/images/logo-regie-turrian.svg',            alt: 'Régie Turrian',                     href: 'https://www.turrian.ch' },
  // Entreprises de construction & génie civil
  { src: '/images/logo-romande-energie.svg',          alt: 'Romande Energie',                   href: 'https://www.romande-energie.ch' },
  { src: homeClientLogo('logo-walo.jpg'),                     alt: 'Walo Bertschinger',                 href: 'https://www.walo.ch' },
  { src: homeClientLogo('logo-bollini-sa.png'),               alt: 'Bollini SA',                        href: 'https://www.bollini.ch' },
  { src: homeClientLogo('logo-bernasconi.png'),               alt: 'Bernasconi',                        href: 'https://www.bernasconisa.ch/' },
  { src: '/images/logo-cornaz.avif',                  alt: 'Cornaz SA',                         href: 'https://www.cornaz-fontanellaz-sa.ch/' },
  { src: homeClientLogo('logo-jacques-lugrin.png'),           alt: 'Jacques Lugrin SA',                 href: 'https://www.jacqueslugrin.ch' },
  { src: homeClientLogo('logo-orllati.png'),                  alt: 'Orllati SA',                        href: 'https://www.orllati.ch' },
]

const featuredProducts = [
  {
    img: '/images/Liste produit/Temporaire (Travaux de voirie - Urgences)/Signaux-pliants-Triopan.jpg',
    fit: 'object-contain p-3 bg-bg-light',
    cat: 'Signalisation temporaire',
    name: 'Signaux pliants Triopan',
    desc: 'Signalisation pliable, légère et très visible pour chantiers, urgences et interventions mobiles.',
  },
  {
    img: '/images/Liste produit/Temporaire (Travaux de voirie - Urgences)/Cône-de-signalisation.webp',
    fit: 'object-contain p-3 bg-bg-light',
    cat: 'Signalisation temporaire',
    name: 'Cônes de signalisation',
    desc: 'Délimitation simple et rapide des zones de travaux, déviations et interventions ponctuelles.',
  },
  {
    img: '/images/passage-pieton.jpg',
    fit: 'object-cover',
    cat: 'Signalisation permanente',
    name: 'Panneaux de signalisation OSR',
    desc: 'Panneaux permanents pour limitation, prescription, danger et indication sur voirie.',
  },
  {
    img: '/images/Liste produit/Permanent (Signaux OSR - Mobilier urbain)/Miroir-signalisation.jpg',
    fit: 'object-contain p-3 bg-bg-light',
    cat: 'Sécurité',
    name: 'Miroirs de signalisation',
    desc: 'Améliorent la visibilité dans les carrefours, sorties de parking et zones à angle mort. Disponibles en version normale ou anti-givre.',
  },
  {
    img: '/images/Liste produit/Temporaire (Travaux de voirie - Urgences)/Triopan_Fireball_V5.png',
    fit: 'object-contain p-3 bg-bg-light',
    cat: 'Signalisation temporaire',
    name: 'Lampe flash Fireball',
    desc: "Lampe clignotante compacte pour renforcer la visibilité des zones d'intervention et de danger. Utilisée par les services d'urgence, communes et polices.",
  },
  {
    img: '/images/Liste produit/Signalisation lumineuse/Radar-pedagogique.jpg',
    fit: 'object-contain p-3 bg-bg-light',
    cat: 'Sécurité routière',
    name: 'Radars pédagogiques',
    desc: 'Affichage de la vitesse en temps réel pour sensibiliser les conducteurs dans les zones sensibles.',
  },
]

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={createWebPageSchema({
          name: pageTitle,
          description: pageDescription,
          path: '/',
          image: '/images/triopan-bg.jpg',
        })}
      />

      {/* 1. Hero */}
      <Hero
        bgImage={homeHeroImage.fallback}
        bgImageSrcSet={homeHeroImage.jpgSrcSet}
        bgImageSizes={homeHeroImage.sizes}
        bgSources={[
          { srcSet: homeHeroImage.webpSrcSet, type: 'image/webp', sizes: homeHeroImage.sizes },
        ]}
        badge="Suisse romande"
        title={<>Votre expert en <span className="text-red">signalisation et sécurité routière</span></>}
        subtitle="Depuis plus de 20 ans, de la planification à l'installation, nous prenons en charge l'ensemble de vos besoins en signalisation et sécurité routière dans toute la Suisse romande."
        primaryCta={{ label: 'Demander un devis', href: '/contact' }}
        secondaryCta={{ label: 'Voir nos produits', href: '/nos-produits' }}
      />

      {/* 2. Stats bar */}
      <section className="bg-navy py-8" aria-label="Chiffres clés">
        <div className="container grid grid-cols-3 gap-6 divide-x divide-white/10">
          {[
            { num: '+20 ans', label: "D'expérience" },
            { num: '+1000',   label: 'Clients satisfaits' },
            { num: '+500',    label: 'Produits disponibles' },
          ].map(s => (
            <div key={s.label} className="text-center px-4">
              <div className="font-head font-800 text-2xl lg:text-3xl text-red">{s.num}</div>
              <div className="text-white/60 text-xs uppercase tracking-wide mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Expertises */}
      <section className="section-pad" aria-labelledby="expertises-title">
        <div className="container">
          <SectionHeader
            badge="Notre offre"
            title={<>Nos <span className="text-red">expertises</span></>}
            subtitle="Produits, location et services pour sécuriser vos routes, chantiers, parkings et accès privés."
            centered
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {expertises.map(e => (
              <article key={e.title} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-light bg-white transition-shadow hover:shadow-card">
                <div className="aspect-[16/10] overflow-hidden">
                  <Image
                    src={e.img}
                    alt={e.alt}
                    width={640}
                    height={400}
                    sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                    className={`h-full w-full transition-transform duration-500 group-hover:scale-[1.03] ${e.fit}`}
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="mb-2 text-xs font-head font-700 uppercase tracking-[0.18em] text-red">{e.badge}</p>
                  <h3 className="mb-2 font-head text-xl font-700 text-dark">{e.title}</h3>
                  <p className="mb-3 text-sm leading-relaxed text-gray-dark">{e.desc}</p>
                  {e.details ? <p className="mb-5 text-sm text-gray-dark/85">{e.details}</p> : null}
                  <SmartLink href={e.link} className="mt-auto inline-flex items-center gap-2 text-sm font-head font-700 text-red transition-colors hover:text-red-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red">
                    {e.linkLabel} <span aria-hidden="true">→</span>
                  </SmartLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Votre spécialiste */}
      <section className="section-pad bg-navy" aria-labelledby="specialiste-title">
        <div className="container">
          <FeatureBlock
            image={{
              src: autorouteGeneveDisplayImage.fallback,
              srcSet: autorouteGeneveDisplayImage.jpgSrcSet,
              sources: [{ srcSet: autorouteGeneveDisplayImage.webpSrcSet, type: 'image/webp', sizes: autorouteGeneveDisplayImage.sizes }],
              sizes: autorouteGeneveDisplayImage.sizes,
              alt: 'Signalisation routière sur autoroute en Suisse romande par Robalex Signalisation',
            }}
            imageBadge="+20 ans d'expertise terrain"
            dark
          >
            <SectionHeader
              badge="Nos atouts"
              title={<>Votre spécialiste en <span className="text-red">Suisse romande</span></>}
              subtitle="Qualité de produits et excellence du service client — deux engagements au cœur de notre activité."
              white
            />
            <p className="text-white/75 mb-4">Nous intervenons auprès des :</p>
            <ul className="grid grid-cols-2 gap-2 mb-6">
              {["Services d'autoroutes",'Communes','Polices','Corps de pompiers','Entreprises de génie civil','Régies immobilières'].map(c => (
                <li key={c} className="flex items-center gap-2 text-white/80 text-sm">
                  <span className="text-red font-bold">✓</span> {c}
                </li>
              ))}
            </ul>
            <p className="text-white/75 text-sm mb-6">
              Représentant officiel et exclusif de <strong className="text-white">Triopan SA</strong> pour toute la Suisse romande — accès direct à l&apos;ensemble de la gamme Triopan.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="/a-propos" className="bg-red hover:bg-red-dark text-white font-head font-700 text-sm uppercase tracking-wide px-6 py-3 rounded transition-colors">En savoir plus</a>
              <a href="/contact" className="border-2 border-white/40 text-white hover:border-white font-head font-700 text-sm uppercase tracking-wide px-6 py-3 rounded transition-colors">Demander un devis</a>
            </div>
          </FeatureBlock>
        </div>
      </section>

      {/* 5. Location feux promo */}
      <section className="section-pad bg-white" aria-labelledby="feux-title">
        <div className="container">
          <FeatureBlock
            image={{ src: '/images/feux-radar-2.jpg', alt: 'Feux de chantier avec radar sur chantier routier à Lausanne' }}
            reverse
            imageClassName="object-[62%_center]"
          >
            <SectionHeader
              title={<>Location de <span className="text-red">feux de chantier</span></>}
            />
            <ul className="flex flex-col gap-3 mb-6">
              {[
                "Nous prenons en charge l'installation, la maintenance et le retrait de vos feux de chantier.",
                'Feux avec radar',
                'Feux avec décompte de temps',
              ].map(item => (
                <li key={item} className="flex items-start gap-2 text-gray-dark text-sm">
                  <span className="text-red font-bold mt-0.5">✓</span> {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <a href="/location-feux-chantier" className="bg-red hover:bg-red-dark text-white font-head font-700 text-sm uppercase tracking-wide px-6 py-3 rounded transition-colors">En savoir plus</a>
              <a href="tel:+41216570705" className="border-2 border-navy text-navy hover:bg-navy hover:text-white font-head font-700 text-sm uppercase tracking-wide px-6 py-3 rounded transition-colors">021 657 07 05</a>
            </div>
          </FeatureBlock>
        </div>
      </section>

      {/* 6. Triopan feature */}
      <section className="section-pad bg-bg-light" aria-labelledby="triopan-title">
        <div className="container">
          <FeatureBlock
            image={{ src: '/images/triopan-protection-civil.jpg', alt: 'Panneaux pliants Triopan sur mesure - Robalex Signalisation représentant officiel Suisse romande' }}
            imageBadge="Représentant officiel Triopan"
            imageClassName="object-[44%_center]"
          >
            <SectionHeader badge="Partenaire exclusif" title={<>Représentant <span className="text-red">Triopan SA</span> en Suisse romande</>} />
            <p className="text-gray-dark mb-3">Robalex Signalisation est le représentant officiel de <strong>Triopan SA</strong> pour toute la Suisse romande. Les signaux pliants Triopan sont fabriqués sur mesure selon vos symboles et textes, dans tous les formats et configurations.</p>
            <ul className="flex flex-col gap-2 mb-6">
              {['Signaux pliants fabriqués sur mesure','Livraison dans toute la Suisse romande','Entièrement personnalisables (symboles, textes, dimensions)','Conseils personnalisés','Accompagnement de proximité'].map(item => (
                <li key={item} className="flex items-center gap-2 text-gray-dark text-sm">
                  <span className="text-red font-bold">✓</span> {item}
                </li>
              ))}
            </ul>
            <a href="/nos-catalogues" className="bg-red hover:bg-red-dark text-white font-head font-700 text-sm uppercase tracking-wide px-6 py-3 rounded transition-colors inline-block">
              Voir le catalogue Triopan
            </a>
          </FeatureBlock>
        </div>
      </section>

      {/* 7. Produits phares */}
      <section className="section-pad bg-white" aria-labelledby="produits-title">
        <div className="container">
          <SectionHeader badge="Notre gamme" title={<>Produits <span className="text-red">phares</span></>} subtitle="Une sélection de nos produits les plus demandés." centered />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((p) => (
              <article key={p.name} className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-light bg-white transition-shadow hover:shadow-card">
                <div className="aspect-[4/3] overflow-hidden bg-white">
                  <Image src={p.img} alt={`${p.name} — Robalex Signalisation`} width={400} height={300} sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw" className={`w-full h-full ${p.fit}`} />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-red text-xs font-head font-700 uppercase tracking-wide mb-1">{p.cat}</p>
                  <h3 className="font-head font-700 text-base text-dark mb-2">{p.name}</h3>
                  <p className="text-gray-dark text-sm">{p.desc}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="/nos-produits" className="border-2 border-red text-red hover:bg-red hover:text-white font-head font-700 text-sm uppercase tracking-wide px-8 py-3.5 rounded transition-colors">
              Voir tous nos produits
            </a>
          </div>
        </div>
      </section>

      {/* 8. Ils nous font confiance */}
      <section className="section-pad bg-bg-light" aria-labelledby="clients-title">
        <div className="container">
          <SectionHeader badge="Références" title={<>Ils nous font <span className="text-red">confiance</span></>} subtitle="Communes, services d'urgence, Polices et entreprises actives sur le terrain dans toute la Suisse romande." centered />
          <div className="mt-10">
            <LogoMarquee logos={clients} />
          </div>
        </div>
      </section>

      {/* 9. CTA */}
      <CtaBand />
    </>
  )
}

