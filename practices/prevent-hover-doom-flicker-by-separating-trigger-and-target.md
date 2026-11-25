> Full index: [index.md](index.md)

# Prevent hover "doom flicker" by separating trigger and animated target

**When to use**: When hover/focus animations shift, scale down, or tilt an interactive card or button near its boundary.

**Rule**: Never transform the same outer element that matches `:hover` when motion can move its hit-box away from the cursor and cause rapid hover/unhover flickering. Keep `:hover` / `:focus` on a stationary outer wrapper (`<button>`, `<a>`, or card shell) and apply the `transform` transition to an inner child element.

**Example**:
```css
.card-link {
  display: block;
}
.card-link .card-surface {
  transition: transform 250ms ease-out;
}
.card-link:hover .card-surface,
.card-link:focus-visible .card-surface {
  transform: translateY(-8px);
}
```

**Avoid**: Putting `transform: translateY(-10px)` or `rotateX(-35deg)` directly on `.btn:hover` where cursor edges slip off the moved hitbox every frame.

**Source**: [CSS Transitions: Doom Flicker — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/08-animations/02-transitions), [3D Gotchas — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/08-animations/15-gotchas)
