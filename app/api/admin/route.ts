import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/auth';

export async function GET() {
  const user = requireAdmin();

  return NextResponse.json({
    admin: user.name,
    message: 'Admin management routes active.',
    routes: ['users', 'settings', 'offers', 'transactions']
  });
}
