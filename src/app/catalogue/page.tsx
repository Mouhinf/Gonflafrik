import { inflatableCatalogue } from '@/lib/data';
import { InflatableCard } from '@/components/inflatable-card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CataloguePage() {
  const categories = ['Tous', ...Array.from(new Set(inflatableCatalogue.map(item => item.category)))];

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold font-headline">Notre Catalogue de Rêves</h1>
        <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
          Anniversaire, mariage, baptême, kermesse, dîner de gala, fête scolaire ou événement d’entreprise… quelle que soit l’occasion, nos structures gonflables apportent une touche unique d’animation, de divertissement et d’élégance. Avec GONFL’AFRIK, chaque instant devient inoubliable !
        </p>
      </div>

      <Tabs defaultValue="Tous" className="w-full">
        <div className="flex justify-center mb-8">
            <TabsList>
                {categories.map(category => (
                    <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
                ))}
            </TabsList>
        </div>

        {categories.map(category => (
            <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {inflatableCatalogue
                        .filter(item => category === 'Tous' || item.category === category)
                        .map(inflatable => (
                            <InflatableCard key={inflatable.id} inflatable={inflatable} />
                        ))
                    }
                </div>
            </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
