> Full index: [index-react-data-fetching.md](index-react-data-fetching.md)

# Test TanStack Query components with per-test `QueryClient`s (`retry: false`) and MSW

**When to use**: When writing integration/component tests for UI powered by `useQuery` or `useMutation`.

**Rule**: Test the rendered components (user behavior) rather than calling `useQuery` custom hooks in isolation, and ensure app code reads `useQueryClient()` from Context rather than importing a module singleton. Build a `renderWithClient` helper that instantiates a **brand-new** `QueryClient({ defaultOptions: { queries: { retry: false } } })` per test so cache state never leaks and failed assertions don't hang through 3 retries. Mock HTTP endpoints at the network boundary with MSW (preferring current MSW v2 `http.get` / `HttpResponse.json` and `{ once: true }` overrides for mutation-refetch verification rather than legacy MSW v1 `rest.get`), or mock non-network async APIs / seed `setQueryData` with `staleTime: Infinity` instead of brittlely mocking `@tanstack/react-query` itself.

**Example**:
```tsx
function renderWithClient(ui: React.ReactElement) {
  const client = new QueryClient({ defaultOptions: { queries: { retry: false } } });
  return render(<QueryClientProvider client={client}>{ui}</QueryClientProvider>);
}
// MSW v2 one-time override after mutation:
server.use(http.get('/todos', () => HttpResponse.json(updatedTodos), { once: true }));
```

**Avoid**: Sharing one `QueryClient` across tests, leaving default `retry: 3` enabled in tests, or mocking `@tanstack/react-query` hooks directly unless no alternative exists.

**Source**: [Testing Queries and Mutations — Fireship Query](https://fireship.dev/c/query/testing)
