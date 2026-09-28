"use server";

import { adminLoginSchema, AdminLoginInput } from "@/lib/validations/auth";
import { signIn, signOut } from "@/lib/auth";
import { AuthError } from "next-auth";

export interface ServerActionResponse<T = any> {
  success: boolean;
  message?: string;
  fieldErrors?: Record<string, string[] | string>;
  data?: T;
}

export async function adminLoginAction(
  data: AdminLoginInput & { callbackUrl?: string }
): Promise<ServerActionResponse> {
  // 1. Server-side validation using the shared Zod schema
  const validation = adminLoginSchema.safeParse(data);
  if (!validation.success) {
    return {
      success: false,
      fieldErrors: validation.error.flatten().fieldErrors,
    };
  }

  const { email, password } = validation.data;
  const callbackUrl = data.callbackUrl || "/admin";

  try {
    // 2. Perform NextAuth credentials sign-in
    await signIn("credentials", {
      email,
      password,
      redirectTo: callbackUrl,
    });

    return { success: true };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return {
            success: false,
            message: "Invalid administrator credentials or account inactive.",
          };
        default:
          return {
            success: false,
            message: "Authentication service temporarily unavailable. Please try again.",
          };
      }
    }

    // Next.js redirect errors (isRedirectError) must be re-thrown to allow redirection
    const isRedirect = (error as any)?.digest?.startsWith?.("NEXT_REDIRECT");
    if (isRedirect) {
      throw error;
    }

    // Generic fallback without leaking internal error details
    return {
      success: false,
      message: "An unexpected error occurred during authentication. Please try again.",
    };
  }
}

export async function adminLogoutAction() {
  await signOut({ redirectTo: "/admin/login" });
}
