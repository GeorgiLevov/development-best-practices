> Full index: [index.md](index.md)

# Opt into motion with `prefers-reduced-motion: no-preference`

**When to use**: Whenever adding CSS or JS motion that moves elements across space, scales aggressively, or staggers reveals.

**Rule**: Start with motion disabled and wrap movement animations inside `@media (prefers-reduced-motion: no-preference)` so users with vestibular or motion sensitivities—and older unsupported browsers—never receive jarring motion by default. Mirror this check in JS/React with `window.matchMedia('(prefers-reduced-motion: no-preference)')` plus a `'change'` event listener (avoiding global `* { transition-duration: 0.01ms !important }` overrides that break JS springs), keep subtle color/opacity cues where helpful, and test with OS/DevTools Reduce Motion enabled.

**Example**:
```css
.drawer { transform: translateX(0); }
@media (prefers-reduced-motion: no-preference) {
  .drawer { transition: transform 300ms ease-out; }
}
```

**Avoid**: Treating reduced-motion as an afterthought or using the `0.01ms !important` wildcard hack alongside spring-physics libraries.

**Source**: [Accessibility — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/08-animations/12-accessibility), [Accessible Animations in React — Josh W. Comeau](https://joshwcomeau.com/react/prefers-reduced-motion/#the-hook), [prefers-reduced-motion — Can I use](https://caniuse.com/?search=prefers-reduced-motion)
