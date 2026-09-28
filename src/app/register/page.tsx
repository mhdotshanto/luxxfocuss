import { AuthForm } from "@/components/auth-form";
import { UserPlus } from "lucide-react";

export default function RegisterPage() {
  return (
    <main className="mx-auto max-w-md px-4 py-10 sm:px-6 sm:py-16">
      <div className="rounded-[2rem] border border-white/10 bg-[#0b1118]/80 p-6 sm:p-8 backdrop-blur shadow-2xl">
        <div className="mb-6 text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-0.5 text-xs font-mono uppercase tracking-[0.2em] text-emerald-300">
            <UserPlus className="h-3.5 w-3.5" /> Registration
          </div>
          <h1 className="mt-3 text-2xl font-black tracking-[-0.05em] text-white sm:text-3xl">Create Trader Account</h1>
          <p className="mt-1 text-xs text-slate-400">Join the Luxfocuss quantitative community</p>
        </div>

        <AuthForm mode="register" />
      </div>
    </main>
  );
}
