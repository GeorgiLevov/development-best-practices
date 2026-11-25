> Full index: [index.md](index.md)

# Guard `<img>` intrinsic sizing inside Flexbox containers

**When to use**: When placing `<img>` elements directly inside `display: flex` rows or columns.

**Rule**: Because `<img>` is a replaced element with intrinsic width, height, and aspect ratio, direct `<img>` flex children resist shrinking below their natural width (`min-width: auto`) and split extra space unevenly even with `flex: 1` / `flex: 2`. Either wrap each image in a sized flex-item `<div>` with `img { display: block; width: 100%; }`, or set `min-width: 0` (and `width: 0` when `flex-grow` should dictate proportions).

**Example**:
```css
.gallery-row { display: flex; gap: 12px; }
.gallery-row .photo-slot { flex: 1; min-width: 0; }
.gallery-row img { display: block; width: 100%; }
```

**Avoid**: Putting `flex: 1` and `flex: 2` directly on bare `<img>` tags and expecting a crisp 1:2 width ratio across container resizes.

**Source**: [Images and Flexbox — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/06-typography-and-media/15-flexbox-interactions)
