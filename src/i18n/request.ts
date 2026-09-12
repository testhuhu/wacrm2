import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

export const SUPPORTED_LOCALES = ['ar', 'tr', 'en'] as const;
export type AppLocale = (typeof SUPPORTED_LOCALES)[number];

export default getRequestConfig(async () => {
  let locale = 'ar';

  try {
    const cookieStore = await cookies();
    const cookieLocale = cookieStore.get('NEXT_LOCALE')?.value || cookieStore.get('wacrm_locale')?.value;
    if (cookieLocale && (SUPPORTED_LOCALES as readonly string[]).includes(cookieLocale)) {
      locale = cookieLocale;
    } else if (process.env.NEXT_PUBLIC_APP_LOCALE && (SUPPORTED_LOCALES as readonly string[]).includes(process.env.NEXT_PUBLIC_APP_LOCALE)) {
      locale = process.env.NEXT_PUBLIC_APP_LOCALE;
    }
  } catch {
    locale = process.env.NEXT_PUBLIC_APP_LOCALE || 'ar';
  }

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch {
    try {
      messages = (await import(`../../messages/ar.json`)).default;
    } catch {
      messages = (await import(`../../messages/en.json`)).default;
    }
  }

  return {
    locale,
    messages
  };
});

