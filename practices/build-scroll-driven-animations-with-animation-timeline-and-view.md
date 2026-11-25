> Full index: [index-animation.md](index-animation.md)

# Build scroll-driven animations and parallax with CSS `animation-timeline`, `view()`, and `scroll()`

**When to use**: When scrubbing progress bars, reveal stages, text staggers, or layered parallax directly with scroll position rather than time.

**Rule**: Prefer native CSS scroll-driven animations (`animation-timeline: scroll()` for container/page scroll progress and `view()` for an element's viewport intersection progress) paired with `linear` timing so motion tracks scroll 1:1 (~85% browser support; Firefox still lags without flags, and `@flackr/scroll-timeline` requires direct submodule imports and handles only simple cases). Use `scroll(root block)` when an element inside an inner scroll container should still track the page viewport. Tune `view()` phases with `animation-range-start` / `animation-range-end` (or `animation-range: cover 10% cover 90%`) and `animation-fill-mode: backwards` (or `both`) so initial keyframes apply before entry; note inline spans inherit their block parent's view timeline unless given `display: inline-block`, and per-item staggers can pair `animation-range` offsets (or CSS `sibling-index()` where supported). For multi-layer parallax, bind layer offsets to a `--from` custom property over the same scroll range, gate spatial scroll animations inside `@media (prefers-reduced-motion: no-preference)`, and keep decorative layers `alt=""`.

**Example**:
```css
@media (prefers-reduced-motion: no-preference) {
  .reveal-card {
    animation: slide-in linear both;
    animation-timeline: view();
    animation-range-start: entry 0%;
    animation-range-end: cover 45%;
  }
  .global-progress {
    animation: grow-x linear both;
    animation-timeline: scroll(root block);
  }
}
```

**Avoid**: Scrubbing layouts with main-thread `scroll` listeners when CSS `animation-timeline` suffices, forgetting `animation-fill-mode: backwards` on `view()` entries, or running spatial parallax without a reduced-motion guard.

**Source**: [Scroll Animations — Whimsical Animations](https://courses.joshwcomeau.com/wham/03-advanced-interactions/05-scroll-animations), [Animation Timelines — Whimsical Animations](https://courses.joshwcomeau.com/wham/03-advanced-interactions/05.01-animation-timeline), [Animation Timeline Exercises — Whimsical Animations](https://courses.joshwcomeau.com/wham/03-advanced-interactions/05.02-animation-timeline-exercises), [Parallax Scrolling — Whimsical Animations](https://courses.joshwcomeau.com/wham/03-advanced-interactions/05.05-parallax)
