> Full index: [index.md](index.md)

# Control linear gradients with angles, color stops, hints, and hard edges

**When to use**: When building linear gradients, stripes, progress fills, or decorative bands.

**Rule**: Remember the default direction is `180deg` (top to bottom); pass an angle or a `to right`-style keyword first. Place color stops with percentages, use two positions per color (`red 10% 20%`) to create hard-edged bands, and use a bare length between colors as a color hint to move the midpoint of a transition. Gradients are images, so set them on `background-image`/`background`, not `background-color`.

**Example**:
```css
.stripes {
  background-image: linear-gradient(
    90deg,
    deeppink 0% 10%,
    red 10% 20%,
    gold 20% 30%,
    white 30%
  );
}
.fade { background-image: linear-gradient(deeppink, 20%, gold); } /* hint */
```

**Avoid**: Writing `background-color: linear-gradient(...)`, or duplicating every stop by hand when the two-position syntax expresses hard edges directly.

**Source**: [Gradients — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/09-little-big-details/05-gradients), [Linear Gradients — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/09-little-big-details/05.01-linear-gradients)
