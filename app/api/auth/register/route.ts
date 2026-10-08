import { NextResponse } from 'next/server';

import { getUserByEmail, createUser, addTransaction, getWalletByUserId } from '@/lib/db';
import { hashPassword, signToken, verifyPassword } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, password } = body ?? {};

    if (!name || !email || !password) {
      return NextResponse.json({ error: 'Name, email, and password are required.' }, { status: 400 });
    }

    const existingUser = getUserByEmail(String(email).toLowerCase());
    if (existingUser) {
      return NextResponse.json({ error: 'A user with this email already exists.' }, { status: 409 });
    }

    const user = createUser({
      name: String(name),
      email: String(email).toLowerCase(),
      password: hashPassword(String(password))
    });

    if (!user) {
      return NextResponse.json({ error: 'Unable to create user.' }, { status: 500 });
    }

    const wallet = getWalletByUserId(user.id);
    if (wallet) {
      addTransaction({
        userId: user.id,
        type: 'welcome_bonus',
        amount: 5,
        status: 'approved',
        description: 'Welcome bonus'
      });
    }

    const token = signToken({ userId: user.id, email: user.email, role: user.role });
    const response = NextResponse.json({ success: true, user: { id: user.id, name: user.name, email: user.email, role: user.role } }, { status: 201 });
    response.cookies.set('token', token, {
      httpOnly: true,
      sameSite: 'lax',
      secure: false,
      path: '/',
      maxAge: 60 * 60 * 24 * 7
    });

    return response;
  } catch (error) {
    return NextResponse.json({ error: 'Registration failed.' }, { status: 500 });
  }
}
