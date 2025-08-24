import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { i18n, type Locale } from '../../../i18n-config';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default function LangLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  return (
    <>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer lang={params.lang} />
    </>
  );
}
