import { chromium } from "playwright";

async function captureAll() {
  const browser = await chromium.launch({ channel: "chrome", headless: true });

  // 1. Mobile 375px with Products expanded
  const mobileCtx = await browser.newContext({ viewport: { width: 375, height: 667 } });
  const mobilePage = await mobileCtx.newPage();
  await mobilePage.goto("http://localhost:3000/", { waitUntil: "networkidle" });

  const hamburger = mobilePage.locator('button[aria-label="Open navigation menu"]');
  await hamburger.click();
  await mobilePage.waitForTimeout(300);

  const productsBtn = mobilePage.locator('div[role="dialog"] button:has-text("Products")');
  await productsBtn.click();
  await mobilePage.waitForTimeout(300);

  await mobilePage.screenshot({ path: "drawer-products-open-375.png" });
  console.log("Saved drawer-products-open-375.png");

  // 2. Tablet 768px with drawer
  const tabletCtx = await browser.newContext({ viewport: { width: 768, height: 1024 } });
  const tabletPage = await tabletCtx.newPage();
  await tabletPage.goto("http://localhost:3000/", { waitUntil: "networkidle" });
  const tabletHamburger = tabletPage.locator('button[aria-label="Open navigation menu"]');
  await tabletHamburger.click();
  await tabletPage.waitForTimeout(300);
  await tabletPage.screenshot({ path: "drawer-tablet-768.png" });
  console.log("Saved drawer-tablet-768.png");

  // 3. Desktop 1440px
  const desktopCtx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const desktopPage = await desktopCtx.newPage();
  await desktopPage.goto("http://localhost:3000/", { waitUntil: "networkidle" });
  await desktopPage.screenshot({ path: "desktop-1440.png" });
  console.log("Saved desktop-1440.png");

  await browser.close();
  console.log("All visual verification screenshots captured successfully!");
}

captureAll().catch(console.error);
