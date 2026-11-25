> Full index: [index.md](index.md)

# Gate `:hover` and touch sizing with interaction and preference queries

**When to use**: When styling interactive hover animations, touch controls, dark mode, or motion transitions.

**Rule**: Wrap hover effects in `@media (hover: hover) and (pointer: fine)` so touch devices do not get stuck displaying `:hover` states after taps. Increase interactive target sizes to at least `44x44px` under `@media (pointer: coarse)` (e.g., via a shared `--min-tap-height` CSS variable), gate non-essential animations with `@media (prefers-reduced-motion: no-preference)`, and support `@media (prefers-color-scheme: dark)` where themed.

**Example**:
```css
@media (hover: hover) and (pointer: fine) {
  .card:hover { transform: translateY(-2px); }
}
@media (pointer: coarse) {
  html { --min-tap-height: 44px; }
}
```

**Avoid**: Assuming `max-width` implies touch input (tablets and laptops can have touchscreens or mice) or applying jarring motion regardless of `prefers-reduced-motion`.

**Source**: [Other Queries — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/05-responsive-css/06-other-queries), [Media Queries Level 4 — W3C](https://drafts.csswg.org/mediaqueries-4/#mf-interaction), [Interaction Media Features — Can I use](https://caniuse.com/css-media-interaction)
