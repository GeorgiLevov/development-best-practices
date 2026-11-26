> Full index: [index-react-data-fetching.md](index-react-data-fetching.md)

# Trigger writes with `useMutation` and invalidate hierarchical keys fuzzily

**When to use**: Whenever performing non-idempotent server writes (`POST`, `PATCH`, `PUT`, `DELETE`) and keeping related cached queries synchronized.

**Rule**: Never trigger side-effectful writes with `useQuery`; wrap writes in `useMutation({ mutationFn })`, drive pending UI/disabled submit buttons from `status === 'pending'` (`isPending` in v5), and keep UI side effects like form resets in `mutate(vars, { onSuccess })` while cache updates stay inside `useMutation`. Order `queryKey` tuples from generic to specific (`['todos', 'list', { sort }]`, `['todos', 'detail', id]`) so `return queryClient.invalidateQueries({ queryKey: ['todos', 'list'] })` fuzzy-matches all list variants (returning the Promise keeps the mutation pending until active refetches finish). When updating cache directly with `setQueryData`, always return a brand-new immutable object or `undefined` to bail out.

**Example**:
```tsx
const mutation = useMutation({
  mutationFn: updateTodo,
  onSuccess: () => queryClient.invalidateQueries({ queryKey: ['todos', 'list'] }),
});
```

**Avoid**: Mutating `previousData` in place inside `queryClient.setQueryData` (observers miss unchanged references), or trying to manually update every filtered/sorted list variant instead of fuzzy invalidation.

**Source**: [Managing Mutations — Fireship Query](https://fireship.dev/c/query/mutations)
