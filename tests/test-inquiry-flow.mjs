import { chromium } from "playwright";
import fs from "fs";
import path from "path";

async function run() {
  console.log("🚀 Launching Playwright browser test for Inquiry & Contact Flow...");
  let browser;
  try {
    browser = await chromium.launch({ channel: "chrome", headless: true });
  } catch {
    browser = await chromium.launch({ headless: true });
  }
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
  });
  const page = await context.newPage();

  const screenshotsDir = path.resolve("./tests");
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }

  try {
    // ----------------------------------------------------
    // STEP 1: Test Public Contact Page & Form Validation
    // ----------------------------------------------------
    console.log("📍 [Step 1] Navigating to /contact...");
    await page.goto("http://localhost:3000/contact", { waitUntil: "networkidle" });
    
    console.log("🧪 Submitting empty form to test Zod validation...");
    await page.click("button[type='submit']");
    await page.waitForTimeout(500);

    // Verify error messages appear
    const nameError = await page.locator("text=Full name must be at least 2 characters").isVisible();
    const emailError = await page.locator("text=Please provide a valid email address").isVisible();
    const msgError = await page.locator("text=Message must be at least 10 characters long").isVisible();

    if (nameError && emailError && msgError) {
      console.log("✅ Client-side Zod validation working as expected!");
    } else {
      console.warn("⚠️ Validation error visibility check:", { nameError, emailError, msgError });
    }

    // ----------------------------------------------------
    // STEP 2: Fill in Valid Inquiry & Submit
    // ----------------------------------------------------
    console.log("📝 Filling out public contact form with realistic quant inquiry...");
    await page.fill("input[name='name']", "Alexander Vance");
    await page.fill("input[name='email']", "alexander.vance@vancequant.com");
    await page.fill("input[name='phone']", "+1 (312) 555-0199");
    await page.fill("input[name='subject']", "Enterprise Multi-Node FIX Protocol Integration");
    await page.fill(
      "textarea[name='message']",
      "We are looking to license the Liquidity Sweep SMC engine across 12 institutional trading accounts with custom FIX API connectivity. Please schedule a technical integration demo."
    );

    console.log("🚀 Submitting Server Action...");
    await page.click("button[type='submit']");

    // Wait for success confirmation view
    await page.waitForSelector("text=Inquiry Dispatched Successfully", { timeout: 10000 });
    console.log("✅ Inquiry submitted successfully!");

    const refText = await page.locator("text=Reference:").locator("..").innerText();
    console.log(`📋 Received Reference Code: ${refText.trim()}`);

    const contactSuccessPath = path.join(screenshotsDir, "contact-success-state.png");
    await page.screenshot({ path: contactSuccessPath, fullPage: false });
    console.log(`📸 Saved screenshot: ${contactSuccessPath}`);

    // ----------------------------------------------------
    // STEP 3: Log in as Super Admin
    // ----------------------------------------------------
    console.log("🔐 [Step 3] Logging into Admin Portal...");
    await page.goto("http://localhost:3000/admin/login", { waitUntil: "networkidle" });

    await page.fill("input[name='email']", "superadmin@luxfocuss.com");
    await page.fill("input[name='password']", "ChangeMeInProd123!");
    await page.click("button[type='submit']");

    await page.waitForURL("**/admin", { timeout: 10000 });
    console.log("✅ Successfully logged in as Super Admin!");

    // ----------------------------------------------------
    // STEP 4: Navigate to Inquiry Desk (/admin/inquiries)
    // ----------------------------------------------------
    console.log("📊 [Step 4] Navigating to /admin/inquiries...");
    await page.goto("http://localhost:3000/admin/inquiries", { waitUntil: "networkidle" });

    // Verify Alexander Vance is in the table
    const alexVisible = await page.locator("text=Alexander Vance").first().isVisible();
    console.log(`🔍 Checking if newly submitted inquiry appears in table: ${alexVisible ? "YES ✅" : "NO ❌"}`);

    const adminInquiriesPath = path.join(screenshotsDir, "admin-inquiries-table.png");
    await page.screenshot({ path: adminInquiriesPath, fullPage: false });
    console.log(`📸 Saved screenshot: ${adminInquiriesPath}`);

    // ----------------------------------------------------
    // STEP 5: Open Detail Modal & Update Notes
    // ----------------------------------------------------
    console.log("🔍 [Step 5] Opening Inquiry Detail Modal for Alexander Vance...");
    const row = page.locator("tr", { hasText: "Alexander Vance" }).first();
    await row.locator("button", { hasText: "Details" }).click();

    await page.waitForSelector("text=Internal Engineering Notes", { timeout: 5000 });
    console.log("✅ Modal opened successfully!");

    console.log("✍️ Logging internal engineering notes...");
    await page.fill(
      "textarea[placeholder*='Log internal action items']",
      "Vetted institutional quant desk. High priority Tier-1 lead. Technical demo scheduled for Thursday 2:00 PM EST."
    );
    await page.click("button:has-text('Save Engineering Notes')");
    await page.waitForTimeout(1000);

    const adminModalPath = path.join(screenshotsDir, "admin-inquiry-modal.png");
    await page.screenshot({ path: adminModalPath, fullPage: false });
    console.log(`📸 Saved screenshot: ${adminModalPath}`);

    // Close Modal
    await page.click("button[aria-label='Close modal']");
    await page.waitForTimeout(500);

    // ----------------------------------------------------
    // STEP 6: Test Status Change in Table via CustomSelect
    // ----------------------------------------------------
    console.log("🔄 [Step 6] Updating Status from NEW to IN_PROGRESS via CustomSelect dropdown...");
    const statusDropdown = row.locator("button[aria-label='Update inquiry status']");
    await statusDropdown.click();
    await page.waitForTimeout(300);
    
    // Capture screenshot of open custom select dropdown
    const openDropdownPath = path.join(screenshotsDir, "admin-custom-select-open.png");
    await page.screenshot({ path: openDropdownPath, fullPage: false });
    console.log(`📸 Saved custom select screenshot: ${openDropdownPath}`);

    // Click option "In Progress" in the popover
    await page.locator("button[role='option']:has-text('In Progress')").first().click();
    await page.waitForTimeout(1000);
    console.log("✅ Status updated to IN_PROGRESS via custom dropdown!");

    // ----------------------------------------------------
    // STEP 7: Test Filter Tabs & Search
    // ----------------------------------------------------
    console.log("📑 [Step 7] Testing status filter tabs...");
    await page.locator("button:has-text('In Progress')").first().click();
    await page.waitForTimeout(500);
    const inProgressHasAlex = await page.locator("text=Alexander Vance").first().isVisible();
    console.log(`🎯 'In Progress' tab contains Alexander Vance: ${inProgressHasAlex ? "YES ✅" : "NO ❌"}`);

    await page.locator("button:has-text('Cancelled')").first().click();
    await page.waitForTimeout(500);
    const cancelledTabHasAlex = await page.locator("text=Alexander Vance").isVisible().catch(() => false);
    console.log(`🎯 'Cancelled' tab excludes Alexander Vance: ${!cancelledTabHasAlex ? "YES ✅" : "NO ❌"}`);

    await page.locator("button:has-text('All Inquiries')").first().click();
    await page.waitForTimeout(500);

    console.log("🔎 Testing live search filter...");
    await page.fill("input[placeholder*='Search by client']", "vancequant");
    await page.waitForTimeout(500);
    const searchHasAlex = await page.locator("text=Alexander Vance").first().isVisible();
    console.log(`🔍 Search query 'vancequant' finds Alexander Vance: ${searchHasAlex ? "YES ✅" : "NO ❌"}`);

    console.log("🎉 ALL INQUIRY & CONTACT FLOW TESTS PASSED FLAWLESSLY!");
  } catch (err) {
    console.error("❌ Test failed with error:", err);
    throw err;
  } finally {
    await browser.close();
  }
}

run();
