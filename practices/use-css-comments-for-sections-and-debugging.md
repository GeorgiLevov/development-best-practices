> Full index: [index.md](index.md)

# Use CSS comments for sections and rule isolation

**When to use**: When organizing larger stylesheets or narrowing down a style conflict.

**Rule**: Use `/* ... */` comments to label logical stylesheet sections for quick navigation and to temporarily disable suspect rules during debugging.

**Example**:
```css
/* Navigation links */
/* nav a { color: red; } */
```

**Avoid**: Using `//` single-line comments in standard CSS files (which breaks the following rule).

**Source**: [Getting started with CSS — MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/Getting_started)
