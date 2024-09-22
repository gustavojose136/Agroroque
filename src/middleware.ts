import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';
const SECRET_KEY = process.env.JWT_SECRET || 'your-secret-key';

export function middleware(req: NextRequest) {
    console.log('Middleware: ', req.url);
    console.log('sk: ', SECRET_KEY);

    const token = req.cookies.get('jwt-token')?.toString() || '';

    if (!token || token === '') {
        return NextResponse.redirect(new URL('/auth/login', req.url));
    }

    try {
        jwt.verify(token, SECRET_KEY);
        return NextResponse.next();
    } catch (err) {
        return NextResponse.redirect(new URL('/auth/login', req.url));
    }
}

export const config = {
    matcher: ['/dashboard', '/profile', '/settings'], 
};
