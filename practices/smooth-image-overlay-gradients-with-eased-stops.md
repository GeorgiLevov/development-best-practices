> Full index: [index.md](index.md)

# Smooth image-overlay gradients with eased color stops

**When to use**: When placing captions or text over photos with a dark-to-transparent scrim.

**Rule**: Linear interpolation leaves a visible hard line where an overlay gradient starts. Simulate an easing curve (e.g., `ease-in-out`) by generating many intermediate color stops with an easing-gradient tool or PostCSS plugin, and paste the result into `background-image` (the generator's snippet omits the property). Native easing between stops is still only a CSSWG proposal.

**Example**:
```css
.caption-scrim {
  background-image: linear-gradient(
    to bottom,
    hsl(0deg 0% 0% / 0) 0%,
    hsl(0deg 0% 0% / 0.05) 19%,
    hsl(0deg 0% 0% / 0.25) 44%,
    hsl(0deg 0% 0% / 0.55) 70%,
    hsl(0deg 0% 0% / 0.85) 100%
  );
}
```

**Avoid**: Two-stop `black → transparent` overlays that create an abrupt band at the top of the scrim.

**Source**: [Easing Gradients — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/09-little-big-details/05.04-easing-gradients), [Gradient Exercises — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/09-little-big-details/05.05-gradient-exercises), [css-images: Add easing functions to color stops (CSSWG issue #1332)](https://github.com/w3c/csswg-drafts/issues/1332)
