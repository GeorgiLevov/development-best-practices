> Full index: [index.md](index.md)

# Animation Craft, Particles & Procedural Motion

> Sub-index of the Development Best Practices collection. Open only the files that match the task.

## Keyframes, Geometry & Interpolation

- [Compose partial `@keyframes`, utility fade presets, and CSS-variable-driven keyframes](compose-partial-keyframes-and-css-variable-keyframes.md): Omit `from`/`to` for dynamic resting values, place partial keyframes last when stacking, and parameterize `@keyframes` with CSS custom properties.
- [Position and contain particles symmetrically using self-relative `translate()` offsets](contain-positioned-elements-symmetrically-with-matching-translates.md): Center anchors via `translate(-50%, -50%)` or pair `--top`/`--left` with matching negative `translate()` percentages for size-agnostic containment.
- [Disperse particles radially using polar coordinates, CSS trig, and jittered angular sectors](disperse-particles-using-polar-coordinates-and-css-trig.md): Compute radial bursts in polar `(angle, distance)` using CSS `cos()`/`sin()`, stratify angles with `normalize()` + jitter, and layer rings cleanly.
- [Scale procedural animation parameters cleanly with `normalize()`, `clamp()`, and exponential curves](normalize-and-interpolate-animation-values-linearly-or-exponentially.md): Couple duration/delay/distance with `normalize()`/`clampedNormalize()`/`exponentialNormalize()`, and map circular `360deg` angles over `[0, count]`.

## Performance, Juice, Color & Motion Accessibility

- [Clean up ephemeral particles with batched/debounced timeouts, skip premature DOM pooling, and avoid Firefox-only profiling](cleanup-ephemeral-particles-with-debounced-timeouts-over-animationend.md): Prefer batched/debounced cleanup timeouts over `animationend`, rely on modern GC instead of DOM pools for <100 nodes (Canvas beyond hundreds), and don't benchmark perf only in Firefox WebRender.
- [Craft custom `cubic-bezier()` curves, bespoke procedural "juice", and frame-by-frame timing polish](shape-custom-cubic-bezier-curves-and-design-organic-juice.md): Use bespoke fast-out `cubic-bezier()` curves and layered accessories over generic `npm install` confetti, add micro-randomization/spirals, and debug frame-by-frame via recordings.
- [Animate hue shifts cleanly with `hsl()` bases and `filter: hue-rotate()` instead of `background-color`](shift-hue-smoothly-via-css-filter-hue-rotate-and-hsl.md): Rotate hues via GPU-composited `filter: hue-rotate()` on lighter `hsl()` bases to avoid RGB dead zones, stalled `0→360deg` transitions, and per-frame paint cost.
- [Pair reduced-motion guards with non-spatial feedback, loop pause toggles, and optional opt-in controls](design-reduced-motion-alternatives-and-explicit-opt-in-controls.md): Keep non-spatial state feedback active when skipping particle motion, add pause buttons on continuous loops, and offer per-page opt-in overrides on motion-core demos.
