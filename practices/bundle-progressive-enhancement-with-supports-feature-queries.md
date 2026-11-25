> Full index: [index.md](index.md)

# Bundle interdependent fallbacks with `@supports` feature queries

**When to use**: When pairing a modern CSS layout feature with an alternative fallback layout block.

**Rule**: Do not wrap ordinary standalone properties (like `border-radius` or `aspect-ratio` alone) in `@supports`—browsers naturally ignore unknown declarations. Reserve `@supports (property: value)` (~97.4% support) for grouping multiple rules or resetting fallback properties (such as reverting a fixed `height` fallback only when `aspect-ratio` or Grid is supported).

**Example**:
```css
.photo { width: 100%; height: 200px; object-fit: cover; }
@supports (aspect-ratio: 1 / 1) {
  .photo { height: revert; aspect-ratio: 1 / 1; }
}
```

**Avoid**: Cluttering stylesheets with `@supports` checks for single properties that already degrade cleanly on their own.

**Source**: [Feature Queries — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/05-responsive-css/19-feature-queries), [Using Feature Queries in CSS — Mozilla Hacks](https://hacks.mozilla.org/2016/08/using-feature-queries-in-css/), [CSS Feature Queries — Can I use](https://caniuse.com/css-featurequeries)
