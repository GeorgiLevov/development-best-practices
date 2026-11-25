> Full index: [index.md](index.md)

# HTML Canvas, Particle Loops & Offscreen Workers

> Sub-index of the Development Best Practices collection. Open only the files that match the task.

## Canvas Setup, Loops & Tradeoffs

- [Choose 2D Canvas vs. SVG by animated element count, DOM needs, and text accessibility](choose-canvas-vs-svg-by-element-count-and-accessibility.md): Pick 2D Canvas for hundreds+ moving shapes, SVG for accessible text and smaller interactive graphics, and know when to graduate to `Path2D`, `Matter.js`, or WebGL.
- [Scale responsive 2D Canvases for `devicePixelRatio` and load raster/SVG sprites safely](scale-responsive-2d-canvas-for-device-pixel-ratio-and-images.md): Match backing pixels to `devicePixelRatio`, resize with mutable dimensions, wrap paths in `beginPath()`, and include `xmlns` on SVG data URIs for `drawImage()`.
- [Drive Canvas animation loops with capped `deltaTime`, sub-pixel floats, and `save()`/`restore()` transforms](drive-canvas-loops-with-capped-delta-time-and-transforms.md): Cap `deltaTime` (`<=250ms`) for refresh-rate independence and tab throttling, keep float coordinates, wrap transforms in `save()`/`restore()`, and respect reduced motion.

## Generative Techniques, Workers & React

- [Render Canvas trails, trig/Simplex motion, multi-canvas glows, and Safari-safe connected dots](render-canvas-trails-trigonometry-noise-glows-and-connected-lines.md): Layer semi-transparent trail wipes, `Math.sin`/`cos` & Simplex noise fields (including hover-ripple rings that retract on pointer leave), blurred secondary glow canvases, and `0.01`-nudged round-cap lines for Safari.
- [Offload CPU-heavy Canvas loops to Web Workers with `OffscreenCanvas`](offload-heavy-canvas-rendering-to-workers-with-offscreencanvas.md): Transfer canvas ownership once with `transferControlToOffscreen()`, forward DPR/resize messages from the main thread, and run `requestAnimationFrame` in the Worker.
- [Encapsulate Canvas DPR setup, `rAF` loops, and `OffscreenCanvas` guards cleanly in React](encapsulate-canvas-setup-and-animation-loops-in-react.md): Isolate DPR/resize/`deltaTime` in `<Canvas>`/`useRequestAnimationFrameLoop`, keep frame state in `useRef`, and guard StrictMode with `hasTransferredRef`.
- [Paint Canvas cells with a locked drag mode and a decoupled simulation tick](paint-canvas-cells-with-locked-drag-and-decoupled-simulation-ticks.md): Map pointers through `getBoundingClientRect()`, lock paint vs erase for the whole drag, and step the automaton on its own interval instead of inside `rAF`.
