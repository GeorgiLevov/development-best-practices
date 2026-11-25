> Full index: [index.md](index.md)

# Verify browser support before dropping fallbacks

**When to use**: When adopting newer CSS features like native nesting or `oklch()` in production.

**Rule**: Check live compatibility tables (such as Can I Use) against your audience requirements before dropping fallback declarations or build-time flattening tools.

**Example**:
```css
.card {
  color: hsl(210deg 90% 45%); /* Fallback */
  color: oklch(0.55 0.18 250); /* Progressive enhancement */
}
```

**Avoid**: Assuming a feature works for all users solely because it works in your local evergreen browser.

**Source**: [Media Queries — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/00-recap/03-media-queries), [Color — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/00-recap/05-color), [CSS Nesting — Can I use](https://caniuse.com/css-nesting), [Oklab and OkLCh — Can I use](https://caniuse.com/wf-oklab)
