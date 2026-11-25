> Full index: [index-animation.md](index-animation.md)

# Compose partial `@keyframes`, utility fade presets, and CSS-variable-driven keyframes

**When to use**: When fading elements dynamically from/to unknown resting or hovered values, layering enter animations onto looping ones, or reusing one `@keyframes` rule across elements with different distances.

**Rule**: Omit `from` or `to` in `@keyframes` ("partial keyframes") so the browser interpolates from/to each element's current computed value (e.g., `@keyframes fadeToTransparent { to { opacity: 0; } }`). You can stack a partial keyframe onto a continuous keyframe animation (multiplying opacities cleanly—e.g. `twinkle` + `fadeFromTransparent`), **provided the partial keyframe comes last** in the `animation` list so the full keyframe doesn't overwrite it. Parameterize `@keyframes` with per-element CSS custom properties (`--amount`, `--x`, `--y`, `calc(var(--amount) * -1)`) instead of duplicating near-identical `@keyframes` blocks or animating via JS `setInterval`. Note: while `@starting-style` handles enter/exit interrupts well, `@keyframes` avoids `@starting-style`'s cascade-specificity surprises on resting styles.

**Example**:
```css
@keyframes fadeFromTransparent { from { opacity: 0; } }
@keyframes oscillate {
  from { transform: translateX(calc(var(--amount) * -1)); }
  to   { transform: translateX(var(--amount)); }
}

/* Full keyframe first, partial keyframe last */
.orb {
  animation:
    oscillate 700ms ease-in-out alternate infinite,
    fadeFromTransparent 1200ms;
}
```

**Avoid**: Placing a partial keyframe *before* a full keyframe modifying the same property, hardcoding duplicate `@keyframes` per size/distance, or mutating inline styles in `setInterval` when CSS variables work.

**Source**: [Partial Keyframes — Whimsical Animations](https://courses.joshwcomeau.com/wham/01-particles/03-partial-keyframes), [Dynamic Keyframes — Whimsical Animations](https://courses.joshwcomeau.com/wham/01-particles/06-dynamic-keyframes), [The Big Gotcha With `@starting-style` — Josh W. Comeau](https://www.joshwcomeau.com/css/starting-style/)
