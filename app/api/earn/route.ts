import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

import { requireAuth } from '@/lib/auth';
import { addTransaction, listOffers } from '@/lib/db';

export async function POST(request: Request) {
  const user = requireAuth();

  const formData = await request.formData();
  const offerId = Number(formData.get('offerId') || '0');

  if (!offerId) {
    return NextResponse.json({ error: 'Offer is required.' }, { status: 400 });
  }

  const offers = listOffers();
  const selectedOffer = offers.find((offer) => offer.id === offerId);

  if (!selectedOffer) {
    return NextResponse.json({ error: 'Offer not found.' }, { status: 404 });
  }

  addTransaction({
    userId: user.id,
    type: 'offer_reward',
    amount: Number(selectedOffer.reward),
    status: 'approved',
    description: `Completed offer: ${selectedOffer.title}`
  });

  revalidatePath('/dashboard');
  revalidatePath('/wallet');

  return NextResponse.redirect(new URL('/dashboard', process.env.APP_URL || 'http://localhost:3000'));
}
