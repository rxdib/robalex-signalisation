import type { Metadata } from 'next'
import Image from 'next/image'
import Hero from '@/components/Hero'
import SectionHeader from '@/components/SectionHeader'
import ServiceCard from '@/components/ServiceCard'
import FeatureBlock from '@/components/FeatureBlock'
import CtaBand from '@/components/CtaBand'
import PartnerLogo from '@/components/PartnerLogo'
import { localBusinessSchema } from './schema'

export const metadata: Metadata = {
  title: 'Robalex Signalisation — Spécialiste signalisation routière Suisse romande',
  description: 'Fourniture, location et pose de signalisation routière en Suisse romande. Représentant Triopan SA. Devis gratuit — 021 657 07 05.',
  alternates: { canonical: 'https://www.robalex-signalisation.ch/' },
  openGraph: {
    title: 'Robalex Signalisation — Spécialiste en signalisation routière en Suisse romande',
    description: 'Fourniture, location et pose de signalisation routière. Représentant Triopan SA pour la Suisse romande.',
    url: 'https://www.robalex-signalisation.ch/',
    images: [{ url: '/images/triopan-bg.jpg' }],
  },
}

const expertises = [
  { icon: <TempIcon />, title: 'Signalisation temporaire',  desc: 'Signaux pliants Triopan, cônes, barrières, lampes flash et tout le matériel pour sécuriser vos chantiers.', link: '/nos-produits' },
  { icon: <PermIcon />, title: 'Signalisation permanente', desc: 'Panneaux OSR en classes R1, R2 ou R3, miroirs, mise à ban, mobilier urbain.', link: '/nos-produits' },
  { icon: <InstIcon />, title: 'Montage et installation',  desc: 'Pose et installation de signalisation selon les normes en vigueur, notamment la norme VSS 40 886.', link: '/nos-services' },
  { icon: <FeuxIcon />, title: 'Location feux de chantier', desc: 'Service clé en main : livraison, installation, maintenance et retrait inclus.', link: '/location-feux-chantier' },
  { icon: <MarkIcon />, title: 'Marquage routier',         desc: 'Nous réalisons tout type de marquage routier pour communes et entreprises.', link: '/nos-services' },
]

