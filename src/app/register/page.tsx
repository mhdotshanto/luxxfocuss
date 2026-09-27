import { AuthForm } from "@/components/auth-form";

export default function RegisterPage() {
  return (
    <main className="mx-auto max-w-md px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-white/10 bg-[#0b1118] p-8">
        <div className="mb-8 text-center">
          <div className="text-xs uppercase tracking-[0.25em] text-emerald-300">Register</div>
          <h1 className="mt-3 text-3xl font-black tracking-[-0.05em] text-white">Create your account</h1>
        </div>

        <AuthForm mode="register" />
      </div>
    </main>
  );
}
