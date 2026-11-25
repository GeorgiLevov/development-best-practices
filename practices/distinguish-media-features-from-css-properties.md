> Full index: [index.md](index.md)

# Distinguish media features from CSS properties

**When to use**: When writing `@media (...)` conditions for responsive styles.

**Rule**: Remember that tokens inside `@media (...)` (like `max-width` or `min-width`) are media features, not CSS properties. Do not try to query arbitrary CSS properties such as `font-size` inside a media query.

**Example**:
```css
@media (min-width: 48rem) {
  .title { font-size: 2rem; }
}
```

**Avoid**: Writing invalid queries like `@media (font-size: 32px) { ... }`.

**Source**: [Media Queries — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/00-recap/03-media-queries)
