> Full index: [index.md](index.md)

# Inherit border, outline, and icon colors with `currentColor`

**When to use**: When borders, focus rings, dividers, or inline SVG icons should match an element's text color automatically.

**Rule**: Omit the color in `border: 2px solid;` (or explicitly write `currentColor`) on `border`, `outline`, `box-shadow`, or SVG `stroke`/`fill` so they inherit the element's computed `color`. Updating `color` on hover, disabled, or themed variants keeps text, borders, and icons synchronized from a single property.

**Example**:
```css
.badge {
  color: hsl(220deg 80% 40%);
  border: 2px solid; /* uses currentColor */
}
.badge:hover {
  color: hsl(220deg 85% 30%);
}
```

**Avoid**: Repeating the same color token across `color`, `border-color`, and SVG `stroke` on every interactive state when `currentColor` tracks `color` automatically.

**Source**: [Border — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/01-rendering-logic-1/06-border)
