import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Castle, PartyPopper, Bot } from 'lucide-react';
import { InflatableCard } from '@/components/inflatable-card';
import { featuredInflatables, galleryImages } from '@/lib/data';

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative h-[70vh] md:h-[80vh] w-full flex items-center justify-center text-center text-white">
        <Image
          src="https://placehold.co/1800x900.png"
          alt="Structures gonflables sous un ciel ensoleillé"
          layout="fill"
          objectFit="cover"
          className="absolute z-0"
          data-ai-hint="bouncy castle festival"
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 p-4 flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold font-headline mb-4 drop-shadow-lg">
            La Fête Commence Ici avec <span className="text-primary">Afrikaboom</span>!
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mb-8 drop-shadow-md">
            Découvrez nos incroyables structures gonflables pour des événements inoubliables au Sénégal. Parfait pour les anniversaires, les kermesses et toutes vos célébrations!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
              <Link href="/catalogue">Voir le Catalogue <ArrowRight className="ml-2" /></Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="font-bold">
              <Link href="/reservation">Réserver Maintenant</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="features" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Pourquoi Nous Choisir?</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              Nous offrons plus que des jeux, nous créons des souvenirs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <Card className="border-2 border-primary/20 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-primary/20 rounded-full p-4 w-fit">
                  <Castle className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="font-headline mt-4">Qualité Supérieure</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Des structures gonflables sûres, propres et conformes aux normes les plus strictes.</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-primary/20 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-primary/20 rounded-full p-4 w-fit">
                  <PartyPopper className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="font-headline mt-4">Service Client Royal</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Notre équipe est dédiée à rendre votre événement parfait, de la réservation à l'installation.</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-primary/20 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-primary/20 rounded-full p-4 w-fit">
                  <Bot className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="font-headline mt-4">Planification Facile</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Utilisez notre planificateur IA pour trouver la configuration parfaite pour votre fête en quelques clics.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="featured-inflatables" className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Nos Structures Étoiles</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              Les favoris de nos clients pour un maximum de fun.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredInflatables.map((inflatable) => (
              <InflatableCard key={inflatable.id} inflatable={inflatable} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/catalogue">Explorer Tout le Catalogue <ArrowRight className="ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>
      
      <section id="ai-planner" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Planifiez l'Événement Parfait avec l'IA</h2>
              <p className="text-muted-foreground mb-6">
                Vous ne savez pas par où commencer? Notre assistant intelligent vous recommande les meilleures structures gonflables en fonction de votre type d'événement, du groupe d'âge et de l'espace disponible. Simplifiez votre organisation et garantissez le succès de votre fête.
              </p>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/planificateur-ia">Essayer le Planificateur IA <Bot className="ml-2" /></Link>
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

      <section id="gallery-preview" className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Moments de Joie</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              Voyez le bonheur en action dans notre galerie d'événements passés.
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
              <Link href="/galerie">Visiter la Galerie Complète <ArrowRight className="ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
