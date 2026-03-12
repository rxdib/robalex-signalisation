# Site Update Round 2 Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Apply comprehensive copy, image, and layout updates across 7 pages + 2 global components for the Robalex Signalisation Next.js site.

**Architecture:** All changes are content/copy/image swaps and minor layout adjustments in existing files. No new components are created. The build is a Next.js 15 static export — `npm run build` is the primary verification.

**Tech Stack:** Next.js 15 App Router, TypeScript, Tailwind CSS v4, static export (`output: 'export'`)

**Spec:** `docs/superpowers/specs/2026-03-12-site-update-round2-design.md`

---

## Chunk 1: Assets & Global Fixes

Files touched:
- Copy (Bash): 5 images → `public/images/`
- Copy (Bash): 1 PDF → `public/catalogues/`
- Modify: `app/schema.ts`
- Modify: `components/Footer.tsx`
- Modify: `app/contact/page.tsx`

---

### Task 1: Copy image assets

**Files:**
- Bash: copy 5 source images to `public/images/` with lowercase filenames

- [ ] **Step 1: Copy 5 images**

Run these 5 Copy-Item commands in PowerShell (one per line):

```powershell
Copy-Item "C:\Users\Robin\Desktop\site robalex\images\Feux-radar-installation.jpg" "C:\Users\Robin\Desktop\robalex-next\public\images\feux-radar-installation.jpg"
Copy-Item "C:\Users\Robin\Desktop\site robalex\images\Installation-signalisation-temporaire-location.jpg" "C:\Users\Robin\Desktop\robalex-next\public\images\installation-signalisation-temporaire-location.jpg"
Copy-Item "C:\Users\Robin\Desktop\site robalex\images\Installation-potelet-mobilier-urbain.jpg" "C:\Users\Robin\Desktop\robalex-next\public\images\installation-potelet-mobilier-urbain.jpg"
Copy-Item "C:\Users\Robin\Desktop\site robalex\images\Installation-barriere-urbain.jpg" "C:\Users\Robin\Desktop\robalex-next\public\images\installation-barriere-urbain.jpg"
Copy-Item "C:\Users\Robin\Desktop\site robalex\images\ruban-barrage-personnalisé.jpg" "C:\Users\Robin\Desktop\robalex-next\public\images\ruban-barrage-personnalise.jpg"
```

- [ ] **Step 2: Verify copies exist**

```powershell
Get-ChildItem "C:\Users\Robin\Desktop\robalex-next\public\images\" | Where-Object { $_.Name -match "installation|ruban-barrage-personnalise|feux-radar-installation" }
```

Expected: 5 files listed.

---

### Task 2: Copy PDF catalogue

**Files:**
- Bash: ensure `public/catalogues/` exists, copy PDF

- [ ] **Step 1: Ensure directory exists and copy PDF**

```powershell
New-Item -ItemType Directory -Force -Path "C:\Users\Robin\Desktop\robalex-next\public\catalogues"
Copy-Item "C:\Users\Robin\Desktop\site robalex\catalogues\Robalex_Signaux_Routiers.pdf" "C:\Users\Robin\Desktop\robalex-next\public\catalogues\Robalex_Signaux_Routiers.pdf"
```

- [ ] **Step 2: Verify**

```powershell
Get-ChildItem "C:\Users\Robin\Desktop\robalex-next\public\catalogues\"
```

Expected: `Robalex_Signaux_Routiers.pdf` present alongside existing catalogues.

---

### Task 3: Fix address in `app/schema.ts`

**Files:**
- Modify: `app/schema.ts` line 12

- [ ] **Step 1: Change streetAddress**

In `app/schema.ts`, change:
```ts
    streetAddress: 'Chemin de Grandchamp 6',
```
to:
```ts
    streetAddress: 'Chemin du Grand Champ 6',
```

- [ ] **Step 2: Verify**

Open `app/schema.ts` and confirm line 12 reads `'Chemin du Grand Champ 6'`.

---

### Task 4: Fix `components/Footer.tsx` — heading + address

**Files:**
- Modify: `components/Footer.tsx` lines 47 and 74

