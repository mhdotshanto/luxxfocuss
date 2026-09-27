import Stripe from "stripe";
import { randomBytes } from "node:crypto";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";

function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return null;
  return new Stripe(key);
}

export async function POST(request: Request) {
  const signature = request.headers.get("stripe-signature");
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  const stripe = getStripe();
  if (!signature || !secret || !stripe) {
    return NextResponse.json({ error: "Webhook is not configured." }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(await request.text(), signature, secret);
  } catch {
    return NextResponse.json({ error: "Invalid webhook signature." }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const orderId = session.metadata?.orderId;
    if (orderId) {
      const order = await db.order.findUnique({ where: { id: orderId }, include: { items: true } });
      if (order && order.status !== "PAID") {
        await db.$transaction(async (transaction) => {
          await transaction.order.update({ where: { id: order.id }, data: { status: "PAID", providerRef: session.id } });
          for (const item of order.items) {
            for (let index = 0; index < item.quantity; index += 1) {
              await transaction.license.create({
                data: {
                  key: `LUXF-${randomBytes(6).toString("hex").toUpperCase()}`,
                  userId: order.userId,
                  productId: item.productId,
                  orderId: order.id,
                  allowedDevices: 1,
                },
              });
            }
          }
        });
      }
    }
  }

  return NextResponse.json({ received: true });
}