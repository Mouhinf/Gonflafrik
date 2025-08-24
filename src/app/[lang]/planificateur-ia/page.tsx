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
import { useDictionary } from '@/hooks/use-dictionary';
import { Locale } from '../../../../i18n-config';

export default function AIPlannerPage({ params: { lang } }: { params: { lang: Locale } }) {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<SuggestInflatableConfigurationsOutput | null>(null);
  const { toast } = useToast();
  const dictionary = useDictionary(lang);
  const t = dictionary?.AIPlannerPage;

  const formSchema = z.object({
    eventType: z.string().min(1, t?.error_event_type_required),
    ageGroup: z.string().min(1, t?.error_age_group_required),
    spaceDimensions: z.string().min(1, t?.error_space_dimensions_required),
    additionalDetails: z.string().optional(),
  });

  type FormValues = z.infer<typeof formSchema>;

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
      console.error(t?.log_error_prefix, error);
      toast({
        title: t?.toast_error_title,
        description: t?.toast_error_description,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }

  if (!t) return null;

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <Bot className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="text-4xl md:text-5xl font-extrabold font-headline">{t.title}</h1>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          {t.subtitle}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-16">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-2xl">{t.form_title}</CardTitle>
            <CardDescription>{t.form_description}</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="eventType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t.event_type_label}</FormLabel>
                       <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder={t.event_type_placeholder} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value={t.event_type_option1}>{t.event_type_option1}</SelectItem>
                          <SelectItem value={t.event_type_option2}>{t.event_type_option2}</SelectItem>
                          <SelectItem value={t.event_type_option3}>{t.event_type_option3}</SelectItem>
                          <SelectItem value={t.event_type_option4}>{t.event_type_option4}</SelectItem>
                          <SelectItem value={t.event_type_option5}>{t.event_type_option5}</SelectItem>
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
                      <FormLabel>{t.age_group_label}</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder={t.age_group_placeholder} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value={t.age_group_option1}>{t.age_group_option1}</SelectItem>
                          <SelectItem value={t.age_group_option2}>{t.age_group_option2}</SelectItem>
                          <SelectItem value={t.age_group_option3}>{t.age_group_option3}</SelectItem>
                          <SelectItem value={t.age_group_option4}>{t.age_group_option4}</SelectItem>
                          <SelectItem value={t.age_group_option5}>{t.age_group_option5}</SelectItem>
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
                      <FormLabel>{t.space_dimensions_label}</FormLabel>
                      <FormControl>
                        <Input placeholder={t.space_dimensions_placeholder} {...field} />
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
                      <FormLabel>{t.additional_details_label}</FormLabel>
                      <FormControl>
                        <Textarea placeholder={t.additional_details_placeholder} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <Button type="submit" disabled={loading} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      {t.button_loading}
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-4 w-4" />
                      {t.button_submit}
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
              <CardTitle className="font-headline text-2xl">{t.results_title}</CardTitle>
            </CardHeader>
            <CardContent>
              {loading && (
                <div className="flex flex-col items-center justify-center text-center h-64">
                  <Loader2 className="h-12 w-12 animate-spin text-primary" />
                  <p className="mt-4 text-muted-foreground">{t.results_loading_text}</p>
                </div>
              )}
              {!loading && !result && (
                <div className="flex flex-col items-center justify-center text-center h-64">
                   <PartyPopper className="h-12 w-12 text-muted-foreground" />
                  <p className="mt-4 text-muted-foreground">{t.results_placeholder}</p>
                </div>
              )}
              {result && (
                <div className="space-y-6 animate-in fade-in-50 duration-500">
                  <div>
                    <h3 className="font-semibold text-lg font-headline flex items-center gap-2"><PartyPopper className="h-5 w-5 text-accent"/>{t.results_configurations_title}</h3>
                    <p className="text-muted-foreground mt-1">{result.suggestedConfigurations}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg font-headline flex items-center gap-2"><Sparkles className="h-5 w-5 text-accent"/>{t.results_explanation_title}</h3>
                    <p className="text-muted-foreground mt-1">{result.suitabilityExplanation}</p>
                  </div>
                  {result.estimatedCost && (
                     <div>
                      <h3 className="font-semibold text-lg font-headline flex items-center gap-2"><DollarSign className="h-5 w-5 text-accent"/>{t.results_cost_title}</h3>
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
