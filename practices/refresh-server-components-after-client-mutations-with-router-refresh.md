> Full index: [index-react-fullstack.md](index-react-fullstack.md)

# Refresh Server Components after client mutations with `router.refresh()` in `startTransition`

**When to use**: When a Client Component mutates data through a fetch/Route Handler and the surrounding Server Component tree must refetch without a full navigation.

**Rule**: Split the UI: a Server Component reads the session and current data and passes a plain result (for example `isFollowing`) to a Client leaf. In the client, run the mutation with `fetch`, then call `startTransition(() => router.refresh())` from `next/navigation` so Next.js re-fetches the current route's Server Components and merges the payload without wiping unrelated client state. Track pending UI with `isFetching` and `isPending` together. This is a refresh pattern, not optimistic UI (`useOptimistic` is a different API—see [Show optimistic UI during transitions with `useOptimistic`](show-optimistic-ui-during-transitions-with-useoptimistic.md)). For form posts that can run on the server, prefer a Server Action and `revalidatePath` instead of a hand-rolled refresh.

**Example**:
```tsx
'use client';
import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';

export function FollowToggle({ targetId, isFollowing }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);
  const busy = isFetching || isPending;

  async function toggle() {
    setIsFetching(true);
    await fetch('/api/follows', {
      method: isFollowing ? 'DELETE' : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ targetId }),
    });
    setIsFetching(false);
    startTransition(() => router.refresh());
  }

  return <button onClick={toggle}>{busy ? '...' : isFollowing ? 'Unfollow' : 'Follow'}</button>;
}
```

**Avoid**: Calling `router.refresh()` as if it were a full `location.reload()`, or putting session/database reads in the Client Component when a Server wrapper can pass the result down.

**Source**: [Client Mutation — Fireship Next.js](https://fireship.dev/c/nextjs/adv-optimistic-ui), [nextjs-course — fireship-io](https://github.com/fireship-io/nextjs-course)
