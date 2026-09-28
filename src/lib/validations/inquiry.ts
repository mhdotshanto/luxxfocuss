import { z } from "zod";

export const inquiryFormSchema = z.object({
  name: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name cannot exceed 100 characters")
    .trim(),
  email: z
    .string()
    .min(1, "Email address is required")
    .email("Please provide a valid email address")
    .toLowerCase()
    .trim(),
  phone: z
    .string()
    .max(30, "Phone number cannot exceed 30 characters")
    .optional()
    .or(z.literal("")),
  subject: z
    .string()
    .min(3, "Subject must be at least 3 characters")
    .max(150, "Subject cannot exceed 150 characters")
    .trim(),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters long")
    .max(3000, "Message cannot exceed 3,000 characters")
    .trim(),
});

export type InquiryFormInput = z.infer<typeof inquiryFormSchema>;

export const inquiryStatusUpdateSchema = z.object({
  id: z.string().min(1, "Inquiry ID is required"),
  status: z.enum(["NEW", "CONTACTED", "IN_PROGRESS", "COMPLETED", "CANCELLED"]),
});

export const inquiryNotesUpdateSchema = z.object({
  id: z.string().min(1, "Inquiry ID is required"),
  notes: z.string().max(5000, "Notes cannot exceed 5,000 characters"),
});
