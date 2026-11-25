> Full index: [index.md](index.md)

# Persist pre-delay and post-end keyframe states with `animation-fill-mode`

**When to use**: When writing non-infinite `@keyframes` animations, especially entrance animations with `animation-delay` or exit fades.

**Rule**: Set `animation-fill-mode: both` (or `forwards` / `backwards` specifically) on finite keyframe animations that must hold their start or end keyframes. Without `backwards`, an element flashes in its un-animated resting state during `animation-delay`; without `forwards`, it snaps back to its resting styles the instant the animation finishes. Do **not** default every animation to `both`/`forwards`: keyframe declarations are extremely high priority, and a fill mode *persists* that priority after the animation ends, which blocks later CSS or JavaScript from retaking the same properties (an opacity slider, or `el.style.opacity`, will appear to do nothing). Use a fill mode when the held state is intentional; drop the animation or avoid `forwards` when the property needs to be writable again.

**Example**:
```css
@keyframes slide-in {
  from { transform: translateY(24px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
.help-fab {
  animation: slide-in 400ms ease-out both;
  animation-delay: 500ms;
}
```

**Avoid**: Writing `@keyframes fade-out` without `forwards` (or matching base CSS) and having the element pop back into view at the end, or sprinkling `both` on every animation so later JS/CSS can no longer change those properties.

**Source**: [Fill Modes — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/08-animations/04-fill-modes), [Fill Modes — Whimsical Animations](https://courses.joshwcomeau.com/wham/animation-primer/01.01-fill-modes)
