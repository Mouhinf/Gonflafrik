import Image from 'next/image';
import Link from 'next/link';
import type { BlogPost } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Calendar } from 'lucide-react';
import { Locale } from '../../i18n-config';
import { useDictionary } from '@/hooks/use-dictionary';


export function BlogPostCard({ post, lang }: { post: any, lang: Locale }) {
  const dictionary = useDictionary(lang);
  const t = dictionary?.BlogPage;

  if (!t) return null;
  
  const postDate = new Date(post.date);
  const formattedDate = !isNaN(postDate.getTime()) ? postDate.toLocaleDateString(lang, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
  }) : 'Invalid Date';

  return (
    <Link href={`/${lang}/blog/${post.slug}`} className="group">
      <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-primary/20 hover:shadow-xl hover:-translate-y-1">
        <CardHeader className="p-0">
          <div className="relative h-56 w-full">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              data-ai-hint={post.hint}
            />
          </div>
        </CardHeader>
        <CardContent className="p-6 flex-grow">
          <Badge className="mb-2 bg-accent text-accent-foreground">{post.category}</Badge>
          <CardTitle className="font-headline text-xl mb-2 group-hover:text-primary transition-colors">{post.title}</CardTitle>
          <p className="text-muted-foreground text-sm">{post.excerpt}</p>
        </CardContent>
        <CardFooter className="p-6 pt-0 flex justify-between items-center text-sm text-muted-foreground">
            <div className='flex items-center gap-2'>
                <Calendar className="h-4 w-4" />
                <time dateTime={post.date}>
                    {formattedDate}
                </time>
            </div>
            <div className="flex items-center gap-1 text-primary font-semibold">
                {t.read_more} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
