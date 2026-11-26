> Full index: [index-react-data-fetching.md](index-react-data-fetching.md)

# Avoid loading flashes with `prefetchQuery`, `initialData`, and `placeholderData`

**When to use**: When smoothing transitions between list/detail views, pagination pages, or hovered navigation links in TanStack Query v5.

**Rule**: Warm the cache ahead of navigation (`onMouseEnter`, route loaders, or next-page effects) using `queryClient.prefetchQuery` with a non-zero `staleTime` so repeated hovers don't refetch; always call methods on `const queryClient = useQueryClient()` directly without destructuring (`QueryClient` is a class whose methods rely on `this`). Choose `initialData` **only** when you already hold the complete cached record (it populates the cache and respects `staleTime`); choose `placeholderData` (and `isPlaceholderData`) when showing partial list-derived previews or previous pagination data (`placeholderData: (previousData) => previousData`, replacing v4's `keepPreviousData: true`) while the real query still fetches in the background.

**Example**:
```tsx
const queryClient = useQueryClient();

// Pagination: keep previous page visible without polluting the new key's cache
const { data, isPlaceholderData } = useQuery({
  queryKey: ['repos', { page }],
  queryFn: () => fetchRepos(page),
  placeholderData: (prev) => prev,
});
```

**Avoid**: Destructuring `{ prefetchQuery } = useQueryClient()` (loses `this`), seeding partial objects via `initialData` with a positive `staleTime` (blocks fetching missing fields), or prefetching with `staleTime: 0`.

**Source**: [Avoiding Loading States — Fireship Query](https://fireship.dev/c/query/avoiding-loading-states), [Pagination — Fireship Query](https://fireship.dev/c/query/pagination)
