> Full index: [index.md](index.md)

# Avoid CSS named colors in production

**When to use**: When moving from quick prototypes or demos into production styling.

**Rule**: Use named colors (`red`, `tomato`, `dodgerblue`) only as temporary placeholders or in minimal teaching demos. Replace them with structured `hsl()`/`oklch()` values in production, since the 140-color list is small and inconsistent (e.g., `darkgray` is lighter than `gray`).

**Example**:
```css
/* Prototype placeholder */
.debug-box { border: 2px solid tomato; }
/* Production token */
.alert-box { border: 2px solid hsl(9deg 100% 60%); }
```

**Avoid**: Relying on named color pairs like `gray` and `darkgray` for predictable contrast.

**Source**: [Color Formats in CSS — Josh W. Comeau](https://www.joshwcomeau.com/css/color-formats/)
