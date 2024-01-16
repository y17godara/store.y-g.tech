"use server";

import { currentSession } from "@/lib/auth";

export async function getSession() {
  const session = await currentSession();

  return session;
}

export async function getUser() {
  const session = await currentSession();

  return session?.user || null;
}
