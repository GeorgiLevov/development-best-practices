> Full index: [index-react-fullstack.md](index-react-fullstack.md)

# Keep Next.js routes static where possible and explicitly configure dynamic or traced segments

**When to use**: When deciding whether App Router routes render at build time or per request, pre-rendering dynamic slugs, or reading local files via `fs` in production.

**Rule**: Static routes in Next.js build once and serve near-instantly unless dynamic triggers (`cookies()`, `headers()`, `searchParams`, dynamic segments) opt them into request-time rendering. For finite dynamic routes (like theme slugs or static blog posts), export `generateStaticParams()` to pre-build them at compile time (map each record to a `params` object), optionally pair `export const revalidate = seconds` for time-based ISR, and use Route Segment Config (`export const dynamic = 'force-dynamic' | 'force-static' | 'error'`)—or `'use cache'` with `cacheLife`/`cacheTag` under Cache Components—when explicit static/dynamic guarantees are required. In Next.js 15+, `await` `params` in the page (the Fireship lesson text still shows a synchronous `params` object; follow the course repo and current Next.js docs). Because `next build` traces `import`s and literal `fs` paths, configure `outputFileTracingIncludes` in `next.config.js` when reading dynamic non-imported file paths at runtime, and never write mutable state to the deployed serverless filesystem (use a database or object store).

**Example**:
```js
// app/[color]/page.js: pre-render known theme routes at build time
export function generateStaticParams() {
  return [{ color: 'blue' }, { color: 'emerald' }, { color: 'amber' }];
}

// next.config.js: ensure non-imported runtime data files ship in serverless traces
module.exports = {
  outputFileTracingIncludes: {
    '/*': ['./data/**/*'],
  },
};
```

**Avoid**: Mutating JSON/SQLite files on disk in deployed serverless routes (filesystems are ephemeral/read-only), or omitting `outputFileTracingIncludes` when reading runtime data directories dynamically.

**Source**: [Dynamic vs. Static — Joy of React](https://courses.joshwcomeau.com/joy-of-react/06-full-stack-react/07-dynamic-vs-static), [deployed-screensaver — GitHub](https://github.com/joshwcomeau/deployed-screensaver), [Route Segment Config — Next.js Docs](https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config), [Output File Tracing — Next.js Docs](https://nextjs.org/docs/app/api-reference/next-config-js/output), [Static pages — Fireship Next.js](https://fireship.dev/c/nextjs/project-page-static), [Static Generation — Fireship Next.js](https://fireship.dev/c/nextjs/project-static-generation), [nextjs-course — fireship-io](https://github.com/fireship-io/nextjs-course)
