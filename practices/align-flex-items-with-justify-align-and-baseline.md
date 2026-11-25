> Full index: [index.md](index.md)

# Align flex items with `justify-content`, `align-items`, and `align-self`

**When to use**: When positioning items along the main or cross axis of a flex container.

**Rule**: Remember `justify-content` always follows `flex-direction` (primary axis) while `align-items` and child `align-self` act on the perpendicular cross axis (there is no `justify-self` in Flexbox). When using `align-items: baseline` with empty `<input>` controls, add `placeholder=" "` so older Safari versions do not misalign the empty baseline.

**Example**:
```css
.search-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px;
}
.search-row .badge { align-self: flex-end; }
```

**Avoid**: Writing `justify-self` on flex items (it has no effect in Flexbox) or assuming `align-items` always means vertical alignment when `flex-direction: column` flips the axes.

**Source**: [Alignment — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/04-flexbox/03-alignment), [Flex Direction — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/04-flexbox/02-flexbox-direction)
