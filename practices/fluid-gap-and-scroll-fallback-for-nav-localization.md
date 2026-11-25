> Full index: [index.md](index.md)

# Pair a fluid `clamp()` gap with local `overflow: auto` for resilient navigation bars

**When to use**: When horizontal navigation bars might receive longer category labels from marketing edits or internationalization (i18n).

**Rule**: Do not size desktop breakpoints tightly around English label lengths alone. Give the nav list a fluid `gap: clamp(min, vw-expr, max)` so link spacing compresses smoothly as the viewport shrinks, and add `overflow: auto` on the header container so unusually wide translations scroll locally inside the header instead of triggering page-wide horizontal overflow.

**Example**:
```css
.main-header {
  display: flex;
  align-items: baseline;
  overflow: auto;
}
.desktop-nav {
  display: flex;
  gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
  margin: 0 48px;
}
```

**Avoid**: Fixed `gap: 48px` nav bars that collide with the viewport edge or cause page-wide horizontal scrollbars when labels are translated into German or French.

**Source**: [sole-and-ankle-revisited-v2 (Exercise 5: Fluid desktop navigation) — CSS for JavaScript Developers](https://github.com/css-for-js/sole-and-ankle-revisited-v2)
