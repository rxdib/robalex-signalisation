import type { Metadata } from 'next'
import Image from 'next/image'
import Hero from '@/components/Hero'
import SectionHeader from '@/components/SectionHeader'
import ServiceCard from '@/components/ServiceCard'
import FeatureBlock from '@/components/FeatureBlock'
import CtaBand from '@/components/CtaBand'
import PartnerLogo from '@/components/PartnerLogo'
import LogoMarquee from '@/components/LogoMarquee'
import { localBusinessSchema } from './schema'

export const metadata: Metadata = {
  title: 'Robalex Signalisation - Signalisation et sécurité routière en Suisse romande',
  description: 'Fourniture, location et installation en signalisation et sécurité routière en Suisse romande. Représentant Triopan SA. Devis sur demande au 021 657 07 05.',
  alternates: { canonical: 'https://www.robalex-signalisation.ch/' },
  openGraph: {
    title: 'Robalex Signalisation - Signalisation et sécurité routière en Suisse romande',
    description: 'Fourniture, location et installation en signalisation et sécurité routière. Représentant Triopan SA pour la Suisse romande.',
    url: 'https://www.robalex-signalisation.ch/',
    images: [{ url: '/images/triopan-bg.jpg' }],
  },
}

const expertises = [
  { icon: <TempIcon />, title: 'Signalisation temporaire',  desc: 'Balisage temporaire de chantier — signaux pliants Triopan, cônes, barrières et lampes flash pour sécuriser toutes vos interventions.', link: '/nos-produits' },
  { icon: <PermIcon />, title: 'Signalisation permanente', desc: 'Signaux OSR en rétro-réflexion R1, R2 ou R3 — miroirs, mise à ban et mobilier urbain.', link: '/nos-produits' },
  { icon: <InstIcon />, title: 'Montage et installation',  desc: 'Pose et installation sur site pour une mise en place rapide et soignée.', link: '/nos-services' },
  { icon: <FeuxIcon />, title: 'Location feux de chantier', desc: 'Service clé en main : livraison, installation, maintenance et retrait — intervention 7j/7.', link: '/location-feux-chantier' },
  { icon: <MarkIcon />, title: 'Marquage routier',         desc: 'Marquage routier précis et durable pour communes, entreprises et régies.', link: '/nos-services' },
]

