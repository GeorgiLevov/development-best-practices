> Full index: [index.md](index.md)

# Keep body text and form inputs at least `16px` (`1rem`) on mobile

**When to use**: When choosing responsive font sizes for body text, headings, and form controls.

**Rule**: Keep body copy at least `16px` (`1rem`) across both desktop and mobile (viewing distance is closer on phones, not smaller text), scale down oversized display headings on narrow viewports so long words do not overflow horizontally, and ensure every `<input>`, `<select>`, and `<textarea>` renders at `font-size: 1rem` (`16px`) or larger so iOS Safari does not auto-zoom on focus.

**Example**:
```css
body { font-size: 1rem; }
input, select, textarea {
  font-size: max(1rem, 1em);
}
```

**Avoid**: Dropping mobile body text or form inputs to `14px`/`0.875rem` to squeeze more content on screen.

**Source**: [Responsive Typography — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/05-responsive-css/14-responsive-typography), [16 Pixels Font Size: For Body Copy — Smashing Magazine](https://www.smashingmagazine.com/2011/10/16-pixels-body-copy-anything-less-costly-mistake/)
