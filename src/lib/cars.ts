import { getCollection } from 'astro:content';

export async function getCars() {
  const entries = await getCollection('cars');
  return entries.map((entry) => ({ slug: entry.id, ...entry.data }));
}

export type Car = Awaited<ReturnType<typeof getCars>>[number];

/**
 * Three on the homepage: one given the editorial feature treatment, two
 * supporting it. Adding a fourth flattens it back into a grid.
 */
export async function getFeaturedCars() {
  return (await getCars()).slice(0, 3);
}

export async function getCarBySlug(slug: string) {
  return (await getCars()).find((car) => car.slug === slug);
}
