
import Link from 'next/link';
import { Wind, Facebook, Instagram, Twitter } from 'lucide-react';
import { getDictionary } from '@/dictionaries';
import { Locale } from '../../../i18n-config';


export default async function Footer({ lang }: { lang: Locale }) {
    const dictionary = await getDictionary(lang);
    const t = dictionary.Footer;
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href={`/${lang}`} className="flex items-center space-x-2 mb-4">
              <Wind className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold font-headline text-primary">GONFL'AFRIK</span>
            </Link>
            <p className="text-sm text-muted-foreground">{t.tagline}</p>
          </div>
          <div>
            <h3 className="font-headline font-semibold text-foreground tracking-wider uppercase">{t.navigation}</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href={`/${lang}/catalogue`} className="text-sm text-muted-foreground hover:text-primary">{t.catalogue}</Link></li>
              <li><Link href={`/${lang}/galerie`} className="text-sm text-muted-foreground hover:text-primary">{t.gallery}</Link></li>
              <li><Link href={`/${lang}/blog`} className="text-sm text-muted-foreground hover:text-primary">{t.blog}</Link></li>
              <li><Link href={`/${lang}/a-propos`} className="text-sm text-muted-foreground hover:text-primary">{t.about}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline font-semibold text-foreground tracking-wider uppercase">{t.support}</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href={`/${lang}/contact`} className="text-sm text-muted-foreground hover:text-primary">{t.contact_us}</Link></li>
              <li><Link href={`/${lang}/reservation`} className="text-sm text-muted-foreground hover:text-primary">{t.book_now}</Link></li>
              <li><Link href={`/${lang}/planificateur-ia`} className="text-sm text-muted-foreground hover:text-primary">{t.ai_planner}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline font-semibold text-foreground tracking-wider uppercase">{t.follow_us}</h3>
            <div className="flex space-x-4 mt-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} GONFL'AFRIK. {t.rights_reserved}</p>
        </div>
      </div>
    </footer>
  );
}
