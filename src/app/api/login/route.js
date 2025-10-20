import { NextResponse } from "next/server";

export async function POST() {
  const res = NextResponse.redirect("http://localhost:3000/products");
  res.cookies.set("isAuthenticated", "true", { path: "/" });
  return res;
}
