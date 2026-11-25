> Full index: [index-canvas.md](index-canvas.md)

# Encapsulate Canvas DPR setup, `rAF` loops, and `OffscreenCanvas` guards cleanly in React

**When to use**: When integrating 2D `<canvas>` or `<OffscreenCanvas>` animations into React components without triggering 60–120 fps re-renders or StrictMode crashes.

**Rule**: Tuck `devicePixelRatio` scaling, resize listeners, and `deltaTime`/`totalTime` tracking into a reusable `<Canvas draw={...} />` wrapper powered by a `useRequestAnimationFrameLoop` hook that stores the latest `draw` callback in a ref and cancels `requestAnimationFrame` on unmount. Keep high-frequency animation coordinates, particles, and velocities in `useRef` rather than `useState`—Canvas draws pixels imperatively without Virtual DOM diffing, so calling `setState` every frame wastes React reconciliation work—and wrap `draw` in `React.useCallback` when passed as a prop. For `<OffscreenCanvas>`, track transfer state with a `hasTransferredRef` boolean (`useRef(false)`) so React StrictMode's double-effect invocation never calls `canvas.transferControlToOffscreen()` twice on the same DOM node, and terminate/clean up the Worker or resize listener cleanly on unmount.

**Example**:
```tsx
function BouncingBoxCanvas() {
  const boxRef = React.useRef({ x: 0, y: 0, size: 20, vx: 110, vy: 75 });

  const draw = React.useCallback(({ ctx, width, height, deltaTime }) => {
    const box = boxRef.current;
    ctx.clearRect(0, 0, width, height);
    box.x += box.vx * deltaTime;
    box.y += box.vy * deltaTime;
    // bounce checks...
    ctx.fillStyle = 'hsl(45deg 100% 50%)';
    ctx.fillRect(box.x, box.y, box.size, box.size);
  }, []);

  return <Canvas style={{ width: 200, height: 200 }} draw={draw} />;
}
```

**Avoid**: Storing per-frame particle arrays in `useState`, omitting `cancelAnimationFrame` in hook cleanup, or calling `transferControlToOffscreen()` inside `useEffect` without a `hasTransferredRef` StrictMode guard.

**Source**: [Canvas in React — Whimsical Animations](https://courses.joshwcomeau.com/wham/04-canvas/10-canvas-in-react), [working-with-canvas-in-react](https://github.com/joshwcomeau/working-with-canvas-in-react)
