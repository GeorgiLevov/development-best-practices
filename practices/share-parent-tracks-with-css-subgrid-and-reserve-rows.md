> Full index: [index.md](index.md)

# Share parent tracks with `subgrid` and reserve explicit subgrid spans

**When to use**: When nested elements (`<ul>`/`<li>`, cards, pricing tables) must align tracks with sibling components across a parent Grid.

**Rule**: Apply `display: grid; grid-template-columns: subgrid;` (or `rows: subgrid`, ~94.7% global support; wrap optional upgrades in `@supports (grid-template-columns: subgrid)` with a clean stacked fallback) so descendants share parent tracks. Keep these rules in mind: subgrids always require `display: grid`, must explicitly reserve `span N` rows/columns for their contents, re-index line numbers starting at `1`, inherit parent `grid-template-areas`, and cannot use `auto-fill`/`auto-fit` on the subgrid axis.

**Example**:
```css
.pricing-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.pricing-card {
  grid-row: span 6;
  display: grid;
  grid-template-rows: subgrid;
}
```

**Avoid**: Applying `grid-template-rows: subgrid` without `grid-row: span <count>` (which crams every nested child into a single collapsed row), or expecting `subgrid` line numbers to match parent indices.

**Source**: [Subgrid — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/07-css-grid/18-subgrid), [Dynamic Layouts — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/07-css-grid/18.01-new-layout-possibilities), [Subgrid Gotchas — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/07-css-grid/18.02-subgrid-gotchas), [CSS Subgrid — Can I use](https://caniuse.com/css-subgrid)
