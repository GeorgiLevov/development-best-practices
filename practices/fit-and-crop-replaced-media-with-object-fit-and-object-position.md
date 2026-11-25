> Full index: [index.md](index.md)

# Crop and anchor sized `<img>`/`<video>` with `object-fit` and `object-position`

**When to use**: When rendering `<img>` or `<video>` elements inside fixed or mismatched aspect-ratio boxes.

**Rule**: Because browsers stretch replaced elements (`object-fit: fill`) whenever both `width` and `height` differ from the intrinsic ratio, set `object-fit: cover` (to crop cleanly) or `contain` (to letterbox without cropping), and adjust `object-position` (e.g., `top center` or `left center`) so faces or key focal details stay visible.

**Example**:
```css
.avatar {
  width: 64px;
  height: 64px;
  object-fit: cover;
  object-position: 50% 20%;
}
```

**Avoid**: Setting both `width` and `height` on an `<img>` without `object-fit`, causing portraits or screenshots to squash and stretch.

**Source**: [Fit and Position — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/06-typography-and-media/14-img-fit), [object-fit — Can I use](https://caniuse.com/object-fit)
