"use client";

import { useState, useTransition, useMemo, useEffect } from "react";
import {
  MessageSquare,
  Search,
  Filter,
  CheckCircle2,
  Clock,
  UserCheck,
  XCircle,
  Sparkles,
  Phone,
  Mail,
  Calendar,
  Trash2,
  Eye,
  Edit3,
  ExternalLink,
  ChevronDown,
  Loader2,
  AlertTriangle,
  X,
  Send,
  Save,
  Copy,
  Check,
} from "lucide-react";
import {
  updateInquiryStatusAction,
  updateInquiryNotesAction,
  deleteInquiryAction,
} from "@/app/actions/inquiry-actions";
import { CustomSelect, type SelectOption } from "@/components/dropdown";

export type InquiryStatus = "NEW" | "CONTACTED" | "IN_PROGRESS" | "COMPLETED" | "CANCELLED";

export interface InquiryItem {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  subject: string | null;
  message: string;
  status: InquiryStatus;
  notes: string | null;
  createdAt: Date | string;
  updatedAt: Date | string;
}

interface InquiryManagementTableProps {
  inquiries: InquiryItem[];
}

const statusConfig: Record<
  InquiryStatus,
  { label: string; bg: string; text: string; border: string; icon: any }
> = {
  NEW: {
    label: "New",
    bg: "bg-emerald-500/15",
    text: "text-emerald-300",
    border: "border-emerald-400/30",
    icon: Sparkles,
  },
  CONTACTED: {
    label: "Contacted",
    bg: "bg-cyan-500/15",
    text: "text-cyan-300",
    border: "border-cyan-400/30",
    icon: UserCheck,
  },
  IN_PROGRESS: {
    label: "In Progress",
    bg: "bg-amber-500/15",
    text: "text-amber-300",
    border: "border-amber-400/30",
    icon: Clock,
  },
  COMPLETED: {
    label: "Completed",
    bg: "bg-purple-500/15",
    text: "text-purple-300",
    border: "border-purple-400/30",
    icon: CheckCircle2,
  },
  CANCELLED: {
    label: "Cancelled",
    bg: "bg-slate-800/60",
    text: "text-slate-400",
    border: "border-slate-700/50",
    icon: XCircle,
  },
};

const statusSelectOptions: SelectOption<InquiryStatus>[] = [
  {
    value: "NEW",
    label: "New",
    icon: Sparkles,
    bg: "bg-emerald-500/15",
    text: "text-emerald-300",
    border: "border-emerald-400/30",
  },
  {
    value: "CONTACTED",
    label: "Contacted",
    icon: UserCheck,
    bg: "bg-cyan-500/15",
    text: "text-cyan-300",
    border: "border-cyan-400/30",
  },
  {
    value: "IN_PROGRESS",
    label: "In Progress",
    icon: Clock,
    bg: "bg-amber-500/15",
    text: "text-amber-300",
    border: "border-amber-400/30",
  },
  {
    value: "COMPLETED",
    label: "Completed",
    icon: CheckCircle2,
    bg: "bg-purple-500/15",
    text: "text-purple-300",
    border: "border-purple-400/30",
  },
  {
    value: "CANCELLED",
    label: "Cancelled",
    icon: XCircle,
    bg: "bg-slate-800/60",
    text: "text-slate-400",
    border: "border-slate-700/50",
  },
];

const filterTabs: { id: "ALL" | InquiryStatus; label: string }[] = [
  { id: "ALL", label: "All Inquiries" },
  { id: "NEW", label: "New" },
  { id: "CONTACTED", label: "Contacted" },
  { id: "IN_PROGRESS", label: "In Progress" },
  { id: "COMPLETED", label: "Completed" },
  { id: "CANCELLED", label: "Cancelled" },
];

