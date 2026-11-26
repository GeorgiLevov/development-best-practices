> Full index: [index-react-data-fetching.md](index-react-data-fetching.md)

# Distinguish `status` from `fetchStatus` when rendering TanStack Query v5 states

**When to use**: When deciding whether to render a loading spinner, empty/prompt UI, offline notice, or data in a component using `useQuery`.

**Rule**: In TanStack Query v5, separate cache state from network state: `status` (`'pending' | 'success' | 'error'`) tells you whether `data` is in the cache (`isPending` replaces v4's `isLoading` for "no cached data yet"), while `fetchStatus` (`'fetching' | 'paused' | 'idle'`) tells you whether `queryFn` is currently running. In v5, `isLoading` equals `status === 'pending' && fetchStatus === 'fetching'` (replacing v4's `isInitialLoading`). On disabled or on-demand queries (`enabled: false` / `skipToken`), `status` stays `'pending'` while `fetchStatus` is `'idle'` (so `isLoading` is `false` even though `data` is `undefined`); always gate rendering on `status === 'success'` (`isSuccess`), and check `fetchStatus === 'paused'` for offline-queued queries.

**Example**:
```tsx
const { data, status, isLoading, fetchStatus } = useIssues(search);

if (isLoading) return <Spinner />;
if (status === 'error') return <p>Failed to load issues.</p>;
if (fetchStatus === 'paused' && status === 'pending') return <p>Offline — waiting to fetch.</p>;
if (status === 'success') return <IssueList items={data.items} />;
return <p>Enter a search term.</p>;
```

**Avoid**: Assuming `!isLoading && !isError` guarantees `data` is defined on conditional queries, or using `isPending` alone as a spinner condition when a query is paused offline or waiting on user input.

**Source**: [The Query Lifecycle — Fireship Query](https://fireship.dev/c/query/query-lifecycle), [Fetching on Demand — Fireship Query](https://fireship.dev/c/query/fetching-on-demand), [Offline Support — Fireship Query](https://fireship.dev/c/query/offline-support)
