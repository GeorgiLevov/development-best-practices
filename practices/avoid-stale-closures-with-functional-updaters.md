> Full index: [index-react-hooks.md](index-react-hooks.md)

# Avoid stale closures in effects and memoized callbacks with functional updaters

**When to use**: When updating state from inside an interval, `window` event listener, `useEffect`, or `useCallback` that captures an older render snapshot.

**Rule**: Every React render creates an immutable snapshot closure—callbacks registered inside a `useEffect(..., [])` or `useCallback(..., [])` continue reading the `state` variables from the render in which they were created. When an effect, timer, or memoized callback needs to compute the next state from the latest value without tearing down and re-subscribing on every change, pass a functional updater (`setCount((prev) => prev + 1)`). Keep direct state updates (`setCount(count + 1)`) in ordinary inline event handlers where fresh closures are created on every render.

**Example**:
```jsx
React.useEffect(() => {
  const intervalId = window.setInterval(() => {
    setSeconds((prev) => prev + 1);
  }, 1000);
  return () => window.clearInterval(intervalId);
}, []);
```

**Avoid**: Reading stale `seconds` inside a `[]`-dependency interval or listener (`setSeconds(seconds + 1)` freezes at `1`), adding rapidly changing state to an effect's dependencies solely to read its current value when a functional updater suffices, or omitting a reactive value from the dependency array instead of a functional updater, `dispatch`, or (in React 19.2+) `useEffectEvent` when the value is not part of the synchronization.

**Source**: [Stale Values — Joy of React](https://courses.joshwcomeau.com/joy-of-react/03-hooks/05.08-stale-values), [State Setter Callbacks — Joy of React](https://courses.joshwcomeau.com/joy-of-react/03-hooks/05.08.B-state-setter-callback), [State as a Snapshot — React Docs](https://react.dev/learn/state-as-a-snapshot), [Why React Renders — react.gg](https://fireship.dev/c/react/renders), [Abstracting Reactive Values with useEffectEvent — react.gg](https://fireship.dev/c/react/useeffectevent)