- [ ] **Step 1: Change heading Navigation → Menu (line 47)**

Change:
```tsx
            <h4 className="text-white font-head font-700 text-sm uppercase tracking-wider mb-4">Navigation</h4>
```
to:
```tsx
            <h4 className="text-white font-head font-700 text-sm uppercase tracking-wider mb-4">Menu</h4>
```

- [ ] **Step 2: Fix address in `<address>` block (line 74)**

Change:
```tsx
              Chemin de Grandchamp 6<br />
```
to:
```tsx
              Chemin du Grand Champ 6<br />
```

- [ ] **Step 3: Verify both changes are present**

Open `components/Footer.tsx` and confirm:
- `>Menu</h4>` appears instead of `>Navigation</h4>`
- `Chemin du Grand Champ 6` appears in the address block

---

### Task 5: Fix `app/contact/page.tsx` — address + Maps embed

**Files:**
- Modify: `app/contact/page.tsx` lines 53, 71–78

- [ ] **Step 1: Fix address in the dl data (line 53)**

Change:
```tsx
                  { label: 'Adresse', value: 'Chemin de Grandchamp 6\n1018 Lausanne' },
```
to:
```tsx
                  { label: 'Adresse', value: 'Chemin du Grand Champ 6\n1018 Lausanne' },
```

- [ ] **Step 2: Update Google Maps iframe src**

Change the `src` attribute of the `<iframe>`:
```tsx
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2745.9!2d6.6323!3d46.5197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zQ2hlbWluIGRlIEdyYW5kY2hhbXAgNiwgMTAxOCBMYXVzYW5uZQ!5e0!3m2!1sfr!2sch!4v1"
```
to:
```tsx
                  src="https://maps.google.com/maps?q=Chemin+du+Grand+Champ+6,+1018+Lausanne&output=embed"
```

- [ ] **Step 3: Update iframe title attribute**

Change:
```tsx
                  title="Localisation Robalex Signalisation — Chemin de Grandchamp 6, 1018 Lausanne"
```
to:
```tsx
                  title="Localisation Robalex Signalisation — Chemin du Grand Champ 6, 1018 Lausanne"
```

- [ ] **Step 4: Verify**

Open `app/contact/page.tsx` and confirm `Chemin du Grand Champ 6` appears in 3 places: the `value` string, the `src` URL, and the `title` attribute.

---

### Task 6: Commit Chunk 1

- [ ] **Step 1: Stage and commit**

```bash
git add public/images/feux-radar-installation.jpg \
        public/images/installation-signalisation-temporaire-location.jpg \
        public/images/installation-potelet-mobilier-urbain.jpg \
        public/images/installation-barriere-urbain.jpg \
        public/images/ruban-barrage-personnalise.jpg \
        public/catalogues/Robalex_Signaux_Routiers.pdf \
        app/schema.ts \
        components/Footer.tsx \
        app/contact/page.tsx
git commit -m "feat: add round-2 image/PDF assets; fix address to 'Chemin du Grand Champ 6'"
```

---

## Chunk 2: Homepage (`app/page.tsx`)

Five independent changes to this file:
1. Location feux section: dark navy → light (remove dark BG + absolute divs, remove `dark` prop, fix text colours)
2. Triopan section: swap image, update paragraph, replace 4 bullets with 5
3. Featured products: replace full 6-card array
4. Trust section: move from position 8 → 4 (after Expertises), update subtitle
5. Partners section: add `items-center`

Make all 5 changes then commit once.

---

### Task 7: Location feux section — dark to light

**Files:**
- Modify: `app/page.tsx` — section 5 (lines 134–166)

The current section (lines 134–166):
```tsx
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
```

- [ ] **Step 1: Replace the entire section**

Replace the block above with:
```tsx
      {/* 5. Location feux promo */}
      <section className="section-pad bg-bg-light" aria-labelledby="feux-title">
        <div className="container">
          <FeatureBlock
            image={{ src: '/images/feux-radar-2.jpg', alt: 'Feux de chantier avec radar pédagogique sur chantier routier à Lausanne' }}
            reverse
          >
            <SectionHeader
              title={<>Location de <span className="text-red">feux de chantier</span></>}
            />
            <ul className="flex flex-col gap-3 mb-6">
              {[
                "Nous prenons en charge l'installation, la maintenance et le retrait de vos feux de chantier.",
                'Feux avec radar pédagogique intégré',
                'Feu à décompte de temps',
                'Couverture dans tout le Canton de Vaud et en Suisse romande',
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
```

