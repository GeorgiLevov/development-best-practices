> Full index: [index-react-fullstack.md](index-react-fullstack.md)

# Return real 404s via `notFound()`, serve XML feeds via Route Handlers, and tune `<Link prefetch>` deliberately

**When to use**: When handling missing dynamic route slugs, serving RSS/XML feeds, or optimizing link navigation latency in Next.js App Router.

**Rule**: Wrap filesystem/DB slug lookups in `try/catch` returning `null` and call `notFound()` from `next/navigation` paired with a root `app/not-found.js` so invalid URLs return an actual `404` HTTP status and metadata instead of crashing with `ENOENT` or serving a `200` "Not Found" UI. Generate non-HTML endpoints like `/rss.xml` via `app/rss.xml/route.js` returning `Content-Type: application/xml` (or a `prebuild` script writing to `public/`). Tune `<Link prefetch={...}>` intentionally: `prefetch={true}` caches full route payloads for ~5 minutes to eliminate serverless cold-start lag on high-priority links, while `null` (default shell prefetch, 30s) or `false` avoids excessive bandwidth and serverless invocations on 100-link indexes or `prefers-reduced-data` connections.

**Example**:
```jsx
// app/[postSlug]/page.js
import { notFound } from 'next/navigation';
import { loadBlogPost } from '@/helpers/file-helpers';

export default async function BlogPostPage({ params }) {
  const { postSlug } = await params;
  const post = await loadBlogPost(postSlug);
  if (!post) notFound();
  return <Article post={post} />;
}
```

**Avoid**: Letting invalid dynamic slugs throw unhandled `ENOENT` 500s, returning `<h1>404</h1>` with HTTP 200, or setting `prefetch={true}` blindly on hundreds of links without weighing bandwidth and serverless cost.

**Source**: [Blog Solution — Joy of React](https://courses.joshwcomeau.com/joy-of-react/project-blog/03.01-solution), [Navigation Performance — Joy of React](https://courses.joshwcomeau.com/joy-of-react/project-blog/05-navigation-perf), [project-blog (solution-stretch-not-found) — GitHub](https://github.com/joy-of-react/project-blog/compare/solution...solution-stretch-not-found), [project-blog (stretch-rss-feed) — GitHub](https://github.com/joy-of-react/project-blog/compare/solution...stretch-rss-feed), [prefers-reduced-data — MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-data)
