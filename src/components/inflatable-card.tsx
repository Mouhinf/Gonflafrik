import Image from 'next/image';
import Link from 'next/link';
import type { Inflatable } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, ArrowRight } from 'lucide-react';
import type { Locale } from '../../../i18n-config';

export function InflatableCard({ inflatable, lang }: { inflatable: Inflatable, lang: Locale }) {
  return (
    <Card className="flex flex-col overflow-hidden h-full transition-all duration-300 hover:shadow-primary/20 hover:shadow-xl hover:-translate-y-1">
      <CardHeader className="p-0">
        <div className="relative h-56 w-full">
          <Image
            src={inflatable.image}
            alt={inflatable.name}
            fill
            className="object-cover"
            data-ai-hint={inflatable.hint}
          />
        </div>
        <div className="p-6">
          <Badge variant="secondary" className="mb-2">{inflatable.category}</Badge>
          <CardTitle className="font-headline text-xl">{inflatable.name}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground text-sm mb-4">{inflatable.description}</p>
        <div className="flex items-center gap-2 text-sm">
          <Users className="h-4 w-4 text-primary" />
          <span className="font-semibold">Âge:</span>
          <span>{inflatable.ageSuitability}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
          <Link href={`/${lang}/reservation`}>
            Réserver maintenant <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
