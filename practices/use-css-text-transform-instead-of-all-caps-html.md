> Full index: [index.md](index.md)

# Use CSS `text-transform` instead of all-caps HTML

**When to use**: When rendering labels, eyebrows, or headings in uppercase or title case.

**Rule**: Store text in its natural casing in HTML/data and apply `text-transform: uppercase` (or `capitalize`) in CSS so design changes stay reversible with a single declaration.

**Example**:
```css
.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
```

**Avoid**: Typing `ABOUT US` in uppercase directly in HTML markup.

**Source**: [Typography — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/00-recap/07-typography)
