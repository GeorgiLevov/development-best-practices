> Full index: [index-animation.md](index-animation.md)

# Drive interruptible typewriter typography with jittered timeouts and sprite SFX

**When to use**: When text should appear one character at a time, with uneven human-like cadence, and the effect can be retriggered before it finishes.

**Rule**: Prefer a recursive `setTimeout` over `setInterval` so each delay can vary (base delay plus jitter; a slightly longer pause after a space or punctuation). Capture the timeout ID and **cancel it** when the trigger fires again or the component unmounts, then reset the visible string before starting a new run — never let two typists race. Keep the source string in a data attribute or prop (`data-text`) rather than reading the live DOM text you are mutating. Fade the caret out with a short delayed keyframe (`animation-delay` + `forwards`) once typing completes. If you add key-click SFX, play a Howler/`use-sound` sprite (or random `playbackRate`) per character, keep it quiet, and honor the same mute and reduced-motion gates as other UI sounds.

**Example**:
```js
let timer;
function typeWriter(el, text, i = 0) {
  window.clearTimeout(timer);
  if (i === 0) el.textContent = '';
  if (i >= text.length) return;
  el.textContent += text[i];
  const punct = /[\s.,!?]/.test(text[i]);
  const delay = (punct ? 90 : 45) + Math.random() * 40;
  timer = window.setTimeout(() => typeWriter(el, text, i + 1), delay);
}
```

**Avoid**: Using a fixed `setInterval` that cannot change delay per character, forgetting to `clearTimeout` on retrigger, or leaving a blinking caret and stacked typists after a second click.

**Source**: [Typewriter Effect — Whimsical Animations](https://courses.joshwcomeau.com/wham/animation-challenges/02-typewriter-effect), [Add subtle UI sound effects with audio sprites, `use-sound`/Howler, and explicit mute controls](add-tasteful-ui-sound-effects-with-sprites-and-mute-controls.md)
