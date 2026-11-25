> Full index: [index.md](index.md)

# Reserve `text-align` for text, not layout

**When to use**: When aligning text versus images or layout components.

**Rule**: Use `text-align` only to align text content (and avoid hardcoding `left`/`right` without considering RTL languages like Arabic or Hebrew). Use Flexbox, Grid, or margin auto for positioning images and blocks.

**Example**:
```css
.prose-quote {
  text-align: end;
}
```

**Avoid**: Using `text-align: center` on wrapper divs as a general layout mechanism.

**Source**: [Typography — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/00-recap/07-typography)
