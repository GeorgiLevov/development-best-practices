> Full index: [index-react-hooks.md](index-react-hooks.md)

# Generate unique, SSR-safe accessible IDs with `React.useId()`

**When to use**: Whenever a reusable component renders elements that need matching DOM IDs (`htmlFor`/`id`, `aria-describedby`, `aria-labelledby`, SVG `<clipPath>`/`<mask>` IDs).

**Rule**: Call `React.useId()` once at the top of the component to obtain a stable, unique ID per component instance that matches across server-side rendering and client hydration. Derive multiple related IDs in the same component by appending suffixes (`${id}-email`, `${id}-hint`) rather than calling `useId()` repeatedly. Never hardcode static DOM IDs inside reusable components (which breaks `<label>` focus and accessibility when multiple instances render), never use `Math.random()` or `crypto.randomUUID()` during render (causes hydration mismatches and unstable attributes), and never use `useId()` for `.map()` `key`s.

**Example**:
```jsx
function TextField({ label, hint, ...props }) {
  const id = React.useId();
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} aria-describedby={hint ? `${id}-hint` : undefined} {...props} />
      {hint && <p id={`${id}-hint`}>{hint}</p>}
    </div>
  );
}
```

**Avoid**: Writing `<label htmlFor="email-input">` inside reusable form components, generating `Math.random()` IDs during render, or passing `useId()` to list `key` props.

**Source**: [The `useId` Hook — Joy of React](https://courses.joshwcomeau.com/joy-of-react/03-hooks/01-use-id)
