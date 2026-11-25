> Full index: [index-react.md](index-react.md)

# Pass domain action callbacks to children instead of raw `setState` setters

**When to use**: After lifting shared state to an ancestor and exposing mutation controls to child components.

**Rule**: Keep the raw `setState` setter private inside the state-owning parent and pass down semantic action callbacks (`onAddItem(label)`, `onToggleTodo(id)`, `onDismiss()`) instead. Domain callbacks hide internal data shapes, centralize ID generation, validation, and array cloning in one place, and let child components stay clean, testable, and decoupled from how the parent stores state.

**Example**:
```jsx
function ShoppingListApp() {
  const [items, setItems] = React.useState([]);

  function handleAddItem(label) {
    setItems((prev) => [...prev, { id: crypto.randomUUID(), label }]);
  }

  return <AddItemForm onAddItem={handleAddItem} />;
}
```

**Avoid**: Passing `setItems={setItems}` down through child props so every leaf component invents its own object shape, ID strategy, or state-cloning logic.

**Source**: [Lifting State Exercises — Joy of React](https://courses.joshwcomeau.com/joy-of-react/02-state/08.01-lift-exercises), [Lifting State Up — Joy of React](https://courses.joshwcomeau.com/joy-of-react/02-state/08-lifting-state-up)
