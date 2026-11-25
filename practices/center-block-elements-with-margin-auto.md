> Full index: [index.md](index.md)

# Center constrained block elements with `margin-inline: auto`

**When to use**: When centering a block container horizontally inside a wider parent in Flow layout.

**Rule**: Set `margin-inline: auto` (or `margin: 0 auto`) on a block element that has a constrained width or `max-width`. Remember that in Flow layout, `auto` margins absorb free space only horizontally—vertical `auto` margins resolve to `0` (unlike Flexbox or Grid).

**Example**:
```css
.page-shell {
  max-width: 64rem;
  margin-inline: auto;
  padding-inline: 16px;
}
```

**Avoid**: Expecting `margin-block: auto` to vertically center an element in normal Flow layout, or applying `text-align: center` to center block boxes.

**Source**: [Margin — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/01-rendering-logic-1/07-margin)
