import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { getUserById } from '@/lib/db';

export const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret';

export function hashPassword(password: string) {
  return bcrypt.hashSync(password, 10);
}

export function verifyPassword(password: string, hash: string) {
  return bcrypt.compareSync(password, hash);
}

export function signToken(payload: Record<string, unknown>) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });
}

export function verifyToken(token: string) {
  return jwt.verify(token, JWT_SECRET) as { userId: number; email: string; role: string };
}

export function getCurrentUser() {
  const cookieStore = cookies();
  const token = cookieStore.get('token')?.value;

  if (!token) {
    return null;
  }

  try {
    const payload = verifyToken(token);
    return getUserById(payload.userId);
  } catch {
    return null;
  }
}

export function requireAuth() {
  const user = getCurrentUser();
  if (!user) {
    redirect('/login');
  }

  return user;
}

export function requireAdmin() {
  const user = requireAuth();
  if (user.role !== 'admin' && user.role !== 'super-admin') {
    redirect('/dashboard');
  }

  return user;
}
