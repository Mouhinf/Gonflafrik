import Image from 'next/image';
import { galleryImages } from '@/lib/data';
import { getDictionary } from '@/dictionaries';
import { Locale } from '../../../../i18n-config';

export default async function GalleryPage({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang);
  const t = dictionary.GalleryPage;

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold font-headline">{t.title}</h1>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          {t.subtitle}
        </p>
      </div>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {galleryImages.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg break-inside-avoid">
            <Image
              src={image.src}
              alt={image.alt}
              width={500}
              height={500}
              className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
              data-ai-hint={image.hint}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
