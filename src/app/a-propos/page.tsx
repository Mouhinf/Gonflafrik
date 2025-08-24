
import Image from 'next/image';
import { Building, Target, Users, Wind } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold font-headline">À Propos de <span className="text-primary">GONFL'AFRIK</span></h1>
        <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
          Plus qu'un simple fournisseur de structures gonflables, nous sommes des architectes de la joie, dédiés à transformer chaque événement en une célébration mémorable.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
        <div>
          <h2 className="text-3xl font-bold font-headline mb-4">Notre Histoire</h2>
          <p className="text-muted-foreground mb-4">
            Fondée au cœur du Sénégal, GONFL'AFRIK est née d'une idée simple : apporter plus de rires et de fun dans tous les types de rassemblements. Nous avons commencé avec quelques châteaux gonflables et une grande ambition. Aujourd'hui, nous sommes fiers de proposer le catalogue le plus varié de la région, avec un service qui place toujours nos clients au premier plan.
          </p>
          <p className="text-muted-foreground">
            Notre passion pour la fête et notre engagement envers la qualité et la sécurité nous ont permis de devenir un partenaire de confiance pour des centaines de familles, d'écoles et d'entreprises à travers le pays.
          </p>
        </div>
        <div className="relative h-80 w-full rounded-xl overflow-hidden shadow-lg">
          <Image
            src="https://placehold.co/600x400.png"
            alt="L'équipe de GONFL'AFRIK"
            fill
            className="object-cover"
            data-ai-hint="team smiling"
          />
        </div>
      </div>

      <div className="mb-24">
          <h2 className="text-3xl font-bold font-headline text-center mb-12">Nos Valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-primary/20 rounded-full p-4 mb-4">
                <Target className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-headline text-xl mb-2">Qualité & Sécurité</h3>
              <p className="text-muted-foreground">Nous ne faisons aucun compromis sur la sécurité. Toutes nos structures sont rigoureusement inspectées et conformes aux normes internationales.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary/20 rounded-full p-4 mb-4">
                <Users className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-headline text-xl mb-2">Satisfaction Client</h3>
              <p className="text-muted-foreground">Votre bonheur est notre moteur. Notre équipe est dévouée à vous offrir un service exceptionnel, du premier contact à l'après-événement.</p>
            </div>
             <div className="flex flex-col items-center">
              <div className="bg-primary/20 rounded-full p-4 mb-4">
                <Wind className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-headline text-xl mb-2">Innovation & Fun</h3>
              <p className="text-muted-foreground">Nous cherchons constamment à innover en proposant des structures originales et des expériences uniques pour pimenter vos fêtes.</p>
            </div>
          </div>
      </div>

      <div className="text-center bg-card p-12 rounded-xl shadow-inner">
        <h2 className="text-3xl font-bold font-headline mb-4">Rejoignez l'Aventure GONFL'AFRIK</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Prêt à créer des souvenirs inoubliables ? Explorez notre catalogue ou contactez-nous dès aujourd'hui pour planifier votre prochain événement.
        </p>
        <a href="/catalogue" className="inline-flex items-center justify-center h-11 px-8 rounded-md text-sm font-medium text-primary-foreground bg-primary hover:bg-primary/90">
          Voir le Catalogue
        </a>
      </div>
    </div>
  );
}
