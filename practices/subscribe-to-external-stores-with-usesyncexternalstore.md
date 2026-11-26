> Full index: [index-react-hooks.md](index-react-hooks.md)

# Subscribe to external stores with `useSyncExternalStore`

**When to use**: When a component should render a value that already lives outside React—`navigator.onLine`, `matchMedia`, or another library or custom store—without copying it into `useState`.

**Rule**: Call `useSyncExternalStore(subscribe, getSnapshot)` (and a `getServerSnapshot` when the tree may SSR—if the hook is client-only, `getServerSnapshot` should throw rather than read `window`). `getSnapshot` returns the current store value; `subscribe` registers a listener and must return an unsubscribe function. React re-renders when `Object.is` says the snapshot changed, and it re-subscribes when `subscribe`'s identity changes. Keep `subscribe` and `getSnapshot` referentially stable by defining them outside the component or wrapping them in `useCallback`. Return a primitive from `getSnapshot`, or cache and reuse the previous object when its fields have not changed—returning a fresh object every call will loop.

**Example**:
```jsx
function subscribe(onStoreChange) {
  const media = window.matchMedia("(max-width: 600px)");
  media.addEventListener("change", onStoreChange);
  return () => media.removeEventListener("change", onStoreChange);
}

function getSnapshot() {
  return window.matchMedia("(max-width: 600px)").matches;
}

const isNarrow = React.useSyncExternalStore(subscribe, getSnapshot);
```

**Avoid**: Mirroring `navigator.onLine` or a media query in `useState` plus a `useEffect` subscription when a store already owns the value, moving an unstable `subscribe` into the component body, or returning a new object from `getSnapshot` on every read.

**Source**: [Managing Advanced Effects — react.gg](https://fireship.dev/c/react/advanced-effects), [Match Media — react.gg](https://fireship.dev/c/react/match-media-challenge), [useSyncExternalStore — React Docs](https://react.dev/reference/react/useSyncExternalStore), [useMediaQuery — react.gg](https://fireship.dev/c/react/usemediaquery-challenge), [usePreferredLanguage — react.gg](https://fireship.dev/c/react/usepreferredlanguage-challenge), [useVisibilityChange — react.gg](https://fireship.dev/c/react/usevisibilitychange-challenge), [useMediaQuery — usehooks](https://usehooks.com/usemediaquery)
