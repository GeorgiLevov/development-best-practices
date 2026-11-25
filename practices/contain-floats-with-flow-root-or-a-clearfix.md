> Full index: [index.md](index.md)

# Contain floats with `display: flow-root` or a clearfix

**When to use**: When a container holding a floated image collapses and the float spills out the bottom.

**Rule**: Floats are taken out of flow, so parents ignore their height. Use `clear` to push following content below a float, and make the container wrap its floats with `display: flow-root` (creates a new block formatting context) or the classic `.clearfix::after { content: ''; display: block; clear: both; }`. Keep floats for text-wrapping; use Flexbox/Grid for layout.

**Example**:
```css
.media-block {
  display: flow-root;
}
/* Legacy equivalent */
.clearfix::after {
  content: '';
  display: block;
  clear: both;
}
```

**Avoid**: Adding `overflow: hidden` to contain floats (it clips focus rings and shadows) or using floats to build page layouts.

**Source**: [Floats — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/09-little-big-details/12-floats)
