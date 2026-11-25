> Full index: [index-canvas.md](index-canvas.md)

# Offload CPU-heavy Canvas loops to Web Workers with `OffscreenCanvas`

**When to use**: When expensive Canvas computation or dense particle/noise rendering would starve the main thread and cause jank in UI interactions or DOM/SVG animations.

**Rule**: Transfer a `<canvas>` control buffer to a Web Worker using `canvas.transferControlToOffscreen()` (~96% browser support) and `worker.postMessage({ type: 'init', offscreenCanvas, width, height, dpr }, [offscreenCanvas])` so `draw()` runs on a separate CPU core while the main thread stays responsive. Feature-detect `'OffscreenCanvas' in window` (or `typeof OffscreenCanvas !== 'undefined'`) before calling `transferControlToOffscreen()`, and guard with a one-time transfer flag so `transferControlToOffscreen()` is never invoked twice on the same `<canvas>` (which throws `InvalidStateError`). Because Workers have no `window` or `document`, measure `getBoundingClientRect()` and `window.devicePixelRatio` on the main thread, forward `{ type: 'resize', width, height, dpr }` messages on `resize`, call `self.requestAnimationFrame` inside the Worker (never deprecated `commit()`), and stub `canvas.style = { width: 0, height: 0 }` if passing an `OffscreenCanvas` to libraries like Three.js.

**Example**:
```js
// main.js
if (typeof OffscreenCanvas !== 'undefined' && !hasTransferred) {
  hasTransferred = true;
  const offscreenCanvas = canvas.transferControlToOffscreen();
  const { width, height } = canvas.getBoundingClientRect();
  worker.postMessage(
    { type: 'init', offscreenCanvas, width, height, dpr: window.devicePixelRatio },
    [offscreenCanvas]
  );
}
```
```js
// draw.worker.js
self.onmessage = ({ data }) => {
  if (data.type === 'init') {
    canvas = data.offscreenCanvas;
    ctx = canvas.getContext('2d');
    applySize(data.width, data.height, data.dpr);
    self.requestAnimationFrame(loop);
  } else if (data.type === 'resize') {
    applySize(data.width, data.height, data.dpr);
  }
};
```

**Avoid**: Calling `transferControlToOffscreen()` twice on the same DOM `<canvas>`, accessing `window`/`document` inside the Worker, or calling the deprecated `ctx.commit()` API instead of `self.requestAnimationFrame()`.

**Source**: [Offscreen Canvas — Whimsical Animations](https://courses.joshwcomeau.com/wham/04-canvas/08-offscreen-canvas), [vanilla-offscreen-canvas-example](https://github.com/joshwcomeau/vanilla-offscreen-canvas-example), [working-with-canvas-in-react](https://github.com/joshwcomeau/working-with-canvas-in-react), [OffscreenCanvas — web.dev](https://web.dev/articles/offscreen-canvas)
