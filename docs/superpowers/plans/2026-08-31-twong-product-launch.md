# TWONG Product Launch Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Launch a source-supported TWONG product offer with a dedicated page, a premium home-page showcase, navigation links, structured data, and safe deployment verification.

**Architecture:** The new `/twong/` static App Router page will compose existing Robalex UI components and a small page-local data model. Source images are copied into a dedicated public folder and delivered as responsive WebP variants through the existing image pipeline. Existing navigation, footer, sitemap, SEO helpers, and regression tests are extended rather than replaced.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4, Sharp image generator, Node test runner, Playwright, Vercel.

---

## File Structure

- Create: `app/twong/page.tsx` - TWONG page metadata, page schema, content sections, and CTAs.
- Create: `public/images/twong/` - named product and in-use photographs sourced from the supplied TWONG material.
- Modify: `scripts/generate-display-images.mjs` - generate responsive derivatives for the chosen TWONG images.
- Modify: `app/imageVariants.ts` - expose the generated image variant descriptors.
- Modify: `app/page.tsx` - add one premium TWONG showcase between expertise and featured products.
- Modify: `components/Nav.tsx` - add the TWONG navigation route.
- Modify: `components/Footer.tsx` - add a product footer link.
- Modify: `app/sitemap.ts` - publish `/twong/` with its own truthful date.
- Modify: `app/schema.ts` - add a focused helper for non-priced Product JSON-LD if needed by the page.
- Modify: `tests/e2e/navigation.spec.ts` - assert the new route is accessible and has its expected heading.
- Create: `tests/twong-content.test.mjs` - assert key source-supported content, stock language, no price, and correct integration points.
- Modify: `tests/sitemap.test.mjs` - assert `/twong/` appears in the sitemap source.

## Chunk 1: Media and Regression Contract

### Task 1: Define the TWONG content contract

**Files:**
- Create: `tests/twong-content.test.mjs`
- Modify: `tests/sitemap.test.mjs`
- Modify: `tests/e2e/navigation.spec.ts`

- [ ] **Step 1: Write the failing content test**

Assert that the dedicated page source includes the controlled terms `Système de fixation mobile`, `sans outil`, `sans perçage`, `30 à 330 mm`, `En stock à Lausanne`, and a contact CTA. Assert that it does not include `CHF`, `prix`, a fabricated numerical stock quantity, or a delivery-time promise.

- [ ] **Step 2: Add failing integration assertions**

Extend the sitemap source test to require `'/twong/'`. Extend the Playwright navigation matrix with `/twong` and an expected `/TWONG/` heading. Add source assertions that `components/Nav.tsx`, `components/Footer.tsx`, and `app/page.tsx` link to `/twong`.

- [ ] **Step 3: Run the new tests to verify failure**

Run: `node --test tests/twong-content.test.mjs tests/sitemap.test.mjs`

Expected: FAIL because no TWONG route, integration links, or sitemap entry exist.

- [ ] **Step 4: Commit the regression contract**

```powershell
git add tests/twong-content.test.mjs tests/sitemap.test.mjs tests/e2e/navigation.spec.ts
git commit -m "test: définit le contrat de lancement TWONG"
```

### Task 2: Prepare optimized source media

**Files:**
- Create: `public/images/twong/twong-systeme-fixation-mobile.png`
- Create: `public/images/twong/twong-montage-sans-outil.jpg`
- Create: `public/images/twong/twong-signalisation-temporaire.jpg`
- Modify: `scripts/generate-display-images.mjs`
- Modify: `app/imageVariants.ts`

- [ ] **Step 1: Copy only the three selected supplied images**

Use the supplied isolated product image for the compatibility/product block, the field mounting image for the hero, and the road-sign image for the home showcase. Copy to descriptive ASCII filenames; do not embed brochure PDF pages or third-party media.

- [ ] **Step 2: Extend the existing Sharp generator**

Add each TWONG source image to the current display-image manifest with the same responsive width and WebP output conventions as the existing site images.

- [ ] **Step 3: Generate and verify derivatives**

Run: `npm run images:generate-display`

Expected: each configured TWONG image has responsive JPG/PNG fallback and WebP files under `public/images/display/` without modifying unrelated image sources.

- [ ] **Step 4: Export typed image descriptors**

Add TWONG image variants to `app/imageVariants.ts` so home and product page consume the same image metadata without duplicating source sets.

- [ ] **Step 5: Run image tests**

Run: `node --test tests/image-delivery.test.mjs tests/image-seo-metadata.test.mjs`

Expected: PASS.

- [ ] **Step 6: Commit optimized media**

```powershell
git add public/images/twong public/images/display scripts/generate-display-images.mjs app/imageVariants.ts
git commit -m "feat: ajoute les médias optimisés TWONG"
```

## Chunk 2: Page and Site Integration

