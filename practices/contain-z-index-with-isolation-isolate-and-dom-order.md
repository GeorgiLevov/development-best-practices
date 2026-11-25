> Full index: [index.md](index.md)

# Contain `z-index` with `isolation: isolate` and DOM order

**When to use**: When building layered components (cards, headers, app roots) that use `z-index` internally.

**Rule**: Rely on natural DOM source order before adding `z-index`, keep any `z-index` values small (`1`, `2`, or semantic layer tokens), and set `isolation: isolate` on self-contained component wrappers and the app root (`#root`) so internal layers cannot leak out and collide with unrelated UI.

**Example**:
```css
.card {
  position: relative;
  isolation: isolate;
}

.card-badge {
  position: relative;
  z-index: 1;
}
```

**Avoid**: Letting component-internal `z-index` values compete globally across the page or using arbitrary multi-digit values like `z-index: 500`.

**Source**: [Isolation — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/02-rendering-logic-2/09-isolation), [Reducing z-index — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/02-rendering-logic-2/08-reducing-z-index)