Key diffs from old → new:
- `className="relative py-20 bg-[#0d1525] overflow-hidden"` → `className="section-pad bg-bg-light"`
- Removed the two `<div className="absolute ...">` lines
- `<div className="container relative z-10">` → `<div className="container">`
- Removed `dark` prop from `<FeatureBlock>`
- Removed `white` prop from `<SectionHeader>`
- `text-white/80` → `text-gray-dark` on `<li>`
- Ghost button: `border-white/40 text-white hover:border-white` → `border-navy text-navy hover:bg-navy hover:text-white`

---

### Task 8: Triopan section — image, paragraph, bullets

**Files:**
- Modify: `app/page.tsx` — section 6 (lines 168–189)

- [ ] **Step 1: Change image src and alt**

Change:
```tsx
            image={{ src: '/images/triopan-bg.jpg', alt: 'Panneaux Triopan — signalisation pliante suisse, disponibles chez Robalex Signalisation' }}
```
to:
```tsx
            image={{ src: '/images/triopan-protection-civil.jpg', alt: 'Panneaux pliants Triopan sur mesure — Robalex Signalisation représentant officiel Suisse romande' }}
```

- [ ] **Step 2: Replace paragraph text**

Change:
```tsx
            <p className="text-gray-dark mb-3">Robalex Signalisation est le représentant officiel de <strong>Triopan SA</strong> pour toute la Suisse romande — accès direct à toute la gamme de signaux pliants et dispositifs innovants.</p>
```
to:
```tsx
            <p className="text-gray-dark mb-3">Robalex Signalisation est le représentant officiel de <strong>Triopan SA</strong> pour toute la Suisse romande. Les signaux pliants Triopan sont fabriqués sur mesure selon vos symboles et textes — disponibles dans tous les formats et configurations.</p>
```

- [ ] **Step 3: Replace bullets array**

Change:
```tsx
              {['Gamme complète de panneaux Triopan en stock','Livraison rapide dans toute la Suisse romande','Conformes aux normes OFROU/VSS','Conseils personnalisés'].map(item => (
```
to:
```tsx
              {['Signaux pliants fabriqués sur mesure','Livraison dans toute la Suisse romande','Conformes aux normes OFROU/VSS','Entièrement personnalisables (symboles, textes, dimensions)','Conseils personnalisés'].map(item => (
```

---

### Task 9: Featured products — replace 6-card array

**Files:**
- Modify: `app/page.tsx` — section 7 (lines 196–202)

- [ ] **Step 1: Replace the products array**

The current array (lines 196–202):
```tsx
            {[
              { img: '/images/cone-signalisation.webp',    pos: 'object-center', cat: 'Signalisation temporaire',  name: 'Cônes de signalisation',        desc: 'Tous types de cônes pour délimiter et sécuriser vos zones de travaux ou chantiers.' },
              { img: '/images/barriere-vauban.png',         pos: 'object-center', cat: 'Délimitation',              name: 'Barrières Vauban & extensibles', desc: 'Barrières légères et robustes pour sécuriser vos périmètres.' },
              { img: '/images/panneaux-signalisation.jpg',  pos: 'object-center', cat: 'Signalisation permanente',  name: 'Panneaux routiers',             desc: 'Panneaux OSR en aluminium rétroréfléchissant R1, R2, R3.' },
              { img: '/images/installation-miroir.jpg',     pos: 'object-top',    cat: 'Sécurité',                  name: 'Miroirs de sécurité',           desc: 'Miroirs convexes pour carrefours, parkings et zones à faible visibilité.' },
              { img: '/images/feux-radar-4.jpg',            pos: 'object-center', cat: 'Location feux',             name: 'Feux de chantier',              desc: 'Location clé en main avec radar pédagogique ou décompte de temps.' },
              { img: '/images/travaux-ralentisseurs.jpg',   pos: 'object-center', cat: 'Sécurité routière',         name: 'Radars & ralentisseurs',        desc: 'Radars pédagogiques et ralentisseurs pour réduire la vitesse en zone sensible.' },
            ].map(p => (
```

