> Full index: [index.md](index.md)

# Preserve semantic HTML using polymorphic `as` or `asChild` props

**When to use**: When a styled button, heading, or container needs different underlying HTML elements across call sites.

**Rule**: Pick semantic HTML tags intentionally when defining styled primitives (never default everything to `div`), and support a polymorphic `as` (or `asChild`) prop—or switch elements automatically on `href`—so navigation uses `<a>`/`Link` and actions use `<button>` while sharing identical styling.

**Example**:
```jsx
function ActionButton({ href, children, ...delegated }) {
  return (
    <Wrapper as={href ? 'a' : 'button'} href={href} {...delegated}>
      {children}
    </Wrapper>
  );
}
```

**Avoid**: Rendering clickable `<div onClick={...}>` wrappers or styling `<a>` without `href` just to reuse a button's CSS.

**Source**: [Dynamic Tags — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/03-components/13-link-button), [styled-components API Reference](https://styled-components.com/docs/api)
