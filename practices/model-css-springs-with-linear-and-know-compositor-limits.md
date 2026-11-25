> Full index: [index-animation.md](index-animation.md)

# Model CSS springs with `linear()`, handle `@property`/Safari limits, and pick JS spring tools intentionally

**When to use**: When choosing between CSS `linear()` springs, `@property`, Motion, React Spring, or GSAP for spring physics and SVG `d` morphs.

**Rule**: Define shared global spring tokens in `html` using `cubic-bezier()` fallbacks upgraded via `@supports (animation-timing-function: linear(0, 1))`, paired with a matching `--spring-*-time` duration and `/* prettier-ignore */` on compact `linear(...)` lists (generated via Linear Easing Generator or Easing Wizard) so UI springs stay cohesive (~92% support). Know `linear()`'s two limits: it is time-based (cannot model zero-friction infinite springs) and CSS's *reversing shortening factor* compresses oscillations on mid-flight interrupts—reach for React Spring (`~19.2kB` gzip) when velocity-preserving interrupts are central, or Motion (`~30.6kB` gzip, WAAPI-backed off-main-thread, lazy-loaded when niche) for layout FLIP and cross-browser SVG `d` morphing (Safari lacks CSS `d` transitions). Remember registered `@property` custom properties still trigger per-frame style invalidation/repaints (never compositor-only), and `requestAnimationFrame`/GSAP can drift out of sync with CSS cleanup timers when main-thread frames drop.

**Example**:
```css
html {
  --spring-snappy: cubic-bezier(0.2, 0.9, 0.3, 1.15);
  --spring-snappy-time: 420ms;
}
@supports (animation-timing-function: linear(0, 1)) {
  html {
    /* prettier-ignore */
    --spring-snappy: linear(0, 0.08 4%, 0.62 18%, 1.09 36%, 0.98 62%, 1);
    --spring-snappy-time: 650ms;
  }
}
```

**Avoid**: Assuming `@property` animations run on the GPU compositor thread, using CSS transitions on SVG `d` without checking Safari support, or authoring one-off uncoordinated `linear()` strings per component.

**Source**: [CSS vs. JS — Whimsical Animations](https://courses.joshwcomeau.com/wham/02-svg/05-css-vs-js), [`linear()` Function — Whimsical Animations](https://courses.joshwcomeau.com/wham/02-svg/08.02-linear), [Limitations — Whimsical Animations](https://courses.joshwcomeau.com/wham/02-svg/08.03-linear-limitations), [My Favourite Pattern — Whimsical Animations](https://courses.joshwcomeau.com/wham/02-svg/08.04-favourite-pattern), [Gotcha With Animating Custom Properties — Bramus](https://www.bram.us/2023/02/01/the-gotcha-with-animating-custom-properties/)
