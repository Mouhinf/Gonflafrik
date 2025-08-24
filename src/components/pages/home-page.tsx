import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Castle, PartyPopper, Bot, Building } from 'lucide-react';
import { InflatableCard } from '@/components/inflatable-card';
import { featuredInflatables, galleryImages } from '@/lib/data';
import type { Locale } from '../../../i18n-config';

export default function HomePage({ dictionary, lang }: { dictionary: any, lang: Locale }) {
  const t = dictionary.HomePage;
  const ti = dictionary.Inflatables;

  return (
    <div className="flex flex-col">
      <section className="relative h-[70vh] md:h-[80vh] w-full flex items-center justify-center text-center text-white overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute z-0 w-full h-full object-cover"
          poster="https://placehold.co/1800x900.png"
        >
          {/* Vous pouvez ajouter la source de votre vidéo ici, par exemple :
          <source src="/videos/hero-video.mp4" type="video/mp4" /> 
          */}
        </video>
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 p-4 flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold font-headline mb-4 drop-shadow-lg">
            {t.hero.title} <span className="text-primary">GONFL'AFRIK</span>!
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mb-8 drop-shadow-md">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
              <Link href={`/${lang}/catalogue`}>{t.hero.cta_catalogue} <ArrowRight className="ml-2" /></Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="font-bold">
              <Link href={`/${lang}/reservation`}>{t.hero.cta_reserve}</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="features" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">{t.features.title}</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              {t.features.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <Card className="border-2 border-primary/20 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-primary/20 rounded-full p-4 w-fit">
                  <Castle className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="font-headline mt-4">{t.features.quality_title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{t.features.quality_text}</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-primary/20 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-primary/20 rounded-full p-4 w-fit">
                  <PartyPopper className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="font-headline mt-4">{t.features.service_title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{t.features.service_text}</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-primary/20 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-primary/20 rounded-full p-4 w-fit">
                  <Bot className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="font-headline mt-4">{t.features.planning_title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{t.features.planning_text}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="featured-inflatables" className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">{t.featured_inflatables.title}</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              {t.featured_inflatables.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredInflatables.map((inflatable) => (
              <InflatableCard key={inflatable.id} inflatable={inflatable} lang={lang} dictionary={ti} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href={`/${lang}/catalogue`}>{t.featured_inflatables.cta_explore} <ArrowRight className="ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="about-us" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="https://placehold.co/600x500.png"
                alt="L'équipe de GONFL'AFRIK"
                width={600}
                height={500}
                className="rounded-xl shadow-lg"
                data-ai-hint="team smiling"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">{t.about_us.title}</h2>
              <p className="text-muted-foreground mb-6">
                {t.about_us.text}
              </p>
              <Button asChild size="lg">
                <Link href={`/${lang}/a-propos`}>{t.about_us.cta_learn_more} <Building className="ml-2" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <section id="ai-planner" className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">{t.ai_planner.title}</h2>
              <p className="text-muted-foreground mb-6">
                {t.ai_planner.text}
              </p>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href={`/${lang}/planificateur-ia`}>{t.ai_planner.cta_try_planner} <Bot className="ml-2" /></Link>
              </Button>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src="https://placehold.co/600x500.png"
                alt="Illustration de l'intelligence artificielle"
                width={600}
                height={500}
                className="rounded-xl shadow-lg"
                data-ai-hint="robot thinking"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="gallery-preview" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">{t.gallery_preview.title}</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              {t.gallery_preview.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.slice(0, 4).map((image, index) => (
              <div key={index} className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  data-ai-hint={image.hint}
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href={`/${lang}/galerie`}>{t.gallery_preview.cta_visit_gallery} <ArrowRight className="ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
