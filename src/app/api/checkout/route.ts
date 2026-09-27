import Stripe from "stripe";
import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { db } from "@/lib/db";

function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return null;
  return new Stripe(key);
}

export async function POST(request: Request) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Authentication required." }, { status: 401 });

  const stripe = getStripe();
  if (!stripe) {
    return NextResponse.json({ error: "Payments are not configured yet." }, { status: 503 });
  }

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
        provider: "stripe",
        items: { create: { productId: product.id, unitCents: product.priceCents, quantity } },
      },
    });

    const origin = request.headers.get("origin") ?? process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      customer_email: user.email,
      line_items: [{
        quantity,
        price_data: {
          currency: "usd",
          unit_amount: product.priceCents,
          product_data: { name: product.name },
        },
      }],
      metadata: { orderId: order.id },
      success_url: `${origin}/dashboard/orders?payment=success`,
      cancel_url: `${origin}/checkout?payment=cancelled`,
    });

    await db.order.update({ where: { id: order.id }, data: { providerRef: session.id } });
    return NextResponse.json({ url: session.url });
  } catch {
    return NextResponse.json({ error: "Unable to start checkout." }, { status: 400 });
  }
}