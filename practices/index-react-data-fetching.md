> Full index: [index.md](index.md)

# React Data Fetching & TanStack Query v5

> Sub-index of the Development Best Practices collection. Open only the files that match the task. For foundational React fetching/Suspense/SSR patterns, see also [prefer-data-fetching-libraries-over-raw-mount-effects.md](prefer-data-fetching-libraries-over-raw-mount-effects.md), [compose-suspense-use-and-error-boundaries-for-async-ui.md](compose-suspense-use-and-error-boundaries-for-async-ui.md), and [design-suspense-boundaries-for-streaming-ssr.md](design-suspense-boundaries-for-streaming-ssr.md).

## Query Keys, Lifecycle & Freshness

- [Include every `queryFn` input in `queryKey` and gate conditional queries with `skipToken`](include-every-queryfn-dependency-in-querykey-and-use-skiptoken.md): Declare all `queryFn` inputs in deterministic `queryKey` arrays (enforced via `@tanstack/query/exhaustive-deps`) and gate optional queries with `enabled` or `skipToken`.
- [Distinguish `status` from `fetchStatus` when rendering TanStack Query v5 states](distinguish-query-status-and-fetchstatus-in-tanstack-query-v5.md): Separate cache `status` (`'pending'`/`'success'`/`'error'`) from network `fetchStatus` (`'fetching'`/`'paused'`/`'idle'`), using v5 `isLoading` (`status === 'pending' && fetchStatus === 'fetching'`) and `isSuccess` guards.
- [Tune `staleTime`, `gcTime`, and conditional `refetchInterval` for freshness and memory](tune-staletime-gctime-and-polling-for-server-freshness.md): Configure `staleTime` per resource volatility instead of disabling all triggers, remember `gcTime` (renamed from `cacheTime`) starts at 0 observers, and stop polling conditionally.
- [Run independent fetches in parallel with `useQueries` and chain serial ones with `enabled`](model-dependent-and-parallel-queries-with-usequeries.md): Keep separate entities in separate `queryKey`s via `useQueries({ queries, combine })` or independent hooks rather than coupling them in one `Promise.all` `queryFn`.

## Prefetching, Pagination & Mutations

- [Avoid loading flashes with `prefetchQuery`, `initialData`, and `placeholderData`](avoid-loading-flashes-with-prefetchquery-initialdata-and-placeholderdata.md): Warm predictable routes with non-zero `staleTime` (without destructuring `useQueryClient()`), reserve `initialData` for complete entities, and use `placeholderData: (prev) => prev` for pagination.
- [Build infinite feeds with `useInfiniteQuery`, `initialPageParam`, and `maxPages`](paginate-feeds-with-useinfinitequery-and-maxpages.md): Configure v5 `initialPageParam` and `getNextPageParam`, flatten `data?.pages`, and bound sequential page refetches with `maxPages`.
- [Trigger writes with `useMutation` and invalidate hierarchical keys fuzzily](manage-mutations-and-fuzzy-cache-invalidation-with-usemutation.md): Use `useMutation` with `isPending`, structure `queryKey`s generic-to-specific for fuzzy `invalidateQueries`, and return immutable objects from `setQueryData`.
- [Apply optimistic cache updates with cancellation, rollback snapshots, and `isMutating` guards](apply-optimistic-cache-updates-with-rollback-and-ismutating.md): Cancel active queries in `onMutate`, snapshot and roll back in `onError`, and guard `onSettled` invalidations with `isMutating` for concurrent/queued writes.

## Architecture, Performance, Errors & Testing

- [Centralize query keys and fetchers with `queryOptions` factories and `setQueryDefaults`](centralize-query-keys-and-options-with-queryoptions-factories.md): Colocate typed keys and fetchers in `queryOptions(...)` factories and share defaults with `defaultOptions` or `setQueryDefaults`.
- [Minimize renders and wasted fetches with `select`, tracked properties, and `signal`](leverage-select-tracked-properties-and-abort-signals.md): Destructure only needed hook properties (never `...rest`), subscribe to derived slices via `select`, and forward `signal` to `fetch` when stale requests should abort.
- [Handle query errors with smart retries, `throwOnError`, and `QueryCache.onError`](handle-query-errors-with-retries-boundaries-and-querycache-callbacks.md): Rethrow errors in `queryFn`, tune `retry` by status code, route empty-cache failures to `ErrorBoundary` + `QueryErrorResetBoundary`, and toast background failures once in `QueryCache.onError`.
- [Validate untrusted API payloads at runtime with Zod inside `queryFn`](validate-untrusted-api-responses-with-zod-in-queryfn.md): Parse external JSON responses with Zod inside `queryFn` to surface schema drift as Query errors and strip unreferenced fields.
- [Configure `networkMode`, cache persisters, and WebSocket invalidation deliberately](configure-offline-networkmode-persisters-and-websocket-invalidation.md): Match `networkMode` to HTTP/local sources, persist non-sensitive entries with `gcTime >= maxAge` and `setMutationDefaults`, and pair WebSocket invalidations with high `staleTime`.
- [Test TanStack Query components with per-test `QueryClient`s (`retry: false`) and MSW](test-tanstack-query-components-with-isolated-clients-and-msw.md): Wrap component tests in fresh `QueryClient({ defaultOptions: { queries: { retry: false } } })` instances and intercept HTTP with MSW v2 (`http.get` / `HttpResponse.json`) rather than mocking hooks.
