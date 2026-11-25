> Full index: [index.md](index.md)

# Build full-bleed editorial layouts with a 3-column CSS Grid

**When to use**: When centering readable prose (`50ch–75ch`) while letting hero photos, charts, or banners stretch edge-to-edge.

**Rule**: Replace single-box `max-width` wrappers with a 3-column CSS Grid (`grid-template-columns: 1fr min(65ch, 100%) 1fr;`), assign default children to the center column (`> * { grid-column: 2; }`), and span `.full-bleed` items across `grid-column: 1 / -1`. Store horizontal gutter padding in a `--breathing-room` variable and negate it on `.full-bleed` (`margin-inline: calc(var(--breathing-room) * -1)`) so text never touches screen edges.

**Example**:
```css
.article-grid {
  --breathing-room: 16px;
  display: grid;
  grid-template-columns: 1fr min(65ch, 100%) 1fr;
  padding-inline: var(--breathing-room);
}
.article-grid > * { grid-column: 2; }
.article-grid > .full-bleed {
  grid-column: 1 / -1;
  margin-inline: calc(var(--breathing-room) * -1);
}
```

**Avoid**: Nesting `width: 100vw` + `margin-left: calc(50% - 50vw)` breakout hacks inside a `max-width` wrapper (which cause horizontal scrollbars when vertical scrollbars appear).

**Source**: [Full Bleed Layouts — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/07-css-grid/15-full-bleed), [CSS Selector Performance — Web Performance Calendar](https://calendar.perfplanet.com/2011/css-selector-performance-has-changed-for-the-better/)
