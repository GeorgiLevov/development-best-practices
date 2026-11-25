> Full index: [index-animation.md](index-animation.md)

# Clean up ephemeral particles with batched/debounced timeouts, skip premature DOM pooling, and avoid Firefox-only profiling

**When to use**: When spawning and removing short-lived DOM particles in vanilla JS or React, or benchmarking particle frame rates.

**Rule**: Clean up finished particle DOM nodes with a **single batched timeout** (`MAX_PARTICLE_AGE + 200ms`)—or in React, a debounced `useEffect` cleanup timeout (`window.clearTimeout(id)` on re-trigger) that merges rapid clicks and clears `particles` only after the last burst finishes. Prefer timeouts over per-particle `animationend` listeners: `animationend` registers N parallel listeners and fires prematurely whenever a particle runs multiple stacked keyframes (`twinkle`, `fade`, `disperse`). Do **not** build DOM object pools for typical UI bursts (~20–100 nodes): Chrome's generational GC (Orinoco) collects ephemeral DOM nodes cleanly with no frame drop, whereas object pooling adds detached-node leaks and stale CSS state; switch to `<canvas>` (`canvas-confetti` pattern) only when rendering hundreds/thousands of simultaneous particles (keeping Lighthouse DOM size healthy). Never benchmark animation smoothness solely in Firefox—its WebRender engine outperforms Chrome/Safari on non-composited animations and hides real-user jank.

**Example**:
```js
// React debounced burst cleanup: resets timer if user clicks again mid-burst
React.useEffect(() => {
  const timeoutId = window.setTimeout(() => setParticles([]), MAX_PARTICLE_AGE + 200);
  return () => window.clearTimeout(timeoutId);
}, [isLiked, particles.length]);
```

**Avoid**: Relying on `animationend` on multi-animation particles, building complex DOM node recycling pools before profiling proves GC jank, or treating Firefox frame rates as representative of low-end Android Chrome/Safari.

**Source**: [Particle Cleanup — Whimsical Animations](https://courses.joshwcomeau.com/wham/01-particles/01.01-cleanup), [Evaluating Performance — Whimsical Animations](https://courses.joshwcomeau.com/wham/01-particles/08-evaluating-performance), [Object Pooling — Whimsical Animations](https://courses.joshwcomeau.com/wham/01-particles/08.01-object-pooling), [Particles in React — Whimsical Animations](https://courses.joshwcomeau.com/wham/01-particles/13.01-particles-in-react), [Optimize DOM Size — Lighthouse Docs](https://developer.chrome.com/docs/lighthouse/performance/dom-size)