Replace with:
```tsx
            {[
              { img: '/images/cone-signalisation.webp',                      pos: 'object-center', cat: 'Signalisation temporaire', name: 'Cônes de signalisation',   desc: 'Non-réfléchissants, réfléchissants R1 ou R2, ou entièrement réfléchissants — lestés ou non. Disponibles en plusieurs hauteurs pour toutes vos situations.' },
              { img: '/images/barriere-vauban.png',                           pos: 'object-center', cat: 'Délimitation',             name: 'Barrières Vauban',          desc: 'Barrières robustes en acier galvanisé pour fermer un accès ou sécuriser un périmètre temporairement. Stables, modulables et faciles à déplacer.' },
              { img: '/images/passage-pieton.jpg',                            pos: 'object-center', cat: 'Signalisation permanente', name: 'Panneaux routiers OSR',     desc: 'Signaux OSR en aluminium rétroréfléchissant. Tous niveaux de réflexion disponibles (R1, R2, R3). Fabrication conforme aux normes suisses.' },
              { img: '/images/installation-miroir.jpg',                       pos: 'object-center', cat: 'Sécurité',                 name: 'Miroirs de signalisation',  desc: "Miroirs convexes ronds ou rectangulaires pour carrefours, sorties de parkings et zones à faible visibilité. Option anti-givre disponible." },
              { img: '/images/fireball.png',                                  pos: 'object-center', cat: 'Signalisation temporaire', name: 'Lampes flash Fireball',     desc: "Lampes clignotantes compactes haute performance, conçues pour une visibilité maximale en journée. Utilisées par les services d'urgence, communes et forces de l'ordre." },
              { img: '/images/Liste produit/Radar-pedagogique.jpg',           pos: 'object-center', cat: 'Sécurité routière',        name: 'Radar pédagogique',         desc: "Affichage de la vitesse en temps réel pour sensibiliser les conducteurs dans les zones à risque — zones 30, abords d'écoles, zones résidentielles." },
            ].map(p => (
```

> **Note on image paths:** `fireball.png` should exist at `/images/fireball.png`. If it doesn't, fall back to `/images/Liste produit/Fireball.png`. The radar image uses the existing "Liste produit" path which is confirmed present.

---

### Task 10: Trust section — move to position 4 + update subtitle

**Files:**
- Modify: `app/page.tsx` — cut section 8 (lines 224–236), paste before section 4, update subtitle

The trust section currently lives at lines 224–236:
```tsx
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
```

- [ ] **Step 1: Remove section 8 from its current location**

Delete the entire block above (lines 224–236 inclusive, from `{/* 8. Ils nous font confiance */}` through the closing `</section>`).

- [ ] **Step 2: Insert the trust section before section 4 (Votre spécialiste)**

Find the comment `{/* 4. Votre spécialiste */}` (currently at line 101) and insert the following block immediately before it:

```tsx
      {/* 4. Ils nous font confiance */}
      <section className="section-pad bg-bg-light" aria-labelledby="clients-title">
        <div className="container">
          <SectionHeader badge="Références" title={<>Ils nous font <span className="text-red">confiance</span></>} subtitle="Communes, services d'urgence, Police et entreprises de construction." centered />
          <div className="flex flex-wrap justify-center items-center gap-8">
            {clients.map(c => (
              <a key={c.alt} href={c.href} target="_blank" rel="noopener noreferrer" aria-label={c.alt} className="opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 p-2">
                <Image src={c.src} alt={c.alt} width={120} height={60} className="object-contain max-h-14" />
              </a>
            ))}
          </div>
        </div>
      </section>

```

Key change in the pasted version: subtitle `"forces de l'ordre"` → `"Police"`.

- [ ] **Step 3: Renumber following section comments (optional but recommended)**

