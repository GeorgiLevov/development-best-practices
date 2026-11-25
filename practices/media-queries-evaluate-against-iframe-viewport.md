> Full index: [index.md](index.md)

# Media queries evaluate against the iframe viewport

**When to use**: When embedding apps, previews, or sandboxes inside an `<iframe>`.

**Rule**: Account for the fact that viewport media queries inside an `<iframe>` run against the embedded document's dimensions, not the outer page window. Test embedded widgets at their actual iframe container sizes.

**Example**:
```text
Outer window: 1200px wide
Embedded preview iframe: 320px wide -> triggers `@media (max-width: 400px)`.
```

**Avoid**: Assuming `@media (min-width: ...)` inside an embedded frame reflects the top-level browser window.

**Source**: [Media Queries — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/00-recap/03-media-queries)
