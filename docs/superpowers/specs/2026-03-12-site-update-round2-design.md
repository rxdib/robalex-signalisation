# Robalex Signalisation — Site Update Round 2

Date: 2026-03-12
Status: Approved by user
Approach: Page-by-page (Approach A)

## Overview

Comprehensive update across 7 pages + 2 global components + image assets. Changes are content, copy, image swaps, and minor layout adjustments. No new components required.

---

## Section 0 — New Assets & Global Fixes

### Images to copy
Source: `C:\Users\Robin\Desktop\site robalex\images\`
Destination: `C:\Users\Robin\Desktop\robalex-next\public\images\`

| Source filename | Destination filename |
|---|---|
| `Feux-radar-installation.jpg` | `feux-radar-installation.jpg` |
| `Installation-signalisation-temporaire-location.jpg` | `installation-signalisation-temporaire-location.jpg` |
| `Installation-potelet-mobilier-urbain.jpg` | `installation-potelet-mobilier-urbain.jpg` |
| `Installation-barriere-urbain.jpg` | `installation-barriere-urbain.jpg` |
| `ruban-barrage-personnalisé.jpg` | `ruban-barrage-personnalise.jpg` |

### Catalogue PDF to copy
Source: `C:\Users\Robin\Desktop\site robalex\catalogues\Robalex_Signaux_Routiers.pdf`
Destination: `C:\Users\Robin\Desktop\robalex-next\public\catalogues\Robalex_Signaux_Routiers.pdf`

Note: verify `public/catalogues/` directory exists; create if needed.

### Address correction (3 files)
Old: `Chemin de Grandchamp 6`
New: `Chemin du Grand Champ 6`

Files:
- `app/schema.ts` — `streetAddress` field
- `app/contact/page.tsx` — address display in dl
- `components/Footer.tsx` — `<address>` block

### Footer heading
- `components/Footer.tsx`: `Navigation` → `Menu` (the `<h4>` heading for the nav links column)

---

## Section 1 — Homepage (`app/page.tsx`)

### Location feux section (section 5, currently dark navy with bg image)
- Remove dark styling: `className="relative py-20 bg-[#0d1525] overflow-hidden"` and its absolute background image div + top red bar
- Replace with standard `className="section-pad bg-bg-light"`
- The `FeatureBlock` inside keeps its content unchanged
- Feature image inside FeatureBlock: change from `feux-radar-2.jpg` to `feux-radar-2.jpg` (keep as is — already the best image per user)
- Remove `dark` prop from FeatureBlock (so text renders in dark mode, not white)
- Update text colours accordingly: list item text `text-white/80` → `text-gray-dark`, bullet `text-red font-bold` stays

### Triopan section (section 6)
- Image: change FeatureBlock image from `triopan-bg.jpg` → `triopan-protection-civil.jpg`
- `imageBadge`: keep "Représentant officiel Triopan"
- Paragraph: replace with:
  > "Robalex Signalisation est le représentant officiel de **Triopan SA** pour toute la Suisse romande. Les signaux pliants Triopan sont fabriqués sur mesure selon vos symboles et textes — disponibles dans tous les formats et configurations."
- Bullets (replace existing 4):
  - Signaux pliants fabriqués sur mesure
  - Livraison dans toute la Suisse romande
  - Conformes aux normes OFROU/VSS
  - Entièrement personnalisables (symboles, textes, dimensions)
  - Conseils personnalisés

### Featured products (section 7) — 6 card changes

**Card 1 — Cônes de signalisation** (keep image `cone-signalisation.webp`):
- desc: "Non-réfléchissants, réfléchissants R1 ou R2, ou entièrement réfléchissants — lestés ou non. Disponibles en plusieurs hauteurs pour toutes vos situations."

**Card 2 — Barrières Vauban** (image: `barriere-vauban.png`, keep):
- name: "Barrières Vauban"
- desc: "Barrières robustes en acier galvanisé pour fermer un accès ou sécuriser un périmètre temporairement. Stables, modulables et faciles à déplacer."
- (Expandable barriers are no longer in featured products — removed or demoted to the full product list only)

**Card 3 — Panneaux routiers OSR**:
- name: "Panneaux routiers OSR"
- image: `passage-pieton.jpg`
- pos: `object-center`
- desc: "Signaux OSR en aluminium rétroréfléchissant. Tous niveaux de réflexion disponibles (R1, R2, R3). Fabrication conforme aux normes suisses."

**Card 4 — Miroirs de signalisation** (rename from "Miroirs de sécurité"):
- name: "Miroirs de signalisation"
- image: keep `installation-miroir.jpg`, change pos from `object-top` → `object-center` to reduce zoom effect
- desc: "Miroirs convexes ronds ou rectangulaires pour carrefours, sorties de parkings et zones à faible visibilité. Option anti-givre disponible."

**Card 5 — Lampes flash Fireball** (replaces "Feux de chantier"):
- cat: "Signalisation temporaire"
- name: "Lampes flash Fireball"
- image: `fireball.png` (already in public)
- pos: `object-center`
- desc: "Lampes clignotantes compactes haute performance, conçues pour une visibilité maximale en journée. Utilisées par les services d'urgence, communes et forces de l'ordre."

**Card 6 — Radar pédagogique**:
- name: "Radar pédagogique"
- image: `radar-pedagogique.jpg` (already in public — from Liste produit)
- pos: `object-center`
- desc: "Affichage de la vitesse en temps réel pour sensibiliser les conducteurs dans les zones à risque — zones 30, abords d'écoles, zones résidentielles."

### Trust section ("Ils nous font confiance") — move up
- Currently section 8 (second to last). Move to section 4 (after the stats bar and expertises, before "Votre spécialiste").
- Order becomes: Hero → Stats → Expertises → **Clients** → Votre spécialiste → Location feux → Triopan → Produits phares → Partenaires → CTA
- Change "forces de l'ordre" → "Police" in the subtitle

### Partners section — align logos
- Add `items-center` to the flex container so Triopan and Nissen logos are vertically centred regardless of their natural heights

---

## Section 2 — À propos (`app/a-propos/page.tsx`)

### Hero subtitle
- Remove "conformes aux normes OFROU/VSS" suffix
- New: `"Depuis 2004, votre partenaire de confiance pour la signalisation routière en Suisse romande."`

### Histoire paragraph — client list
Current: "services d'autoroutes, communes, police, corps de pompiers, entreprises de génie civil et régies immobilières"
New: "services d'autoroutes, communes, police, corps de pompiers, entreprises de génie civil, géomètres et clients privés"

### Values — 4 cards (2×2 grid)
Change grid from `sm:grid-cols-3` to `sm:grid-cols-2 lg:grid-cols-4`

Cards:
1. **Qualité** (QualityIcon — shield check) — "Produits de haute qualité, sélectionnés pour leur durabilité et conformes aux normes suisses."
2. **Réactivité** (ReactivityIcon — bolt) — "Intervention rapide pour vos besoins urgents. Devis et réponse dans les meilleurs délais."
3. **Conseils personnalisés** (AdviceIcon — chat) — "Accompagnement personnalisé basé sur notre expérience terrain. De la conception à la pose."
4. **Prix compétitifs** (TagIcon — price tag) — "Tarifs transparents et compétitifs, sans frais cachés. Rapport qualité-prix au cœur de notre offre."

Note: TagIcon SVG function already exists in `app/location-feux-chantier/page.tsx` — copy the same SVG path to a-propos.

---

## Section 3 — Nos produits (`app/nos-produits/page.tsx`)

### Hero subtitle — simplify
New: `"Fourniture de matériel de signalisation routière conforme aux normes suisses."`

### Temporaire — Fireball description update
- name: keep "Lampes flash Fireball"
- desc: "Lampes clignotantes compactes haute performance, conçues pour une visibilité maximale en journée. Très appréciées des services d'urgence, communes et forces de l'ordre."

### Temporaire — Ruban de barrage image
- Change from `ruban-barrage.png` to `ruban-barrage-personnalise.jpg`

### Permanente section → rename to "Signaux OSR"
- Section badge: `"Signaux OSR"`
- Section title: `<>Signaux OSR et <span className="text-red">panneaux permanents</span></>`
- Section subtitle: `"Zones 30, passages piétons, panneaux d'interdiction, indicateurs et chemins privés — disponibles en rétro-réflexion R1, R2 ou R3."`

### Sécurité & mobilier urbain → rename + expand
- Section badge: `"Mobilier urbain"`
- Section title: `<>Signalisation lumineuse & <span className="text-red">mobilier urbain</span></>`
- Section subtitle: keep "Équipements pour réduire la vitesse, guider et protéger les usagers vulnérables."

Products (replace existing 3 with 4):
1. **Radar pédagogique** — keep, same image and desc
2. **Potelets de guidage** — image: `installation-potelet-mobilier-urbain.jpg`, desc: "Délimitation de trottoirs, pistes cyclables et zones piétonnes. Disponibles en plusieurs modèles et hauteurs."
3. **Barrières piétonnes** — image: `installation-barriere-urbain.jpg`, desc: "Barrières de protection piétonnes pour chantiers, événements et zones à risque. Robustes et faciles à installer."
4. **Ralentisseurs** — keep, same image and desc

---

## Section 4 — Nos services (`app/nos-services/page.tsx`)

### Hero background image
- Change from `travaux-installation.jpg` → `passage-pieton.jpg`

### Service 1 — Temporaire: update image
- Change from `signalisation-chantier-hd.jpg` → `installation-signalisation-temporaire-location.jpg`
- Update alt text accordingly

### Service 2 — Permanente: expand points list
- Old: `['Zones 30 et 20','Passages piétons','Panneaux indicateurs','Mise à ban']`
- New: `['Zones 30 et 20','Passages piétons','Panneaux d\'interdiction','Panneaux indicateurs','Chemins privés','Mise à ban']`

---

## Section 5 — Location feux (`app/location-feux-chantier/page.tsx`)

### Hero background image
- Change from `feux-radar-1.jpg` → `feux-decompte-2.jpg`

### Process section — add explanatory paragraph
Below `<SectionHeader>` and above `<StepProcess>`, add:
```
<p className="text-gray-dark text-sm text-center max-w-2xl mx-auto mb-8">
  Nous gérons l'intégralité de la location : installation sur site, maintenance préventive, remplacement des batteries et dépannage en cas de panne. Vous n'avez rien à gérer — nous nous occupons de tout.
