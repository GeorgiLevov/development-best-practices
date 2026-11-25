> Full index: [index-react.md](index-react.md)

# Never mutate objects or arrays in React state; replace with fresh copies

**When to use**: When adding, removing, reordering, or editing items inside array or object state.

**Rule**: Always clone state containers *before* modifying them (`const next = [...items]; next[i] = val; setItems(next);`, or use `.map()`, `.filter()`, and `{ ...obj, prop: val }`). Never mutate an existing state object or array in place—even if you spread-clone it right afterward—because React relies on immutable state references to detect and reconcile changes accurately. Use Immer if deeply nested updates become error-prone, and do not sacrifice immutability out of fear of shallow array copies.

**Example**:
```jsx
function updateColor(index, value) {
  const nextColors = [...colors];
  nextColors[index] = value;
  setColors(nextColors);
}
```

**Avoid**: Mutating `colors[index] = value` before calling `setColors([...colors])`, or calling `.push()` / `.splice()` / `.sort()` directly on state arrays.

**Source**: [Complex State — Joy of React](https://courses.joshwcomeau.com/joy-of-react/02-state/06-complex-state), [Mutation Bugs — Joy of React](https://courses.joshwcomeau.com/joy-of-react/02-state/06.01-mutation-bugs), [A Visual Guide to References in JavaScript — Dave Ceddia](https://daveceddia.com/javascript-references/), [Immer](https://www.npmjs.com/package/immer)
