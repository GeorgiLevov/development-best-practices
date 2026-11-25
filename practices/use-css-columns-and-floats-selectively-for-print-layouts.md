> Full index: [index.md](index.md)

# Use CSS `columns`, `float`, and ragged alignment selectively for editorial text

**When to use**: When styling long-form editorial articles, pull-floated figures, or drop caps.

**Rule**: Use CSS `columns` (with `break-inside: avoid` on headings and blocks) for newspaper-style text flow, and use `float` specifically for wrapping prose around figures or drop caps. Keep web body copy left-aligned (or `text-align: start`) rather than `justify` (which creates uneven word rivers without fine hyphenation), and treat `initial-letter` as progressive enhancement since Firefox still lacks support.

**Example**:
```css
.editorial-article {
  columns: 2 20rem;
  column-gap: 2rem;
}
.editorial-article h2 { break-inside: avoid; }
```

**Avoid**: Applying `text-align: justify` to narrow web columns without hyphenation, or relying on `initial-letter` without an acceptable unstyled fallback.

**Source**: [Print-style Layouts — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/06-typography-and-media/04-print-style-text), [CSS Initial Letter — Can I use](https://caniuse.com/css-initial-letter)
