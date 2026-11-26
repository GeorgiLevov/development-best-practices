> Full index: [index-react-concurrent.md](index-react-concurrent.md)

# Run async mutations as React Actions

**When to use**: When a user-triggered mutation or request should participate in a transition so React can batch in-flight work, expose a single `isPending`, and skip stale intermediate results.

**Rule**: An Action is an async function passed to `startTransition`. In React 19, `isPending` covers both the network work and the render it triggers, and it stays true until every Action started from that hook has settled—so rapid clicks do not flicker through stale responses. Keep immediate UI (the controlled input value) outside the transition; put the fetch and the state it produces inside. State updates after `await` are not automatically transitions—wrap them in a nested `startTransition`. On a `<form>`, you can pass the Action as `action={fn}`: React supplies `FormData`, runs the Action, and resets the fields when it completes, instead of a manual `onSubmit` / `preventDefault` / controlled-field stack.

**Example**:
```jsx
const [isPending, startTransition] = React.useTransition();

function onQuantityChange(next) {
  setQuantity(next);
  startTransition(async () => {
    const price = await fetchPrice(next);
    startTransition(() => setPrice(price));
  });
}
```

**Avoid**: Managing a homemade `isPending` boolean for each click, or awaiting a mutation inside `startTransition` and then calling a setter that you expect to stay low-priority without a nested `startTransition`.

**Source**: [Actions — react.gg](https://fireship.dev/c/react/actions), [File Upload — react.gg](https://fireship.dev/c/react/file-upload-challenge), [useTransition — React Docs](https://react.dev/reference/react/useTransition#react-doesnt-treat-my-state-update-after-await-as-a-transition)
