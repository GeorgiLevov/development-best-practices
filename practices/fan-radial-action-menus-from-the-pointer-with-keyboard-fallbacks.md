> Full index: [index-animation.md](index-animation.md)

# Fan radial action menus from the pointer with keyboard, Escape, and tab-out fallbacks

**When to use**: When a long-press or secondary-click should bloom a small set of actions around the interaction point (a Pinterest-style radial menu).

**Rule**: Position the fan in polar space from the event point (`angle`/`distance` with `cos()`/`sin()`, for example 180°/225°/270°). Prefer document coordinates (`clientX`/`clientY` **plus `window.scrollY`**) over `position: fixed`, which fights scrolling mid-gesture. For keyboard activation (`event.detail === 0`, or a non-pointer `event.pointerType`), origin the fan from the control’s center rather than a stale cursor. While the menu is closed, set action buttons to `tabIndex={-1}` (or remove them from the tab order); when it opens, restore tab order, move focus into the menu, and listen for `Escape` to dismiss. Clear the highlight if focus tabs past the last action. Layer a backdrop, the source item, and the menu with explicit `z-index`. Wrap the spatial fan in a `prefers-reduced-motion` guard so reduced-motion users get an instantaneous layout.

**Example**:
```js
function menuOrigin(event, triggerEl) {
  if (event.detail === 0) {
    const r = triggerEl.getBoundingClientRect();
    return { x: r.left + r.width / 2, y: r.top + r.height / 2 + window.scrollY };
  }
  return { x: event.clientX, y: event.clientY + window.scrollY };
}

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMenu();
});
```

**Avoid**: Using `position: fixed` without accounting for scroll, leaving hidden actions in the tab order, ignoring keyboard origin (`event.detail === 0`), or omitting Escape and tab-out dismissals.

**Source**: [Pinterest — Whimsical Animations](https://courses.joshwcomeau.com/wham/animation-challenges/07-pinterest)
