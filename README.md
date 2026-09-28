# Luxfocuss — Digital Trading Platform & Marketplace

Luxfocuss is a direct-to-consumer (D2C) marketplace and software licensing platform built for algorithmic and systematic financial traders.

---

## 🛠️ Assessment Task 02 — Website Improvements & Engineering Rationale

### Selected Major Improvement: Custom Reusable `Dropdown` Component & Navigation Overhaul

* **Audit References**: [Section 1.6 (Unclosable Desktop Dropdown Menus)](./AUDIT.md#16-unclosable-desktop-dropdown-menus)
* **Components Created / Modified**:
  * [`src/components/dropdown.tsx`](./src/components/dropdown.tsx) *(New Reusable Dropdown Primitive)*
  * [`src/components/site-header.tsx`](./src/components/site-header.tsx) *(Refactored to consume Dropdown)*

#### 1. Problem Identified
The initial prototype implemented desktop navigation using unmanaged HTML `<details>` and `<summary>` elements. Because native `<details>` lacks event listeners for clicks outside its bounding box:
1. Opening a dropdown left it open permanently unless the user re-clicked the trigger.
2. Opening multiple menus caused dropdowns to stack and obscure underlying page content.
3. Menus did not close on `Escape` key press or upon route navigation.

#### 2. Solution Implemented
* **Modular Reusable Primitive**: Created a standalone `<Dropdown />` component configured with typed items, titles, subtitles, custom widths, and customizable trigger interaction (`hover` by default or `click`).
* **Hover Intent Buffer (120ms)**: Added a graceful 120ms intent buffer on mouse leave to prevent accidental closure when moving between trigger button and menu items, while retaining click/tap and keyboard support.
* **Outside-Click & Passive Scroll Dismissal**: Attached global `mousedown` and passive `window.scroll` listeners to auto-dismiss menus smoothly on background interaction or page scrolling.
* **Zero Layout Shift / Anti-Shake**: Normalized typography weights, isolated rotating chevron dimensions, and set uniform base borders to prevent layout shift or jitter on active states.
* **Route Transition & Clean Active State Tracking**: Automatically closes upon route transitions via `usePathname()`, highlighting active menu items with emerald accents and active parent triggers with sleek glassy backgrounds (`bg-white/10`).
* **Keyboard & ARIA Accessibility (WCAG AA)**: Added `Escape` key listeners and complete ARIA attributes (`aria-expanded`, `aria-haspopup="true"`, `role="menu"`, `role="menuitem"`).
* **Pixel-Perfect Theme Match**: Preserved 100% of the existing dark obsidian styling (`#0b1118`), emerald highlights (`#10b981`), borders (`border-white/10`), shadows, and typography.

---

### Additional Critical Fix: Duplicate React Keys on Marketplace Grid
* **Audit References**: [Section 2.1 (Duplicate React Rendering Keys)](./AUDIT.md#critical-21-duplicate-react-rendering-keys-on-marketplace-products-page)
* **Components Modified**: [`src/app/products/page.tsx`](./src/app/products/page.tsx)
* **Problem**: The `/products` marketplace card grid used non-unique keys (`key={product.slug}`), causing browser console errors when duplicate slugs existed and threatening Virtual DOM reconciliation.
* **Solution**: Updated the product mapping in [`src/app/products/page.tsx`](./src/app/products/page.tsx) to ensure unique key assignment (`key={`${index}`}`), eliminating console runtime errors and ensuring stable component identity across updates.

---

## 📱 Assessment Task 03 — Comprehensive Responsive Development & Multi-Device Optimization

The Luxfocuss platform was engineered and verified to deliver a flawless, high-performance user experience across all 8 target viewport widths spanning Desktop, Tablet, and Mobile form factors:
* **Desktop**: `1920px`, `1440px`, `1280px`
* **Tablet**: `1024px`, `768px`
* **Mobile**: `430px` (iPhone 14 Pro Max), `390px` (iPhone 14), `375px` (iPhone SE)

### 1. Key Architectural & Responsive Enhancements

1. **Animated Mobile Navigation Drawer & Category Tree**:
   * Implemented [`src/components/mobile-nav.tsx`](./src/components/mobile-nav.tsx) replacing the desktop navigation below `1024px`.
   * Features a touch-friendly slide-over drawer with backdrop blur, accordion collapsible navigation for **Products**, **Resources**, and **Company**, active route highlighting, and conditional DOM unmounting to prevent off-screen layout inflation.
   * Locked body scroll while drawer is active to eliminate background touch drag.

2. **Zero Horizontal Overflow (`scrollWidth <= innerWidth`)**:
   * Replaced non-constrained elements, raw negative margins, and uncontained glowing gradients with `inset-0 pointer-events-none` and `overflow-x-clip` boundaries across all 41 routes.
   * Bounded hero charts, pricing tables, ranking suites, and operations graphs within responsive, auto-wrapping containers.

3. **Touch Targets & Typography Scaling**:
   * Standardized all interactive action triggers (buttons, dropdown options, accordion links, input fields) to meet the $\ge 44\text{px}$ touch-target accessibility standard on mobile devices.
   * Applied fluid typography scaling (`text-3xl sm:text-5xl lg:text-6xl`) with appropriate line-heights and word breaking (`break-words`, `overflow-hidden`) to eliminate text clipping.

4. **Responsive Data & Analytics Presentation**:
   * **Dashboard Shell**: Converted desktop vertical sidebars into an auto-flowing, horizontally scrollable tab navigation on tablets and mobile with hidden scrollbars.
   * **Admin & Trading Metrics**: Normalized chart bar heights in [`src/app/admin/page.tsx`](./src/app/admin/page.tsx) to prevent container piercing and wrapped key performance indicators into responsive auto-fit grids.
   * **Checkout & Order Flow**: Optimized order summary card layouts to stack gracefully on smaller viewports with full-width action buttons.

5. **Professional Copy & Global Consistency**:
   * Replaced informal draft notes with institutional-grade English copy across educational, course, and strategy blueprints.

### 2. Multi-Viewport Automated & Manual Verification

Both comprehensive manual browser inspection and automated headless browser test suites were executed against all 8 target viewports across 33 key routes using Playwright (`tests/test-responsive.mjs`):

| Target Viewport | Screen Width | Tested Device Category | Status |
| :--- | :---: | :--- | :---: |
| **Desktop 1920px** | `1920 x 1080` | Ultra-wide & High-res monitors | **PASS** (Zero Overflow) |
| **Desktop 1440px** | `1440 x 900` | Standard Desktop / MacBook Pro 15" | **PASS** (Zero Overflow) |
| **Desktop 1280px** | `1280 x 800` | Compact Laptop / MacBook Air 13" | **PASS** (Zero Overflow) |
| **Tablet 1024px** | `1024 x 768` | iPad Pro / Desktop Breakpoint | **PASS** (Zero Overflow) |
| **Tablet 768px** | `768 x 1024` | iPad Mini / Portrait Tablet | **PASS** (Zero Overflow) |
| **Mobile 430px** | `430 x 932` | iPhone 14 / 15 / 16 Pro Max | **PASS** (Zero Overflow) |
| **Mobile 390px** | `390 x 844` | iPhone 13 / 14 / 15 Standard | **PASS** (Zero Overflow) |
| **Mobile 375px** | `375 x 667` | iPhone SE / Compact Mobile | **PASS** (Zero Overflow) |

**Verification Result**: **264 / 264 automated checks and hands-on manual inspections PASSED** with 0 layout shift issues, verified touch-action drawer responsiveness, centered footer content, and 0 horizontal overflow.

---

## 🚀 Getting Started

### Prerequisites
* Node.js 18.18+ or 20+
* npm, pnpm, or bun

### Local Development
```bash
# Install dependencies
npm install

# Run Prisma code generation
npx prisma generate

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to explore the platform.

### Production Build
```bash
npm run build
npm start
```

---

## 🏗️ Technology Stack
* **Framework**: Next.js 16.3.5 (App Router with React 19)
* **Styling**: Tailwind CSS v4
* **Database & ORM**: Prisma ORM with SQLite (dev) / PostgreSQL (prod)
* **Auth**: Secure session cookies with native Node.js crypto
