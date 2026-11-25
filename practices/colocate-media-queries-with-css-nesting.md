> Full index: [index.md](index.md)

# Co-locate media queries with CSS nesting

**When to use**: When organizing responsive overrides for elements and components.

**Rule**: Nest `@media` queries inside the component or element rule they affect rather than grouping all tablet or mobile styles in separate distant blocks. If you need broad legacy browser coverage, flatten nested rules at build time.

**Example**:
```css
.wrapper {
  padding: 24px;

  @media (max-width: 48rem) {
    padding: 12px;
  }
}
```

**Avoid**: Scattering one component's layout rules across separate global desktop, tablet, and mobile sections.

**Source**: [Media Queries — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/00-recap/03-media-queries), [CSS Nesting — Can I use](https://caniuse.com/css-nesting)
