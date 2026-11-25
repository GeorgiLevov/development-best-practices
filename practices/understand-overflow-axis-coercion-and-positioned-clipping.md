> Full index: [index.md](index.md)

# Account for `overflow` axis coercion and positioned containing blocks

**When to use**: When clipping horizontal overflow or cropping `position: absolute` / `position: fixed` children inside containers.

**Rule**: Remember two CSS `overflow` quirks: setting `overflow-x: hidden` while leaving `overflow-y: visible` silently coerces `overflow-y` to `auto` (use `overflow-x: clip` to clip one axis without creating a scroll container), and `overflow: hidden`/`clip` only clips a `position: absolute` child if the `overflow` box is its containing block (`position: relative`). `position: fixed` escapes ancestor `overflow` clipping unless a transformed ancestor captures it.

**Example**:
```css
.card {
  position: relative;
  overflow: clip;
  border-radius: 8px;
}
.banner {
  overflow-x: clip;
}
```

**Avoid**: Writing `overflow-x: hidden; overflow-y: visible;` expecting vertical popovers to spill out, or putting `overflow: hidden` on a static parent hoping to crop an `absolute` child anchored higher up the tree.

**Source**: [Scroll Containers — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/02-rendering-logic-2/14.1-scroll-containers), [Overflow in Positioned Layout — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/02-rendering-logic-2/14.3-positioned-layout)
