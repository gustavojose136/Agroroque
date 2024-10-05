import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const SECRET_KEY = new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET);

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("token");

  if (!token) {
    console.log("Token não encontrado");
    return NextResponse.redirect(new URL(`/auth/login`, req.url));
  }

  try {
    const { payload } = await jwtVerify(token.value, SECRET_KEY);

    // SE FOR VALIDO PASSA
    return NextResponse.next();
  } catch (error) {
    console.error("Erro ao verificar o token:", error);
    return NextResponse.redirect(new URL(`/auth/login`, req.url));
  }
}

export const config = {
  matcher: ["/dashboard", "/profile", "/settings", "/solicitacoes", "/shop"],
};
