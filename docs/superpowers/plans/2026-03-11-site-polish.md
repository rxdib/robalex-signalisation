# Site Polish Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Upgrade copy, terminology, and visual polish across all 6 pages + 1 component of robalex-signalisation.ch to match professional Swiss road signage industry standards.

**Architecture:** Direct file edits — no new dependencies, no new pages. Inline SVG icon functions replace placeholder red bars. StepProcess gains optional `desc` field. `nos-produits` gains a new "Sécurité & mobilier urbain" section.

**Tech Stack:** Next.js App Router, TypeScript, Tailwind CSS v4, inline SVG (no new npm packages).

---

## Chunk 1: Component & product/about pages

### Task 1: StepProcess — add optional step description

**Files:**
- Modify: `components/StepProcess.tsx`

- [ ] **Step 1: Open and read current file**

Confirm current content matches what is described in this plan (number circle + label only, no desc).

- [ ] **Step 2: Replace the entire file with the new version**

```tsx
interface Step { number: number; label: string; desc?: string }

interface StepProcessProps { steps: Step[] }

export default function StepProcess({ steps }: StepProcessProps) {
  return (
    <div className="flex flex-wrap items-start justify-center gap-2">
      {steps.map((step, i) => (
        <div key={step.number} className="flex items-start gap-2">
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-red text-white font-head font-800 text-lg flex items-center justify-center mb-2">
              {step.number}
            </div>
            <span className="text-xs font-head font-700 text-dark max-w-[110px] leading-tight">{step.label}</span>
            {step.desc && (
              <p className="text-xs text-gray-dark mt-1 max-w-[110px] leading-snug">{step.desc}</p>
            )}
          </div>
          {i < steps.length - 1 && (
            <span className="text-red font-head font-700 text-xl mt-3 hidden sm:block">→</span>
          )}
        </div>
      ))}
    </div>
  )
}
```

Key changes from original:
- `items-center` → `items-start` on outer flex div (variable height when desc present)
- `max-w-[90px]` → `max-w-[110px]` on label span (slightly wider to accommodate desc)
- Added `{step.desc && <p ...>}` block after label span
- Arrow `mt-3` to align with circle when items-start

- [ ] **Step 3: Verify TypeScript compiles**

Run: `cd C:\Users\Robin\Desktop\robalex-next && npx tsc --noEmit`
Expected: no errors (desc is optional, no breaking change to callers without desc)

- [ ] **Step 4: Commit**

```bash
git add components/StepProcess.tsx
git commit -m "feat: add optional desc field to StepProcess steps"
```

---

### Task 2: nos-produits — restructure sections, fix cone description

**Files:**
- Modify: `app/nos-produits/page.tsx`

- [ ] **Step 1: Replace the entire file**

