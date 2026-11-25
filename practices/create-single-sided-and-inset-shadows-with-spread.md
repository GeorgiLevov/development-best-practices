> Full index: [index.md](index.md)

# Create single-sided and inset shadows with spread and `inset`

**When to use**: When a shadow should only appear on one edge (e.g., under a header) or an element should look recessed.

**Rule**: Use `box-shadow`'s fourth length (spread) with a negative value equal to the blur radius to cancel the blur's outward bleed, then use the offset to choose which side shows; link the values with CSS variables. Use the `inset` keyword for inner shadows (wells, inputs, "moats"), and add `overflow: hidden` to the inset container when children cast their own shadows so they don't bleed past it.

**Example**:
```css
.header {
  --blur: 8px;
  --spread: calc(var(--blur) * -1);
  box-shadow: 0 12px var(--blur) var(--spread) hsl(0deg 0% 0% / 0.2);
}
.well {
  overflow: hidden;
  box-shadow: inset 2px 2px 8px hsl(0deg 0% 0% / 0.33);
}
```

**Avoid**: Trying to fake single-sided shadows with `filter: drop-shadow()` (it has no spread), or with clipping hacks and pseudo-element overlays.

**Source**: [Single-Sided Shadows — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/09-little-big-details/03.02-single-sided-shadows), [Inset Shadows — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/09-little-big-details/03.03-inset-shadows)
