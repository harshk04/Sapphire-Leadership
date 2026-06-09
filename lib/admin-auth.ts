import type { NextRequest } from 'next/server';

export const ADMIN_SESSION_COOKIE = 'sapphire_admin_session';
export const ADMIN_LOGIN_EMAIL = process.env.ADMIN_LOGIN_EMAIL || 'admin';
export const ADMIN_LOGIN_PASSWORD = process.env.ADMIN_LOGIN_PASSWORD || 'admin';

export function isAdminCredentials(email: string, password: string) {
  return email === ADMIN_LOGIN_EMAIL && password === ADMIN_LOGIN_PASSWORD;
}

export function isAdminSessionActive(request: NextRequest | { cookies: { get(name: string): { value: string } | undefined } }) {
  return request.cookies.get(ADMIN_SESSION_COOKIE)?.value === 'authenticated';
}

