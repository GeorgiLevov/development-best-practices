> Full index: [index.md](index.md)

# Prevent overstuffed centered flex containers from clipping start items

**When to use**: When centering items inside a horizontally or vertically scrollable flex container.

**Rule**: In CSS, `justify-content: center` or `align-items: center` centers overflowing content symmetrically past both edges, pushing start items into unreachable negative scroll space. On scrollable flex containers, omit `justify-content: center` and apply `margin-inline: auto` on the flex children (or use `justify-content: safe center` where supported) so items center when space allows and align to start when overflowing.

**Example**:
```css
.tab-strip { display: flex; overflow-x: auto; gap: 8px; }
.tab-strip > :first-child { margin-inline-start: auto; }
.tab-strip > :last-child { margin-inline-end: auto; }
```

**Avoid**: Setting `justify-content: center; overflow-x: auto;` on horizontal carousels or pill bars where narrow viewports clip the leftmost pills permanently.

**Source**: [Exercises: Overstuffed and Centered — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/04-flexbox/12-exercises)
