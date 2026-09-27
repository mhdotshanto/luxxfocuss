# Luxfocuss Audit Selection Rules & Issue Qualification Matrix

> **Purpose**: Establish objective criteria for what qualifies as a genuine issue for the Luxfocuss static Next.js starter codebase. This ensures the upcoming `AUDIT.md` report only contains verified, relevant findings that impress the hiring team without mistaking intentional mockups for bugs.

---

## 1. Ground Rules: What Qualifies as an Issue on a Static Project?

To keep our audit sharp, credible, and senior-level, every candidate finding must satisfy these 4 rules:

### Rule 1: Real Code & Build Flaws vs. Expected Static Mockups
* **Qualifies**: Code that prevents `npm run build` or `npx tsc --noEmit` from completing, broken TypeScript types, and unhandled runtime exceptions.
* **Does NOT Qualify**: Complaining that the site uses `mock-data.ts` instead of a full database API. In a frontend evaluation starter, mock data is standard architecture.

### Rule 2: Real Frontend UI/UX Failures vs. Incomplete Features
* **Qualifies**: Broken navigation links (e.g. text saying "View Performance" linking to `/pricing`), menus that cannot be closed or don't work on mobile, layout shifts, unreadable contrast, and draft language copy left in production pages.
* **Does NOT Qualify**: Criticizing the lack of a live multi-vendor checkout engine or banking gateway backend.

### Rule 3: Direct Violations of Framework Standards
* **Qualifies**: Bypassing Next.js image optimization by using raw `<img>` tags (causing ESLint warnings and Cumulative Layout Shift), missing metadata in Next.js App Router child routes.
* **Does NOT Qualify**: Stylistic personal preferences (e.g., arguing over Tailwind vs. CSS modules).

### Rule 4: Actionable Impact on Production Readiness
* **Qualifies**: Missing `sitemap.ts`, missing `robots.ts`, lack of OpenGraph social sharing tags, lack of responsive mobile touch targets ($<44$px).
* **Does NOT Qualify**: Nitpicking placeholder copy that was clearly meant as visual filler.

---

## 2. Issue Qualification Matrix (Rubric by Rubric)

Below is the candidate evaluation mapping each bullet point from Pages 2 & 3 of the test PDF against our rules:

### A. UI / UX

| Rubric Field | Proposed Finding | Status | Rationale & Recommendation | Proposed Priority |
| :--- | :--- | :---: | :--- | :---: |
| **Navigation issues** | Hero CTA text says *"View Performance"* but links to `/pricing`. | **INCLUDE** | Direct link mismatch that confuses the visitor. | **Medium** |
| **Navigation issues** | Desktop dropdowns use `<details>` with no click-outside listener; multiple menus stay open and collide. | **INCLUDE** | Real UI annoyance affecting core navigation. | **Medium** |
| **Mobile usability** | Dropdowns are hidden on mobile; navigation is reduced to a horizontal scrollbar with tap targets $<44$px. | **INCLUDE** | Clear mobile usability failure violating responsive guidelines. | **High** |
| **Typography & Content** | Strategy and Course pages contain informal Banglish (*"Session er prothom 15 minute..."*) mixed into English copy. | **INCLUDE** | Severe visual and brand consistency issue left in production pages. | **High** |
| **User-flow problems** | Checkout page hardcodes `productSlug: "gold-hunter-ea"` regardless of which product page the user arrived from. | **INCLUDE (Reframed)** | Frame not as a "missing backend", but as a **broken frontend flow**: `Buy Now` does not forward the selected product slug to checkout. | **High** |
| **Broken components** | Buttons like "Add to Cart", "Download", "Updates", and "Save Profile" have no feedback or interactive states. | **INCLUDE** | Dead UI elements that leave users clicking with zero response. | **Medium** |
| **Visual consistency** | Education article badges duplicate numbering (`01`, `02`, `03`, `02`, `03`). | **INCLUDE** | Clear calculation bug in index mapping. | **Low** |
| **Spacing inconsistencies**| Container horizontal padding jumps between `px-3` and `px-4` across routes on mobile. | **INCLUDE** | Minor layout polish issue. | **Low** |
| *Mock Data Usage* | Storefront displays mock array data instead of fetching from API. | **EXCLUDE** | Expected by design in this initial test task template. | *N/A* |

---

### B. Technical

