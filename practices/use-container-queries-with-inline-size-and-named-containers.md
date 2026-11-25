> Full index: [index.md](index.md)

# Use container queries with `container-type: inline-size` and named containers

**When to use**: When reusable components live inside sidebars, grids, or multi-column layouts whose width varies independently of the viewport.

**Rule**: Declare `container-type: inline-size` on the ancestor wrapper (almost never `container-type: size`, which severs content-driven height and collapses auto-height boxes to `0px`) and query it with `@container (min-width: ...)` (~96% support). Name containers via `container: card / inline-size` when nested containers coexist, and default to narrow/condensed base styles with `min-width` container queries for graceful fallback.

**Example**:
```css
.card-slot { container: card-slot / inline-size; }
.card {
  display: grid;
  gap: 12px;
  @container card-slot (min-width: 24rem) {
    grid-template-columns: 120px 1fr;
  }
}
```

**Avoid**: Setting `container-type: size` on a fluid-height wrapper or writing brittle multi-range `@media` rules to guess when a sidebar column widens on smaller viewports.

**Source**: [Container Queries — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/05-responsive-css/18-container-queries), [Container Query Patterns — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/05-responsive-css/18.01-container-query-patterns), [CSS Container Queries — Can I use](https://caniuse.com/css-container-queries)
