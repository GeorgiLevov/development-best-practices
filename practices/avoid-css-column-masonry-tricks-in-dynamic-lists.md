> Full index: [index.md](index.md)

# Avoid CSS-column or `order` masonry tricks for dynamic feeds

**When to use**: When building Pinterest-style card grids, photo galleries, or infinite-scroll feeds.

**Rule**: Avoid faking masonry with CSS `columns` or `flex-flow: column wrap` + `nth-child`/`order`: CSS `columns` orders keyboard Tab navigation vertically top-to-bottom per column and reshuffles existing cards whenever new items append; Flexbox `order` hacks require hardcoded fixed container heights and extra break elements. Use standard CSS Grid rows, a measured JS Masonry layout, or native CSS Grid masonry once broadly supported.

**Example**:
```css
.feed-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  gap: 16px;
}
```

**Avoid**: Building infinite-scroll card feeds with `columns: 3` where loading page 2 rearranges every card the user already saw.

**Source**: [Masonry Layouts — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/06-typography-and-media/05-masonry-layout), [CSS masonry with flexbox — Tobias Ahlin](https://tobiasahlin.com/blog/masonry-with-css/)
