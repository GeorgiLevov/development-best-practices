> Full index: [index-canvas.md](index-canvas.md)

# Paint Canvas cells with a locked drag mode and a decoupled simulation tick

**When to use**: When a Canvas grid is both a painting surface (Game of Life, tile maps, cellular automata) and a time-stepped simulation.

**Rule**: Map pointer events through the canvas’s `getBoundingClientRect()`, not raw `clientX / CELL_SIZE` — subtract `rect.left`/`rect.top` and divide by cell size, or painted cells drift as the page scrolls or the canvas is offset. On `pointerdown`, *lock* the mode to paint or erase from the first cell’s current state, and keep that mode for the whole drag so the cursor does not flip cells it passes twice. Draw every animation frame, but step the simulation on its own interval (for example ~100 ms / 10 Hz). Do not run the automaton inside the render loop: paint stays immediate, ticks stay stable across refresh rates. Cancel the tick timer and rAF on teardown, and skip or pause the simulation when `prefers-reduced-motion` is set if the motion itself is essential rather than state.

**Example**:
```js
function cellAt(event, canvas, cellSize) {
  const r = canvas.getBoundingClientRect();
  const col = Math.floor((event.clientX - r.left) / cellSize);
  const row = Math.floor((event.clientY - r.top) / cellSize);
  return [col, row];
}
// pointerdown: paintMode = !grid[row][col]
// pointermove (if buttons): grid[row][col] = paintMode
// setInterval(stepSimulation, 100)  // independent of rAF draw
```

**Avoid**: Indexing cells with `clientX / CELL_SIZE` (forgets the canvas offset), toggling each cell on every move (drag-erase becomes a flicker), or stepping the simulation only once per `rAF` frame so tick rate follows the display.

**Source**: [Conway’s Game of Life — Whimsical Animations](https://courses.joshwcomeau.com/wham/animation-challenges/10-conways-game-of-life), [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)
