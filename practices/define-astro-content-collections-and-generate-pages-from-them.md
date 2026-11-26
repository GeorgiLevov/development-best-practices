> Full index: [index-astro.md](index-astro.md)

# Define Astro content collections and generate pages from them

**When to use**: When a site has a typed set of Markdown (or similar) entries such as articles, authors, or docs, rather than one-off pages.

**Rule**: Put entries in `src/content/<name>/` and declare the collection in `src/content/config.ts` with `defineCollection` and a schema so frontmatter is validated. Export it under a short name (`blog`). Generate routes with `getStaticPaths()` and `getCollection()` from a `[slug].astro` file; the default slug is the filename, or set `slug` in frontmatter. Filter drafts, sort by date, and build tag (or other facet) pages from unique values with URL-safe slugs—do not hand-write a page per tag. Collections are not the same as `src/pages/`; pages consume collections.

**Example**:
```js
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({ title: z.string(), pubDate: z.date() }),
});
export const collections = { blog };
```

**Avoid**: Hand-building a route for every post or tag, or skipping the schema so typo’d frontmatter fails only at render time.

**Source**: [Introduction to content collections — Beyond CSS](https://module-5.beyondcss.dev/lessons/introduction-to-content-collections), [Defining a collection — Beyond CSS](https://module-5.beyondcss.dev/lessons/defining-a-collection), [Using a content collection — Beyond CSS](https://module-5.beyondcss.dev/lessons/using-a-content-collection), [Creating pages for each tag — Beyond CSS](https://module-5.beyondcss.dev/lessons/creating-pages-for-each-tag), [Content collections — Astro docs](https://docs.astro.build/en/guides/content-collections/)
