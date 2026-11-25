> Full index: [index-animation.md](index-animation.md)

# Craft custom `cubic-bezier()` curves, bespoke procedural "juice", and frame-by-frame timing polish

**When to use**: When upgrading flat standard easings into tactile bursts, layered accessories, and distinctive micro-interactions.

**Rule**: Standardize ~80% of subtle UI transitions on a few global easing tokens, and craft custom `cubic-bezier()` curves (e.g., an exaggerated fast-start/long-tail deceleration like `cubic-bezier(0.2, 0.56, 0, 1)` for particle explosions) for signature hero effects—use CSS `linear()` or spring physics for bounces/overshoots rather than stretched Bézier handles. Add organic "juice" with subtle per-particle variation (size, duration, delay, `rotate()` *before* `translate()` for spirals) and coordinated accessories (expanding background pop circle + delayed springy icon pop), while avoiding generic `npm install` particle presets (like unmodified `canvas-confetti`) or static sprites when live procedural variation fits. Debug fast sub-second animations by recording screen/Chrome Performance screenshots and stepping frame by frame.

**Example**:
```css
/* Spiral dispersion: rotate() before translate() bends radial paths into arcs */
@keyframes disperse {
  to {
    transform:
      rotate(var(--spin, 120deg))
      translate(calc(cos(var(--angle)) * var(--distance)), calc(sin(var(--angle)) * var(--distance)));
  }
}
```

**Avoid**: Shipping unmodified off-the-shelf confetti packages as "delight", slapping `ease-in-out` on explosive entrances (feels sluggish), or guessing why a 300ms animation feels "off" without inspecting individual frames.

**Source**: [Custom Curves — Whimsical Animations](https://courses.joshwcomeau.com/wham/01-particles/05.02-custom-curves), [Juice — Whimsical Animations](https://courses.joshwcomeau.com/wham/01-particles/12-juice), [Tweaking Dynamics — Whimsical Animations](https://courses.joshwcomeau.com/wham/01-particles/12.01-tweaks), [Accessories — Whimsical Animations](https://courses.joshwcomeau.com/wham/01-particles/12.02-accessories), [Sprites on the Web — Josh W. Comeau](https://www.joshwcomeau.com/animation/sprites/)
