> Full index: [index.md](index.md)

# Use space-separated color syntax with `/` alpha

**When to use**: When writing `rgb()`, `hsl()`, or `oklch()` colors with or without opacity.

**Rule**: Use CSS Colors Level 4 space-separated channels with a `/` delimiter before the alpha value (e.g., `hsl(200deg 90% 50% / 0.5)`) rather than legacy comma-separated `rgba()` or `hsla()`.

**Example**:
```css
.overlay {
  background: hsl(220deg 20% 10% / 0.6);
}
```

**Avoid**: Mixing legacy `rgba()`/`hsla()` functions with modern CSS color formats.

**Source**: [Color — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/00-recap/05-color), [Color Formats in CSS — Josh W. Comeau](https://www.joshwcomeau.com/css/color-formats/)
