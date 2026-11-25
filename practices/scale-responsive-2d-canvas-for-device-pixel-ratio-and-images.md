> Full index: [index-canvas.md](index-canvas.md)

# Scale responsive 2D Canvases for `devicePixelRatio` and load raster/SVG sprites safely

**When to use**: Whenever initializing a `<canvas>`, handling window resizes, drawing crisp paths/text, or painting external/SVG images onto a 2D context.

**Rule**: Size `<canvas>` visually with CSS (`width`/`height`/`aspect-ratio`), then set its HTML `width` and `height` attributes to `rect.width * window.devicePixelRatio` and `rect.height * window.devicePixelRatio` and call `ctx.scale(dpr, dpr)` so drawing coordinates stay in logical CSS pixels while backing pixels map 1:1 to Retina/high-DPR hardware. For responsive canvases, rerun sizing on `window` `resize` and store logical bounds in a mutable `canvasDimensions` object (never primitive numbers captured once at startup); prefer `window` `resize` over `ResizeObserver` when `ResizeObserver` callback timing causes single-frame blank flickers, and note setting `canvas.width`/`height` resets context transform/style state cleanly. Always wrap paths in `ctx.beginPath()` before `fill()`/`stroke()`, apply `image-rendering: pixelated` only when crisp pixel-art upscaling is desired, and draw sprites via `new Image()` + `img.addEventListener('load', ...)` + `ctx.drawImage()`. When encoding inline SVG sprites as `data:image/svg+xml` URLs, include `xmlns="http://www.w3.org/2000/svg"` (omitting it throws a `broken` `HTMLImageElement` error in `drawImage`), and use `createImageBitmap` on servers whose CSP blocks data URIs.

**Example**:
```js
export function setupCanvas(canvas) {
  const ctx = canvas.getContext('2d');
  const canvasDimensions = { width: 0, height: 0 };

  function update() {
    const dpr = window.devicePixelRatio || 1;
    const { width, height } = canvas.getBoundingClientRect();
    canvas.setAttribute('width', width * dpr);
    canvas.setAttribute('height', height * dpr);
    ctx.scale(dpr, dpr);
    canvasDimensions.width = width;
    canvasDimensions.height = height;
  }

  update();
  window.addEventListener('resize', update);
  return { ctx, canvasDimensions, cleanup: () => window.removeEventListener('resize', update) };
}
```

**Avoid**: Leaving `canvas.width`/`height` at their `300x150` defaults on high-DPR screens, calling `ctx.scale(dpr, dpr)` repeatedly without resetting canvas dimensions, or omitting `xmlns` in SVG data URIs passed to `drawImage()`.

**Source**: [Pixel Ratios — Whimsical Animations](https://courses.joshwcomeau.com/wham/04-canvas/01.02-pixel-ratio), [Drawing Commands — Whimsical Animations](https://courses.joshwcomeau.com/wham/04-canvas/01.03-drawing-commands), [Drawing Images — Whimsical Animations](https://courses.joshwcomeau.com/wham/04-canvas/01.04-loading-images), [Responsive Canvases — Whimsical Animations](https://courses.joshwcomeau.com/wham/04-canvas/02.02-responsive-canvas)
