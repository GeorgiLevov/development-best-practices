> Full index: [index.md](index.md)

# Build frosted-glass headers with `backdrop-filter` and legible fallbacks

**When to use**: When a sticky header, toolbar, or card should blur the content behind it.

**Rule**: Use `backdrop-filter: blur()` (with the `-webkit-` prefix for older Safari) plus a semi-opaque `background` so text stays legible, and wrap the glass styles in `@supports` with a much more opaque default for unsupported browsers (support is ~97%). For realistic glass, move the backdrop onto an absolutely-positioned child that is `height: 200%` and trim it with `overflow: hidden` or `mask-image` so nearby content is included in the blur, and add a top gradient to hide flicker as content leaves the viewport.

**Example**:
```css
header {
  position: sticky;
  top: 0;
  background: hsl(0deg 0% 100% / 0.95);
}
@supports (backdrop-filter: blur(12px)) or (-webkit-backdrop-filter: blur(12px)) {
  header {
    background: hsl(0deg 0% 100% / 0.5);
    -webkit-backdrop-filter: blur(12px);
    backdrop-filter: blur(12px);
  }
}
```

**Avoid**: Fully transparent blurred headers where busy content makes navigation text unreadable, or shipping the glass without an opaque fallback.

**Source**: [Backdrop Filters — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/09-little-big-details/01.03-backdrop-filters), [Next-level frosted glass with backdrop-filter — Josh W. Comeau](https://joshwcomeau.com/css/backdrop-filter)
