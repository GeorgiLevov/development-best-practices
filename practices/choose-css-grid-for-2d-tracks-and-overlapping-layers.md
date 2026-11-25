> Full index: [index.md](index.md)

# Choose CSS Grid for 2D tracks, consistent columns, and layered cells

**When to use**: When designing two-dimensional layouts, strict column/row alignment, or stacked elements occupying the same cell.

**Rule**: Treat CSS Grid rows and columns as invisible layout markers in CSS rather than DOM nodes: rows always run along the block axis and columns along the inline axis (`grid-auto-flow: column` adds columns rather than swapping axis roles like `flex-direction`). Prefer Grid whenever elements align across two dimensions, span multiple tracks, or intentionally share and overlap within the same cell without `position: absolute`.

**Example**:
```css
.hero-stack {
  display: grid;
}
.hero-stack > * {
  grid-column: 1;
  grid-row: 1;
}
```

**Avoid**: Nesting wrapper `<div>` rows or forcing `position: absolute` hacks just to layer badges, captions, or cards inside one shared frame.

**Source**: [Mental Model — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/07-css-grid/02-mental-model), [Grid Flow and Layout Modes — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/07-css-grid/04-grid-flow)
