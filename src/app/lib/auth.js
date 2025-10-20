import { cookies } from "next/headers";

const AUTH_COOKIE = "isAuthenticated";

export async function isLoggedIn() {
  const cookieStore = cookies();
  const cookie = await cookieStore.get("isAuthenticated");
  return cookie?.value === "true";
}

export function login() {
  cookies().set(AUTH_COOKIE, "true", { path: "/" });
}

export function logout() {
  cookies().delete(AUTH_COOKIE);
}
