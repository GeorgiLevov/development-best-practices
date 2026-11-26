> Full index: [index-react.md](index-react.md)

# Follow `[x, setX]` naming and lazy-initialize expensive `useState` values

**When to use**: When declaring component state with `React.useState`.

**Rule**: Destructure `useState` using the `[thing, setThing]` naming convention and provide a well-typed initial value. When computing the initial state performs real work (such as reading `window.localStorage.getItem(...)` or parsing large payloads), pass a lazy initializer function `useState(() => computeInitial())` so React calls it only once on mount instead of re-evaluating the expression on every re-render. That initializer still runs during render, so do not read `window` or `localStorage` inside it if the tree may SSR—hydrate those values from an Effect (or `useSyncExternalStore`) instead.

**Example**:
```jsx
const [savedTheme, setSavedTheme] = React.useState(() => {
  return window.localStorage.getItem('theme') ?? 'light';
});
```

**Avoid**: Writing `useState(JSON.parse(window.localStorage.getItem('draft')))` directly as a bare expression that runs and discards its result on every render.

**Source**: [The `useState` Hook — Joy of React](https://courses.joshwcomeau.com/joy-of-react/02-state/03-use-state), [Component Instances — Joy of React](https://courses.joshwcomeau.com/joy-of-react/02-state/09-component-instances), [The useState Hook — react.gg](https://fireship.dev/c/react/usestate), [Managing Effects — react.gg](https://fireship.dev/c/react/effects)
