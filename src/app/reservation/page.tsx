'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { format } from "date-fns"
import { fr } from "date-fns/locale"

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog"
import { inflatableCatalogue } from '@/lib/data';
import { cn } from '@/lib/utils';
import { CalendarIcon, User, Mail, Phone, MapPin } from 'lucide-react';

const reservationSchema = z.object({
  name: z.string().min(2, 'Le nom est requis.'),
  email: z.string().email('Adresse e-mail invalide.'),
  phone: z.string().optional(),
  eventDate: z.date({
    required_error: "Une date pour l'événement est requise.",
  }),
  location: z.string().min(3, 'Le lieu est requis.'),
  inflatables: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: 'Vous devez sélectionner au moins une structure gonflable.',
  }),
  comments: z.string().optional(),
});

type ReservationFormValues = z.infer<typeof reservationSchema>;

export default function ReservationPage() {
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [bookingSummary, setBookingSummary] = useState<ReservationFormValues | null>(null);

  const form = useForm<ReservationFormValues>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      location: '',
      inflatables: [],
      comments: '',
    },
  });

  function onSubmit(data: ReservationFormValues) {
    console.log(data);
    setBookingSummary(data);
    setShowSuccessDialog(true);
    form.reset();
  }
  
  const selectedInflatables = inflatableCatalogue.filter(item => bookingSummary?.inflatables.includes(item.id));

  return (
    <>
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold font-headline">Réservez Votre Aventure Gonflable</h1>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Prêt à faire la fête ? Remplissez le formulaire ci-dessous pour réserver vos structures gonflables. C'est simple, rapide et le premier pas vers un événement mémorable.
          </p>
        </div>
        <Card className="max-w-4xl mx-auto shadow-xl">
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Formulaire de Réservation</CardTitle>
            <CardDescription>Les champs marqués d'un * sont obligatoires.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <FormField control={form.control} name="name" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nom complet *</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input placeholder="Votre nom" {...field} className="pl-10" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                   <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email *</FormLabel>
                      <FormControl>
                        <div className="relative">
                           <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input placeholder="Votre adresse e-mail" {...field} className="pl-10" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                   <FormField control={form.control} name="phone" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Téléphone</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input placeholder="Votre numéro de téléphone" {...field} className="pl-10" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="eventDate" render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Date de l'événement *</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button variant={"outline"} className={cn("pl-3 text-left font-normal", !field.value && "text-muted-foreground")}>
                              {field.value ? (format(field.value, "PPP", { locale: fr })) : (<span>Choisissez une date</span>)}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar mode="single" selected={field.value} onSelect={field.onChange} disabled={(date) => date < new Date() || date < new Date("1900-01-01")} initialFocus locale={fr} />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>
                <FormField control={form.control} name="location" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Lieu de l'événement *</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="Adresse complète" {...field} className="pl-10" />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <FormField control={form.control} name="inflatables" render={() => (
                  <FormItem>
                    <div className="mb-4">
                      <FormLabel className="text-base">Choisissez vos structures gonflables *</FormLabel>
                      <FormDescription>Sélectionnez une ou plusieurs options.</FormDescription>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {inflatableCatalogue.map((item) => (
                        <FormField key={item.id} control={form.control} name="inflatables" render={({ field }) => {
                          return (
                            <FormItem key={item.id} className="flex flex-row items-center space-x-3 space-y-0 rounded-md border p-4 has-[[data-state=checked]]:bg-secondary/50">
                              <FormControl>
                                <Checkbox checked={field.value?.includes(item.id)} onCheckedChange={(checked) => {
                                  return checked ? field.onChange([...(field.value || []), item.id]) : field.onChange(field.value?.filter((value) => value !== item.id));
                                }} />
                              </FormControl>
                              <FormLabel className="font-normal">{item.name}</FormLabel>
                            </FormItem>
                          );
                        }} />
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )} />
                 <FormField control={form.control} name="comments" render={({ field }) => (
                    <FormItem>
                        <FormLabel>Commentaires ou demandes spéciales</FormLabel>
                        <FormControl>
                            <Textarea placeholder="Indiquez ici toute information supplémentaire." className="resize-y" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />

                <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Envoyer ma demande de réservation</Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>

      <AlertDialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="font-headline text-2xl text-primary">🎉 Réservation Envoyée !</AlertDialogTitle>
            <AlertDialogDescription>
              Merci, {bookingSummary?.name} ! Nous avons bien reçu votre demande de réservation. Un membre de notre équipe vous contactera par e-mail à l'adresse <strong>{bookingSummary?.email}</strong> sous peu pour confirmer les détails.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="my-4">
            <h4 className="font-semibold mb-2">Résumé de votre demande :</h4>
            <ul className="text-sm text-muted-foreground space-y-2">
                <li><strong>Date :</strong> {bookingSummary?.eventDate ? format(bookingSummary.eventDate, "PPP", { locale: fr }) : ''}</li>
                <li><strong>Lieu :</strong> {bookingSummary?.location}</li>
                <li>
                    <strong>Structures :</strong>
                    <ul className="list-disc pl-5 mt-1">
                        {selectedInflatables.map(item => <li key={item.id}>{item.name}</li>)}
                    </ul>
                </li>
            </ul>
          </div>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setShowSuccessDialog(false)}>Fermer</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
