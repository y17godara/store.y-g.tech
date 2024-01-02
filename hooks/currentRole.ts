import { useSession } from "next-auth/react";

export const useCurrentRole = () => {
  const session: any = useSession();

  return session.data?.user?.role;
};
