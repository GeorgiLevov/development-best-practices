> Full index: [index-animation.md](index-animation.md)

# Track the cursor safely with stable bounds, throttled rects, and SVG `viewBox` mapping

**When to use**: When building pointer-tracking eyes, proximity blurs/reveals, magnetic UI elements, or cursor-reactive inline SVGs.

**Rule**: Never mutate the size or position of the same DOM element you measure with `.getBoundingClientRect()` inside a `pointermove` handler—shrinking/shifting a measured target can toggle hover/threshold state at 30+ Hz (an oscillation hazard violating WCAG's 3-flashes threshold); instead measure an unmoving outer wrapper (`.socket`). Remember `DOMRect.x`/`y` alias `left`/`top` for normal DOM elements, compute center distance with `Math.hypot(x - cx, y - cy)` and aiming angle with `Math.atan2(dy, dx)`, and convert `document.querySelectorAll(...)` with `[...nodes]` before `.map()`. Because `.getBoundingClientRect()` costs ~0.02–3 ms per lookup depending on browser caching, throttle box measurements (~`500ms`) rather than calling on every `pointermove` (and in React wrap the throttled listener + cleanup inside a hook such as `useRelativeMousePosition(ref, throttleMs)`). For multi-part creatures, gate activation by distance to the parent center while still aiming each child individually. Inside `<svg>`, map `(clientX - bb.left, clientY - bb.top)` from `[0, bb.width/height]` to `[0, viewBoxWidth/Height]` with `normalize()` (or use `svg.getScreenCTM().inverse()` + `point.matrixTransform()`), and pair progressive pointer reveals with `prefers-reduced-motion`, touch, and `:focus-visible` fallbacks.

**Example**:
```js
const getThrottledBox = throttle(() => socket.getBoundingClientRect(), 500);

window.addEventListener('pointermove', (e) => {
  const bb = getThrottledBox();
  const dx = e.clientX - (bb.left + bb.width / 2);
  const dy = e.clientY - (bb.top + bb.height / 2);
  const distance = Math.hypot(dx, dy);
  ball.style.transform = `scale(${clampedNormalize(distance, 10, 100, 1, 0)})`;
});
```

**Avoid**: Calling unthrottled `.getBoundingClientRect()` on the animated child itself, calling `.map()` directly on a `NodeList`, or hiding hover-revealed content from touch and keyboard users.

**Source**: [Cursor Interactions — Whimsical Animations](https://courses.joshwcomeau.com/wham/03-advanced-interactions/01-cursor-interactions), [Performance Optimizations — Whimsical Animations](https://courses.joshwcomeau.com/wham/03-advanced-interactions/01.02-perf-optimizations), [A React Hook — Whimsical Animations](https://courses.joshwcomeau.com/wham/03-advanced-interactions/01.03-react-hooks), [Multiple Eyes — Whimsical Animations](https://courses.joshwcomeau.com/wham/03-advanced-interactions/02.02-multiple-eyes), [SVG Cursor Mapping — Whimsical Animations](https://courses.joshwcomeau.com/wham/03-advanced-interactions/03-mapping-cursor-to-svg)
