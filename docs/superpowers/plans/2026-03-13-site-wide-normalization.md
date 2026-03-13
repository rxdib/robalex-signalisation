# Site-Wide Normalization Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Normalize the full Robalex website so every page, shared component, and recurring piece of copy feels coherent, polished, and production-ready.

**Architecture:** Start with shared system rules (`Hero`, nav, footer, global rhythm, build config), then normalize marketing pages, then utility/legal pages, and finish with verification against the live deployment. Keep the existing brand direction and component model; remove drift rather than redesigning from scratch.

**Tech Stack:** Next.js App Router, React, TypeScript, Tailwind CSS, Playwright CLI for visual checks, ESLint for verification

---

## File Structure

**Shared system files**
- Modify: `C:/Users/Robin/Desktop/robalex-next/.worktrees/site-wide-normalization/app/globals.css`
- Modify: `C:/Users/Robin/Desktop/robalex-next/.worktrees/site-wide-normalization/components/Hero.tsx`
- Modify: `C:/Users/Robin/Desktop/robalex-next/.worktrees/site-wide-normalization/components/Nav.tsx`
- Modify: `C:/Users/Robin/Desktop/robalex-next/.worktrees/site-wide-normalization/components/Footer.tsx`
- Modify: `C:/Users/Robin/Desktop/robalex-next/.worktrees/site-wide-normalization/components/CtaBand.tsx`
- Modify: `C:/Users/Robin/Desktop/robalex-next/.worktrees/site-wide-normalization/components/FeatureBlock.tsx`
- Modify: `C:/Users/Robin/Desktop/robalex-next/.worktrees/site-wide-normalization/next.config.ts`

**Marketing pages**
- Modify: `C:/Users/Robin/Desktop/robalex-next/.worktrees/site-wide-normalization/app/page.tsx`
- Modify: `C:/Users/Robin/Desktop/robalex-next/.worktrees/site-wide-normalization/app/a-propos/page.tsx`
- Modify: `C:/Users/Robin/Desktop/robalex-next/.worktrees/site-wide-normalization/app/nos-produits/page.tsx`
- Modify: `C:/Users/Robin/Desktop/robalex-next/.worktrees/site-wide-normalization/app/nos-services/page.tsx`
- Modify: `C:/Users/Robin/Desktop/robalex-next/.worktrees/site-wide-normalization/app/nos-catalogues/page.tsx`
- Modify: `C:/Users/Robin/Desktop/robalex-next/.worktrees/site-wide-normalization/app/location-feux-chantier/page.tsx`

**Utility and legal pages**
- Modify: `C:/Users/Robin/Desktop/robalex-next/.worktrees/site-wide-normalization/app/contact/page.tsx`
- Modify: `C:/Users/Robin/Desktop/robalex-next/.worktrees/site-wide-normalization/app/mentions-legales/page.tsx`
- Modify: `C:/Users/Robin/Desktop/robalex-next/.worktrees/site-wide-normalization/app/politique-confidentialite/page.tsx`

**Verification artifacts**
- Use: `C:/Users/Robin/Desktop/robalex-next/.worktrees/site-wide-normalization/output/playwright/`

## Chunk 1: Shared System

### Task 1: Normalize the shared shell

**Files:**
- Modify: `C:/Users/Robin/Desktop/robalex-next/.worktrees/site-wide-normalization/components/Nav.tsx`
- Modify: `C:/Users/Robin/Desktop/robalex-next/.worktrees/site-wide-normalization/components/Footer.tsx`
- Modify: `C:/Users/Robin/Desktop/robalex-next/.worktrees/site-wide-normalization/components/CtaBand.tsx`

- [ ] **Step 1: Review current recurring labels and CTA wording**

Check:
- nav labels
- footer labels
- CTA band wording

Expected normalization targets:
- consistent page names between nav and footer
- stable `Location feux de chantier` wording
- stable CTA verbs

- [ ] **Step 2: Update shared labels and copy**

Implement:
- align nav and footer naming
- align footer product taxonomy with live page structure
- tighten CTA band copy if needed so it matches the final site tone

- [ ] **Step 3: Run lint**

Run: `cmd /c npm run lint`
Expected: PASS

- [ ] **Step 4: Commit**

Run:
```bash
git add components/Nav.tsx components/Footer.tsx components/CtaBand.tsx
git commit -m "refactor: normalize shared shell copy and labels"
```

### Task 2: Normalize shared visual rules

**Files:**
- Modify: `C:/Users/Robin/Desktop/robalex-next/.worktrees/site-wide-normalization/app/globals.css`
- Modify: `C:/Users/Robin/Desktop/robalex-next/.worktrees/site-wide-normalization/components/Hero.tsx`
- Modify: `C:/Users/Robin/Desktop/robalex-next/.worktrees/site-wide-normalization/components/FeatureBlock.tsx`
- Modify: `C:/Users/Robin/Desktop/robalex-next/.worktrees/site-wide-normalization/next.config.ts`

- [ ] **Step 1: Review current section rhythm and build config**

Check:
- spacing utilities
- hero behavior
- feature image treatment
- `next.config.ts`

- [ ] **Step 2: Normalize the shared visual primitives**

Implement:
- finalize `Hero` behavior for crop overrides without page hacks
- tighten `FeatureBlock` image/text balance if needed
- adjust global spacing/rhythm utilities only if necessary
- set `turbopack.root` in `next.config.ts` to the project root to stop the parent-directory build panic

- [ ] **Step 3: Verify lint**

Run: `cmd /c npm run lint`
Expected: PASS

- [ ] **Step 4: Verify build**

Run: `cmd /c npm run build`
Expected: PASS without the previous root-directory permission panic

- [ ] **Step 5: Commit**

