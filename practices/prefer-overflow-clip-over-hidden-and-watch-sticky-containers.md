> Full index: [index.md](index.md)

# Prefer `overflow: clip` over `hidden` and guard `position: sticky` ancestors

**When to use**: When trimming visual overflow on decorative boxes or debugging broken `position: sticky` headers and sidebars.

**Rule**: Remember that `overflow: hidden` still creates a scroll container—meaning it can scroll via JS or keyboard focus and traps `position: sticky` elements (even `overflow-x: hidden` on `body`/`html` disables sticky). Use `overflow: clip` (~97% support) to clip visuals without creating a scroll container, test that keyboard focus doesn't disappear off-edge, and verify `sticky` elements have a tall parent track plus no ancestor with `overflow: hidden`/`auto`/`scroll`.

**Example**:
```css
.card {
  overflow: clip;
  border-radius: 12px;
}

.sticky-sidebar {
  position: sticky;
  top: 24px;
  align-self: start;
}
```

**Avoid**: Putting `overflow: hidden` on layout ancestors of `position: sticky` elements, or using `overflow: clip` over scrollable interactive lists without testing Tab focus.

**Source**: [Scroll Containers — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/02-rendering-logic-2/14.1-scroll-containers), [overflow: clip — Can I use](https://caniuse.com/mdn-css_properties_overflow_clip), [position: sticky — Can I use](https://caniuse.com/css-sticky)
