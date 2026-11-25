> Full index: [index.md](index.md)

# Blend custom scrollbars subtly and only for fine pointers

**When to use**: When default scrollbars clash with an app's theme (e.g., dark sidebars or code panels).

**Rule**: Restyle scrollbars only to help them blend in, never to make them unrecognizable. Use the standard `scrollbar-color: <thumb> <track>` (now ~94% supported across Chrome 121+, Firefox, and Safari 26.2+) and keep `::-webkit-scrollbar` pseudo-elements only as a legacy fallback (they reset native styling, so add `border`/`border-radius` and a `:hover` state). Wrap the styles in `@media (pointer: fine)` so mobile overlay scrollbars stay native.

**Example**:
```css
@media (pointer: fine) {
  html {
    scrollbar-color: hsl(210deg 10% 40%) hsl(210deg 15% 15%);
  }
}
```

**Avoid**: Bright, novelty scrollbars that users mistake for borders, or overriding mobile overlay scrollbars.

**Source**: [Scrollbar Colors — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/09-little-big-details/10.03-scrollbar-colors), [CSS scrollbar styling — Can I use](https://caniuse.com/css-scrollbar)
