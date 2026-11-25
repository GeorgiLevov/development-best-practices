> Full index: [index-ui-engineering.md](index-ui-engineering.md)

# Prevent global keyboard shortcuts from colliding with focused buttons and inputs

**When to use**: When registering `window` or `document` `keydown`/`keyup` shortcuts (Spacebar play/pause, arrow navigation, single-key hotkeys) alongside interactive controls.

**Rule**: Guard global keyboard listeners against active form fields (`INPUT`, `TEXTAREA`, `SELECT`, `isContentEditable`) and handle collisions with focused interactive controls. Pressing `Space` or `Enter` on a focused `<button>` triggers the button's native `click` event *and* bubbles the `keydown` event up to `window`—firing actions twice (for example, toggling play then immediately pausing again). Call `event.stopPropagation()` on the button's `onKeyDown` (for conflicting keys like `Space`) or check `event.target` in the global listener so one keystroke never fires both handlers.

**Example**:
```jsx
<button
  type="button"
  onClick={togglePlay}
  onKeyDown={(event) => {
    if (event.code === 'Space') {
      event.stopPropagation();
    }
  }}
>
  {isPlaying ? 'Pause' : 'Play'}
</button>
```

**Avoid**: Attaching an unguarded `window.addEventListener('keydown', ...)` for `Space` or letter keys without filtering editable targets or stopping propagation from focused controls.

**Source**: [Stale Values Exercises — Joy of React](https://courses.joshwcomeau.com/joy-of-react/03-hooks/05.09-stale-values-exercises)
