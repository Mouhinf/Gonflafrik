'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { suggestInflatableConfigurations, SuggestInflatableConfigurationsOutput } from '@/ai/flows/suggest-inflatable-configurations';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Bot, Loader2, Sparkles, PartyPopper, DollarSign } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  eventType: z.string().min(1, 'Le type d\'événement est requis.'),
  ageGroup: z.string().min(1, 'Le groupe d\'âge est requis.'),
  spaceDimensions: z.string().min(1, 'Les dimensions de l\'espace sont requises.'),
  additionalDetails: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function AIPlannerPage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<SuggestInflatableConfigurationsOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      eventType: '',
      ageGroup: '',
      spaceDimensions: '',
      additionalDetails: '',
    },
  });

  async function onSubmit(values: FormValues) {
    setLoading(true);
    setResult(null);
    try {
      const response = await suggestInflatableConfigurations(values);
      setResult(response);
    } catch (error) {
      console.error('Erreur du planificateur IA:', error);
      toast({
        title: 'Oh non! Une erreur est survenue.',
        description: "Notre assistant IA est peut-être en train de rebondir trop fort. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <Bot className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="text-4xl md:text-5xl font-extrabold font-headline">Planificateur d'Événements IA</h1>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          Laissez notre intelligence artificielle concevoir la fête parfaite pour vous. Décrivez simplement votre événement et nous vous suggérerons les meilleures structures gonflables.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-16">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Décrivez votre événement</CardTitle>
            <CardDescription>Remplissez les détails ci-dessous pour obtenir votre suggestion personnalisée.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="eventType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Type d'événement</FormLabel>
                       <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionnez un type d'événement" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Fête d'anniversaire">Fête d'anniversaire</SelectItem>
                          <SelectItem value="Événement d'entreprise">Événement d'entreprise</SelectItem>
                          <SelectItem value="Fête d'école">Fête d'école</SelectItem>
                          <SelectItem value="Rassemblement communautaire">Rassemblement communautaire</SelectItem>
                          <SelectItem value="Autre">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="ageGroup"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Groupe d'âge des participants</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionnez un groupe d'âge" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Enfants (3-7 ans)">Enfants (3-7 ans)</SelectItem>
                          <SelectItem value="Enfants (8-12 ans)">Enfants (8-12 ans)</SelectItem>
                          <SelectItem value="Adolescents">Adolescents</SelectItem>
                          <SelectItem value="Adultes">Adultes</SelectItem>
                          <SelectItem value="Mixte">Mixte</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="spaceDimensions"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Dimensions de l'espace</FormLabel>
                      <FormControl>
                        <Input placeholder="Ex: 10x15 mètres, grand jardin..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="additionalDetails"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Détails supplémentaires (facultatif)</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Des thèmes spécifiques, des préférences ou des contraintes?" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <Button type="submit" disabled={loading} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Génération en cours...
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-4 w-4" />
                      Obtenir ma suggestion
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        <div className="mt-8 md:mt-0">
          <Card className="bg-secondary/30 min-h-full">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Votre Configuration Recommandée</CardTitle>
            </CardHeader>
            <CardContent>
              {loading && (
                <div className="flex flex-col items-center justify-center text-center h-64">
                  <Loader2 className="h-12 w-12 animate-spin text-primary" />
                  <p className="mt-4 text-muted-foreground">Notre IA réfléchit...</p>
                </div>
              )}
              {!loading && !result && (
                <div className="flex flex-col items-center justify-center text-center h-64">
                   <PartyPopper className="h-12 w-12 text-muted-foreground" />
                  <p className="mt-4 text-muted-foreground">Vos résultats apparaîtront ici.</p>
                </div>
              )}
              {result && (
                <div className="space-y-6 animate-in fade-in-50 duration-500">
                  <div>
                    <h3 className="font-semibold text-lg font-headline flex items-center gap-2"><PartyPopper className="h-5 w-5 text-accent"/>Configurations suggérées</h3>
                    <p className="text-muted-foreground mt-1">{result.suggestedConfigurations}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg font-headline flex items-center gap-2"><Sparkles className="h-5 w-5 text-accent"/>Explication</h3>
                    <p className="text-muted-foreground mt-1">{result.suitabilityExplanation}</p>
                  </div>
                  {result.estimatedCost && (
                     <div>
                      <h3 className="font-semibold text-lg font-headline flex items-center gap-2"><DollarSign className="h-5 w-5 text-accent"/>Coût estimé</h3>
                      <p className="text-muted-foreground mt-1">{result.estimatedCost}</p>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
