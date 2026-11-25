> Full index: [index.md](index.md)

# Map page shells and responsive rearrangements with `grid-template-areas`

**When to use**: When laying out named page regions (header, nav, main, sidebar, footer) that reorganize across breakpoints.

**Rule**: Define named grid regions with `grid-template-areas` and assign children via `grid-area` so page structure reads visually in CSS and responsive rearrangements only update the parent's template strings. Keep every named area strictly rectangular (never L-shaped or disjoint), repeat names to span tracks, and use `.` for intentional empty cells.

**Example**:
```css
.shell {
  min-height: 100%;
  display: grid;
  grid-template-rows: 4rem 1fr 5rem;
  grid-template-columns: 200px 1fr 150px;
  grid-template-areas:
    'header header header'
    'sidebar main ad'
    'footer footer footer';
}
.shell > header { grid-area: header; }
```

**Avoid**: Writing complex `grid-column`/`grid-row` line math on five separate child selectors across every breakpoint when `grid-template-areas` updates the map in one place.

**Source**: [Grid Areas — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/07-css-grid/07-grid-areas)
