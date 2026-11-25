> Full index: [index.md](index.md)

# Persist pre-delay and post-end keyframe states with `animation-fill-mode`

**When to use**: When writing non-infinite `@keyframes` animations, especially entrance animations with `animation-delay` or exit fades.

**Rule**: Set `animation-fill-mode: both` (or `forwards` / `backwards` specifically) on finite keyframe animations. Without `backwards`, an element flashes in its un-animated resting state during `animation-delay`; without `forwards`, it snaps back to its resting styles the instant the animation finishes.

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

**Avoid**: Writing `@keyframes fade-out` without `forwards` (or matching base CSS) and having the element pop back into view at the end.

**Source**: [Fill Modes — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/08-animations/04-fill-modes)
