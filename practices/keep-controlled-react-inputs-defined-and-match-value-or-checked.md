> Full index: [index-react.md](index-react.md)

# Keep controlled React inputs defined and match `value` vs `checked`

**When to use**: When binding React state to `<input>`, `<textarea>`, `<select>`, checkboxes, radio groups, or specialty inputs (`range`, `color`).

**Rule**: Never initialize controlled input state to `undefined` (`useState()`): React treats `value={undefined}` as uncontrolled and warns as soon as state becomes defined. Initialize strings to `''`, `<select>`/`radio` state to a valid option from a shared `OPTIONS` constant, and `<input type="color">` to a hex code. Bind `value` + `onChange` (`e.target.value`) for text, `<textarea>`, `<select>`, `range`, and `color` (coercing `Number(e.target.value)` for numeric inputs), and bind `checked` + `onChange` for checkboxes (`e.target.checked` or a `{ [key]: boolean }` map) and radios (shared `name`, distinct `option` parameter to avoid shadowing state). Use controlled inputs whenever UI needs live input values; React 19 Actions (`useActionState`) suit submit-only forms.

**Example**:
```jsx
const [volume, setVolume] = React.useState(50);

<input
  type="range"
  min={0}
  max={100}
  value={volume}
  onChange={(e) => setVolume(Number(e.target.value))}
/>
```

**Avoid**: Leaving `useState()` empty on a controlled input, forgetting `Number(...)` on `range`/`number` inputs, or shadowing state names inside `.map((val) => checked={val === val})`.

**Source**: [Data Binding — Joy of React](https://courses.joshwcomeau.com/joy-of-react/02-state/04.01-data-binding), [Other Form Controls — Joy of React](https://courses.joshwcomeau.com/joy-of-react/02-state/04.03-other-form-controls), [Bonus: Input Cheatsheet — Joy of React](https://courses.joshwcomeau.com/joy-of-react/02-state/11-bonus-cheatsheet), [HTML `<input>` types — MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types)
