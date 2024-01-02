import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
  code: z.optional(z.string()),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(8, {
    message: "Password must be 8 characters long",
  }),
  name: z.string().min(1, {
    message: "Name is required",
  }),
});

export const SettingsSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required",
  }),
  email: z.string().email({
    message: "Email is required",
  }),
  image: z.string().url({}),
  password: z.string().min(8, {
    message: "Password must be 8 characters long",
  }),
  newPassword: z.string().min(8, {
    message: "Password must be 8 characters long",
  }),
  code: z.optional(z.string()),
});
