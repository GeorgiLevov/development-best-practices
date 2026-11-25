> Full index: [index.md](index.md)

# Highlight containers with `:focus-within` or `:has(:focus-visible)`

**When to use**: When a form, card, or composite widget should react while one of its descendants is focused.

**Rule**: Use `:focus-within` for coarse container states such as lifting a form while any field is focused. When only keyboard focus on a specific child should move the ring to the parent, use `.card:has(button:focus-visible)` (since there is no `:focus-visible-within`), and wrap any removal of the child's own outline in `@supports selector(:has(*))` so older browsers keep default focus indicators.

**Example**:
```css
form:focus-within {
  transform: translateY(-4px);
}
@supports selector(:has(*)) {
  .bento-card:has(button:focus-visible) {
    outline: 2px solid var(--color-primary);
  }
  .bento-card button {
    outline: none;
  }
}
```

**Avoid**: Turning whole cards into `<button>`s to get a container focus ring (breaks text selection and semantics), or removing child outlines without a `@supports` guard.

**Source**: [Focus Within — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/09-little-big-details/11.02-focus-within), [:has — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/09-little-big-details/13-has), [:focus-within — Can I use](https://caniuse.com/?search=focus-within), [:has() — Can I use](https://caniuse.com/css-has)
