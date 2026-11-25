> Full index: [index.md](index.md)

# Align grid tracks vs cell items with `*-content`, `*-items`, `*-self`, and `place-*`

**When to use**: When positioning grid columns/rows inside a container, aligning children inside grid cells, or centering content.

**Rule**: Distinguish track alignment from cell alignment: `justify-content` and `align-content` position the grid's columns and rows when free space exists in the container, whereas `justify-items` and `align-items` (plus child `justify-self` and `align-self`, both supported in Grid) position children inside their assigned cells (`start`/`end`/`center`, no `flex-` prefix). Center a child horizontally and vertically in two lines with `display: grid; place-content: center;`.

**Example**:
```css
.centered-stage {
  display: grid;
  place-content: center;
  min-height: 100dvh;
}
.card-grid {
  display: grid;
  grid-template-columns: repeat(2, 250px);
  justify-content: center;
  align-items: start;
}
```

**Avoid**: Expecting `align-content: space-between` to move rows when the grid container has no extra height, or writing `flex-start` in Grid alignment properties.

**Source**: [Alignment — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/07-css-grid/06-alignment), [Two-Line Center — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/07-css-grid/13-two-line-centering)
