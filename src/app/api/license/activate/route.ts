import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const key = typeof body.key === "string" ? body.key.trim().toUpperCase() : "";
    const license = await db.license.findUnique({ where: { key } });

    if (!license) return NextResponse.json({ error: "License not found." }, { status: 404 });
    if (license.status !== "ACTIVE") return NextResponse.json({ error: "License is not active." }, { status: 403 });
    if (license.expiresAt && license.expiresAt <= new Date()) return NextResponse.json({ error: "License has expired." }, { status: 403 });
    if (license.activations >= license.allowedDevices) return NextResponse.json({ error: "Activation limit reached." }, { status: 409 });

    const updatedLicense = await db.license.update({
      where: { id: license.id },
      data: { activations: { increment: 1 } },
      select: { id: true, key: true, activations: true, allowedDevices: true, expiresAt: true },
    });

    return NextResponse.json({ activated: true, license: updatedLicense });
  } catch {
    return NextResponse.json({ error: "Invalid activation request." }, { status: 400 });
  }
}
