import * as z from "zod";

export const SearchSchema = z.object({
  search: z.string().min(1, {
    message: " ",
  }),
});

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

interface SettingType {
  password: string;
  newPassword?: string;
}

export const SettingsSchema = z.object({
  name: z.optional(
    z.string().min(1, {
      message: "Name is required",
    })
  ),
  email: z.optional(
    z.string().email({
      message: "Email is required",
    })
  ),
  isTwoFactorEnabled: z.optional(z.boolean()),
  image: z.optional(z.string().url({})),
  password: z.string().min(8, {
    message: "Password must be 8 characters long",
  }),
  newPassword: z.optional(
    z.string().min(8, {
      message: "Password must be 8 characters long",
    })
  ),
});
