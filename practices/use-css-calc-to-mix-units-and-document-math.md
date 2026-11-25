> Full index: [index.md](index.md)

# Use `calc()` to mix runtime units and show your math

**When to use**: When computing lengths, offsets, or derived angles/colors at runtime in CSS.

**Rule**: Use `calc()` to combine units that cannot be resolved at authoring time (like `100% - 2rem`) and to keep self-documenting arithmetic (`calc(8px * 4)`) instead of opaque magic numbers. Always put spaces around `+` and `-` operators (so `-` isn't parsed as a negative sign) and remember CSS is strongly typed: `+`/`-` require compatible types, and `/` requires a unitless divisor.

**Example**:
```css
.modal-panel {
  width: calc(100% - 32px);
  max-width: calc(40 * 1rem);
}
```

**Avoid**: Writing `calc(100%-32px)` without whitespace or dividing a length by another length (`calc(100vw / 16px)`) where a unitless divisor is required.

**Source**: [Calc — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/05-responsive-css/10-calc), [CSS is a Strongly Typed Language — CSS-Tricks](https://css-tricks.com/css-is-a-strongly-typed-language/), [CSS data types — MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Types)
