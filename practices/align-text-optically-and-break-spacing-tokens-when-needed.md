> Full index: [index.md](index.md)

# Align text optically and step outside spacing tokens when needed

**When to use**: When text inside padded containers, badges, or buttons looks off-center even though the numbers match the mockup.

**Rule**: Web text boxes include line-height/ascender space that design tools render differently, so symmetric padding often looks asymmetric. Judge by perceived alignment: trim leading with `text-box: trim-both cap alphabetic` (`text-box-trim` / `text-box-edge`, ~88% support, now in all major engines) as a progressive enhancement, cancel excess padding with negative margins, and nudge small items (badge counts, icons) with a tiny `transform: translate()` utility. Allow bespoke values outside the spacing scale when optical balance requires it.

**Example**:
```css
.card h2 {
  text-box: trim-both cap alphabetic;
}
@supports not (text-box: trim-both cap alphabetic) {
  .card h2 { margin-top: -0.2em; }
}
.badge-count { transform: translateY(1px); } /* optical nudge */
```

**Avoid**: Copying Figma spacing values verbatim and assuming the result is aligned, or forcing every space onto a token scale even when it visibly misaligns.

**Source**: [Optical Alignment — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/09-little-big-details/09-optical-alignment), [Chasing the Pixel-Perfect Dream — Josh W. Comeau](https://www.joshwcomeau.com/css/pixel-perfection/), [CSS Text Box — Can I use](https://caniuse.com/css-text-box-trim)
