import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { SUPPORTED_LOCALES } from '@/i18n/request';

export async function GET() {
  try {
    const cookieStore = await cookies();
    const locale = cookieStore.get('NEXT_LOCALE')?.value || cookieStore.get('wacrm_locale')?.value || 'ar';
    return NextResponse.json({ locale });
  } catch {
    return NextResponse.json({ locale: 'ar' });
  }
}

export async function POST(request: Request) {
  try {
    const { locale } = await request.json();
    if (!locale || !(SUPPORTED_LOCALES as readonly string[]).includes(locale)) {
      return NextResponse.json({ error: 'Invalid locale' }, { status: 400 });
    }

    const cookieStore = await cookies();
    const maxAge = 365 * 24 * 60 * 60; // 1 year

    const proto = request.headers.get('x-forwarded-proto');
    const isHttps = proto === 'https' || request.url.startsWith('https:');

    const cookieOptions = {
      path: '/',
      maxAge,
      sameSite: 'lax' as const,
      secure: isHttps,
      httpOnly: false,
    };

    cookieStore.set('NEXT_LOCALE', locale, cookieOptions);
    cookieStore.set('wacrm_locale', locale, cookieOptions);

    const response = NextResponse.json({ success: true, locale });
    response.cookies.set('NEXT_LOCALE', locale, cookieOptions);
    response.cookies.set('wacrm_locale', locale, cookieOptions);

    return response;
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Internal error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
