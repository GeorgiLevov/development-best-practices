> Full index: [index.md](index.md)

# Calculate nested border radii from the inner radius plus padding

**When to use**: When a rounded element (image, button, inner panel) sits inside a rounded, padded container.

**Rule**: Make concentric corners share a center point: outer radius = inner radius + the gap (padding/border) between them, or inner radius = outer radius − gap when the outer value is fixed. Store the values in CSS variables and compute with `calc()` so the relationship survives design changes.

**Example**:
```css
.card {
  --inner-radius: 16px;
  --padding: 8px;
  padding: var(--padding);
  border-radius: calc(var(--inner-radius) + var(--padding));
}
.card .avatar {
  border-radius: var(--inner-radius);
}
```

**Avoid**: Giving the parent and child the same `border-radius`, which produces chunky, uneven corner thickness, or tuning nested radii by trial and error.

**Source**: [Nested Radiuses — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/09-little-big-details/02.01-nested-radius)
