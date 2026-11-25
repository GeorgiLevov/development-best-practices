> Full index: [index.md](index.md)

# Give positioned or standalone `<svg>` elements explicit dimensions to prevent collapse

**When to use**: When rendering an `<svg>` illustration inside `position: fixed`, `position: absolute`, or flex/grid wrappers without intrinsic sizing.

**Rule**: An `<svg>` that relies only on `viewBox` without explicit `width`/`height` attributes or CSS dimensions can collapse to `0×0` inside `position: fixed` or shrink-to-fit containers and appear to vanish. Set explicit CSS `width`, `height`, or `min-height` on the SVG or its positioned wrapper.

**Example**:
```css
.character-wrapper {
  position: fixed;
  top: 15%;
  left: 60%;
  bottom: 5%;
  min-height: 500px;
}
.character-wrapper svg {
  height: 100%;
  width: auto;
}
```

**Avoid**: Positioning an unsized `<svg>` with `position: fixed` and debugging why it renders invisibly at `0px` width or height.

**Source**: [character-creator-v2 (Exercise 2 note) — CSS for JavaScript Developers](https://github.com/css-for-js/character-creator-v2)
