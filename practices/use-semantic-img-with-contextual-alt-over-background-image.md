> Full index: [index.md](index.md)

# Use semantic `<img>` with contextual `alt` text for meaningful images

**When to use**: When adding photos, logos, illustrations, or product thumbnails to a page.

**Rule**: Use `<img>` (never CSS `background-image`) for any semantically meaningful image so screen readers, SEO, and broken-image fallbacks work. Write concise `alt` text describing the image's content *and* contextual function (e.g., `"Acme logo - Home"`), place photographer/artist credits in `<figcaption>` rather than `alt`, and set exact `alt=""` (no space inside quotes) only when an image is genuinely decorative or redundant with adjacent text.

**Example**:
```html
<figure>
  <img src="/pass.jpg" alt="Snowy mountain pass at sunrise overlooking a pine valley." />
  <figcaption>Photo by C. Essess</figcaption>
</figure>
```

**Avoid**: Putting meaningful product or content photos into `background-image` just to crop them, writing `"Image of..."`, or omitting `alt` attributes entirely.

**Source**: [Images — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/06-typography-and-media/13-images), [Your Image Is Probably Not Decorative — Smashing Magazine](https://www.smashingmagazine.com/2021/06/img-alt-attribute-alternate-description-decorative/), [Alternative Text — WebAIM](https://webaim.org/techniques/alttext), [Great Alt Text — Deque](https://www.deque.com/blog/great-alt-text-introduction/)
