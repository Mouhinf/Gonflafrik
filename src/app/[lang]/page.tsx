
import HomePage from '@/components/pages/home-page';
import { getDictionary } from '@/dictionaries'
import { Locale } from '../../../i18n-config'

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(lang)
  return <HomePage dictionary={dictionary} lang={lang} />;
}
