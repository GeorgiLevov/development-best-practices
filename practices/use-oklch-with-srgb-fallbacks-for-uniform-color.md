> Full index: [index.md](index.md)

# Use `oklch()` with sRGB fallbacks for uniform color

**When to use**: When building accessible color scales or vibrant wide-gamut (Display P3) accents.

**Rule**: Use `oklch()` when you need perceptually uniform lightness across hues or wider-gamut colors than sRGB. Declare an `hsl()` or `rgb()` fallback directly before the `oklch()` declaration if older browsers must be supported.

**Example**:
```css
.vibrant-badge {
  background: hsl(340deg 100% 50%);
  background: oklch(0.65 0.25 3);
}
```

**Avoid**: Assuming `hsl()` colors with equal `50%` lightness look equally bright (yellow looks much brighter than blue).

**Source**: [Color — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/00-recap/05-color), [Color Formats in CSS — Josh W. Comeau](https://www.joshwcomeau.com/css/color-formats/), [Oklab and OkLCh — Can I use](https://caniuse.com/wf-oklab)
