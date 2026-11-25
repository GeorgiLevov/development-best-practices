> Full index: [index.md](index.md)

# Apply `border-radius` directly to images instead of clipping card wrappers

**When to use**: When cards or avatars have rounded image corners alongside protruding badges or ribbon flags.

**Rule**: Apply `border-radius` directly to the `<img>` (or its dedicated image-only wrapper) rather than putting `overflow: hidden` on the outer card container. That keeps corners rounded while allowing overlapping corner ribbons, status dots, or interactive badges to extend cleanly past the card edge.

**Example**:
```css
.product-card { position: relative; }
.product-card img {
  display: block;
  width: 100%;
  border-radius: 12px 12px 4px 4px;
}
```

**Avoid**: Using `overflow: hidden` on an entire card wrapper to round one inner image and accidentally clipping decorative flags or `position: sticky` descendants.

**Source**: [Workshop Solution: Sole & Ankle — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/04-flexbox/14-workshop-solution)
