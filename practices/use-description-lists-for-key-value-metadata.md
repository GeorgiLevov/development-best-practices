> Full index: [index-ui-engineering.md](index-ui-engineering.md)

# Use `<dl>`, `<dt>`, and `<dd>` for key-value metadata pairs

**When to use**: When rendering structured label-value metadata such as contact cards, product specs, or glossaries.

**Rule**: Use a semantic description list (`<dl>`) with `<dt>` for each term/label and `<dd>` for its value instead of generic `<div>` and `<span>` pairs. When styling layout columns or cards per pair, HTML permits wrapping each `<dt>`/`<dd>` group in a `<div>` directly inside `<dl>`.

**Example**:
```html
<dl class="metadata-list">
  <div>
    <dt>Role</dt>
    <dd>Staff Engineer</dd>
  </div>
  <div>
    <dt>Location</dt>
    <dd>Denver, CO</dd>
  </div>
</dl>
```

**Avoid**: Reaching for `<div>` or `<ul>` with ad-hoc `<strong>Label:</strong>` text when representing clean key-value pairs.

**Source**: [Children — Joy of React](https://courses.joshwcomeau.com/joy-of-react/01-fundamentals/03.04-children), [The Description List element `<dl>` — MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl)
