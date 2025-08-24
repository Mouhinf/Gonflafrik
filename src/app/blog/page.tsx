'use client';

import { useState, useMemo } from 'react';
import { blogPosts, blogCategories } from '@/lib/data';
import { BlogPostCard } from '@/components/blog-post-card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from '@/components/ui/input';

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('Tous');
  const [sortOrder, setSortOrder] = useState('desc');

  const filteredAndSortedPosts = useMemo(() => {
    return blogPosts
      .filter(post => 
        (category === 'Tous' || post.category === category) &&
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
      });
  }, [searchTerm, category, sortOrder]);

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold font-headline">Notre Blog</h1>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          Conseils, actualités et histoires amusantes. Tout ce que vous devez savoir sur le monde des structures gonflables se trouve ici.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-grow">
          <Input 
            placeholder="Rechercher un article..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
        </div>
        <div className="flex gap-4">
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Catégorie" />
            </SelectTrigger>
            <SelectContent>
              {blogCategories.map(cat => (
                <SelectItem key={cat} value={cat}>{cat}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={sortOrder} onValueChange={setSortOrder}>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Trier par" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="desc">Plus récent</SelectItem>
              <SelectItem value="asc">Plus ancien</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {filteredAndSortedPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAndSortedPosts.map(post => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
            <h3 className="text-2xl font-headline">Aucun article trouvé</h3>
            <p className="text-muted-foreground mt-2">Essayez d'ajuster vos filtres de recherche.</p>
        </div>
      )}
    </div>
  );
}
