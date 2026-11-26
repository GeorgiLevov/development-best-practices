> Full index: [index-react-data-fetching.md](index-react-data-fetching.md)

# Build infinite feeds with `useInfiniteQuery`, `initialPageParam`, and `maxPages`

**When to use**: When appending "Load More" or scroll-triggered pages into a single continuous list rather than discrete page views.

**Rule**: In TanStack Query v5, configure `useInfiniteQuery` with `initialPageParam` (required), `queryFn: ({ pageParam }) => ...`, and `getNextPageParam` returning `undefined` when no pages remain (add `getPreviousPageParam` for bidirectional scrolling). Flatten pages for rendering with `data?.pages.flat()`, and disable load triggers with `!hasNextPage || isFetchingNextPage`. Because an infinite query shares one cache entry, background refetches re-fetch all cached pages sequentially from page 1 to keep offsets consistent—set `maxPages` on long or bidirectional feeds to bound network and memory cost.

**Example**:
```tsx
const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
  queryKey: ['posts'],
  initialPageParam: 1,
  queryFn: ({ pageParam }) => fetchPosts(pageParam),
  getNextPageParam: (lastPage, _all, lastParam) => (lastPage.length ? lastParam + 1 : undefined),
  maxPages: 5,
});
```

**Avoid**: Relying on `useInfiniteQuery` without `maxPages` on unbounded social feeds, or failing to return `undefined` from `getNextPageParam` at the end of results.

**Source**: [Infinite Queries — Fireship Query](https://fireship.dev/c/query/infinite-queries)
