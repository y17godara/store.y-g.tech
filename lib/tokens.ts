import { v4 as uuidv4 } from "uuid";

import { getVerificationTokenByEmail } from "@/data/verificiation-token";
import db from "@/lib/db";

export const generateVerificationToken = async (email: string) => {
  const token = uuidv4();
  const expires = new Date(new Date().getTime() + 24 * 60 * 60 * 1000); // 24 hours

  const expiringToken = await getVerificationTokenByEmail(email);

  if (expiringToken) {
    await db.verificationToken.delete({
      where: {
        id: expiringToken.id,
      },
    });
  }

  const verificationToken = await db.verificationToken.create({
    data: {
      email,
      token,
      expires,
    },
  });

  return verificationToken;
};
