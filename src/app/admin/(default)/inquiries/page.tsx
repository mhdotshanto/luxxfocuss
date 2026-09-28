import { db } from "@/lib/db";
import { getCurrentAdmin } from "@/lib/auth";
import { redirect } from "next/navigation";
import { InquiryManagementTable, InquiryItem } from "@/components/admin/inquiries/inquiry-management-table";

export const metadata = {
  title: "Inquiry & Support Desk | LUXFOCUSS Administrative Portal",
  description: "Manage customer inquiries, technical requests, and enterprise prop firm leads in real-time.",
};

export default async function AdminInquiriesPage() {
  const admin = await getCurrentAdmin();
  if (!admin) {
    redirect("/admin/login?callbackUrl=/admin/inquiries");
  }

  // Query inquiries directly from PostgreSQL via Prisma
  const rawInquiries = await db.inquiry.findMany({
    orderBy: { createdAt: "desc" },
  });

  const inquiries: InquiryItem[] = rawInquiries.map((inq) => ({
    id: inq.id,
    name: inq.name,
    email: inq.email,
    phone: inq.phone,
    subject: inq.subject,
    message: inq.message,
    status: inq.status,
    notes: inq.notes,
    createdAt: inq.createdAt.toISOString(),
    updatedAt: inq.updatedAt.toISOString(),
  }));

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <InquiryManagementTable inquiries={inquiries} />
    </main>
  );
}
