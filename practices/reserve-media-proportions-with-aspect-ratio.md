> Full index: [index.md](index.md)

# Size proportional media, videos, and iframes with `aspect-ratio`

**When to use**: When images, `<video>`, `<iframe>`, or fluid cards must maintain a consistent ratio across widths.

**Rule**: Set `aspect-ratio: width / height` (e.g., `16 / 9`, `4 / 3`, `1 / 1`) alongside `object-fit: cover` on fluid images, videos, or embeds so heights compute automatically from dynamic widths and reserve layout space before assets load, avoiding legacy `height: 0; padding-bottom: 56.25%` markup hacks.

**Example**:
```css
.thumbnail {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}
```

**Avoid**: Nesting extra `position: relative` / `padding-bottom` percentage-hack wrappers just to keep responsive video embeds or thumbnails proportional.

**Source**: [Aspect Ratio — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/06-typography-and-media/16-aspect-ratio), [aspect-ratio — Can I use](https://caniuse.com/mdn-css_properties_aspect-ratio)
