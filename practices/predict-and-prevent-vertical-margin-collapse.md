> Full index: [index.md](index.md)

# Predict and prevent unintended vertical margin collapse

**When to use**: When vertically spaced Flow elements appear closer together than expected or push their parent container down.

**Rule**: Remember that in Flow layout, adjacent vertical margins (including empty elements and parent-first-child boundaries) collapse into the larger positive margin—or `positive + negative` when signs differ. Horizontal margins never collapse, Flexbox/Grid children never collapse, and padding, borders, or a new block formatting context (`display: flow-root`) stop parent-child margin collapse.

**Example**:
```css
/* Keep child margin inside the parent without adding padding/border */
.section {
  display: flow-root;
}

.section h2 {
  margin-top: 24px;
}
```

**Avoid**: Guessing why a child's `margin-top` shifts its parent box down, or adding fragile `padding: 1px` hacks when `display: flow-root` or Flex/Grid solves it cleanly.

**Source**: [Rules of Margin Collapse — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/01-rendering-logic-1/12-rules-of-margin-collapse), [Will It Collapse? — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/01-rendering-logic-1/13-will-it-collapse)
