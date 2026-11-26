> Full index: [index-react.md](index-react.md)

# Distinguish React re-rendering (reconciliation) from browser re-painting

**When to use**: When reasoning about component re-renders, DOM updates, and UI performance.

**Rule**: React's core loop is Mount -> Trigger -> Render -> Commit. A React re-render simply re-runs your component function to produce a fresh element snapshot and diffs it against the previous snapshot (reconciliation); it does not tear down and rebuild the DOM. A render is React calling your component to produce a snapshot of props, state, handlers, and the UI description; a re-render is scheduled when a setter's next value is not `Object.is`-equal to the snapshot. Only changed nodes are then committed to the real DOM, and only DOM mutations cause the browser to re-paint pixels—so an unchanged render snapshot produces zero DOM edits and zero re-paints.

**Example**:
```jsx
function AgeBanner({ age }) {
  // Re-rendering with age 16 -> 17 yields identical <p> output:
  // React commits zero DOM mutations and triggers no browser re-paint.
  return <p>{age < 18 ? 'Under 18' : 'Adult'}</p>;
}
```

**Avoid**: Treating every component re-render as an expensive DOM rebuild or adding premature memoization before measuring actual commit/paint costs.

**Source**: [Core React Loop — Joy of React](https://courses.joshwcomeau.com/joy-of-react/02-state/03.01-core-react-loop), [Rendering Vs. Painting — Joy of React](https://courses.joshwcomeau.com/joy-of-react/02-state/03.02-rendering-vs-painting), [Render and Commit — React Docs](https://react.dev/learn/render-and-commit), [Why React Renders — react.gg](https://fireship.dev/c/react/renders)
