> Full index: [index.md](index.md)

# Theme `::selection` highlights through CSS variables

**When to use**: When customizing text-selection colors globally or per region (e.g., light vs dark sections).

**Rule**: Style a single global `::selection` rule that reads CSS variables (`--selection-color`, `--selection-background`) and override the variables on sections, because some browsers still don't inherit `::selection` styles into child elements like `<em>`. Keep the pair high-contrast, consider whether your audience may be confused by non-default selection colors, and remember iOS Safari ignores `::selection` (~84% global support).

**Example**:
```css
::selection {
  color: var(--selection-color);
  background-color: var(--selection-background);
}
html {
  --selection-color: hsl(25deg 100% 20%);
  --selection-background: hsl(55deg 100% 60%);
}
.dark-section {
  --selection-color: white;
  --selection-background: hsl(260deg 80% 40%);
}
```

**Avoid**: Writing `p::selection { ... }` per element (nested inline elements keep the default highlight in some browsers) or low-contrast selection pairs.

**Source**: [Selection Colors — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/09-little-big-details/04.02-selection-colors), [CSS Pseudo-Elements Level 4 — Highlight cascade](https://drafts.csswg.org/css-pseudo/#highlight-cascade), [::selection — Can I use](https://caniuse.com/css-selection)
