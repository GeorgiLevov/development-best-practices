> Full index: [index.md](index.md)

# Separate `position: sticky` tracks from `overflow: hidden` content containers

**When to use**: When an article or main column needs `overflow: hidden` to contain horizontal overflow while a side rail (social icons, TOC) must remain `position: sticky`.

**Rule**: Because any ancestor with `overflow: hidden` disables `position: sticky`, move the sticky rail out into a parallel sibling wrapper (`position: absolute; width: 100%; height: 100%;`) sharing the same centered `max-width` column while keeping `overflow: hidden` on the main content wrapper (use `overflow: clip` when modern browser support suffices and no separate overlay track is needed).

**Example**:
```html
<style>
  .centered-stuff:not(.floating) { overflow: hidden; }
  .centered-stuff.floating { position: absolute; width: 100%; height: 100%; }
  .centered-stuff.floating .max-width-wrapper { height: 100%; }
  .social-wrapper { position: sticky; top: 32px; }
</style>
<main>
  <div class="centered-stuff floating">
    <div class="max-width-wrapper"><aside class="social-wrapper">...</aside></div>
  </div>
  <div class="centered-stuff">
    <div class="max-width-wrapper"><article class="main-article">...</article></div>
  </div>
</main>
```

**Avoid**: Placing `position: sticky` inside an `overflow: hidden` container and wondering why it stops sticking, or removing overflow protection and reintroducing horizontal scrollbars.

**Source**: [scrollburglars (Exercise 3: Blog example) — CSS for JavaScript Developers](https://github.com/css-for-js/scrollburglars)
