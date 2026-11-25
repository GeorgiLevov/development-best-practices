> Full index: [index.md](index.md)

# Keep DOM order aligned with visual flex order

**When to use**: When arranging sidebars, tables of contents, or action buttons inside a flex container.

**Rule**: Place elements in HTML in the order keyboard and screen-reader users expect to encounter them (for example, putting a Table of Contents before `<main>` in the DOM when it sits on the right visually, or ordering content logically). Never rely on `flex-direction: row-reverse` or CSS `order` to reorder unrelated interactive sections, because `Tab` navigation follows DOM order, not CSS visual order.

**Example**:
```html
<div class="article-layout">
  <aside class="toc">...</aside>
  <main class="content">...</main>
</div>
```

**Avoid**: Using `flex-direction: row-reverse` on forms, navigation bars, or article layouts where focus jumps unexpectedly backwards across the screen.

**Source**: [Ordering — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/04-flexbox/10-ordering)
