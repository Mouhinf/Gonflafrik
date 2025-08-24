'use server';
/**
 * @fileOverview An AI tool to suggest optimal inflatable configurations and combinations based on event type, age group, and space dimensions.
 *
 * - suggestInflatableConfigurations - A function that handles the inflatable configuration suggestion process.
 * - SuggestInflatableConfigurationsInput - The input type for the suggestInflatableConfigurations function.
 * - SuggestInflatableConfigurationsOutput - The return type for the suggestInflatableConfigurations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestInflatableConfigurationsInputSchema = z.object({
  eventType: z
    .string()
    .describe('The type of event (e.g., birthday party, corporate event, school fair).'),
  ageGroup: z
    .string()
    .describe('The age group of the participants (e.g., children, teenagers, adults, mixed).'),
  spaceDimensions: z
    .string()
    .describe('The dimensions of the space available for the inflatable structures (e.g., 20x30 feet, large backyard, indoor gymnasium).'),
  additionalDetails: z
    .string()
    .optional()
    .describe('Any additional details or preferences for the inflatable configurations.'),
});
export type SuggestInflatableConfigurationsInput = z.infer<typeof SuggestInflatableConfigurationsInputSchema>;

const SuggestInflatableConfigurationsOutputSchema = z.object({
  suggestedConfigurations: z
    .string()
    .describe('A detailed description of the suggested inflatable configurations and combinations, including specific types of inflatables and their arrangement.'),
  suitabilityExplanation: z
    .string()
    .describe('An explanation of why the suggested configurations are suitable for the given event type, age group, and space dimensions.'),
  estimatedCost: z
    .string()
    .optional()
    .describe('An estimate of the total cost for renting the suggested inflatable configurations.'),
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
  prompt: `You are an expert event planner specializing in inflatable structures.

  Based on the event type, age group, and space dimensions provided, suggest optimal inflatable configurations and combinations.

  Event Type: {{{eventType}}}
  Age Group: {{{ageGroup}}}
  Space Dimensions: {{{spaceDimensions}}}
  Additional Details: {{{additionalDetails}}}

  Provide a detailed description of the suggested configurations, explain why they are suitable, and estimate the total cost.
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
