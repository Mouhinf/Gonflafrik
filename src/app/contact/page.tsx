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

const contactSchema = z.object({
  name: z.string().min(2, 'Le nom est requis.'),
  email: z.string().email('Adresse e-mail invalide.'),
  subject: z.string().min(1, 'Le sujet est requis.'),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères.'),
  captcha: z.string().refine(val => val === '7', {
    message: 'Réponse incorrecte.',
  }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const { toast } = useToast();
  const [captchaNumbers, setCaptchaNumbers] = useState({a: 0, b: 0});

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

  function onSubmit(data: ContactFormValues) {
    console.log(data);
    toast({
      title: 'Message envoyé !',
      description: 'Merci de nous avoir contactés. Nous vous répondrons dans les plus brefs délais.',
    });
    form.reset();
  }

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold font-headline">Contactez-Nous</h1>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          Une question ? Une demande spéciale ? N'hésitez pas à nous joindre. Notre équipe est là pour vous aider à organiser l'événement parfait.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Envoyez-nous un message</CardTitle>
            <CardDescription>Remplissez le formulaire et nous vous recontacterons.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField control={form.control} name="name" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nom</FormLabel>
                      <FormControl><Input placeholder="Votre nom" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                   <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl><Input placeholder="Votre adresse e-mail" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>
                 <FormField control={form.control} name="subject" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Sujet</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger><SelectValue placeholder="Sélectionnez un sujet" /></SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Question générale">Question générale</SelectItem>
                          <SelectItem value="Demande de devis">Demande de devis</SelectItem>
                          <SelectItem value="Partenariat">Partenariat</SelectItem>
                          <SelectItem value="Autre">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )} />
                 <FormField control={form.control} name="message" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl><Textarea placeholder="Votre message..." {...field} rows={6} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                <FormField control={form.control} name="captcha" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Vérification de sécurité</FormLabel>
                      <FormControl>
                        <Input placeholder={`Combien font ${captchaNumbers.a} + ${captchaNumbers.b} ?`} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" size="lg">Envoyer le message</Button>
              </form>
            </Form>
          </CardContent>
        </Card>
        <div className="space-y-8 mt-8 md:mt-0">
          <h3 className="text-2xl font-headline">Nos Coordonnées</h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/20 p-3 rounded-full">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-muted-foreground">contact@gonflafrik.sn</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/20 p-3 rounded-full">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">Téléphone</h4>
                <p className="text-muted-foreground">+221 77 123 45 67</p>
              </div>
            </div>
             <div className="flex items-start gap-4">
              <div className="bg-primary/20 p-3 rounded-full">
                <Building className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">Adresse</h4>
                <p className="text-muted-foreground">123 Avenue Cheikh Anta Diop, Dakar, Sénégal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
