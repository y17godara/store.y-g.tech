import { auth } from "@/auth";

export const currentUser = async () => {
  const session: any = await auth();

  return session?.user;
};

export const currentRole = async () => {
  const session: any = await auth();

  return session?.user?.role;
};
