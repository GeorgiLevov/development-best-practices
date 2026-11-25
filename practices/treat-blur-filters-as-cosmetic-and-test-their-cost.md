> Full index: [index.md](index.md)

# Treat `filter: blur()` as cosmetic and test its rendering cost

**When to use**: When blurring images or content, e.g. spoilers, quiz answers, hover reveals, or decorative glows.

**Rule**: Remember `blur()` only obscures pixels: screen-reader users still get the content, so functional concealment (quiz answers, spoilers, gated text) also needs `aria-hidden="true"` (or not rendering it), removed together with the blur. Crop the soft blurred edge with `overflow: hidden` (plus `border-radius`) on a wrapper when you want a crisp edge, and use a large blurred, scaled copy of a gradient behind an element for a soft glow. Blur is expensive even with hardware acceleration, so profile it on low-end devices.

**Example**:
```html
<style>
  .answer[data-revealed="false"] { filter: blur(6px); }
  .answer-frame { overflow: hidden; border-radius: 8px; }
</style>
<div class="answer-frame">
  <p class="answer" data-revealed="false" aria-hidden="true">Paris</p>
</div>
```

**Avoid**: Relying on a visual blur to hide answers or private data, or animating large blurs on long pages without testing on budget phones.

**Source**: [Blur Filter — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/09-little-big-details/01.02-blur-filter)
