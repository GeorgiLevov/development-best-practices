> Full index: [index.md](index.md)

# Size flex items with `flex-basis`, `flex-grow`, and `flex-shrink`

**When to use**: When sizing flex children that must maintain a baseline size, grow proportionally, or resist shrinking.

**Rule**: Remember `flex-basis` sets the hypothetical starting size along the main axis before growing/shrinking, and `flex: 1` expands to `flex: 1 1 0%`—overriding `width` (or `height` in column mode). Pass an explicit basis like `flex: 1 1 200px` when items need equal starting targets, and use `flex-shrink: 0` to keep an item strictly at its basis vs `min-width` when it may shrink down to a floor.

**Example**:
```css
.sidebar { flex: 0 0 240px; }
.panel {
  flex: 1 1 200px;
  min-width: 160px;
}
```

**Avoid**: Setting both `width: 200px` and `flex: 1` expecting `200px` to remain the base size—`flex: 1` resets `flex-basis` to `0%`.

**Source**: [Growing and Shrinking — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/04-flexbox/05-growing-and-shrinking), [Constraints — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/04-flexbox/06-constraints)
