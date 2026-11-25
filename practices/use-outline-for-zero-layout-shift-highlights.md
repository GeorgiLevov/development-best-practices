> Full index: [index.md](index.md)

# Use `outline` or transparent borders to prevent hover/focus layout shift

**When to use**: When adding borders, active highlights, or debug boxes on hover, focus, or state changes.

**Rule**: Remember that `border` consumes box-model space (and requires an explicit `border-style` other than default `none` to render), whereas `outline` paints outside the border box without shifting neighboring layout and supports `outline-offset`. If a state change needs a rounded `border`, reserve its space ahead of time with a transparent border.

**Example**:
```css
.tile {
  border: 2px solid transparent;
  border-radius: 8px;
}
.tile:hover {
  border-color: royalblue;
}
.tile:focus-visible {
  outline: 2px solid royalblue;
  outline-offset: 3px;
}
```

**Avoid**: Adding `border: 2px solid` only on `:hover` without reserving space, or writing `border: 2px red` without a `border-style`.

**Source**: [Border — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/01-rendering-logic-1/06-border), [CSSWG Mistakes](https://wiki.csswg.org/ideas/mistakes)
