> Full index: [index-svg.md](index-svg.md)

# Format readable `<path>` commands and choose hand-authored SVGs vs Figma exports

**When to use**: When authoring `<path d="...">` shapes, elliptical arcs, or deciding between coding SVGs by hand vs exporting from Figma.

**Rule**: Format `<path>` `d` instructions with commas between `(x, y)` pairs and newlines per command—whitespace/commas cost zero after gzip (often compressing *smaller* than minified strings) while keeping coordinates maintainable. Prefer uppercase absolute commands (`M`, `L`, `Q`, `C`, `A`, `Z`) over relative lowercase ones unless mirroring chains with `T`/`S` or building repeatable offsets; remember `A rx,ry rotation large-arc-flag sweep-flag end-x,end-y` always requires all seven parameters. Hand-author simple or animated SVGs (sketching coordinates on graph paper first) so node structure stays semantic and easy to animate, whereas design tools like Figma optimize/flatten paths for static assets. Use Figma's Pen tool (`P`, `Enter` to edit nodes, `Ctrl`-click/drag for curves, `Ctrl + A` for point mirroring) plus `SVG 2 JSX` for intricate *static* multi-curve swoops, and reserve animated organic curves for procedural `<canvas>`/JS generation.

**Example**:
```html
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <path
    d="
      M 6,4
      L 12,4
      A 6,6 0 0 1 18,10
      L 18,18
    "
  />
</svg>
```

**Avoid**: Hand-minifying `d="M6 4L12 4..."` into an unreadable wall of numbers, or exporting heavily animated icons from Figma without cleaning up merged paths and opaque IDs.

**Source**: [Paths — Whimsical Animations](https://courses.joshwcomeau.com/wham/02-svg/03-paths), [Arcs — Whimsical Animations](https://courses.joshwcomeau.com/wham/02-svg/03.02-arc), [Syntactic Sugar — Whimsical Animations](https://courses.joshwcomeau.com/wham/02-svg/03.05-sugar), [Figma Swoops — Whimsical Animations](https://courses.joshwcomeau.com/wham/animation-design/05-figma), [SVG 2 JSX](https://svg2jsx.com/)
