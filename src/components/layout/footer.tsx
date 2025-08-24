import Link from 'next/link';
import { Wind, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Wind className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold font-headline text-primary">Afrikaboom</span>
            </Link>
            <p className="text-sm text-muted-foreground">Créateurs de joie et d'événements inoubliables.</p>
          </div>
          <div>
            <h3 className="font-headline font-semibold text-foreground tracking-wider uppercase">Navigation</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/catalogue" className="text-sm text-muted-foreground hover:text-primary">Catalogue</Link></li>
              <li><Link href="/galerie" className="text-sm text-muted-foreground hover:text-primary">Galerie</Link></li>
              <li><Link href="/blog" className="text-sm text-muted-foreground hover:text-primary">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline font-semibold text-foreground tracking-wider uppercase">Assistance</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contactez-nous</Link></li>
              <li><Link href="/reservation" className="text-sm text-muted-foreground hover:text-primary">Réserver</Link></li>
              <li><Link href="/planificateur-ia" className="text-sm text-muted-foreground hover:text-primary">Planificateur IA</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline font-semibold text-foreground tracking-wider uppercase">Suivez-nous</h3>
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
          <p>&copy; {new Date().getFullYear()} Afrikaboom. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
