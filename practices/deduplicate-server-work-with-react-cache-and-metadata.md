> Full index: [index-react-fullstack.md](index-react-fullstack.md)

# Define route metadata with `generateMetadata` and deduplicate server work via `React.cache`

**When to use**: When setting per-route `<title>`/`<meta>` tags and sharing database queries or file reads between `generateMetadata`, layouts, and Server Components.

**Rule**: Export a static `metadata` object or an `async generateMetadata({ params })` function from Server Component pages and layouts instead of legacy `<Head>` wrappers; Next.js streams metadata without blocking UI while injecting `<head>` tags up front for SEO/social crawlers. When `generateMetadata` and `Page` (or sibling Server Components) need the same non-`fetch` database query or `fs` read, wrap the shared helper in `React.cache(fn)` at module top level so React runs it **once per server request** and invalidates it when the request finishes. Pass primitive arguments or identical object references to cached functions, because `React.cache` compares inputs with `Object.is`.

**Example**:
```js
// lib/posts.js
import { cache } from 'react';
import fs from 'node:fs/promises';

export const getPost = cache(async (slug) => {
  return JSON.parse(await fs.readFile(`./content/${slug}.json`, 'utf8'));
});

// app/blog/[slug]/page.js: executes getPost(slug) only once per request
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);
  return { title: post.title, description: post.summary };
}
```

**Avoid**: Calling `cache()` inside a component render (each call creates a separate cache), passing newly allocated `{ slug }` object literals to `React.cache` helpers, or duplicating DB/FS reads between `generateMetadata` and `Page`.

**Source**: [Metadata and Caching — Joy of React](https://courses.joshwcomeau.com/joy-of-react/06-full-stack-react/08-metadata-and-caching), [React.cache — React Docs](https://react.dev/reference/react/cache), [Metadata API — Next.js Docs](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
