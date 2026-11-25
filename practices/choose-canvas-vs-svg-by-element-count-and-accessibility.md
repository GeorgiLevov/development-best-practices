> Full index: [index-canvas.md](index-canvas.md)

# Choose 2D Canvas vs. SVG by animated element count, DOM needs, and text accessibility

**When to use**: When deciding between `<canvas>` (2D context), inline `<svg>`, or higher-level engines for custom graphics, data visualizations, or particle effects.

**Rule**: Remember `<canvas>` is an opaque raster surface—it creates no child DOM nodes, cannot be styled with CSS selectors or `:hover`, provides no hit-testing per shape, and exposes zero semantics to screen readers (`ctx.fillText()` paints raw pixels without line-wrapping). Use 2D `<canvas>` whenever an animation mutates hundreds+ elements per frame, produces dense particle bursts, or performs pixel-level generative sweeps—benchmarks (`wa-svg-vs-canvas`) show Canvas stays smooth far beyond the threshold where per-frame SVG DOM attribute updates bog down style/layout recalculation. Conversely, choose inline `<svg>` when illustrations contain meaningful text that assistive tech should announce (or pair a decorative `<canvas>` with `aria-hidden="true"` / visually-hidden accessible summaries) or when element counts stay small enough that SVG's DOM/CSS ergonomics are equally fast. Graduate to `Path2D` and `create*Gradient()` for complex 2D shapes, `Matter.js` for 2D rigid-body physics, or WebGL/Three.js (`React Three Fiber`) only when true 3D rendering is required.

**Example**:
```html
<!-- Decorative particle canvas paired with accessible summary when meaningful -->
<div class="chart-shell">
  <canvas aria-hidden="true"></canvas>
  <p class="visually-hidden">Live burst of 400 status particles.</p>
</div>
```

**Avoid**: Animating 500+ individual `<svg>` DOM nodes per frame with `.setAttribute()`, putting readable UI copy exclusively inside `ctx.fillText()`, or reaching for WebGL/Three.js when 2D Canvas solves the problem with far less complexity.

**Source**: [Canvas Basics — Whimsical Animations](https://courses.joshwcomeau.com/wham/04-canvas/01-canvas-basics), [Raster vs. Vector — Whimsical Animations](https://courses.joshwcomeau.com/wham/04-canvas/01.01-raster-vs-vector), [Canvas vs. SVG — Whimsical Animations](https://courses.joshwcomeau.com/wham/04-canvas/03-canvas-vs-svg), [The Wide World of Canvas — Whimsical Animations](https://courses.joshwcomeau.com/wham/04-canvas/11-beyond-the-scope), [wa-svg-vs-canvas](https://github.com/joshwcomeau/wa-svg-vs-canvas)
