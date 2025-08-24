
import Image from 'next/image';
import { Building, Target, Users, Wind, Globe, Rocket, Handshake, Brush } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold font-headline">À Propos de <span className="text-primary">GONFL'AFRIK</span></h1>
        <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
          GONFL’AFRIK est une entreprise spécialisée dans la location, la vente et l’animation avec structures gonflables. Basée au Sénégal, notre mission est d’apporter de la joie, du divertissement et une touche d’originalité à tous types d’événements : anniversaires, mariages, baptêmes, kermesses, fêtes scolaires, événements d’entreprise, dîners de gala et bien plus encore.
        </p>
         <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
          Nous mettons un point d’honneur à garantir sécurité, qualité et créativité, afin que chaque moment passé avec nos structures soit une expérience inoubliable.
        </p>
      </div>

      <div className="mb-24 bg-card p-8 md:p-12 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold font-headline text-center mb-12">🎯 Nos perspectives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
            <div className="flex items-start gap-4">
              <div className="bg-primary/20 rounded-full p-3">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-headline text-lg mb-1">Expansion Panafricaine</h3>
                <p className="text-muted-foreground text-sm">Élargir nos services à travers toute l’Afrique, pour être un acteur majeur de l’animation événementielle sur le continent.</p>
              </div>
            </div>
             <div className="flex items-start gap-4">
              <div className="bg-primary/20 rounded-full p-3">
                <Rocket className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-headline text-lg mb-1">Innovation Continue</h3>
                <p className="text-muted-foreground text-sm">Proposer des structures innovantes et thématiques, adaptées à la diversité culturelle africaine.</p>
              </div>
            </div>
             <div className="flex items-start gap-4">
              <div className="bg-primary/20 rounded-full p-3">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-headline text-lg mb-1">Solutions Clés en Main</h3>
                <p className="text-muted-foreground text-sm">Offrir des solutions complètes pour l’organisation d’événements, allant de l’animation à la décoration.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/20 rounded-full p-3">
                <Handshake className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-headline text-lg mb-1">Partenariats Stratégiques</h3>
                <p className="text-muted-foreground text-sm">Nouer des partenariats avec des écoles, entreprises, et institutions à travers l’Afrique.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/20 rounded-full p-3">
                <Brush className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-headline text-lg mb-1">Créativité Africaine</h3>
                <p className="text-muted-foreground text-sm">Valoriser la créativité locale en développant des designs inspirés de notre culture et de nos traditions.</p>
              </div>
            </div>
          </div>
      </div>

      <div className="text-center bg-primary/10 p-12 rounded-xl">
        <h2 className="text-3xl font-bold font-headline mb-4">Rejoignez l'Aventure GONFL'AFRIK</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Chez GONFL’AFRIK, nous croyons que chaque fête, où qu’elle soit en Afrique, mérite d’être unique et mémorable. Prêt à créer des souvenirs inoubliables ?
        </p>
        <Link href="/contact" className="inline-flex items-center justify-center h-11 px-8 rounded-md text-sm font-medium text-primary-foreground bg-primary hover:bg-primary/90">
          Contactez-nous
        </Link>
      </div>
    </div>
  );
}