Update the JSX comments for the sections that shifted:
- `{/* 4. Votre spécialiste */}` → `{/* 5. Votre spécialiste */}`
- `{/* 5. Location feux promo */}` → `{/* 6. Location feux promo */}` (already edited in Task 7)
- `{/* 6. Triopan feature */}` → `{/* 7. Triopan feature */}`
- `{/* 7. Produits phares */}` → `{/* 8. Produits phares */}`
- `{/* 9. Partenaires */}` → `{/* 9. Partenaires */}` (stays 9)
- `{/* 10. CTA */}` → `{/* 10. CTA */}` (stays 10)

---

### Task 11: Partners section — add `items-center`

**Files:**
- Modify: `app/page.tsx` — section 9 (partners), line 242

- [ ] **Step 1: Add items-center to partner logo flex container**

Change:
```tsx
          <div className="flex flex-wrap justify-center gap-8">
```
to:
```tsx
          <div className="flex flex-wrap justify-center items-center gap-8">
```

> Be precise: there are other `flex flex-wrap justify-center` divs in this file. Make sure you edit the one inside the `{/* Partenaires */}` section.

---

### Task 12: Commit Chunk 2 (homepage)

- [ ] **Step 1: Stage and commit**

```bash
git add app/page.tsx
git commit -m "feat: update homepage — light feux section, triopan copy, product cards, move trust section"
```

---

## Chunk 3: À propos + Nos produits + Nos services

Files touched:
- Modify: `app/a-propos/page.tsx` (3 changes)
- Modify: `app/nos-produits/page.tsx` (5 changes)
- Modify: `app/nos-services/page.tsx` (3 changes)

---

### Task 13: À propos — hero subtitle

**Files:**
- Modify: `app/a-propos/page.tsx` line 27

- [ ] **Step 1: Update subtitle prop**

Change:
```tsx
        subtitle="Depuis 2004, nous assurons la fourniture, la pose et la sécurisation des chantiers en Suisse romande — conformes aux normes OFROU/VSS."
```
to:
```tsx
        subtitle="Depuis 2004, votre partenaire de confiance pour la signalisation routière en Suisse romande."
```

---

### Task 14: À propos — client list in histoire paragraph

**Files:**
- Modify: `app/a-propos/page.tsx` line 39

- [ ] **Step 1: Update client list in paragraph**

Change (within the second `<p>` tag):
```tsx
            <p className="text-gray-dark mb-4">Notre approche repose sur deux piliers : des <strong>produits de haute qualité</strong> et un <strong>service client irréprochable</strong>. Nous intervenons pour les services d'autoroutes, les communes, la police, les corps de pompiers, les entreprises de génie civil et les régies immobilières.</p>
```
to:
```tsx
            <p className="text-gray-dark mb-4">Notre approche repose sur deux piliers : des <strong>produits de haute qualité</strong> et un <strong>service client irréprochable</strong>. Nous intervenons pour les services d'autoroutes, les communes, la police, les corps de pompiers, les entreprises de génie civil, les géomètres et les clients privés.</p>
```

---

### Task 15: À propos — values grid + 4th card + TagIcon

**Files:**
- Modify: `app/a-propos/page.tsx` lines 49–75, append TagIcon function at bottom

- [ ] **Step 1: Change grid className from 3-col to 2/4-col**

Change (line 49):
```tsx
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
```
to:
```tsx
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
```

- [ ] **Step 2: Replace the values array (update 3 descriptions + add 4th card)**

Replace the entire array passed to `.map()` inside the grid (currently 3 items, lines 50–65):
```tsx
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
```
with:
```tsx
            {[
              {
                icon: <QualityIcon />,
                title: 'Qualité',
                desc: 'Produits de haute qualité, sélectionnés pour leur durabilité et conformes aux normes suisses.',
              },
              {
                icon: <ReactivityIcon />,
                title: 'Réactivité',
                desc: 'Intervention rapide pour vos besoins urgents. Devis et réponse dans les meilleurs délais.',
              },
              {
                icon: <AdviceIcon />,
                title: 'Conseils personnalisés',
                desc: "Accompagnement personnalisé basé sur notre expérience terrain. De la conception à la pose.",
              },
              {
                icon: <TagIcon />,
                title: 'Prix compétitifs',
                desc: "Tarifs transparents et compétitifs, sans frais cachés. Rapport qualité-prix au cœur de notre offre.",
              },
            ].map(v => (
```

