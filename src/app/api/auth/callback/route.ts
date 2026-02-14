import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.redirect(new URL('/dashboard', process.env.NEXT_PUBLIC_SUPABASE_URL || 'http://localhost:3000'));
}
