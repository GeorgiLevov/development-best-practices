> Full index: [index.md](index.md)

# Avoid gray gradient dead zones with midpoint colors or `in oklch`

**When to use**: When a gradient between two saturated colors looks muddy or gray in the middle.

**Rule**: CSS interpolates gradients in RGB by default, so complementary colors average toward gray. Interpolate in a better color space (`linear-gradient(to right in oklch, yellow, blue)`, ~91% support) after a plain-gradient fallback, or insert saturated midpoint stops (generated in HSL/LCH with a gradient tool) so every browser gets a vivid result.

**Example**:
```css
.hero {
  /* Fallback */
  background-image: linear-gradient(to right, yellow, blue);
  /* Perceptual interpolation for modern browsers */
  background-image: linear-gradient(to right in oklch, yellow, blue);
}
.hero--universal {
  background-image: linear-gradient(to right, #ffff00, #f0d465, #ddaa8f, #c280b2, #8440e1, #0000ff);
}
```

**Avoid**: Shipping two-color gradients between distant hues without checking the midpoint for a desaturated gray band.

**Source**: [Gradient Dead Zones — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/09-little-big-details/05.06-gradient-dead-zone), [Make Beautiful Gradients — Josh W. Comeau](https://www.joshwcomeau.com/css/make-beautiful-gradients/), [radial-gradient() color interpolation — MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/radial-gradient%28%29)
