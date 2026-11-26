> Full index: [index-react-hooks.md](index-react-hooks.md)

# Debounce or throttle reactive values in custom hooks

**When to use**: When a rapidly changing value (search text, scroll position, pointer coordinates) should drive a slower update—filtering, a network request, or other expensive work—without running that work on every render.

**Rule**: Debounce a value by keeping a delayed copy in state and restarting a `setTimeout` in an Effect whenever the source or delay changes; always clear the timer in cleanup so only the last pause wins. Throttle a value by recording the last commit time in a ref: if the interval has already elapsed, update immediately; otherwise schedule a trailing update and clear that timer on cleanup. These hooks delay a *value*, not a layout measurement—do not confuse them with `useDeferredValue`, which yields to React's own high-priority work instead of a fixed clock.

**Example**:
```jsx
function useDebounce(value, delay) {
  const [debounced, setDebounced] = React.useState(value);
  React.useEffect(() => {
    const id = window.setTimeout(() => setDebounced(value), delay);
    return () => window.clearTimeout(id);
  }, [value, delay]);
  return debounced;
}
```

**Avoid**: Firing the expensive work on every keystroke, or forgetting to clear the pending timer when the value, delay, or component identity changes.

**Source**: [useDebounce — react.gg](https://fireship.dev/c/react/usedebounce-challenge), [useThrottle — react.gg](https://fireship.dev/c/react/usethrottle-challenge), [useDebounce — usehooks](https://usehooks.com/usedebounce), [useThrottle — usehooks](https://usehooks.com/usethrottle), [uidotdev/usehooks](https://github.com/uidotdev/usehooks)
