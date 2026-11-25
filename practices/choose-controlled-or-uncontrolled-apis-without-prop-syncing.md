> Full index: [index-react-patterns.md](index-react-patterns.md)

# Keep a single source of truth: choose controlled or uncontrolled APIs without prop-syncing

**When to use**: When designing reusable form inputs, widgets, or editors that take initial or external values.

**Rule**: Give every piece of data one unambiguous owner. Either make a component **fully controlled**—receiving `value` and `onChange` from its parent with no duplicate internal `useState`—or **fully uncontrolled**, reading an `initialValue` / `defaultValue` prop once into local `useState` (and resetting via a parent `key` change if the parent ever needs to wipe it). Never mirror a prop into `useState` and try to keep them aligned with `useEffect(() => setDraft(value), [value])`: doing so creates dual sources of truth, extra render passes, and subtle out-of-sync bugs. Treat all props as read-only snapshots.

**Example**:
```jsx
// Controlled: parent owns the single source of truth
function ColorPicker({ value, onChange }) {
  return (
    <input
      type="color"
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  );
}

// Uncontrolled: clearly named initial prop, read once
function DraftNote({ initialText = '' }) {
  const [text, setText] = React.useState(initialText);
  return <textarea value={text} onChange={(e) => setText(e.target.value)} />;
}
```

**Avoid**: Writing `const [val, setVal] = useState(propVal); useEffect(() => setVal(propVal), [propVal]);` or accepting a `value` prop that silently ignores subsequent updates from the parent.

**Source**: [Props vs State — Joy of React](https://courses.joshwcomeau.com/joy-of-react/04-component-design/02.02-props-vs-state), [Single Source of Truth — Joy of React](https://courses.joshwcomeau.com/joy-of-react/05-happy-practices/05-single-source-of-truth), [You Probably Don't Need Derived State — React Blog](https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#recommendation-fully-uncontrolled-component-with-a-key), [You Might Not Need an Effect — React Docs](https://react.dev/learn/you-might-not-need-an-effect)
