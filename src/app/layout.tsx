
import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { i18n } from '../../i18n-config';

export const metadata: Metadata = {
  title: 'GONFL\'AFRIK - Location de Structures Gonflables',
  description: 'Spécialiste de la location de châteaux et jeux gonflables pour tous vos événements.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={i18n.defaultLocale} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Space+Grotesk:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('min-h-screen bg-background font-body antialiased')}>
        <div className="relative flex min-h-dvh flex-col">
            {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
