> Full index: [index-animation.md](index-animation.md)

# Scale procedural animation parameters cleanly with `normalize()`, `clamp()`, and exponential curves

**When to use**: Whenever mapping particle index, travel distance, pointer position, or scroll progress onto durations, delays, scales, or angles.

**Rule**: Keep a small pure math utility belt (`clamp`, `normalize`, `clampedNormalize`, `exponentialNormalize`) instead of hand-deriving ad-hoc scale formulas. Use `normalize(val, inMin, inMax, outMin, outMax)` to couple physical traits—for example, giving farther-flying particles (`distance`) proportionally longer `--fade-duration`, `--fade-delay`, and `--pop-duration` before adding small jitter. Use `exponentialNormalize(..., exponent)` when you want subtle low-end response and dramatic high-end falloff. Watch the **circular-angle off-by-one nuance**: map `index` across `[0, count]` (`normalize(index, 0, NUM_OF_PARTICLES, 0, 360)`), not `[0, count - 1]`, so the last particle doesn't collide with `0deg`/`360deg`.

**Example**:
```js
export const clamp = (val, min = 0, max = 1) =>
  Math.max(min, Math.min(max, val));

export const normalize = (val, inMin, inMax, outMin = 0, outMax = 1) => {
  const t = (val - inMin) / (inMax - inMin);
  return outMin + (outMax - outMin) * t;
};

// Coupled particle timing: farther particles stay visible longer
const fadeDuration =
  normalize(distance, MIN_D, MAX_D, MIN_FADE, MAX_FADE) + random(-200, 200);
```

**Avoid**: Leaving `normalize` unclamped when inputs can overshoot bounds (use `clampedNormalize`), or mapping `index` onto `count - 1` when dividing a full `360deg` circle.

**Source**: [Linear Interpolation — Whimsical Animations](https://courses.joshwcomeau.com/wham/01-particles/10-linear-interpolation), [Utility Functions — Whimsical Animations](https://courses.joshwcomeau.com/wham/01-particles/10.02-lerp-utils), [Lodash `clamp`](https://lodash.com/docs/4.17.15#clamp)
