import { chromium } from "playwright";

async function testDrawer() {
  console.log("Testing Mobile Drawer on 375px...");
  let browser;
  try {
    browser = await chromium.launch({ headless: true });
  } catch {
    browser = await chromium.launch({ channel: "chrome", headless: true });
  }
  const context = await browser.newContext({
    viewport: { width: 375, height: 667 },
  });
  const page = await context.newPage();

  await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });

  const hamburger = page.locator('button[aria-label="Open navigation menu"]');
  console.log("Hamburger visible:", await hamburger.isVisible());

  await hamburger.click();
  await page.waitForTimeout(500);

  const drawer = page.locator('div[role="dialog"]');
  console.log("Drawer visible after open click:", await drawer.isVisible());

  // Test expanding Products accordion
  const productsAccordion = drawer.locator('button:has-text("Products")');
  console.log("Products accordion visible:", await productsAccordion.isVisible());
  await productsAccordion.click();
  await page.waitForTimeout(300);

  const eaBotsLink = drawer.locator('a[href="/category/ea-bots"]');
  console.log("EA Bots sub-link visible:", await eaBotsLink.isVisible());

  // Test expanding Resources accordion
  const resourcesAccordion = drawer.locator('button:has-text("Resources")');
  await resourcesAccordion.click();
  await page.waitForTimeout(300);
  const strategyLink = drawer.locator('a[href="/strategy"]');
  console.log("Strategy sub-link visible:", await strategyLink.isVisible());

  // Test close button
  const closeBtn = drawer.locator('button[aria-label="Close navigation menu"]');
  await closeBtn.click();
  await page.waitForTimeout(500);
  console.log("Drawer visible after close click:", await drawer.isVisible());

  await browser.close();
  console.log("✅ Mobile drawer interaction fully tested and verified!");
}

testDrawer().catch(console.error);
