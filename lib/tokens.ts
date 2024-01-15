import { v4 as uuidv4 } from "uuid";

import { getVerificationTokenByEmail } from "@/data/verificiation-token";
import prisma from "@/lib/db";

export const generateVerificationToken = async (email: string) => {
  const token = uuidv4();
  const expires = new Date(new Date().getTime() + 3600 * 1000); // 1 hour

  const expiringToken = await getVerificationTokenByEmail(email);

  if (expiringToken) {
    await prisma.verificationToken.delete({
      where: {
        id: expiringToken.id,
      },
    });
  }

  const verificationToken = await prisma.verificationToken.create({
    data: {
      email,
      token,
      expires,
    },
  });

  return verificationToken;
};
