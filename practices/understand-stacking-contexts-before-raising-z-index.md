> Full index: [index.md](index.md)

# Understand stacking contexts before raising `z-index`

**When to use**: When an element with a high `z-index` still renders behind another element on the page.

**Rule**: Recognize that `z-index` only compares elements within the same stacking context, and an ancestor's stacking context caps all descendants atomically. Check for properties that silently create stacking contexts—such as `opacity < 1`, `transform`, `filter`, `backdrop-filter`, `clip-path`, `mix-blend-mode`, `position: fixed`/`sticky`, flex/grid items with `z-index`, and `isolation: isolate`—before escalating `z-index`.

**Example**:
```css
/* .parent creates a stacking context at z-index: 1,
   so .child (z-index: 9999) stays behind .sibling (z-index: 2). */
.parent { position: relative; z-index: 1; }
.child { position: relative; z-index: 9999; }
.sibling { position: relative; z-index: 2; }
```

**Avoid**: Cranking `z-index` to `99999` blindly when the real culprit is an ancestor's `transform`, `opacity`, or `z-index` creating a lower stacking context.

**Source**: [Stacking Context — MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context), [Stacking Contexts — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/02-rendering-logic-2/07-stacking-contexts)
