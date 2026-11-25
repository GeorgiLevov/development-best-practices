> Full index: [index-animation.md](index-animation.md)

# Animate DOM mutations with same-document View Transitions, classes, and interrupt-safe hit targets

**When to use**: When transitioning cards, grids, lists, dialogs, or slideshows across DOM additions, removals, or reordering with `document.startViewTransition()`.

**Rule**: Always feature-detect `if (!document.startViewTransition)` so unsupported browsers execute the DOM update immediately, and honor `prefers-reduced-motion`—either skip `startViewTransition` when motion is essential, or gate spatial keyframes on `::view-transition-old(...)`/`::view-transition-new(...)` inside `@media (prefers-reduced-motion: no-preference)` so users still get a gentle cross-fade. Assign unique `view-transition-name`s to animated nodes, use `view-transition-class` to style shared groups (`::view-transition-group(.cls)`), and reach for `view-transition-name: match-element` (~86% support) only when reordering/updating the *same* persistent DOM elements. Because `::view-transition` paints in a top-layer overlay that blocks pointer events and `:root` captures the entire page by default, reset `:root { view-transition-name: none; }`, set `::view-transition { pointer-events: none; }`, and keep interactive controls separate from overlapping transitioning regions (or without a `view-transition-name`). Adjust `z-index` on `::view-transition-group(name)` to layer exits behind moving siblings, use fast ease-out curves for tolerable interrupts, and prefer Motion layout FLIP when smooth mid-flight interruptions are critical.

**Example**:
```css
:root { view-transition-name: none; }
::view-transition { pointer-events: none; }
.card {
  view-transition-name: match-element;
  view-transition-class: grid-card;
}
::view-transition-group(.grid-card) {
  animation-duration: 450ms;
  animation-timing-function: cubic-bezier(0.08, 0.25, 0, 1);
}
```
```js
const update = () => reorderCards();
if (!document.startViewTransition) update();
else document.startViewTransition(update);
```

**Avoid**: Leaving `:root` captured when buttons need to stay clickable mid-transition, assigning duplicate `view-transition-name`s to mounted nodes (which aborts the transition), or omitting a `document.startViewTransition` fallback.

**Source**: [Basic Syntax — Whimsical Animations](https://courses.joshwcomeau.com/wham/03-advanced-interactions/07.01-vt-syntax), [View Transition Classes — Whimsical Animations](https://courses.joshwcomeau.com/wham/03-advanced-interactions/07.04-vt-classes), [Interrupts — Whimsical Animations](https://courses.joshwcomeau.com/wham/03-advanced-interactions/07.05-vt-interrupts), [Same-document view transitions — Chrome for Developers](https://developer.chrome.com/docs/web-platform/view-transitions/same-document)