const clients = [
  // Cantons & collectivités publiques
  { src: '/images/logo-canton-vaud.png',              alt: 'Canton de Vaud',                    href: 'https://www.vd.ch' },
  { src: '/images/logo-canton-valais.png',            alt: 'Canton du Valais',                  href: 'https://www.vs.ch' },
  { src: '/images/logo-canton-fribourg.svg',          alt: 'Canton de Fribourg',                href: 'https://www.fr.ch' },
  { src: '/images/logo-canton-jura.png',              alt: 'Canton du Jura',                    href: 'https://www.jura.ch' },
  // Polices
  { src: '/images/logo-police-vaudoise.jpg',          alt: 'Police cantonale vaudoise',         href: 'https://www.police.vd.ch' },
  { src: '/images/logo-police-geneve.jpg',            alt: 'Police cantonale genevoise',        href: 'https://www.police.ge.ch' },
  { src: '/images/logo-police-neuchatel.png',         alt: 'Police cantonale neuchâteloise',    href: 'https://www.ne.ch' },
  { src: '/images/logo-police-sion-sierre.png',       alt: 'Police régionale Sion-Sierre',      href: 'https://www.vs.ch' },
  // Villes & communes
  { src: '/images/logo-ville-lausanne.jpg',           alt: 'Ville de Lausanne',                 href: 'https://www.lausanne.ch' },
  { src: '/images/logo-ville-yverdon.png',            alt: 'Yverdon-les-Bains',                 href: 'https://www.yverdon-les-bains.ch' },
  { src: '/images/logo-ville-pully.png',              alt: 'Ville de Pully',                    href: 'https://www.pully.ch' },
  { src: '/images/logo-ville-nyon.png',               alt: 'Ville de Nyon',                     href: 'https://www.nyon.ch' },
  { src: '/images/logo-commune-yvonand.jpg',          alt: "Commune d'Yvonand",                 href: 'https://www.yvonand.ch' },
  { src: '/images/logo-commune-estavayer.png',        alt: "Commune d'Estavayer",               href: 'https://www.estavayer.ch' },
  { src: '/images/logo-commune-bourg-en-lavaux.png',  alt: 'Commune de Bourg-en-Lavaux',        href: 'https://www.bourg-en-lavaux.ch' },
  { src: '/images/logo-commune-gibloux.png',          alt: 'Commune de Gibloux',                href: 'https://www.gibloux.ch' },
  { src: '/images/logo-commune-orvin.png',            alt: "Commune d'Orvin",                   href: 'https://www.orvin.ch' },
  // Aéroport & régies
  { src: '/images/logo-geneve-aeroport.svg',          alt: 'Genève Aéroport',                   href: 'https://www.gva.ch' },
  { src: '/images/logo-regie-turrian.svg',            alt: 'Régie Turrian',                     href: 'https://www.turrian.ch' },
  // Entreprises de construction & génie civil
  { src: '/images/logo-romande-energie.svg',          alt: 'Romande Energie',                   href: 'https://www.romande-energie.ch' },
  { src: '/images/logo-walo.jpg',                     alt: 'Walo Bertschinger',                 href: 'https://www.walo.ch' },
  { src: '/images/logo-bollini-sa.png',               alt: 'Bollini SA',                        href: 'https://www.bollini.ch' },
  { src: '/images/logo-bernasconi.png',               alt: 'Bernasconi',                        href: 'https://www.bernasconisa.ch/' },
  { src: '/images/logo-cornaz.avif',                  alt: 'Cornaz SA',                         href: 'https://www.cornaz-fontanellaz-sa.ch/' },
  { src: '/images/logo-jacques-lugrin.png',           alt: 'Jacques Lugrin SA',                 href: 'https://www.jacqueslugrin.ch' },
  { src: '/images/logo-orllati.png',                  alt: 'Orllati SA',                        href: 'https://www.orllati.ch' },
]

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

      {/* 1. Hero */}
      <Hero
        bgImage="/images/triopan-bg.jpg"
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

      {/* 3. Expertises (3+2 grid) */}
      <section className="section-pad" aria-labelledby="expertises-title">
        <div className="container">
          <SectionHeader
            badge="Ce que nous faisons"
            title={<>Nos <span className="text-red">expertises</span></>}
            subtitle="De la fourniture à l'installation, nous couvrons l'ensemble de vos besoins en signalisation et sécurité routière."
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
            {expertises.slice(0,3).map(e => (
              <ServiceCard key={e.title} icon={e.icon} title={e.title} description={e.desc} linkLabel="En savoir plus" linkHref={e.link} />
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {expertises.slice(3).map(e => (
              <ServiceCard key={e.title} icon={e.icon} title={e.title} description={e.desc} linkLabel="En savoir plus" linkHref={e.link} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Votre spécialiste */}
      <section className="section-pad bg-navy" aria-labelledby="specialiste-title">
        <div className="container">
          <FeatureBlock
            image={{ src: '/images/autoroute-geneve.jpg', alt: 'Signalisation routière sur autoroute en Suisse romande par Robalex Signalisation' }}
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

      {/* 5. Ils nous font confiance */}
      <section className="section-pad bg-bg-light" aria-labelledby="clients-title">
        <div className="container">
          <SectionHeader badge="Références" title={<>Ils nous font <span className="text-red">confiance</span></>} subtitle="Communes, services d'urgence, Polices et entreprises actives sur le terrain dans toute la Suisse romande." centered />
          <div className="mt-10">
            <LogoMarquee logos={clients} />
          </div>
        </div>
      </section>

      {/* 6. Location feux promo */}
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

      {/* 7. Triopan feature */}
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

      {/* 8. Produits phares */}
      <section className="section-pad bg-white" aria-labelledby="produits-title">
        <div className="container">
          <SectionHeader badge="Notre gamme" title={<>Produits <span className="text-red">phares</span></>} subtitle="Une sélection de nos produits les plus demandés." centered />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { img: '/images/cone-signalisation.webp',                    pos: 'object-center', fit: 'object-cover',   cat: 'Signalisation temporaire', name: 'Cônes de signalisation',   desc: "Non-réfléchissants, réfléchissants R1 ou R2, ou entièrement réfléchissants — lestés ou non. Disponibles en plusieurs hauteurs pour toutes vos situations." },
              { img: '/images/barriere-vauban.png',                         pos: 'object-center', fit: 'object-contain p-2 bg-bg-light', cat: 'Délimitation',             name: 'Barrières Vauban',          desc: 'Barrières robustes en acier galvanisé pour fermer un accès ou sécuriser un périmètre temporairement. Stables, modulables et faciles à déplacer.' },
              { img: '/images/passage-pieton.jpg',                          pos: 'object-center', fit: 'object-cover',   cat: 'Signalisation permanente', name: 'Panneaux routiers OSR',     desc: 'Signaux OSR en aluminium rétroréfléchissant. Tous niveaux de réflexion disponibles (R1, R2, R3).' },
              { img: '/images/installation-miroir.jpg',                     pos: 'object-center', fit: 'object-cover',   cat: 'Sécurité',                 name: 'Miroirs de signalisation',  desc: "Miroirs convexes ronds ou rectangulaires pour carrefours, sorties de parkings et zones à faible visibilité. Option anti-givre disponible." },
              { img: '/images/fireball.png',                                pos: 'object-center', fit: 'object-contain p-3 bg-bg-light', cat: 'Signalisation temporaire', name: 'Lampes flash Fireball',     desc: "Lampes clignotantes compactes haute performance, conçues pour une visibilité maximale en journée. Utilisées par les services d'urgence, communes et forces de l'ordre." },
              { img: '/images/Liste produit/Radar-pedagogique.jpg',         pos: 'object-center', fit: 'object-contain p-2 bg-bg-light', cat: 'Sécurité routière',        name: 'Radar pédagogique',         desc: "Affichage de la vitesse en temps réel pour sensibiliser les conducteurs dans les zones à risque — zones 30, abords d'écoles, zones résidentielles." },
            ].map(p => (
              <article key={p.name} className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-light bg-white transition-shadow hover:shadow-card">
                <div className="aspect-[4/3] overflow-hidden bg-white">
                  <Image src={p.img} alt={`${p.name} — Robalex Signalisation`} width={400} height={300} className={`w-full h-full ${p.fit} ${p.pos}`} />
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

      {/* 9. Partenaires */}
      <section className="section-pad bg-bg-light" aria-labelledby="partenaires-title">
        <div className="container">
          <SectionHeader badge="Partenaires" title={<>Nos <span className="text-red">partenaires</span></>} subtitle="Des partenaires reconnus qui complètent notre offre en signalisation et sécurité routière." centered />
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-14">
            <PartnerLogo src="/images/logo-triopan.png" alt="Triopan AG - partenaire Robalex Signalisation" href="https://www.triopan.ch" />
            <PartnerLogo src="/images/logo-nissen.svg"  alt="Nissen AG - partenaire Robalex Signalisation" href="https://www.nissen.ch" />
          </div>
        </div>
      </section>

      {/* 10. CTA */}
      <CtaBand />
    </>
  )
}

// Inline SVG icons for expertise cards
function TempIcon() { return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 10V11" /></svg> }
function PermIcon() { return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> }
function InstIcon() { return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg> }
function FeuxIcon() { return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg> }
function MarkIcon() { return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg> }
