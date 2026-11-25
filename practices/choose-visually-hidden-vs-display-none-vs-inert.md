> Full index: [index.md](index.md)

# Choose `VisuallyHidden`, `display: none`, or `inert` by intent

**When to use**: When hiding UI text visually, removing elements from all users, or disabling background content behind overlays.

**Rule**: Use a `VisuallyHidden` `<span>` (cropped to `1px` with `:not(:focus):not(:active)`, not `display: none`) for screen-reader-only text—preferring it over `aria-label` because `aria-label` is ignored on generic non-interactive elements (`<div>`, `<span>`) and often skipped by browser auto-translators. Use `display: none` or HTML `hidden` to hide from everyone, and set the HTML `inert` attribute (~96.6% support) rather than `aria-hidden="true"` alone to disable background pointer, focus, and screen-reader access behind modals.

**Example**:
```css
.visually-hidden:not(:focus):not(:active) {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  white-space: nowrap;
}
```

**Avoid**: Relying solely on `aria-hidden="true"` to block background UI behind a modal (which leaves hidden links/inputs focusable via Tab), putting `aria-label` on a plain `<div>`/`<span>`, or hiding accessible labels with `display: none`.

**Source**: [VisuallyHidden — Josh W. Comeau](https://www.joshwcomeau.com/snippets/react-components/visually-hidden/), [Conditional Rendering Exercises — Joy of React](https://courses.joshwcomeau.com/joy-of-react/01-fundamentals/07.05-conditional-exercises), [aria-label Does Not Translate — Adrian Roselli](https://adrianroselli.com/2019/11/aria-label-does-not-translate.html), [HTMLElement: inert — Can I use](https://caniuse.com/mdn-api_htmlelement_inert)
