> Full index: [index.md](index.md)

# Choose `box-shadow`, `filter: drop-shadow()`, or `text-shadow` by need

**When to use**: When adding a shadow to a card, an irregular shape, a transparent image, a group of elements, or text.

**Rule**: Use `box-shadow` for rectangular box-model shadows and when you need its exclusive features (spread radius, `inset`, multiple layers). Use `filter: drop-shadow()` when the shadow must contour the actual painted shape (transparent PNG/SVG, tooltips with tips, overflowing children), or apply it to a shared parent so tightly-packed siblings cast one merged shadow without overlap. Use `text-shadow` for typography, especially to lift light text off light/busy backgrounds. Always use semi-transparent colors, and test `drop-shadow` in Safari, which occasionally glitches.

**Example**:
```css
.card { box-shadow: 2px 4px 8px hsl(0deg 0% 0% / 0.25); }
.tooltip { filter: drop-shadow(0 0 8px hsl(0deg 0% 0% / 0.4)); } /* includes the arrow */
.tile-grid { filter: drop-shadow(2px 4px 16px hsl(0deg 0% 0% / 0.3)); } /* on the parent */
.hero-title { text-shadow: 0 1px 4px hsl(0deg 0% 0% / 0.5); }
```

**Avoid**: Solid black shadows, `box-shadow` on clipped or transparent shapes (it stays rectangular), or putting separate shadows on adjacent grid items that overlap their neighbours.

**Source**: [Shadows — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/09-little-big-details/03-shadows), [Contoured Shadows — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/09-little-big-details/03.01-contoured-shadows)
