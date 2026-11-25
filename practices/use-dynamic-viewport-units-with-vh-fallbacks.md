> Full index: [index.md](index.md)

# Use `dvh`/`svh` with `vh` fallbacks for mobile full-height layouts

**When to use**: When sizing full-screen heroes, drawers, or app shells to the viewport height.

**Rule**: Standard `100vh` matches the *large* mobile viewport (assuming address bars are hidden), which pushes bottom buttons behind visible toolbars on iOS/Android. Layer `min-height: 100vh;` followed by `min-height: 100dvh;` (dynamic, ~96% support) or `100svh` (small, static) depending on whether resizing during scroll is acceptable; use `border-radius: 100vmax` (or `9999px`) for full pill shapes.

**Example**:
```css
.app-shell {
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
}
```

**Avoid**: Using bare `height: 100vh` on mobile shells without `100dvh`/`100svh` or relying on `100vw` on desktop layouts with scrollbars.

**Source**: [Viewport Units — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/05-responsive-css/11-viewport-units), [Small, Large, and Dynamic viewport units — Can I use](https://caniuse.com/viewport-unit-variants)
