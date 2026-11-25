> Full index: [index.md](index.md)

# Offset anchor targets below sticky headers with `scroll-margin-top`

**When to use**: When in-page links or `scrollIntoView()` land headings underneath a fixed or sticky header.

**Rule**: Set `scroll-margin-top` on scroll targets (headings, sections, `:target`) to at least the sticky header height so anchors land in view; it works with hash links, `scrollIntoView()`, and scroll snapping in all modern browsers. Derive the value from a shared header-height variable.

**Example**:
```css
:root { --header-height: 4rem; }
h2[id],
section[id] {
  scroll-margin-top: calc(var(--header-height) + 1rem);
}
```

**Avoid**: JavaScript offset math after every anchor click, or invisible spacer elements placed above headings.

**Source**: [Scroll Optimization — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/09-little-big-details/10.04-scroll-optimization), [Element.scrollIntoView() — MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView), [scroll-margin-top — Can I use](https://caniuse.com/?search=scroll-margin-top)
