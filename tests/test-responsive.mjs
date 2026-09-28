import { chromium } from "playwright";

const viewports = [
  { name: "Desktop 1920px", width: 1920, height: 1080 },
  { name: "Desktop 1440px", width: 1440, height: 900 },
  { name: "Desktop 1280px", width: 1280, height: 800 },
  { name: "Tablet 1024px", width: 1024, height: 768 },
  { name: "Tablet 768px", width: 768, height: 1024 },
  { name: "Mobile 430px (iPhone 14 Pro Max)", width: 430, height: 932 },
  { name: "Mobile 390px (iPhone 14)", width: 390, height: 844 },
  { name: "Mobile 375px (iPhone SE)", width: 375, height: 667 },
];

const routes = [
  "/",
  "/products",
  "/products/gold-hunter-ea",
  "/category/ea-bots",
  "/bundles",
  "/pricing",
  "/performance",
  "/education",
  "/strategy",
  "/strategy/orb-breakout-trend-filter",
  "/course",
  "/course/level-3-to-6",
  "/documentation",
  "/faq",
  "/about",
  "/contact",
  "/affiliate",
  "/checkout",
  "/login",
  "/register",
  "/admin",
  "/dashboard",
  "/dashboard/my-products",
  "/dashboard/downloads",
  "/dashboard/licenses",
  "/dashboard/orders",
  "/dashboard/billing",
  "/dashboard/profile",
  "/dashboard/support",
  "/terms",
  "/privacy",
  "/refund-policy",
  "/risk-disclosure",
];

const baseUrl = process.env.BASE_URL || "http://localhost:3000";

async function runAudit() {
  console.log(`Starting Multi-Viewport Audit on ${baseUrl}...`);
  let browser;
  try {
    browser = await chromium.launch({ headless: true });
  } catch (err) {
    console.log("Launching with chromium channel/executable fallback...");
    browser = await chromium.launch({ channel: "chrome", headless: true });
  }

  const context = await browser.newContext();
  const page = await context.newPage();

  let totalChecks = 0;
  let passedChecks = 0;
  let failures = [];

  for (const vp of viewports) {
    console.log(`\n=== Testing Viewport: ${vp.name} (${vp.width}x${vp.height}) ===`);
    await page.setViewportSize({ width: vp.width, height: vp.height });

    for (const route of routes) {
      totalChecks++;
      try {
        const response = await page.goto(`${baseUrl}${route}`, { waitUntil: "domcontentloaded", timeout: 15000 });
        const status = response?.status();

        if (status && status >= 400) {
          failures.push({ viewport: vp.name, route, error: `HTTP status ${status}` });
          console.log(`❌ [${vp.name}] ${route} -> HTTP ${status}`);
          continue;
        }

        // Check for horizontal overflow
        const overflow = await page.evaluate(() => {
          const scrollW = document.documentElement.scrollWidth;
          const innerW = window.innerWidth;
          const bodyScrollW = document.body.scrollWidth;
          const maxW = Math.max(scrollW, bodyScrollW);
          return {
            hasOverflow: maxW > innerW + 1, // 1px rounding tolerance
            scrollW: maxW,
            innerW,
          };
        });

        if (overflow.hasOverflow) {
          failures.push({
            viewport: vp.name,
            route,
            error: `Horizontal Overflow: scrollWidth ${overflow.scrollW}px > innerWidth ${overflow.innerW}px`,
          });
          console.log(`❌ [${vp.name}] ${route} -> Overflow: ${overflow.scrollW}px > ${overflow.innerW}px`);
        } else {
          passedChecks++;
          // console.log(`✓ [${vp.name}] ${route}`);
        }
      } catch (err) {
        failures.push({ viewport: vp.name, route, error: err.message });
        console.log(`❌ [${vp.name}] ${route} -> Exception: ${err.message}`);
      }
    }
  }

  // Test mobile drawer interaction on 375px
  console.log("\n=== Testing Mobile Drawer Hamburger on 375px ===");
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto(`${baseUrl}/`, { waitUntil: "domcontentloaded" });

  const hamburger = page.locator('button[aria-label="Open navigation menu"]');
  const isHamburgerVisible = await hamburger.isVisible();
  console.log(`Mobile Hamburger visible on 375px: ${isHamburgerVisible}`);

  if (isHamburgerVisible) {
    await hamburger.click();
    await page.waitForTimeout(400);
    const drawer = page.locator('div[role="dialog"]');
    const isDrawerVisible = await drawer.isVisible();
    console.log(`Mobile Drawer opened: ${isDrawerVisible}`);

    const closeBtn = page.locator('button[aria-label="Close navigation menu"]');
    await closeBtn.click();
    await page.waitForTimeout(400);
    const isDrawerClosed = !(await drawer.isVisible());
    console.log(`Mobile Drawer closed: ${isDrawerClosed}`);
  }

  await browser.close();

  console.log(`\n========================================`);
  console.log(`Audit Complete: ${passedChecks}/${totalChecks} checks PASSED.`);
  if (failures.length === 0) {
    console.log(`🎉 100% RESPONSIVE: ZERO HORIZONTAL OVERFLOW ACROSS ALL 8 VIEWPORTS AND 33 ROUTES!`);
  } else {
    console.log(`⚠️ Failures detected (${failures.length}):`);
    console.log(JSON.stringify(failures, null, 2));
  }
}

runAudit().catch(console.error);
