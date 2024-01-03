import { useSession } from "next-auth/react";

export const useCurrentSession = () => {
  const session = useSession();

  return session;
};
