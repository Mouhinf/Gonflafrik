
import Image from 'next/image';
import { Building, Target, Users, Wind, Globe, Rocket, Handshake, Brush } from 'lucide-react';
import Link from 'next/link';
import { getDictionary } from '@/dictionaries';
import { Locale } from '../../../../i18n-config';

export default async function AboutPage({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang);
  const t = dictionary.AboutPage;

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <div className="flex justify-center mb-8">
            <Image 
                src="https://images.unsplash.com/photo-1618762148934-3262b8374a4c?q=80&w=200&h=200&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt={t.logo_alt}
                width={150} 
                height={150}
                className="rounded-full"
                data-ai-hint="company logo"
            />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold font-headline">{t.title_part1} <span className="text-primary">{t.title_part2}</span></h1>
        <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
          {t.subtitle1}
        </p>
         <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
          {t.subtitle2}
        </p>
      </div>

      <div className="mb-24 bg-card p-8 md:p-12 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold font-headline text-center mb-12">{t.perspectives_title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
            <div className="flex items-start gap-4">
              <div className="bg-primary/20 rounded-full p-3">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-headline text-lg mb-1">{t.panafrican_expansion_title}</h3>
                <p className="text-muted-foreground text-sm">{t.panafrican_expansion_text}</p>
              </div>
            </div>
             <div className="flex items-start gap-4">
              <div className="bg-primary/20 rounded-full p-3">
                <Rocket className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-headline text-lg mb-1">{t.continuous_innovation_title}</h3>
                <p className="text-muted-foreground text-sm">{t.continuous_innovation_text}</p>
              </div>
            </div>
             <div className="flex items-start gap-4">
              <div className="bg-primary/20 rounded-full p-3">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-headline text-lg mb-1">{t.turnkey_solutions_title}</h3>
                <p className="text-muted-foreground text-sm">{t.turnkey_solutions_text}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/20 rounded-full p-3">
                <Handshake className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-headline text-lg mb-1">{t.strategic_partnerships_title}</h3>
                <p className="text-muted-foreground text-sm">{t.strategic_partnerships_text}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/20 rounded-full p-3">
                <Brush className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-headline text-lg mb-1">{t.african_creativity_title}</h3>
                <p className="text-muted-foreground text-sm">{t.african_creativity_text}</p>
              </div>
            </div>
          </div>
      </div>

      <div className="text-center bg-primary/10 p-12 rounded-xl">
        <h2 className="text-3xl font-bold font-headline mb-4">{t.join_adventure_title}</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          {t.join_adventure_text}
        </p>
        <Link href={`/${lang}/contact`} className="inline-flex items-center justify-center h-11 px-8 rounded-md text-sm font-medium text-primary-foreground bg-primary hover:bg-primary/90">
          {t.join_adventure_cta}
        </Link>
      </div>
    </div>
  );
}
