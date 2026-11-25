> Full index: [index.md](index.md)

# Prefer variable fonts when using three or more weights or styles

**When to use**: When a design uses several font weights, italics, or optical/custom variation axes.

**Rule**: Use a variable `.woff2` font (~97.4% support) declaring a weight range (e.g., `font-weight: 300 900`) when a UI needs multiple weights—one file replaces 4–6 separate downloads and eliminates "ransom note" mixed-font flashes. Use standard properties (`font-weight`, `font-style`, `font-stretch`) for standard axes, reserving `font-variation-settings` for custom axes like `"CASL"` or `"MONO"`.

**Example**:
```css
@font-face {
  font-family: 'Recursive';
  src: url('/fonts/recursive-var.woff2') format('woff2');
  font-weight: 300 1000;
  font-display: fallback;
}
h2 { font-weight: 650; }
```

**Avoid**: Loading six separate static `.woff2` files when a single variable font covers the same weights at lower total payload, or setting `wght` via `font-variation-settings` instead of `font-weight`.

**Source**: [Variable Fonts — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/06-typography-and-media/11-variable-fonts), [Google Fonts CSS2 API](https://developers.google.com/fonts/docs/css2), [Variable fonts — Can I use](https://caniuse.com/variable-fonts)
