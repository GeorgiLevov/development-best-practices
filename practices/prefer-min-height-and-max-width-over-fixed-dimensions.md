> Full index: [index.md](index.md)

# Prefer `min-height` and `max-width: 100%` over fixed sizes

**When to use**: When sizing buttons, cards, or text containers that use `rem` widths or could wrap onto multiple lines.

**Rule**: Use `min-height` instead of fixed `height` so containers expand vertically when users scale up text, and add `max-width: 100%` on `rem`-sized elements so large font settings do not overflow mobile viewports.

**Example**:
```css
.cta-button {
  width: 15rem;
  max-width: 100%;
  min-height: 44px;
}
```

**Avoid**: Setting rigid `height: 44px` or uncapped `width: 20rem` that clips wrapped text or causes horizontal scroll.

**Source**: [The Surprising Truth About Pixels and Accessibility — Josh W. Comeau](https://www.joshwcomeau.com/css/surprising-truth-about-pixels-and-accessibility/)
