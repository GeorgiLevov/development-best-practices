> Full index: [index-react-data-fetching.md](index-react-data-fetching.md)

# Tune `staleTime`, `gcTime`, and conditional `refetchInterval` for freshness and memory

**When to use**: When configuring cache lifetime, background refetch frequency, or periodic polling in TanStack Query v5.

**Rule**: Understand the two distinct timers: `staleTime` (defaults to `0`, stale-while-revalidate) controls how long cached data is considered **fresh** before triggers (key change, new observer mount, window focus, network reconnect) schedule a background refetch—tune `staleTime` per resource volatility (e.g., `60_000` or `Infinity` for static data) rather than disabling all refetch flags. `gcTime` (renamed from v4 `cacheTime`, defaults to `5 * 60 * 1000`) starts counting **only after the last Observer unmounts** (`0` active subscribers) and purges unused entries from memory. For live dashboards or long-running jobs, set `refetchInterval` to a millisecond interval or a callback `(query) => (query.state.data?.finished ? false : 3000)` to stop polling automatically once complete.

**Example**:
```tsx
useQuery({
  queryKey: ['job', jobId],
  queryFn: () => fetchJob(jobId),
  staleTime: 30 * 1000,
  gcTime: 5 * 60 * 1000,
  refetchInterval: (query) => (query.state.data?.finished ? false : 3000),
});
```

**Avoid**: Confusing `staleTime` (freshness) with `gcTime` (inactive memory eviction), disabling `refetchOnWindowFocus`/`refetchOnReconnect` globally instead of setting an appropriate `staleTime`, or polling endlessly after a job reports finished.

**Source**: [Data Synchronization — Fireship Query](https://fireship.dev/c/query/data-synchronization), [Garbage Collection — Fireship Query](https://fireship.dev/c/query/garbage-collection), [Polling Data — Fireship Query](https://fireship.dev/c/query/polling)
