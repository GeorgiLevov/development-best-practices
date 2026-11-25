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

## Springs, Interaction Design & Sound Effects

- [Model CSS springs with `linear()`, handle `@property`/Safari limits, and pick JS spring tools intentionally](model-css-springs-with-linear-and-know-compositor-limits.md): Pair `@supports` `linear()` tokens + `/* prettier-ignore */` with `cubic-bezier()` fallbacks, know CSS interrupt/time limits vs React Spring/Motion, and note `@property` repaints.
- [Design animations around clear intent, reserve tangible hovers for interactive controls, and persist onboarding state safely](design-purposeful-animations-and-guard-hover-triggers.md): Categorize motion by purpose, skip purely tangible hovers on non-interactive elements, avoid hover-only essentials, and persist first-visit flags in user DBs over `localStorage`.
- [Scale button borders or visual shells cleanly without blurring text, deforming corners, or shrinking hit targets](scale-button-borders-without-blurring-text-or-shrinking-targets.md): Scale a detached `::before` layer (or animate centered `width`/`height` for solid fills/radii) instead of scaling text-bearing buttons or shrinking hit targets.
- [Build self-resetting "boop" nudges and subtle icon squash-and-stretch micro-interactions](build-ephemeral-boop-microinteractions-and-squash-stretch.md): Reset playful icon nudges after `~150ms` (`boop`), apply subtle volume-conserving squash-and-stretch, and use Motion for Safari-safe SVG `d` morphs.
- [Choreograph nested `transform-origin` joints, staggered dropdown reveals, and asymmetric spring damping](choreograph-nested-transform-joints-staggers-and-asymmetric-springs.md): Layer parent/child joint pivots with overlapping delays, stagger popovers `30%–70%` (`<500ms`) reversed at `~2x` on exit, and lower damping on release.
- [Add subtle UI sound effects with audio sprites, `use-sound`/Howler, and explicit mute controls](add-tasteful-ui-sound-effects-with-sprites-and-mute-controls.md): Keep UI SFX `<1s`, quiet (`~0.25`), gesture-triggered, preloaded, varied via audio sprites or `playbackRate`, and gated by an explicit UI mute control.
