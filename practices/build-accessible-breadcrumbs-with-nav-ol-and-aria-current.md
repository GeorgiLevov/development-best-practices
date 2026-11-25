> Full index: [index.md](index.md)

# Build accessible breadcrumbs with `<nav>`, `<ol>`, `aria-current`, and CSS separators

**When to use**: When implementing hierarchical breadcrumb navigation.

**Rule**: Wrap the trail in `<nav aria-label="Breadcrumb">` containing an ordered list (`<ol>`), mark the current page item with `aria-current="page"`, and render visual slash separators using CSS (such as a rotated `border-right` on `::before` with `content: ''`) rather than literal `/` text so screen readers do not announce "slash" between every link.

**Example**:
```css
.crumb + .crumb::before {
  content: '';
  display: inline-block;
  height: 0.8em;
  border-right: 1px solid currentColor;
  transform: rotate(15deg);
  margin-inline: 12px;
}
```

**Avoid**: Rendering plain `<div>` trails with literal `/` characters or omitting `aria-current="page"` on the current page link.

**Source**: [Breadcrumb Pattern — WAI-ARIA APG](https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/), [Breadcrumb Example — WAI-ARIA](https://www.w3.org/TR/wai-aria-practices/examples/breadcrumb/index.html), [Breadcrumbs — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/03-components/11-breadcrumbs)