Run:
```bash
git add app/globals.css components/Hero.tsx components/FeatureBlock.tsx next.config.ts
git commit -m "refactor: normalize shared visual system"
```

## Chunk 2: Core Marketing Pages

### Task 3: Normalize homepage rhythm and hierarchy

**Files:**
- Modify: `C:/Users/Robin/Desktop/robalex-next/.worktrees/site-wide-normalization/app/page.tsx`

- [ ] **Step 1: Review the approved homepage structure**

Check:
- section order
- alternating backgrounds
- one dark anchor section
- product/reference/partner consistency

- [ ] **Step 2: Tighten homepage layout and copy**

Implement:
- keep the approved order and current terminology
- finish spacing and density so the bottom half feels as deliberate as the top
- remove any remaining one-off drift from inner-page patterns

- [ ] **Step 3: Verify lint**

Run: `cmd /c npm run lint`
Expected: PASS

- [ ] **Step 4: Commit**

Run:
```bash
git add app/page.tsx
git commit -m "style: normalize homepage layout and hierarchy"
```

### Task 4: Normalize `A propos`, `Nos produits`, and `Nos services`

**Files:**
- Modify: `C:/Users/Robin/Desktop/robalex-next/.worktrees/site-wide-normalization/app/a-propos/page.tsx`
- Modify: `C:/Users/Robin/Desktop/robalex-next/.worktrees/site-wide-normalization/app/nos-produits/page.tsx`
- Modify: `C:/Users/Robin/Desktop/robalex-next/.worktrees/site-wide-normalization/app/nos-services/page.tsx`

- [ ] **Step 1: Align copy and spacing against the shared system**

Implement:
- tighten recurring terminology
- normalize subtitles and section intros
- fix any visually weak rows, especially on `nos-services`

- [ ] **Step 2: Verify lint**

Run: `cmd /c npm run lint`
Expected: PASS

- [ ] **Step 3: Commit**

Run:
```bash
git add app/a-propos/page.tsx app/nos-produits/page.tsx app/nos-services/page.tsx
git commit -m "style: normalize core marketing pages"
```

### Task 5: Normalize `Nos catalogues` and `Location feux de chantier`

**Files:**
- Modify: `C:/Users/Robin/Desktop/robalex-next/.worktrees/site-wide-normalization/app/nos-catalogues/page.tsx`
- Modify: `C:/Users/Robin/Desktop/robalex-next/.worktrees/site-wide-normalization/app/location-feux-chantier/page.tsx`

- [ ] **Step 1: Tighten catalogue and service-page composition**

Implement:
- rebalance catalogue card hierarchy and spacing
- preserve the approved hero framing and linked references on `location-feux-chantier`
- normalize subtitles, labels, and density

- [ ] **Step 2: Verify lint**

Run: `cmd /c npm run lint`
Expected: PASS

- [ ] **Step 3: Commit**

Run:
```bash
git add app/nos-catalogues/page.tsx app/location-feux-chantier/page.tsx
git commit -m "style: normalize catalogue and feux pages"
```

## Chunk 3: Utility and Legal Pages

### Task 6: Normalize the contact page

**Files:**
- Modify: `C:/Users/Robin/Desktop/robalex-next/.worktrees/site-wide-normalization/app/contact/page.tsx`

- [ ] **Step 1: Review current structure**

Check:
- hero
- contact info block
- form
- FAQ

- [ ] **Step 2: Align contact page with the shared system**

Implement:
- improve balance between the info column and the form
- normalize section headers and spacing
- ensure FAQ cards feel like part of the same design system

- [ ] **Step 3: Verify lint**

Run: `cmd /c npm run lint`
Expected: PASS

- [ ] **Step 4: Commit**

Run:
```bash
git add app/contact/page.tsx
git commit -m "style: normalize contact page"
```

### Task 7: Normalize legal pages

**Files:**
- Modify: `C:/Users/Robin/Desktop/robalex-next/.worktrees/site-wide-normalization/app/mentions-legales/page.tsx`
- Modify: `C:/Users/Robin/Desktop/robalex-next/.worktrees/site-wide-normalization/app/politique-confidentialite/page.tsx`

- [ ] **Step 1: Replace the plain document treatment with a minimal branded legal-page shell**

Implement:
- clearer top spacing and heading hierarchy
- consistent container rhythm
- typography that matches the rest of the site

- [ ] **Step 2: Verify lint**

Run: `cmd /c npm run lint`
Expected: PASS

- [ ] **Step 3: Commit**

Run:
```bash
git add app/mentions-legales/page.tsx app/politique-confidentialite/page.tsx
git commit -m "style: normalize legal pages"
```

## Chunk 4: Full-Site Verification

### Task 8: Verify the whole site locally

**Files:**
- Review only

- [ ] **Step 1: Run lint**

Run: `cmd /c npm run lint`
Expected: PASS

- [ ] **Step 2: Run build**

Run: `cmd /c npm run build`
Expected: PASS

- [ ] **Step 3: Push the branch and inspect the deployed site**

Run:
```bash
git push -u origin codex/site-wide-normalization
```

Then verify the production-like preview by checking at least:
- `/`
- `/a-propos/`
- `/nos-produits/`
- `/nos-services/`
- `/nos-catalogues/`
- `/location-feux-chantier/`
- `/contact/`
- `/mentions-legales/`
- `/politique-confidentialite/`

- [ ] **Step 4: If visual issues remain, make a final polish commit**

Run:
```bash
git add <changed-files>
git commit -m "style: finish site-wide normalization polish"
```

- [ ] **Step 5: Re-run lint and build**

Run:
```bash
cmd /c npm run lint
cmd /c npm run build
```

Expected: PASS
