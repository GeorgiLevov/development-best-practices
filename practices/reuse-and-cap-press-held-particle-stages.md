> Full index: [index-animation.md](index-animation.md)

# Reuse and cap particles across press-and-hold stages

**When to use**: When a pointer-held gesture has two (or more) visual stages that both use particles — for example an inhale/gather followed by a release burst.

**Rule**: Bind `pointerdown` to start the hold stage and `pointerup`/`pointercancel` to trigger the release, and **reuse the same particle nodes** rather than spawning a second burst on top of the first. Cap the live count (a few hundred at most for DOM particles — for example max 200, with a floor so a very short hold still looks like a burst, e.g. min 10). Drive a fill/charge indicator with a short delay so a tap does not flash a progress ring. Respect `prefers-reduced-motion` by skipping or simplifying both stages. Clean up listeners and pending timeouts on release or unmount.

**Example**:
```js
let particles = [];
button.addEventListener('pointerdown', () => {
  particles = spawnInhale({ min: 10, max: 200 });
  showChargeMeter({ delay: 150 });
});
button.addEventListener('pointerup', () => {
  explodeExisting(particles); // reuse, don't append a second set
  hideChargeMeter();
});
```

**Avoid**: Creating a fresh particle set on release while the inhale set is still on screen, letting hold-to-spawn grow without a cap, or flashing the charge indicator on a short click.

**Source**: [Kirby — Whimsical Animations](https://courses.joshwcomeau.com/wham/animation-challenges/01-kirby)
