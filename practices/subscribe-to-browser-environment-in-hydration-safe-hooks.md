> Full index: [index-react-hooks.md](index-react-hooks.md)

# Subscribe to the browser environment in hydration-safe hooks

**When to use**: When a custom hook should expose viewport size or scroll, a `matchMedia` query, `document.visibilityState`, `navigator.language`, network status, or a similar browser API to many components.

**Rule**: Do not read `window` or `document` during the initial render if the tree may SSR. For dimensions and scroll, initialize state to `null` (or another server-safe placeholder), then measure and subscribe in `useLayoutEffect` so the first paint after hydration already has real numbers. For values a browser store already owns (`matchMedia`, `languagechange`, `visibilitychange`, `navigator.onLine`), wrap `useSyncExternalStore` with a stable `subscribe` / `getSnapshot` and a `getServerSnapshot` that does not touch `window` (throw if the hook is explicitly client-only). Always remove listeners in cleanup. Prefer one hook per concern rather than copying the same subscription into each component.

**Example**:
```jsx
function useWindowSize() {
  const [size, setSize] = React.useState({ width: null, height: null });
  React.useLayoutEffect(() => {
    const onResize = () =>
      setSize({ width: window.innerWidth, height: window.innerHeight });
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return size;
}
```

**Avoid**: Reading `window.innerWidth` during render, skipping `getServerSnapshot` on a `useSyncExternalStore` hook that may SSR, or leaving resize/scroll/media listeners attached after unmount.

**Source**: [useWindowSize — react.gg](https://fireship.dev/c/react/usewindowsize-challenge), [useWindowScroll — react.gg](https://fireship.dev/c/react/usewindowscroll-challenge), [useMediaQuery — react.gg](https://fireship.dev/c/react/usemediaquery-challenge), [useVisibilityChange — react.gg](https://fireship.dev/c/react/usevisibilitychange-challenge), [usePreferredLanguage — react.gg](https://fireship.dev/c/react/usepreferredlanguage-challenge), [Creating Custom Hooks — react.gg](https://fireship.dev/c/react/custom-hooks), [useWindowSize — usehooks](https://usehooks.com/usewindowsize), [uidotdev/usehooks](https://github.com/uidotdev/usehooks)
