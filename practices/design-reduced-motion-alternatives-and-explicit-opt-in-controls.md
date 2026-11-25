> Full index: [index-animation.md](index-animation.md)

# Pair reduced-motion guards with non-spatial feedback, loop pause toggles, and optional opt-in controls

**When to use**: When implementing accessible particle bursts, continuous ambient animations, or motion-centric interactive showcases.

**Rule**: When `prefers-reduced-motion` is active, never simply leave interactions dead and silent—preserve clear **non-spatial feedback** (instant color/fill state, subtle opacity fade, or static pop indicator) while skipping flying particles or aggressive scaling (`if (!window.matchMedia('(prefers-reduced-motion: no-preference)').matches) return;` before spawning particles). Always provide a visible play/pause toggle on continuous or looping animations so users can stop motion without changing OS settings. On rare **motion-core experiences** (interactive animation playgrounds or art demos where disabling motion strips the core feature), consider offering an explicit in-page "Enable animations anyway" opt-in override rather than silently stripping controls with no recourse.

**Example**:
```js
btn.addEventListener('click', () => {
  btn.classList.toggle('liked'); // Always give crisp non-spatial fill feedback
  const isLiked = btn.classList.contains('liked');
  const allowMotion =
    userMotionOverride ??
    window.matchMedia('(prefers-reduced-motion: no-preference)').matches;
  if (!isLiked || !allowMotion) return;
  spawnParticles();
});
```

**Avoid**: Returning *before* updating the visual liked/toggled state when reduced motion is enabled, leaving endless animations unpausable, or blocking motion-focused demos with zero case-by-case opt-in.

**Source**: [Motion Accessibility — Whimsical Animations](https://courses.joshwcomeau.com/wham/01-particles/11-motion-accessibility), [Accessibility Exercises — Whimsical Animations](https://courses.joshwcomeau.com/wham/01-particles/11.01-accessibility-exercises), [usePrefersReducedMotion — Josh W. Comeau](https://www.joshwcomeau.com/snippets/react-hooks/use-prefers-reduced-motion/)
