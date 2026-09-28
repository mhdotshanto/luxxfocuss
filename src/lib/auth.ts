import { randomBytes } from "node:crypto";
import { cookies } from "next/headers";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { adminLoginSchema } from "@/lib/validations/auth";

/* =========================================================================
   1. NextAuth v5 Beta — Dedicated Administrator Authentication & Sessions
   ========================================================================= */

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: { strategy: "jwt" },
  pages: {
    signIn: "/admin/login",
    error: "/admin/login",
  },
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const parsed = adminLoginSchema.safeParse(credentials);
        if (!parsed.success) return null;

        const normalizedEmail = parsed.data.email.toLowerCase().trim();

        const admin = await db.admin.findUnique({
          where: { email: normalizedEmail },
        });

        // Block non-existent or suspended admin accounts
        if (!admin || admin.isSuspended) return null;

        const passwordsMatch = await bcrypt.compare(parsed.data.password, admin.passwordHash);
        if (!passwordsMatch) return null;

        return {
          id: admin.id,
          name: admin.name,
          email: admin.email,
          role: admin.role,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as any).role;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user && token) {
        session.user.id = token.id as string;
        (session.user as any).role = token.role as string;
      }
      return session;
    },
  },
});

export async function getCurrentAdmin() {
  const session = await auth();
  if (!session?.user) return null;
  const role = (session.user as any)?.role;
  if (role !== "ADMIN" && role !== "SUPER_ADMIN") return null;
  return session.user;
}

/* =========================================================================
   2. Storefront Customer Session Helpers (Orders, Checkout, User Dashboard)
   ========================================================================= */

const customerSessionDurationMs = 1000 * 60 * 60 * 24 * 30;
const customerCookieName = process.env.SESSION_COOKIE_NAME ?? "luxfocuss_session";

export async function createSession(userId: string) {
  const token = randomBytes(32).toString("hex");
  const expiresAt = new Date(Date.now() + customerSessionDurationMs);

  await db.session.create({ data: { token, userId, expiresAt } });
  const cookieStore = await cookies();
  cookieStore.set(customerCookieName, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    expires: expiresAt,
    path: "/",
  });
}

export async function getCurrentUser() {
  const token = (await cookies()).get(customerCookieName)?.value;
  if (!token) return null;

  const session = await db.session.findUnique({
    where: { token },
    include: { user: true },
  });

  if (!session || session.expiresAt <= new Date()) return null;
  return session.user;
}
