> Full index: [index.md](index.md)

# Constrain fluid lengths and spacing with `clamp()`, `min()`, and `max()`

**When to use**: When padding, container widths, or hero heights should scale smoothly between strict bounds.

**Rule**: Use `clamp(min, preferred, max)`, `min(a, b)`, and `max(a, b)` (~97.2% support) to bound fluid percentages or viewport units between safe extremes in a single declaration without extra media queries (for example, `min-height: min(80vh, 500px)` or `width: clamp(23ch, 60%, 46ch)`).

**Example**:
```css
.hero {
  min-height: min(75dvh, 540px);
  padding-inline: clamp(1rem, 4vw, 3rem);
}
```

**Avoid**: Writing three separate media-query overrides just to cap a percentage padding or hero height at a maximum pixel size.

**Source**: [Clamping Values — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/05-responsive-css/12-clamping-values), [One-Line Layouts: Clamping My Style — web.dev](https://web.dev/articles/one-line-layouts#09_clamping_my_style_clampmin_actual_max)
