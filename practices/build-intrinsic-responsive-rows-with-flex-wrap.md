> Full index: [index.md](index.md)

# Build breakpoint-free responsive rows with `flex-wrap` and `flex`

**When to use**: When building multi-item rows, tag clouds, or feature strips that should reflow smoothly across widths.

**Rule**: Set `flex-wrap: wrap` on the flex container and give children `flex: 1 1 <min-basis>` (or `flex: 0 1 <basis>` if items should not stretch) so they wrap onto new flex lines automatically once space runs out. When wrapped lines need group alignment along the cross axis, use `align-content` rather than `align-items`.

**Example**:
```css
.feature-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
.feature-card { flex: 1 1 18rem; }
```

**Avoid**: Writing multiple `@media` column-count breakpoints for simple fluid card strips when `flex-wrap: wrap` + `flex-basis` handles wrapping natively.

**Source**: [Wrapping — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/04-flexbox/08-wrapping), [One-Line Layouts: Deconstructed Pancake — web.dev](https://web.dev/articles/one-line-layouts#02_the_deconstructed_pancake_flex_grow_shrink_basewidth)
