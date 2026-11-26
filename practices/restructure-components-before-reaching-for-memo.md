> Full index: [index-react-hooks.md](index-react-hooks.md)

# Restructure component composition before reaching for `React.memo`

**When to use**: When a state update re-renders an expensive sibling or deep subtree unnecessarily.

**Rule**: Remember that React state updates cascade re-renders down to *all* descendant components regardless of whether their props changed (prop changes never cause re-renders; parent re-renders do). Before adding `React.memo`, `useMemo`, or `useCallback`, try two structural fixes first: (1) **move state down** into a smaller leaf component so unrelated siblings stop re-rendering, or (2) **lift static content up** and pass slow subtrees via the `children` prop so state changes inside the wrapper reuse the parent's unchanged `children` elements.

**Example**:
```jsx
// Moving state down / lifting static <ExpensiveTree /> into children:
function App() {
  return (
    <ColorWrapper>
      <ExpensiveTree />
    </ColorWrapper>
  );
}

function ColorWrapper({ children }) {
  const [color, setColor] = React.useState('red');
  return (
    <div style={{ color }}>
      <input value={color} onChange={(e) => setColor(e.target.value)} />
      {children}
    </div>
  );
}
```

**Avoid**: Keeping fast-changing input/hover state at the top of `<App />` and wrapping dozens of intermediate components in `React.memo` instead of isolating state or composing via `children`, or wrapping a child in `React.memo` while passing an inline function prop whose identity changes every render.

**Source**: [Why React Renders — Joy of React](https://courses.joshwcomeau.com/joy-of-react/03-hooks/08.01-why-react-renders), [Alternatives to Memoization — Joy of React](https://courses.joshwcomeau.com/joy-of-react/03-hooks/08.06-alternatives), [Before You memo() — Overreacted](https://overreacted.io/before-you-memo/), [Why React Renders — react.gg](https://fireship.dev/c/react/renders), [Referential Equality and Why It Matters — react.gg](https://fireship.dev/c/react/referential-equality), [Optimizing Renders — react.gg](https://fireship.dev/c/react/optimizing-renders-challenge)
