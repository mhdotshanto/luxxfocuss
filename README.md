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
* **Modular Reusable Primitive**: Created a standalone `<Dropdown />` component configured with typed items, titles, subtitles, and custom widths.
* **Outside-Click Detection**: Attached a global `mousedown` listener to detect clicks outside the component's `useRef` boundary, automatically closing the menu.
* **Keyboard Accessibility (WCAG AA)**: Added `Escape` key listeners to dismiss menus and included ARIA attributes (`aria-expanded`, `aria-haspopup="true"`, `role="menu"`).
* **Route Transition Auto-Dismiss**: Subscribed to Next.js `usePathname()` to ensure menus cleanly close upon navigation.
* **Pixel-Perfect Theme Match**: Preserved 100% of the existing dark obsidian styling (`#0b1118`), neon emerald highlights (`#10b981`), borders (`border-white/10`), shadows, and typography.

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
