> Full index: [index-react-fullstack.md](index-react-fullstack.md)

# Draw deliberate Suspense boundaries for Streaming SSR and share shell wrappers with `loading.js`

**When to use**: When slow async Server Components (comments, personalized navigation, catalog grids) block the initial HTML response or cause fragmented loading spinners.

**Rule**: Wrap genuinely slow async Server Components in `<React.Suspense fallback={...}>` (or route-level `loading.js` / `loading.tsx`, which wraps `page.js` inside `layout.js`) so the fast static shell streams to the browser immediately while React streams slower chunks as they resolve and uses **Selective Hydration** to prioritize whichever section the user interacts with first. A segment `loading.js` can be as simple as a status message, or a skeleton that matches the page layout. Group related async regions into cohesive boundaries rather than wrapping every small widget ("Spinner Hell") or pushing boundaries so high that fast shell content waits—and extract shared chrome (like `ArticleWrapper`) imported by both `page.js` and `loading.js` so layout headers aren't duplicated. Wrap state transitions that trigger Suspense in `startTransition` to avoid replacing already-visible UI with a fallback. For client trees that read promises with `use()`, see `compose-suspense-use-and-error-boundaries-for-async-ui.md`. When pairing TanStack Query v5 with SSR/Streaming: instantiate a per-request client on the client side via `useRef`/`useState` (never a module singleton shared across users), use `dehydrate(queryClient)` + `<HydrationBoundary>` for dynamic SSR (avoid `initialData`, which ignores later request updates), and for Streaming SSR start `prefetchQuery` without `await` while setting `shouldDehydrateQuery: (q) => defaultShouldDehydrateQuery(q) || q.state.status === "pending"` so `useSuspenseQuery` reuses the streaming server promise.

**Example**:
```jsx
// app/articles/[slug]/loading.js & page.js share ArticleWrapper so shell HTML never duplicates
import { Suspense } from 'react';
import ArticleWrapper from '@/components/ArticleWrapper';

export default function Loading() {
  return <ArticleWrapper><ArticleSkeleton /></ArticleWrapper>;
}

// Or granular boundary inside page.js around slow comments:
<Suspense fallback={<CommentsSkeleton />}>
  <Comments slug={slug} />
</Suspense>
```

**Avoid**: Putting ten tiny spinners on one screen, letting a slow `Comments` fetch block the entire article shell, or copying header markup into `loading.js` separately from `page.js`.

**Source**: [Streaming SSR & Suspense — Joy of React](https://courses.joshwcomeau.com/joy-of-react/06-full-stack-react/09-suspense), [next-suspense-exercises — GitHub](https://github.com/joy-of-react/next-suspense-exercises), [Loading UI and Streaming — Next.js Docs](https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming), [New Suspense SSR Architecture — React 18 WG](https://github.com/reactwg/react-18/discussions/37), [Composing Boundaries — react.gg](https://fireship.dev/c/react/composing-boundaries), [Loading UI — Fireship Next.js](https://fireship.dev/c/nextjs/db-loading), [nextjs-course — fireship-io](https://github.com/fireship-io/nextjs-course), [Server Side Rendering — Fireship Query](https://fireship.dev/c/query/server-side-rendering), [Streaming SSR — Fireship Query](https://fireship.dev/c/query/streaming-ssr)
