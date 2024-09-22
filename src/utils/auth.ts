import { NextApiResponse } from 'next';

export function setTokenCookie(res: NextApiResponse, token: string) {
  res.setHeader('Set-Cookie', `jwt-token=${token}; HttpOnly; Secure; Path=/; SameSite=Strict`);
}

export function removeTokenCookie(res: NextApiResponse) {
  res.setHeader('Set-Cookie', `jwt-token=; HttpOnly; Secure; Path=/; Max-Age=0`);
}