</p>
```

---

## Section 6 — Catalogues (`app/nos-catalogues/page.tsx`)

### Intro simplification
- Change `SectionHeader` subtitle from current verbose text to: `"Consultez ou téléchargez nos catalogues pour découvrir notre gamme complète."`

### Third catalogue card
Add below the existing 2-column grid, a single centered card:

- Badge: `"Référence OSR"` (navy badge)
- Title: `"Liste des signaux routiers OSR"`
- Desc: `"Répertoire complet de tous les signaux routiers OSR disponibles à la commande chez Robalex Signalisation — panneaux d'interdiction, obligation, danger, indication et localisation."`
- Bullets: Tous les symboles OSR · Tous formats disponibles · Sur devis
- Image: `catalogue-cover.png` (reuse existing cover image)
- Download link: `/catalogues/Robalex_Signaux_Routiers.pdf`
- Button colour: `bg-navy hover:bg-navy-dark`

Layout: `max-w-sm mx-auto mt-10` to centre the single card below the 2-column grid.

---

## Section 7 — Contact (`app/contact/page.tsx`)

### Google Maps embed
Update iframe `src` to properly show the corrected address. Use a direct Google Maps embed URL for the business:
```
https://maps.google.com/maps?q=Chemin+du+Grand+Champ+6,+1018+Lausanne&output=embed
```
Also update `title` attribute to reflect new address spelling.

---

## Out of Scope
- New pages
- New nav items
- Database/backend changes
- SEO metadata rewrites (beyond what's noted above)
- Mobile-specific layout changes beyond what's already responsive
