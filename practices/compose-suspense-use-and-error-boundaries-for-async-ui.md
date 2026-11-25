> Full index: [index-react-concurrent.md](index-react-concurrent.md)

# Compose Suspense, `use`, and Error Boundaries for async UI

**When to use**: When client UI should read a promise (or Context) with `use()`, show a fallback on first load, stay responsive during later navigations, and recover from rejected promises.

**Rule**: `use(promise)` unwraps a thenable during render. Cache promises by key so a re-render does not create a new promise and loop. Wrap the reader in `<Suspense fallback=Ellipsis>` so the *initial* render can show a fallback, and wrap the state update that starts a later request in `startTransition` so React keeps the current UI instead of swapping it for that fallback. Pass a new `key` to `Suspense` only when you *want* the fallback to reappear on navigation. Catch rejections with an Error Boundary (the `react-error-boundary` package is a reasonable default). `useEffect` and event-handler fetches do not trigger Suspense—only work discovered while rendering does. Place these wrappers as ordinary components in the tree; moving a boundary should not require rewriting the child.

**Example**:
```jsx
const cache = new Map();
function loadItem(id) {
  if (!cache.has(id)) cache.set(id, fetchItem(id));
  return cache.get(id);
}

function Panel({ id }) {
  const item = React.use(loadItem(id));
  return <Article item={item} />;
}
```

**Avoid**: Calling `fetch` inside the component body without a cache, expecting a `useEffect` load to trip a Suspense fallback, or letting a mid-transition navigation replace visible UI with a spinner when you wanted the previous screen to stay up.

**Source**: [Composing Boundaries — react.gg](https://fireship.dev/c/react/composing-boundaries), [Book Search — react.gg](https://fireship.dev/c/react/book-search-challenge), [Book Router — react.gg](https://fireship.dev/c/react/book-router-challenge), [use — React Docs](https://react.dev/reference/react/use), [`<Suspense>` — React Docs](https://react.dev/reference/react/Suspense)
