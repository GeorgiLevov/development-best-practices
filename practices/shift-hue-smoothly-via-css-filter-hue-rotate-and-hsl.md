> Full index: [index-animation.md](index-animation.md)

# Animate hue shifts cleanly with `hsl()` bases and `filter: hue-rotate()` instead of `background-color`

**When to use**: When animating color transitions across wide hue ranges (e.g., 180°–720° rainbow particle trails) without muddy midpoints or per-frame paint cost.

**Rule**: Never animate `background-color` directly between distant `hsl()` hues (especially `0deg` to `360deg`): browsers convert endpoints to RGB before interpolating, turning opposite hues gray in the middle ("gradient dead zone") and collapsing `0deg → 360deg` to zero change. Instead, pick cohesive pastel/bright `hsl()` base colors (locking saturation and lightness while randomizing hue) and animate `filter: hue-rotate(var(--hue-rotation))`—it rotates smoothly across arbitrary angles (`360deg`, `720deg`) and avoids repainting `background-color` on every frame. Because `hue-rotate()` tends to darken perceived brightness, bias starting `hsl()` lightness slightly higher (~80–85%), and reserve `in hsl` / `in oklch` interpolation syntax (with a plain fallback) for static gradients or `color-mix()`.

**Example**:
```css
@keyframes hueRotate {
  to { filter: hue-rotate(var(--hue-rotation, 360deg)); }
}
.particle {
  background-color: hsl(var(--base-hue) 90% 85%);
  animation: hueRotate 1000ms linear forwards;
}
```

**Avoid**: Animating `background-color: hsl(0deg ...)` to `hsl(360deg ...)` expecting a full rainbow sweep, or repainting `background-color` across dozens of animated particles per frame.

**Source**: [Color Shifting — Whimsical Animations](https://courses.joshwcomeau.com/wham/01-particles/12.03-colors), [What You Need to Know About CSS Color Interpolation — CSS-Tricks](https://css-tricks.com/what-you-need-to-know-about-css-color-interpolation/), [CSS `filter` — MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/filter#syntax)
