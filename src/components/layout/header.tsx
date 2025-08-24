
'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu, Globe, Wind } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { i18n, type Locale } from '../../../i18n-config';

const navLinks = [
  { href: '/catalogue', label: 'Catalogue' },
  { href: '/galerie', label: 'Galerie' },
  { href: '/blog', label: 'Blog' },
  { href: '/planificateur-ia', label: 'Planificateur IA' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/contact', label: 'Contact' },
];

function NavLink({ href, label, className, lang }: { href: string; label: string; className?: string, lang: Locale }) {
  const pathname = usePathname();
  const isActive = pathname === `/${lang}${href}`;

  return (
    <Link
      href={`/${lang}${href}`}
      className={cn(
        "transition-colors hover:text-primary",
        isActive ? "text-primary font-semibold" : "",
        className
      )}
    >
      {label}
    </Link>
  );
}

export default function Header() {
  const pathname = usePathname();
  const lang = pathname.split('/')[1] as Locale;
  
  const redirectedPathName = (locale: Locale) => {
    if (!pathname) return '/'
    const segments = pathname.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <Link href={`/${lang}`} className="mr-6 flex items-center space-x-2">
          <Wind className="h-8 w-8 text-primary" />
          <span className="font-bold text-2xl font-headline text-primary">GONFL'AFRIK</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} lang={lang} />
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2 sm:space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Globe className="h-[1.2rem] w-[1.2rem]" />
                <span className="sr-only">Changer de langue</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href={redirectedPathName('fr')}>Français</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                 <Link href={redirectedPathName('en')}>English</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button asChild className="hidden md:inline-flex bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-full px-6">
            <Link href={`/${lang}/reservation`}>Réserver</Link>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Ouvrir le menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-6 text-lg font-medium mt-10">
                <Link href={`/${lang}`} className="flex items-center gap-2 text-lg font-semibold mb-4">
                  <Wind className="h-8 w-8 text-primary" />
                  <span className="font-bold text-2xl font-headline text-primary">GONFL'AFRIK</span>
                </Link>
                {navLinks.map((link) => (
                    <SheetClose key={link.href} asChild>
                        <NavLink {...link} lang={lang} />
                    </SheetClose>
                ))}
                <SheetClose asChild>
                  <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-full px-6 mt-4">
                    <Link href={`/${lang}/reservation`}>Réserver</Link>
                  </Button>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
