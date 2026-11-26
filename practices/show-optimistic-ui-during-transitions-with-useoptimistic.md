> Full index: [index-react-concurrent.md](index-react-concurrent.md)

# Show optimistic UI during transitions with `useOptimistic`

**When to use**: When a mutation already runs as an Action, but you still need to show a temporary intermediate result (a note marked "saving…", a progress row) before the server state arrives.

**Rule**: Transitions batch work and hide intermediate states—that is usually what you want, except for optimistic UI. `useOptimistic(state, reducer)` is built on that architecture: it returns a temporary value and an `addOptimistic` updater. Call `addOptimistic` *inside* the Action, before `await`. React renders the reducer's result immediately, then replaces it with the real `state` once the Action completes (and drops the optimistic value if the Action fails and you never commit the real update). Do not try to fake this with a second `useState` that you forget to roll back.

**Example**:
```jsx
const [notes, setNotes] = React.useState([]);
const [optimisticNotes, addOptimistic] = React.useOptimistic(
  notes,
  (current, next) => [...current, { ...next, pending: true }]
);

async function action(formData) {
  const note = { id: crypto.randomUUID(), text: formData.get("text") };
  addOptimistic(note);
  const saved = await createNote(note);
  setNotes((prev) => [...prev, saved]);
}
```

**Avoid**: Calling `addOptimistic` outside of a transition/Action, or leaving a handmade optimistic row in state when the request fails.

**Source**: [useOptimistic — react.gg](https://fireship.dev/c/react/useoptimistic), [File Progress — react.gg](https://fireship.dev/c/react/file-progress-challenge), [useOptimistic — React Docs](https://react.dev/reference/react/useOptimistic)
