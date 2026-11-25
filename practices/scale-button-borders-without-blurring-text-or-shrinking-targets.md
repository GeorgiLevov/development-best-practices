> Full index: [index-animation.md](index-animation.md)

# Scale button borders or visual shells cleanly without blurring text, deforming corners, or shrinking hit targets

**When to use**: When adding tactile expand-on-hover or press-down effects to pill buttons, links, and icon buttons.

**Rule**: Do not apply `transform: scale()` directly to a button element that wraps text—aside from feeling clunky, GPU rasterization handoffs can blur or snap the text at transition end, and shrinking on press/hover contracts the clickable hit area. Instead, keep the `<button>` hit box stationary (`position: relative`) and grow a decorative `::before` pseudo-element border (`inset: 0`) behind the text. When the button has a solid fill or rounded corners where `transform: scale()` would stretch `border-radius` into ellipses and thicken horizontal/vertical borders unevenly, animate `width`/`height` on a centered `::before` layer (or offset inner layer) instead, keeping transitions crisp and consistent across your design system.

**Example**:
```css
.pill-btn {
  position: relative;
}
.pill-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  border: 2px solid currentColor;
  border-radius: inherit;
  transition: transform 250ms ease-out;
  pointer-events: none;
}
.pill-btn:hover::before,
.pill-btn:focus-visible::before {
  transform: scale(1.06);
}
```

**Avoid**: Applying `transform: scale(1.08)` directly on text-bearing buttons or animating `transform: scale(0.95)` on the interactive `<button>` wrapper itself (which shrinks the pointer target).

**Source**: [Button Scaling Trick — Whimsical Animations](https://courses.joshwcomeau.com/wham/animation-design/02.01-button-scaling-trick)
