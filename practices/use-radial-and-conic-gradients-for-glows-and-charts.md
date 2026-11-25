> Full index: [index.md](index.md)

# Use radial and conic gradients for glows, spotlights, and pie charts

**When to use**: When creating sunsets, spotlights, edge glows, pie charts, or metallic effects.

**Rule**: Lock radial gradients to circles with `circle at <x> <y>` and shape them with stop percentages (ellipse sizing gets complicated fast). Conic gradients take `from <angle> at <position>`: end on the start color for a seamless sweep, use adjacent stops (`gold 33.3% 66.7%`) for pie charts, and push the center to an edge (`from 90deg at 50% 100%`) for edge glows. Conic gradients are ~97% supported; keep them decorative or provide a flat fallback.

**Example**:
```css
.sunset {
  background-image: radial-gradient(circle at 50% 100%, white 0%, yellow 10%, gold 20%, coral 30%, skyblue);
}
.pie {
  border-radius: 50%;
  background-image: conic-gradient(deeppink 0% 33.3%, gold 33.3% 66.7%, slateblue 66.7% 100%);
}
.glow {
  background-image: conic-gradient(from 90deg at 50% 100%,
    hsl(220deg 80% 55%) 50%, hsl(220deg 100% 85%) 75%, hsl(220deg 80% 55%) 100%);
}
```

**Avoid**: Leaving a harsh seam where a conic gradient's first and last colors differ, or using an image asset for simple pie charts and glows.

**Source**: [Radial Gradients — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/09-little-big-details/05.02-radial-gradients), [Conic Gradients — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/09-little-big-details/05.03-conic-gradients), [radial-gradient() — MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/radial-gradient%28%29), [CSS Conical Gradients — Can I use](https://caniuse.com/css-conic-gradients)
