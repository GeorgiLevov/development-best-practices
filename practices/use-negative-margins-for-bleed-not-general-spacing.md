> Full index: [index.md](index.md)

# Reserve negative margins for full-bleed or overlap effects

**When to use**: When extending an image, divider, or card ribbon flush to the outer edge of a padded container.

**Rule**: Use negative inline margins on a `width: auto` block child to pull it cleanly past parent padding, or a slight negative margin for intentional visual overlap (such as overlapping headings or tight avatar stacks). Note that negative horizontal margins on a `width: auto` block expand its width rather than shifting it.

**Example**:
```css
.card {
  padding: 24px;
}

.card-banner {
  margin-inline: -24px;
  padding: 12px 24px;
}
```

**Avoid**: Pairing negative margins with `width: 100%` (which shifts without expanding) or using negative margins as a hack to undo poorly structured sibling margins.

**Source**: [Negative Margins — Quirksmode](http://www.quirksmode.org/blog/archives/2020/02/negative_margin.html), [Margin — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/01-rendering-logic-1/07-margin), [Flow Workshop Solution — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/01-rendering-logic-1/16-flow-workshop-solution)
