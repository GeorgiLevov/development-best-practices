> Full index: [index.md](index.md)

# Use `box-sizing: border-box` universally

**When to use**: In the global reset of every web project.

**Rule**: Apply `box-sizing: border-box` to `*, *::before, *::after` so declared `width` and `height` include content, padding, and borders rather than adding padding and borders onto `content-box`.

**Example**:
```css
*, *::before, *::after {
  box-sizing: border-box;
}

.panel {
  width: 100%;
  padding: 16px;
  border: 2px solid currentColor;
}
```

**Avoid**: Leaving the browser default `content-box`, where `width: 100%` plus `padding` or `border` silently overflows the parent container.

**Source**: [The Box Model — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/01-rendering-logic-1/04-the-box-model), [CSSWG Mistakes](https://wiki.csswg.org/ideas/mistakes)
