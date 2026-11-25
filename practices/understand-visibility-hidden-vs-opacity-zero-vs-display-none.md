> Full index: [index.md](index.md)

# Distinguish `visibility: hidden`, `opacity: 0`, and `display: none`

**When to use**: When hiding UI elements visually, keeping reserved layout space, or fading interactive controls in and out.

**Rule**: Choose hiding properties deliberately: `display: none` removes layout space, clicks, focus, and screen-reader output; `visibility: hidden` keeps reserved layout space while disabling clicks, Tab focus, and screen-reader output (and is inherited, so a descendant can opt back in with `visibility: visible`); `opacity: 0` hides only pixels—leaving controls clickable, Tab-focusable, and announced—so pair `opacity: 0` with `inert`, `visibility: hidden`, or `pointer-events: none` + `disabled` when closed.

**Example**:
```css
.tooltip[data-open='false'] {
  opacity: 0;
  visibility: hidden;
  transition: opacity 200ms, visibility 200ms;
}
```

**Avoid**: Leaving closed menus, drawers, or collapsed answers at `opacity: 0` alone where keyboard users still Tab onto invisible links and buttons.

**Source**: [Hidden Content — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/02-rendering-logic-2/18-hidden-content)
