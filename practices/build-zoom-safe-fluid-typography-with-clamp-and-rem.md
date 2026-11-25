> Full index: [index.md](index.md)

# Build zoom-safe fluid typography with `clamp()`, `vw`, and `rem`

**When to use**: When scaling display headings fluidly across viewport widths.

**Rule**: Never write fluid typography purely in `vw` (e.g., `font-size: 5vw`), because `vw` ignores browser zoom and locks text size for low-vision users (violating WCAG 1.4.4 200% resize). Combine `vw` with a `rem` floor inside `clamp(minRem, Xvw + Yrem, maxRem)` (avoiding `rem` subtraction that shrinks the zoomable baseline), verify 200% zoom expands the heading properly, and add `min-height: 0vh` on containers if older Safari freezes fluid recalculation during resize.

**Example**:
```css
h1 {
  font-size: clamp(2rem, 4vw + 1rem, 3.5rem);
}
```

**Avoid**: Using `font-size: clamp(1.5rem, 4vw, 3rem)` without a `rem` component in the middle formula, which prevents zoom from enlarging text across mid-sized viewports.

**Source**: [Fluid Typography — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/05-responsive-css/15-fluid-typography), [Understanding SC 1.4.4 Resize Text — W3C](https://www.w3.org/WAI/WCAG21/Understanding/resize-text.html)