```tsx
import type { Metadata } from 'next'
import Image from 'next/image'
import Hero from '@/components/Hero'
import SectionHeader from '@/components/SectionHeader'
import CtaBand from '@/components/CtaBand'

export const metadata: Metadata = {
  title: 'Nos produits — Signalisation routière Suisse',
  description: 'Signalisation routière temporaire, permanente et matériel de chantier. Signaux pliants Triopan, cônes, barrières, panneaux OSR R1 R2 R3. Conforme normes suisses.',
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
  { img: '/images/Liste produit/Cône-de-signalisation.webp', name: 'Cônes de signalisation',      desc: "Délimitation de zones de travaux et d'interventions. Disponibles en plusieurs tailles." },
  { img: '/images/Liste produit/barriere-extensible.webp', name: 'Barrière extensible aluminium', desc: "Légère et robuste, s'adapte à toutes les configurations de chantier." },
  { img: '/images/Liste produit/Ruban de barrage 500m + texte.png', name: 'Ruban de barrage rouge-blanc', desc: "Personnalisable : POLICE, POLICE ZONE INTERDITE, nom d'entreprise…" },
  { img: '/images/Liste produit/Barrière_Vauban.png',      name: 'Barrière mobile Vauban',         desc: 'Délimitation de périmètre robuste pour chantiers et événements.' },
]

const permProducts = [
  { img: '/images/Liste produit/Miroir-signalisation.jpg', name: 'Miroirs de signalisation', desc: 'Modèles rectangulaires ou ronds pour carrefours, parkings et zones à faible visibilité.' },
  { img: '/images/Liste produit/Mise à ban.jpeg',          name: 'Mise à ban',               desc: 'Fabrication et installation de signaux de mise à ban conformes aux prescriptions suisses.' },
]

const securiteProducts = [
  { img: '/images/Liste produit/Radar-pedagogique.jpg', name: 'Radar pédagogique',  desc: "Affichage de la vitesse en temps réel pour sensibiliser les conducteurs dans les zones à risque." },
  { img: '/images/Liste produit/Potelet.jpeg',           name: 'Potelets de guidage', desc: 'Délimitation de trottoirs, pistes cyclables et zones piétonnes. Disponibles en plusieurs modèles.' },
  { img: '/images/travaux-ralentisseurs.jpg',            name: 'Ralentisseurs',        desc: "Dos-d'âne et coussins berlinois pour réduire la vitesse en zone sensible, conformes aux normes suisses." },
]

const chantierProducts = [
  { img: '/images/Liste produit/Latte-barrage.jpg',    name: 'Lattes de barrage rouge-blanc', desc: 'En bois avec bandes réfléchissantes, disponibles en 3m ou 4m.' },
  { img: '/images/Liste produit/Lampe-chantier.png',   name: 'Lampes de chantier',            desc: 'Éclairage et balisage de chantier homologué.' },
  { img: '/images/Liste produit/Support-trilatte.jpeg', name: 'Support trilatte',             desc: 'Support pour signalisation avancée de chantier.' },
]

function ProductGrid({ products }: { products: { img: string; name: string; desc: string }[] }) {
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
        subtitle="Fourniture de signalisation routière conforme aux normes OFROU/VSS — de la signalisation temporaire de chantier aux signaux OSR permanents."
        primaryCta={{ label: 'Demander un devis', href: '/contact' }}
        secondaryCta={{ label: 'Voir les catalogues', href: '/nos-catalogues' }}
      />

      {/* Sig. temporaire */}
      <section className="section-pad" aria-label="Signalisation temporaire">
        <div className="container">
          <SectionHeader
            badge="Signalisation temporaire"
            title={<>Matériel pour <span className="text-red">chantiers et urgences</span></>}
            subtitle="Tout le matériel nécessaire pour le balisage temporaire de vos chantiers, interventions d'urgence ou événements."
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
            title={<>Signaux OSR et dispositifs <span className="text-red">permanents</span></>}
            subtitle="Signaux OSR conformes aux prescriptions suisses, disponibles en rétro-réflexion R1, R2 ou R3."
          />
          <ProductGrid products={permProducts} />
        </div>
      </section>

      {/* Sécurité & mobilier urbain */}
      <section className="section-pad" aria-label="Sécurité et mobilier urbain">
        <div className="container">
          <SectionHeader
            badge="Sécurité routière"
            title={<>Sécurité & <span className="text-red">mobilier urbain</span></>}
            subtitle="Équipements pour réduire la vitesse, guider et protéger les usagers vulnérables."
          />
          <ProductGrid products={securiteProducts} />
        </div>
      </section>

      {/* Matériel chantier */}
      <section className="section-pad bg-bg-light" aria-label="Matériel de chantier et balisage">
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
```

Key changes from original:
- Cone description: removed "K1, K2, K3" classification references
- `permProducts`: removed Radar pédagogique and Mobilier urbain
- New `securiteProducts` array with Radar, Potelets, Ralentisseurs
- New "Sécurité & mobilier urbain" section between permanente and balisage
- Hero subtitle: updated to OFROU/VSS terminology
- Temporaire subtitle: "balisage temporaire" added
- Permanente title/subtitle: "Signaux OSR" instead of "Panneaux de signalisation"
- `ProductGrid` type signature: explicit `{ img, name, desc }[]` instead of `typeof tempProducts`

- [ ] **Step 2: Verify TypeScript compiles**

Run: `cd C:\Users\Robin\Desktop\robalex-next && npx tsc --noEmit`
Expected: no errors

- [ ] **Step 3: Commit**

```bash
git add app/nos-produits/page.tsx
git commit -m "feat: add Sécurité & mobilier urbain section to nos-produits, fix cone description"
```

---

### Task 3: a-propos — SVG icons, improved copy, canton badges

**Files:**
- Modify: `app/a-propos/page.tsx`

- [ ] **Step 1: Replace the entire file**

