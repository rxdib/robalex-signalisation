# Robalex Signalisation - Site-Wide Normalization Design

Date: 2026-03-13
Status: Drafted from approved direction

## Goal

Normalize the entire website so it feels like one coherent product: same visual rhythm, same component behavior, same copy standards, same interaction patterns, and the same level of polish across marketing, contact, and legal pages.

## Context

The site already has a strong base:

- clear red/navy brand colors
- consistent typography direction
- reusable sections such as `Hero`, `SectionHeader`, `FeatureBlock`, `CtaBand`, `Nav`, and `Footer`

The current issues come from drift between pages rather than a lack of design system:

- homepage sections were iterated separately and do not always match inner-page rhythm
- some pages use stronger framing, while others rely on clean full-width alternation
- labels and recurring copy vary between nav, footer, and page bodies
- utility pages (`Contact`, `Mentions légales`, `Politique de confidentialité`) are functional but less integrated into the same visual system
- some image treatments and card densities feel uneven between pages

The normalization pass should make the site feel intentional and finished without changing the brand direction or introducing a new visual language.

## Non-Goals

- no new pages
- no backend or CMS work
- no major SEO rewrite
- no redesign away from the existing red/navy identity
- no dramatic layout experiment that would make one page feel disconnected from the rest

## Design Principles

### 1. Shared Visual Grammar

All pages should use the same core structure:

- hero at the top for primary marketing pages
- `section-pad` spacing rhythm
- alternating `white` and `bg-bg-light` sections
- a dark emphasis section only when it carries a clear editorial purpose
- strong `SectionHeader` usage rather than ad-hoc title blocks
- a consistent red CTA band and footer ending

### 2. Consistent Density

The site should feel balanced:

- no empty-looking large blocks next to dense text blocks
- no pages that look over-framed while others feel plain
- similar card density and spacing on product, catalogue, service, and reference sections

### 3. Copy Discipline

Recurring labels, terminology, and CTA language should be normalized:

- same naming for pages and sections across nav, footer, hero badges, and body content
- same tone in subtitles and CTA copy
- same capitalization and punctuation patterns
- consistent product terminology, especially around feux, signalisation, sécurité routière, and references

### 4. Functional Consistency

Interactive elements should behave consistently:

- partner and reference logos linked when they represent external entities
- buttons share hierarchy and hover states
- focus states remain visible and usable
- cards and links should not imply interaction unless they are actually clickable

## Shared System Changes

### `components/Hero.tsx`

Keep `Hero` as the shared page-entry component, but ensure it supports page-specific framing when needed:

- preserve the current overlay, spacing, and CTA structure
- keep `bgPosition` support for difficult hero images
- keep optional image flipping only where strictly needed
- avoid page-specific hero hacks outside the `Hero` API

### `components/SectionHeader.tsx`

Use `SectionHeader` as the standard section intro everywhere possible:

- shared badge
- shared red divider
- shared title sizing
- shared subtitle width and tone

No ad-hoc heading blocks should remain on key marketing or utility pages if `SectionHeader` can handle the section.

### `components/Nav.tsx`

Normalize navigation language and polish:

- align labels with page naming conventions used elsewhere
- ensure mobile and desktop labels are the same unless there is a strong reason not to
- keep the CTA stable and prominent

Potential normalization target:

- `Location feux` in nav is shorter than the full footer/page title wording. Decide on one stable label pattern and use it consistently.

### `components/Footer.tsx`

Footer should reflect the final naming system and product taxonomy:

- align page labels with nav
- align product labels with current page terminology
- ensure the footer summary reflects the current positioning: signalisation and sécurité routière

## Page-by-Page Design

### Homepage

The homepage should be the strongest expression of the shared system, not a special-case design.

Rules:

- maintain the approved section order
- keep one dark anchor section (`Votre spécialiste`)
- make the rest follow the same alternating full-width rhythm as the inner pages
- keep feature sections using `FeatureBlock`, not standalone custom wrappers
- maintain the current improved image framing for product cards where needed

Adjustments:

- normalize spacing so lower sections do not collapse visually
- ensure `Produits phares` and `Partenaires` feel equally finished
- keep copy aligned with the approved terminology changes already made

### À propos

This page is already one of the strongest references and should act as a model for the rest of the site.

Only refine if necessary:

- align any remaining terminology drift
- keep its current alternation and hierarchy

### Nos produits

This page already matches the site rhythm fairly well.

Normalization targets:

- tighten subtitles and descriptions where wording drift remains
- ensure product card density is visually even across sections
- align metadata and visible copy terminology with the rest of the site

### Nos services

This page needs the most visual normalization among the inner pages.

Observed issue:

- some feature image blocks appear visually empty or weak in the live rendering compared with text density

Normalization targets:

- verify image rendering and sizing for each service row
- align text block density and vertical rhythm across rows
- normalize badge wording and subtitles

### Location feux de chantier

This page should remain visually close to the rest of the site while keeping its own service-specific content.

Normalization targets:

- preserve the corrected hero framing
- keep the feux terminology updates
- maintain the clickable reference logos
- ensure references, process, and advantages match the same spacing rhythm as other marketing pages

### Nos catalogues

Observed issue:

- card composition and spacing feel less resolved than products/services pages

Normalization targets:

- tighten card hierarchy
- align section intro spacing with other pages
- make the catalogue cards feel equally weighted and visually complete

### Contact

This page is functional but should feel more integrated into the same system.

Normalization targets:

- improve the relationship between contact info and form
- align section headers and spacing with the rest of the site
- ensure FAQ card treatment matches product/service card polish
- keep the page practical and fast to scan

### Mentions légales

This page should not look like an unstyled document floating outside the system.

Normalization targets:

- add the same page-entry structure as the rest of the site or a minimal branded legal-page pattern
- keep content readable with clear headings, spacing, and hierarchy
- make sure typography feels consistent with the rest of the site

### Politique de confidentialité

Same goals as `Mentions légales`:

- use the same legal-page shell
- maintain readable hierarchy and branded but restrained styling
- normalize text rhythm and section spacing

## Copy Normalization Rules

Apply these consistently across metadata, body copy, labels, and recurring sections:

- stable French terminology
- consistent accents and apostrophes where supported
- avoid wording drift such as alternate names for the same offer
- avoid unnecessary references to norms where they are not part of the approved positioning
- use the same CTA verbs repeatedly when the action is the same:
  - `Demander un devis`
  - `En savoir plus`
  - `Nous contacter`

## Image and Media Rules

- do not replace approved images unless there is a rendering failure
- prefer better crop, position, or fit before changing media
- keep product card image fixes that already improved readability
- make sure heroes privilege the strongest part of the photograph rather than center by default

## Accessibility and Interaction

- preserve visible keyboard focus on clickable elements
- external logo links should open safely in new tabs with `rel="noopener noreferrer"`
- keep contrast strong on navy sections and hero overlays
- do not add decorative interaction that implies a click unless the item is clickable

## Testing and Verification

Verification for this pass should include:

- `npm run lint`
- visual review of the live homepage and key inner pages after deployment
- direct spot checks of:
  - nav consistency
  - footer consistency
  - legal pages
  - contact form page layout
  - product/service/catalogue rhythm
  - reference/partner logo links

## Implementation Strategy

Implement in this order:

1. shared components and global copy conventions
2. nav and footer normalization
3. homepage alignment
4. inner marketing pages
5. contact and legal pages
6. full-site verification and final polish pass

This order reduces rework because page-level cleanup should happen only after the shared rules are stable.
