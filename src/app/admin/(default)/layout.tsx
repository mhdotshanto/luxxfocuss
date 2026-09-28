import { redirect } from "next/navigation";
import { getCurrentAdmin } from "@/lib/auth";
import { AdminLayoutClient } from "@/components/admin/admin-layout-client";

export default async function AdminBackofficeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const admin = await getCurrentAdmin();

  if (!admin) {
    redirect("/admin/login");
  }

  return (
    <AdminLayoutClient admin={admin}>
      {children}
    </AdminLayoutClient>
  );
}
