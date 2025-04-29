// app/middleware.ts
import { NextRequest, NextResponse } from "next/server";

const allowedOrigins = ["https://klinik-orinda-chat.vercel.app"];

export function middleware(request: NextRequest) {
  const origin = request.headers.get("origin") || "";
  const isAllowedOrigin = allowedOrigins.includes(origin);
  const response = NextResponse.next();

  if (isAllowedOrigin) {
    response.headers.set("Access-Control-Allow-Origin", origin);
  }

  response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

  return response;
}

export const config = {
  matcher: "/api/:path*",
};
