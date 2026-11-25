> Full index: [index-svg.md](index-svg.md)

# Connect moving DOM nodes with responsive SVG Bézier bridges

**When to use**: When two (or more) positioned elements need a decorative connector that stays attached as layout, order, or viewport size changes.

**Rule**: Two solid approaches: (1) Stretch a unit SVG (`viewBox="0 0 100 100"` with a static S-curve `C` path) between the nodes, set `preserveAspectRatio="none"` and `overflow: visible`, and keep stroke weight honest with `vector-effect: non-scaling-stroke` plus a dashed `stroke-dasharray`. Shape the curve so it *straightens* when the nodes line up horizontally (control points collapse toward the chord). Size and place the `<svg>` from `getBoundingClientRect()` so its box spans the two anchors. (2) When node order can flip (top item on the right, bottom on the left), prefer a JS-authored path in *on-screen* coordinates and skip `viewBox` stretching entirely — you avoid `vector-effect` and the path stays correct in both orientations. Re-run the measurement after layout (and on resize).

**Example**:
```js
function connect(a, b, svg, path) {
  const ra = a.getBoundingClientRect();
  const rb = b.getBoundingClientRect();
  const parent = svg.parentElement.getBoundingClientRect();
  const x1 = ra.left + ra.width / 2 - parent.left;
  const y1 = ra.bottom - parent.top;
  const x2 = rb.left + rb.width / 2 - parent.left;
  const y2 = rb.top - parent.top;
  // On-screen cubic; mid control points collapse toward a line when x1 ≈ x2
  const midY = (y1 + y2) / 2;
  path.setAttribute('d', `M ${x1},${y1} C ${x1},${midY} ${x2},${midY} ${x2},${y2}`);
}
```

**Avoid**: Stretching a dashed stroke without `non-scaling-stroke` (or the JS-coordinate alternative), measuring against the viewport without subtracting the SVG parent’s offset, or assuming a left-to-right `viewBox` stretch still works after the nodes swap sides.

**Source**: [Connected Paths — Whimsical Animations](https://courses.joshwcomeau.com/wham/animation-challenges/08-connected-paths), [Decouple SVG `viewBox` coordinates from display size with `preserveAspectRatio` and `non-scaling-stroke`](scale-svg-viewbox-preserve-aspect-ratio-and-non-scaling-strokes.md)
