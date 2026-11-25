> Full index: [index-react-concurrent.md](index-react-concurrent.md)

# Defer expensive updates with `useDeferredValue`

**When to use**: When a high-priority input (a search field, a filter box) should stay responsive while a heavy list or calculation derived from that input catches up.

**Rule**: Pass the urgent value to `useDeferredValue` and render the expensive subtree from the deferred copy. React keeps showing the previous heavy UI until it has finished higher-priority work, then commits the deferred update in one pass. Unlike a timed debounce, this yields to React's scheduler—fast devices are not delayed by an arbitrary timeout. Wrap the expensive child in `React.memo` (or an equivalent compiler memo) so it re-renders when the *deferred* value changes, not on every keystroke of the parent.

**Example**:
```jsx
const [query, setQuery] = React.useState("");
const deferredQuery = React.useDeferredValue(query);

return (
  <>
    <input value={query} onChange={(e) => setQuery(e.target.value)} />
    <ResultList query={deferredQuery} />
  </>
);
```

**Avoid**: Feeding the raw keystroke value into an expensive list, or expecting `useDeferredValue` to replace a network debounce (it only postpones rendering, it does not cancel fetches).

**Source**: [Concurrent Rendering — react.gg](https://fireship.dev/c/react/concurrent-rendering), [Filter Marathon Results — react.gg](https://fireship.dev/c/react/filter-marathon-results-challenge), [useDeferredValue — React Docs](https://react.dev/reference/react/useDeferredValue)
