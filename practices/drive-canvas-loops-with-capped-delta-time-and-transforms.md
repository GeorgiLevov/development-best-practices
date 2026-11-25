> Full index: [index-canvas.md](index-canvas.md)

# Drive Canvas animation loops with capped `deltaTime`, sub-pixel floats, and `save()`/`restore()` transforms

**When to use**: When animating physics, particle emitters, or rotating sprites inside a `requestAnimationFrame` Canvas loop.

**Rule**: Express velocities in units per *second* and advance state with `deltaTime = Math.min(now - lastTimestamp, 250) / 1000` so motion stays consistent across 60 Hz and 120 Hz displays and never teleports when browsers pause or throttle `requestAnimationFrame` in background tabs or cross-origin iframes (noting Safari also throttles rAF in cross-origin iframes). Do **not** round coordinates to integers—2D Canvas performs sub-pixel anti-aliasing natively, so floating-point positions animate more smoothly at low speeds. Accumulate `deltaTime` (a particle accumulator) rather than calling `setInterval` to emit particles evenly, apply exponential-style air resistance safely (`velocity *= Math.max(0, 1 - drag * deltaTime)`), and prune dead particles by age/bounds instead of leaking arrays. To rotate or scale individual shapes around their own centers, wrap each draw in `ctx.save()`, `ctx.translate(x, y)`, `ctx.rotate(angle)`, draw centered at `(-w / 2, -h / 2)`, and `ctx.restore()`. Gate continuous Canvas motion behind `prefers-reduced-motion` (hoisting the `matchMedia` check out of ultra-hot loops if needed), rendering a calm static frame instead.

**Example**:
```js
let lastTimestamp = performance.now();

function draw(now = performance.now()) {
  const deltaTime = Math.min(now - lastTimestamp, 250) / 1000;
  lastTimestamp = now;
  ctx.clearRect(0, 0, canvasDimensions.width, canvasDimensions.height);

  for (const p of particles) {
    p.yVelocity += GRAVITY * deltaTime;
    p.x += p.xVelocity * deltaTime;
    p.y += p.yVelocity * deltaTime;
    p.rotation += p.angularVelocity * deltaTime;

    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rotation);
    ctx.drawImage(p.sprite, -p.w / 2, -p.h / 2, p.w, p.h);
    ctx.restore();
  }
  requestAnimationFrame(draw);
}
```

**Avoid**: Hardcoding per-frame pixel increments, leaving `deltaTime` uncapped after tab switches, calling `Math.round()` on particle coordinates, or forgetting `ctx.restore()` after `translate`/`rotate`.

**Source**: [Canvas Animation — Whimsical Animations](https://courses.joshwcomeau.com/wham/04-canvas/02-canvas-animation), [Delta Time — Whimsical Animations](https://courses.joshwcomeau.com/wham/04-canvas/02.03-delta-time), [Rocketship, Revisited — Whimsical Animations](https://courses.joshwcomeau.com/wham/04-canvas/04-rocketship), [Transforms — Whimsical Animations](https://courses.joshwcomeau.com/wham/04-canvas/05-transforms), [When Browsers Throttle requestAnimationFrame — Motion](https://motion.dev/magazine/when-browsers-throttle-requestanimationframe)
