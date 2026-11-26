> Full index: [index-react-data-fetching.md](index-react-data-fetching.md)

# Include every `queryFn` input in `queryKey` and gate conditional queries with `skipToken`

**When to use**: When writing `useQuery` hooks with dynamic parameters, filters, or optional arguments that may be `undefined`.

**Rule**: Treat `queryKey` as a deterministic, globally unique cache key: include every variable read by `queryFn` inside the `queryKey` array (enforce with `@tanstack/eslint-plugin-query` rule `@tanstack/query/exhaustive-deps`). Unlike `useEffect` dependencies, objects and arrays inside `queryKey` are hashed deterministically and do not require referential stability. Never call `useQuery` inside an `if` guard (violates Rules of Hooks); to wait for user input or an optional ID, pass `enabled: Boolean(arg)`—or in TanStack Query v5.25+, pass `skipToken` to `queryFn` so TypeScript narrows the argument without non-null `!` assertions.

**Example**:
```tsx
import { skipToken, useQuery } from '@tanstack/react-query';

function useIssue(id: number | undefined) {
  return useQuery({
    queryKey: ['issues', id],
    queryFn: id === undefined ? skipToken : () => fetchIssue(id),
  });
}
```

**Avoid**: Reading `sort` or `id` inside `queryFn` without listing it in `queryKey` (causes stale cache collisions), calling `useQuery` conditionally inside `if`, or mutating cache manually with imperative `refetch()` on state changes.

**Source**: [Query Fundamentals — Fireship Query](https://fireship.dev/c/query/query-fundamentals), [Deduplication — Fireship Query](https://fireship.dev/c/query/deduplication), [Managing Query Dependencies — Fireship Query](https://fireship.dev/c/query/managing-query-dependencies), [Fetching on Demand — Fireship Query](https://fireship.dev/c/query/fetching-on-demand)
