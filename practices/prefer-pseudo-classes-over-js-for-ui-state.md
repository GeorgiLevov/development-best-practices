> Full index: [index.md](index.md)

# Prefer CSS pseudo-classes over JS for UI state

**When to use**: When styling interactive hover, focus, checked, disabled, or validation states.

**Rule**: Use native CSS pseudo-classes (`:hover`, `:focus-visible`, `:checked`, `:disabled`, `:invalid`, `:placeholder-shown`) instead of attaching JavaScript event listeners and state booleans purely for visual state changes.

**Example**:
```css
button:hover {
  color: hsl(220deg 80% 45%);
}
input:checked + label {
  font-weight: 700;
}
```

**Avoid**: Managing `isHovered` or `isFocused` state in JavaScript when CSS tracks the DOM state natively.

**Source**: [Pseudo-classes — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/00-recap/04.01-pseudo-classes), [Pseudo-classes — MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)
