# Luxfocuss — Digital Trading Platform & Marketplace

Luxfocuss is a direct-to-consumer (D2C) marketplace and software licensing platform built for algorithmic and systematic financial traders.

---

## 🛠️ Assessment Task 02 — Website Improvements & Engineering Rationale

### Selected Major Improvement: Custom Reusable `Dropdown` Component & Navigation Overhaul

* **Audit References**: [Section 1.6 (Unclosable Desktop Dropdown Menus)](./AUDIT.md#16-unclosable-desktop-dropdown-menus)
* **Components Created / Modified**:
  * [`src/components/dropdown.tsx`](./src/components/dropdown.tsx) *(New Reusable Dropdown Primitive)*
  * [`src/components/site-header.tsx`](./src/components/site-header.tsx) *(Refactored to consume Dropdown)*
  * [`src/app/layout.tsx`](./src/app/layout.tsx) *(Type safety & build fix)*

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
