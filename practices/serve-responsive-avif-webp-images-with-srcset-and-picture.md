> Full index: [index.md](index.md)

# Serve high-DPI AVIF/WebP images with `srcset` and `<picture>`

**When to use**: When delivering raster photos or illustrations across Retina/high-DPI screens and variable bandwidths.

**Rule**: Supply resolution variants via `srcset` (`srcSet` in JSX) alongside a baseline `src` fallback so high-DPI screens get sharp assets without penalizing `1x` screens. When serving modern formats, wrap `<img alt="..." />` in `<picture>` with `<source type="image/avif">` first and `<source type="image/webp">` second (or use a framework component like `next/image`), keeping all `alt` attributes and visual styles on the inner `<img>` rather than `<source>`.

**Example**:
```html
<picture>
  <source type="image/avif" srcset="/hero.avif 1x, /hero@2x.avif 2x" />
  <source type="image/webp" srcset="/hero.webp 1x, /hero@2x.webp 2x" />
  <img src="/hero.jpg" alt="Trail runner crossing a ridge" />
</picture>
```

**Avoid**: Styling `<source>` elements, omitting the fallback `<img>` inside `<picture>`, or placing JPEG/PNG `<source>` tags above AVIF.

**Source**: [Responsive Images — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/06-typography-and-media/16-responsive-images), [AVIF has landed — Jake Archibald](https://jakearchibald.com/2020/avif-has-landed/), [AVIF — Can I use](https://caniuse.com/avif), [next/image — Next.js Docs](https://nextjs.org/docs/api-reference/next/image)
