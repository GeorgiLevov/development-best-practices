> Full index: [index-react.md](index-react.md)

# Treat `useState` setters as scheduled updates for the next render snapshot

**When to use**: When reading or logging a state value immediately after calling its setter inside an event handler.

**Rule**: Calling `setState(nextValue)` schedules an update for the *next* render and batches sibling setters in the same handler—it never mutates the state variable inside the current render closure. Whenever subsequent lines in the same handler need the new value (for logging, validation, or passing to another helper), store the computed value in a local variable (`const nextCount = count + 1`), pass `nextCount` to the setter, and read `nextCount` directly. React batches every updater in one event handler into a single re-render. Passing a value to the setter *replaces* the previous state—spread (or otherwise copy) when you need to keep other fields of an object or array.

**Example**:
```jsx
function handleIncrement() {
  const nextCount = count + 1;
  setCount(nextCount);
  announce(`Count is now ${nextCount}`);
}
```

**Avoid**: Calling `setCount(count + 1)` and immediately reading `count` on the next line expecting the updated value.

**Source**: [Asynchronous Updates — Joy of React](https://courses.joshwcomeau.com/joy-of-react/02-state/03.03-async-updates), [Why the Dance? — Joy of React](https://courses.joshwcomeau.com/joy-of-react/02-state/03.05-why-the-dance), [Why React Renders — react.gg](https://fireship.dev/c/react/renders), [Using useState — react.gg](https://fireship.dev/c/react/using-usestate)
