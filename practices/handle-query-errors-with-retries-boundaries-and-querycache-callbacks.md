> Full index: [index-react-data-fetching.md](index-react-data-fetching.md)

# Handle query errors with smart retries, `throwOnError`, and `QueryCache.onError`

**When to use**: When deciding how TanStack Query v5 retries failed requests, surfaces fatal load errors, or notifies users about background refetch failures.

**Rule**: Never catch and swallow errors inside `queryFn` without rethrowing—TanStack Query relies on rejected promises to set `status === 'error'` and trigger exponential-backoff retries (`retry: 3` default). Customize `retry: (failureCount, error) => ...` globally so non-retryable `4xx` errors fail fast while `5xx` errors retry. Route fatal empty-cache failures to an `<ErrorBoundary>` paired with `<QueryErrorResetBoundary>` (`onReset={reset}`) via `throwOnError: (_err, query) => typeof query.state.data === 'undefined'`, and show toast notifications for background errors inside `new QueryCache({ onError })` (v5 removed per-hook `onError` callbacks, and `QueryCache.onError` fires once per query instead of once per mounted observer).

**Example**:
```tsx
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      throwOnError: (_err, query) => typeof query.state.data === 'undefined',
    },
  },
  queryCache: new QueryCache({
    onError: (error, query) => {
      if (query.state.data !== undefined) toast.error(error.message);
    },
  }),
});
```

**Avoid**: Triggering error toasts in a `useEffect` per hook call (duplicates toasts across observers), or resetting an Error Boundary without wrapping it in `QueryErrorResetBoundary`.

**Source**: [Error Handling — Fireship Query](https://fireship.dev/c/query/error-handling)
