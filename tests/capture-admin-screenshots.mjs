import { chromium } from "playwright";

async function capture() {
  let browser;
  try {
    browser = await chromium.launch({ headless: true });
  } catch {
    try {
      browser = await chromium.launch({ channel: "chrome", headless: true });
    } catch {
      browser = await chromium.launch({ channel: "msedge", headless: true });
    }
  }

  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  // 1. Capture Login Screen
  await page.goto("http://localhost:3000/admin/login");
  await page.waitForTimeout(500);
  await page.screenshot({ path: "tests/admin-login-screen.png" });

  // 2. Perform Login
  await page.fill('input[type="email"]', "superadmin@luxfocuss.com");
  await page.fill('input[placeholder="••••••••••••"]', "ChangeMeInProd123!");
  await page.click('button[type="submit"]');
  await page.waitForURL("**/admin");
  await page.waitForTimeout(600);

  // 3. Capture Expanded Dashboard with Full Sidebar
  await page.screenshot({ path: "tests/admin-dashboard-expanded.png" });

  // 4. Open Upward User Popover Menu
  const userCard = page.locator('button:has-text("Super Administrator")');
  await userCard.click();
  await page.waitForTimeout(400);
  await page.screenshot({ path: "tests/admin-sidebar-popover.png" });

  // 5. Close popover & Collapse sidebar
  await page.click("text=Operations & Telemetry");
  await page.waitForTimeout(200);
  const collapseButton = page.locator('button[aria-label="Collapse sidebar"]');
  await collapseButton.click();
  await page.waitForTimeout(400);
  await page.screenshot({ path: "tests/admin-sidebar-collapsed.png" });

  await browser.close();
  console.log("All 4 Admin visual screenshots captured successfully!");
}

capture().catch(console.error);

