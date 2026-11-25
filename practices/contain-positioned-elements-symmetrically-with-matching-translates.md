> Full index: [index-animation.md](index-animation.md)

# Position and contain particles symmetrically using self-relative `translate()` offsets

**When to use**: When positioning particles or badges with percentage `top`/`left` values inside a box—either centered on coordinates or strictly contained inside edges without knowing element dimensions.

**Rule**: Remember that `top`/`left` percentages measure the **containing block** while `transform: translate()` percentages measure the **element itself**. To anchor any variable-sized particle around its center (e.g., `50%, 50%` truly centered, allowing edge spillover for starfields), pair `top`/`left` with `transform: translate(-50%, -50%)`. When you instead need **strict containment** (`0%` flush inside top/left, `100%` flush inside bottom/right) without hardcoding half-size wrapper `inset`s, drive both `top`/`left` and negative `translate()` from the same CSS percentage variables (`--top`, `--left`): `translate(calc(var(--left) * -1), calc(var(--top) * -1))`.

**Example**:
```css
.contained-particle {
  position: absolute;
  top: var(--top);   /* 0%..100% of container */
  left: var(--left); /* 0%..100% of container */
  transform: translate(
    calc(var(--left) * -1), /* 0% at left edge, -100% at right edge */
    calc(var(--top) * -1)
  );
  pointer-events: none;
}
```

**Avoid**: Positioning particles with bare `top`/`left` percentages (which bias toward the bottom-right by one element size) or fixed `inset` wrappers that break whenever particle sizes vary.

**Source**: [Containment Strategies — Whimsical Animations](https://courses.joshwcomeau.com/wham/01-particles/02-containment-strategies), [Centering With Positioned Layout — Josh W. Comeau](https://www.joshwcomeau.com/css/center-a-div/#centering-with-positioned-layout-3)
