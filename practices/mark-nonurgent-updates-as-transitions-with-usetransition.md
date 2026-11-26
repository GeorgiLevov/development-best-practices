> Full index: [index-react-concurrent.md](index-react-concurrent.md)

# Mark non-urgent updates as transitions with `useTransition`

**When to use**: When a state update may trigger expensive rendering (switching a heavy tab, applying a large filter) and you need the current UI and user input to stay responsive until that work is ready.

**Rule**: Wrap the expensive setter in `startTransition` (from `useTransition` or `React.startTransition`). React treats that update as interruptible: it keeps showing the current UI, checks for higher-priority input about every 5ms, and commits the transition all at once when finished. `useTransition` also returns `isPending`, which stays true until every in-flight transition for that hook has finished. Keep genuinely urgent updates (the typed value of an input, the identity of the tab the user just clicked if you need it immediately) *outside* the transition. Do not style a "next" control as pending by comparing against the already-committed state—the pending flag is for the in-progress transition, not the old snapshot.

**Example**:
```jsx
const [isPending, startTransition] = React.useTransition();
const [tab, setTab] = React.useState("overview");

function select(next) {
  startTransition(() => setTab(next));
}
```

**Avoid**: Putting the input's `setQuery` inside the transition (the field will lag), or assuming each button in a list has its own `isPending` when they share one `useTransition` call.

**Source**: [Concurrent Rendering — react.gg](https://fireship.dev/c/react/concurrent-rendering), [Marathon Tabs — react.gg](https://fireship.dev/c/react/marathon-tabs-challenge), [useTransition — React Docs](https://react.dev/reference/react/useTransition)
