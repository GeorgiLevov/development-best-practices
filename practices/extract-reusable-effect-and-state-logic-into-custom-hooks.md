> Full index: [index-react-hooks.md](index-react-hooks.md)

# Extract reusable state and effect logic into `use*` custom hooks

**When to use**: When two or more components duplicate stateful behavior, subscriptions, timers, observers, or browser-API synchronization.

**Rule**: Package reusable hook logic (including `useState`, `useRef`, `useEffect`, and cleanup) into a `use`-prefixed custom hook so components stay declarative and each caller gets isolated hook state. When a custom hook attaches an observer or DOM listener to an element, create and return (or accept) the stable `ref` object—never pass `ref.current`, which is `null` on initial render and will not re-run `useEffect` dependencies when attached. Choose return signatures deliberately: return tuples (`[value, toggle]`) for 1–2 generic items callers may rename, and objects (`{ width, height }`) for 3+ named fields.

**Example**:
```jsx
function useIsOnscreen() {
  const [isOnscreen, setIsOnscreen] = React.useState(false);
  const elementRef = React.useRef(null);

  React.useEffect(() => {
    const node = elementRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      setIsOnscreen(entry.isIntersecting);
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [isOnscreen, elementRef];
}
```

**Avoid**: Duplicating `addEventListener`/`IntersectionObserver` boilerplate across components, or passing `elRef.current` as an argument to a custom hook.

**Source**: [Custom Hooks — Joy of React](https://courses.joshwcomeau.com/joy-of-react/03-hooks/06-custom-hooks), [Custom Hook Exercises — Joy of React](https://courses.joshwcomeau.com/joy-of-react/03-hooks/06.01-custom-hook-exercises), [Boop! Custom Hook Pattern — Josh W. Comeau](https://www.joshwcomeau.com/react/boop/)
