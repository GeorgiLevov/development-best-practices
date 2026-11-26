> Full index: [index-react-data-fetching.md](index-react-data-fetching.md)

# Apply optimistic cache updates with cancellation, rollback snapshots, and `isMutating` guards

**When to use**: When instant UI feedback (likes, checkboxes, status toggles) should update the cache immediately before server confirmation.

**Rule**: Inside `onMutate`, first `await queryClient.cancelQueries({ queryKey })` so in-flight refetches cannot overwrite your optimistic write, snapshot the prior value via `getQueryData`, write a new immutable state via `setQueryData`, and return a rollback closure that `onError` invokes (`rollback?.()`). Always trigger `invalidateQueries` in `onSettled` to reconcile with server truth; when rapid or offline-queued mutations target the same resource, tag them with `mutationKey` and invalidate only when `queryClient.isMutating({ mutationKey }) === 1` so intermediate refetches do not flicker the UI.

**Example**:
```tsx
useMutation({
  mutationKey: ['todos', 'list'],
  mutationFn: toggleTodo,
  onMutate: async (id) => {
    await queryClient.cancelQueries({ queryKey: ['todos', 'list'] });
    const prev = queryClient.getQueryData(['todos', 'list']);
    queryClient.setQueryData(['todos', 'list'], (list) => toggleInList(list, id));
    return () => queryClient.setQueryData(['todos', 'list'], prev);
  },
  onError: (_err, _vars, rollback) => rollback?.(),
  onSettled: () => {
    if (queryClient.isMutating({ mutationKey: ['todos', 'list'] }) === 1) {
      return queryClient.invalidateQueries({ queryKey: ['todos', 'list'] });
    }
  },
});
```

**Avoid**: Writing optimistically without calling `cancelQueries` first, forgetting the `onError` rollback, or invalidating on every overlapping mutation in flight.

**Source**: [Optimistic Updates — Fireship Query](https://fireship.dev/c/query/optimistic-updates), [Offline Support — Fireship Query](https://fireship.dev/c/query/offline-support)
