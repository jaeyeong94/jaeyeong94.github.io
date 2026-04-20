import type { Metadata } from 'next';
import { defaultLocale } from '@/lib/i18n';
import { LocaleRedirect } from '@/components/layout/LocaleRedirect';

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
};

export default function RootPage() {
  return (
    <>
      <noscript>
        <meta httpEquiv="refresh" content={`0; url=/${defaultLocale}/`} />
      </noscript>
      <LocaleRedirect />
    </>
  );
}
