> Full index: [index.md](index.md)

# Load explicit weights and italics for web fonts

**When to use**: When importing a custom web font family used with bold or italic text.

**Rule**: Include every weight and italic variant your UI uses when loading a web font. If a weight or italic set is missing, browsers synthesize faux bold or faux slanted text that renders poorly.

**Example**:
```html
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
```

**Avoid**: Importing only regular `400` and applying `font-weight: 700` or `font-style: italic`.

**Source**: [Typography — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/00-recap/07-typography)
