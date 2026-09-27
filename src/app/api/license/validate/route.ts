import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const key = typeof body.key === "string" ? body.key.trim().toUpperCase() : "";
    const license = await db.license.findUnique({
      where: { key },
      include: { product: { select: { name: true, slug: true, platform: true, version: true } } },
    });

    if (!license) {
      return NextResponse.json({ valid: false, status: "NOT_FOUND" }, { status: 404 });
    }

    const expired = license.expiresAt !== null && license.expiresAt <= new Date();
    const valid = license.status === "ACTIVE" && !expired;
    const status = expired ? "EXPIRED" : license.status;

    return NextResponse.json({
      valid,
      status,
      licenseId: license.id,
      product: license.product,
      expiresAt: license.expiresAt,
      activations: license.activations,
      allowedDevices: license.allowedDevices,
    }, { status: valid ? 200 : 403 });
  } catch {
    return NextResponse.json({ error: "Invalid license request." }, { status: 400 });
  }
}
