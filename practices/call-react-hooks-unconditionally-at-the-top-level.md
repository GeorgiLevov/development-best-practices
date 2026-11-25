> Full index: [index-react-hooks.md](index-react-hooks.md)

# Call React hooks unconditionally at the top level of components or custom hooks

**When to use**: Whenever calling `useState`, `useEffect`, `useRef`, `useId`, or any custom `use*` hook.

**Rule**: Invoke all hooks unconditionally at the top level of a React function component or custom hook—never inside `if`/`else` branches, `for`/`while` loops, nested callbacks, ternary expressions, or after an early `return`. React tracks hook state solely by call order across renders; skipping or reordering a hook call shifts subsequent hook slots and corrupts state. When conditional rendering or early exits are needed, place every hook call above the `return` guard, or extract a conditional child component that owns its own hooks.

**Example**:
```jsx
function UserPanel({ user }) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  if (!user) {
    return <p>No user selected.</p>;
  }

  return (
    <button onClick={() => setIsExpanded(!isExpanded)}>
      {user.name}
    </button>
  );
}
```

**Avoid**: Putting `if (!user) return null;` above `useState`/`useEffect`, or calling hooks inside event handlers, `.map()` callbacks, or plain utility functions.

**Source**: [Rules of Hooks — Joy of React](https://courses.joshwcomeau.com/joy-of-react/03-hooks/02-rules-of-hooks), [Rule Exercises — Joy of React](https://courses.joshwcomeau.com/joy-of-react/03-hooks/02.01-rule-exercises)
