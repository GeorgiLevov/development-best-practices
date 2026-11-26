> Full index: [index-react-patterns.md](index-react-patterns.md)

# Consolidate coordinated state transitions with pure `useReducer` functions

**When to use**: When a component has several coupled state fields or many event handlers updating the same state in different ways.

**Rule**: Extract complex or coupled `useState` updates into `React.useReducer(reducer, initialState)`. Name `action.type` values after **domain events** (`'add-to-cart'`, `'toggle-todo'`, `'randomize'`) rather than generic setters (`'set-count'`), keeping state-transition rules together inside the reducer. Keep reducers **strictly pure**—same `(state, action)` must always produce the same output, because React/Suspense may re-invoke reducers—by generating impure values (`crypto.randomUUID()`, `Math.random()`, `Date.now()`) in the event handler before `dispatch(action)`. When using `switch (action.type)`, wrap each `case` in `{ ... }` braces so `const`/`let` variables stay case-scoped, end every branch with `return` (or `break` when using Immer) to prevent fall-through, and omit boilerplate `default` cases when exhaustive (configuring ESLint `default-case` or adding `// no default`). `dispatch` accepts a single argument, so pass `{ type, ...payload }` rather than `dispatch(type, payload)`. A reusable undo/redo shape is `{ past, present, future }`: push `present` onto `past` and clear `future` on new edits; move between the stacks on undo and redo.

**Example**:
```jsx
function todoReducer(todos, action) {
  switch (action.type) {
    case 'create-todo': {
      return [...todos, { id: action.id, value: action.value, done: false }];
    }
    case 'toggle-todo': {
      return todos.map((t) => (t.id === action.id ? { ...t, done: !t.done } : t));
    }
    // no default
  }
}

function handleCreate(value) {
  dispatch({ type: 'create-todo', id: crypto.randomUUID(), value });
}
```

**Avoid**: Calling `crypto.randomUUID()` or `Math.random()` inside the reducer itself, omitting `{}` around `case` blocks that declare `const`, or dispatching `type: 'update-state'` with the whole new state computed in JSX.

**Source**: [useReducer — Joy of React](https://courses.joshwcomeau.com/joy-of-react/05-happy-practices/07-use-reducer), [Switch / Case — Joy of React](https://courses.joshwcomeau.com/joy-of-react/05-happy-practices/07.01-switch-case), [useReducer Exercises — Joy of React](https://courses.joshwcomeau.com/joy-of-react/05-happy-practices/07.02-use-reducer-exercises), [Extracting State Logic into a Reducer — React Docs](https://react.dev/learn/extracting-state-logic-into-a-reducer), [default-case — ESLint](https://eslint.org/docs/latest/rules/default-case), [useReducer — react.gg](https://fireship.dev/c/react/usereducer), [Undo Redo — react.gg](https://fireship.dev/c/react/undo-redo-challenge)
