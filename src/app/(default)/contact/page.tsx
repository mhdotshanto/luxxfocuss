"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Mail,
  Clock,
  ShieldAlert,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Phone,
  MessageSquare,
  Sparkles,
  ArrowRight,
  RotateCcw,
} from "lucide-react";
import { inquiryFormSchema, InquiryFormInput } from "@/lib/validations/inquiry";
import { createInquiryAction } from "@/app/actions/inquiry-actions";

export default function ContactPage() {
  const [isPending, startTransition] = useTransition();
  const [serverError, setServerError] = useState<string | null>(null);
  const [submittedData, setSubmittedData] = useState<{
    referenceCode: string;
    name: string;
    email: string;
    subject: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm<InquiryFormInput>({
    resolver: zodResolver(inquiryFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: InquiryFormInput) => {
    setServerError(null);

    startTransition(async () => {
      const response = await createInquiryAction(data);

      if (!response.success) {
        if (response.errors) {
          for (const [field, message] of Object.entries(response.errors)) {
            setError(field as keyof InquiryFormInput, {
              type: "server",
              message,
            });
          }
        }
        setServerError(
          response.message || "Failed to submit inquiry. Please try again."
        );
        return;
      }

      // Success
      setSubmittedData({
        referenceCode: response.data?.referenceCode || "INQ-CONFIRMED",
        name: data.name,
        email: data.email,
        subject: data.subject,
      });
      reset();
    });
  };

  const handleResetForm = () => {
    setSubmittedData(null);
    setServerError(null);
    reset();
  };

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
      {/* Header */}
      <div className="mb-10 text-center sm:mb-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3.5 py-1 text-xs font-mono uppercase tracking-[0.2em] text-emerald-300">
          <Mail className="h-4 w-4" /> Client & Engineering Desk
        </div>
        <h1 className="mt-4 text-3xl font-black tracking-[-0.05em] text-white sm:text-4xl lg:text-5xl">
          Get in Touch with Our Engineering Desk
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
          Have questions regarding TradingView script activation, EA deployment,
          custom parameter tuning, or institutional licenses?
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Support Channels Sidebar */}
        <div className="flex flex-col justify-between rounded-[2rem] border border-white/10 bg-[#0b1118]/80 p-6 sm:p-8 backdrop-blur lg:col-span-5">
          <div>
            <h2 className="text-xl font-bold text-white">Direct Support Channels</h2>
            <p className="mt-2 text-xs leading-relaxed text-slate-300 sm:text-sm">
              Our technical desk operates around the clock during active global financial market sessions (Sunday 5:00 PM EST – Friday 5:00 PM EST).
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 transition hover:border-emerald-400/30">
                <div className="flex items-center gap-3.5">
                  <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-500/10 text-emerald-400">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                      Trading Desk Support
                    </div>
                    <div className="truncate text-sm font-semibold text-white">
                      support@luxfocuss.com
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 transition hover:border-cyan-400/30">
                <div className="flex items-center gap-3.5">
                  <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-500/10 text-cyan-400">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                      Response SLA
                    </div>
                    <div className="text-sm font-semibold text-white">
                      &lt; 4 Hours for Active License Holders
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 transition hover:border-violet-400/30">
                <div className="flex items-center gap-3.5">
                  <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/10 text-violet-400">
                    <ShieldAlert className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                      Institutional & Prop Firms
                    </div>
                    <div className="truncate text-sm font-semibold text-white">
                      enterprise@luxfocuss.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-emerald-400/20 bg-emerald-500/5 p-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-300">
              <Sparkles className="h-3.5 w-3.5" /> Direct Engineer Dispatch
            </div>
            <p className="mt-1 text-[11px] leading-relaxed text-slate-400">
              Inquiries are routed directly to quantitative developers specialized in MQL5, Pine Script v5, and broker API integration.
            </p>
          </div>
        </div>

        {/* Contact Form / Success View */}
        <div className="rounded-[2rem] border border-white/10 bg-[#0b1118]/80 p-6 sm:p-8 backdrop-blur lg:col-span-7">
          {submittedData ? (
            /* Success State Confirmation Screen */
            <div className="flex flex-col items-center justify-center py-8 text-center animate-in fade-in zoom-in-95 duration-300">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-400/30 bg-emerald-500/10 text-emerald-400 shadow-[0_0_35px_rgba(16,185,129,0.25)]">
                <CheckCircle2 className="h-8 w-8" />
              </div>

              <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/15 px-4 py-1 font-mono text-xs font-bold text-emerald-300">
                <span>Reference:</span>
                <span className="text-white">{submittedData.referenceCode}</span>
              </div>

              <h2 className="mt-4 text-2xl font-black text-white sm:text-3xl">
                Inquiry Dispatched Successfully
              </h2>

              <p className="mt-2 max-w-md text-xs leading-relaxed text-slate-300 sm:text-sm">
                Thank you, <span className="font-semibold text-white">{submittedData.name}</span>. An engineering desk specialist will review your request regarding <span className="font-semibold text-emerald-300">&ldquo;{submittedData.subject}&rdquo;</span> and follow up at <span className="font-semibold text-white">{submittedData.email}</span>.
              </p>

              <div className="mt-6 w-full max-w-md rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-left">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Status:</span>
                  <span className="font-mono font-bold text-emerald-400">QUEUED (NEW)</span>
                </div>
                <div className="mt-2 flex items-center justify-between text-xs text-slate-400">
                  <span>Target Response:</span>
                  <span className="text-slate-200">&lt; 4 Hours</span>
                </div>
              </div>

              <div className="mt-8">
                <button
                  type="button"
                  onClick={handleResetForm}
                  className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-2.5 text-xs font-semibold text-white transition hover:border-emerald-400/40 hover:bg-white/10"
                >
                  <RotateCcw className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Send Another Message</span>
                </button>
              </div>
            </div>
          ) : (
            /* Active Interactive Form */
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
              <div>
                <h2 className="text-xl font-bold text-white">Send Us a Direct Message</h2>
                <p className="mt-1 text-xs text-slate-400">
                  Fill out the parameters below and our desk will respond with technical specifics.
                </p>
              </div>

              {serverError && (
                <div className="flex items-start gap-3 rounded-xl border border-rose-500/30 bg-rose-500/10 p-3 text-xs text-rose-300 animate-in fade-in">
                  <AlertCircle className="h-4 w-4 shrink-0 text-rose-400 mt-0.5" />
                  <span>{serverError}</span>
                </div>
              )}

              {/* Name & Email Grid */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 pt-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-300">
                    Your Full Name <span className="text-emerald-400">*</span>
                  </label>
                  <input
                    {...register("name")}
                    type="text"
                    placeholder="Marcus Vance"
                    className={`mt-1.5 h-11 w-full rounded-xl border bg-slate-950/70 px-4 text-sm text-white placeholder:text-slate-600 transition focus:outline-none focus:ring-1 ${
                      errors.name
                        ? "border-rose-500/60 focus:border-rose-500 focus:ring-rose-500/30"
                        : "border-white/10 focus:border-emerald-400 focus:ring-emerald-400"
                    }`}
                  />
                  {errors.name?.message && (
                    <p className="mt-1 text-xs font-medium text-rose-400">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300">
                    Email Address <span className="text-emerald-400">*</span>
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="marcus@vanguardquants.com"
                    className={`mt-1.5 h-11 w-full rounded-xl border bg-slate-950/70 px-4 text-sm text-white placeholder:text-slate-600 transition focus:outline-none focus:ring-1 ${
                      errors.email
                        ? "border-rose-500/60 focus:border-rose-500 focus:ring-rose-500/30"
                        : "border-white/10 focus:border-emerald-400 focus:ring-emerald-400"
                    }`}
                  />
                  {errors.email?.message && (
                    <p className="mt-1 text-xs font-medium text-rose-400">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Phone & Subject Grid */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-300">
                    Phone / WhatsApp <span className="text-slate-500 font-normal">(Optional)</span>
                  </label>
                  <div className="relative mt-1.5">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-500">
                      <Phone className="h-3.5 w-3.5" />
                    </div>
                    <input
                      {...register("phone")}
                      type="tel"
                      placeholder="+1 (555) 234-5678"
                      className={`h-11 w-full rounded-xl border bg-slate-950/70 pl-9 pr-4 text-sm text-white placeholder:text-slate-600 transition focus:outline-none focus:ring-1 ${
                        errors.phone
                          ? "border-rose-500/60 focus:border-rose-500 focus:ring-rose-500/30"
                          : "border-white/10 focus:border-emerald-400 focus:ring-emerald-400"
                      }`}
                    />
                  </div>
                  {errors.phone?.message && (
                    <p className="mt-1 text-xs font-medium text-rose-400">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300">
                    Subject / Product Inquired <span className="text-emerald-400">*</span>
                  </label>
                  <input
                    {...register("subject")}
                    type="text"
                    placeholder="e.g. Gold Hunter EA Multi-Seat License"
                    className={`mt-1.5 h-11 w-full rounded-xl border bg-slate-950/70 px-4 text-sm text-white placeholder:text-slate-600 transition focus:outline-none focus:ring-1 ${
                      errors.subject
                        ? "border-rose-500/60 focus:border-rose-500 focus:ring-rose-500/30"
                        : "border-white/10 focus:border-emerald-400 focus:ring-emerald-400"
                    }`}
                  />
                  {errors.subject?.message && (
                    <p className="mt-1 text-xs font-medium text-rose-400">
                      {errors.subject.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Message Details */}
              <div>
                <label className="block text-xs font-semibold text-slate-300">
                  Message Details <span className="text-emerald-400">*</span>
                </label>
                <textarea
                  {...register("message")}
                  rows={4}
                  placeholder="Please provide specifics regarding your algorithmic strategy, error logs, broker environment, or licensing specifications..."
                  className={`mt-1.5 w-full rounded-xl border bg-slate-950/70 p-4 text-sm text-white placeholder:text-slate-600 transition focus:outline-none focus:ring-1 ${
                    errors.message
                      ? "border-rose-500/60 focus:border-rose-500 focus:ring-rose-500/30"
                      : "border-white/10 focus:border-emerald-400 focus:ring-emerald-400"
                  }`}
                />
                {errors.message?.message && (
                  <p className="mt-1 text-xs font-medium text-rose-400">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isPending}
                  className="inline-flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-emerald-400 px-8 text-sm font-bold text-slate-950 shadow-[0_0_25px_rgba(16,185,129,0.25)] transition hover:bg-emerald-300 disabled:opacity-50 disabled:cursor-not-allowed sm:w-auto"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Transmitting Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>Send Direct Message</span>
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
