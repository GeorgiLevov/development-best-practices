> Full index: [index.md](index.md)

# Use CSS color filters and animate `filter` for hover feedback

**When to use**: When dimming, boosting, desaturating, or hue-shifting images, gradients, or buttons, or giving gradient buttons a hover state.

**Rule**: Reach for `filter` functions (`brightness()`, `contrast()`, `grayscale()`, `sepia()`, `hue-rotate()`, `drop-shadow()`) instead of hand-editing assets or hand-written SVG filters; space-separate several functions in one declaration (they apply in order). For hover/focus feedback on gradient or image backgrounds, transition `filter` (e.g., `brightness(110%) hue-rotate(...)`) because `background-color` can't animate gradients and `filter` is GPU-accelerated in some browsers. Pair `:hover` with `:focus-visible`, and use a faster enter / slower exit duration.

**Example**:
```css
.btn {
  background: linear-gradient(to top, hsl(260deg 80% 40%), hsl(260deg 80% 50%));
  transition: filter 600ms;
}
.btn:hover,
.btn:focus-visible {
  filter: brightness(110%) hue-rotate(60deg);
  transition: filter 250ms;
}
.thumbnail--muted {
  filter: contrast(110%) grayscale(50%);
}
```

**Avoid**: Duplicating images or gradients in a second "hover" color, or writing separate `filter` declarations that override each other instead of one space-separated list.

**Source**: [CSS Filters — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/09-little-big-details/01-filters), [Color Manipulation — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/09-little-big-details/01.01-color-manipulation)
