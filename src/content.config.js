import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const writing = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/writing" }),
  schema: z.object({
    id: z.string().optional(),
    title: z.string(),
    title_en: z.string(),
    date: z.string(),
    description: z.string(),
    description_en: z.string().optional(),
    lang: z.string().optional(),
  })
});

export const collections = { writing };
