import { NextResponse } from "next/server";

export async function POST() {
  const res = NextResponse.redirect("http://localhost:3000/login");
  res.cookies.set("isAuthenticated", "", { path: "/", expires: new Date(0) });
  return res;
}
