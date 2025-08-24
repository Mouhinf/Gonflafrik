
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Locale, i18n } from '../../../../../i18n-config';
import { getDictionary } from '@/dictionaries';

// This function can be used by Next.js to generate static pages for each blog post at build time.
export async function generateStaticParams() {
  const paths = i18n.locales.flatMap((locale) => 
    blogPosts.map((post) => ({
      lang: locale,
      slug: post.slug,
    }))
  );
  return paths;
}

export default async function BlogPostPage({ params }: { params: { slug: string, lang: Locale } }) {
  const dictionary = await getDictionary(params.lang);
  const t = dictionary.BlogPage;

  const postData = blogPosts.find((p) => p.slug === params.slug);

  if (!postData) {
    notFound();
  }

  const post = {
    ...postData,
    title: t[postData.titleKey as keyof typeof t] || postData.titleKey,
    excerpt: t[postData.excerptKey as keyof typeof t] || postData.excerptKey,
    category: t[`category_${postData.categoryKey}` as keyof typeof t] || postData.categoryKey,
    content: t[postData.contentKey as keyof typeof t] || postData.contentKey,
    content2: t[postData.contentKey2 as keyof typeof t] || postData.contentKey2,
    content3: t[postData.contentKey3 as keyof typeof t] || postData.contentKey3,
  };


  const postDate = new Date(post.date);
  const formattedDate = !isNaN(postDate.getTime()) ? postDate.toLocaleDateString(params.lang, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
  }) : 'Invalid Date';

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 max-w-4xl">
      <div className="mb-8">
        <Button variant="ghost" asChild>
          <Link href={`/${params.lang}/blog`} className="inline-flex items-center text-primary hover:text-primary/90">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t.back_to_blog}
          </Link>
        </Button>
      </div>
      
      <article>
        <header className="mb-8 text-center">
            <Badge className="mb-4 bg-accent text-accent-foreground">{post.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold font-headline mb-4">{post.title}</h1>
            <div className="flex justify-center items-center gap-2 text-muted-foreground text-sm">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.date}>
                    {t.published_on} {formattedDate}
                </time>
            </div>
        </header>
        
        <div className="relative h-64 md:h-96 w-full rounded-xl overflow-hidden shadow-lg mb-12">
            <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                data-ai-hint={post.hint}
                priority
            />
        </div>

        <div className="prose prose-lg max-w-none mx-auto text-foreground/90 space-y-6 text-lg">
            {/* The following is placeholder content. A real blog would source this from a CMS. */}
            <p className="lead text-xl text-muted-foreground">{post.excerpt}</p>
            <p>
                {post.content}
            </p>
            <p>
                {post.content2}
            </p>
            <h3 className="font-headline text-3xl mt-12 mb-4 !text-foreground">{t.blog_post_subtitle_example}</h3>
            <p>
                {post.content3}
            </p>
            <blockquote className="border-l-4 border-primary pl-6 italic text-muted-foreground my-8">
                "La meilleure façon de prédire l'avenir est de le créer." - Abraham Lincoln (à titre d'exemple)
            </blockquote>
            <p>
                Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi. Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc.
            </p>
        </div>
      </article>
    </div>
  );
}
