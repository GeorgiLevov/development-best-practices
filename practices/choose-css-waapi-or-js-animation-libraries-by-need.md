> Full index: [index.md](index.md)

# Default to CSS/WAAPI and reserve JS animation libraries for springs or FLIP

**When to use**: When deciding between CSS `transition`/`@keyframes`, Web Animations API (`element.animate()`), Motion, React Spring, or GSAP.

**Rule**: Default to native CSS transitions/keyframes (or WAAPI `element.animate()` when dynamic JS values, single-curve multi-step easing, or playback promises are needed) because they run off the JS main thread with zero bundle overhead. Adopt JS animation libraries only when CSS/WAAPI falls short—such as Motion for FLIP layout/cross-component animations, React Spring for interruptible spring physics, or GSAP for complex multi-timeline/SVG choreography—and hide duplicated animated text clones with `aria-hidden="true"`.

**Example**:
```js
elem.animate(
  [{ transform: 'translateY(100%)', opacity: 0 }, { transform: 'translateY(0)', opacity: 1 }],
  { duration: 350, easing: 'ease-out', fill: 'forwards' }
);
```

**Avoid**: Shipping ~20–44kB gzip of JS animation libraries solely for simple hover fades or spinner rotations, or duplicating link labels in animated flip-up markup without `aria-hidden="true"`.

**Source**: [Ecosystem World Tour — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/08-animations/16-ecosystem-world-tour), [Workshop Solution — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/08-animations/18-workshop-solution), [Using the Web Animations API — MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API), [Web Animations API — Can I use](https://caniuse.com/web-animation)
