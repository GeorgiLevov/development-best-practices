> Full index: [index.md](index.md)

# Respect OS subpixel font smoothing for dark-on-light body text

**When to use**: When configuring global typography resets or styling dark-mode / dark-header text.

**Rule**: Leave `font-kerning` enabled for crisp glyph spacing, and do not blanket-apply `-webkit-font-smoothing: antialiased` across light-background body copy—subpixel anti-aliasing preserves sharper strokes for dark text on light backgrounds. Reserve `antialiased` specifically for light text on dark backgrounds on macOS (where subpixel rendering can look overly thick).

**Example**:
```css
.dark-hero {
  background: hsl(220deg 20% 10%);
  color: hsl(0deg 0% 98%);
  -webkit-font-smoothing: antialiased;
}
```

**Avoid**: Putting `-webkit-font-smoothing: antialiased` on `body` in every starter reset, which blurs and thins dark body prose.

**Source**: [Text Rendering — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/06-typography-and-media/02-text-rendering), [Please Stop Fixing Font Smoothing — UsabilityPost](https://usabilitypost.com/2012/11/05/stop-fixing-font-smoothing/)
