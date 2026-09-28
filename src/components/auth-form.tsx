"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Lock, Mail, User, Eye, EyeOff, ArrowRight } from "lucide-react";

export function AuthForm({ mode }: { mode: "login" | "register" }) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch(`/api/auth/${mode}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error ?? "Something went wrong.");
      router.push("/dashboard");
      router.refresh();
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="space-y-4" onSubmit={submit}>
      {mode === "register" ? (
        <div>
          <label className="text-xs font-semibold text-slate-300">Full Name</label>
          <div className="relative mt-1.5">
            <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
              minLength={2}
              className="h-11 w-full rounded-xl border border-white/10 bg-slate-950/70 pl-10 pr-4 text-sm text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
              placeholder="John Doe"
            />
          </div>
        </div>
      ) : null}

      <div>
        <label className="text-xs font-semibold text-slate-300">Email Address</label>
        <div className="relative mt-1.5">
          <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            type="email"
            className="h-11 w-full rounded-xl border border-white/10 bg-slate-950/70 pl-10 pr-4 text-sm text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
            placeholder="trader@domain.com"
          />
        </div>
      </div>

      <div>
        <label className="text-xs font-semibold text-slate-300">Password</label>
        <div className="relative mt-1.5">
          <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            minLength={8}
            type={showPassword ? "text" : "password"}
            className="h-11 w-full rounded-xl border border-white/10 bg-slate-950/70 pl-10 pr-11 text-sm text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
            placeholder="At least 8 characters"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition"
          >
            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {error ? (
        <p role="alert" className="rounded-xl border border-red-400/20 bg-red-500/10 px-4 py-2.5 text-xs text-red-200">
          {error}
        </p>
      ) : null}

      <div className="pt-2">
        <button
          type="submit"
          disabled={loading}
          className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-emerald-400 px-6 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300 disabled:cursor-wait disabled:opacity-60"
        >
          {loading ? "Processing..." : mode === "login" ? "Sign In" : "Create Account"}
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      <div className="pt-2 text-center text-xs text-slate-400">
        {mode === "login" ? (
          <>
            Don&apos;t have an account?{" "}
            <Link href="/register" className="font-semibold text-emerald-400 hover:underline">
              Create one now
            </Link>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <Link href="/login" className="font-semibold text-emerald-400 hover:underline">
              Sign in
            </Link>
          </>
        )}
      </div>
    </form>
  );
}
