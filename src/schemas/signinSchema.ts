import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }),
  password: z
    .string()
    .min(1, { message: "password must be at least 6 characters" }),
});