- [ ] **Step 3: Add TagIcon function at the bottom of the file**

Append after the closing `}` of the `AdviceIcon` function (after line 127):

```tsx

function TagIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
    </svg>
  )
}
```

---

### Task 16: Nos produits — hero subtitle

**Files:**
- Modify: `app/nos-produits/page.tsx` line 70

- [ ] **Step 1: Simplify subtitle**

Change:
```tsx
        subtitle="Fourniture de signalisation routière conforme aux normes OFROU/VSS — de la signalisation temporaire de chantier aux signaux OSR permanents."
```
to:
```tsx
        subtitle="Fourniture de matériel de signalisation routière conforme aux normes suisses."
```

---

### Task 17: Nos produits — Fireball desc + ruban image

**Files:**
- Modify: `app/nos-produits/page.tsx` lines 21–24 (`tempProducts`)

- [ ] **Step 1: Update Fireball description (line 21)**

Change:
```tsx
  { img: '/images/Liste produit/Fireball.png',             name: 'Lampes flash Fireball',          desc: "Très compactes, particulièrement appréciées des services d'urgence." },
```
to:
```tsx
  { img: '/images/Liste produit/Fireball.png',             name: 'Lampes flash Fireball',          desc: "Lampes clignotantes compactes haute performance, conçues pour une visibilité maximale en journée. Très appréciées des services d'urgence, communes et forces de l'ordre." },
```

- [ ] **Step 2: Change ruban image (line 24)**

Change:
```tsx
  { img: '/images/Liste produit/Ruban de barrage 500m + texte.png', name: 'Ruban de barrage rouge-blanc', desc: "Personnalisable : POLICE, POLICE ZONE INTERDITE, nom d'entreprise…" },
```
to:
```tsx
  { img: '/images/ruban-barrage-personnalise.jpg', name: 'Ruban de barrage rouge-blanc', desc: "Personnalisable : POLICE, POLICE ZONE INTERDITE, nom d'entreprise…" },
```

---

### Task 18: Nos produits — Permanente section rename

**Files:**
- Modify: `app/nos-produits/page.tsx` lines 94–98

- [ ] **Step 1: Update the SectionHeader for the permanente section**

Change:
```tsx
          <SectionHeader
            badge="Signalisation permanente"
            title={<>Signaux OSR et dispositifs <span className="text-red">permanents</span></>}
            subtitle="Signaux OSR conformes aux prescriptions suisses, disponibles en rétro-réflexion R1, R2 ou R3."
          />
```
to:
```tsx
          <SectionHeader
            badge="Signaux OSR"
            title={<>Signaux OSR et <span className="text-red">panneaux permanents</span></>}
            subtitle="Zones 30, passages piétons, panneaux d'interdiction, indicateurs et chemins privés — disponibles en rétro-réflexion R1, R2 ou R3."
          />
```

---

### Task 19: Nos produits — Sécurité section rename + expand to 4 products

**Files:**
- Modify: `app/nos-produits/page.tsx` lines 33–37 (`securiteProducts`) and lines 106–109

- [ ] **Step 1: Replace securiteProducts array (lines 33–37)**

