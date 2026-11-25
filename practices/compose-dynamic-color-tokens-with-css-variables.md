> Full index: [index.md](index.md)

# Compose dynamic color tokens with CSS variables

**When to use**: When implementing runtime themes, dark mode, or hover/active shade variations.

**Rule**: Store color channel fragments (hue, saturation, lightness) in CSS custom properties and compose variants with `calc()`. Unlike Sass color functions, CSS variables update dynamically in the browser via JS or media queries.

**Example**:
```css
:root {
  --brand-hue: 220deg;
  --brand-sat: 85%;
  --brand-lit: 50%;
  --brand: hsl(var(--brand-hue) var(--brand-sat) var(--brand-lit));
  --brand-dark: hsl(var(--brand-hue) var(--brand-sat) calc(var(--brand-lit) - 15%));
}
```

**Avoid**: Baking static Sass color-function outputs when runtime theming is needed.

**Source**: [Color Formats in CSS — Josh W. Comeau](https://www.joshwcomeau.com/css/color-formats/)
