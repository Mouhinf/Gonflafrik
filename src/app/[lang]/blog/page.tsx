'use client';

import { useState, useMemo, useEffect, use } from 'react';
import { blogPosts, blogCategories } from '@/lib/data';
import { BlogPostCard } from '@/components/blog-post-card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from '@/components/ui/input';
import { Locale } from '../../../../i18n-config';
import { useDictionary } from '@/hooks/use-dictionary';

export default function BlogPage({ params }: { params: { lang: Locale } }) {
  const { lang } = params;
  const dictionary = useDictionary(lang);
  const t = dictionary?.BlogPage;

  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const [sortOrder, setSortOrder] = useState('desc');
  
  useEffect(() => {
    if (t) {
      setCategory(t.all_category);
    }
  }, [t]);

  const filteredAndSortedPosts = useMemo(() => {
    if (!t) return [];
    
    const translatedPosts = blogPosts.map(post => ({
      ...post,
      title: t[post.titleKey as keyof typeof t] || post.titleKey,
      excerpt: t[post.excerptKey as keyof typeof t] || post.excerptKey,
      category: t[`category_${post.categoryKey}` as keyof typeof t] || post.categoryKey,
    }));
    
    return translatedPosts
      .filter(post => 
        (category === 'all' || post.category === category || category === t.all_category) &&
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return sortOrder === 'asc' ? dateA - dateB : dateB - a;
      });
  }, [searchTerm, category, sortOrder, t]);

  if (!t) return null;

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold font-headline">{t.title}</h1>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          {t.subtitle}
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-grow">
          <Input 
            placeholder={t.search_placeholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
        </div>
        <div className="flex gap-4">
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder={t.category_placeholder} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={t.all_category}>{t.all_category}</SelectItem>
              {blogCategories.slice(1).map(catKey => (
                <SelectItem key={catKey} value={t[`category_${catKey}`]}>{t[`category_${catKey}`]}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={sortOrder} onValueChange={setSortOrder}>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder={t.sort_placeholder} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="desc">{t.sort_newest}</SelectItem>
              <SelectItem value="asc">{t.sort_oldest}</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {filteredAndSortedPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAndSortedPosts.map(post => (
            <BlogPostCard key={post.slug} post={post} lang={lang} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
            <h3 className="text-2xl font-headline">{t.no_posts_title}</h3>
            <p className="text-muted-foreground mt-2">{t.no_posts_subtitle}</p>
        </div>
      )}
    </div>
  );
}
