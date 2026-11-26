> Full index: [index-react-fullstack.md](index-react-fullstack.md)

# Keep static, secret-bearing, and heavy-dependency rendering in React Server Components

**When to use**: When reading files, querying databases, rendering Markdown/syntax-highlighted blocks, or writing server mutations in Next.js App Router.

**Rule**: Keep components as React Server Components (RSCs) by default. RSCs execute exclusively on the server, never hydrate on the client, and strip their non-client dependencies (Node `fs`, DB drivers, syntax highlighters like `bright`, Markdown parsers) completely from the client JavaScript bundle. Make RSCs `async` to `await` data directly without `useEffect` waterfalls. When a child should suspend on its own, start the request in the parent and pass the promise down to be unwrapped with `use()` (see `start-server-fetches-early-and-unwrap-promises-with-use.md`) instead of blocking the entire parent. Query databases (for example Prisma) directly inside `async` Server Components rather than hopping through a client `fetch` for first-render data. Do not put `'use server'` on Server Components—`'use server'` marks client-callable **Server Functions / Actions** (used for forms and mutations with `useActionState`/`useOptimistic`), whose arguments are untrusted user input that must be validated and authorized inside every action. Server Actions have been stable since Next.js 14: wire `<form action={fn}>`, mutate, then `revalidatePath` (or `revalidateTag`) so the route refreshes. Do not set `experimental.serverActions` (that flag appears in older course notes and is not required in current Next.js).

**Example**:
```jsx
// Server Component: reads disk and syntax-highlights with zero client JS shipped
import fs from 'node:fs/promises';
import { Code } from 'bright';

export default async function SnippetPage({ slug }) {
  const source = await fs.readFile(`./snippets/${slug}.js`, 'utf8');
  return <Code lang="js">{source}</Code>;
}

// Server Action: always validate & authorize client-supplied FormData
import { revalidatePath } from 'next/cache';
async function createPost(formData) {
  'use server';
  const session = await getSession();
  if (!session) throw new Error('Unauthorized');
  // validate formData before mutating
  revalidatePath('/posts');
}
```

**Avoid**: Adding `'use server'` to declare a Server Component, importing secrets or Node built-ins into `'use client'` modules, or trusting unvalidated arguments inside Server Actions.

**Source**: [React Server Components — Joy of React](https://courses.joshwcomeau.com/joy-of-react/06-full-stack-react/02-server-components), ['use server' — React Docs](https://react.dev/reference/rsc/use-server), [Forms and Server Actions — Next.js Docs](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions), [Composing the Network — react.gg](https://fireship.dev/c/react/composing-the-network), [Server Component Fetching — Fireship Next.js](https://fireship.dev/c/nextjs/db-server-component), [Server Actions — Fireship Next.js](https://fireship.dev/c/nextjs/adv-actions), [Forms — Next.js Docs](https://nextjs.org/docs/app/guides/forms), [nextjs-course — fireship-io](https://github.com/fireship-io/nextjs-course)
