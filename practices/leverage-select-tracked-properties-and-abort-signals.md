> Full index: [index-react-data-fetching.md](index-react-data-fetching.md)

# Minimize renders and wasted fetches with `select`, tracked properties, and `signal`

**When to use**: When components subscribe to large/frequently changing responses, or when rapid inputs (like live search) fire superseded requests.

**Rule**: Let TanStack Query's structural sharing and tracked-property getters skip unnecessary re-renders by destructuring only the fields you read (`const { data, error } = useQuery(...)`)—never use object rest (`const { data, ...rest } = useQuery(...)`), which accesses every getter and disables render tracking (enforced by `@tanstack/eslint-plugin-query`). Use `select` (wrapped in `useCallback` if the transform is expensive) to subscribe a component to a filtered subset of cached data. When rapid keystrokes make intermediate results disposable, forward `QueryFunctionContext`'s `signal` into `fetch(url, { signal })` so unused queries abort automatically.

**Example**:
```tsx
const { data: names } = useQuery({
  queryKey: ['users', search],
  queryFn: ({ signal }) => fetchUsers(search, { signal }),
  select: (users) => users.map((u) => u.name),
});
```

**Avoid**: Writing `const { data, ...rest } = useQuery(...)`, or assuming `useQuery` cancels in-flight HTTP requests automatically without wiring `signal` to `fetch`.

**Source**: [Performance Optimizations — Fireship Query](https://fireship.dev/c/query/performance-optimizations)
