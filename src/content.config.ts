// Import the glob loader
import { glob } from 'astro/loaders'
// Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content'

// Define a `loader` and `schema` for each collection
const essays = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/essays' }),
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
  }),
})

// Export a single `collections` object to register your collection(s)
export const collections = { essays }
