> Full index: [index.md](index.md)

# Prevent CSS Grid blowout with `minmax(0, 1fr)` or child `overflow: auto`

**When to use**: When a `1fr` grid track stretches past the viewport due to `<pre>` code blocks, long strings, or horizontal carousels.

**Rule**: Remember `1fr` means `minmax(auto, 1fr)`: its minimum track size is the child's `min-content` width, so wide descendants blow out the track even if a nested child has `max-width: 100%; overflow: auto;`. Prevent blowout by defining the track as `minmax(0, 1fr)`, setting `min-width: 0` on the grid item, or moving `overflow: auto` onto the direct grid child itself.

**Example**:
```css
.docs-grid {
  display: grid;
  grid-template-columns: 175px minmax(0, 1fr);
  gap: 16px;
}
.docs-grid .carousel {
  overflow-x: auto;
}
```

**Avoid**: Putting `overflow-x: auto` only on a grandchild inside a `1fr` track and wondering why the column expands to 1000px wide.

**Source**: [Managing Overflow — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/07-css-grid/16-managing-overflow), [Preventing a Grid Blowout — CSS-Tricks](https://css-tricks.com/preventing-a-grid-blowout/)