```tsx
import type { Metadata } from 'next'
import Image from 'next/image'
import Hero from '@/components/Hero'
import SectionHeader from '@/components/SectionHeader'
import FeatureBlock from '@/components/FeatureBlock'
import CtaBand from '@/components/CtaBand'

export const metadata: Metadata = {
  title: 'À propos — Robalex Signalisation Sàrl Lausanne',
  description: "Depuis plus de 20 ans, Robalex Signalisation accompagne communes, services d'urgence et entreprises de génie civil en Suisse romande.",
  alternates: { canonical: 'https://www.robalex-signalisation.ch/a-propos/' },
  openGraph: {
    title: 'À propos — Robalex Signalisation Sàrl Lausanne',
    description: "Depuis plus de 20 ans, Robalex Signalisation accompagne communes, services d'urgence et entreprises de génie civil en Suisse romande.",
    url: 'https://www.robalex-signalisation.ch/a-propos/',
    images: [{ url: '/images/autoroute-suisse-pont.jpg' }],
  },
}

export default function AProposPage() {
  return (
    <>
      <Hero
        bgImage="/images/autoroute-suisse-pont.jpg"
        badge="À propos"
        title={<>À propos de <span className="text-red">Robalex Signalisation</span></>}
        subtitle="Depuis 2004, nous assurons la fourniture, la pose et la sécurisation des chantiers en Suisse romande — conformes aux normes OFROU/VSS."
        primaryCta={{ label: 'Nous contacter', href: '/contact' }}
      />

      {/* Notre histoire */}
      <section className="section-pad">
        <div className="container">
          <FeatureBlock
            image={{ src: '/images/autoroute-geneve.jpg', alt: "Autoroute genevoise — terrain d'intervention de Robalex Signalisation en Suisse romande" }}
          >
            <SectionHeader badge="Notre histoire" title={<>Plus de 20 ans <span className="text-red">d'expertise</span></>} />
            <p className="text-gray-dark mb-4">Fondée en 2004 à Lausanne, Robalex Signalisation Sàrl s'est imposée comme un acteur incontournable de la signalisation routière en Suisse romande.</p>
            <p className="text-gray-dark mb-4">Notre approche repose sur deux piliers : des <strong>produits de haute qualité</strong> et un <strong>service client irréprochable</strong>. Nous intervenons pour les services d'autoroutes, les communes, la police, les corps de pompiers, les entreprises de génie civil et les régies immobilières.</p>
            <p className="text-gray-dark">En tant que représentant officiel de <strong>Triopan SA</strong> pour toute la Suisse romande, nous offrons un accès direct à la gamme complète des panneaux pliants et systèmes de signalisation innovants Triopan.</p>
          </FeatureBlock>
        </div>
      </section>

      {/* Valeurs */}
      <section className="section-pad bg-bg-light">
        <div className="container">
          <SectionHeader badge="Nos valeurs" title={<>Ce qui nous <span className="text-red">distingue</span></>} centered />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
            {[
              {
                icon: <QualityIcon />,
                title: 'Qualité',
                desc: 'Nos produits sont conformes aux normes OFROU/VSS et sélectionnés pour leur durabilité et leur lisibilité optimale sur le terrain.',
              },
              {
                icon: <ReactivityIcon />,
                title: 'Réactivité',
                desc: "Devis sous 24h et intervention dans les meilleurs délais — disponibles pour les urgences et les interventions de nuit.",
              },
              {
                icon: <AdviceIcon />,
                title: 'Conseils personnalisés',
                desc: "De la conception à la pose, notre équipe terrain vous accompagne pour trouver la solution la mieux adaptée à votre situation.",
              },
            ].map(v => (
              <div key={v.title} className="text-center">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-red/10 text-red mx-auto mb-4">
                  {v.icon}
                </div>
                <h3 className="font-head font-700 text-lg text-dark mb-2">{v.title}</h3>
                <p className="text-gray-dark text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zone de couverture */}
      <section className="relative py-20 overflow-hidden" aria-label="Zone de couverture">
        <div className="absolute inset-0 bg-[url('/images/autoroute-suisse-pont.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="container relative z-10 text-center text-white">
          <SectionHeader
            badge="Notre couverture"
            title={<>Toute la <span className="text-red">Suisse romande</span></>}
            subtitle="Interventions dans 6 cantons, de la signalisation temporaire de chantier aux signaux OSR permanents."
            centered white
          />
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {['VD — Vaud', 'GE — Genève', 'VS — Valais', 'FR — Fribourg', 'NE — Neuchâtel', 'JU — Jura'].map(c => (
              <span key={c} className="bg-white/15 border border-white/30 text-white text-sm font-head font-600 px-4 py-2 rounded-full">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}

function QualityIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  )
}

function ReactivityIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  )
}

function AdviceIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
    </svg>
  )
}
```

