> Full index: [index-svg.md](index-svg.md)

# Build CSS-only sun/moon toggles with SVG masks, polar rays, and reduced-motion snaps

**When to use**: When shipping a decorative light/dark toggle that should animate between a sun and a crescent moon without JavaScript animation code.

**Rule**: Wrap an `aria-hidden` SVG and a visually-hidden checkbox label (for example “Toggle light/dark mode”). Drive every visual state from `.toggle:has(input:checked)`. Create the crescent with an SVG luminance `<mask>`: a white full-size rect and a black cutout circle whose `cx`/`cy` slide to stamp the bite. On the parent SVG, rotate (for example `90deg`) and shrink the main circle; because the parent rotates, the cutout can travel on *one* axis (`cy`) and still appear to slide sideways. Place sun rays as polar dots (`--angle: calc(var(--index) * 45deg)` plus `translate(cos(var(--angle)) * distance, sin(...))`). Until `sibling-index()` is broadly supported, set `--index` inline on each ray. Gate spatial transitions behind `@media (prefers-reduced-motion: no-preference)` so reduced-motion users get an instant snap. Asymmetric timing helps: suck rays in quickly when entering dark mode, and stagger a springy outward burst when entering light mode.

**Example**:
```css
.sun-moon-svg {
  transform: rotate(0deg);
}
.toggle:has(input:checked) .sun-moon-svg {
  transform: rotate(90deg);
}
.toggle:has(input:checked) .moon-cutout-circle { cy: -8px; }
@media (prefers-reduced-motion: no-preference) {
  .sun-moon-svg { transition: transform 1200ms var(--smooth); }
}
```

**Avoid**: Animating with JavaScript when `:has()` and SVG presentation attributes can do the work, omitting the accessible name, applying motion transitions without a reduced-motion snap, or assuming `sibling-index()` works in every browser (check [Can I use](https://caniuse.com/wf-sibling-count)).

**Source**: [Sun/Moon Toggle — Whimsical Animations](https://courses.joshwcomeau.com/wham/animation-challenges/06-sun-moon-toggle)
