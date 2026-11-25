> Full index: [index.md](index.md)

# Make pill and stadium shapes with an oversized `border-radius`

**When to use**: When buttons, tags, or cards of dynamic size need fully circular ends that never stretch into ovals.

**Rule**: Set `border-radius` to a value larger than the element could ever be (`100vmax` or a large px value like `9999px`). The spec scales all radii down proportionally when adjacent corners would overlap, so the corners stay circular at any size; large asymmetric values (e.g., `100vmax 100vmax 20vmax 20vmax`) keep their ratio, letting you build asymmetric circular shapes.

**Example**:
```css
.pill {
  border-radius: 100vmax;
}
.badge {
  /* top corners 5x larger than the bottom ones, always circular */
  border-radius: 5000px 5000px 1000px 1000px;
}
```

**Avoid**: Using `border-radius: 50%` on non-square elements (ovals) or hard-coding half the current height, which breaks as soon as content or font size changes.

**Source**: [Circular Radius — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/09-little-big-details/02.02-circular-radius), [CSS Backgrounds and Borders Level 3 — Corner overlap (W3C)](https://www.w3.org/TR/css-backgrounds-3/#corner-overlap)