Key changes from original:
- Hero subtitle: more professional + OFROU/VSS reference
- Values: `w-2 h-12 bg-red` bar → `w-14 h-14 rounded-full bg-red/10 text-red` circle containing SVG icon
- Value descriptions: added OFROU/VSS, "de la conception à la pose", "24h" specificity
- Coverage subtitle: "Interventions dans 6 cantons…" (more specific)
- Coverage section: 6 canton pill badges added below header

- [ ] **Step 2: Verify TypeScript compiles**

Run: `cd C:\Users\Robin\Desktop\robalex-next && npx tsc --noEmit`
Expected: no errors

- [ ] **Step 3: Commit**

```bash
git add app/a-propos/page.tsx
git commit -m "feat: replace red bar icons with SVG, add canton badges, improve a-propos copy"
```

---

## Chunk 2: Location-feux, nos-services, homepage

### Task 4: location-feux — step descriptions, SVG advantage icons

**Files:**
- Modify: `app/location-feux-chantier/page.tsx`

- [ ] **Step 1: Replace the entire file**

```tsx
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
  { number: 1, label: 'Contactez-nous',      desc: 'Appelez ou envoyez votre demande en ligne.' },
  { number: 2, label: 'Devis rapide',         desc: 'Réponse sous 24h, prix tout compris.' },
  { number: 3, label: 'Installation',         desc: 'Pose sur site par notre équipe.' },
  { number: 4, label: 'Suivi & maintenance',  desc: 'Disponible 7j/7 pendant toute la durée.' },
  { number: 5, label: 'Retrait',              desc: 'Démontage et reprise du matériel inclus.' },
]

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
              {
                icon: <ClockIcon />,
                title: 'Réactivité',
                desc: "Devis sous 24h, livraison et pose dans les meilleurs délais, même pour les interventions d'urgence.",
              },
              {
                icon: <TagIcon />,
                title: 'Prix compétitifs',
                desc: 'Tarifs transparents et compétitifs, sans frais cachés. Tout est inclus : matériel, installation et retrait.',
              },
              {
                icon: <MapPinIcon />,
                title: 'Couverture étendue',
                desc: "Tout le Canton de Vaud et l'ensemble de la Suisse romande. Interventions possibles 7j/7.",
              },
            ].map(a => (
              <div key={a.title} className="text-center p-6 bg-bg-light rounded-xl">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-red/10 text-red mx-auto mb-4">
                  {a.icon}
                </div>
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

function ClockIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function TagIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
    </svg>
  )
}

function MapPinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  )
}
```

Key changes from original:
- `steps`: added `desc` field to every step
- Advantages: `w-2 h-10 bg-red` bar → `w-14 h-14 rounded-full bg-red/10 text-red` circle with SVG icon
- Advantage descriptions: more detail (24h, 7j/7, "tout inclus")
- "Couverture" → "Couverture étendue" (more specific title)
- SVG icon functions: ClockIcon, TagIcon, MapPinIcon at bottom of file

- [ ] **Step 2: Verify TypeScript compiles**

Run: `cd C:\Users\Robin\Desktop\robalex-next && npx tsc --noEmit`
Expected: no errors

- [ ] **Step 3: Commit**

```bash
git add app/location-feux-chantier/page.tsx
git commit -m "feat: add step descriptions, replace red bar icons with SVG on location-feux page"
```

---

### Task 5: nos-services — descriptive badge names, improved copy

**Files:**
- Modify: `app/nos-services/page.tsx`

- [ ] **Step 1: Edit the services array badge values and descriptions**

Replace the `services` array (lines 20–74) with:

