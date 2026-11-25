> Full index: [index.md](index.md)

# Use `ch` for reading line lengths and `fit-content` for intrinsic widths

**When to use**: When sizing prose columns, headings, or shrink-wrapped block badges and banners.

**Rule**: Cap prose containers at `max-width: 60ch`–`70ch` (based on `0` glyph width) for comfortable reading line lengths, and use `width: fit-content` (or `min-content` / `max-content`) when a block element should shrink to its content while preserving block centering and wrapping.

**Example**:
```css
.article-body {
  max-width: 65ch;
  margin-inline: auto;
}

.section-heading {
  width: fit-content;
}
```

**Avoid**: Switching blocks to `display: inline-block` solely to shrink-wrap width, or letting prose stretch edge-to-edge on wide screens.

**Source**: [Width Algorithms — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/01-rendering-logic-1/10-width-algorithms)
