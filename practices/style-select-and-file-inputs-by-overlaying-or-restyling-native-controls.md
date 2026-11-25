> Full index: [index.md](index.md)

# Style `<select>` and file inputs by overlaying or restyling native controls

**When to use**: When building custom-looking dropdown `<select>` or `<input type="file">` controls.

**Rule**: Keep native keyboard, screen-reader, and mobile picker behavior intact either by stretching an `opacity: 0` native control (`appearance: none` so Safari respects `height: 100%`) over a custom presentation styled via sibling combinators (`${NativeSelect}:focus + &`), or by stripping default chrome with `appearance: none` (plus `-webkit-appearance: none`) and setting `pointer-events: none` on custom overlay icons.

**Example**:
```css
.native-select {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  appearance: none;
}
.native-select:focus + .visual-select {
  outline: 2px solid royalblue;
}
```

**Avoid**: Rebuilding `<select>` dropdowns from scratch with `<div>` click handlers, or placing a custom chevron above a visible `<select>` without `pointer-events: none`.

**Source**: [Select — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/03-components/19-workshop-select), [CSS Appearance — Can I use](https://caniuse.com/css-appearance), [Next-sibling combinator — MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Adjacent_sibling_combinator)
