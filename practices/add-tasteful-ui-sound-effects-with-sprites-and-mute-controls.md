> Full index: [index-animation.md](index-animation.md)

# Add subtle UI sound effects with audio sprites, `use-sound`/Howler, and explicit mute controls

**When to use**: When enhancing tactile buttons, toggles, sliders, typewriters, or completion moments with short UI audio feedback.

**Rule**: Keep web UI sound effects strictly **under 1 second**, **never looped or ambient**, **triggered only by direct user gestures** (browsers block non-gesture playback and cross-origin `<iframe>` sandboxes), and **quiet** (`volume: 0.25` starting point, calibrated cleanly beneath a playing YouTube video after trimming silence and normalizing in Audacity; check CC0 licensing on Freesound). The `use-sound` hook is ~1 kB and lazy-loads Howler (~9 kB) on first use; until a user gesture has happened it is a no-op, so autoplay policies do not throw. Preload `Howl` / `use-sound` outside event handlers—never construct `new Audio()` inside a click handler, which delays first playback on network fetch. Bundle multiple subtle mechanical takes and press/release pairs into a single **audio sprite** (`sprite: { a: [startMs, durMs] }` with generous tail padding to avoid clicks), or vary `playbackRate` (`0.5–4`, non-reactive on sprites in `use-sound`, `interrupt: true` when retriggering, `stop()` over `pause()` to free resources and rewind). Always ship a global or per-widget mute button (`soundEnabled`, plus `forceSoundEnabled: true` on the mute toggle itself so it can still click). Pass a static asset URL or import; dynamic `new URL(..., import.meta.url)` paths have historically failed to load ([use-sound#85](https://github.com/joshwcomeau/use-sound/issues/85)).

**Example**:
```js
const [playTick] = useSound('/sfx/ticks.mp3', {
  volume: 0.25,
  soundEnabled,
  sprite: { a: [52, 35], b: [92, 35], c: [132, 35] },
});
const sampleIds = ['a', 'b', 'c'];
// Trigger inside user click/input handler:
playTick({ id: sampleIds[Math.floor(Math.random() * sampleIds.length)] });
```

**Avoid**: Auto-playing or looping background sounds, instantiating `new Audio()` inside `onClick`, shipping loud uncalibrated audio without a UI mute toggle, cutting audio sprite durations flush to the waveform end (causes click artifacts), or loading sprite files via a dynamic `import.meta.url` constructor that Howler never fetches.

**Source**: [Sound Effects — Whimsical Animations](https://courses.joshwcomeau.com/wham/animation-design/04-sound), [Finding Sounds — Whimsical Animations](https://courses.joshwcomeau.com/wham/animation-design/04.01-finding-sounds), [Using Sounds — Whimsical Animations](https://courses.joshwcomeau.com/wham/animation-design/04.02-using-sounds), [Sound Design Tips — Whimsical Animations](https://courses.joshwcomeau.com/wham/animation-design/04.03-sound-design-tips), [`joshwcomeau/use-sound` README](https://github.com/joshwcomeau/use-sound)
