> Full index: [index-react-hooks.md](index-react-hooks.md)

# Apply `React.memo`, `useMemo`, and `useCallback` intentionally alongside React Compiler

**When to use**: After profiling a real render bottleneck, when preserving object/function identity across `React.memo` or `useEffect` boundaries, or when configuring React Compiler.

**Rule**: Do not wrap every component or expression in `React.memo`, `useMemo`, or `useCallback` by default—memoization adds comparison and memory overhead. Reach for `React.memo` only on profiled slow subtrees whose props stay stable, `useMemo` to cache genuinely expensive calculations or stabilize non-primitive objects/arrays passed to memoized children or `useEffect` dependencies, and `useCallback` to stabilize callback references (often paired with functional state updaters `setX(prev => ...)` so dependencies stay minimal). In codebases using React Compiler (e.g., Next.js `reactCompiler` config or Babel plugin), rely on automatic build-time memoization for routine code while retaining manual memoization fluency for debugging and legacy apps.

**Example**:
```jsx
const ExpensiveChart = React.memo(function ExpensiveChart({ points, onSelect }) {
  // ...
});

function Dashboard({ rawData }) {
  const [selectedId, setSelectedId] = React.useState(null);
  const points = React.useMemo(() => normalizePoints(rawData), [rawData]);
  const handleSelect = React.useCallback((id) => setSelectedId(id), []);
  return <ExpensiveChart points={points} onSelect={handleSelect} />;
}
```

**Avoid**: Wrapping a `React.memo` child while passing fresh inline `{}` literals or un-memoized callbacks that defeat shallow prop equality on every render, sprinkling `useMemo` around cheap arithmetic, or listing unrelated state (for example a locale) in a `useMemo` dependency list for an expensive calculation that does not use it. React compares memo props and hook dependencies with `Object.is`; `useCallback(fn, deps)` is `useMemo(() => fn, deps)`.

**Source**: [Pure Components — Joy of React](https://courses.joshwcomeau.com/joy-of-react/03-hooks/08.02-pure-components), [useMemo — Joy of React](https://courses.joshwcomeau.com/joy-of-react/03-hooks/08.03-use-memo), [useCallback — Joy of React](https://courses.joshwcomeau.com/joy-of-react/03-hooks/08.04-use-callback), [React Compiler — Joy of React](https://courses.joshwcomeau.com/joy-of-react/03-hooks/08.07-react-forget), [React Compiler — React Docs](https://react.dev/learn/react-compiler), [reactCompiler — Next.js Docs](https://nextjs.org/docs/app/api-reference/config/next-config-js/reactCompiler), [Referential Equality and Why It Matters — react.gg](https://fireship.dev/c/react/referential-equality), [Localized Primes — react.gg](https://fireship.dev/c/react/localized-primes-challenge)
