> Full index: [index-react-hooks.md](index-react-hooks.md)

# Persist state in hydration-safe web storage hooks

**When to use**: When a `useState`-like value should survive reloads in `localStorage` or `sessionStorage`, or when a tree needs to know it is running on the client before calling a browser-only hook.

**Rule**: Treat web storage as an external store, not as a `useState` plus a mount `useEffect`. Subscribe with `useSyncExternalStore`, serialize values with `JSON.stringify` / `JSON.parse`, and dispatch a `storage` event after writes so every hook instance on the page stays in sync (native `storage` events do not fire in the tab that wrote). Provide a `getServerSnapshot`—client-only hooks should throw there rather than touch `window` during SSR. Seed a missing key from `initialValue` in an Effect, and treat `null`/`undefined` updates as removals. If a hook can only run on the client, gate its use behind a `useIsClient` flag that starts `false` and becomes `true` after mount, or call it only from a Client Component.

**Example**:
```jsx
function useIsClient() {
  const [isClient, setIsClient] = React.useState(false);
  React.useEffect(() => {
    setIsClient(true);
  }, []);
  return isClient;
}
```

**Avoid**: Reading `localStorage` during render or in a `useState` initializer that may SSR, or writing to storage without notifying other hook subscribers on the same page.

**Source**: [useLocalStorage — react.gg](https://fireship.dev/c/react/uselocalstorage-challenge), [useSessionStorage — react.gg](https://fireship.dev/c/react/usesessionstorage-challenge), [useIsClient — react.gg](https://fireship.dev/c/react/useisclient-challenge), [useLocalStorage — usehooks](https://usehooks.com/uselocalstorage), [uidotdev/usehooks](https://github.com/uidotdev/usehooks)
