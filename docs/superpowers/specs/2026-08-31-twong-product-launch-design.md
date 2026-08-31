# TWONG Product Launch Design

## Objective

Present TWONG as a premium, in-stock Robalex product for temporary road-signage
and emergency needs. The primary conversion is a qualified contact for
availability, a quote, or an on-site demonstration. The website does not show a
price or offer online purchasing.

## Source of Truth

Commercial and technical claims must be supported by the supplied TWONG
presentation and brochure. The approved facts are:

- TWONG is a patented mobile fixing system for temporary road signage.
- It attaches equipment without tools or drilling, using a ratchet strap.
- It supports signs, warning equipment, privacy/protection screens, monitors,
  lighting equipment, and similar temporary installations.
- It is compatible with common safety barriers and profiles between 30 mm and
  330 mm thick.
- Robalex has stock in Lausanne and supplies Switzerland. No delivery time or
  stock quantity is promised.

Claims such as exact certifications, wind-force ratings, installation heights,
or quantified savings will only be shown if they can be read reliably in the
source material and attributed correctly.

## Information Architecture

### Navigation and internal links

- Add `TWONG` immediately after `Nos produits` in the site navigation and the
  products column in the footer.
- Create the dedicated route `/twong/`.
- Link the home-page showcase and relevant product/service context to `/twong/`.
- Include `/twong/` in the sitemap with a truthful page update date.

### Home-page showcase

Add one premium product section between the expertise area and existing featured
products. It contains:

- a field-installation image,
- the label `Système TWONG`,
- a concise headline about mobile, tool-free temporary-signage mounting,
- three factual benefit points: no tools, no drilling, stock in Lausanne,
- a single CTA to the dedicated TWONG page.

The component must follow the current red, charcoal, cream, and uppercase
typographic system. It should add visual prominence without displacing the
existing core service and product pathways.

### Dedicated page

The `/twong/` page follows existing product/service page patterns and contains:

1. Hero: product name, clear category statement, stock and delivery message,
   availability/demonstration CTA, and product image.
2. Explanation: the system and its tool-free, no-drilling attachment principle.
3. Three-step installation: position, secure with ratchet strap, install the
   equipment.
4. Applications: signage and warning equipment, privacy/protection screens,
   monitors, lighting equipment, and urgent intervention equipment.
5. Compatibility: safety barriers and compatible profile range.
6. Stock CTA: request availability, quote, or an on-site demonstration.

The page reuses existing components and responsive image patterns rather than
introducing a new design system.

## Media

Use the supplied photos only after copying them into `public/images/twong/` with
descriptive filenames. Generate responsive WebP derivatives using the existing
image-generation script, retain source images when useful, and add accurate alt
text. No third-party imagery is required.

## SEO and Structured Data

- Metadata title: `TWONG | Système de fixation mobile | Robalex Signalisation`.
- Description focuses on temporary signage, tool-free mounting, stock in
  Lausanne, and Swiss delivery.
- Add a `Product` JSON-LD entity without fabricated price, review, rating, or
  availability schema properties.
- Add a breadcrumb path and use canonical URLs through existing SEO helpers.

## Verification and Release

- Extend navigation and sitemap regression tests for `/twong/`.
- Add a content test covering source-supported claims and the absence of an
  invented price.
- Run the complete Node test suite, lint, production build, and Playwright
  navigation checks.
- Deploy the branch as a Vercel preview, review the page on desktop and mobile,
  then run smoke tests against that preview before merging to `main`.
- After production deployment, run HTTP smoke tests on the live home page,
  `/twong/`, sitemap, navigation, and metadata.
- The former production version is retained by Git commit `3037fc6` and its
  Vercel deployment history. Confirm that the commit is deployable before
  release; if a rollback is needed, redeploy it and repeat the live smoke tests.
