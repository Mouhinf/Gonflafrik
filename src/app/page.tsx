
import HomePage from '@/components/pages/home-page';
import { getDictionary } from '@/dictionaries'
import { redirect } from 'next/navigation';

export default async function Home() {
  // This is a temporary redirect to the default locale.
  // In a real app, you'd want to detect the user's preferred locale.
  redirect('/fr');
}
