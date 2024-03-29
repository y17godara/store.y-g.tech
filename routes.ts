/*
 * The following are default redirect routes used by the auth middleware.
 */

export const DEFAULT_REDIRECT = "/";
export const DEFAULT_UNAUTHENTICATED_REDIRECT = "/auth/login";
export const DEFAULT_LOGIN_REDIRECT = "/user/settings";

/*
 * The following routes are used by the auth middleware to determine
 * whether or not a user is authenticated
 */

export const publicRoutes = ["/"];
export const publicAuthRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/new-verification",
  "/auth/error",
];

export const authRoutes = [
  "/auth/register",
  "/auth/login",
  "/auth/error",
  "/auth/reset",
  "/auth/new-password",
];

export const apiAuthPrefix = "/api/auth";
export const apiAuthRoutes = ["/api/auth"];

export const publicApiRoutes = ["/api/seed"];
