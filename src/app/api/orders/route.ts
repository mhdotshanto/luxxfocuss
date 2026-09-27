import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { db } from "@/lib/db";

export async function POST(request: Request) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Authentication required." }, { status: 401 });

  try {
    const body = await request.json();
    const productSlug = typeof body.productSlug === "string" ? body.productSlug : "";
    const quantity = Number.isInteger(body.quantity) && body.quantity > 0 && body.quantity <= 10 ? body.quantity : 1;
    const product = await db.product.findUnique({ where: { slug: productSlug } });

    if (!product || !product.active) {
      return NextResponse.json({ error: "Product is unavailable." }, { status: 404 });
    }

    const order = await db.order.create({
      data: {
        userId: user.id,
        totalCents: product.priceCents * quantity,
        status: "PENDING",
        items: { create: { productId: product.id, unitCents: product.priceCents, quantity } },
      },
      include: { items: { include: { product: true } } },
    });

    return NextResponse.json({ order }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Unable to create order." }, { status: 400 });
  }
}
