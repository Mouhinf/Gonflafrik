
import { redirect } from 'next/navigation';
import { i18n } from '../i18n-config';

export default function Home() {
  // Redirection de la racine vers la langue par défaut.
  // Le middleware se charge de la détection de la langue du navigateur pour les visites ultérieures.
  redirect(i18n.defaultLocale);
}
