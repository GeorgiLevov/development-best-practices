> Full index: [index.md](index.md)

# Overfill sliding drawers with negative edge margins when easing overshoots

**When to use**: When a drawer or sidebar slides in from a screen edge using a spring or overshooting `cubic-bezier(...)` curve (`y > 1`).

**Rule**: An overshooting curve briefly animates past `translateX(0%)`, pulling the drawer's anchored edge away from the viewport and flashing a gap behind it. Add an `--overfill` width buffer (`width: calc(300px + var(--overfill))`), anchor the edge off-screen with matching negative margin (`margin-right: calc(var(--overfill) * -1)`), and inset edge controls (such as a close button) by `var(--overfill)`.

**Example**:
```css
.drawer {
  --overfill: 16px;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: calc(300px + var(--overfill));
  margin-right: calc(var(--overfill) * -1);
  animation: slideIn 500ms both cubic-bezier(0, 0.6, 0.32, 1.06);
}
.drawer-close { position: absolute; top: 10px; right: var(--overfill); }
```

**Avoid**: Using bouncy `cubic-bezier` or spring curves on edge-flush drawers without an overfill buffer, exposing a strip of backdrop behind the drawer mid-bounce.

**Source**: [sole-and-ankle-animated-v2 (Exercise 3: Modal enter animation) — CSS for JavaScript Developers](https://github.com/css-for-js/sole-and-ankle-animated-v2)