| Rubric Field | Proposed Finding | Status | Rationale & Recommendation | Proposed Priority |
| :--- | :--- | :---: | :--- | :---: |
| **Console / Build errors** | `src/app/layout.tsx:23` declares undefined `LayoutProps<"/">`, crashing TypeScript and Next.js builds. | **INCLUDE** | **Fatal bug**. The repository literally cannot be deployed to Vercel in its current state. | **Critical** |
| **Console / Build errors** | ESLint flags `prisma/seed.cjs` (`no-require-imports`) and unoptimized `<img>` tags. | **INCLUDE** | Code quality violations reported by the project's own linter. | **Medium** |
| **Security issues** | `/admin` and `/dashboard` have no route protection or authentication checks. | **INCLUDE** | Fundamental architectural omission directly asked about in Tasks 05 & 07. | **High** |
| **Security / Concurrency** | `/api/license/activate` increments devices without atomic locking (race condition). | **INCLUDE** | Legitimate backend logic flaw that permits activation limit bypass. | **High** |
| **Security** | Origin header poisoning in checkout redirect (`request.headers.get("origin")`). | **INCLUDE** | Unvalidated redirect vulnerability. | **Medium** |
| **Component structure** | `src/app/page.tsx` is a monolithic 315-line file combining hero, setups, and FAQs in one file. | **INCLUDE** | Architecture debt; should be split into modular components. | **Medium** |
| **Duplicate code** | Repeated inline container classes (`rounded-[2rem] border border-white/10...`) repeated 40+ times. | **INCLUDE** | Maintainability issue. | **Low** |

---

### C. Performance

| Rubric Field | Proposed Finding | Status | Rationale & Recommendation | Proposed Priority |
| :--- | :--- | :---: | :--- | :---: |
| **Image optimization** | Native HTML `<img>` elements bypass Next.js image optimization (no WebP/AVIF or responsive sizing). | **INCLUDE** | Violates Next.js performance best practices, causes ESLint warnings. | **High** |
| **Core Web Vitals (CLS)** | Images lack explicit `width`/`height` attributes or aspect-ratio boxes, causing layout shifts. | **INCLUDE** | Direct impact on Cumulative Layout Shift score. | **Medium** |
| **Core Web Vitals (LCP)** | Hero vector graphics lack preloading or priority loading hints. | **INCLUDE** | Affects Largest Contentful Paint. | **Medium** |
| **Lazy loading** | Long product listing pages render all cards simultaneously without lazy loading. | **INCLUDE** | Wasted network bandwidth on initial view. | **Low** |
| **Caching opportunities** | API routes and static pages omit `Cache-Control` / ISR headers. | **INCLUDE** | Standard Next.js optimization opportunity. | **Low** |

---

### D. SEO

| Rubric Field | Proposed Finding | Status | Rationale & Recommendation | Proposed Priority |
| :--- | :--- | :---: | :--- | :---: |
| **Page titles & Meta** | Child pages lack `generateMetadata()`; all pages share the generic homepage title and description. | **INCLUDE** | Critical SEO flaw: search engines index identical titles for all products. | **High** |
| **Open Graph metadata** | No `openGraph` or `twitter` card tags defined in metadata. | **INCLUDE** | Broken social media sharing previews. | **Medium** |
| **Sitemap & Robots** | No `sitemap.ts` and no `robots.ts` in `src/app/` (returns 404). | **INCLUDE** | Essential for search crawler discovery on any commercial site. | **Medium** |
| **Heading hierarchy** | Skipping heading levels (jumping from `<h1>` directly to `<h3>`) in several sections. | **INCLUDE** | Breaks semantic accessibility and document structure. | **Medium** |
| **Semantic HTML** | Key data structures and card lists rendered as nested generic `<div>` tags. | **INCLUDE** | Accessibility and semantic standard issue. | **Low** |

---

## 3. Decision Points for Your Review

Before we write the actual `AUDIT.md`, please check these 3 key points:

1. **Reframing Checkout**: Do you agree that we keep the checkout issue **ONLY as a frontend parameter flow issue** (i.e., *"Buy Now doesn't forward the product slug to the checkout page"*), rather than calling it a missing backend?
2. **Banglish Language Issue**: Do you agree this is a **High** priority visual/content consistency issue that an international employer would notice immediately?
3. **Build Error as Critical**: Do you agree that the `LayoutProps` error in `layout.tsx` is our **#1 Critical finding** because the site currently fails `next build`?
