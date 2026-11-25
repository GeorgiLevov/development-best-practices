> Full index: [index-react-hooks.md](index-react-hooks.md)

# Reserve `useEffect` for synchronizing with external systems, not events or derived data

**When to use**: When deciding whether logic belongs in render, an event handler, or a `useEffect` hook.

**Rule**: `useEffect` runs after React commits DOM changes and exists solely to synchronize your component with an external system (DOM `.focus()` or `<video>` APIs, `window` listeners, `IntersectionObserver`, `localStorage`, timers, or third-party widgets). Do not use `useEffect` to transform props/state for rendering (compute inline during render) or to run user-triggered actions like submitting a `POST` request (handle directly inside `onClick`/`onSubmit`). Prefer `ref` + `useEffect(() => ref.current?.focus(), [])` over HTML `autoFocus` for dynamically mounted React views, and never pass an `async` function directly to `useEffect(async () => ...)` because it returns a Promise instead of a cleanup function—define and call an inner `async` function instead.

**Example**:
```jsx
function FocusInput({ shouldFocus }) {
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    if (!shouldFocus) return;
    inputRef.current?.focus();
  }, [shouldFocus]);

  return <input ref={inputRef} />;
}
```

**Avoid**: Writing `useEffect(() => setFullName(first + last), [first, last])`, firing `POST` checkout requests inside `useEffect`, or writing `useEffect(async () => { ... }, [])`.

**Source**: [Side Effects — Joy of React](https://courses.joshwcomeau.com/joy-of-react/03-hooks/05-effects), [Running Effects on Mount — Joy of React](https://courses.joshwcomeau.com/joy-of-react/03-hooks/05.04-running-on-mount), [Async/Await in Effects — Joy of React](https://courses.joshwcomeau.com/joy-of-react/03-hooks/07.04-async-await), [Synchronizing with Effects — React Docs](https://react.dev/learn/synchronizing-with-effects), [You Might Not Need an Effect — React Docs](https://react.dev/learn/you-might-not-need-an-effect#sending-a-post-request)
