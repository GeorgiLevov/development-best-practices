> Full index: [index.md](index.md)

# Place and span grid items with line numbers, `1 / -1`, `span`, and `dense`

**When to use**: When positioning items on explicit grid lines, spanning featured cards, or packing non-ordered items.

**Rule**: Use `grid-column` / `grid-row` with line numbers (prefer `1 / -1` to span an entire explicit axis even if column counts change later) or `span N` (e.g., `grid-column: span 2`) for dynamic featured items. Add `grid-auto-flow: row dense` to backfill gaps left by wide items only when visual reordering does not confuse users or keyboard focus.

**Example**:
```css
.magazine-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-flow: row dense;
  gap: 16px;
}
.magazine-grid .featured { grid-column: span 2; }
.magazine-grid .banner { grid-column: 1 / -1; }
```

**Avoid**: Hardcoding `grid-column: 1 / 4` on a 3-column full-width banner (which breaks as soon as a 4th column is added), or using `dense` on ordered forms and numbered steps.

**Source**: [Tracks and Lines — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/07-css-grid/08-tracks-and-lines), [Full Bleed Layouts — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/07-css-grid/15-full-bleed)
