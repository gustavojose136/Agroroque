import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
var jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.NEXT_PUBLIC_JWT_SECRET || "your-secret-key";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("jwt-token")?.toString();

  if (!token) {
    return NextResponse.redirect(
      new URL(`/auth/login`, req.url),
    );
  }

  try {
    jwt.verify(token, SECRET_KEY);

    // SE FOR VALIDO PASSA
    return NextResponse.next();
  } catch (error) {
    //console.error("Erro ao verificar o token:", error);
    return NextResponse.redirect(
      new URL(`/auth/login`, req.url),
    );
  }
}

export const config = {
  matcher: ["/dashboard", "/profile", "/settings"],
};
