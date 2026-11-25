> Full index: [index-react-fullstack.md](index-react-fullstack.md)

# Choose CSR, SSR, SSG, or ISR by data freshness and interactivity needs

**When to use**: When architecting a new React application or choosing how individual routes should be rendered and cached.

**Rule**: Match rendering mode to content freshness and access boundaries. Client-Side Rendering (CSR) ships an empty shell and runs React in the browser—ideal behind authentication walls or for rich stateful editors, though slower to paint Largest Contentful Paint (LCP). Server-Side Rendering (SSR) executes React on the server (`renderToPipeableStream` / `renderToString`) so HTML renders immediately before `hydrateRoot()` attaches interactivity; keep SSR bundles lean so hydration does not stall Interaction to Next Paint (INP) / Time to Interactive (TTI). Static Site Generation (SSG) pre-renders HTML once at build time for maximum speed on unchanging pages, while Incremental Static Regeneration (ISR) or `use cache` with `cacheLife` / `revalidateTag` serves cached HTML while refreshing stale entries cleanly.

**Example**:
```js
// Static/ISR-friendly catalog fetch with tag-based or time-based freshness
import { cacheLife, cacheTag } from 'next/cache';

export async function getCatalog() {
  'use cache';
  cacheLife('hours');
  cacheTag('catalog');
  return db.products.findMany();
}
```

**Avoid**: Reaching for per-request SSR on marketing/docs pages that could be static or cached, or assuming SSR HTML is immediately interactive before JavaScript downloads and hydrates.

**Source**: [Rendering Paradigms — Joy of React](https://courses.joshwcomeau.com/joy-of-react/06-full-stack-react/01-rendering-paradigms), [Hydration — Joy of React](https://courses.joshwcomeau.com/joy-of-react/06-full-stack-react/01.01-hydration), [Static Site Generation — Joy of React](https://courses.joshwcomeau.com/joy-of-react/06-full-stack-react/01.02-ssg), [Caching and Revalidating — Next.js Docs](https://nextjs.org/docs/app/building-your-application/data-fetching/revalidating), [Largest Contentful Paint (LCP) — web.dev](https://web.dev/articles/lcp)
