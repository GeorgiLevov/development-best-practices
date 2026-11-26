> Full index: [index.md](index.md)

# Compose dynamic color tokens with CSS variables

**When to use**: When implementing runtime themes, dark mode, or hover/active shade variations.

**Rule**: Store color channel fragments (hue, saturation, lightness) in CSS custom properties and compose variants with `calc()`. Unlike Sass color functions, CSS variables update dynamically in the browser via JS or media queries. Do not wrap a custom property in Sass's `rgb()` helper (`rgb(var(--brand), 0.5)`): Sass compiles it without error, but the browser receives something like `rgb(#32301a, .5)`, which is invalid. If you need a compile-time alpha of a hex token, keep it as a Sass `$variable` (see [Use Sass `rgb()` color tricks with a comma alpha, never with `var()`](use-sass-rgb-color-functions-with-comma-alpha-not-var.md)) or store channels up front.

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

**Avoid**: Baking static Sass color-function outputs when runtime theming is needed, or writing `rgb(var(--token), .5)` and trusting a clean Sass compile.

**Source**: [Color Formats in CSS — Josh W. Comeau](https://www.joshwcomeau.com/css/color-formats/), [Color functions with custom properties — Beyond CSS](https://module-1.beyondcss.dev/lessons/color-functions-with-custom-properties)
