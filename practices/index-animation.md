> Full index: [index.md](index.md)

# Animation Craft, Procedural Motion & Advanced Interactions

> Sub-index of the Development Best Practices collection. Open only the files that match the task.

## Keyframes, Geometry & Interpolation

- [Compose partial `@keyframes`, utility fade presets, and CSS-variable-driven keyframes](compose-partial-keyframes-and-css-variable-keyframes.md): Omit `from`/`to` for dynamic resting values, place partial keyframes last when stacking, and parameterize `@keyframes` with CSS custom properties.
- [Use standalone `translate`, `rotate`, and `scale` when two keyframes must not clobber each other](use-standalone-translate-rotate-scale-for-independent-keyframes.md): Compose independent transform animations with the standalone properties (fixed order scale → rotate → translate; ~95% support), and keep classic `transform` for skew, 3D, or custom operation order.
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

## Pointer Tracking, Scroll & View Transitions

- [Track the cursor safely with stable bounds, throttled rects, and SVG `viewBox` mapping](track-cursor-safely-with-throttled-bounds-and-svg-mapping.md): Measure unmoving outer wrappers (never mutating targets), throttle `.getBoundingClientRect()`, convert `NodeList`s, map coordinates to SVG `viewBox`, and guard reduced motion/touch/focus.
- [Build scroll-driven animations and parallax with CSS `animation-timeline`, `view()`, and `scroll()`](build-scroll-driven-animations-with-animation-timeline-and-view.md): Scrub scroll and parallax natively with `scroll(root block)`/`view()`, tune `animation-range-start/end` + `backwards` fill, and wrap spatial scroll effects in reduced-motion guards.
- [Trigger threshold-based scroll entrances with `IntersectionObserver` and progressive `animation-trigger`](trigger-scroll-animations-with-intersection-observer-and-animation-trigger.md): Use `IntersectionObserver` (`rootMargin`, `threshold`, `unobserve`) for one-shot scroll reveals until CSS `timeline-trigger`/`animation-trigger` lands broadly, keeping reduced-motion content visible.
- [Animate DOM mutations with same-document View Transitions, classes, and interrupt-safe hit targets](animate-dom-changes-with-same-document-view-transitions.md): Feature-detect `startViewTransition`, respect reduced motion, group elements with `view-transition-class`/`match-element`, and disable `:root` capture + `::view-transition` pointer-events so controls stay clickable.
- [Handle View Transition transforms, aspect-ratio shifts, cross-document routes, and React `<ViewTransition>`](handle-view-transition-transforms-cross-document-and-react.md): Avoid `transform` on `::view-transition-group`, fix aspect-ratio warps (`fit-content`, split layers, `overflow: clip`), inline `@view-transition` in `<head>` for MPAs, and integrate React `<ViewTransition>` cleanly.

## Challenge Interactions & Physics

- [Drive interruptible typewriter typography with jittered timeouts and sprite SFX](drive-interruptible-typewriters-with-jittered-timeouts-and-sfx.md): Recurse on `setTimeout` with per-character jitter, cancel on retrigger, fade the caret, and optionally play quiet Howler/`use-sound` sprites.
- [Fan radial action menus from the pointer with keyboard, Escape, and tab-out fallbacks](fan-radial-action-menus-from-the-pointer-with-keyboard-fallbacks.md): Origin fans from `clientX`/`clientY` + `scrollY` (or the control center when `event.detail === 0`), and wire `tabIndex={-1}`, Escape, and tab-out dismissals.
- [Reuse and cap particles across press-and-hold stages](reuse-and-cap-press-held-particle-stages.md): Reuse the same nodes from inhale to explode, cap the live count (e.g. 10–200), and delay the charge indicator so short taps stay clean.
- [Apply rAF physics impulses to DOM elements with distance-scaled, `deltaTime`-damped velocity](apply-raf-physics-impulses-to-dom-elements-with-delta-time-damping.md): Kick existing DOM nodes with a normalized, distance-scaled impulse and a capped `deltaTime` friction loop, without moving the simulation onto a canvas.

