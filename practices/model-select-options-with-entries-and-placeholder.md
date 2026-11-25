> Full index: [index-react.md](index-react.md)

# Build `<select>` menus from `Object.entries()` with an explicit empty placeholder

**When to use**: When rendering controlled `<select>` dropdowns from a dictionary or map of option values and display labels.

**Rule**: Store option value-to-label mappings in a plain constant object (or array of `{ value, label }` entries) and render `<option>` elements with `Object.entries(DICT).map(([value, label]) => ...)`. When no option should be silently pre-chosen on mount, initialize state to `''` and render a leading `<option value="">` placeholder (paired with `required` so native validation blocks unchosen submissions). Always bind `value` + `onChange` on controlled controls—reserve `defaultValue` strictly for uncontrolled inputs.

**Example**:
```jsx
const COUNTRIES = { US: 'United States', CA: 'Canada', BG: 'Bulgaria' };

function CountrySelect({ country, onChange }) {
  return (
    <select value={country} onChange={(e) => onChange(e.target.value)} required>
      <option value="">— Select a country —</option>
      {Object.entries(COUNTRIES).map(([code, name]) => (
        <option key={code} value={code}>
          {name}
        </option>
      ))}
    </select>
  );
}
```

**Avoid**: Leaving out an empty placeholder when `state === ''` (browsers visually default to the first `<option>` while React state remains `''`), or passing `defaultValue` to a controlled `<select>`.

**Source**: [Forms Exercises — Joy of React](https://courses.joshwcomeau.com/joy-of-react/02-state/04.04-exercises), [Other Form Controls — Joy of React](https://courses.joshwcomeau.com/joy-of-react/02-state/04.03-other-form-controls)
