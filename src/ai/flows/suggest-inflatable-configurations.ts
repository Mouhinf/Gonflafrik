'use server';
/**
 * @fileOverview Un outil d'IA pour suggérer des configurations et des combinaisons de structures gonflables optimales en fonction du type d'événement, du groupe d'âge et des dimensions de l'espace.
 *
 * - suggestInflatableConfigurations - Une fonction qui gère le processus de suggestion de configuration de structure gonflable.
 * - SuggestInflatableConfigurationsInput - Le type d'entrée pour la fonction suggestInflatableConfigurations.
 * - SuggestInflatableConfigurationsOutput - Le type de retour pour la fonction suggestInflatableConfigurations.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestInflatableConfigurationsInputSchema = z.object({
  eventType: z
    .string()
    .describe("Le type d'événement (par exemple, fête d'anniversaire, événement d'entreprise, kermesse d'école)."),
  ageGroup: z
    .string()
    .describe("Le groupe d'âge des participants (par exemple, enfants, adolescents, adultes, mixte)."),
  spaceDimensions: z
    .string()
    .describe("Les dimensions de l'espace disponible pour les structures gonflables (par exemple, 20x30 mètres, grand jardin, gymnase intérieur)."),
  additionalDetails: z
    .string()
    .optional()
    .describe('Tous détails ou préférences supplémentaires pour les configurations de structures gonflables.'),
});
export type SuggestInflatableConfigurationsInput = z.infer<typeof SuggestInflatableConfigurationsInputSchema>;

const SuggestInflatableConfigurationsOutputSchema = z.object({
  suggestedConfigurations: z
    .string()
    .describe('Une description détaillée des configurations et combinaisons de structures gonflables suggérées, y compris les types spécifiques de structures gonflables et leur agencement.'),
  suitabilityExplanation: z
    .string()
    .describe("Une explication de la raison pour laquelle les configurations suggérées sont adaptées au type d'événement, au groupe d'âge et aux dimensions de l'espace donnés."),
  estimatedCost: z
    .string()
    .optional()
    .describe('Une estimation du coût total en Francs CFA (XOF) pour la location des configurations de structures gonflables suggérées.'),
});
export type SuggestInflatableConfigurationsOutput = z.infer<typeof SuggestInflatableConfigurationsOutputSchema>;

export async function suggestInflatableConfigurations(
  input: SuggestInflatableConfigurationsInput
): Promise<SuggestInflatableConfigurationsOutput> {
  return suggestInflatableConfigurationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestInflatableConfigurationsPrompt',
  input: {schema: SuggestInflatableConfigurationsInputSchema},
  output: {schema: SuggestInflatableConfigurationsOutputSchema},
  prompt: `Vous êtes un organisateur d'événements expert spécialisé dans les structures gonflables.

  En fonction du type d'événement, du groupe d'âge et des dimensions de l'espace fournis, suggérez des configurations et des combinaisons de structures gonflables optimales.

  Type d'événement : {{{eventType}}}
  Groupe d'âge : {{{ageGroup}}}
  Dimensions de l'espace : {{{spaceDimensions}}}
  Détails supplémentaires : {{{additionalDetails}}}

  Fournissez une description détaillée des configurations suggérées, expliquez pourquoi elles sont adaptées et estimez le coût total en Francs CFA (XOF). Répondez uniquement en français.
`,
});

const suggestInflatableConfigurationsFlow = ai.defineFlow(
  {
    name: 'suggestInflatableConfigurationsFlow',
    inputSchema: SuggestInflatableConfigurationsInputSchema,
    outputSchema: SuggestInflatableConfigurationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
