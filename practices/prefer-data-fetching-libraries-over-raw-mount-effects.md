> Full index: [index-react-hooks.md](index-react-hooks.md)

# Trigger mutations in event handlers and prefer query libraries over raw mount `useEffect` fetches

**When to use**: When fetching server data on mount or synchronizing client UI with remote endpoints.

**Rule**: Put user-initiated mutations and on-demand searches (`POST`, form submit lookups) directly inside event handlers. For data fetched on component mount or reactive to route/query keys, prefer a framework data loader or dedicated client cache (`SWR` or TanStack Query) over hand-rolled `useEffect` fetching—libraries handle request deduplication, caching, focus/stale revalidation, and race conditions out of the box. When adopting TanStack Query, create `QueryClient` **outside** React components in SPAs (or per-request via `useRef`/`useState` in SSR) and wrap the tree in `<QueryClientProvider>`—note `QueryClient` uses Context for stable dependency injection without state re-renders (see [index-react-data-fetching.md](index-react-data-fetching.md)). In a shared `fetcher`/`queryFn`, always return a Promise and throw an `Error` whenever `!response.ok` (never catch and swallow errors without rethrowing) so the library surfaces HTTP errors and retries cleanly; if you must fetch inside `useEffect`, include a `let ignore = false` (or `AbortController`) cleanup to discard stale out-of-order responses.

**Example**:
```jsx
async function fetcher(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

function Profile({ userId }) {
  const { data, error, isLoading } = useSWR(`/api/users/${userId}`, fetcher);
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Could not load profile.</p>;
  return <h1>{data.name}</h1>;
}
```

**Avoid**: Hand-rolling `useEffect` fetch boilerplate without race-condition cleanup or caching across mounted/remounted routes, or swallowing `!res.ok` in a `fetcher`.

**Source**: [Fetching on Mount — Joy of React](https://courses.joshwcomeau.com/joy-of-react/03-hooks/07.02-fetching-on-mount), [You Might Not Need an Effect — React Docs](https://react.dev/learn/you-might-not-need-an-effect#fetching-data), [Why React Query? — Fireship Query](https://fireship.dev/c/query/why-react-query), [Query Fundamentals — Fireship Query](https://fireship.dev/c/query/query-fundamentals), [Fetching Data — Fireship Query](https://fireship.dev/c/query/fetching-data)
