import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";
import { JWTExpired } from "jose/errors";

const SECRET_KEY = new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET);

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("token");

  if (!token) {
    console.log("Token não encontrado");
    return NextResponse.redirect(new URL(`/auth/login`, req.url));
  }

  try {
    await jwtVerify(token.value, SECRET_KEY);

    // SE FOR VALIDO PASSA
    return NextResponse.next();
  } catch (error) {
    if (error instanceof JWTExpired) {
      const response = NextResponse.redirect(new URL(`/auth/login`, req.url));
      response.cookies.delete("token");

      return response;
    } else {
      console.error("Erro ao verificar o token:", error);

      // REDIRECIONA PARA A PÁGINA DE LOGIN EM CASO DE OUTRO ERRO
      return NextResponse.redirect(new URL(`/auth/login`, req.url));
    }
  }
}

export const config = {
  matcher: ["/dashboard", "/profile", "/settings", "/solicitacoes", "/shop", "/gerenciamento"],
};
