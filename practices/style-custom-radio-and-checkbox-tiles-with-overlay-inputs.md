> Full index: [index.md](index.md)

# Build custom radio and checkbox tiles by overlaying native inputs

**When to use**: When designing segmented radio buttons, swatch pickers, or custom checkbox cards.

**Rule**: Keep native radio/checkbox keyboard arrows, form semantics, and screen-reader states intact by placing the `<input type="radio">` (or `checkbox`) inside a `position: relative` container with `position: absolute; inset: 0; appearance: none;` over the styled `<label>`. Style the selected and keyboard-focus visuals via `:checked` and `:focus-visible` (e.g., sibling or `:has()` selectors).

**Example**:
```css
.tile-wrapper { position: relative; }
.tile-wrapper input[type='radio'] {
  position: absolute;
  inset: 0;
  margin: 0;
  appearance: none;
  -webkit-appearance: none;
}
.tile-wrapper input:checked + label { background: black; color: white; }
.tile-wrapper input:focus-visible + label { outline: 2px solid royalblue; outline-offset: 2px; }
```

**Avoid**: Implementing radio groups or toggle cards with `<button>` or clickable `<div>` elements that lose native arrow-key navigation and form submission.

**Source**: [Character Select Workshop Solution — CSS for JavaScript Developers](https://courses.joshwcomeau.com/css-for-js/02-rendering-logic-2/20-character-workshop-solution)
