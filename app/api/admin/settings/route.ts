import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/auth';

export async function GET() {
  const user = requireAdmin();

  return NextResponse.json({
    admin: user.name,
    settings: {
      websiteName: 'GPT Rewards Platform',
      currency: 'USD',
      referralPercent: 10,
      minWithdrawal: 10,
      maintenanceMode: false
    }
  });
}

export async function POST(request: Request) {
  const user = requireAdmin();
  const body = await request.json();

  return NextResponse.json({
    success: true,
    admin: user.name,
    saved: body
  }, { status: 201 });
}
