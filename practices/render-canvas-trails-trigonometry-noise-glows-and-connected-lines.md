> Full index: [index-canvas.md](index-canvas.md)

# Render Canvas trails, trig/Simplex motion, multi-canvas glows, and Safari-safe connected dots

**When to use**: When crafting generative Canvas effects, undulating ribbons, fireworks, twinkling particles, hover ripples, or fast cursor trails.

**Rule**: For lightweight motion trails (`06.01`), paint a semi-transparent backdrop (`ctx.fillStyle = 'rgb(13 15 18 / 0.1)'; ctx.fillRect(...)`) instead of `clearRect()`, remembering alpha rounding leaves a faint plateau residue on high-contrast screens (keep a ring buffer of prior positions and clear fully when clean fades or per-shape trails are needed). Generate smooth oscillations, circular orbits, asymmetrical worm-like paths, and particle twinkling (`clamp(Math.sin(totalTime * speed), 0, 1)`) with `Math.sin()`/`Math.cos()`; for organic terrain, waves, evolving 2D fields, and hover ripples, prefer 2D/3D Simplex noise (`simplex2(x, t)` / `simplex3(x, y, t)`—65,536 seeds in `noisejs`) over Perlin noise to avoid axial plateau artifacts. For a pointer ripple, grow a lightness ring through that field and **abort or retract immediately** when the pointer leaves so a new hover does not fight an in-flight fade. To eliminate stroboscopic gaps on fast-moving cursors or firework sparks, stroke `lineCap = 'round'` segments from `(prevX, prevY)` to `(x, y)`, and nudge stationary points by `0.01` (`x + 0.01`) because Safari omits round caps on exact zero-length Canvas lines despite the WHATWG spec. For rich multi-color particle glows, mirror draws onto a second layered `<canvas>` styled with CSS `filter: blur(...)` when 2x draw work fits the frame budget.

**Example**:
```js
// Safari-safe zero-length round-cap dot/streak between previous and current position
ctx.lineCap = 'round';
ctx.lineWidth = radius * 2;
ctx.beginPath();
ctx.moveTo(prev.x, prev.y);
ctx.lineTo(curr.x + 0.01, curr.y);
ctx.stroke();
```

**Avoid**: Leaving zero-length `moveTo`/`lineTo` strokes un-nudged in Safari, using Perlin noise when Simplex noise is available, expecting semi-transparent `fillRect()` trails to decay all the way to pure `#000` on bright displays, or letting an outgoing ripple finish after the pointer has already left (a new hover then fights the old ring).

**Source**: [Trails — Whimsical Animations](https://courses.joshwcomeau.com/wham/04-canvas/06.01-trails), [Sine Motion — Whimsical Animations](https://courses.joshwcomeau.com/wham/04-canvas/06.02-sine-motion), [Noise Algorithms — Whimsical Animations](https://courses.joshwcomeau.com/wham/04-canvas/06.03-simplex-noise), [Connected Dots — Whimsical Animations](https://courses.joshwcomeau.com/wham/04-canvas/06.04-connected-dots), [Firework Extras — Whimsical Animations](https://courses.joshwcomeau.com/wham/04-canvas/09.01-fireworks-extras), [Advanced Canvas Ripple — Whimsical Animations](https://courses.joshwcomeau.com/wham/animation-challenges/11-advanced-canvas-ripple), [tinkersynth](https://github.com/joshwcomeau/tinkersynth), [WHATWG Canvas 2D Spec](https://html.spec.whatwg.org/multipage/canvas.html#2dcontext)
