import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";

export default auth((req) => {
  const { nextUrl } = req;
  const path = nextUrl.pathname;

  const isOnAdminPanel = path.startsWith("/admin") && !path.startsWith("/admin/login");
  const isOnAdminAuth = path === "/admin/login";
  const isAuthenticated = !!req.auth?.user;
  const userRole = (req.auth?.user as any)?.role;
  const isAdminOrSuperAdmin = userRole === "ADMIN" || userRole === "SUPER_ADMIN";

  // 1. Unauthenticated or Non-Admin user accessing /admin/* -> Redirect to /admin/login with callbackUrl
  if (isOnAdminPanel && (!isAuthenticated || !isAdminOrSuperAdmin)) {
    const callbackUrl = encodeURIComponent(path);
    return NextResponse.redirect(new URL(`/admin/login?callbackUrl=${callbackUrl}`, nextUrl));
  }

  // 2. Already Authenticated Admin accessing /admin/login -> Redirect directly to /admin dashboard
  if (isOnAdminAuth && isAuthenticated && isAdminOrSuperAdmin) {
    return NextResponse.redirect(new URL("/admin", nextUrl));
  }

  return NextResponse.next();
});

export const config = {
  // Match all request paths except static assets, internal Next.js files, and public images
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|images|public).*)"],
};
