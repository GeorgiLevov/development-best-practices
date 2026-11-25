> Full index: [index-svg.md](index-svg.md)

# Decouple SVG `viewBox` coordinates from display size with `preserveAspectRatio` and `non-scaling-stroke`

**When to use**: When scaling SVG illustrations, decorative swoops, responsive charts, or icons across viewports and font preferences.

**Rule**: Use `viewBox="0 0 W H"` to establish an internal coordinate grid independent of rendered CSS dimensions, letting `<svg>` scale cleanly; when an SVG contains `<text>` sized in `viewBox` pixels, size the parent `<svg>` in `rem` so user font-size preferences still scale the text. By default, SVGs preserve their `viewBox` aspect ratio inside mismatched boxes (`meet` behavior); set `preserveAspectRatio="none"` only when intentional stretching is wanted (e.g., full-bleed decorative waves or responsive JS-free charts), and wrap stretched swoops in a centered `overflow: hidden` flex container with `min-width` so narrow mobile screens crop evenly instead of squishing awkwardly. Add `vector-effect: non-scaling-stroke` whenever stroke thickness must stay fixed in physical screen pixels regardless of SVG zoom or non-uniform stretching.

**Example**:
```css
.swoops-wrapper {
  display: flex;
  justify-content: center;
  overflow: hidden;
}
.swoops {
  width: 100%;
  height: 200px;
  min-width: 450px;
}
.chart-line {
  vector-effect: non-scaling-stroke;
  stroke-width: 2px;
}
```

**Avoid**: Stretching charts or icons without `vector-effect: non-scaling-stroke` when uniform stroke weight matters, or letting narrow `preserveAspectRatio="none"` swoops collapse horizontally on mobile.

**Source**: [ViewBox — Whimsical Animations](https://courses.joshwcomeau.com/wham/02-svg/02-viewbox), [Aspect Ratio — Whimsical Animations](https://courses.joshwcomeau.com/wham/02-svg/02.01-aspect-ratio), [Scaling Stroke — Whimsical Animations](https://courses.joshwcomeau.com/wham/02-svg/02.02-scaling-stroke), [Responsive JavaScript-Free Charts — Rich Harris](https://dev.to/richharris/a-new-technique-for-making-responsive-javascript-free-charts-gmp)
