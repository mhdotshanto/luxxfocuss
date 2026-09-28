import { chromium } from "playwright";

const BASE_URL = process.env.BASE_URL || "http://localhost:3000";

async function runAuthTests() {
  console.log(`\n🔒 Running Automated Auth & Security Verification against ${BASE_URL}...`);
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

  const context = await browser.newContext();
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

    // 4. Invalid credentials test
    console.log("➡️ Test 4: Submitting invalid credentials...");
    await page.fill('input[type="email"]', "fakeadmin@luxfocuss.com");
    await page.fill('input[placeholder="••••••••••••"]', "WrongPassword123!");
    await submitButton.click();

    await page.waitForTimeout(1000);
    const bannerError = await page.locator("text=Invalid administrator credentials or account inactive").isVisible();
    if (!bannerError) {
      throw new Error("Expected top banner error for invalid administrator credentials.");
    }
    console.log("✅ PASS: Top-level error banner rendered without leaking DB internals.");

    // 5. Valid Super Admin login test
    console.log("➡️ Test 5: Submitting valid Super Admin credentials...");
    await page.fill('input[type="email"]', "superadmin@luxfocuss.com");
    await page.fill('input[placeholder="••••••••••••"]', "ChangeMeInProd123!");
    await submitButton.click();

    await page.waitForURL("**/admin", { timeout: 10000 });
    console.log("✅ PASS: Successfully authenticated and redirected to /admin.");

    // 6. Verify backoffice layout & Super Admin role badge
    console.log("➡️ Test 6: Verifying Backoffice Layout & Role Badge...");
    const roleBadge = await page.locator("span:has-text('SUPER ADMIN')").isVisible();
    const backofficePill = await page.locator("span:has-text('Backoffice')").isVisible();
    const adminEmail = await page.locator("text=superadmin@luxfocuss.com").isVisible();

    if (!roleBadge || !backofficePill || !adminEmail) {
      throw new Error("Backoffice layout elements or SUPER ADMIN badge missing.");
    }
    console.log("✅ PASS: Backoffice shell verified with SUPER ADMIN role badge.");

    // 7. Verify Sign Out functionality
    console.log("➡️ Test 7: Testing Admin Sign Out...");
    const signOutButton = page.locator('button:has-text("Sign Out")');
    await signOutButton.click();
    await page.waitForURL("**/admin/login", { timeout: 10000 });
    console.log("✅ PASS: Admin session destroyed and redirected to /admin/login.");

    console.log("\n🎉 ALL 7 AUTH & SECURITY VERIFICATION TESTS PASSED SUCCESSFULLY!\n");
  } finally {
    await browser.close();
  }
}

runAuthTests().catch((err) => {
  console.error("❌ Auth test failure:", err);
  process.exit(1);
});
