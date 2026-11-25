> Full index: [index.md](index.md)

# Choose Flexbox for 1D dynamic distribution and fluid rows

**When to use**: When laying out navbars, toolbars, media rows, or card stacks along one primary axis.

**Rule**: Use `display: flex` when items should flex, align, or wrap organically along a single row or column based on content size and available space. Switch to CSS Grid when you need strict two-dimensional alignment across both rows and columns.

**Example**:
```css
.toolbar {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
}
```

**Avoid**: Forcing rigid multi-row, multi-column card matrices into nested Flexbox percentage hacks when CSS Grid solves 2D tracks directly.

**Source**: [Hello World — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/04-flexbox/01-hello-world), [An Interactive Guide to Flexbox — Josh W. Comeau](https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/)
