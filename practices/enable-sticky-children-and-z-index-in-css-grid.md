> Full index: [index.md](index.md)

# Enable `position: sticky` and predict `z-index` / margins in CSS Grid

**When to use**: When combining `position: sticky`, overlapping `z-index` layers, or large lists inside CSS Grid.

**Rule**: Set `align-self: start` on `position: sticky` grid children (or on truncated text children) so default `stretch` doesn't pin their height to the row, and never put `height: 100%` on a sticky inner wrapper that needs room to travel. Remember margins never collapse on Grid items, `z-index` works directly on Grid children without `position: relative` (creating a stacking context), and virtualize massive lists (e.g., `react-window`) well below ~1,500 DOM nodes.

**Example**:
```css
.docs-grid {
  display: grid;
  grid-template-columns: 14rem 1fr;
  isolation: isolate;
}
.docs-grid aside {
  position: sticky;
  top: 5rem;
  align-self: start;
}
```

**Avoid**: Adding `position: relative` purely to unlock `z-index` on a Grid item, or wrapping sticky headers/sidebars in `overflow: hidden` grid ancestors.

**Source**: [Sticky Grids — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/07-css-grid/14-sticky-grids), [Grid Quirks — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/07-css-grid/17-grid-quirks), [New Grid Times Workshop Solution — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/07-css-grid/19.01-workshop-solution)
