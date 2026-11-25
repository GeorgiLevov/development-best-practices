> Full index: [index-animation.md](index-animation.md)

# Use standalone `translate`, `rotate`, and `scale` when two keyframes must not clobber each other

**When to use**: When one element needs two simultaneous transform animations (for example a continuous spin plus a breath scale, or a bounce translate plus squash-and-stretch) that would otherwise write the same `transform` property.

**Rule**: `transform` is a single CSS property; two `@keyframes` that both set `transform` cannot compose — the later (or shorthand-conflicting) declaration wins. The standalone properties `translate`, `rotate`, and `scale` animate independently and combine with a **fixed** order: `scale`, then `rotate`, then `translate` (declaration order in the stylesheet does not change this). Syntax is space-separated, not comma-separated (`scale: 1.25 0.75`; `translate: 20px -50px`). A single `translate` value moves X only; a single `scale` value scales both axes. There are no `scaleX`/`translateY` properties — use an identity on the other axis (`scale: 1.25 1`, `translate: 0 123px`). Prefer classic `transform` when you need skew, 3D (`rotateX`), a custom operation order, or deeper browser support (`transform` dates to IE9; standalone properties are ~95% as of 2026). Reach for the standalone properties when independent keyframes or simpler split concerns outweigh those limits.

**Example**:
```css
.elem {
  animation: spin 8s linear infinite, breathe 1s ease-in-out infinite;
}
@keyframes spin { to { rotate: 360deg; } }
@keyframes breathe {
  from { scale: 1; }
  to   { scale: 1.15; }
}
```

**Avoid**: Driving spin and scale from two `transform` keyframes (one will overwrite the other), expecting `translate: 50px` after `rotate: 90deg` in the stylesheet to apply translate-first, or using standalone properties for skew/3D transforms they cannot express.

**Source**: [Standalone Functions — Whimsical Animations](https://courses.joshwcomeau.com/wham/animation-primer/02.02-standalone-functions), [CSS `translate` — Can I use](https://caniuse.com/mdn-css_properties_translate), [2D CSS transforms — Can I use](https://caniuse.com/transforms2d)
