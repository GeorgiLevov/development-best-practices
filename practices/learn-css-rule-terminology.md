> Full index: [index.md](index.md)

# Use exact CSS style-rule terminology

**When to use**: When reading CSS specifications, MDN docs, or discussing style bugs.

**Rule**: Know the exact parts of a CSS style rule: the selector targets elements, curly braces hold declarations, and each declaration pairs a property name with a value.

**Example**:
```css
/* Style rule: selector + declaration block */
.error-text {
  color: red; /* Declaration: property (color) + value (red) */
}
```

**Avoid**: Conflating selectors, properties, and declarations when searching docs or reviewing code.

**Source**: [Anatomy of a Style Rule — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/00-recap/02-anatomy)