Change:
```tsx
const securiteProducts = [
  { img: '/images/Liste produit/Radar-pedagogique.jpg', name: 'Radar pédagogique',  desc: "Affichage de la vitesse en temps réel pour sensibiliser les conducteurs dans les zones à risque." },
  { img: '/images/Liste produit/Potelet.jpeg',           name: 'Potelets de guidage', desc: 'Délimitation de trottoirs, pistes cyclables et zones piétonnes. Disponibles en plusieurs modèles.' },
  { img: '/images/travaux-ralentisseurs.jpg',            name: 'Ralentisseurs',        desc: "Dos-d'âne et coussins berlinois pour réduire la vitesse en zone sensible, conformes aux normes suisses." },
]
```
to:
```tsx
const securiteProducts = [
  { img: '/images/Liste produit/Radar-pedagogique.jpg',        name: 'Radar pédagogique',    desc: "Affichage de la vitesse en temps réel pour sensibiliser les conducteurs dans les zones à risque." },
  { img: '/images/installation-potelet-mobilier-urbain.jpg',   name: 'Potelets de guidage',  desc: "Délimitation de trottoirs, pistes cyclables et zones piétonnes. Disponibles en plusieurs modèles et hauteurs." },
  { img: '/images/installation-barriere-urbain.jpg',           name: 'Barrières piétonnes',  desc: "Barrières de protection piétonnes pour chantiers, événements et zones à risque. Robustes et faciles à installer." },
  { img: '/images/travaux-ralentisseurs.jpg',                  name: 'Ralentisseurs',         desc: "Dos-d'âne et coussins berlinois pour réduire la vitesse en zone sensible, conformes aux normes suisses." },
]
```

- [ ] **Step 2: Update SectionHeader for the sécurité section (lines 106–109)**

Change:
```tsx
          <SectionHeader
            badge="Sécurité routière"
            title={<>Sécurité & <span className="text-red">mobilier urbain</span></>}
            subtitle="Équipements pour réduire la vitesse, guider et protéger les usagers vulnérables."
          />
```
to:
```tsx
          <SectionHeader
            badge="Mobilier urbain"
            title={<>Signalisation lumineuse & <span className="text-red">mobilier urbain</span></>}
            subtitle="Équipements pour réduire la vitesse, guider et protéger les usagers vulnérables."
          />
```

---

### Task 20: Nos services — hero image + temp service image + permanente points

**Files:**
- Modify: `app/nos-services/page.tsx` lines 80, 30–31, 44

- [ ] **Step 1: Change hero bgImage (line 80)**

Change:
```tsx
        bgImage="/images/travaux-installation.jpg"
```
to:
```tsx
        bgImage="/images/passage-pieton.jpg"
```

- [ ] **Step 2: Change Service 1 (Temporaire) image and alt (lines 30–31)**

Change:
```tsx
    img: '/images/signalisation-chantier-hd.jpg',
    alt: 'Signalisation temporaire de chantier posée par Robalex Signalisation à Lausanne',
```
to:
```tsx
    img: '/images/installation-signalisation-temporaire-location.jpg',
    alt: 'Installation de signalisation temporaire de chantier par Robalex Signalisation',
```

- [ ] **Step 3: Expand Service 2 (Permanente) points list (line 44)**

Change:
```tsx
    points: ['Zones 30 et 20','Passages piétons','Panneaux indicateurs','Mise à ban'],
```
to:
```tsx
    points: ['Zones 30 et 20','Passages piétons','Panneaux d\'interdiction','Panneaux indicateurs','Chemins privés','Mise à ban'],
```

---

### Task 21: Commit Chunk 3

- [ ] **Step 1: Stage and commit**

```bash
git add app/a-propos/page.tsx app/nos-produits/page.tsx app/nos-services/page.tsx
git commit -m "feat: update a-propos, nos-produits, nos-services copy and images"
```

---

## Chunk 4: Location feux + Catalogues + Build verify

Files touched:
- Modify: `app/location-feux-chantier/page.tsx` (2 changes)
- Modify: `app/nos-catalogues/page.tsx` (2 changes)

---

### Task 22: Location feux — hero background image

**Files:**
- Modify: `app/location-feux-chantier/page.tsx` line 40

- [ ] **Step 1: Update hero bgImage**

Change:
```tsx
        bgImage="/images/feux-radar-1.jpg"
```
to:
```tsx
        bgImage="/images/feux-decompte-2.jpg"
```

---

### Task 23: Location feux — add explanatory paragraph in process section

**Files:**
- Modify: `app/location-feux-chantier/page.tsx` — process section (around lines 88–94)

The current process section:
```tsx
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
```

- [ ] **Step 1: Insert paragraph between SectionHeader and StepProcess**

