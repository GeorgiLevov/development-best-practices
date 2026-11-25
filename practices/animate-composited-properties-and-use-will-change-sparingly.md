> Full index: [index.md](index.md)

# Animate composited properties and apply `will-change` intentionally

**When to use**: When building 60fps UI animations or debugging frame jank and CPU/GPU snap artifacts.

**Rule**: Aim for ~16ms frames (60fps) by animating GPU-composited properties (`transform`, `opacity`, and modern `filter`) instead of layout- or paint-triggering properties (`width`, `height`, `margin`, `padding`, `border`, `box-shadow`). Add `will-change: transform` (or `translateZ(0)` fallback) selectively on elements you actively animate to eliminate CPU-to-GPU handoff flicker and unlock sub-pixel motion, without applying `will-change` broadly (which wastes mobile GPU memory), and verify smoothness on low-end smartphones.

**Example**:
```css
.card-surface {
  will-change: transform;
  transition: transform 250ms ease-out;
}
.card:hover .card-surface {
  transform: translateY(-6px);
}
```

**Avoid**: Animating `margin-top`, `top`/`left`, or `box-shadow` in tight loops, or putting `* { will-change: transform; }` in global CSS.

**Source**: [Animation Performance — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/08-animations/08-animation-performance), [Hardware-accelerated animations — Chrome for Developers](https://developer.chrome.com/blog/hardware-accelerated-animations/)