export function InquiryManagementTable({ inquiries: initialInquiries }: InquiryManagementTableProps) {
  const [inquiries, setInquiries] = useState<InquiryItem[]>(initialInquiries);
  const [selectedStatusTab, setSelectedStatusTab] = useState<"ALL" | InquiryStatus>("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedInquiry, setSelectedInquiry] = useState<InquiryItem | null>(null);
  const [notesDraft, setNotesDraft] = useState("");
  const [isSavingNotes, startNotesTransition] = useTransition();
  const [isUpdatingStatus, startStatusTransition] = useTransition();
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [deleteModalInquiry, setDeleteModalInquiry] = useState<InquiryItem | null>(null);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  // Sync state if initialInquiries change
  useMemo(() => {
    setInquiries(initialInquiries);
  }, [initialInquiries]);

  // Keyboard accessibility for modals
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (selectedInquiry) setSelectedInquiry(null);
        if (deleteModalInquiry) setDeleteModalInquiry(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedInquiry, deleteModalInquiry]);

  // Counts
  const counts = useMemo(() => {
    const map = {
      ALL: inquiries.length,
      NEW: 0,
      CONTACTED: 0,
      IN_PROGRESS: 0,
      COMPLETED: 0,
      CANCELLED: 0,
    };
    for (const inq of inquiries) {
      if (map[inq.status] !== undefined) {
        map[inq.status]++;
      }
    }
    return map;
  }, [inquiries]);

  // Filter & Search Logic
  const filteredInquiries = useMemo(() => {
    return inquiries.filter((inq) => {
      const matchesStatus =
        selectedStatusTab === "ALL" || inq.status === selectedStatusTab;

      if (!matchesStatus) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      const nameMatch = inq.name.toLowerCase().includes(q);
      const emailMatch = inq.email.toLowerCase().includes(q);
      const subjectMatch = inq.subject?.toLowerCase().includes(q) || false;
      const messageMatch = inq.message.toLowerCase().includes(q);
      const phoneMatch = inq.phone?.toLowerCase().includes(q) || false;

      return nameMatch || emailMatch || subjectMatch || messageMatch || phoneMatch;
    });
  }, [inquiries, selectedStatusTab, searchQuery]);

  // Status Change Handler
  const handleStatusChange = (id: string, newStatus: InquiryStatus) => {
    // Optimistic UI Update
    setInquiries((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
    );
    if (selectedInquiry && selectedInquiry.id === id) {
      setSelectedInquiry((prev) => (prev ? { ...prev, status: newStatus } : null));
    }

    startStatusTransition(async () => {
      const res = await updateInquiryStatusAction({ id, status: newStatus });
      if (!res.success) {
        // Rollback on failure
        setInquiries(initialInquiries);
      }
    });
  };

  // Open Detail Modal
  const handleOpenDetail = (inquiry: InquiryItem) => {
    setSelectedInquiry(inquiry);
    setNotesDraft(inquiry.notes || "");
  };

  // Save Notes Handler
  const handleSaveNotes = () => {
    if (!selectedInquiry) return;
    const targetId = selectedInquiry.id;
    const updatedNotes = notesDraft;

    startNotesTransition(async () => {
      const res = await updateInquiryNotesAction({ id: targetId, notes: updatedNotes });
      if (res.success) {
        setInquiries((prev) =>
          prev.map((i) => (i.id === targetId ? { ...i, notes: updatedNotes } : i))
        );
        setSelectedInquiry((prev) => (prev ? { ...prev, notes: updatedNotes } : null));
      }
    });
  };

  // Delete Action Handler
  const handleDeleteConfirm = async () => {
    if (!deleteModalInquiry) return;
    const targetId = deleteModalInquiry.id;
    setDeletingId(targetId);

    const res = await deleteInquiryAction(targetId);
    setDeletingId(null);
    setDeleteModalInquiry(null);

    if (res.success) {
      setInquiries((prev) => prev.filter((i) => i.id !== targetId));
      if (selectedInquiry?.id === targetId) {
        setSelectedInquiry(null);
      }
    }
  };

  const handleCopy = (text: string, fieldKey: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldKey);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const formatRelativeTime = (dateStr: Date | string) => {
    const d = new Date(dateStr);
    const now = new Date();
    const diffSec = Math.floor((now.getTime() - d.getTime()) / 1000);

    if (diffSec < 60) return "Just now";
    if (diffSec < 3600) return `${Math.floor(diffSec / 60)}m ago`;
    if (diffSec < 86400) return `${Math.floor(diffSec / 3600)}h ago`;
    if (diffSec < 604800) return `${Math.floor(diffSec / 86400)}d ago`;
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };

  return (
    <div className="space-y-6">
      {/* Header & Telemetry Metrics */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-emerald-300">
            Administrative Workspace
          </div>
          <h1 className="mt-1.5 text-2xl font-black tracking-tight text-white sm:text-3xl">
            Inquiry & Support Desk
          </h1>
          <p className="mt-1 text-xs text-slate-400">
            Real-time management console for customer requests, prop firm leads, and technical license inquiries.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3.5 py-1.5 font-mono text-xs text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{counts.NEW} Unprocessed Inquiries</span>
          </div>
        </div>
      </div>

      {/* KPI Cards Row */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        <div className="rounded-2xl border border-white/10 bg-[#0b1118]/80 p-3.5 backdrop-blur">
          <div className="text-[10px] font-mono uppercase text-slate-400">Total Leads</div>
          <div className="mt-1 text-xl font-black text-white">{counts.ALL}</div>
        </div>
        <div className="rounded-2xl border border-emerald-400/20 bg-emerald-500/5 p-3.5 backdrop-blur">
          <div className="text-[10px] font-mono uppercase text-emerald-400">New (Queued)</div>
          <div className="mt-1 text-xl font-black text-emerald-300">{counts.NEW}</div>
        </div>
        <div className="rounded-2xl border border-cyan-400/20 bg-cyan-500/5 p-3.5 backdrop-blur">
          <div className="text-[10px] font-mono uppercase text-cyan-400">Contacted</div>
          <div className="mt-1 text-xl font-black text-cyan-300">{counts.CONTACTED}</div>
        </div>
        <div className="rounded-2xl border border-amber-400/20 bg-amber-500/5 p-3.5 backdrop-blur">
          <div className="text-[10px] font-mono uppercase text-amber-400">In Progress</div>
          <div className="mt-1 text-xl font-black text-amber-300">{counts.IN_PROGRESS}</div>
        </div>
        <div className="rounded-2xl border border-purple-400/20 bg-purple-500/5 p-3.5 backdrop-blur">
          <div className="text-[10px] font-mono uppercase text-purple-400">Completed</div>
          <div className="mt-1 text-xl font-black text-purple-300">{counts.COMPLETED}</div>
        </div>
        <div className="rounded-2xl border border-slate-700/40 bg-slate-900/40 p-3.5 backdrop-blur">
          <div className="text-[10px] font-mono uppercase text-slate-400">Cancelled</div>
          <div className="mt-1 text-xl font-black text-slate-400">{counts.CANCELLED}</div>
        </div>
      </div>

      {/* Filter Tabs & Search Bar */}
      <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-[#0b1118]/80 p-4 backdrop-blur lg:flex-row lg:items-center lg:justify-between">
        {/* Status Tabs */}
        <div className="flex flex-wrap items-center gap-1.5">
          {filterTabs.map((tab) => {
            const isActive = selectedStatusTab === tab.id;
            const count = counts[tab.id];

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedStatusTab(tab.id)}
                className={`inline-flex cursor-pointer items-center gap-2 rounded-xl px-3 py-1.5 text-xs font-semibold transition-all ${
                  isActive
                    ? "border border-emerald-400/30 bg-emerald-500/15 text-emerald-300 shadow-sm"
                    : "border border-transparent text-slate-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`rounded-full px-1.5 py-0.2 text-[10px] font-mono font-bold ${
                    isActive
                      ? "bg-emerald-400/25 text-white"
                      : "bg-white/10 text-slate-400"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full lg:w-72">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500">
            <Search className="h-4 w-4" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by client, email, keyword..."
            className="h-9 w-full rounded-xl border border-white/10 bg-slate-950/70 pl-9 pr-8 text-xs text-white placeholder:text-slate-500 transition focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-2.5 text-slate-400 hover:text-white"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Main Table View */}
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0b1118]/80 backdrop-blur shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="border-b border-white/10 bg-white/[0.02] text-[11px] font-mono uppercase tracking-wider text-slate-400">
              <tr>
                <th className="px-5 py-3.5 font-semibold">Client & Contact</th>
                <th className="px-5 py-3.5 font-semibold">Subject & Message</th>
                <th className="px-5 py-3.5 font-semibold">Submitted</th>
                <th className="px-5 py-3.5 font-semibold">Status</th>
                <th className="px-5 py-3.5 text-right font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredInquiries.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-16 text-center text-slate-400">
                    <MessageSquare className="mx-auto h-8 w-8 text-slate-600 mb-2" />
                    <div className="text-sm font-semibold text-white">No Inquiries Found</div>
                    <div className="mt-1 text-xs text-slate-500">
                      {searchQuery
                        ? `No results matching "${searchQuery}". Try clearing search.`
                        : "There are currently no inquiries in this category."}
                    </div>
                  </td>
                </tr>
              ) : (
                filteredInquiries.map((inq) => {
                  const conf = statusConfig[inq.status];
                  const StatusIcon = conf.icon;

                  return (
                    <tr
                      key={inq.id}
                      className="group transition hover:bg-white/[0.02]"
                    >
                      {/* Client Info */}
                      <td className="px-5 py-4 align-top">
                        <div className="font-bold text-white group-hover:text-emerald-300 transition">
                          {inq.name}
                        </div>
                        <div className="mt-1 flex items-center gap-1.5 text-slate-400">
                          <Mail className="h-3 w-3 text-slate-500 shrink-0" />
                          <span className="truncate max-w-[180px]">{inq.email}</span>
                          <button
                            type="button"
                            onClick={() => handleCopy(inq.email, `email-${inq.id}`)}
                            title="Copy email"
                            className="cursor-pointer text-slate-500 hover:text-emerald-400"
                          >
                            {copiedField === `email-${inq.id}` ? (
                              <Check className="h-3 w-3 text-emerald-400" />
                            ) : (
                              <Copy className="h-3 w-3" />
                            )}
                          </button>
                        </div>
                        {inq.phone && (
                          <div className="mt-0.5 flex items-center gap-1.5 text-slate-400">
                            <Phone className="h-3 w-3 text-slate-500 shrink-0" />
                            <span>{inq.phone}</span>
                          </div>
                        )}
                      </td>

                      {/* Subject & Snippet */}
                      <td className="px-5 py-4 align-top max-w-sm">
                        <div className="font-semibold text-slate-200 truncate">
                          {inq.subject || "General Technical Inquiry"}
                        </div>
                        <p className="mt-1 text-[11px] leading-relaxed text-slate-400 line-clamp-2">
                          {inq.message}
                        </p>
                        {inq.notes && (
                          <div className="mt-1.5 inline-flex items-center gap-1 rounded bg-amber-500/10 px-1.5 py-0.5 text-[9px] font-mono text-amber-300">
                            <Edit3 className="h-2.5 w-2.5" /> Note attached
                          </div>
                        )}
                      </td>

                      {/* Submitted Date */}
                      <td className="px-5 py-4 align-top whitespace-nowrap text-slate-400 font-mono text-[11px]">
                        <div>{formatRelativeTime(inq.createdAt)}</div>
                        <div className="mt-0.5 text-[10px] text-slate-500">
                          {new Date(inq.createdAt).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </div>
                      </td>

                      {/* Custom Reusable Status Dropdown */}
                      <td className="px-5 py-4 align-top whitespace-nowrap">
                        <CustomSelect<InquiryStatus>
                          value={inq.status}
                          onChange={(newStatus) =>
                            handleStatusChange(inq.id, newStatus)
                          }
                          options={statusSelectOptions}
                          aria-label="Update inquiry status"
                          widthClass="w-44"
                        />
                      </td>

                      {/* Actions */}
                      <td className="px-5 py-4 align-top whitespace-nowrap text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            type="button"
                            onClick={() => handleOpenDetail(inq)}
                            className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs font-semibold text-slate-300 transition hover:border-emerald-400/40 hover:bg-emerald-500/10 hover:text-emerald-300"
                            title="View full details and notes"
                          >
                            <Eye className="h-3.5 w-3.5" />
                            <span>Details</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => setDeleteModalInquiry(inq)}
                            className="inline-flex cursor-pointer items-center justify-center rounded-lg p-1.5 text-slate-500 transition hover:bg-rose-500/10 hover:text-rose-400"
                            title="Delete inquiry"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Inquiry Detail & Notes Drawer Modal */}
      {selectedInquiry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            onClick={() => setSelectedInquiry(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
          />

          <div className="relative w-full max-w-2xl rounded-[2rem] border border-white/15 bg-[#0b1118] p-6 shadow-2xl backdrop-blur-xl sm:p-8 animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-white/10 pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-emerald-500/15 border border-emerald-400/30 px-2.5 py-0.5 font-mono text-[10px] font-bold text-emerald-300">
                    ID: {selectedInquiry.id.slice(-8).toUpperCase()}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {new Date(selectedInquiry.createdAt).toLocaleString("en-US")}
                  </span>
                </div>
                <h3 className="mt-2 text-xl font-bold text-white">
                  {selectedInquiry.subject || "Technical Inquiry"}
                </h3>
              </div>

              <button
                type="button"
                aria-label="Close modal"
                onClick={() => setSelectedInquiry(null)}
                className="rounded-lg p-1 text-slate-400 hover:bg-white/10 hover:text-white transition cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Client Info Grid */}
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3 rounded-2xl border border-white/10 bg-slate-950/60 p-4">
              <div>
                <div className="text-[10px] font-mono uppercase text-slate-500">Client Name</div>
                <div className="mt-0.5 text-xs font-bold text-white">{selectedInquiry.name}</div>
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase text-slate-500">Email Contact</div>
                <div className="mt-0.5 text-xs font-medium text-emerald-300 flex items-center gap-1.5">
                  <span className="truncate">{selectedInquiry.email}</span>
                  <a
                    href={`mailto:${selectedInquiry.email}?subject=Re: ${encodeURIComponent(selectedInquiry.subject || "Luxfocuss Support")}`}
                    className="cursor-pointer text-slate-400 hover:text-emerald-400"
                    title="Send Email"
                  >
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase text-slate-500">Phone / WhatsApp</div>
                <div className="mt-0.5 text-xs text-slate-300">
                  {selectedInquiry.phone || "Not Provided"}
                </div>
              </div>
            </div>

            {/* Message Body */}
            <div className="mt-5">
              <label className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Message Content
              </label>
              <div className="mt-2 rounded-2xl border border-white/10 bg-slate-950/80 p-4 text-xs leading-relaxed text-slate-200 whitespace-pre-wrap">
                {selectedInquiry.message}
              </div>
            </div>

            {/* Status Quick Switch */}
            <div className="mt-5 flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] p-3">
              <span className="text-xs font-semibold text-slate-300">Current Status:</span>
              <div className="flex items-center gap-1.5">
                {(["NEW", "CONTACTED", "IN_PROGRESS", "COMPLETED", "CANCELLED"] as InquiryStatus[]).map((st) => (
                  <button
                    key={st}
                    type="button"
                    onClick={() => handleStatusChange(selectedInquiry.id, st)}
                    className={`cursor-pointer rounded-lg px-2.5 py-1 text-[10px] font-mono font-bold uppercase transition ${
                      selectedInquiry.status === st
                        ? `${statusConfig[st].bg} ${statusConfig[st].text} border ${statusConfig[st].border}`
                        : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {statusConfig[st].label}
                  </button>
                ))}
              </div>
            </div>

            {/* Internal Notes Editor */}
            <div className="mt-5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Internal Engineering Notes
                </label>
                <span className="text-[10px] text-slate-500">Visible only to administrators</span>
              </div>
              <textarea
                value={notesDraft}
                onChange={(e) => setNotesDraft(e.target.value)}
                rows={3}
                placeholder="Log internal action items, MT5 account verification, or phone call notes..."
                className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/80 p-3.5 text-xs text-white placeholder:text-slate-600 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
              />
              <div className="mt-2.5 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handleSaveNotes}
                  disabled={isSavingNotes}
                  className="inline-flex cursor-pointer items-center gap-1.5 rounded-xl border border-emerald-400/30 bg-emerald-500/15 px-4 py-1.5 text-xs font-semibold text-emerald-300 transition hover:bg-emerald-500/25 disabled:opacity-50"
                >
                  {isSavingNotes ? (
                    <Loader2 className="h-3.5 w-3.5 animate-spin" />
                  ) : (
                    <Save className="h-3.5 w-3.5" />
                  )}
                  <span>{isSavingNotes ? "Saving Notes..." : "Save Engineering Notes"}</span>
                </button>

                <a
                  href={`mailto:${selectedInquiry.email}?subject=Re: ${encodeURIComponent(selectedInquiry.subject || "Luxfocuss Support")}`}
                  className="inline-flex cursor-pointer items-center gap-1.5 rounded-xl border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-white transition hover:border-emerald-400/40 hover:bg-white/10"
                >
                  <Send className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Reply via Email Client</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteModalInquiry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            onClick={() => setDeleteModalInquiry(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
          />

          <div className="relative w-full max-w-md rounded-[1.75rem] border border-rose-500/30 bg-[#0c131d] p-6 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-500/10 text-rose-400">
              <AlertTriangle className="h-6 w-6" />
            </div>

            <h3 className="mt-4 text-lg font-bold text-white">
              Permanently Remove Inquiry?
            </h3>

            <p className="mt-2 text-xs leading-relaxed text-slate-300">
              Are you sure you want to delete the inquiry from <span className="font-semibold text-white">{deleteModalInquiry.name}</span> (<span className="text-emerald-300">{deleteModalInquiry.email}</span>)? This action is irreversible.
            </p>

            <div className="mt-6 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setDeleteModalInquiry(null)}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-300 hover:bg-white/10 hover:text-white transition cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleDeleteConfirm}
                disabled={deletingId === deleteModalInquiry.id}
                className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-rose-500 px-4 py-2 text-xs font-semibold text-white transition hover:bg-rose-600 disabled:opacity-50"
              >
                {deletingId === deleteModalInquiry.id ? (
                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                ) : (
                  <Trash2 className="h-3.5 w-3.5" />
                )}
                <span>{deletingId === deleteModalInquiry.id ? "Deleting..." : "Delete Permanently"}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
