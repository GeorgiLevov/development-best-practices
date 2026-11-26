> Full index: [index-react.md](index-react.md)

# Lift shared state to the lowest common ancestor and pass via props

**When to use**: When two sibling or separated components need to read or update the same changing data.

**Rule**: Keep props as read-only inputs flowing down the tree and state as data owned by a component that changes over time. When a child's state must also be read by a sibling or parent, lift that `useState` hook up to their lowest common ancestor and pass the current value and update callback down as props.

**Example**:
```jsx
function SearchPage() {
  const [query, setQuery] = React.useState('');
  return (
    <>
      <SearchForm query={query} onQueryChange={setQuery} />
      <SearchResults query={query} />
    </>
  );
}
```

**Avoid**: Duplicating the same state in two sibling components and trying to synchronize them manually, or hoisting every local UI state all the way to `<App />` unnecessarily.

**Source**: [Props Vs. State — Joy of React](https://courses.joshwcomeau.com/joy-of-react/02-state/05-props-vs-state), [Lifting State Up — Joy of React](https://courses.joshwcomeau.com/joy-of-react/02-state/08-lifting-state-up), [Using useState — react.gg](https://fireship.dev/c/react/using-usestate)
