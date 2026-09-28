import { PrismaClient, AdminRole } from "@prisma/client";
import bcrypt from "bcryptjs";

const db = new PrismaClient();

const products = [
  ["prod-gold-hunter-ea", "gold-hunter-ea", "Gold Hunter EA", "MT5", "EA", 12900, "2.4.1"],
  ["prod-liquidity-pro", "liquidity-pro", "Liquidity Pro", "TradingView", "Indicator", 4900, "1.8.0"],
  ["prod-smart-structure-pro", "smart-structure-pro", "Smart Structure Pro", "MT5", "Indicator", 7900, "3.1.0"],
  ["prod-trend-velocity", "trend-velocity", "Trend Velocity", "MT5", "Trading System", 19900, "1.5.2"],
  ["prod-session-guard", "session-guard", "Session Guard", "MT4", "Tool", 3900, "1.2.6"],
  ["prod-vps-elite", "vps-elite", "VPS Elite", "MT5", "VPS", 2900, "Managed plan"],
  ["prod-smc-pro", "smc-pro", "SMC PRO", "TradingView", "Indicator", 6900, "1.0.0"],
  ["prod-confluence-pro", "confluence-pro", "Confluence PRO", "TradingView", "Trading System", 7900, "1.0.0"],
  ["prod-orderflow-pro", "orderflow-pro", "OrderFlow PRO", "TradingView", "Indicator", 8900, "1.0.0"],
  ["prod-trading-engine-ea", "trading-engine-ea", "Trading Engine EA", "MT5", "EA", 15900, "1.0.0"],
  ["prod-liquidity-scanner", "liquidity-scanner", "Liquidity Scanner", "TradingView", "Tool", 5900, "1.0.0"],
  ["prod-prop-guard", "prop-guard", "Prop Guard", "TradingView", "Tool", 4900, "1.0.0"],
  ["prod-gold-pro", "gold-pro", "Gold PRO", "TradingView", "Indicator", 6900, "1.0.0"],
  ["prod-session-pro", "session-pro", "Session PRO", "TradingView", "Tool", 4900, "1.0.0"],
  ["prod-fvg-pro", "fvg-pro", "FVG PRO", "TradingView", "Indicator", 5900, "1.0.0"],
  ["prod-reversal-pro", "reversal-pro", "Reversal PRO", "TradingView", "Trading System", 6900, "1.0.0"],
  ["prod-risk-manager", "risk-manager", "Risk Manager", "TradingView", "Tool", 3900, "1.0.0"],
  ["prod-backtest-pro", "backtest-pro", "Backtest PRO", "TradingView", "Tool", 9900, "1.0.0"],
  ["prod-ai-chart-analyzer", "ai-chart-analyzer", "AI Chart Analyzer", "TradingView", "Tool", 11900, "1.0.0"],
  ["prod-luxfocus-terminal", "luxfocus-terminal", "LuxFocus Terminal", "TradingView", "Trading System", 14900, "1.0.0"],
] as const;

async function main() {
  console.log("🌱 Starting database seeding...");

  // 1. Seed Super Admin
  const superAdminEmail = (process.env.SUPER_ADMIN_EMAIL || "superadmin@luxfocuss.com").toLowerCase().trim();
  const superAdminPassword = process.env.SUPER_ADMIN_PASSWORD || "ChangeMeInProd123!";
  const superAdminName = process.env.SUPER_ADMIN_NAME || "Super Administrator";

  const passwordHash = await bcrypt.hash(superAdminPassword, 12);

  const superAdmin = await db.admin.upsert({
    where: { email: superAdminEmail },
    update: {
      name: superAdminName,
      role: AdminRole.SUPER_ADMIN,
      isSuspended: false,
    },
    create: {
      email: superAdminEmail,
      name: superAdminName,
      passwordHash,
      role: AdminRole.SUPER_ADMIN,
      isSuspended: false,
    },
  });
  console.log(`✅ Super Admin provisioned: ${superAdmin.email} [${superAdmin.role}]`);

  // 2. Seed Products
  for (const [id, slug, name, platform, category, priceCents, version] of products) {
    await db.product.upsert({
      where: { id },
      update: { name, platform, category, priceCents, version, active: true },
      create: { id, slug, name, platform, category, priceCents, version },
    });
  }
  console.log(`✅ Seeded ${products.length} marketplace products.`);

  // 3. Seed Demo Customer User
  const demoUserPasswordHash = await bcrypt.hash("DemoTrader!2026", 10);
  const user = await db.user.upsert({
    where: { email: "demo@luxfocuss.local" },
    update: {},
    create: {
      name: "Demo Trader",
      email: "demo@luxfocuss.local",
      passwordHash: demoUserPasswordHash,
    },
  });

  const product = await db.product.findUniqueOrThrow({ where: { id: "prod-gold-hunter-ea" } });

  const existingOrder = await db.order.findFirst({
    where: { userId: user.id },
  });

  if (!existingOrder) {
    const order = await db.order.create({
      data: {
        userId: user.id,
        status: "PAID",
        totalCents: product.priceCents,
        provider: "demo",
        providerRef: "demo-order-10421",
        items: { create: { productId: product.id, unitCents: product.priceCents } },
      },
    });

    await db.license.create({
      data: {
        key: "LUXF-DEMO-GOLD-2026",
        userId: user.id,
        productId: product.id,
        orderId: order.id,
        expiresAt: new Date("2026-12-25T23:59:59.000Z"),
        allowedDevices: 2,
      },
    });
    console.log("✅ Seeded demo customer order and license.");
  }

  console.log("🎉 Database seeding complete!");
}

main()
  .catch((e) => {
    console.error("❌ Seed error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
