> Full index: [index-react-hooks.md](index-react-hooks.md)

# Keep renders pure and leave `<React.StrictMode>` enabled in development

**When to use**: In every React application root during development, and whenever debugging double-firing effects or impure component behavior.

**Rule**: Wrap your app in `<React.StrictMode>` and write pure render bodies (same props/state always produce the same JSX with no prop/state mutation) plus idempotent effects and ref callbacks paired with symmetric cleanups. In development only, `StrictMode` intentionally double-invokes component functions, state initializers/updaters, ref callbacks, and mount -> cleanup -> remount effect cycles to surface accidental mutations, leaked listeners/timers, and missing race-condition guards before they ship to production. Never delete `StrictMode` to silence duplicate logs or broken effects—fix the underlying impurity or missing cleanup.

**Example**:
```jsx
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Inside a component: symmetric cleanup survives StrictMode's dev remount test
React.useEffect(() => {
  const id = window.setInterval(tick, 1000);
  return () => window.clearInterval(id);
}, []);
```

**Avoid**: Removing `<StrictMode>` because "my effect runs twice," or firing one-off mutations (like purchases) in an effect instead of an event handler.

**Source**: [Strict Mode — Joy of React](https://courses.joshwcomeau.com/joy-of-react/03-hooks/05.10-strict-mode), [StrictMode — React Docs](https://react.dev/reference/react/StrictMode)
