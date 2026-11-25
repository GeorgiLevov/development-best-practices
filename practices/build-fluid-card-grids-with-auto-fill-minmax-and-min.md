> Full index: [index.md](index.md)

# Build fluid card grids with `auto-fill`, `minmax()`, and `min()`

**When to use**: When laying out responsive card or product grids without rigid column-count breakpoints.

**Rule**: Combine `repeat(auto-fill, minmax(min(<min-width>, 100%), 1fr))` so columns wrap automatically and never overflow viewports narrower than `<min-width>`. Prefer `auto-fill` to keep consistent column widths even when few items exist, or `auto-fit` when sparse rows should stretch items to 100% width; if teammates find nested functions obscure, use a single `1fr` base + `@media` override with padding/scrollbar headroom instead.

**Example**:
```css
.card-grid {
  --min-col: min(320px, 100%);
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(var(--min-col), 1fr));
}
```

**Avoid**: Writing `minmax(400px, 1fr)` without `min(400px, 100%)` or a narrow-screen `@media` fallback, which overflows 320px–399px mobile screens horizontally, or putting `1fr` first in `minmax()`.

**Source**: [Fluid Grids — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/07-css-grid/09-fluid-grids), [Auto-Sizing Columns: auto-fill vs auto-fit — CSS-Tricks](https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/)
