"use client";

import { Suspense, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, Lock, Mail, ShieldAlert, ArrowRight, Loader2 } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { adminLoginSchema, AdminLoginInput } from "@/lib/validations/auth";
import { adminLoginAction } from "@/app/actions/auth-actions";

function AdminLoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/admin";

  const [showPassword, setShowPassword] = useState(false);
  const [globalError, setGlobalError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<AdminLoginInput>({
    resolver: zodResolver(adminLoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onSubmit",
  });

  const onSubmit = async (values: AdminLoginInput) => {
    setGlobalError(null);

    const result = await adminLoginAction({
      ...values,
      callbackUrl,
    });

    if (!result.success) {
      // 1. Map field-specific validation errors directly to inputs
      if (result.fieldErrors) {
        Object.entries(result.fieldErrors).forEach(([field, message]) => {
          const errorMessage = Array.isArray(message) ? message[0] : message;
          if (errorMessage) {
            setError(field as keyof AdminLoginInput, {
              type: "server",
              message: errorMessage,
            });
          }
        });
      }

      // 2. Set top-level general error for authentication or server failures
      if (result.message) {
        setGlobalError(result.message);
      }
    }
  };

  return (
    <div className="mt-4 rounded-3xl border border-white/10 bg-[#0b1118]/90 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
      {/* Top-Level General Error Banner */}
      {globalError && (
        <div className="mb-6 flex items-start gap-3 rounded-2xl border border-rose-500/30 bg-rose-500/10 p-4 text-xs text-rose-300 animate-in fade-in slide-in-from-top-2 duration-200">
          <ShieldAlert className="h-5 w-5 shrink-0 text-rose-400" />
          <div className="leading-relaxed">{globalError}</div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
        {/* Email Field */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
            Institutional Email
          </label>
          <div className="relative mt-2">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-500">
              <Mail className="h-4 w-4" />
            </div>
            <input
              {...register("email")}
              type="email"
              autoComplete="email"
              placeholder="admin@luxfocuss.com"
              className={`block h-11 w-full rounded-xl border bg-slate-950/70 pl-10 pr-4 text-sm text-white placeholder:text-slate-600 transition focus:outline-none focus:ring-1 ${errors.email
                ? "border-rose-500/60 focus:border-rose-500 focus:ring-rose-500/30"
                : "border-white/10 focus:border-emerald-400 focus:ring-emerald-400"
                }`}
            />
          </div>
          {/* Field-Specific Error */}
          {errors.email?.message && (
            <p className="mt-1.5 text-xs font-medium text-rose-400 animate-in fade-in duration-150">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Password Field with Show/Hide Toggle */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
            Security Passkey
          </label>
          <div className="relative mt-2">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-500">
              <Lock className="h-4 w-4" />
            </div>
            <input
              {...register("password")}
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              placeholder="••••••••••••"
              className={`block h-11 w-full rounded-xl border bg-slate-950/70 pl-10 pr-11 text-sm text-white placeholder:text-slate-600 transition focus:outline-none focus:ring-1 ${errors.password
                ? "border-rose-500/60 focus:border-rose-500 focus:ring-rose-500/30"
                : "border-white/10 focus:border-emerald-400 focus:ring-emerald-400"
                }`}
            />
            {/* Interactive Password Visibility Toggle */}
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-slate-400 hover:text-white transition focus:outline-none"
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          </div>
          {/* Field-Specific Error */}
          {errors.password?.message && (
            <p className="mt-1.5 text-xs font-medium text-rose-400 animate-in fade-in duration-150">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Submit Action */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-emerald-400 px-6 text-sm font-bold text-slate-950 shadow-[0_0_25px_rgba(16,185,129,0.25)] transition hover:bg-emerald-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Verifying Credentials...</span>
              </>
            ) : (
              <>
                <span>Authenticate Session</span>
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </button>
        </div>
      </form>

      {/* Security Notice */}
      <div className="mt-6 border-t border-white/5 pt-4 text-center">
        <p className="text-[11px] text-slate-400">
          Access logs, IP geolocation, and cryptographic sessions are monitored for security compliance.
        </p>
      </div>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <div className="flex min-h-screen flex-col justify-center bg-[#05070b] px-4 py-12 sm:px-6 lg:px-8">
      {/* Background Ambience */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[450px] w-[600px] rounded-full bg-emerald-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[350px] w-[450px] rounded-full bg-cyan-500/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto w-full max-w-md">
        {/* Header Branding */}
        <div className="flex flex-col items-center text-center">
          <Link href="/" className="inline-flex items-center gap-2.5 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-400/30 bg-emerald-500/10 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.15)] transition group-hover:border-emerald-400/50">
              <Lock className="h-5 w-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              LUX<span className="text-emerald-400">FOCUSS</span>
            </span>
          </Link>

          <h1 className="mt-3 text-2xl font-black tracking-[-0.03em] text-white sm:text-3xl">
            Institutional Sign In
          </h1>
          <p className="mt-1.5 text-xs text-slate-400">
            Restricted environment. Authorized operations personnel only.
          </p>
        </div>

        {/* Form Wrapped in Suspense Boundary */}
        <Suspense
          fallback={
            <div className="mt-8 flex h-64 items-center justify-center rounded-3xl border border-white/10 bg-[#0b1118]/90">
              <Loader2 className="h-6 w-6 animate-spin text-emerald-400" />
            </div>
          }
        >
          <AdminLoginForm />
        </Suspense>

        {/* Back to Public Storefront */}
        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-xs text-slate-400 hover:text-white transition"
          >
            ← Return to Public Trading Marketplace
          </Link>
        </div>
      </div>
    </div>
  );
}
