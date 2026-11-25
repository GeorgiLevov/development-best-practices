> Full index: [index-svg.md](index-svg.md)

# Set SVG `transform-origin` accurately using `viewBox` coordinates or `transform-box: fill-box`

**When to use**: When rotating or scaling individual shapes or `<g>` groups inside an `<svg>`.

**Rule**: Unlike HTML elements (whose reference box is `border-box`), SVG child elements default to `transform-box: view-box`, which means `transform-origin: center` (`50% 50%`) pivots around the center of the entire `<svg>` `viewBox` rather than the shape itself. Fix this either by setting `transform-box: fill-box` in CSS so percentage origins (`50% 50%` / `center`) resolve against the shape's own bounding box, or by sharing JS geometry variables for explicit pixel `transform-origin` values in `viewBox` units (always include `px` units in CSS SVG lengths/origins—`<circle>`, `<ellipse>`, and `<text>` position from center, whereas `<rect>` positions from top-left `x + width / 2`). Wrap multi-shape assemblies in a `<g>` group to rotate them around one shared pivot, and verify `fill-box` on complex transforms.

**Example**:
```css
/* Option 1: element-relative pivot via transform-box */
.svg-gear {
  transform-box: fill-box;
  transform-origin: center;
  transform: rotate(45deg);
}
```
```jsx
/* Option 2: explicit viewBox-unit pivot derived from geometry */
<rect x={x} y={y} width={w} height={h}
  style={{ transform: 'rotate(45deg)', transformOrigin: `${x + w / 2}px ${y + h / 2}px` }} />
```

**Avoid**: Writing `transform-origin: center` on an SVG child without `transform-box: fill-box`, or dropping `px` suffixes on CSS SVG transform-origin/stroke values.

**Source**: [Transforms in SVG — Whimsical Animations](https://courses.joshwcomeau.com/wham/02-svg/09-transforms-in-svg), [CSS Transforms 1: `transform-box` — W3C](https://drafts.csswg.org/css-transforms-1/#transform-box)
