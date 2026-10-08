import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/auth';

export async function GET() {
  const user = requireAdmin();

  return NextResponse.json({
    admin: user.name,
    message: 'Offers API active.',
    offers: [
      { id: 1, title: 'Profile Survey', reward: 3.5, category: 'Survey', status: 'active' },
      { id: 2, title: 'Bonus Offer', reward: 4.0, category: 'Offer', status: 'active' },
      { id: 3, title: 'Daily Check-In', reward: 1.0, category: 'Daily', status: 'paused' }
    ]
  });
}

export async function POST(request: Request) {
  const user = requireAdmin();
  const body = await request.json();

  return NextResponse.json({
    success: true,
    admin: user.name,
    created: body
  }, { status: 201 });
}
