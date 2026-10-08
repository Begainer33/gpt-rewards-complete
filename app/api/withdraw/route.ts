import { NextResponse } from 'next/server';
import { requireAuth } from '@/lib/auth';
import { addTransaction } from '@/lib/db';

export async function POST(request: Request) {
  const user = requireAuth();
  const body = await request.json();
  const amount = Number(body?.amount ?? 0);

  if (!amount || amount <= 0) {
    return NextResponse.json({ error: 'Enter a valid withdrawal amount.' }, { status: 400 });
  }

  addTransaction({
    userId: user.id,
    type: 'withdrawal_request',
    amount,
    status: 'pending',
    description: 'Withdrawal requested'
  });

  return NextResponse.json({ success: true, message: 'Withdrawal request submitted.', amount }, { status: 201 });
}
