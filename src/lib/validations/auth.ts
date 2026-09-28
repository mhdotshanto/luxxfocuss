import { z } from "zod";

export const adminLoginSchema = z.object({
  email: z
    .string()
    .min(1, "Email address is required")
    .email("Please enter a valid institutional email address"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(6, "Password must be at least 6 characters"),
});

export type AdminLoginInput = z.infer<typeof adminLoginSchema>;
