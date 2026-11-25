> Full index: [index-react.md](index-react.md)

# Assign stable `key`s on outermost mapped elements, never render-time randoms

**When to use**: When rendering lists or repeated elements with `.map()` in React.

**Rule**: Place `key` on the outermost element returned by each `.map()` iteration (or `<React.Fragment key={id}>` for sibling groups), not on a nested child. Keep keys unique only among siblings in that array and never read `props.key` inside a component—React consumes `key` internally. When items lack a persistent database ID, generate one once when the item is created (e.g., `crypto.randomUUID()`), never via `Math.random()` during render, and avoid array `index` keys whenever items can be inserted, deleted, sorted, or filtered.

**Example**:
```jsx
function addTask(title) {
  setTasks((prev) => [
    ...prev,
    { id: crypto.randomUUID(), title },
  ]);
}

{tasks.map((task) => (
  <li key={task.id}>{task.title}</li>
))}
```

**Avoid**: Using `key={index}` on mutable/filterable lists (which scrambles DOM focus and input state), calling `crypto.randomUUID()` or `Math.random()` inside `.map()`, or putting `key` on a child inside `<li>`.

**Source**: [Mapping Over Data — Joy of React](https://courses.joshwcomeau.com/joy-of-react/01-fundamentals/06.01-mapping), [Keys — Joy of React](https://courses.joshwcomeau.com/joy-of-react/01-fundamentals/06.02-keys), [Dynamic Key Generation — Joy of React](https://courses.joshwcomeau.com/joy-of-react/02-state/07-key-generation), [Key Gotchas — Joy of React](https://courses.joshwcomeau.com/joy-of-react/02-state/07.01-key-gotchas)
