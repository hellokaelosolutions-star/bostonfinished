import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const cars = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/cars' }),
  schema: z.object({
    brand: z.string(),
    model: z.string(),
    /** Editorial descriptor pair shown under the model name, e.g. "Performance · Luxury". */
    category: z.string(),
    /** Public path under /uploads, e.g. "/uploads/cars/xyz.jpg". Set via the CMS image picker. */
    image: z.string(),
    alt: z.string(),

    year: z.number().optional(),
    price: z.string().optional(),
    fuel: z.string().optional(),
    transmission: z.string().optional(),
    mileage: z.string().optional(),
    engine: z.string().optional(),
    location: z.string().optional(),
    description: z.string().optional(),
    gallery: z.array(z.string()).optional(),
    status: z.enum(['available', 'sold']).optional(),
  }),
});

export const collections = { cars };