const clients = [
  { src: '/images/logo-canton-vaud.png',      alt: 'Canton de Vaud',             href: 'https://www.vd.ch' },
  { src: '/images/logo-police-vaudoise.jpg',  alt: 'Police cantonale vaudoise',  href: 'https://www.police.vd.ch' },
  { src: '/images/logo-police-geneve.jpg',    alt: 'Police cantonale genevoise', href: 'https://www.police.ge.ch' },
  { src: '/images/logo-canton-valais.png',    alt: 'Canton du Valais',           href: 'https://www.vs.ch' },
  { src: '/images/logo-romande-energie.svg',  alt: 'Romande Energie',            href: 'https://www.romande-energie.ch' },
  { src: '/images/logo-walo.jpg',             alt: 'Walo Bertschinger',          href: 'https://www.walo.ch' },
  { src: '/images/logo-bernasconi.png',       alt: 'Bernasconi',                 href: 'https://www.bernasconi-freres.ch' },
  { src: '/images/logo-cornaz.avif',          alt: 'Cornaz SA',                  href: 'https://www.cornaz.ch' },
  { src: '/images/logo-commune-yvonand.jpg',  alt: "Commune d'Yvonand",          href: 'https://www.yvonand.ch' },
]

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

      {/* 1. Hero */}
      <Hero
        bgImage="/images/triopan-bg.jpg"
        badge="Suisse romande"
        title={<>Votre expert en <span className="text-red">signalisation routière</span></>}
        subtitle="La fourniture, la location et la pose : nous prenons en charge tous vos besoins en signalisation routière."
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
            subtitle="De la fourniture à la pose, nous couvrons l'ensemble de vos besoins en signalisation routière."
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
              {["Services d'autoroutes",'Communes','Police','Corps de pompiers','Entreprises de génie civil','Régies immobilières'].map(c => (
                <li key={c} className="flex items-center gap-2 text-white/80 text-sm">
                  <span className="text-red font-bold">✓</span> {c}
                </li>
              ))}
            </ul>
            <p className="text-white/75 text-sm mb-6">
              Représentant officiel et exclusif de <strong className="text-white">Triopan SA</strong> pour toute la Suisse romande — leur principal représentant dans notre région.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="/a-propos" className="bg-red hover:bg-red-dark text-white font-head font-700 text-sm uppercase tracking-wide px-6 py-3 rounded transition-colors">En savoir plus</a>
              <a href="/contact" className="border-2 border-white/40 text-white hover:border-white font-head font-700 text-sm uppercase tracking-wide px-6 py-3 rounded transition-colors">Demander un devis</a>
            </div>
          </FeatureBlock>
        </div>
      </section>

      {/* 5. Location feux promo */}
      <section className="relative py-20 bg-[#0d1525] overflow-hidden" aria-labelledby="feux-title">
        <div className="absolute inset-0 bg-[url('/images/feux-decompte-1.jpg')] bg-cover bg-center opacity-10" aria-hidden="true" />
        <div className="absolute top-0 inset-x-0 h-1 bg-red" aria-hidden="true" />
        <div className="container relative z-10">
          <FeatureBlock
            image={{ src: '/images/feux-radar-2.jpg', alt: 'Feux de chantier avec radar pédagogique sur chantier routier à Lausanne' }}
            dark
            reverse
          >
            <SectionHeader
              title={<>Location de <span className="text-red">feux de chantier</span></>}
              white
            />
            <ul className="flex flex-col gap-3 mb-6">
              {[
                "Nous prenons en charge l'installation, la maintenance et le retrait de vos feux de chantier.",
                'Feux avec radar pédagogique intégré',
                'Feu à décompte de temps',
                'Couverture dans tout le Canton de Vaud et en Suisse romande',
              ].map(item => (
                <li key={item} className="flex items-start gap-2 text-white/80 text-sm">
                  <span className="text-red font-bold mt-0.5">✓</span> {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <a href="/location-feux-chantier" className="bg-red hover:bg-red-dark text-white font-head font-700 text-sm uppercase tracking-wide px-6 py-3 rounded transition-colors">En savoir plus</a>
              <a href="tel:+41216570705" className="border-2 border-white/40 text-white hover:border-white font-head font-700 text-sm uppercase tracking-wide px-6 py-3 rounded transition-colors">021 657 07 05</a>
            </div>
          </FeatureBlock>
        </div>
      </section>

      {/* 6. Triopan feature */}
      <section className="section-pad bg-bg-light" aria-labelledby="triopan-title">
        <div className="container">
          <FeatureBlock
            image={{ src: '/images/triopan-bg.jpg', alt: 'Panneaux Triopan — signalisation pliante suisse, disponibles chez Robalex Signalisation' }}
            imageBadge="Représentant officiel Triopan"
          >
            <SectionHeader badge="Partenaire exclusif" title={<>Représentant <span className="text-red">Triopan SA</span> en Suisse romande</>} />
            <p className="text-gray-dark mb-3">Robalex Signalisation est le représentant officiel de <strong>Triopan SA</strong> pour toute la Suisse romande — leur principal représentant dans notre région.</p>
            <ul className="flex flex-col gap-2 mb-6">
              {['Gamme complète de panneaux Triopan en stock','Livraison rapide dans toute la Suisse romande','Conformes aux normes VSS et ASTRA','Conseils personnalisés'].map(item => (
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
      <section className="section-pad" aria-labelledby="produits-title">
        <div className="container">
          <SectionHeader badge="Notre gamme" title={<>Produits <span className="text-red">phares</span></>} subtitle="Une sélection de nos produits les plus demandés." centered />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { img: '/images/cone-signalisation.webp', cat: 'Signalisation temporaire', name: 'Cônes de signalisation', desc: 'Tous types de cônes pour délimiter et sécuriser vos zones de travaux ou chantiers.' },
              { img: '/images/barriere-vauban.png',     cat: 'Délimitation',             name: 'Barrières Vauban & extensibles', desc: 'Barrières légères et robustes pour sécuriser vos périmètres.' },
              { img: '/images/panneaux-signalisation.jpg', cat: 'Signalisation permanente', name: 'Panneaux routiers', desc: 'Panneaux OSR en aluminium rétroréfléchissant R1, R2, R3.' },
              { img: '/images/miroir-signalisation.jpg', cat: 'Sécurité',                name: 'Miroirs de sécurité', desc: 'Miroirs convexes pour carrefours, parkings et zones à faible visibilité.' },
              { img: '/images/feux-radar-1.jpg',         cat: 'Location feux',           name: 'Feux de chantier', desc: 'Location clé en main avec radar pédagogique ou décompte de temps.' },
              { img: '/images/radar-pedagogique.jpg',    cat: 'Sécurité routière',       name: 'Radars pédagogiques', desc: 'Affichage de vitesse pour sensibiliser les conducteurs.' },
            ].map(p => (
              <article key={p.name} className="bg-white border border-gray-light rounded-xl overflow-hidden hover:shadow-card transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <Image src={p.img} alt={`${p.name} — Robalex Signalisation`} width={400} height={225} className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
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
          <SectionHeader badge="Références" title={<>Ils nous font <span className="text-red">confiance</span></>} subtitle="Communes, services d'urgence, forces de l'ordre et entreprises de construction." centered />
          <div className="flex flex-wrap justify-center items-center gap-8">
            {clients.map(c => (
              <a key={c.alt} href={c.href} target="_blank" rel="noopener noreferrer" aria-label={c.alt} className="opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 p-2">
                <Image src={c.src} alt={c.alt} width={120} height={60} className="object-contain max-h-14" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Partenaires */}
      <section className="section-pad" aria-labelledby="partenaires-title">
        <div className="container">
          <SectionHeader badge="Partenaires" title={<>Nos <span className="text-red">partenaires</span></>} centered />
          <div className="flex flex-wrap justify-center gap-8">
            <PartnerLogo src="/images/logo-triopan.png" alt="Triopan AG — partenaire Robalex Signalisation" href="https://www.triopan.ch" />
            <PartnerLogo src="/images/logo-nissen.svg"  alt="Nissen AG — partenaire Robalex Signalisation" href="https://www.nissen.ch" />
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
