> Full index: [index.md](index.md)

# Reserve `background-image` for tiling patterns and crisp high-DPI surfaces

**When to use**: When rendering repeating geometric textures, CSS gradient patterns, or purely decorative wallpapers.

**Rule**: Use CSS `background-image` for repeating patterns (`background-repeat: round` or `space` to prevent edge clipping) and purely decorative backgrounds rather than content images. When serving `@2x`/`@3x` raster background tiles via `@media (min-resolution: 2dppx)` (add `-webkit-min-device-pixel-ratio: 2` only if supporting Safari < 16), set `background-size` to the `1x` dimensions so high-DPI tiles scale crisply.

**Example**:
```css
.pattern-banner {
  background-image: url('/pattern.png');
  background-size: 240px;
  background-repeat: round;
  @media (min-resolution: 2dppx) { background-image: url('/pattern@2x.png'); }
}
```

**Avoid**: Swapping `@2x` background images without setting an explicit `background-size` (which doubles the visual tile size instead of sharpening it).

**Source**: [Background Images — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/06-typography-and-media/17-background-images), [Media Queries: resolution feature — Can I use](https://caniuse.com/css-media-resolution)
