> Full index: [index.md](index.md)

# Truncate overflowing text intentionally with `ellipsis` or `line-clamp`

**When to use**: When UI constraints require clamping long titles or preview snippets onto one or a few lines.

**Rule**: For single-line truncation use `white-space: nowrap; overflow: hidden; text-overflow: ellipsis;` (adding `min-width: 0` inside Flex/Grid items so the box can shrink), and for multi-line clamping use `-webkit-line-clamp` with `display: -webkit-box; -webkit-box-orient: vertical; overflow: hidden;`. Never truncate essential error text, prices, or actions where hidden text blocks comprehension.

**Example**:
```css
.card-title {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
```

**Avoid**: Applying `text-overflow: ellipsis` without `overflow: hidden` and `white-space: nowrap`, or omitting `min-width: 0` on flex children so they refuse to truncate.

**Source**: [Text Overflow — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/02-rendering-logic-2/17-text-overflow), [Overflow and Shapes — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/02-rendering-logic-2/16-overflow-and-shapes)
