> Full index: [index-animation.md](index-animation.md)

# Disperse particles radially using polar coordinates, CSS trig, and jittered angular sectors

**When to use**: When emitting particles outward from an origin (bursts, fireworks, radial menus) without square-box distribution artifacts or clumping.

**Rule**: Model radial bursts in **polar coordinates (`angle`, `distance`)** rather than random Cartesian `(x, y)` pairs—random `(x, y)` creates unnatural square corners and dead-zone overlaps around the center, whereas polar coordinates produce clean circular/donut rings (`minDistance` to `maxDistance`). Convert polar to Cartesian directly in CSS with `cos(var(--angle))` and `sin(var(--angle))` (passing `--angle` in `deg` and `--distance` in `px`) or in JS using radians (`angle * Math.PI / 180`). Avoid purely random `0–360deg` angles on small bursts (20 particles clump ~30%+ of the time); instead, distribute angles evenly across sectors (`normalize(index, 0, count, 0, 360)`) plus bounded jitter (`random(-40, 40)`), and optionally alternate parity (`index % 2 === 0`) for layered inner/outer rings.

**Example**:
```css
@keyframes disperse {
  to {
    transform: translate(
      calc(cos(var(--angle)) * var(--distance)),
      calc(sin(var(--angle)) * var(--distance))
    );
  }
}
```

**Avoid**: Using `random(-max, max)` independently on X and Y for radial bursts (creates square silhouettes), passing degrees directly to JS `Math.cos`/`Math.sin` without converting to radians, or leaving angles unstratified.

**Source**: [Polar Coordinates — Whimsical Animations](https://courses.joshwcomeau.com/wham/01-particles/07-polar-coordinates), [Particle Distribution — Whimsical Animations](https://courses.joshwcomeau.com/wham/01-particles/09-particle-distribution), [Understanding the Modulo Operator — Josh W. Comeau](https://www.joshwcomeau.com/javascript/modulo-operator/)
