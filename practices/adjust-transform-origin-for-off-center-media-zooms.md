> Full index: [index.md](index.md)

# Shift `transform-origin` toward off-center subjects in hover-zoom media

**When to use**: When scaling product photos or portraits on hover/focus (`transform: scale(...)`) where the main subject isn't vertically or horizontally centered.

**Rule**: Check where the focal subject actually sits inside the frame before zooming. With default `transform-origin: 50% 50%`, an object sitting low in the frame (such as sneakers resting near the bottom of studio shots) drops even lower toward the cropped bottom edge as the image scales up. Move `transform-origin` toward the subject (e.g., `50% 75%`) so the zoom expands smoothly around it.

**Example**:
```css
.shoe-image-frame {
  border-radius: 16px 16px 4px 4px;
  overflow: hidden;
}
.shoe-image {
  display: block;
  width: 100%;
  transform-origin: 50% 75%;
  transition: transform 600ms;
}
@media (hover: hover) and (prefers-reduced-motion: no-preference) {
  .shoe-card:hover .shoe-image,
  .shoe-card:focus-visible .shoe-image {
    transform: scale(1.1);
    transition: transform 200ms;
  }
}
```

**Avoid**: Leaving `transform-origin: center` on off-center product photography and watching subjects get pushed toward or clipped by the bottom edge on hover.

**Source**: [sole-and-ankle-animated-v2 (Exercise 1: Sneaker Zoom) — CSS for JavaScript Developers](https://github.com/css-for-js/sole-and-ankle-animated-v2)
