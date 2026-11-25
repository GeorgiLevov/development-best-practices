> Full index: [index-animation.md](index-animation.md)

# Trigger threshold-based scroll entrances with `IntersectionObserver` and progressive `animation-trigger`

**When to use**: When a time-based animation should play to completion once a user scrolls past a point (such as a mascot, toast, or section reveal) instead of pausing mid-scroll.

**Rule**: Choose scroll-*triggered* animations over scroll-*driven* ones whenever an element has multi-step choreography that would look broken if a user stopped scrolling halfway through. Until CSS Scroll-Triggered Animations (`timeline-trigger: --t view() contain / cover`, `trigger-scope: --t`, and `animation-trigger: --t play-forwards play-backwards`, introduced in Chrome 145 / CSSWG Animations 2) reach broad browser support, implement triggers with `IntersectionObserver`: configure `threshold` and negative `rootMargin` (e.g. `'-32px'`) so triggers don't fire on edge pixels, call `observer.unobserve(entry.target)` for one-shot reveals, disconnect in cleanup, and pass `root: document` only when observing inside an iframe that must measure the iframe viewport. Gate triggered motion behind `prefers-reduced-motion`, keeping elements visible (`opacity: 1`) without spatial travel when reduced motion is preferred.

**Example**:
```js
const prefersReduced = !window.matchMedia('(prefers-reduced-motion: no-preference)').matches;
if (prefersReduced) {
  el.classList.add('visible');
} else {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add('visible');
        observer.unobserve(el);
      }
    },
    { threshold: 0.5, rootMargin: '-32px' }
  );
  observer.observe(el);
}
```

**Avoid**: Leaving elements stuck at `opacity: 0` when `prefers-reduced-motion: reduce` is active, forgetting `observer.disconnect()`, or relying solely on `animation-trigger` without an `IntersectionObserver` fallback.

**Source**: [Scroll Triggered Animations — Whimsical Animations](https://courses.joshwcomeau.com/wham/03-advanced-interactions/05.04-scroll-triggered-animations), [Scroll-triggered animations — Chrome for Developers](https://developer.chrome.com/blog/scroll-triggered-animations), [CSS Animations Level 2 — W3C](https://www.w3.org/TR/css-animations-2/#animation-timeline)
