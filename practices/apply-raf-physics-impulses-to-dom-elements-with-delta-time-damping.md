> Full index: [index-animation.md](index-animation.md)

# Apply rAF physics impulses to DOM elements with distance-scaled, `deltaTime`-damped velocity

**When to use**: When a click or burst should fling existing DOM nodes (words, chips, cards) with simple 2D physics, without moving the simulation onto a `<canvas>`.

**Rule**: Store per-element velocity in JS (not in CSS transitions). On impulse, compute a vector from the event point to each element’s center, **normalize** it, and scale speed by distance (or inverse distance) so nearby nodes kick harder than far ones. Integrate on `requestAnimationFrame` using a **capped** `deltaTime` (`Math.min(now - last, 0.25)`) so 120 Hz displays and background-tab jumps don’t explode the motion, and apply friction each frame (`vx *= Math.pow(friction, dt / frame)` or `vx -= vx * drag * dt`). Write positions through `transform: translate()` (or direct `left`/`top` only if you already work in document coordinates). Cancel the loop when every velocity is near zero. Honor `prefers-reduced-motion` by skipping the fling or snapping to a reduced effect.

**Example**:
```js
function kick(nodes, origin) {
  for (const node of nodes) {
    const r = node.getBoundingClientRect();
    const dx = r.left + r.width / 2 - origin.x;
    const dy = r.top + r.height / 2 - origin.y;
    const dist = Math.hypot(dx, dy) || 1;
    node.vx = (dx / dist) * (180 / dist);
    node.vy = (dy / dist) * (180 / dist);
  }
}
// in the rAF loop:
const dt = Math.min((now - last) / 1000, 0.25);
el.vx *= Math.pow(0.92, dt * 60);
el.x += el.vx * dt;
```

**Avoid**: Stepping physics once per frame without `deltaTime` (motion changes with refresh rate), applying a raw unnormalized delta that punishes far-away nodes inconsistently, or leaving the rAF loop running after everything has settled.

**Source**: [Exploding Clicks — Whimsical Animations](https://courses.joshwcomeau.com/wham/animation-challenges/09-exploding-clicks), [Drive Canvas animation loops with capped `deltaTime`, sub-pixel floats, and `save()`/`restore()` transforms](drive-canvas-loops-with-capped-delta-time-and-transforms.md)
