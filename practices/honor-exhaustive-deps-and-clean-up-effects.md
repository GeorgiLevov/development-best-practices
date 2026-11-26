> Full index: [index-react-hooks.md](index-react-hooks.md)

# Honor `exhaustive-deps` and return symmetric cleanup functions from `useEffect`

**When to use**: Whenever writing a `useEffect` that reads reactive values or registers subscriptions, timers, listeners, or observers.

**Rule**: List every reactive value (props, state, and render-scoped variables/functions) used inside `useEffect` in its dependency array, honoring `react-hooks/exhaustive-deps` rather than silencing the linter—omitting dependencies creates stale closures, while omitting the dependency array altogether re-runs the effect after every render. Guard conditional branches with early `return`s to keep the happy path shallow, and always return a cleanup function that symmetrically undoes the effect (`window.removeEventListener`, `clearTimeout`/`clearInterval`, `observer.disconnect()`, `let ignore = false` or `AbortController` for async work). React runs cleanup before every re-execution and on unmount. State setters, `localStorage`, and other referentially stable module values are non-reactive and do not belong in the dependency array.

**Example**:
```jsx
React.useEffect(() => {
  if (!isPlaying) return;

  function handleKeyDown(event) {
    if (event.code === 'Escape') onStop();
  }
  window.addEventListener('keydown', handleKeyDown);
  return () => {
    window.removeEventListener('keydown', handleKeyDown);
  };
}, [isPlaying, onStop]);
```

**Avoid**: Disabling `react-hooks/exhaustive-deps` with ESLint comments, registering global listeners/intervals without cleanup, or forgetting `observer.disconnect()` on unmount.

**Source**: [Effect Lint Rules — Joy of React](https://courses.joshwcomeau.com/joy-of-react/03-hooks/05.03-effect-lint-rules), [Cleanup — Joy of React](https://courses.joshwcomeau.com/joy-of-react/03-hooks/05.06-cleanup), [Cleanup Exercises — Joy of React](https://courses.joshwcomeau.com/joy-of-react/03-hooks/05.07-cleanup-exercises), [Synchronizing with Effects — React Docs](https://react.dev/learn/synchronizing-with-effects), [Effects Part 2 — react.gg](https://fireship.dev/c/react/effects-part-2), [Country Info — react.gg](https://fireship.dev/c/react/country-info-challenge)
