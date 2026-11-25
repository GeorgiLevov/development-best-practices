> Full index: [index-react-hooks.md](index-react-hooks.md)

# Use `useRef` for DOM access and mutable values that do not drive renders

**When to use**: When holding a reference to a rendered DOM element (`focus()`, `.play()`, `IntersectionObserver`) or persisting mutable data across renders (timer IDs, flags, previous values) without re-rendering.

**Rule**: Call `React.useRef(initialValue)` to get a persistent `{ current }` container across the component's lifetime. Attach `<el ref={elRef} />` to access the DOM node inside `useEffect` or event handlers—never read or mutate `ref.current` during render, and never store UI-displayed data in a ref (use `useState` so updates trigger renders). In React 19+, callback refs (`ref={(node) => { ... return () => cleanup(); }}`) support returning a cleanup function on unmount; always use braced arrow bodies (`el => { myRef = el; }`) rather than implicit returns so TypeScript does not treat the element as a cleanup function.

**Example**:
```jsx
function SearchBar() {
  const inputRef = React.useRef(null);

  return (
    <>
      <input ref={inputRef} type="search" />
      <button type="button" onClick={() => inputRef.current?.focus()}>
        Focus search
      </button>
    </>
  );
}
```

**Avoid**: Reading `ref.current` during render (when the DOM node does not exist yet), storing visible UI state in `useRef`, or using `document.querySelector` instead of refs on React-owned elements.

**Source**: [Refs — Joy of React](https://courses.joshwcomeau.com/joy-of-react/03-hooks/04-refs), [Ref Exercises — Joy of React](https://courses.joshwcomeau.com/joy-of-react/03-hooks/04.01-ref-exercises), [React v19 Ref Cleanups — React Blog](https://react.dev/blog/2024/12/05/react-19#cleanup-functions-for-refs)
