> Full index: [index.md](index.md)

# Prefer CSS logical properties for directional styles

**When to use**: When setting margins, padding, borders, or offsets along horizontal or vertical reading axes.

**Rule**: Use flow-relative logical properties (`margin-inline`, `padding-block`, `border-block-end`, `inset-inline-start`) instead of physical `left`/`right`/`top`/`bottom` so components adapt cleanly across LTR, RTL, and vertical `writing-mode` contexts (supported across >97% of global browsers).

**Example**:
```css
.card {
  padding-block: 16px;
  padding-inline: 24px;
  border-inline-start: 4px solid rebeccapurple;
}
```

**Avoid**: Hardcoding `margin-left` or `border-left` on directional icons and callouts in internationalized apps.

**Source**: [Directionality — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/01-rendering-logic-1/03-cardinality), [CSS Writing Modes — 24 ways](https://24ways.org/2016/css-writing-modes/), [CSS Logical Properties — Can I use](https://caniuse.com/css-logical-props)
