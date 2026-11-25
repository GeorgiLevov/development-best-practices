> Full index: [index.md](index.md)

# Fix non-sticking `position: sticky` flex children with `align-self: flex-start`

**When to use**: When placing a `position: sticky` sidebar or header beside taller sibling content inside a flex container.

**Rule**: Because flex containers default to `align-items: stretch`, a sticky flex child stretches to match the tallest sibling's height—leaving zero room to stick. Set `align-self: flex-start` (or `height: fit-content`) on the sticky flex item so its box stays sized to its own content and can travel down the parent track.

**Example**:
```css
.docs-shell { display: flex; gap: 32px; }
.docs-sidebar {
  position: sticky;
  top: 24px;
  align-self: flex-start;
}
```

**Avoid**: Leaving a `position: sticky` flex child with default `align-self: stretch` and wondering why it never moves on scroll.

**Source**: [Exercises: Sticky Sidebar — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/04-flexbox/12-exercises)
