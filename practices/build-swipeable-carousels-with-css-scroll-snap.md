> Full index: [index.md](index.md)

# Build swipeable carousels with CSS scroll snap

**When to use**: When horizontally scrolling lists (cards, artists, onboarding screens) should settle on items.

**Rule**: Put `overflow: auto` and `scroll-snap-type: x mandatory` (or `proximity` for gentler snapping near points) on the scroll container and `scroll-snap-align: start | center` on children; use `center` with partial-width items to preview neighbours. Scroll snap has ~97.5% support and degrades to normal scrolling, so no JS carousel library is needed for basic snapping. Test outside iframes, where snapping may need focus.

**Example**:
```css
.artists {
  display: flex;
  gap: 16px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
}
.artist-card {
  min-width: calc(100% - 64px);
  scroll-snap-align: center;
}
```

**Avoid**: Re-implementing momentum and snapping in JavaScript, or using `mandatory` on items taller/wider than the viewport, which can make content unreachable.

**Source**: [Scroll Snapping — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/09-little-big-details/10.02-scroll-snapping), [CSS Scroll Snap — Can I use](https://caniuse.com/css-snappoints)
