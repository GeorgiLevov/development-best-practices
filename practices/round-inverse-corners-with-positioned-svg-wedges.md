> Full index: [index-svg.md](index-svg.md)

# Round inverse (outer) corners with a positioned SVG quarter-circle wedge

**When to use**: When a control or card needs an inverted rounded corner — a concave “bite” where a child, tooltip, or badge sits against a parent edge — instead of a normal convex `border-radius`.

**Rule**: Don’t fake an inverse corner with a box-shadow or a hard rectangle. Draw a quarter-circle *wedge* (two radii plus a connecting outer arc, or an equivalent path) in an inline SVG, size it to the shared radius token, and park it on the adjoining edge with `position: absolute` and a negative translate (`translateX(-100%)` for a left-side wedge). Set `pointer-events: none` so the decorative SVG never steals clicks from the control underneath. Drive both the button’s `border-radius` and the wedge from the same `--radius` custom property so the curves stay locked when the token changes.

**Example**:
```html
<button class="pill" style="--radius: 16px;">
  Save
  <svg class="wedge" viewBox="0 0 16 16" aria-hidden="true">
    <path d="M 16,0 A 16,16 0 0 0 0,16 L 16,16 Z" />
  </svg>
</button>
```
```css
.pill { position: relative; border-radius: var(--radius); }
.wedge {
  position: absolute;
  left: 0;
  bottom: 100%;
  width: var(--radius);
  height: var(--radius);
  pointer-events: none;
  transform: translateX(-100%);
}
```

**Avoid**: Leaving the wedge clickable, hard-coding a radius that drifts from the button’s `border-radius`, or stretching a raster image to fill the concave corner.

**Source**: [Outer Corners — Whimsical Animations](https://courses.joshwcomeau.com/wham/animation-challenges/04-outer-corners)
