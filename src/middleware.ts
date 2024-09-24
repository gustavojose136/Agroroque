import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
var jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.NEXT_PUBLIC_JWT_SECRET || "secret-key";
console.log("SECRET_KEY:", SECRET_KEY);
export function middleware(req: NextRequest) {
  console.log("Middleware de autenticação");
  const token = req.cookies.get("token")?.toString();

  console.log("Token:", token);

  if (!token) {
    console.log("Token não encontrado");
    return NextResponse.redirect(
      new URL(`/auth/login`, req.url),
    );
  }

  try {
    console.log("Verificando o token:", token);
    // VERIFICA SE O TOKEN É VALIDO
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
