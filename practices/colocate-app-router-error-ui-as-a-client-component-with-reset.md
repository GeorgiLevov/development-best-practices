> Full index: [index-react-fullstack.md](index-react-fullstack.md)

# Colocate App Router `error.js` as a Client Component with a `reset` action

**When to use**: When a Next.js App Router segment should recover from a render or data error without relying only on a generic React class Error Boundary.

**Rule**: Add an `error.js` / `error.tsx` next to the `page.js` it protects (for example `app/users/error.tsx`). It must be a Client Component (`'use client'`). It receives `error` and a `reset` function: log the error in `useEffect`, show a fallback, and call `reset()` from a "Try again" control so React re-renders the segment. This is the App Router file convention for the same idea as a scoped Error Boundary (see [Isolate UI feature failures with scoped React Error Boundaries](isolate-feature-failures-with-scoped-error-boundaries.md)). Pair it with `loading.js` for the pending state of the same segment.

**Example**:
```tsx
'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong.</h2>
      <button type="button" onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}
```

**Avoid**: Implementing `error.js` as a Server Component (it cannot hook `reset` or use client event handlers), or swallowing the error without logging it.

**Source**: [Error UI — Fireship Next.js](https://fireship.dev/c/nextjs/db-error), [nextjs-course — fireship-io](https://github.com/fireship-io/nextjs-course), [error.js — Next.js Docs](https://nextjs.org/docs/app/api-reference/file-conventions/error)
