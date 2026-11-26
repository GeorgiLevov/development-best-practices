> Full index: [index-react-data-fetching.md](index-react-data-fetching.md)

# Configure `networkMode`, cache persisters, and WebSocket invalidation deliberately

**When to use**: When supporting offline-capable apps, browser-cached endpoints, persistent query/mutation storage, or WebSocket-driven realtime updates.

**Rule**: Pick `networkMode` to match the source: `'online'` (default) pauses fetches offline; `'offlineFirst'` runs the first fetch so HTTP `Cache-Control` disk cache hits work offline while pausing retries; `'always'` suits local/non-network async APIs. When persisting with `PersistQueryClientProvider` (`createSyncStoragePersister` / `createAsyncStoragePersister`), exclude sensitive entries via `defaultShouldDehydrateQuery(q) && q.meta?.persist`, keep `gcTime >= maxAge` (default 24h) so cache GC doesn't prematurely wipe storage, pass a quota `retry` handler (`removeOldestQuery`), and configure `setMutationDefaults` + `onSuccess={() => queryClient.resumePausedMutations()}` if offline mutations survive reloads. For WebSocket sync, invalidate keys (or `setQueryData`) in a `useEffect` listener and raise `staleTime` (up to `Infinity`) so polling/focus refetches aren't needed.

**Example**:
```tsx
<PersistQueryClientProvider
  client={queryClient}
  persistOptions={{
    persister,
    maxAge: 1000 * 60 * 60 * 12,
    dehydrateOptions: {
      shouldDehydrateQuery: (q) => defaultShouldDehydrateQuery(q) && q.meta?.persist === true,
    },
  }}
  onSuccess={() => queryClient.resumePausedMutations()}
>
```

**Avoid**: Persisting sensitive auth/PII queries to `localStorage` without filtering, setting `gcTime` shorter than `maxAge`, or persisting mutations without `setMutationDefaults`.

**Source**: [Offline Support — Fireship Query](https://fireship.dev/c/query/offline-support), [Persisting Queries and Mutations — Fireship Query](https://fireship.dev/c/query/persisting-queries-mutations), [Working with WebSockets — Fireship Query](https://fireship.dev/c/query/websockets)
