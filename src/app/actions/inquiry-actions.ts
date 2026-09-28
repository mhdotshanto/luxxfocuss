"use server";

import { db } from "@/lib/db";
import { getCurrentAdmin } from "@/lib/auth";
import {
  inquiryFormSchema,
  InquiryFormInput,
  inquiryStatusUpdateSchema,
  inquiryNotesUpdateSchema,
} from "@/lib/validations/inquiry";
import { revalidatePath } from "next/cache";
import { InquiryStatus } from "@prisma/client";

export interface ServerActionResponse<T = unknown> {
  success: boolean;
  message?: string;
  data?: T;
  errors?: Record<string, string>;
}

/**
 * Public Server Action to submit a new inquiry / contact message
 */
export async function createInquiryAction(
  rawData: unknown
): Promise<ServerActionResponse<{ inquiryId: string; referenceCode: string }>> {
  try {
    const parseResult = inquiryFormSchema.safeParse(rawData);

    if (!parseResult.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parseResult.error.issues) {
        const fieldName = issue.path[0]?.toString();
        if (fieldName && !fieldErrors[fieldName]) {
          fieldErrors[fieldName] = issue.message;
        }
      }
      return {
        success: false,
        message: "Please correct the errors in the form.",
        errors: fieldErrors,
      };
    }

    const { name, email, phone, subject, message } = parseResult.data;

    const inquiry = await db.inquiry.create({
      data: {
        name,
        email,
        phone: phone || null,
        subject: subject || null,
        message,
        status: InquiryStatus.NEW,
      },
    });

    const referenceCode = `INQ-${inquiry.id.slice(-6).toUpperCase()}`;

    // Revalidate admin desks
    revalidatePath("/admin/inquiries");
    revalidatePath("/admin");

    return {
      success: true,
      message: "Your inquiry has been submitted successfully to our engineering desk.",
      data: {
        inquiryId: inquiry.id,
        referenceCode,
      },
    };
  } catch (error) {
    console.error("Failed to create inquiry:", error);
    return {
      success: false,
      message: "An unexpected error occurred while transmitting your inquiry. Please try again or reach us directly via support@luxfocuss.com.",
    };
  }
}

/**
 * Admin Server Action to update an inquiry's status
 */
export async function updateInquiryStatusAction(
  rawData: unknown
): Promise<ServerActionResponse<{ status: InquiryStatus }>> {
  try {
    const admin = await getCurrentAdmin();
    if (!admin) {
      return {
        success: false,
        message: "Unauthorized. Active administrator session required.",
      };
    }

    const parseResult = inquiryStatusUpdateSchema.safeParse(rawData);
    if (!parseResult.success) {
      return {
        success: false,
        message: "Invalid status update payload.",
      };
    }

    const { id, status } = parseResult.data;

    const updated = await db.inquiry.update({
      where: { id },
      data: { status: status as InquiryStatus },
    });

    revalidatePath("/admin/inquiries");
    revalidatePath("/admin");

    return {
      success: true,
      message: `Inquiry status updated to ${status}.`,
      data: { status: updated.status },
    };
  } catch (error) {
    console.error("Failed to update inquiry status:", error);
    return {
      success: false,
      message: "Failed to update inquiry status. Please try again.",
    };
  }
}

/**
 * Admin Server Action to update internal engineering notes on an inquiry
 */
export async function updateInquiryNotesAction(
  rawData: unknown
): Promise<ServerActionResponse<{ notes: string | null }>> {
  try {
    const admin = await getCurrentAdmin();
    if (!admin) {
      return {
        success: false,
        message: "Unauthorized. Active administrator session required.",
      };
    }

    const parseResult = inquiryNotesUpdateSchema.safeParse(rawData);
    if (!parseResult.success) {
      return {
        success: false,
        message: "Invalid notes payload.",
      };
    }

    const { id, notes } = parseResult.data;

    const updated = await db.inquiry.update({
      where: { id },
      data: { notes: notes || null },
    });

    revalidatePath("/admin/inquiries");

    return {
      success: true,
      message: "Internal engineering notes updated.",
      data: { notes: updated.notes },
    };
  } catch (error) {
    console.error("Failed to update inquiry notes:", error);
    return {
      success: false,
      message: "Failed to update notes.",
    };
  }
}

/**
 * Admin Server Action to delete an inquiry
 */
export async function deleteInquiryAction(
  inquiryId: string
): Promise<ServerActionResponse> {
  try {
    const admin = await getCurrentAdmin();
    if (!admin) {
      return {
        success: false,
        message: "Unauthorized. Active administrator session required.",
      };
    }

    await db.inquiry.delete({
      where: { id: inquiryId },
    });

    revalidatePath("/admin/inquiries");
    revalidatePath("/admin");

    return {
      success: true,
      message: "Inquiry record permanently removed.",
    };
  } catch (error) {
    console.error("Failed to delete inquiry:", error);
    return {
      success: false,
      message: "Failed to delete inquiry.",
    };
  }
}
