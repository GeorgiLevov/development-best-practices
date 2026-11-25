> Full index: [index.md](index.md)

# Use `:has()` for parent, previous-sibling, and global state styling

**When to use**: When styles depend on a descendant, a following sibling, or state elsewhere in the document (e.g., an open modal).

**Rule**: Use `:has()` (~96% support) to style parents by their contents (`figure:has(figcaption)`), previous siblings (`p:has(+ figure)`, `.item:has(~ .active)`), states (`.pad:has(.handle:active)`), and document-wide conditions (`html:has([data-disable-document-scroll="true"]) { overflow: hidden; }`) instead of JS effects that sync classes. Performance is generally fine (verify with DevTools Selector Stats). Keep `:has()` for enhancements or guard with `@supports selector(:has(*))`, and switch to component state when selectors become sprawling or the data is dynamic.

**Example**:
```css
html:has([data-disable-document-scroll="true"]) {
  overflow: hidden;
}
p:has(+ figure),
figure + p {
  font-weight: bold;
}
.xy-pad:has(.handle:active, .handle:focus-visible) {
  --dot-color: var(--color-primary);
}
```

**Avoid**: Writing `useEffect` code to toggle classes on `<html>` for scroll locking, building core features on long hard-coded `:has()` chains better handled in JS state, or using pseudo-elements inside `:has()` (not allowed).

**Source**: [:has — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/09-little-big-details/13-has), [Using :has() as a CSS Parent Selector and much more — WebKit](https://webkit.org/blog/13096/css-has-pseudo-class/), [CSS :has() Interactive Guide — Ahmad Shadeed](https://ishadeed.com/article/css-has-guide/), [Selecting previous siblings with CSS :has() — Tobias Ahlin](https://tobiasahlin.com/blog/previous-sibling-css-has/), [Level Up Your CSS Skills With The :has() Selector — Smashing Magazine](https://www.smashingmagazine.com/2023/01/level-up-css-skills-has-selector/), [Selector Stats — Chrome for Developers](https://developer.chrome.com/docs/devtools/performance/selector-stats)
