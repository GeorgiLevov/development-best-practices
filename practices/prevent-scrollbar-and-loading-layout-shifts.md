> Full index: [index.md](index.md)

# Prevent scrollbar and data-loading layout shifts (CLS)

**When to use**: When pages grow after async data loads, causing a scrollbar to appear and content to jump.

**Rule**: Reserve the scrollbar gutter with `html { scrollbar-gutter: stable; }` (~96% support; add it to other critical scroll containers since it isn't inherited, and watch for quirks with `position: fixed`). Avoid the older `body { overflow-y: scroll }` trick where possible, because it turns `body` into a scroll container and can lose scroll position after fullscreen video. Also give images known dimensions (`width`/`height` or `aspect-ratio`, storing dimensions with your data), and consider grouping related async sections so they appear together.

**Example**:
```css
html {
  scrollbar-gutter: stable;
}
.story-image {
  width: 100%;
  height: auto;
  aspect-ratio: 3 / 2;
  object-fit: cover;
}
```

**Avoid**: Letting the first scrollbar appearance shift the entire layout, or rendering many independently loading sections that each push content down.

**Source**: [Scroll Optimization — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/09-little-big-details/10.04-scroll-optimization), [Prevent unwanted Layout Shifts caused by Scrollbars with scrollbar-gutter — Bram.us](https://www.bram.us/2021/07/23/prevent-unwanted-layout-shifts-caused-by-scrollbars-with-the-scrollbar-gutter-css-property/), [scrollbar-gutter — Can I use](https://caniuse.com/mdn-css_properties_scrollbar-gutter)
