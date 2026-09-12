import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { SUPPORTED_LOCALES } from '@/i18n/request';

export async function POST(request: Request) {
  try {
    const { locale } = await request.json();
    if (!locale || !(SUPPORTED_LOCALES as readonly string[]).includes(locale)) {
      return NextResponse.json({ error: 'Invalid locale' }, { status: 400 });
    }

    const cookieStore = await cookies();
    const maxAge = 365 * 24 * 60 * 60; // 1 year

    cookieStore.set('NEXT_LOCALE', locale, {
      path: '/',
      maxAge,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
    });
    cookieStore.set('wacrm_locale', locale, {
      path: '/',
      maxAge,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
    });

    return NextResponse.json({ success: true, locale });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Internal error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
