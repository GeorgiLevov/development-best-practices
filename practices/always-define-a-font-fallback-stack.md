> Full index: [index.md](index.md)

# Always define a font fallback stack

**When to use**: When setting `font-family` with a web font or platform-specific typeface.

**Rule**: Provide a comma-separated fallback list ending in a generic category (`sans-serif`, `serif`, or `system-ui`), and quote custom web font names so readers still see legible text if downloads fail or lag.

**Example**:
```css
body {
  font-family: 'Roboto', system-ui, Arial, sans-serif;
}
```

**Avoid**: Specifying only a single unquoted web font with no OS or generic fallback.

**Source**: [Typography — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/00-recap/07-typography)
