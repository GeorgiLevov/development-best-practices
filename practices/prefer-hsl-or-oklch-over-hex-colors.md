> Full index: [index.md](index.md)

# Prefer `hsl()` or `oklch()` over hex codes

**When to use**: When authoring or maintaining color values in stylesheets and design tokens.

**Rule**: Use `hsl()` (or `oklch()` where supported) instead of hex codes. Human-centric hue/saturation/lightness channels let you read a color at a glance and darken, lighten, or desaturate it without opening a color picker.

**Example**:
```css
.btn {
  background: hsl(220deg 85% 50%);
}
.btn:hover {
  background: hsl(220deg 85% 42%);
}
```

**Avoid**: Hardcoding opaque hex strings like `#135bec` that cannot be tweaked mentally.

**Source**: [Color — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/00-recap/05-color), [Color Formats in CSS — Josh W. Comeau](https://www.joshwcomeau.com/css/color-formats/)
