> Full index: [index.md](index.md)

# Prevent trailing margin with `:last-child`

**When to use**: When adding vertical spacing between repeated sibling elements such as paragraphs or list items.

**Rule**: Do not let the final item in a container keep a trailing `margin-bottom`. Override it with `:last-child { margin-bottom: 0; }` or target `:not(:last-child)` so container spacing stays symmetrical.

**Example**:
```css
.card p:not(:last-child) {
  margin-bottom: 1em;
}
```

**Avoid**: Setting unconditional `margin-bottom` on every paragraph inside a padded card.

**Source**: [Pseudo-classes — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/00-recap/04.01-pseudo-classes)
