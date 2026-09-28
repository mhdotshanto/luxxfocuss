import { chromium } from "playwright";

const BASE_URL = process.env.BASE_URL || "http://localhost:3000";

async function runAuthAndSidebarTests() {
  console.log(`\n🔒 Running Automated Auth & Collapsible Sidebar Verification against ${BASE_URL}...`);
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

  try {
    // 1. Unauthenticated /admin access check
    console.log("➡️ Test 1: Unauthenticated request to /admin...");
    await page.goto(`${BASE_URL}/admin`, { waitUntil: "networkidle" });
    const currentUrl = page.url();
    if (!currentUrl.includes("/admin/login")) {
      throw new Error(`Expected redirect to /admin/login, but got: ${currentUrl}`);
    }
    console.log("✅ PASS: Unauthenticated access properly redirected to /admin/login.");

    // 2. Password show/hide toggle check
    console.log("➡️ Test 2: Testing Password Show/Hide toggle...");
    const passwordInput = page.locator('input[placeholder="••••••••••••"]');
    const toggleButton = page.locator('button[aria-label*="password" i]');

    let inputType = await passwordInput.getAttribute("type");
    if (inputType !== "password") {
      throw new Error(`Expected initial password type to be 'password', got: ${inputType}`);
    }

    await toggleButton.click();
    inputType = await passwordInput.getAttribute("type");
    if (inputType !== "text") {
      throw new Error(`Expected password type after toggle to be 'text', got: ${inputType}`);
    }

    await toggleButton.click();
    inputType = await passwordInput.getAttribute("type");
    if (inputType !== "password") {
      throw new Error(`Expected password type after second toggle to be 'password', got: ${inputType}`);
    }
    console.log("✅ PASS: Password show/hide toggle works correctly.");

    // 3. Client-side field validation test
    console.log("➡️ Test 3: Submitting invalid empty form...");
    const submitButton = page.locator('button[type="submit"]');
    await submitButton.click();
    await page.waitForTimeout(400);

    const emailError = await page.locator("text=Email address is required").isVisible();
    const passwordError = await page.locator("text=Password is required").isVisible();

    if (!emailError || !passwordError) {
      throw new Error("Expected field-level validation errors for email and password.");
    }
    console.log("✅ PASS: Field-specific Zod validation errors displayed inline.");

    // 4. Valid Super Admin login test
    console.log("➡️ Test 4: Submitting valid Super Admin credentials...");
    await page.fill('input[type="email"]', "superadmin@luxfocuss.com");
    await page.fill('input[placeholder="••••••••••••"]', "ChangeMeInProd123!");
    await submitButton.click();

    await page.waitForURL("**/admin", { timeout: 10000 });
    console.log("✅ PASS: Successfully authenticated and redirected to /admin.");

    // 5. Verify Sidebar structure
    console.log("➡️ Test 5: Verifying Collapsible Sidebar...");
    const sidebar = page.locator("aside");
    const isSidebarVisible = await sidebar.isVisible();
    if (!isSidebarVisible) {
      throw new Error("Sidebar is not visible.");
    }

    // Check expanded sidebar elements
    const overviewHeader = await page.locator("text=Overview").isVisible();
    const telemetryLink = await page.locator("text=Telemetry & Ops").isVisible();
    const userCard = page.locator('button:has-text("Super Administrator")');
    const isUserCardVisible = await userCard.isVisible();

    if (!overviewHeader || !telemetryLink || !isUserCardVisible) {
      throw new Error("Expanded sidebar navigation elements missing.");
    }
    console.log("✅ PASS: Expanded sidebar elements rendered cleanly.");

    // 6. Test Sidebar Collapse toggle
    console.log("➡️ Test 6: Testing Sidebar Collapse Toggle...");
    const collapseButton = page.locator('button[aria-label="Collapse sidebar"]');
    await collapseButton.click();
    await page.waitForTimeout(400);

    // After collapse, text=Overview should be hidden
    const isOverviewHidden = !(await page.locator("text=Overview").isVisible());
    if (!isOverviewHidden) {
      throw new Error("Expected section text to be hidden when sidebar is collapsed.");
    }
    console.log("✅ PASS: Sidebar collapsed smoothly to compact icon rail.");

    // Expand sidebar back
    const expandButton = page.locator('button[aria-label="Expand sidebar"]');
    await expandButton.click();
    await page.waitForTimeout(400);

    // 7. Test Bottom User Profile Popover Menu
    console.log("➡️ Test 7: Testing Bottom User Profile Popover Menu...");
    await userCard.click();
    await page.waitForTimeout(300);

    // Check popover menu contents
    const popoverSuperBadge = await page.getByText("SUPER", { exact: true }).isVisible();
    const popoverStorefrontLink = await page.locator(".animate-in").getByText("Live Storefront").isVisible();
    const popoverLogOut = page.locator('button:has-text("Log out")');
    const isLogOutVisible = await popoverLogOut.isVisible();

    if (!popoverSuperBadge || !popoverStorefrontLink || !isLogOutVisible) {
      throw new Error("Bottom user profile popover elements missing.");
    }
    console.log("✅ PASS: Upward floating user profile popover rendered with profile, badge, and actions.");

    // 8. Test Log Out from Bottom Popover
    console.log("➡️ Test 8: Testing Log out action from popover...");
    await popoverLogOut.click();
    await page.waitForURL("**/admin/login", { timeout: 10000 });
    console.log("✅ PASS: Session cleanly terminated from popover and redirected to /admin/login.");

    console.log("\n🎉 ALL 8 AUTH & SIDEBAR VERIFICATION TESTS PASSED SUCCESSFULLY!\n");
  } finally {
    await browser.close();
  }
}

runAuthAndSidebarTests().catch((err) => {
  console.error("❌ Test failure:", err);
  process.exit(1);
});