```tsx
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
    badge: 'Temporaire',
    titleNode: <>Signalisation <span className="text-red">temporaire</span></>,
    desc: "Nous prenons en charge la mise en place complète de votre signalisation de chantier : fourniture, transport et installation sur site conformément aux directives OFROU et à la norme VSS 40 886. Nous nous adaptons aux plans fournis ou proposons notre expertise terrain si aucun plan n'est disponible.",
    points: ['Fermetures de routes', 'Travaux sur chaussée', "Interventions d'urgence", 'Événements temporaires'],
    reverse: false,
  },
  {
    img: '/images/installation-panneaux.jpg',
    alt: 'Installation de panneaux de signalisation permanente par Robalex Signalisation',
    badge: 'Permanente',
    titleNode: <>Signalisation <span className="text-red">permanente</span></>,
    desc: "Fourniture et pose de signaux OSR conformes à l'ordonnance sur la signalisation routière : zones 30, passages piétons, panneaux d'interdiction et directionnels. Tous nos signaux sont disponibles en rétro-réflexion R1, R2 ou R3.",
    points: ['Zones 30 et 20', 'Passages piétons', 'Panneaux indicateurs', 'Mise à ban'],
    reverse: true,
  },
  {
    img: '/images/travaux-marquage-parking.jpg',
    alt: 'Marquage de places de parking réalisé par Robalex Signalisation en Suisse romande',
    badge: 'Marquage routier',
    titleNode: <>Marquage <span className="text-red">routier</span></>,
    desc: 'Nous réalisons tout type de marquage routier conformes aux prescriptions suisses : lignes axiales et de rive, passages piétons, zones de stationnement numérotées, flèches directionnelles et signalétique au sol.',
    points: ['Lignes axiales et de rive', 'Passages piétons', 'Marquage de parking & numérotation', 'Flèches et symboles'],
    reverse: false,
  },
  {
    img: '/images/travaux-location-materiel.jpg',
    alt: 'Location et installation de matériel de signalisation temporaire pour chantier en Suisse romande',
    badge: 'Location matériel',
    titleNode: <>Location de <span className="text-red">matériel</span> de signalisation</>,
    desc: "Location et installation de matériel de signalisation routière pour toutes vos interventions temporaires. Service complet et clé en main : fourniture, installation sur site et retrait en fin d'intervention, conformément à la norme VSS 40 886.",
    points: ['Fermetures de routes', 'Pose de grues et engins de chantier', 'Modifications temporaires de circulation', 'Réservation de places de stationnement'],
    reverse: true,
  },
  {
    img: '/images/panneau-candelabre.jpg',
    alt: 'Montage et installation de panneau de signalisation sur candélabre par Robalex Signalisation',
    badge: 'Montage',
    titleNode: <>Montage et <span className="text-red">installation</span></>,
    desc: "Nos équipes prennent en charge le montage et l'installation de tous vos équipements de signalisation sur site, qu'il s'agisse de signaux permanents ou de dispositifs temporaires. Interventions conformes aux directives OFROU, sur la base de vos plans ou avec notre propre expertise terrain.",
    points: ['Pose de panneaux permanents', 'Installation de signalisation temporaire', 'Démontage et retrait du matériel', "Interventions d'urgence et délais courts"],
    reverse: false,
  },
]
```

- [ ] **Step 2: Verify TypeScript compiles**

Run: `cd C:\Users\Robin\Desktop\robalex-next && npx tsc --noEmit`
Expected: no errors

- [ ] **Step 3: Commit**

```bash
git add app/nos-services/page.tsx
git commit -m "feat: descriptive service badge names, add OFROU/VSS references to nos-services"
```

---

### Task 6: homepage — copy improvements, Triopan dedup

**Files:**
- Modify: `app/page.tsx`

These are targeted edits, not a full file replacement.

- [ ] **Step 1: Update hero subtitle (line ~59)**

Old:
```tsx
subtitle="La fourniture, la location et la pose : nous prenons en charge tous vos besoins en signalisation routière."
```
New:
```tsx
subtitle="De la conception à la pose, nous prenons en charge l'ensemble de vos besoins en signalisation routière — conformes aux normes OFROU/VSS."
```

- [ ] **Step 2: Update expertises array descriptions (lines ~23–29)**