### Task 3: Build the dedicated TWONG page

**Files:**
- Create: `app/twong/page.tsx`
- Modify: `app/schema.ts`

- [ ] **Step 1: Implement metadata and JSON-LD**

Use `buildMetadata` with title `TWONG | Système de fixation mobile`, path `/twong/`, French-Swiss description, and a TWONG field image. Add breadcrumb and `Product` JSON-LD with the product name, description, image, manufacturer/brand only where source-supported, and no price, review, rating, quantity, or availability enum.

- [ ] **Step 2: Implement the page with existing components**

Compose `Hero`, `SectionHeader`, `ResponsivePicture`, `FeatureBlock`, `CtaBand`, and `JsonLd` according to the approved content sequence: hero/stock CTA, system explanation, three gestures, documented applications, compatibility, and contact/demonstration CTA.

- [ ] **Step 3: Use constrained commercial language**

Use `En stock à Lausanne` and `Fourniture en Suisse`. Do not claim a delivery deadline, quantity, certification, wind rating, maximum height, quantified saving, or online price.

- [ ] **Step 4: Run content test**

Run: `node --test tests/twong-content.test.mjs`

Expected: PASS.

- [ ] **Step 5: Commit the page**

```powershell
git add app/twong/page.tsx app/schema.ts tests/twong-content.test.mjs
git commit -m "feat: ajoute la page produit TWONG"
```

### Task 4: Integrate navigation, home, and sitemap

**Files:**
- Modify: `app/page.tsx`
- Modify: `components/Nav.tsx`
- Modify: `components/Footer.tsx`
- Modify: `app/sitemap.ts`
- Modify: `tests/twong-content.test.mjs`
- Modify: `tests/sitemap.test.mjs`
- Modify: `tests/e2e/navigation.spec.ts`

- [ ] **Step 1: Add menu and footer routes**

Insert `TWONG` after `Nos produits` in the shared navigation list and add `Système TWONG` in the products footer column. Keep all existing links and mobile menu behavior unchanged.

- [ ] **Step 2: Add the home-page showcase**

Add one new semantic section after the existing expertise cards and before the specialist/featured product path. Use the selected responsive road-sign image, concise factual benefits, and a single `/twong/` CTA. Match existing section spacing, card radius, red accent, and responsive layout.

- [ ] **Step 3: Add the sitemap route**

Add `/twong/` with `2026-08-31`, monthly change frequency, and a priority consistent with product/service detail pages.

- [ ] **Step 4: Run focused tests**

Run: `node --test tests/twong-content.test.mjs tests/sitemap.test.mjs`

Expected: PASS.

- [ ] **Step 5: Commit integrations**

```powershell
git add app/page.tsx components/Nav.tsx components/Footer.tsx app/sitemap.ts tests
git commit -m "feat: met TWONG en avant dans le site"
```

## Chunk 3: Verification and Safe Release

### Task 5: Validate locally

**Files:**
- Verify only.

- [ ] **Step 1: Run static checks**

Run: `node --test tests/*.test.mjs`

Expected: all Node tests pass.

- [ ] **Step 2: Run lint and production build**

Run: `npm run lint; npm run build`

Expected: both commands exit successfully and the build emits `/twong` as a static route.

- [ ] **Step 3: Run browser checks**

Run the development server and: `npx playwright test tests/e2e/navigation.spec.ts tests/e2e/seo.spec.ts`

Expected: all navigation and SEO checks pass, including `/twong`.

- [ ] **Step 4: Review responsive rendering**

Inspect home and `/twong/` at mobile and desktop viewports. Confirm images retain important content, no text overlaps, menu is usable, CTA links work, and visual direction matches existing sections.

### Task 6: Publish with rollback safety

**Files:**
- Verify only.

- [ ] **Step 1: Confirm rollback baseline**

Confirm Git commit `3037fc6` resolves locally and the existing Vercel project can deploy a branch preview.

- [ ] **Step 2: Push branch and inspect Vercel preview**

Push `codex/twong-product-launch`; wait for the preview deployment. Run HTTP checks for `/`, `/twong/`, `/sitemap.xml`, and the new navigation links against the preview URL.

- [ ] **Step 3: Merge and push production**

Fast-forward `main` only after preview verification succeeds. Push `main` to trigger the production deployment.

- [ ] **Step 4: Run production smoke tests**

Verify `https://www.robalex-signalisation.ch/`, `/twong/`, and `/sitemap.xml` return HTTP 200. Confirm metadata and canonical URL for `/twong/`, menu/footer visibility, home showcase, and absence of fabricated price/quantity claims.

- [ ] **Step 5: Commit final state if needed**

```powershell
git status --short
git log --oneline -5
```

Expected: all product work committed; `live-home-audit.png` remains untracked and excluded from commits.
