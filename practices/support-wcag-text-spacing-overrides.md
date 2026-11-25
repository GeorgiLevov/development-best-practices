> Full index: [index.md](index.md)

# Support WCAG 1.4.12 text-spacing overrides

**When to use**: When building cards, headings, nav items, or fixed-width text regions.

**Rule**: Ensure no text is cut off, overlapping, or unusable when a user stylesheet overrides spacing to: `line-height` >= 1.5x, paragraph spacing >= 2x font-size, `letter-spacing` >= 0.12x, and `word-spacing` >= 0.16x. Avoid fixed heights that clip expanded text.

**Example**:
```css
/* Test bookmarklet override values without breaking layout: */
* {
  line-height: 1.5 !important;
  letter-spacing: 0.12em !important;
  word-spacing: 0.16em !important;
}
```

**Avoid**: Locking text containers to fixed heights or `overflow: hidden` without a way to view truncated text.

**Source**: [Understanding SC 1.4.12: Text Spacing — W3C WAI](https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html)
