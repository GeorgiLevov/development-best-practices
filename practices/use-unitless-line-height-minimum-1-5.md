> Full index: [index.md](index.md)

# Use a unitless `line-height` of at least `1.5` for body text

**When to use**: When setting line spacing on paragraphs and readable prose.

**Rule**: Always pass a unitless number to `line-height` (never fixed `px` or `rem`) so it multiplies cleanly against each element's `font-size`, and set body copy to at least `1.5` to meet WCAG readability guidelines.

**Example**:
```css
p {
  font-size: 1.125rem;
  line-height: 1.5;
}
```

**Avoid**: Leaving browser defaults (~1.15–1.2) on dense body text or hardcoding `line-height: 24px`.

**Source**: [Typography — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/00-recap/07-typography)
