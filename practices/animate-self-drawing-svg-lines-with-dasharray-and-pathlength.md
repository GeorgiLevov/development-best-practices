> Full index: [index-svg.md](index-svg.md)

# Animate self-drawing SVG strokes with `stroke-dasharray`, `stroke-dashoffset`, and `pathLength`

**When to use**: When animating signatures, line-art icons, progress arcs, or borders that draw and erase themselves along a `<path>`.

**Rule**: Set `stroke-dasharray` equal to the path length (creating one solid dash followed by an equal gap) and transition or animate `stroke-dashoffset` from `length` down to `0` so the line draws smoothly along its trajectory. Measure exact lengths with `path.getTotalLength()`, or set `pathLength="1"` (or `"100"`) on the SVG element to normalize any path onto a uniform virtual coordinate scale—great for synchronizing multi-path icons with shared CSS keyframes, though unnormalized lengths are better when animation speed should stay proportional to physical length. Include `px` units in CSS `stroke-dashoffset` values, test reverse animations when using `stroke-linecap="round"` (collapsed dashes blink out as a dot at `0`, which an SVG `<mask>` avoids by sliding off smoothly), and verify `0 L` → `L 0` edge quirks across browsers.

**Example**:
```css
.draw-path {
  stroke-dasharray: 1;
  stroke-dashoffset: 1;
  animation: draw-line 800ms ease-out forwards;
}
@keyframes draw-line {
  to { stroke-dashoffset: 0; }
}
```
```html
<path pathLength="1" class="draw-path" d="M 10,80 Q 60,10 110,80" />
```

**Avoid**: Guessing arbitrary large `stroke-dasharray` values (which skew timing curves with invisible dead frames) or assuming `pathLength="1"` preserves constant pixel-per-second speeds across unequal paths.

**Source**: [Self-Drawing Lines — Whimsical Animations](https://courses.joshwcomeau.com/wham/02-svg/07-self-drawing), [Self-Drawing Exercises — Whimsical Animations](https://courses.joshwcomeau.com/wham/02-svg/07.01-self-drawing-exercises), [How SVG Line Animation Works — CSS-Tricks](https://css-tricks.com/svg-line-animation-works/)
