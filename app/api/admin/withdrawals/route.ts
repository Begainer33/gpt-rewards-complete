import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/auth';

export async function GET() {
  const user = requireAdmin();

  return NextResponse.json({
    admin: user.name,
    withdrawals: [
      { user: 'Demo User', amount: 25.0, status: 'pending', method: 'PayPal' },
      { user: 'Alice Smith', amount: 75.0, status: 'processing', method: 'Crypto' }
    ]
  });
}

export async function POST(request: Request) {
  const user = requireAdmin();
  const body = await request.json();

  return NextResponse.json({
    success: true,
    admin: user.name,
    updated: body
  }, { status: 201 });
}
