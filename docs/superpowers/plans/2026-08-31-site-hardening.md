# Site Hardening Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the public site privacy-consistent, lighter, testable, accurately represented in the sitemap, and stronger for organic commercial searches.

**Architecture:** Keep the static Next.js/Vercel architecture. Add pre-generated WebP display variants for the heaviest in-use images and serve them through the existing `ResponsivePicture` component. Add three focused static service pages using a shared content component and connect them from the service hub and homepage.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS, Sharp, Playwright, Node test runner.

---

## Chunk 1: Privacy, sitemap, and test portability

### Task 1: Complete privacy disclosures

**Files:**
- Modify: `app/politique-confidentialite/page.tsx`
- Test: `tests/legal-pages-content.test.mjs`

- [ ] Add failing assertions for the Formspree processor disclosure and anonymous Vercel Analytics wording.
- [ ] Run `node --test tests/legal-pages-content.test.mjs` and confirm the new assertions fail.
- [ ] Add concise French policy content without introducing marketing trackers or cookies.
- [ ] Re-run the test and commit the privacy change.

### Task 2: Use accurate sitemap dates

**Files:**
- Modify: `app/sitemap.ts`
- Test: `tests/sitemap.test.mjs`

- [ ] Add a failing test that rejects the obsolete fixed March 2026 date and confirms only indexable public pages are exported.
- [ ] Run `node --test tests/sitemap.test.mjs` and confirm failure.
- [ ] Replace the fixed date with truthful page update dates maintained alongside the page list.
- [ ] Re-run the test and commit the sitemap change.

### Task 3: Make file-based checks portable

**Files:**
- Modify: `tests/*.test.mjs`
- Test: `tests/*.test.mjs`

- [ ] Replace hard-coded workstation paths with a path derived from each test file.
- [ ] Run all Node tests and confirm they test the checked-out repository, not another local directory.
- [ ] Commit the portable test paths.

## Chunk 2: Image delivery and regression tests

### Task 4: Generate WebP display variants

**Files:**
- Create: `scripts/generate-display-images.mjs`
- Create: `public/images/optimized/*`
- Modify: image-consuming page components
- Test: `tests/image-delivery.test.mjs`

- [ ] Add failing tests that require responsive WebP variants for the identified heavy images.
- [ ] Run the test and confirm failure.
- [ ] Generate 768px and 1280px WebP variants with Sharp, preserving the existing image dimensions and fallback originals.
- [ ] Add `source`/`srcSet` data to use the variants while retaining JPEG/PNG fallback URLs.
- [ ] Re-run tests, build, and a Playwright visual route check; commit the optimization.

### Task 5: Refresh E2E assertions

**Files:**
- Modify: `tests/e2e/homepage.spec.ts`, `tests/e2e/navigation.spec.ts`, `tests/e2e/seo.spec.ts`
- Test: `tests/e2e/*.spec.ts`

- [ ] Update tests to assert current stable content, correct title patterns, six expertise cards, and the JSON-LD array structure.
- [ ] Run `npm run test:e2e` and confirm the suite passes against the current design.
- [ ] Commit the updated regression suite.

## Chunk 3: Commercial service pages

### Task 6: Add targeted service landing pages

**Files:**
- Create: `components/ServiceLandingPage.tsx`
- Create: `app/signalisation-temporaire/page.tsx`
- Create: `app/signalisation-permanente/page.tsx`
- Create: `app/marquage-routier/page.tsx`
- Modify: `app/nos-services/page.tsx`, `app/page.tsx`, `app/sitemap.ts`
- Test: `tests/e2e/services.spec.ts`, `tests/service-pages.test.mjs`

- [ ] Add failing tests for each page's title, H1, canonical, breadcrumb/service schema, contact CTA, and sitemap entry.
- [ ] Run the focused tests and confirm failure because the routes do not exist.
- [ ] Implement the shared page component and page-specific real service content sourced from the current service hub.
- [ ] Link the service hub and homepage expertise cards to the focused pages.
- [ ] Re-run focused tests, full Node tests, lint, build, and E2E tests; commit the landing pages.

## Chunk 4: Release verification

### Task 7: Validate and publish

**Files:**
- Verify: all modified files

- [ ] Run `npm run lint`, `npm run build`, `node --test tests/*.test.mjs`, and `npm run test:e2e`.
- [ ] Start the production build locally and confirm no broken image assets, valid sitemap output, correct service routes, form action, and no Google tracking script.
- [ ] Merge into `main`, push, and wait for Vercel deployment.
- [ ] Confirm live pages return 200 and no new regressions appear before reporting completion.
