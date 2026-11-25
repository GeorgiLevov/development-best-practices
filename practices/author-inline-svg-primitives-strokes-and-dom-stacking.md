> Full index: [index-svg.md](index-svg.md)

# Author inline SVG primitives with explicit strokes, DOM stacking order, and `paint-order` text

**When to use**: When writing interactive, styled, or animated SVGs inline in HTML/React, or outlining SVG/display text.

**Rule**: Inline `<svg>` elements live directly in the DOM, so CSS selectors and transitions target `<circle>`, `<rect>`, `<line>`, `<polygon>`, and `<path>` nodes just like HTML (where CSS rules override SVG presentational attributes). Remember key SVG defaults: shapes render black `fill` by default (ignoring CSS `color-scheme`), so set `fill="none"` on shapes or the parent `<svg>`; `z-index` does nothing—stacking order is strictly DOM order, so reorder nodes directly. Control sharp corners and caps with `stroke-linecap` (`round`/`square`), `stroke-linejoin`, and `stroke-miterlimit` (ratios below `1 / sin(angle / 2)` clamp sharp spikes into bevels). In vanilla JS, create SVG nodes with `document.createElementNS('http://www.w3.org/2000/svg', tag)` (`document.createElement` creates invalid HTML tags; React infers namespaces automatically). For outlined `<text>`, set `paint-order: stroke fill` so strokes don't eat into letterforms (HTML `paint-order` support lags SVG ~88% vs ~97%+, so keep fallback stroke widths legible or layer two `<text>` nodes with `aria-hidden="true"`).

**Example**:
```html
<svg viewBox="0 0 240 120" fill="none">
  <circle cx="80" cy="60" r="36" stroke="oklch(0.85 0.2 160)" stroke-width="6" />
  <text x="120" y="68" text-anchor="middle" dominant-baseline="middle"
        fill="white" stroke="black" stroke-width="6" style="paint-order: stroke fill">
    Hi!
  </text>
</svg>
```

**Avoid**: Relying on `z-index` inside `<svg>`, creating dynamic SVG nodes with `document.createElement('circle')`, or leaving unstyled `<path>`/`<polyline>` fills as default black in dark mode.

**Source**: [The Magic of SVG — Whimsical Animations](https://courses.joshwcomeau.com/wham/02-svg/00-introduction), [Strokes & Fills — Whimsical Animations](https://courses.joshwcomeau.com/wham/02-svg/01.01-strokes-and-fills), [Outlined Text — Whimsical Animations](https://courses.joshwcomeau.com/wham/02-svg/01.03-outlined-text), [SVG Gotchas — Whimsical Animations](https://courses.joshwcomeau.com/wham/02-svg/01.04-svg-gotchas), [`stroke-miterlimit` — MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Attribute/stroke-miterlimit)
