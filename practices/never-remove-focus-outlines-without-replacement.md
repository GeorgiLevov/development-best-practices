> Full index: [index.md](index.md)

# Never remove focus outlines without a replacement

**When to use**: When styling interactive buttons, links, inputs, or custom controls.

**Rule**: Do not apply `outline: none` to hide browser focus rings unless you supply an equally or more visible `:focus` / `:focus-visible` indicator with high contrast for keyboard, voice, and switch-device users.

**Example**:
```css
button:focus-visible {
  outline: 3px solid hsl(220deg 90% 45%);
  outline-offset: 2px;
}
```

**Avoid**: Resetting `*:focus { outline: none; }` globally for aesthetics.

**Source**: [Pseudo-classes — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/00-recap/04.01-pseudo-classes), [HTML button element — MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#clicking_and_focus)
