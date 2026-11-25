> Full index: [index.md](index.md)

# Set typographic constraints before picking a font

**When to use**: When selecting typefaces for an application or design system.

**Rule**: Define functional constraints first—required weights, italics, optical legibility at small UI sizes, language script support, and monospace alignment for code or tabular data—instead of scrolling a font menu by gut feel.

**Example**:
```text
Checklist before picking a font:
- Needed weights: 400, 500, 700 + italics
- Scripts: Latin + Cyrillic
- Monospace pair needed for code/tables? Yes -> pair sans with a mono face.
```

**Avoid**: Picking a display font purely for how a 48px headline looks without testing 14px UI text or missing weights.

**Source**: [Roboto — Google Fonts (Choosing type)](https://fonts.google.com/specimen/Roboto), [Fonts for Apple platforms — Apple Developer](https://developer.apple.com/fonts/)
