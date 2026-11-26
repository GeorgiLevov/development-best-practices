> Full index: [index-react-data-fetching.md](index-react-data-fetching.md)

# Run independent fetches in parallel with `useQueries` and chain serial ones with `enabled`

**When to use**: When a view needs multiple unrelated queries, a dynamic list of per-item queries, or a second query that depends on the output of a first query.

**Rule**: Keep distinct server entities under separate `queryKey`s rather than bundling unrelated fetches into a single `Promise.all` `queryFn` (bundling forces shared `staleTime`/retries, fails everything on one error, and loses per-entity deduplication). Call multiple `useQuery` hooks for static parallel queries, or use `useQueries({ queries, combine })` when querying a dynamic array or deriving aggregate status (`some`/`every`/`combine`) while preserving independent cache entries. For genuinely dependent queries, split them into separate hooks and gate the second query with `enabled: id !== undefined` (or `skipToken`).

**Example**:
```tsx
const issueQueries = useQueries({
  queries: (repos ?? []).map((repo) => ({
    queryKey: ['repos', repo.name, 'issues'],
    queryFn: () => fetchIssues(repo.name),
  })),
  combine: (results) => ({
    isPending: results.some((r) => r.isPending),
    total: results.reduce((sum, r) => sum + (r.data?.length ?? 0), 0),
  }),
});
```

**Avoid**: Coupling independent endpoints inside one `Promise.all` `queryFn`, or omitting `?? []` when mapping a still-pending list into `useQueries`.

**Source**: [Dependent Queries — Fireship Query](https://fireship.dev/c/query/dependent-queries), [Parallel Queries — Fireship Query](https://fireship.dev/c/query/parallel-queries)
