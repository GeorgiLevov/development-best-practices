> Full index: [index-svg.md](index-svg.md)

# Deduplicate repeated SVG geometry with `<defs>` and `<use>` without cross-browser attribute bugs

**When to use**: When rendering multiple layered or repeated instances of a complex SVG `<path>` (e.g., multi-stroke animations or large exported shapes) without bloating SSR HTML.

**Rule**: Place the canonical shape inside `<defs>` with an `id`, then instantiate lightweight clones via `<use href="#id" />` so the browser renders multiple styled copies without duplicating heavy `d` path strings in server-rendered HTML (where JS variable interpolation still repeats markup in SSR output). Keep **all geometry attributes** (`d`, `cx`, `cy`, `r`) complete on the `<defs>` template element and **all presentational/animation attributes** (`stroke`, `fill`, `class`, `style`, `transform`) on the `<use>` instances—mixing `class` on the `<defs>` source breaks in Safari, and partial geometry overrides on `<use>` (like `<use r="30" />`) are ignored across browsers (scale/reposition `<use>` clones via `transform` instead). Remember `<use>` clones live in a Shadow DOM boundary, so external descendant CSS selectors cannot pierce inside `<use>`.

**Example**:
```html
<svg viewBox="0 0 200 200" fill="none">
  <defs>
    <path id="arc-template" d="M 20,100 A 40,40 0 0 1 180,100 Z" />
  </defs>
  <use href="#arc-template" stroke="hsl(45deg 100% 50%)" stroke-dasharray="100,100" />
  <use href="#arc-template" stroke="hsl(190deg 95% 55%)" stroke-dasharray="60,140" />
</svg>
```

**Avoid**: Putting `class` on a `<defs>` template expecting `<use>` clones to inherit it in Safari, or attempting to override `r`/`cx`/`cy` directly as attributes on `<use>`.

**Source**: [Reusable Path Data — Whimsical Animations](https://courses.joshwcomeau.com/wham/02-svg/06-use)
