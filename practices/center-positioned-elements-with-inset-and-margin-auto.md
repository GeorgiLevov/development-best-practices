> Full index: [index.md](index.md)

# Center sized positioned elements with `inset: 0` and `margin: auto`

**When to use**: When centering a fixed- or max-sized `position: absolute` or `position: fixed` element over its containing block.

**Rule**: Combine `inset: 0` (or `top: 0; right: 0; bottom: 0; left: 0;` for legacy support) with `margin: auto` on an explicitly sized positioned element so CSS auto-margins center it both axes without tying up the `transform` property.

**Example**:
```css
.modal-card {
  position: fixed;
  inset: 0;
  margin: auto;
  width: min(90vw, 480px);
  height: fit-content;
}
```

**Avoid**: Defaulting to `top: 50%; left: 50%; transform: translate(-50%, -50%)` when `inset: 0; margin: auto` works cleanly and leaves `transform` free for animations.

**Source**: [The Centering Trick — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/02-rendering-logic-2/03-centering-trick)