Old expertises array:
```tsx
const expertises = [
  { icon: <TempIcon />, title: 'Signalisation temporaire',  desc: 'Signaux pliants Triopan, cônes, barrières, lampes flash et tout le matériel pour sécuriser vos chantiers.', link: '/nos-produits' },
  { icon: <PermIcon />, title: 'Signalisation permanente', desc: 'Panneaux OSR en classes R1, R2 ou R3, miroirs, mise à ban, mobilier urbain.', link: '/nos-produits' },
  { icon: <InstIcon />, title: 'Montage et installation',  desc: 'Pose et installation de signalisation selon les normes en vigueur, notamment la norme VSS 40 886.', link: '/nos-services' },
  { icon: <FeuxIcon />, title: 'Location feux de chantier', desc: 'Service clé en main : livraison, installation, maintenance et retrait inclus.', link: '/location-feux-chantier' },
  { icon: <MarkIcon />, title: 'Marquage routier',         desc: 'Nous réalisons tout type de marquage routier pour communes et entreprises.', link: '/nos-services' },
]
```
New expertises array:
```tsx
const expertises = [
  { icon: <TempIcon />, title: 'Signalisation temporaire',  desc: 'Balisage temporaire de chantier — signaux pliants Triopan, cônes, barrières et lampes flash pour sécuriser toutes vos interventions.', link: '/nos-produits' },
  { icon: <PermIcon />, title: 'Signalisation permanente', desc: 'Signaux OSR en rétro-réflexion R1, R2 ou R3 — miroirs, mise à ban et mobilier urbain.', link: '/nos-produits' },
  { icon: <InstIcon />, title: 'Montage et installation',  desc: 'Pose et installation conformes aux directives OFROU et à la norme VSS 40 886.', link: '/nos-services' },
  { icon: <FeuxIcon />, title: 'Location feux de chantier', desc: 'Service clé en main : livraison, installation, maintenance et retrait — intervention 7j/7.', link: '/location-feux-chantier' },
  { icon: <MarkIcon />, title: 'Marquage routier',         desc: 'Marquage routier conforme aux prescriptions suisses pour communes, entreprises et régies.', link: '/nos-services' },
]
```

- [ ] **Step 3: Fix Triopan section paragraph — remove redundant phrase (line ~176)**

Old:
```tsx
<p className="text-gray-dark mb-3">Robalex Signalisation est le représentant officiel de <strong>Triopan SA</strong> pour toute la Suisse romande — leur principal représentant dans notre région.</p>
```
New:
```tsx
<p className="text-gray-dark mb-3">Robalex Signalisation est le représentant officiel de <strong>Triopan SA</strong> pour toute la Suisse romande — accès direct à toute la gamme de signaux pliants et dispositifs innovants.</p>
```

- [ ] **Step 4: Fix Triopan bullet — update terminology (line ~178)**

Old:
```tsx
'Conformes aux normes VSS et ASTRA'
```
New:
```tsx
'Conformes aux normes OFROU/VSS'
```

- [ ] **Step 5: Fix specialist section Triopan line — remove redundant phrase (line ~124)**

Old:
```tsx
<p className="text-white/75 text-sm mb-6">
  Représentant officiel et exclusif de <strong className="text-white">Triopan SA</strong> pour toute la Suisse romande — leur principal représentant dans notre région.
</p>
```
New:
```tsx
<p className="text-white/75 text-sm mb-6">
  Représentant officiel et exclusif de <strong className="text-white">Triopan SA</strong> pour toute la Suisse romande — accès direct à l'ensemble de la gamme Triopan.
</p>
```

- [ ] **Step 6: Verify TypeScript compiles**

Run: `cd C:\Users\Robin\Desktop\robalex-next && npx tsc --noEmit`
Expected: no errors

- [ ] **Step 7: Commit**

```bash
git add app/page.tsx
git commit -m "feat: improve homepage copy, OFROU/VSS terminology, fix Triopan redundancy"
```

---

### Task 7: Push all commits to remote

- [ ] **Step 1: Check git log**

Run: `cd C:\Users\Robin\Desktop\robalex-next && git log --oneline -8`
Expected: see 6 commits from this session (StepProcess, nos-produits, a-propos, location-feux, nos-services, homepage)

- [ ] **Step 2: Push**

Run: `cd C:\Users\Robin\Desktop\robalex-next && git push`
Expected: "Branch 'main' set up to track remote branch" or just success output

- [ ] **Step 3: Verify Vercel deployment started**

Check: https://vercel.com/dashboard — deployment should appear within ~30 seconds
