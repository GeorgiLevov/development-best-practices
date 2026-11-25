> Full index: [index.md](index.md)

# Let clicks pass through overlay wrappers with `pointer-events`

**When to use**: When a large invisible container (toast region, floating-layout grid, decorative overlay) blocks clicks on content beneath it.

**Rule**: Set `pointer-events: none` on the invisible wrapper and restore `pointer-events: auto` on the children that must stay interactive, so clicks pass through the empty areas. Prefer simpler structure (e.g., a `position: fixed` toast centered with `margin: auto` and `width: fit-content`) when no wrapper is needed. `pointer-events: none` doesn't block keyboard focus, so don't use it to disable controls (~98% support).

**Example**:
```css
.toast-region {
  position: fixed;
  inset: auto 0 32px 0;
  display: grid;
  justify-items: center;
  pointer-events: none;
}
.toast-region .toast {
  pointer-events: auto;
}
```

**Avoid**: Full-width transparent containers that silently swallow clicks on page content, or using `pointer-events: none` alone as a "disabled" state.

**Source**: [Pointer Events — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/09-little-big-details/07-pointer-events), [CSS pointer-events — Can I use](https://caniuse.com/pointer-events)