Change:
```tsx
          <SectionHeader
            badge="Notre processus"
            title={<>Comment ça <span className="text-red">marche</span> ?</>}
            centered
          />
          <StepProcess steps={steps} />
```
to:
```tsx
          <SectionHeader
            badge="Notre processus"
            title={<>Comment ça <span className="text-red">marche</span> ?</>}
            centered
          />
          <p className="text-gray-dark text-sm text-center max-w-2xl mx-auto mb-8">
            Nous gérons l'intégralité de la location : installation sur site, maintenance préventive, remplacement des batteries et dépannage en cas de panne. Vous n'avez rien à gérer — nous nous occupons de tout.
          </p>
          <StepProcess steps={steps} />
```

---

### Task 24: Catalogues — SectionHeader subtitle + third catalogue card

**Files:**
- Modify: `app/nos-catalogues/page.tsx` lines 32–36, 37, 107

- [ ] **Step 1: Add subtitle to SectionHeader**

Change:
```tsx
          <SectionHeader
            badge="Nos publications"
            title={<>Deux catalogues à <span className="text-red">votre disposition</span></>}
            centered
          />
```
to:
```tsx
          <SectionHeader
            badge="Nos publications"
            title={<>Nos catalogues à <span className="text-red">votre disposition</span></>}
            subtitle="Consultez ou téléchargez nos catalogues pour découvrir notre gamme complète."
            centered
          />
```

- [ ] **Step 2: Add third catalogue card below the 2-column grid**

After the closing `</div>` of the `grid` div (line 107, i.e., `</div>` closing `<div className="grid cols-1 md:grid-cols-2 ...">`), add:

```tsx
          <div className="max-w-sm mx-auto mt-10">
            <article className="bg-white border border-gray-light rounded-xl overflow-hidden shadow-card hover:shadow-card-lg transition-shadow">
              <div className="aspect-[3/4] overflow-hidden bg-bg-light">
                <Image
                  src="/images/catalogue-robalex-cover.png"
                  alt="Couverture liste des signaux routiers OSR — Robalex Signalisation"
                  width={400}
                  height={533}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block bg-navy text-white text-xs font-head font-700 uppercase tracking-wide px-3 py-1 rounded mb-3">Référence OSR</span>
                <h2 className="font-head font-800 text-xl text-dark mb-3">Liste des signaux routiers OSR</h2>
                <p className="text-gray-dark text-sm leading-relaxed mb-4">
                  Répertoire complet de tous les signaux routiers OSR disponibles à la commande chez Robalex Signalisation — panneaux d'interdiction, obligation, danger, indication et localisation.
                </p>
                <ul className="flex flex-col gap-1.5 mb-5 text-sm text-gray-dark">
                  {['Tous les symboles OSR', 'Tous formats disponibles', 'Sur devis'].map(i => (
                    <li key={i} className="flex items-center gap-2"><span className="text-red font-bold">✓</span>{i}</li>
                  ))}
                </ul>
                <a
                  href="/catalogues/Robalex_Signaux_Routiers.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Télécharger la liste des signaux routiers OSR (s'ouvre dans un nouvel onglet)"
                  className="w-full block text-center bg-navy hover:bg-navy-dark text-white font-head font-700 text-sm uppercase tracking-wide px-6 py-3 rounded transition-colors"
                >
                  Télécharger la liste
                </a>
              </div>
            </article>
          </div>
```

---

### Task 25: Build verification

- [ ] **Step 1: Run build**

```bash
cd "C:\Users\Robin\Desktop\robalex-next" && npm run build
```

Expected: Build completes with `✓ Compiled successfully` and no TypeScript/ESLint errors. If there are errors, fix them before committing.

---

### Task 26: Commit Chunk 4

- [ ] **Step 1: Stage and commit**

```bash
git add app/location-feux-chantier/page.tsx app/nos-catalogues/page.tsx
git commit -m "feat: update location-feux and catalogues pages; add OSR PDF catalogue card"
```

---

### Task 27: Final git push

- [ ] **Step 1: Push all commits**

```bash
git push
```

Expected: All 4 feature commits pushed. Vercel will auto-deploy.
