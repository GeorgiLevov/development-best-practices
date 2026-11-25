> Full index: [index.md](index.md)

# Tailor action-driven transitions and stagger orchestrated sequences

**When to use**: When animating modals, hover/press controls, dropdown menus, or multi-part UI reveals.

**Rule**: Differentiate animations by the *user action* rather than treating opposite transitions identically: use snappy hover-in / gentle hover-out (`:hover` overrides default exit `transition`), crisp `ease-out` enters / faster `ease-in` exits for modals, distinct motion for cancel vs confirm, and brief `transition-delay` on nested menus so diagonal cursor sweeps don't prematurely close them. For multi-part reveals (backdrop -> modal -> close button), stagger delays in a dedicated style helper or chain via `transitionend` so JSX stays clean.

**Example**:
```css
.pushable .front {
  transform: translateY(-4px);
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
}
.pushable:hover .front {
  transform: translateY(-6px);
  transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
}
.pushable:active .front {
  transform: translateY(-2px);
  transition: transform 34ms;
}
```

**Avoid**: Sharing one slow `500ms` duration across both open/close or hover/click/release interactions, or dumping dozens of inline transition ternaries directly inside JSX render markup.

**Source**: [Action-Driven Animation — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/08-animations/10-action-driven-animation), [Orchestration — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/08-animations/11-orchestration), [Meaningful Motion — Tobias Ahlin](https://tobiasahlin.com/blog/meaningful-motion-w-action-driven-animation/), [Building a Magical 3D Button — Josh W. Comeau](https://www.joshwcomeau.com/animation/3d-button/)
