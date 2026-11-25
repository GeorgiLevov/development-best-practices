> Full index: [index.md](index.md)

# Prefer inline SVG icons over icon fonts and set `display: block`

**When to use**: When rendering UI icons inside buttons, links, or status indicators.

**Rule**: Prefer inline SVGs (or tree-shakeable SVG icon components) over icon fonts for sharper rendering, multi-color support, and cleaner sizing with `width`/`height`. Set `display: block` on `<svg>` elements inside tight icon buttons (`& > svg { display: block; }` is an acceptable adoption rule for third-party icon wrappers) to remove inline descender spacing, and give icon-only controls a `.visually-hidden` label (or `aria-hidden="true"` on decorative icons paired with visible text).

**Example**:
```jsx
<IconButton>
  <HelpCircle aria-hidden="true" />
  <span className="visually-hidden">Open help center</span>
</IconButton>
```
```css
button > svg { display: block; }
```

**Avoid**: Shipping icon fonts that flash missing-glyph tofu characters or read garbled symbols to screen readers, or leaving `<svg>` as `display: inline` inside zero-padding buttons.

**Source**: [Icons — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/06-typography-and-media/12-icons), [Your Image Is Probably Not Decorative — Smashing Magazine](https://www.smashingmagazine.com/2021/06/img-alt-attribute-alternate-description-decorative/)
