> Full index: [index-react-data-fetching.md](index-react-data-fetching.md)

# Centralize query keys and fetchers with `queryOptions` factories and `setQueryDefaults`

**When to use**: As an application grows past a few queries and multiple hooks, prefetchers, or mutations reference the same cache keys.

**Rule**: Keep `queryKey` and `queryFn` together per feature in a **Query Factory** using TanStack Query v5's `queryOptions(...)` helper so `useQuery`, `useSuspenseQuery`, `prefetchQuery`, `getQueryData`, and `setQueryData` share strict TypeScript inference and cannot drift or typo keys. Layer shared defaults cleanly via `new QueryClient({ defaultOptions })` globally or `queryClient.setQueryDefaults(['posts'], { queryFn, staleTime })` per key prefix (reading `{ queryKey }` from `QueryFunctionContext` when deriving URLs).

**Example**:
```tsx
import { queryOptions } from '@tanstack/react-query';

export const todoQueries = {
  all: () => ['todos'] as const,
  list: (sort: string) =>
    queryOptions({
      queryKey: [...todoQueries.all(), 'list', sort] as const,
      queryFn: () => fetchTodos(sort),
      staleTime: 5000,
    }),
};
```

**Avoid**: Duplicating raw `['todos', 'list', sort]` array literals across hooks and invalidations, or sharing plain untyped objects where misspelled options like `staletime` silently pass TypeScript.

**Source**: [Customizing Defaults — Fireship Query](https://fireship.dev/c/query/customizing-defaults), [Managing Query Keys — Fireship Query](https://fireship.dev/c/query/managing-query-keys), [Avoiding Loading States — Fireship Query](https://fireship.dev/c/query/avoiding-loading-states)
