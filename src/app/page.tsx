
import { redirect } from 'next/navigation';

export default function Home() {
  // This is a temporary redirect to the default locale.
  // In a real app, you'd want to detect the user's preferred locale from the request headers.
  // The middleware is currently configured to handle this detection and redirection.
  redirect('/fr');
}
