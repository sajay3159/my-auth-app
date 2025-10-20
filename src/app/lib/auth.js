import { cookies } from "next/headers";

const AUTH_COOKIE = "isAuthenticated";

export async function isLoggedIn() {
  const cookieStore = cookies();
  return cookieStore.get("isAuthenticated")?.value === "true";
}

export function login() {
  cookies().set(AUTH_COOKIE, "true", { path: "/" });
}

export function logout() {
  cookies().delete(AUTH_COOKIE);
}
