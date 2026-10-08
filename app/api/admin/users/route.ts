import { NextResponse } from 'next/server';
import { requireAuth } from '@/lib/auth';
import { getUserById } from '@/lib/db';

export async function GET() {
  const user = requireAuth();

  return NextResponse.json({
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      status: user.status
    }
  });
}

export async function POST(request: Request) {
  const user = requireAuth();
  const body = await request.json();

  return NextResponse.json({
    success: true,
    message: `Admin action registered for ${user.name}.`,
    payload: body
  }, { status: 201 });
}
