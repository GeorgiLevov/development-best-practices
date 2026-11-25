> Full index: [index.md](index.md)

# SVG Primitives, Coordinates, Masks & Animation

> Sub-index of the Development Best Practices collection. Open only the files that match the task.

## SVG Primitives, Coordinates & Paths

- [Author inline SVG primitives with explicit strokes, DOM stacking order, and `paint-order` text](author-inline-svg-primitives-strokes-and-dom-stacking.md): Target inline SVG nodes with CSS, set `fill="none"`, use DOM order instead of `z-index`, use `createElementNS` in vanilla JS, tune `stroke-miterlimit`, and outline text with `paint-order: stroke fill`.
- [Decouple SVG `viewBox` coordinates from display size with `preserveAspectRatio` and `non-scaling-stroke`](scale-svg-viewbox-preserve-aspect-ratio-and-non-scaling-strokes.md): Size `<text>` SVGs in `rem`, handle `preserveAspectRatio="none"` swoops with centered `overflow: hidden` flex wrappers, and use `vector-effect: non-scaling-stroke`.
- [Format readable `<path>` commands and choose hand-authored SVGs vs Figma exports](write-readable-svg-paths-arcs-and-choose-hand-vs-figma.md): Keep commas/newlines in `d` strings, master `M/L/Q/C/A/Z` and `T`/`S`, hand-author animated SVGs, and reserve Figma + `SVG 2 JSX` for static organic curves.
- [Deduplicate repeated SVG geometry with `<defs>` and `<use>` without cross-browser attribute bugs](reuse-svg-geometry-with-defs-and-use-safely.md): Define shared templates in `<defs>`, put all geometry on the template and styling/transforms on `<use>` clones, and account for Shadow DOM limits.

## SVG Transforms, Masks & Filters

- [Set SVG `transform-origin` accurately using `viewBox` coordinates or `transform-box: fill-box`](pivot-svg-transforms-explicitly-and-with-transform-box.md): Use `transform-box: fill-box` or explicit `px` `viewBox` coordinates (remembering `<rect>` top-left vs `<circle>`/`<text>` center) and `<g>` pivots.
- [Animate self-drawing SVG strokes with `stroke-dasharray`, `stroke-dashoffset`, and `pathLength`](animate-self-drawing-svg-lines-with-dasharray-and-pathlength.md): Measure paths with `getTotalLength()` or normalize with `pathLength`, include `px` units in CSS, and watch round-linecap reverse snap-outs.
- [Use SVG `<mask>` luminance, `<filter>` chains, and instance-scoped `<defs>` IDs safely](use-svg-masks-filters-and-scoped-defs-ids.md): Prefer `<mask>` luminance over binary fill-only `<clipPath>`, apply strokes before masking, budget `<filter>` perf, and scope `<defs>` IDs with `React.useId()`.

## SVG UI Connectors, Corners & Toggles

- [Round inverse (outer) corners with a positioned SVG quarter-circle wedge](round-inverse-corners-with-positioned-svg-wedges.md): Park a `pointer-events: none` quarter-arc wedge on the adjoining edge, driven from the same `--radius` token as the control.
- [Connect moving DOM nodes with responsive SVG Bézier bridges](connect-moving-dom-nodes-with-responsive-svg-bezier-bridges.md): Stretch a unit S-curve with `preserveAspectRatio="none"` + `non-scaling-stroke`, or author on-screen path commands when node order can flip.
- [Build CSS-only sun/moon toggles with SVG masks, polar rays, and reduced-motion snaps](build-css-only-sun-moon-toggles-with-masks-and-polar-rays.md): Drive a masked crescent and polar rays from `:has(input:checked)`, rotate the parent SVG, and snap instantly under `prefers-reduced-motion`.
