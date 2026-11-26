> Full index: [index-react-hooks.md](index-react-hooks.md)

# Extract non-synchronizing reads from Effects with `useEffectEvent`

**When to use**: When an Effect must *read* a reactive value (props, state, or a derived value) at the moment the Effect fires, but that value is not part of what the Effect synchronizes and should not re-run it. Stable in React 19.2 and later.

**Rule**: Keep synchronizing values in the Effect's dependency array and pass them as arguments into an Effect Event. Wrap the non-synchronizing logic in `useEffectEvent` and call that function from `useEffect` / `useLayoutEffect` without listing it as a dependency—the Event always sees the latest props and state. Do not put Effect Events in a dependency array, pass them to child components or other Hooks, or call them during render; they are not a general way to silence `exhaustive-deps`. A `useReducer` `dispatch` remains a valid alternative when the Effect only needs to trigger a transition without reading current fields.

**Example**:
```jsx
const [delay, setDelay] = React.useState(1000);
const [step, setStep] = React.useState(1);

const onTick = React.useEffectEvent(() => {
  setCount((count) => count + step);
});

React.useEffect(() => {
  const id = window.setInterval(() => {
    onTick();
  }, delay);
  return () => window.clearInterval(id);
}, [delay]);
```

**Avoid**: Omitting a synchronizing dependency (or wrapping the entire Effect body in `useEffectEvent`) just to quiet the linter, including the Effect Event in the dependency array, or using the hook on React versions older than 19.2 without a compatible API.

**Source**: [Abstracting Reactive Values with useEffectEvent — react.gg](https://fireship.dev/c/react/useeffectevent), [useEffectEvent — React Docs](https://react.dev/reference/react/useEffectEvent), [React 19.2 — React Blog](https://react.dev/blog/2025/10/01/react-19-2)
