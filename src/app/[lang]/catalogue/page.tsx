
import { inflatableCatalogue } from '@/lib/data';
import { InflatableCard } from '@/components/inflatable-card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getDictionary } from '@/dictionaries';
import { Locale } from '../../../../i18n-config';

export default async function CataloguePage({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang);
  const t = dictionary.CataloguePage;
  const ti = dictionary.Inflatables;

  const categories = ['all', ...Array.from(new Set(inflatableCatalogue.map(item => item.category)))];

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold font-headline">{t.title}</h1>
        <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
          {t.subtitle1}
        </p>
        <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
          {t.subtitle2}
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 h-auto">
                <TabsTrigger value="all">{t.all_category}</TabsTrigger>
                {categories.slice(1).map(category => (
                    <TabsTrigger key={category} value={category}>{ti[`category_${category}`]}</TabsTrigger>
                ))}
            </TabsList>
        </div>

        <TabsContent value="all">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {inflatableCatalogue.map(inflatable => (
              <InflatableCard key={inflatable.id} inflatable={inflatable} lang={lang} dictionary={ti} />
            ))}
          </div>
        </TabsContent>
        {categories.slice(1).map(category => (
            <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {inflatableCatalogue
                        .filter(item => item.category === category)
                        .map(inflatable => (
                            <InflatableCard key={inflatable.id} inflatable={inflatable} lang={lang} dictionary={ti} />
                        ))
                    }
                </div>
            </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
