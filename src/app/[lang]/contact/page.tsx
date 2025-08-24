'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useToast } from '@/hooks/use-toast';

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, MessageSquare, Phone, Building } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useDictionary } from '@/hooks/use-dictionary';
import type { Locale } from '../../../i18n-config';


export default function ContactPage({ params: { lang } }: { params: { lang: Locale } }) {
  const { toast } = useToast();
  const [captchaNumbers, setCaptchaNumbers] = useState({a: 0, b: 0});
  const dictionary = useDictionary(lang);
  const t = dictionary?.ContactPage;

  const contactSchema = z.object({
    name: z.string().min(2, t?.error_name_required || 'Le nom est requis.'),
    email: z.string().email(t?.error_email_invalid || 'Adresse e-mail invalide.'),
    subject: z.string().min(1, t?.error_subject_required || 'Le sujet est requis.'),
    message: z.string().min(10, t?.error_message_min_length || 'Le message doit contenir au moins 10 caractères.'),
    captcha: z.string().refine(val => val === '7', {
      message: t?.error_captcha_incorrect || 'Réponse incorrecte.',
    }),
  });

  type ContactFormValues = z.infer<typeof contactSchema>;

  useEffect(() => {
    // Note: This is a very basic captcha for demonstration purposes.
    // In a real app, use a service like hCaptcha or reCAPTCHA.
    // For now, let's hardcode the values to ensure the answer is always 7.
    setCaptchaNumbers({ a: 3, b: 4 });
  }, []);


  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
      captcha: '',
    },
  });
  
  useEffect(() => {
    // We need to re-validate when the language changes
    form.trigger();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t]);


  function onSubmit(data: ContactFormValues) {
    console.log(data);
    toast({
      title: t?.toast_success_title,
      description: t?.toast_success_description,
    });
    form.reset();
  }

  if (!t) return null;

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold font-headline">{t.title}</h1>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
         {t.subtitle}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-2xl">{t.form_title}</CardTitle>
            <CardDescription>{t.form_description}</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField control={form.control} name="name" render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t.field_name_label}</FormLabel>
                      <FormControl><Input placeholder={t.field_name_placeholder} {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                   <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t.field_email_label}</FormLabel>
                      <FormControl><Input placeholder={t.field_email_placeholder} {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>
                 <FormField control={form.control} name="subject" render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t.field_subject_label}</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger><SelectValue placeholder={t.field_subject_placeholder} /></SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value={t.subject_option1}>{t.subject_option1}</SelectItem>
                          <SelectItem value={t.subject_option2}>{t.subject_option2}</SelectItem>
                          <SelectItem value={t.subject_option3}>{t.subject_option3}</SelectItem>
                          <SelectItem value={t.subject_option4}>{t.subject_option4}</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )} />
                 <FormField control={form.control} name="message" render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t.field_message_label}</FormLabel>
                      <FormControl><Textarea placeholder={t.field_message_placeholder} {...field} rows={6} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                <FormField control={form.control} name="captcha" render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t.field_captcha_label}</FormLabel>
                      <FormControl>
                        <Input placeholder={t.field_captcha_placeholder.replace('{a}', captchaNumbers.a.toString()).replace('{b}', captchaNumbers.b.toString())} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" size="lg">{t.button_submit}</Button>
              </form>
            </Form>
          </CardContent>
        </Card>
        <div className="space-y-8 mt-8 md:mt-0">
          <h3 className="text-2xl font-headline">{t.contact_details_title}</h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/20 p-3 rounded-full">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">{t.contact_email_title}</h4>
                <p className="text-muted-foreground">contact@gonflafrik.sn</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/20 p-3 rounded-full">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">{t.contact_phone_title}</h4>
                <p className="text-muted-foreground">+221 77 123 45 67</p>
              </div>
            </div>
             <div className="flex items-start gap-4">
              <div className="bg-primary/20 p-3 rounded-full">
                <Building className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">{t.contact_address_title}</h4>
                <p className="text-muted-foreground">123 Avenue Cheikh Anta Diop, Dakar, Sénégal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

    