> Full index: [index-animation.md](index-animation.md)

# Choreograph nested `transform-origin` joints, staggered dropdown reveals, and asymmetric spring damping

**When to use**: When animating jointed multi-part icons, dropdown/popover reveals, or elastic hover pull/release interactions.

**Rule**: Simulate articulated physical motion (like a dangling fuse on a rotating bomb) by nesting child elements inside a parent container, pinning each part's `transform-origin` at its joint, and adding an overlapping child `transition-delay` (e.g., `100ms` delay inside a `150ms` boop)—don't wait for `transitionend`, which breaks continuous follow-through. For dropdowns and popovers, stagger child content fade-in by `30%–70%` of the container transition (keeping total duration `<500ms`) so half-opaque text never collides awkwardly over a half-revealed panel; on dismissal, reverse the sequence (child fades first) at `~2x` speed (using View Transitions when conditionally unmounting DOM nodes). For elastic/slingshot feels, vary spring damping asymmetrically—higher damping while pulled/hovered, lower damping on release so it rebounds organically.

**Example**:
```css
.dropdown { opacity: 0; transition: opacity 125ms ease-in 60ms; }
.dropdown .content { opacity: 0; transition: opacity 125ms ease-in; }

.dropdown.is-open { opacity: 1; transition: opacity 250ms ease-out; }
.dropdown.is-open .content { opacity: 1; transition: opacity 250ms ease-out 125ms; }
```

**Avoid**: Fading container and inner content simultaneously (creates a brief chaotic overlap), using symmetric slow enter/exit timings on popovers, or waiting for `transitionend` to start secondary joint motion.

**Source**: [Asymmetrical Animations — Whimsical Animations](https://courses.joshwcomeau.com/wham/animation-design/03.02-asymmetrical-animations), [Action-Driven Animations — Whimsical Animations](https://courses.joshwcomeau.com/wham/animation-design/03.03-action-driven-animations), [Nested Transforms — Whimsical Animations](https://courses.joshwcomeau.com/wham/animation-design/03.04-nested-transforms), [Staggered Animations — Whimsical Animations](https://courses.joshwcomeau.com/wham/animation-design/03.05-staggered-animations)
