> Full index: [index.md](index.md)

# Match `display: block`, `inline`, and `inline-block` to Flow layout rules

**When to use**: When sizing, padding, or aligning elements inside normal Flow layout.

**Rule**: Remember that `inline` elements wrap across lines and ignore `width`, `height`, and vertical margins (while vertical padding bleeds visually without pushing siblings), `block` elements claim full inline width and stack vertically, and `inline-block` lets an element sit inline while honoring `width`, `height`, and vertical padding/margins (without breaking mid-box across lines).

**Example**:
```css
.badge {
  display: inline-block;
  padding-block: 4px;
  padding-inline: 10px;
}
```

**Avoid**: Setting `width`, `height`, or `margin-block` on an `inline` `<span>` or `<a>` and wondering why it has no effect, or making a long prose link `inline-block` when it needs to line-wrap.

**Source**: [Flow Layout — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/01-rendering-logic-1/09-flow-layout), [Padding — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/01-rendering-logic-1/05-padding)
