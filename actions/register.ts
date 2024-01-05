"use server";

import * as z from "zod";
import bcrypt from "bcryptjs";

import db from "@/lib/db";
import { RegisterSchema } from "@/schemas";
import { getUserByEmail } from "./user";
import { sendVerificationEmail } from "@/lib/mail";
import { generateVerificationToken } from "@/lib/tokens";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email, password, name } = validatedFields.data;

  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "User already exists!" };
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  const verificationToken = await generateVerificationToken(email);

  const confirmationMail = await sendVerificationEmail(
    verificationToken.email,
    verificationToken.token
  );

  if (confirmationMail === null) {
    return { error: "Error sending confirmation email!" };
  }

  return { success: "Confirmation email sent!" };
};
