> Full index: [index.md](index.md)

# Wrap text around images and shapes with `shape-outside`

**When to use**: When editorial text should flow around a circular avatar, a cut-out image, or a custom shape.

**Rule**: Float the element (prefer `float: inline-start` / `inline-end`, ~95% support) and add `shape-outside` with `circle()`, a polygon, or the image URL itself (wrapping around its opaque pixels). Use `shape-margin` for breathing room, and still add a regular margin on the wrapping side because `shape-margin` can't push text beyond the float's box. Support for CSS Shapes is ~97%; the fallback is ordinary rectangular wrapping.

**Example**:
```css
.article .avatar {
  float: inline-start;
  width: 125px;
  border-radius: 50%;
  shape-outside: circle();
  shape-margin: 12px;
  margin-inline-end: 24px;
}
```

**Avoid**: Breaking paragraphs into manually-indented lines or using absolute positioning to fake text wrapping around shapes.

**Source**: [Floats — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/09-little-big-details/12-floats), [CSS Shapes Level 1 — Can I use](https://caniuse.com/css-shapes), [float: inline-start — Can I use](https://caniuse.com/mdn-css_properties_float_inline-start)
