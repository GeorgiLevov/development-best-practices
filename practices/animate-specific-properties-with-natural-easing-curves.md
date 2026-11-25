> Full index: [index.md](index.md)

# Transition explicit properties with purposeful easing and `200ms–500ms` durations

**When to use**: When adding CSS `transition` rules to hover states, drawers, modals, or UI feedback.

**Rule**: List explicit properties (e.g., `transition: transform 250ms ease-out, opacity 300ms ease`) instead of `transition: all` (which accidentally animates future style changes). Reserve `linear` for continuous spinners/loops; choose `ease-out` for entrances, `ease-in` for exits off-screen, `ease-in-out` for symmetrical loops, or `ease`/custom `cubic-bezier()`. Keep most transitions between `200ms` and `500ms` so motion feels tangible without slowing repeat users.

**Example**:
```css
.drawer {
  transition: transform 350ms ease-out, opacity 250ms ease-out;
}
.spinner {
  animation: spin 1000ms linear infinite;
}
```

**Avoid**: Writing `transition: all 300ms` or using `linear` easing on UI buttons and modals (which looks robotic), or making frequent daily modal transitions drag past `600ms+`.

**Source**: [CSS Transitions — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/08-animations/02-transitions), [Designing Animations — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/08-animations/09-animation-design)
